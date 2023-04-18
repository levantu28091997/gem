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
interface IProps {
  gameId: number;
  author: string;
  slug: string;
  gameName: string;
  toggleFavourite: any;
}
export default function ProcessBarGame(x: IProps) {
  return (
    <div className='bg-slate-200 rounded-b-md w-full self-end'>
      <div className='flex justify-between items-center p-2'>
        <div className='process-description pl-[25px]'>
          <h3 className='game-name font-bold text-black text-xl font-bold'>
            {x.gameName}
          </h3>
          <p className='game-author font-thin text-sm text-black italic font-normal'>
            {x.author}
          </p>
        </div>
        <div className='process-icon flex'>
          <div className={cs([styles.actionBanner])}>
            <Link href={'playgame/'+x.slug || '/'}>Play now</Link>
          </div>
          <span className='mx-2 cursor-pointer' onClick={x.toggleFavourite}>
            {GamesService.isGameFavorite(x.gameId) ? (
              <FavoriteIcon className='text-red-500' />
            ) : (
              <FavoriteBorderIcon />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

const loaderImage = ({ src }: any) => {
  return process.env.IMAGE_URL + src;
};

// export const ProcessBarGameMobile = ({ onShare, gameCurrent }: any) => {
//   const srcImg = gameCurrent?.attributes?.thumbnail?.data?.attributes?.url;
//   const nameGame = gameCurrent?.attributes?.name;
//   const dataAuthor = gameCurrent?.attributes?.createdBy?.data?.attributes;
//   const showAuthor = `By ${dataAuthor?.firstname} ${dataAuthor?.lastname}`;

//   return (
//     <div className='bg-[#F4F3FA] w-full self-end'>
//       <div className='flex justify-between items-center pt-2.5 pb-4'>
//         <div className='flex process-description pl-[25px]'>
//           <Image
//             src={srcImg}
//             alt={nameGame}
//             width={33}
//             height={33}
//             loader={loaderImage}
//           />
//           <div className='pl-2.5'>
//             <h3 className='game-name font-bold text-[16px] leading-[19px]'>
//               {gameCurrent?.attributes?.name}
//             </h3>
//             <p className='game-author text-[10px] font-normal leading-[12px] mt-[2px]'>
//               {showAuthor}
//             </p>
//           </div>
//         </div>
//         <div className='process-icon'>
//           <span
//             className='inline-block transform scale-x-[-1] mx-2 cursor-pointer'
//             onClick={onShare}
//           >
//             <ReplyIcon sx={{ width: '30px', height: '30px' }} />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
