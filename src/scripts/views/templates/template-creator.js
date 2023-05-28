import CONFIG from "../../globals/config";

const RestoDetailTemplate = (resto) => {
  return `
   <div>
    <img class="resto__poster" src="${CONFIG.BASE_URL}images/medium/${resto.pictureId}" alt="${resto.name}" />
    <h1 class="resto__title" tabindex="1">${resto.name}</h1>
    <div class="resto__info2">
      <div class="resto__address">
        <div>
          <h4>Alamat</h4>
          <p tabindex="2">${resto.address}</p>
        </div>
        <div>
          <h4>Kota</h4>
          <p tabindex="3">${resto.city}</p>
        </div>
      </div>
      <p class="resto__description" tabindex="4">${resto.description} minutes</p>
    </div>
    <div class="resto__info">

      <div class="food__menu" tabindex="5">
        <h3>Makanan</h3>
      </div>

      <div class="drink__menu" tabindex="6">
        <h3>Minuman</h3>
      </div>
      
    </div>
    <div class="customer__review" tabindex="7">
      <h2>Ulasan</h2>
      <form id="reviewForm" method="POST" class="formbold-chatbox-form">
        <input type="hidden" name="id" value="${resto.id}">
        
        <div class="formbold-mb-5">
          <label for="name" class="formbold-form-label">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            class="formbold-form-input"
          />
        </div>

        <div class="formbold-mb-5">
          <label for="review" class="formbold-form-label">Review</label>
          <textarea
            rows="6"
            name="review"
            id="review"
            placeholder="Explain your queries"
            class="formbold-form-input"
          ></textarea>
        </div>

        <div>
          <button class="formbold-btn w-full">Submit</button>
        </div>
      </form>


    </div>
  </div>
`;
};

const RestoTemplate = (resto, tabindex = 1) => {
  if (tabindex == 0) tabindex = 1;
  return `  
    <div class="card" onclick="location.href='#/detail/${resto.id}';" tabindex="${tabindex}">
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestoTemplate,
  RestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
