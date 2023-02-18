import React from 'react';

export default function SortReviews ({setSort, setBodyFilter}){
  return (
    <>
    <label htmlFor='Sort'>Sort by: </label>
      <select id='Sort' name='Sort' onChange={(e)=>{setSort(e.target.value)}}>
        <option value="relevant">Relevant</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>


    <label htmlFor='bodyFilter'>Search for review: </label>
    <input type="text" name='bodyFilter' id='bodyFilter' onChange={(e)=>{setBodyFilter(e.target.value)}}></input>
    </>


  );
};