import React, { useState, useEffect } from 'react';
import { Star } from './utils';

const useMedia = query => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

const EffectsMediaExample = () => {
  const isSmall = useMedia('(max-width: 400px)');
  const isLarge = useMedia('(min-width: 800px)');

  return (
    <div className="Media">
      <h1>Media</h1>
      <p>
        Small? <Star filledIn={isSmall} />
      </p>
      <p>
        Large? <Star filledIn={isLarge} />
      </p>
    </div>
  );
};

export default EffectsMediaExample;
