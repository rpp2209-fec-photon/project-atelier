const axios = require('axios');

var Helpers = {};
var url = `/`;

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


Helpers.getProducts = (page, count)=>{

  return new Promise ((fulfill, reject)=>{
    //set the defaults
    if (page === undefined) {
      page = 1;
    }
    if (count === undefined) {
      count = 5;
    }

    //make the url
    var requestUrl = url + `products/?page=${page}&count=${count}`;

    //generate the get request to the URL
    axios.get(requestUrl)
    .then(fulfill)
    .catch(reject);
  })
}


//product_id: the id of the product you want information on
Helpers.getProductInfo = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = url + `products/${product_id}/`;

      //generate the get request to the URL
      axios.get(requestUrl)
      .then(fulfill)
      .catch(reject);
      }
  })
}

//returns all the styles for the product_id
Helpers.getProductStyles = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = url + `products/${product_id}/styles/`;

      //generate the get request to the URL
      axios.get(requestUrl)
      .then(fulfill)
      .catch(reject);
      }
  })
}

//returns the id's of products that relate to the product_id
Helpers.getRelatedProducts = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = url + `products/${product_id}/related/`;

      //generate the get request to the URL
      axios.get(requestUrl)
      .then(fulfill)
      .catch(reject);
      }
  })
}

//==================================================================================
//REVIEWS
//==================================================================================

//get the reviews of a product
Helpers.getReviews = (page, count, sort, product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = url + `reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`;

      //generate the get request to the URL
      axios.get(requestUrl)
      .then(fulfill)
      .catch(reject);
      }
  })
}

Helpers.getMetaReviews = (product_id)=>{

  return new Promise ((fulfill, reject)=>{
    //if there is no product_id send an error
    if (product_id === undefined) {
      reject('no product id entered');
    }
    else {

      //make the url
      var requestUrl = url + `reviews/meta/?product_id=${product_id}`;

      //generate the get request to the URL
      axios.get(requestUrl)
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
Helpers.addReview = (review)=>{

  return new Promise ((fulfill, reject)=>{
    //make the url
  var requestUrl = url + `reviews`;

  //generate the get request to the URL
  axios.post(requestUrl, review)
  .then(fulfill)
  .catch(reject);
  });

}

Helpers.markAsHelpful = (review_id)=>{

  return new Promise ((fulfill, reject)=>{
    if (review_id === undefined) {
      reject('no product_id provided');
    } else {
      //make the url
      var requestUrl = url + `reviews/${review_id}/helpful`;

      //generate the get request to the URL
      axios.put(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });

}

Helpers.reportReview = (review_id)=>{

  return new Promise ((fulfill, reject) =>{
    if (review_id === undefined) {
      reject('no review_id provided');
    } else {
      //make the url
      var requestUrl = url + `reviews/${review_id}/report`;

      //generate the get request to the URL
      axios.put(requestUrl, review_id)
      .then(fulfill)
      .catch(reject);
    }
  });
}

//==================================================================================
//Q&A
//==================================================================================

Helpers.getQuestions = (product_id, page = 1, count = 5)=>{

  return new Promise ((fulfill, reject) =>{
    if (product_id === undefined) {
      reject('no product_id provided');
    } else {
      //make the url
      var requestUrl = url + `qa/questions?product_id=${product_id}&page=${page}&count=${count}`;

      //generate the get request to the URL
      axios.get(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });
}

Helpers.getAnswers = (question_id)=>{

  return new Promise ((fulfill, reject) => {
    if (question_id === undefined) {
      reject('no question_id provided');
    } else {
      //make the url
      var requestUrl = url + `qa/questions/${question_id}/answers`;

      //generate the get request to the URL
      axios.get(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });
}

/*
question = {
body: text,
name: text,
email: text,
product_id: int
}
*/
Helpers.addQuestion = (question)=>{

  return new Promise ((fulfill, reject) => {
    if (question === undefined) {
      reject('no question provided');
    } else {
      //make the url
      var requestUrl = url + `qa/questions`;

      //generate the get request to the URL
      axios.post(requestUrl, question)
      .then(fulfill)
      .catch(reject);
    }
  });
}

/*
answer = {
body: text,
name: text,
email: text,
photos: [text]
}
*/

Helpers.addAnswer = (question_id, answer)=>{

  return new Promise ((fulfill, reject) => {
    if (answer === undefined) {
      reject('no answer provided');
    } else {
      //make the url
      var requestUrl = url + `qa/questions/${question_id}/answers`;

      //generate the get request to the URL
      axios.post(requestUrl, answer)
      .then(fulfill)
      .catch(reject);
    }
  });
}

Helpers.markQuestionHelpful = (question_id)=>{

  return new Promise ((fulfill, reject) => {
    if (question_id === undefined) {
      reject('no question_id provided');
    } else {
      //make the url
      var requestUrl = url + `qa/questions/${question_id}/helpful`;

      //generate the get request to the URL
      axios.put(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });
}

Helpers.reportQuestion = (question_id)=>{

  return new Promise ((fulfill, reject) => {
    if (question_id === undefined) {
      reject('no question_id provided');
    } else {
      //make the url
      var requestUrl = url + `qa/questions/${question_id}/report`;

      //generate the get request to the URL
      axios.put(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });
}

Helpers.markQuestionHelpful = (answer_id)=>{

  return new Promise ((fulfill, reject) => {
    if (answer_id === undefined) {
      reject('no answer_id provided');
    } else {
      //make the url
      var requestUrl = url + `qa/answers/${answer_id}/helpful`;

      //generate the get request to the URL
      axios.put(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });
}

Helpers.reportAnswer = (answer_id)=>{

  return new Promise ((fulfill, reject) => {
    if (answer_id === undefined) {
      reject('no answer_id provided');
    } else {
      //make the url
      var requestUrl = url + `qa/answers/${question_id}/report`;

      //generate the get request to the URL
      axios.put(requestUrl)
      .then(fulfill)
      .catch(reject);
    }
  });
}

Helpers.postInteraction = (click) => {
  return new Promise ((res, rej) => {
    if (click === undefined) {
      rej('no interaction provided');
    } else {
      let requestUrl = url + 'interactions';
      console.log(click);
      axios.post(requestUrl, click)
      .then(res)
      .catch(rej);
    }
  });
}


module.exports = Helpers;