import CONFIG from "../../globals/config";

const RestoDetailTemplate = (resto) => {
  return `
   <div>
    <img class="resto__poster" src="${CONFIG.BASE_URL}images/medium/${resto.pictureId}" alt="${resto.name}" />
    <h1 class="resto__title">${resto.name}</h1>
    <div class="resto__info2">
      <div class="resto__address">
        <div>
          <h4>Alamat</h4>
          <p>${resto.address}</p>
        </div>
        <div>
          <h4>Kota</h4>
          <p>${resto.city}</p>
        </div>
      </div>
      <p class="resto__description">${resto.description} minutes</p>
    </div>
    <div class="resto__info">

      <div class="food__menu">
        <h3>Makanan</h3>
      </div>

      <div class="drink__menu">
        <h3>Minuman</h3>
      </div>
      
    </div>
    <div class="customer__review">
      <h2>Ulasan</h2>
      
    </div>
  </div>
`;
};

const RestoTemplate = (resto) => {
  return `  
    <div class="card" onclick="location.href='#/detail/${resto.id}';">
        <div class="head-card">
        <p class="body-city">
        ${resto.city}
        </p>
        <img src="${CONFIG.BASE_URL}images/medium/${resto.pictureId}" alt="${resto.name}" />
        <div class="body-rating">
            <img src="./images/Rating.png" alt="Rating" />
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
    </div>`;
};

export { RestoTemplate, RestoDetailTemplate };
