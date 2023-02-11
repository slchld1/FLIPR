// // Search bar
// document.addEventListener("DOMContentLoaded", () => {

// const searchBar = document.querySelector("#product-search");

// searchBar.addEventListener("keyup", e => {
// e.preventDefault();
// const searchText = e.target.value;
// getProducts();
// const allProducts = [];
// const matchedProducts = [];
// async function getProducts() {
// // Get all existing products
// const res = await fetch("/api/product").then(res => res.json());
// for (let i = 0; i < res.length; i++) {
//     allProducts.push(res[i].name);
// }

// // needs api/search_products + product.js
// // Get matching products
// if (searchText) {
//   const searchedProducts = await fetch(`/api/search_products/${searchText}`).then(res => res.json());
//   for (const [i, ProductData] of searchedProducts.entries()) {
//     matchedProducts.push(ProductData.name);
//   }
// }

// // Get products that did not match the search text
// const notMatchedProducts = allProducts.filter(productName => !matchedProducts.includes(productName));

// // Search result display
// // If search bar empty, show all products
// if (searchText.length === 0) {
//   for (let i = 0; i < allProducts.length; i++) {
//     const elems = document.querySelectorAll(`h3:contains('${allProducts[i]}')`);
//     for (const elem of elems) {
//       elem.parentElement.style.display = "";
//     }
//   }
// } else {
//   // Hide products that don't have matching text in their names
//   for (let i = 0; i < notMatchedProducts.length; i++) {
//     const elems = document.querySelectorAll(`h3:contains('${notMatchedProducts[i]}')`);
//     for (const elem of elems) {
//       elem.parentElement.style.display = "none";
//     }
//   }

//   // Display products with matching text
//   for (let i = 0; i < matchedProducts.length; i++) {
//     const elems = document.querySelectorAll(`h3:contains('${matchedProducts[i]}')`);
//     for (const elem of elems) {
//       elem.parentElement.style.display = "";
//     }
//   }
// }
// }
// })
// });