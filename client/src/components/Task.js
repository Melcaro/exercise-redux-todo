import React from 'react';

export const Task = ({ taskName, id }) => {
  return <div key={id}>{taskName}</div>;
};
