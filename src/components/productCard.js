const productCard = () => {
    const view = `
        <div class="product-card__item" onclick="openModal()">
            <div class="product-card__item__image"><img src="https://i.imgur.com/AvnliBY.png" alt="product"/></div>
            <div class="product-card__item__info">
              <h3>Tenis</h3>
              <p>$50.00</p>
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