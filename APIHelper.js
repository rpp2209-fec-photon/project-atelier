const axios = require('axios');
const Promise

var APIHelper = {};
var APIURL = `https://app-hrsei-api.herokuapp.com/api/fec2/:SEI-RPP/`;

var token = '';
/*

https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/

In an HTTP GET request, parameters are sent as a query string:

http://example.com/page?parameter=value&also=another
*/


//==================================================================================
//PRODUCTS
//==================================================================================
//page: the page the API returns (Default 1)
//count: how many results per page to return (Default 5)


APIHelper.getProducts = (page, count)=>{

  return new Promise ((fulfill, reject)=>{
    //set the defaults
    if (page === undefined) {
      page = 1;
    }
    if (count === undefined) {
      count = 5;
    }

    //make the url
    var requestUrl = APIURL + `products/?page=${page}&count=${count}`;

    //generate the get request to the URL
    axios.get(requestUrl, { headers: {'Authorization': token}})
    .then(fulfill)
    .catch(reject);
  })
}


//product_id: the id of the product you want information on
APIHelper.getProductInfo = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = APIURL + `products/${product_id}/`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
      }
  })
}

//returns all the styles for the product_id
APIHelper.getProductStyles = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = APIURL + `products/${product_id}/styles/`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
      }
  })
}

//returns the id's of products that relate to the product_id
APIHelper.getRelatedProducts = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = APIURL + `products/${product_id}/related/`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
      }
  })
}

//==================================================================================
//REVIEWS
//==================================================================================

//get the reviews of a product
APIHelper.getReviews = (page, count, sort, product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = APIURL + `reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
      }
  })
}

APIHelper.getMetadata = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = APIURL + `reviews/meta/?product_id=${product_id}`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
      }
  })
}

//input must be an object
/*
{
  product_id int,
  rating int,
  summary text,
  body text,
  recommend bool,
  name text,
  email text,
  photos [text],
  characteristics obj
}
*/
APIHelper.addReview = (review)=>{

  return new Promise ((fulfill, reject)=>{
    //make the url
  var requestUrl = APIURL + `reviews`;

  //generate the get request to the URL
  axios.post(requestUrl, review, { headers: {'Authorization': token}})
  .then(fulfill)
  .catch(reject);
  });

}

APIHelper.markAsHelpful = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    if (product_id === undefined) {
      reject('no product_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `reviews/:review_id/helpful`;

      //generate the get request to the URL
      axios.put(requestUrl, product_id, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  });

}

APIHelper.reportReview = (review_id)=>{

  return new Promise ((fulfill, reject) =>{
    if (review_id === undefined) {
      reject('no review_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `reviews/:review_id/report`;

      //generate the get request to the URL
      axios.put(requestUrl, review_id, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  });
}

//==================================================================================
//Q&A
//==================================================================================

APIHelper.getQuestions = (product_id, page, count)=>{

  return new Promise ((fulfill, reject) =>{
    if (product_id === undefined) {
      reject('no product_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/questions?product_id=${product_id}&page=${page}&count=${count}`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  });
}

APIHelper.getAnswers = (question_id)=>{

  return new Promise ((fulfill, reject) => {
    if (question_id === undefined) {
      reject('no question_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/questions/${question_id}/answers`;

      //generate the get request to the URL
      axios.get(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}

/*
question = {
body: text,
name: text,
email: text,
product_id: int
}
*/
APIHelper.addQuestion = (question)=>{

  return new Promise ((fulfill, reject) => {
    if (question === undefined) {
      reject('no question provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/questions`;

      //generate the get request to the URL
      axios.post(requestUrl, question, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}

/*
answer = {
body: text,
name: text,
email: text,
photos: [text]
}
*/

APIHelper.addAnswer = (question_id, answer)=>{

  return new Promise ((fulfill, reject) => {
    if (answer === undefined) {
      reject('no answer provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/questions/${question_id}/answers`;

      //generate the get request to the URL
      axios.post(requestUrl, answer, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}

APIHelper.markQuestionHelpful = (question_id)=>{

  return new Promise ((fulfill, reject) => {
    if (question_id === undefined) {
      reject('no question_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/questions/${question_id}/helpful`;

      //generate the get request to the URL
      axios.put(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}

APIHelper.reportQuestion = (question_id)=>{

  return new Promise ((fulfill, reject) => {
    if (question_id === undefined) {
      reject('no question_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/questions/${question_id}/report`;

      //generate the get request to the URL
      axios.put(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}

APIHelper.markQuestionHelpful = (answer_id)=>{

  return new Promise ((fulfill, reject) => {
    if (answer_id === undefined) {
      reject('no answer_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/answers/${answer_id}/helpful`;

      //generate the get request to the URL
      axios.put(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}

APIHelper.reportAnswer = (answer_id)=>{

  return new Promise ((fulfill, reject) => {
    if (answer_id === undefined) {
      reject('no answer_id provided');
    } else {
      //make the url
      var requestUrl = APIURL + `qa/answers/${question_id}/report`;

      //generate the get request to the URL
      axios.put(requestUrl, { headers: {'Authorization': token}})
      .then(fulfill)
      .catch(reject);
    }
  };)
}


module.exports = APIHelper;