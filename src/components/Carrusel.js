import productCard from './productCard'
import getData from '../utils/getData'

const Carrusel = async () => {
    let print = await getData()
    console.log(print.results)
    const view = `
        <h2 class="carrusel__title">MOST POPULARS</h2>
        <section class="carrusel">
            ${print.results.map( print =>
                `${productCard(print.image, print.name, print.id)}`
            ).join('')}
        </section>`;
        const promiseView = Promise.resolve(view);
        promiseView.then((view) => {
            const carrousel = document.getElementById('carrousel')
            carrousel.innerHTML = view
        });
    return view
}


export default Carrusel





// ${productCard('https://i.imgur.com/nOikIyB.png','Ghosbuster Ecto 1','200' )}
// ${productCard()}