import CONFIG from "./config";

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  SMALL_IMG: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
  MEDIUM_IMG: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
  LARGE_IMG: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
};

export default API_ENDPOINT;
