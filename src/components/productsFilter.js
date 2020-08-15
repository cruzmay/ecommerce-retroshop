const productsFilter = () => {
    const view = `
    <div class="filter__button__mobile" onclick="openFilters()">
          <a href="#">FILTERS</a><img id="expand" src="https://i.imgur.com/PuMjG9H.png" alt=""/>
          </div>
          <div class="products__filters" id="filters">
            <div class="checkbox">
              <h2>FILTER BY PRICE</h2>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>$100</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>$200</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>$300</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>$500</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>$700</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>$800</p>
              </div>
            </div>
            <div class="checkbox">
              <h2>FILTER BY MARK</h2>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>ADIDAS</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>NIKE</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>CONVERSE</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>PANAM</p>
              </div>
            </div>
            <div class="checkbox">
              <h2>FILTER BY COLOR</h2>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>RED</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>BLUE</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>GREEN</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>GRAY</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>TURQUISE</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>GRAY</p>
              </div>
              <div class="checkbox__item">
                <input type="checkbox"/>
                <p>BLACK</p>
              </div>
            </div>
          </div>
    `;
    return view
}
export default productsFilter;