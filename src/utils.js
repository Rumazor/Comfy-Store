
const allProductsUrl = 'https://course-api.com/javascript-store-products'


const singleProductUrl =
  'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = () => {}

const getStorageItem = (item) => {
  let storgeItem = localStorage.getItem(item);
  if(storgeItem){
    storgeItem = JSON.parse(localStorage.getItem(item))
  }else{
    storgeItem = []
  }
  return storgeItem
};


const setStorageItem = (name,item) => {
  localStorage.setItem(name,JSON.stringify(item))
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
