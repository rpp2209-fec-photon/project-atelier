import { useState, useEffect } from 'react';
import Helpers from '../../helpers/helpers.js';

function useClickTracker(widget) {

  const decideModule = (element) => {

    const relatedProductsParent = document.getElementById('related-products');
    const relatedProductsDecendences = Array.from(relatedProductsParent.querySelectorAll('*'));

    const ratingsAndReviewsParent = document.getElementById('RatingsAndReviews');
    const ratingsAndReviewsDecendences = Array.from(ratingsAndReviewsParent.querySelectorAll('*'));

    const overviewParent = document.getElementById('overview');
    const overviewDecendences = Array.from(overviewParent.querySelectorAll('*'));

    if ([relatedProductsParent ,...relatedProductsDecendences].includes(element)) {
      return 'Related Items and Comparison';
    }
    if ([ratingsAndReviewsParent, ...ratingsAndReviewsDecendences].includes(element)) {
      return 'Ratings And Reviews';
    }
    if ([overviewParent, ...overviewDecendences].includes(element)) {
      return 'Overview';
    }
  };

  useEffect(() => {
    function handleClick(event) {
      const target = event.target;
      const element = target.tagName + (target.className ? `#${target.className}` : '') + (target.id ? `.${target.id}` : '');
      const time = new Date().toLocaleString();
      const widget = decideModule(target) || 'App';

      const click = { element, time, widget };

      Helpers.postInteraction(click)
      .catch((err) => {
        console.error(err);
      });
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

}

export default useClickTracker;
