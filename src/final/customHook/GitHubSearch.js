import React, { useState, useEffect } from 'react';
import searchGithub from './searchGithub';

const useGitHubSearch = search => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    searchGithub(search)
      .then(response => {
        setLoading(false);
        setData(response);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, [search]);

  return { data, error, loading };
};

const GithubSearch = ({ search }) => {
  const { data, error, loading } = useGitHubSearch(search);

  if (loading) return 'Loading...';
  if (error) return error;

  return (
    <ul className="nes-list is-disc">
      {data.map(item => (
        <li key={item.id}>
          <a href={item.html_url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default GithubSearch;
