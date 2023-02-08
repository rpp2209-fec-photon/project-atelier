var helpers = {};

helpers.setStars = (Rating)=>{
  var stars = [0, 0, 0, 0, 0];

  for (var x = 0; x < Math.floor(Rating); x++) {
    stars[x] = 1;
  }

  if (Rating % 1 !== 0) {
    if (Rating % 1 < .25) {
      stars[stars.indexOf(0)] = 0.25;
    } else if (Rating % 1 < .50) {
      stars[stars.indexOf(0)] = 0.50;
    } else if (Rating % 1 < .75) {
      stars[stars.indexOf(0)] = 0.75;
    } else {
      stars[stars.indexOf(0)] = 1;
    }
  }

  return stars;
};

helpers.getAverage = (obj)=>{
  var sum = 0;
  for (var x = 0; x < Object.keys(obj).length; x++) {
    sum =+ obj[x];
  }



  return sum/Object.keys(obj).length;
};

module.exports = helpers;