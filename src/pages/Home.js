import Carrusel from '../components/Carrusel';

const Home = () => {
    const view = `
        <main class="content__page__main"> 
            <h1>OLD THINGS FOR<br/><span> A MODERN LIFE</span></h1>
        </main>
        <div class="content__page__welcome"> 
            <h2>WELCOME TO THE RETRO SHOP VISIT OUR PRODUCTS SECTIONS</h2>
        </div>
        ${Carrusel()}
        `;
        return view
}
export default Home