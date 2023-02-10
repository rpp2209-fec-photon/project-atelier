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
      return ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
    case 'Fit':
      return ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
    case 'Length':
      return ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
    case 'Quality':
      return ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
    case 'Comfort':
      return ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
    case 'Width':
      return ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  }
};

helpers.starText = (Rating)=>{
  if (Rating === 1) {
    return "Poor"
  } else if (Rating === 2) {
    return "Fair"
  } else if (Rating === 3) {
    return "Average"
  } else if (Rating === 4) {
    return "Good"
  } else if (Rating === 5) {
    return "Great"
  }
};


module.exports = helpers;