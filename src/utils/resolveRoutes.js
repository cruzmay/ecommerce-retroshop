const resolveRoutes = (route) => {
    if(route === '#/products/') {
        let validRoute = route === '/' ? route: '/products/';
        return validRoute
    }
    return route;
}


export default resolveRoutes;