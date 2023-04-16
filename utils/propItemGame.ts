import moment from "moment";
import GameService from "@/app/services/gameService";

export default function propsItemGame(gameList: any, index: any) {
    const gameName = gameList && gameList[index]?.attributes.name;
    const gameImage = gameList && gameList[index]?.attributes?.thumbnail.data.attributes.url;
    const isHotGame = gameList && gameList[index]?.attributes.is_hot_game;
    const videos = gameList && gameList[index]?.attributes.video.data.attributes.url;
    const slug = gameList && gameList[index]?.attributes.slug;
    // get createAt
    const createAt = gameList && gameList[index]?.attributes.createdAt;
    const outputDateString = moment(createAt).format("YYYY-MM-DD");
    const sevenDaysAgo = moment().subtract(7, 'days');
    return {
        gameName: gameName,
        gameImage: gameImage,
        videoUrl: videos,
        slug: `/playgame/${slug}`,
        isNew: moment(outputDateString).isAfter(sevenDaysAgo) ? true : false,
        isHot: isHotGame,
        isFavourite: GameService.isGameFavorite(gameList[index]?.id),
    };
}

export const GameInfo = (data: any) => {
    const createAt = data?.attributes?.createdAt;
    const outputDateString = createAt ? moment(createAt).format('YYYY-MM-DD') : '';
    const sevenDaysAgo = moment().subtract(7, 'days');

    return {
        gameId: data?.id,
        gameName: data?.attributes?.name,
        gameImage: data?.attributes?.thumbnail.data.attributes.url,
        videoUrl: data?.attributes?.video.data.attributes.url,
        slug: `/playgame/${data?.attributes?.slug}`,
        isNew: moment(outputDateString).isAfter(sevenDaysAgo) ? true : false,
        isHot: data?.attributes?.is_hot_game,
        isFavourite: GameService.isGameFavorite(data?.id),
    };
}
