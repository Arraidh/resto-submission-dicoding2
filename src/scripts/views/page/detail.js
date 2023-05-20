import restoDBSource from "../../data/restodb-source";
import UrlParser from "../../routes/url-parser";
import {RestoDetailTemplate} from "../templates/template-creator"

const Detail = {
    async render() {
        return `
        <div id='restoDetail'></div>
        `;
    },

    

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const resto = await restoDBSource.detailRestourant(url.id)
        const restoContainer = document.querySelector('#restoDetail')
        restoContainer.innerHTML += RestoDetailTemplate(resto.restaurant)
        
        const iterateMenu = (menus, containerClass) => {
            const menuContainer = document.querySelector(containerClass);
            console.log(menus)
            for (let menu in menus)
            { menuContainer.innerHTML +=  `<li>${menus[menu].name}</li>` }
        }

        iterateMenu(resto.restaurant.menus.foods, ".food__menu")
        iterateMenu(resto.restaurant.menus.drinks, ".drink__menu")
    },
    
    
};

export default Detail

