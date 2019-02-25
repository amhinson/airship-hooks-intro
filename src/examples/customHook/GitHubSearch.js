import React, { useState, useEffect } from 'react';
import searchGithub from './searchGithub';

const GithubSearch = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    searchGithub(search).then(resp => setData(resp));
  }, [search]);

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
