import CONFIG from "../../globals/config";

const RestoTemplate = (resto) => {
    return `  
    <div class="card">
        <div class="head-card">
        <p class="body-city">
        ${resto.city}
        </p>
        <img src="${CONFIG.BASE_URL}images/medium/${resto.pictureId}" alt="" />
        <div class="body-rating">
            <img src="./images/Rating.png" alt="Picture of ${resto.name}" />
            <p>
            ${resto.rating}
            </p>
        </div>
        </div>
        <div class="body-card">
        <h1>${resto.name}</h1>
        <p>
            ${resto.description}
        </p>
        </div>
    </div>`
}

export default RestoTemplate;