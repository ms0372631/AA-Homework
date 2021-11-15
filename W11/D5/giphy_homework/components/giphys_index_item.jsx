import React from 'react';

export const GiphysIndexItem = ({giphys}) => {
  return (
    <li>
      <img src={giphys.images.fixed_height.url} />
    </li>
  );
}