import http from "@/utils/axios"
import GamesService from "./gameService";

export const getHotGame = () => {
    return http.get('/games/hot?populate=*')
}

export const getBannerHotGame = () => {
    const api =
        '/games/featured?populate=*&sort%5B0%5D=createdAt:desc&pagination%5Blimit%5D=1';

    return http.get(api);
};

export const getTagsPopular = () => {
    const api = '/tags';

    return http.get(api);
};

export const getCategories = () => {
    const api = '/categories?populate=*';

    return http.get(api);
};

export const getNewGame = () => {
    const api = `/games?sort[1]=updatedAt:desc&populate=*`;

    return http.get(api);
};

export const getPopularGame = () => {
    const api =
        '/games?sort[1]=play_count%3Adesc&pagination[pageSize]=56&populate=*';

    return http.get(api);
};

export const getRecommendedGames = () => {
    let api: string;
    const playedCategoriesGames = GamesService.getPlayedCategoriesGames();
    if (playedCategoriesGames && playedCategoriesGames.length > 0) {
        api = '/games?populate=*&' + GamesService.getRandomPlayedCategoryGame();
    } else {
        api =
            '/games?sort[1]=play_count:desc&sort[0]=publishedAt:desc&populate=*';
    }
    return http.get(api);
};