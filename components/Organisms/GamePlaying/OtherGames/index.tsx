import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import cs from '@/utils/cs';
import styles from './index.module.scss';
import { GameInfo } from '@/utils/propItemGame';
import { useElementWidth } from '@/utils/useElementWidth';
import GameThumbnail from '@/components/Molecules/GameThumbnail';

function index({ children, listGameRecommended: gameList }: any) {
    const [ref, element] = useElementWidth();
    const [itemWidth, setItemWidth] = useState<number>(0);

    useEffect(() => {
        const itemWidth = (element?.width - 22 * 8) / 9;
        setItemWidth(itemWidth - 11);
    }, [ref, element?.width]);

    return (
        <>
            <div
                className={cs([styles.topSection, 'grid gap-5'])}
                ref={ref}
                style={{
                    gridTemplateColumns: `${itemWidth}px 1fr 1fr 1fr 1fr 1fr 1fr 1fr ${itemWidth}px`,
                    gridTemplateRows: `repeat(4, ${itemWidth}px)`,
                }}
            >
                {
                    gameList?.slice(0, 1)?.map((game: any, index: number) => (
                        <div key={index}>
                            <GameThumbnail {...GameInfo(game)} isHover />
                        </div>
                    ))
                }
                <div className={styles.ip3}>
                    {children}
                    <div>
                        <div className={styles.bg_ads}></div>
                    </div>
                </div>
                {
                    gameList?.slice(1, 8)?.map((game: any, index: number) => (
                        <div key={index}>
                            <GameThumbnail {...GameInfo(game)} isHover />
                        </div>
                    ))
                }
            </div>
            <SecondSection gameList={gameList?.slice(8, 12)} itemWidth={itemWidth} />
        </>
    );
}
export default index;

const SecondSection = ({ gameList, itemWidth }: any) => {
    if (gameList.length < 1) return null

    return (
        <div
            className={cs([styles.secondSection, 'grid gap-5 mt-[22px]'])}
            style={{
                gridTemplateColumns: `${itemWidth}px 1fr 1fr 1fr 1fr 1fr repeat(3, ${itemWidth}px)`,
                gridTemplateRows: `repeat(1, ${itemWidth}px)`,
            }}
        >
            {
                gameList?.slice(0, 3)?.map((game: any, index: number) => (
                    <div key={index}>
                        <GameThumbnail {...GameInfo(game)} isHover />
                    </div>
                ))
            }
            <div className={styles.ip15}>
                <Banner title='children-of-heroes' className='h-full' />
            </div>
            {
                gameList?.slice(3, 5)?.map((game: any, index: number) => (
                    <div key={index}>
                        <GameThumbnail {...GameInfo(game)} isHover />
                    </div>
                ))
            }
        </div>
    )
}

const Banner: FC<{ title: string, className?: string }> = ({ title, className }) => {
    return (
        <div
            className={cs(["flex relative items-center", className])}
        >
            <Image
                src={`/images/game-${title}.png`}
                alt={"capybara clicker"}
                fill
                sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
            />
        </div>
    )
}

function OtherGamesSreenMobie({ children }: any) {
    return (
        <div>
            MOBIEE
            {children}
        </div>
    );
}
