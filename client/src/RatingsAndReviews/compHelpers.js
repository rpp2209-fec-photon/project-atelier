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
  var totalStars = 0;
  var totalRatings = 0;
  for (var x = 1; x < Object.keys(obj).length + 1; x++) {
    totalStars += parseInt(obj[x]) * x;
    totalRatings += parseInt(obj[x]);
  }

  return totalStars/totalRatings;
};

helpers.getTotalReviews = (obj)=>{
  var totalRatings = 0;

  for (var x = 1; x < Object.keys(obj).length + 1; x++) {
    totalRatings += parseInt(obj[x]);
  }

  return totalRatings;
};

helpers.getDescriptors = (characteristics)=>{
  switch (characteristics) {
    case 'Size':
      return ['A size too small', 'A size too wide'];
    case 'Fit':
      return ['Runs tight', 'Runs long'];
    case 'Length':
      return ['Runs short', 'Runs long'];
    case 'Quality':
      return ['Poor', 'Perfect'];
    case 'Comfort':
      return ['Poor', 'Perfect'];
    case 'Width':
      return ['Too narrow', 'Too wide'];
  }
};


module.exports = helpers;