import React from 'react';

export default function SortReviews ({setSort}){
  return (
    <>
    <label htmlFor='Sort'>Sort by: </label>
      <select id='Sort' name='Sort' onChange={(e)=>{setSort(e.target.value)}}>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
        <option value="relevant">Relevant</option>
      </select>
    </>


  );
};