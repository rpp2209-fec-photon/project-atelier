import React from 'react';

export default function SortReviews (){
  return (
    <>
    <label for='Sort'>Sort by: </label>
      <select id='Sort' name='Sort'>
        <option>Helpful</option>
        <option>Newest</option>
        <option>Relevant</option>
      </select>
    </>


  );
};