import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ReplyIcon from '@mui/icons-material/Reply';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import styles from './ProcessBarGame.module.scss';
import cs from '@/utils/cs';
import GamesService from '@/app/services/gameService';
import imageLoader from '@/utils/useImageLoader';
interface IProps {
  gameId: number;
  author: string;
  slug: string;
  gameName: string;
  gameImage:string;
}
export default function ProcessBarGame(x: IProps) {
  return (
    <div className='bg-white shadow-lg rounded-b-md w-full self-end'>
      <div className='flex justify-right items-center p-2 pt-3.5 pb-5'>
        <div className='ml-3'>
          <Image
            loader={imageLoader}
            src={`${x.gameImage}`}
            alt='avatar'
            width={60}
            height={60}
            className='rounded-md'
          />
        </div>
        <div className='process-description pl-[20px]'>
          <h3 className='game-name text-[18px] font-bold leading-[29px]'>
            {x.gameName}
          </h3>
          <p className='game-author text-[14px] italic font-normal'>
            By {x.author} Game
          </p>
        </div>
      </div>
    </div>
  );
}