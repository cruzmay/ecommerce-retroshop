import productCard from './productCard'

const Carrusel = () => {
    const view = `
        <h2 class="carrusel__title">MOST POPULARS</h2>
        <section class="carrusel">
            ${productCard()}
            ${productCard()}
            ${productCard()}
            ${productCard()}
            ${productCard()}
            ${productCard()}
            ${productCard()}
        </section>`;
    return view;
}
export default Carrusel