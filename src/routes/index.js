import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Error404 from '../pages/Error404';
// import getHash from '../utils/getHash';
// import resolveRoutes from '../utils/resolveRoutes';

const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

const routes = {
    '/': Home,
    'products': Products,  
}

const router =  async () => {
   const header = null || document.getElementById('header')
   const footer = null || document.getElementById('footer')
   const section = null || document.getElementById('section')

    header.innerHTML = await Header();
    let route =  await getHash()
    let render = routes[route] ? routes[route] : Error404;
    section.innerHTML = await render();
    footer.innerHTML = await Footer();

}

export default router