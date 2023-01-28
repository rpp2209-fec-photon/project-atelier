import React from 'react';

export default function ReviewDate ({Date}) {

  var monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var year = Date.substring(0, 4);
  var month = Date.substring(5, 7);
  var day = Date.substring(8, 10);
  return (
    <p className="Review Date">{monthsList[parseInt(month)-1] + ' ' + day + ', ' + year}</p>
  );
};