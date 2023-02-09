const MyOutfits = {};

let localStorage = window.localStorage;
let myOutfits = localStorage.getItem('my-outfits');

MyOutfits.storage = myOutfits ? new Set(myOutfits.split(', ')) : new Set();

MyOutfits.saveToLocal = () => {
  localStorage.setItem('my-outfits', MyOutfits.items().join(', '));
};

MyOutfits.items = () => {
  return Array.from(MyOutfits.storage);
}

MyOutfits.add = (id) => {
  MyOutfits.storage.add(id);
  MyOutfits.saveToLocal();
};

MyOutfits.remove = (id) => {
  MyOutfits.storage.delete(id);
  MyOutfits.saveToLocal();
};

module.exports = MyOutfits;




