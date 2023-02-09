/**
* @jest-environment jsdom
*/

const MyOutfits = require('../index.js');

describe('My Outfits tests', function() {

  it('should always have a storage', function() {
    expect(typeof MyOutfits.storage).toBe('object');
  });

});