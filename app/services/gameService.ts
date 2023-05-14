import Cookies from "js-cookie";

const FAVORITE_GAMES = 'favorite_games';
const PLAYED_CATEGORIES_GAMES = 'played_categories_games';
const PLAYED_ID_GAMES = 'played_id_games';
const THEME_MODE = 'theme_mode';
const LATEST_GAME_ID = 'latest_game_id';
class LocalStorageService {
    static setItem(key: any, value: any) {
        // localStorage.setItem(key, JSON.stringify(value));
        console.log(key, value);

        Cookies.set(key, JSON.stringify(value))
    }

    static getItem(key: any) {
        const value = Cookies.get(key);

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
        if (typeof window !== 'undefined' && window.localStorage) {
            return LocalStorageService.getItem(PLAYED_ID_GAMES) || [];
        }
    }

    static getRecentlyPlayedGame() {
        const idsGame = this.getIdPlayedGames();
        const value = idsGame && idsGame.map((id: number) => {
            return `filters[id][$in]=${id}`;
        });

        const filter = value?.join('&');
        return filter;
    }

    static getRandomPlayedCategoryGame() {
        const categories = this.getPlayedCategoriesGames();
        const shuffledCategories = categories.sort(() => Math.random() - 0.5);
        const randomValues = shuffledCategories.map((category: number) => {
            return `filters[categories][id][$in]=${category}`;
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
    static getFavouriteGamesForApi() {
        const favorite_games = this.getFavoriteGames();
        if (Array.isArray(favorite_games)) {
            const ids = favorite_games.map(game => `&filters[id][$in]=${game}`);
            const result = ids.join('');
            return result;
        } else {
            return [];
        }
    }
    static addIdLatestGame(idGame: number) {
        if (typeof window !== 'undefined' && window.localStorage) {
            const currentId = localStorage.getItem(LATEST_GAME_ID);
            if (currentId) {
                localStorage.setItem(LATEST_GAME_ID, String(idGame));
            } else {
                localStorage.setItem(LATEST_GAME_ID, String(idGame));
            }
        } else {
            console.error('localstorage is not supported for this browser.');
        }
    }
    static getLatestGameId() {
        if (typeof window !== 'undefined' && window.localStorage) {
            const latestGameId = LocalStorageService.getItem(LATEST_GAME_ID);
            if (latestGameId) {
                return parseInt(latestGameId, 10);
            }
        }
        return null;
    }

}

export default GamesService;
