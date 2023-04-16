import BaseService from '@/core/api/BaseService';
import moment from 'moment';
import GamesService from '@/app/services/gameService';

class HomeService extends BaseService {
  request: any;
  BASE_URL = process.env.BASE_URL;

  constructor(params?: any) {
    super(params);
    this.setRequest();
  }

  getTagsPopular = () => {
    const api = '/tags';

    return this.request.get(api);
  };

  getHotGame = () => {
    const api = '/games/hot?populate=*';

    return this.request.get(api);
  };

  getRandomGames = (slug: string) => {
    const api = `/games/random?filters[slug][$ne]=${slug}&populate=*`;
    return this.request.get(api);
  }

  getRecommendedGames = () => {
    let api: string;
    const playedCategoriesGames = GamesService.getPlayedCategoriesGames();
    if (playedCategoriesGames && playedCategoriesGames.length > 0) {
      api = '/games?populate=*&' + GamesService.getRandomPlayedCategoryGame();
    } else {
      api =
        '/games?sort[1]=play_count:desc&sort[0]=publishedAt:desc&populate=*';
    }
    return this.request.get(api);
  };

  getRecentlyPlayedGames = () => {
    let api: string = '';
    const playedGames = GamesService.getIdPlayedGames();
    if (playedGames && playedGames.length > 0) {
      api = '/games?populate=*&' + GamesService.getRecentlyPlayedGame();
    }
    return this.request.get(api);
  };

  getPopularGame = () => {
    const api =
      '/games?sort[1]=play_count%3Adesc&pagination[pageSize]=56&populate=*';
    return this.request.get(api);
  };

  getPopularGameWeek = () => {
    const api = '/games?sort[0]=play_count:desc&populate=*';
    return this.request.get(api);
  };
  getNewGame = () => {
    const currentTime = moment().format('YYYY-MM-DD');
    const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');
    const api = `/games?populate=*&pagination[pageSize]=56&filters[createdAt][$lt]=${currentTime}&filters[createdAt][$gte]=${sevenDaysAgo}`;
    return this.request.get(api);
  };

  getDetailGameById = (id: string) => {
    const api = `/games/${id}?populate=*`;
    return this.request.get(api);
  };

  getDetailGameBySlug = (slug: string) => {
    const api = `/games?populate=*&filters[slug]=${slug}`;
    return this.request.get(api);
  };

  getCategories = () => {
    const api = '/categories?populate=*';

    return this.request.get(api);
  };
  getGameByCategorySlug = (slug: string) => {
    const api = `/games?populate=*&filters[categories][slug]=${slug}`;

    return this.request.get(api);
  };

  getCategoryBySlug = (slug: string) => {
    const api = `/categories?filters[slug]=${slug}`;
    return this.request.get(api);
  };

  getGamesByTag = (slug: string) => {
    const api = `/games?filters[tags][slug][$eq]=${slug}&populate=*`;
    return this.request.get(api);
  };

  getBannerHotGame = () => {
    const api =
      '/games/featured?populate=*&sort%5B0%5D=createdAt:desc&pagination%5Blimit%5D=1';

    return this.request.get(api);
  };
}

export const homeService = new HomeService();
