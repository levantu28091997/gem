import BaseService from '@/core/api/BaseService';
import GamesService from './gameService';

class MyGameService extends BaseService {
  request: any;
  BASE_URL = process.env.BASE_URL;

  constructor(params?: any) {
    super(params);
    this.setRequest();
  }
  getFavouriteGames = () => {
    const api = '/games?populate=*' + GamesService.getFavouriteGamesForApi();
    return this.request.get(api);
  }
  getLatestGame = () => {
    const latest_game_id = GamesService.getLatestGameId();
    const api = `games/${latest_game_id}?populate=*`;
    return this.request.get(api);
  }
}
export const myGameService = new MyGameService();
