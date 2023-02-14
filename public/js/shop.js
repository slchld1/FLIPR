document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll("#product-card");

    productCards.forEach(productCards => {
      const addToCartButton = productCards.querySelector(".cart-button");
  
      addToCartButton.addEventListener("click", e => {
        e.preventDefault();
        // Make an API call to add the product to the cart
        alert("Product added to cart!");
      });
    });
  });