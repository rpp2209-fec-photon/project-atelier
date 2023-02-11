import React from 'react';

export default function Recommend ({recommend, setRecommend}){

  var handleClick = (e)=>{
    if (e.target.value === 'Yes') {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  };
  return (
    <div>
      <form>
      <p className="inputTitle">*Would you recommend this product? </p>
        <input type="radio" id="Yes" name="Recommend" value="Yes" onClick={handleClick}></input>
        <label htmlFor="Yes">Yes</label>
        <input type="radio" id="No" name="Recommend" value="No" onClick={handleClick}></input>
        <label htmlFor="No">No</label>
      </form>
    </div>
  );
};