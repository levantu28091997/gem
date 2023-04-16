import React from 'react';
import GameCurret from './GameCurrent';
import OtherGames from './OtherGames';
export default function index({
  onShare,
  listGameRecommended,
  gameCurrent,
}: any) {
  return (
    <OtherGames listGameRecommended={listGameRecommended}>
      <GameCurret onShare={onShare} gameCurrent={gameCurrent} />
    </OtherGames>
  );
}
