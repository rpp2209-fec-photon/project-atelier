import React from 'react';

export default function SortReviews (){
  return (
    <>
    <label htmlFor='Sort'>Sort by: </label>
      <select id='Sort' name='Sort'>
        <option>Helpful</option>
        <option>Newest</option>
        <option>Relevant</option>
      </select>
    </>


  );
};