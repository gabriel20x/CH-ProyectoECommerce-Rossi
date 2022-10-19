import React from "react"
import CartWidget from "./CartWidget"

function NavBar (){
    return (
        <nav>
            <ul class="nav_links">
                <li><a href="#"><CartWidget/> Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sobre nosotros</a></li>
            </ul>
        </nav>
    )
}

export default NavBar