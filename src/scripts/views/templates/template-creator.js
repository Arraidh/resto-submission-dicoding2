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

const RestoTemplate = (resto) => {
  return `  

  <div class="card" onclick="location.href='#/detail/${resto.id}';" tabindex="0">
  <img src="${CONFIG.BASE_URL}images/medium/${resto.pictureId}" alt="${resto.name}" class="card-image">
  <div class="card-content">
    <h2 class="card-title">${resto.name}</h2>
    <div class="card-rating">Rating: ${resto.rating}</div>
    <p class="card-city">${resto.city}</p> 
    <p class="card-description"> ${resto.description}</p>
  </div>
</div>
`;
};

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikedRestoButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestoTemplate,
  RestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikedRestoButtonTemplate,
};
