const FAVORITE_GAMES = 'favorite_games';
const PLAYED_CATEGORIES_GAMES = 'played_categories_games';
const PLAYED_ID_GAMES = 'played_id_games';
const THEME_MODE = 'theme_mode';
class LocalStorageService {
  static setItem(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: any) {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }
}

class GamesService {
  static addFavoriteGame(gameId: number) {
    const favoriteGames = this.getFavoriteGames();
    if (!favoriteGames.some((id: any) => id === gameId)) {
      favoriteGames.push(gameId);
      LocalStorageService.setItem(FAVORITE_GAMES, favoriteGames);
    }
  }

  static getFavoriteGames() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const favoriteGames = LocalStorageService.getItem(FAVORITE_GAMES);
      return favoriteGames ? favoriteGames : [];
    }
    return [];
  }

  static removeFavoriteGame(gameId: number) {
    const favoriteGames = this.getFavoriteGames();
    const filteredGames = favoriteGames.filter((id: any) => id !== gameId);
    LocalStorageService.setItem(FAVORITE_GAMES, filteredGames);
  }

  static isGameFavorite(gameId: number) {
    const favoriteGames = this.getFavoriteGames();
    return favoriteGames.includes(gameId);
  }

  static addPlayedCategoryGame(categoryId: number) {
    const categories = this.getPlayedCategoriesGames();
    if (!categories.some((id: any) => id === categoryId)) {
      categories.push(categoryId);
      LocalStorageService.setItem(PLAYED_CATEGORIES_GAMES, categories);
    }
  }

  static getPlayedCategoriesGames() {
    return LocalStorageService.getItem(PLAYED_CATEGORIES_GAMES) || [];
  }

  static addIdPlayedGame(idGame: number) {
    const idsGame = this.getIdPlayedGames();
    if (!idsGame.some((id: any) => id === idGame)) {
      idsGame.push(idGame);
      LocalStorageService.setItem(PLAYED_ID_GAMES, idsGame);
    }
  }

  static getIdPlayedGames() {
    return LocalStorageService.getItem(PLAYED_ID_GAMES) || [];
  }

  static getRecentlyPlayedGame() {
    const idsGame = this.getIdPlayedGames();
    const value = idsGame.map((id: number) => {
      return `filters[id][$in]=${id}`;
    });

    const filter = value.join('&');
    return filter;
  }

  static getRandomPlayedCategoryGame() {
    const categories = this.getPlayedCategoriesGames();
    const randomValues = categories.map((category: number) => {
      const randomIndex = Math.floor(Math.random() * categories.length);
      return `filters[categories][id][$in]=${categories[randomIndex]}`;
    });

    const filter = randomValues.join('&');
    return filter;
  }
  // theme mode
  static toggleThemeMode(isDarkMode: boolean) {
    if (isDarkMode) {
      localStorage.setItem(THEME_MODE, 'dark');
    } else {
      localStorage.setItem(THEME_MODE, 'light');
    }
  }
  static getCurrentThemeMode() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const themeMode = localStorage.getItem(THEME_MODE);
      return themeMode ? themeMode : [];
    }
    return [];
  }
}

export default GamesService;
