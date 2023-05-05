import BackgroundFAQ from '@/components/Atoms/BackgroundFAQ';
import useScreenSize from '@/utils/useScreenSize';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  const { isMobile } = useScreenSize();
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <BackgroundFAQ />
        <div
          className={`max-w-[1280px] mx-auto py-[42px] ${
            isMobile ? `px-[20px]` : `px-[81px]`
          } z-30 dark:bg-opacity-30 bg-opacity-60 bg-white relative rounded-md`}
        >
          <div className=''>
            <h2 className='text-black dark:text-white text-center font-[800] text-[42px]'>
              Frequently Asked Questions (FAQ)
            </h2>
            <div className='content'>
              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Describe GameHub.
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Gamehub is a totally free online playground that provides the
                  best collection of online games and a really enjoyable
                  experience. You can play by yourself or with other people. All
                  of our games are available for instant play without the need
                  to download, log in, deal with pop-ups, or deal with any other
                  annoyances. Our games are playable on desktop, tablet, and
                  mobile devices, so you can have fun with them wherever you
                  are—at home, on the go, or even in class. Gamehub offers a
                  wide range of online games; the following are some of our most
                  popular categories:{' '}
                  <Link
                    href={'/category/battle-royale-games'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Battle Royal Games
                  </Link>
                  ,{' '}
                  <Link
                    href={'/category/cool-games'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Cool Games
                  </Link>
                  ,{' '}
                  <Link
                    href={'/category/funny-game'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Funny Games
                  </Link>{' '}
                  , and many others. We also include a ton of well-known games
                  including{' '}
                  <Link
                    href={'/playgame/herocraft'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Hero Craft Stumble Race
                  </Link>
                  ,{' '}
                  <Link
                    href={'/playgame/stickfight'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Stickman Tower War
                  </Link>
                  ,{' '}
                  <Link
                    href={'/playgame/mathtd'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Math and Blast Portal Defense
                  </Link>{' '}
                  , and{' '}
                  <Link
                    href={'/playgame/lonedefenders'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Lone Defenders
                  </Link>
                  .
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Are Gamehub games instructive?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  We provide a wide variety of games! From{' '}
                  <Link
                    href={'/tag/action-1'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Action
                  </Link>{' '}
                  Games to{' '}
                  <Link
                    href={'/tag/strategy'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Strategy
                  </Link>{' '}
                  Games,{' '}
                  <Link
                    href={'/tag/adventure'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Adventure
                  </Link>{' '}
                  Games to{' '}
                  <Link
                    href={'/tag/shooter'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Shooter
                  </Link>{' '}
                  Games, and many others. The{' '}
                  <Link
                    href={'/category/chess-games'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Chess Games
                  </Link>
                  ,{' '}
                  <Link
                    href={'/category/card-games'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Card Games
                  </Link>
                  ,{' '}
                  <Link
                    href={'/category/board-games'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Board Games,
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={'/category/drawing-games'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Drawing Games
                  </Link>{' '}
                  categories are where you should look if you're only seeking
                  for educational games.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Gamehub: Is it secure and safe?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Yes, we place a high priority on keeping our users safe. To
                  help secure your safety and the safety of other gamers,
                  Gamehub takes all required safety steps and security measures.
                  Additionally, each game on our site has undergone a rigorous
                  quality assurance procedure. But we can only promise your
                  safety while using our website. We cannot ensure your safety
                  if you choose to exit our website using external links.
                  Gamehub is entirely contained within your browser, a secure,
                  gated area on your machine. You cannot install applications or
                  access files on your device without permission. We suggest
                  reading our{' '}
                  <Link
                    href={'/term-of-service'}
                    className='text-[#FF860A] font-[600]'
                  >
                    Terms of Use
                  </Link>{' '}
                  for more details.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  What should I do if I encounter an offensive advertisement?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Our website only allows relevant content for the adverts. This
                  means that we make every effort to stop and remove any content
                  that is slanderous, offensive, harassing, violent, or
                  otherwise unacceptable. However, if you do find any offensive
                  material, please let us know by sending an email to{' '}
                  <Link
                    href={'mailto:support@gamehub.io'}
                    className='text-[#FF860A] font-[600]'
                  >
                    support@gamehub.io
                  </Link>
                  . Any screenshots, references to the objectionable commercial,
                  and other pertinent data are also welcomed. This will enable
                  us to detect and block these advertising more quickly.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  On Gamehub, are viruses possible?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Gamehub does not require you to download anything; it operates
                  entirely within your browser. Playing Gamehub in-browser games
                  consequently essentially eliminates the risk of contracting
                  viruses. There are, nevertheless, some websites that
                  impersonate Gamehub (they copy our layout, attempt to appear
                  like our homepage, use the same colors, etc.). Your safety on
                  other websites is not something we can promise. Please get in
                  touch with us at{' '}
                  <Link
                    href={'mailto:support@gamehub.io'}
                    className='text-[#FF860A] font-[600]'
                  >
                    support@gamehub.io
                  </Link>{' '}
                  if you come across any such websites.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Does playing require downloading or installing anything?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Never! All you need to play our games is a web browser. We
                  don't request that you install any software or files on your
                  devices. Since there is no chance of contracting a virus
                  there, Gamehub is a secure environment.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Exists a mobile app for Gamehub?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Gamehub doesn't have a mobile app right now.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Do Gamehub games have no hidden costs?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  Yes. On Gamehub, every game is completely free! We collaborate
                  with advertising and split our profits with the creators of
                  the Gamehub games in order to keep them totally free.
                </p>
              </div>

              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px]'>
                  Can you register for a Gamehub Websites account?
                </h4>
                <br />
                <p className='text-[18px] text-black dark:text-white'>
                  No, you are unable to register or log in to our websites. This
                  also means that, in general, we do not request any personal
                  information from you, such your name, address, phone number,
                  or credit card information. You can instantly and hassle-free
                  play our games!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
