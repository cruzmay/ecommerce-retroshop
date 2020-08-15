const productCard = (image, name, id) => {
    const view = `
        <div class="product-card__item" onclick="openModal()">
            <div class="product-card__item__image"><img src="${image || 'https://i.imgur.com/AvnliBY.png'}" alt="product"/></div>
            <div class="product-card__item__info">
              <h3>${name || 'Nintendo mini'}</h3>
              <p>$${id || '100'}</p>
              <div class="product-card__item__info__footer">
                <div class="heart"><img src="https://i.imgur.com/1HZ0lkK.png" alt="heart"/></div>
                <div class="stars">
                    <img src="https://i.imgur.com/TWZZHBe.png" alt="estrella"/>
                    <img src="https://i.imgur.com/TWZZHBe.png" alt="estrella"/>
                    <img src="https://i.imgur.com/TWZZHBe.png" alt="estrella"/>
                    <img src="https://i.imgur.com/TWZZHBe.png" alt="estrella"/>
                    <img src="https://i.imgur.com/TWZZHBe.png" alt="estrella"/>
                </div>
                <div class="button"><a href="/cart.html">
                    <p>ADD TO CART</p></a></div>
              </div>
            </div>
          </div>
    `;
    
return view;
}
export default productCard;