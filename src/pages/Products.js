import productCard from '../components/productCard';
import getData from '../utils/getData'
import productsFilter from '../components/productsFilter';

const Products = async () => {
  let print = await getData()
    console.log(print.results)
    const view = `
        <div class="banner__products">
          <h2>TOGETHER WE'LL RULE THE GALAXY</h2>
        </div>
        <div class="banner__title">
          <h2>MOST POPULARS</h2>
        </div>
        <section class="products">
          ${productsFilter()}
          <div class="products__grid">
          ${print.results.map( print =>
            `${productCard(print.image, print.name, print.id)}`
        ).join('')}
          </div>
          </section>
    `;
    return view;
}

export default Products