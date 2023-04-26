import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Apedo.module.scss';
const Fade = require('react-reveal/Fade');

const Apero = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div className='relative'>
      <div
        className={
          isMobile
            ? 'relative w-full mx-auto pt-[78px]'
            : isTablet
            ? 'relative w-full mx-auto pt-[5%]'
            : 'relative w-full mx-auto h-auto pt-[5%]'
        }
      >
        {isMobile ? (
          <Fade right duration={3000}>
            <div className='absolute top-[-60px] right-[-50px]'>
              <Image
                src='/images/item-07.png'
                alt=''
                width={117}
                height={226}
              />
            </div>
          </Fade>
        ) : isTablet ? (
          <Fade right duration={3000}>
            <div className='absolute top-[-50px] right-[10px]'>
              <Image
                src='/images/item-07.png'
                alt=''
                width={117}
                height={226}
              />
            </div>
          </Fade>
        ) : (
          <Fade right duration={3000}>
            <div className='absolute top-[-60px] right-[140px]'>
              <Image
                src='/images/item-07.png'
                alt=''
                width={210}
                height={226}
              />
            </div>
          </Fade>
        )}
        <div
          className={
            isMobile
              ? 'absolute mx-auto top-[40px] w-[380px] bottom-0 left-0 right-0 container'
              : isTablet
              ? 'absolute mx-auto top-[-25px] w-[700px] bottom-0 left-0 right-0 container'
              : 'absolute mx-auto top-[0px] w-[910px] bottom-0 left-0 right-0 container'
          }
        >
          <Image
            src='/images/apero.png'
            alt=''
            width={isMobile ? 380 : isTablet ? 700 : 910}
            height={80}
          />
        </div>

        {/* Content */}
        {isMobile ? (
          <div className='w-[347px] mx-auto'>
            <div className='w-[226px] text-center mx-auto'>
              <AboutTitleSection
                className='text-white'
                title='Bring your game to the World'
                lineheight='31.86px'
                size='30px'
                fontStyle='italic'
              />
            </div>
            <Fade up duration={3000}>
              <p className="text-center pt-[14px] text-white font-['Montserrat'] font-[400]">
                The browser is becoming more powerful than ever! Developers are
                making exquisite games and it’s our mission to make them shine!
                Every day our team works to create the best conditions for
                developers and gamers to discover the new ways of playing in the
                browser.
              </p>
            </Fade>
          </div>
        ) : (
          <div className='w-[698px] mx-auto'>
            <div className='w-[451px] text-center mx-auto'>
              <AboutTitleSection
                className='text-white'
                title='Bring your game to the World'
                lineheight='63px'
                size='60px'
                fontStyle='italic'
              />
            </div>
            <Fade up duration={3000}>
              <p className="text-center pt-[19px] text-white font-['Montserrat']">
                The browser is becoming more powerful than ever! Developers are
                making exquisite games and it’s our mission to make them shine!
                Every day our team works to create the best conditions for
                developers and gamers to discover the new ways of playing in the
                browser.
              </p>
            </Fade>
          </div>
        )}
        {/* Contetnt */}

        <div
          className={
            isMobile
              ? `${styles.item_mid} top-[112%]`
              : isTablet
              ? `${styles.item_mid}  top-[115%]`
              : `${styles.item_mid} top-[120%]`
          }
        >
          <Link href={'mailto:supportdev@apero.vn'}>
            <button
              className={
                isMobile
                  ? `${styles.button_upload} w-[169px] h-[38px] text-[14px] text-white font-[700]`
                  : isTablet
                  ? `${styles.button_upload}  text-white w-[169px] h-[38px] text-[14px] font-[700]`
                  : `${styles.button_upload} w-[239px] text-white h-[54px] text-[14px] font-[700] hover:scale-[1.1] transition ease-in-out delay-550`
              }
            >
              Upload your game
            </button>
          </Link>
        </div>
      </div>
      <div
        className={
          isMobile
            ? `${styles.background_img_mob} h-[1221px] mt-16 relative`
            : isTablet
            ? `${styles.background_img} relative mt-[120px] h-[1590.5px]`
            : `${styles.background_img} relative mt-[120px] h-[1590.5px]`
        }
      >
        <div className='container mx-auto relative'>
          <div
            className={
              isMobile
                ? 'absolute top-[14px]'
                : isTablet
                ? 'absolute top-[14px]'
                : 'absolute top-[-80px]'
            }
          >
            <Fade left duration={3000}>
              <Image
                src='/images/character 1.png'
                alt=''
                width={isMobile ? 167 : isTablet ? 267 : 463}
                height={528}
              />
            </Fade>
          </div>

          {/* Why you should choose Apero Gamehub? */}

          <div
            className={
              isMobile
                ? 'pt-[210px] grid grid-cols-1 gap-5'
                : isTablet
                ? 'pt-[200px] grid grid-cols-2 justify-items-center container'
                : 'pt-[17%] grid grid-cols-2 gap-1 justify-items-center mx-auto w-[60%]'
            }
          >
            <div
              className={
                isMobile
                  ? 'text-center w-[322px] mx-auto col-span-2 mb-[21px]'
                  : isTablet
                  ? 'text-center w-[322px] mx-auto col-span-2 mb-[76px]'
                  : 'text-center w-[537px] mx-auto col-span-2 mb-[70px]'
              }
            >
              <AboutTitleSection
                className='text-white'
                title='Why you should choose Apero Gamehub?'
                lineheight={isMobile ? '31px' : isTablet ? '31px' : '50px'}
                size={isMobile ? '30px' : isTablet ? '30px' : '50px'}
                fontStyle='italic'
              />
            </div>
            <div
              className={isMobile ? 'hidden' : isTablet ? 'block' : 'block'}
            ></div>
            <div
              className={
                isMobile
                  ? `${styles.box_content} w-full col-span-2  grid justify-items-end pr-[15px] text-justify`
                  : isTablet
                  ? `${styles.box_content} grid justify-items-end w-full h-[253px] py-[19px] px-[28px] my-1`
                  : `${styles.box_content} grid justify-items-end py-[35px] px-[28px] w-[583px] h-[253px]`
              }
            >
              <div className='flex py-3'>
                <div
                  className={
                    isMobile
                      ? 'w-[39px] h-[39px] mx-[17px]'
                      : isTablet
                      ? 'w-[39px] h-[39px] mx-[17px]'
                      : 'w-[60px] h-[60px] mx-[17px]'
                  }
                >
                  <Image
                    src='/images/global-network 1.png'
                    alt=''
                    width={isMobile ? 39 : isTablet ? 39 : 60}
                    height={60}
                  />
                </div>
                <AboutTitleSection
                  className='text-white'
                  title='GLOBAL'
                  size={isMobile ? '41px' : isTablet ? '42px' : '62px'}
                  lineheight='normal'
                />
              </div>
              <p
                className={
                  isMobile
                    ? 'text-white  text-[14px] leading-[17px] font-[400] w-[306px] pb-4'
                    : isTablet
                    ? 'text-white  text-[18px] font-[400] w-[296px]'
                    : 'text-white  text-[18px] font-[400] w-[463px]'
                }
              >
                We can create a sustainable business revenue stream by tapping
                into new markets, engaging a larger player base, and building
                game developer brand.
              </p>
            </div>
            <div
              className={
                isMobile
                  ? `${styles.box_content_left} w-full col-span-2 grid justify-items-start pl-[15px] text-justify`
                  : isTablet
                  ? `${styles.box_content_left} grid justify-items-start w-full h-[253px] py-[19px] px-[28px] my-1`
                  : `${styles.box_content_left} grid justify-items-start w-[583px] h-[253px] py-[19px] px-[28px] my-1`
              }
            >
              <div className='flex py-3'>
                <div
                  className={
                    isMobile
                      ? 'w-[39px] h-[39px] mr-[17px]'
                      : isTablet
                      ? 'w-[39px] h-[39px] mx-[17px]'
                      : 'w-[60px] h-[60px] mx-[17px]'
                  }
                >
                  <Image
                    src='/images/bar-chart.png'
                    alt=''
                    width={isMobile ? 39 : isTablet ? 39 : 60}
                    height={60}
                  />
                </div>
                <AboutTitleSection
                  className='text-white'
                  title='EARN MONEY'
                  size={isMobile ? '41px' : isTablet ? '42px' : '62px'}
                  lineheight='normal'
                />
              </div>
              <p
                className={
                  isMobile
                    ? 'text-white  text-[14px] leading-[17px] font-[400] w-[306px] pb-4'
                    : isTablet
                    ? 'text-white  text-[18px] font-[400] w-[296px]'
                    : 'text-white  text-[18px] font-[400] w-[463px]'
                }
              >
                By leveraging expertise in marketing, monetization, user
                acquisition, localization, and analytics
              </p>
            </div>
            <div
              className={isMobile ? 'hidden' : isTablet ? 'block' : 'block'}
            ></div>
            <div
              className={isMobile ? 'hidden' : isTablet ? 'block' : 'block'}
            ></div>
            <div
              className={
                isMobile
                  ? `${styles.box_content} w-full col-span-2 grid justify-items-end pr-[15px] text-justify`
                  : isTablet
                  ? `${styles.box_content} grid justify-items-end w-full h-[253px] py-[19px] px-[28px] my-1`
                  : `${styles.box_content} grid justify-items-end  py-[19px] px-[28px] w-[583px] h-[253px]`
              }
            >
              <div className='flex py-3'>
                <div
                  className={
                    isMobile
                      ? 'w-[39px] h-[39px] mr-[17px]'
                      : isTablet
                      ? 'w-[39px] h-[39px] mx-[17px]'
                      : 'w-[60px] h-[60px] mx-[17px]'
                  }
                >
                  <Image
                    src='/images/upload-big-arrow.png'
                    alt=''
                    width={isMobile ? 39 : isTablet ? 39 : 60}
                    height={60}
                  />
                </div>
                <AboutTitleSection
                  className='text-white '
                  title='SIMPLE UPLOAD'
                  size={isMobile ? '41px' : isTablet ? '42px' : '62px'}
                  lineheight={
                    isMobile ? '42px' : isTablet ? 'normal' : 'normal'
                  }
                />
              </div>
              <p
                className={
                  isMobile
                    ? 'text-white  text-[14px] leading-[17px] font-[400] w-[297px] pb-4'
                    : isTablet
                    ? 'text-white  text-[18px] font-[400] w-[296px]'
                    : 'text-white  text-[18px] font-[400] w-[463px]'
                }
              >
                We guiding technical requirements of the website including the
                user interface and uploading process, and the level of support
                and documentation provided.
              </p>
            </div>
          </div>
          {/* Why you should choose Apero Gamehub? */}

          <div
            className={
              isMobile
                ? 'absolute top-[2px] right-0'
                : isTablet
                ? 'absolute top-[50%] right-[0%]'
                : 'absolute top-[51%] right-[20%]'
            }
          >
            <Fade right duration={3000}>
              <Image
                src='/images/futureee 1.png'
                alt=''
                width={isMobile ? 148 : isTablet ? 260 : 327}
                height={459}
              />
            </Fade>
          </div>
          <div
            className={
              isMobile
                ? 'absolute bottom-[-20%] left-0'
                : isTablet
                ? 'absolute bottom-[-14%] left-[0%]'
                : 'absolute bottom-[-28%] left-[20%]'
            }
          >
            <Fade left duration={3000}>
              <Image
                src='/images/gameee-02 2.png'
                alt=''
                width={isMobile ? 148 : isTablet ? 260 : 387}
                height={367}
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apero;
