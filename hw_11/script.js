'use strict';

    const productsData = JSON.parse(data);

    productsData.forEach(element => {
      const productsEl = document.querySelector('.products__cards');

      const product = document.createElement('div');
      product.classList.add('product-card');

      const productImage = document.createElement('img');
      productImage.src = element.image.src;
      productImage.alt = element.image.alt;

      const productContent = document.createElement('div');
      productContent.classList.add('product-card__content');

      const productName = document.createElement('p');
      productName.classList.add('product-card__name');
      productName.textContent = element.name;

      const productDesc = document.createElement('p');
      productDesc.classList.add('product-card__description');
      productDesc.textContent = element.description;

      const productPrice = document.createElement('p');
      productPrice.classList.add('product-card__price');
      productPrice.textContent = element.price.currency + element.price.amount.toFixed(2);

      productsEl.appendChild(product);
      product.appendChild(productImage);
      product.appendChild(productContent);
      productContent.appendChild(productName);
      productContent.appendChild(productDesc);
      productContent.appendChild(productPrice);
    });