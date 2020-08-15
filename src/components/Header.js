const Header = () => {
    const view = `
                    <a class="header__burguer" href="#" onclick="toogleMenu()"></a>
                    <figure class="header__logo"><a href="#/"><img src="https://i.imgur.com/ppBo4m1.png" alt="logo"/></a></figure>
                    <nav class="header__menu">
                    <ul id="hiddenMenu" style="left:-400px"><a class="close" href="#" onclick="toogleMenu()"></a>
                        <li class="header__menu--item"><a href="#/products/cloth">cloth</a></li>
                        <li class="header__menu--item"><a href="#/products/electronics">Electronics</a></li>
                        <li class="header__menu--item"><a href="#/products/toys">toys</a></li>
                        <li class="header__menu--item"><a href="#/products/videogames">videogames</a></li>
                        <li class="header__menu--item"><a href="#/products/gifts">gifts</a></li>
                        <li class="header__menu--item"><a href="#/blog/">Blog</a></li>
                    </ul>
                    </nav>
                    <nav class="header__icons">
                    <ul>
                        <li class="header__icons__search" aria-label="busqueda"><a href="/store.html"><img src="https://i.imgur.com/EReYbPn.png" alt="search"/></a></li>
                        <li class="header__icons__login"><a href="/store.html"><img src="https://i.imgur.com/KSPTMc0.png" alt="login"/></a></li>
                        <li class="header__icons__cart"><a href="/store.html"><img src="https://i.imgur.com/18fnnau.png" alt="cart"/></a></li>
                    </ul>
                    </nav>
                `;
                return view;
            }

            
export default Header