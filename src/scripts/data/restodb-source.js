import API_ENDPOINT from "../globals/api-endpoint";

class restoDBSource {
    static async listRestourant(){
        const response = await fetch(API_ENDPOINT.LIST)
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
    
    static async detailRestourant(id){
        const response = await fetch(API_ENDPOINT.DETAIL(id))
        return response.json();
    }

    static async serachRestourant(keyword) {
        const response = await fetch(API_ENDPOINT.SEARCH(keyword))
        return response.json()
    }

    // static async restourantReview() {
    //     const 
    // }

    static async smallImg(id) {
        const response = await fetch(API_ENDPOINT.SMALL_IMG(id))
        return response.json()
    }
    static async mediumImg(id) {
        const response = await fetch(API_ENDPOINT.MEDIUM_IMG(id))
        return response.json()
    }
    static async largeImg(id) {
        const response = await fetch(API_ENDPOINT.LARGE_IMG(id))
        return response.json()
    }
}

export default restoDBSource;