import React, { Component, useState } from 'react';

const fullText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sit beatae ipsa laborum ipsum placeat eius optio nisi alias! Voluptatibus quam, tenetur natus dolor laudantium deleniti adipisci sequi accusamus nemo!';

const ShowMoreComponent = () => {
  const shortText = fullText.slice(0, 50);
  const [expanded, setExpanded] = useState(false);
  const [count, incrementCount] = useState(0);

  return (
    <div>
      {expanded ? fullText : shortText}
      <button
        onClick={() => setExpanded(expanded => !expanded)}
        className="nes-btn"
      >
        {expanded ? 'Less' : 'More'}
      </button>
      <br />
      Current count: {count}
      <button onClick={() => incrementCount(count + 1)} className="nes-btn">
        Increment
      </button>
    </div>
  );
};

export default ShowMoreComponent;
