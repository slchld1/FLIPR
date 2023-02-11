$(document).ready(function(e) {
    jsonObject.products.forEach((i)=>loadProducts(i));

});

function loadProducts(data){
    var li = document.createElement('li');

    li.innerHTML = `
    ${data.title}
    ${data.medias[i].url}
    ${data.description.detail}
    ${data.brand}
    ${data.price.current}
    `
}