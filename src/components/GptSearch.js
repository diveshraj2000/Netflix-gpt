import React from 'react';
import GptSeacrchBar from './GptSeacrchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

import { bg_image } from '../Utils/constant';
function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bg_image} />
      </div>
      <GptSeacrchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch;
