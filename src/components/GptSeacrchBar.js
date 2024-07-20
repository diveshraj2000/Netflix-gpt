import React from 'react';
import lang from '../Utils/languageConstant';
import { useSelector } from 'react-redux';
function GptSeacrchBar() {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  // console.log(lang.langKey.gptSearchPlaceholder);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <buttton className="py-4 px-4 bg-red-700  col-span-2 m-4 text-white rounded-lg text-center text-xl ">
          {lang[langKey].search}
        </buttton>
      </form>
    </div>
  );
}

export default GptSeacrchBar;
