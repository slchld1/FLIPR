const searchInput = document.getElementById('product-search');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase().trim();
  const searchResults = productData.filter(product => {
    const productTitle = product.title.toLowerCase();
    return productTitle.includes(searchValue);
  });
  console.log(searchResults);
});