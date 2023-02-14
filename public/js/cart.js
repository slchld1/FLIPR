// Add item to cart
async function addToCart(customerId, item) {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }
  
    // Get the current items in the cart
    let items = customer.get('addeditem');
    if (!items) {
      items = [];
    }
  
    // Add the new item to the cart
    items.push(item);
  
    // Update the customer record with the new cart items
    await customer.update({ addeditem: items });
  }
  