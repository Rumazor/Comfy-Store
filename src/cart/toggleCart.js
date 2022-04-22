import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const cartToggleBtn = getElement('.toggle-cart');
const cartCloseBtn = getElement('.cart-close');

cartToggleBtn.addEventListener('click',()=> cartOverlay.classList.add('show'));
cartCloseBtn.addEventListener('click',()=> cartOverlay.classList.remove('show'));



export const openCart = () => {
    cartOverlay.classList.add('show');
};
