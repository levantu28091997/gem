import BackgroundFAQ from '@/components/Atoms/BackgroundFAQ';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScreenSize from '@/utils/useScreenSize';

export default function PrivacyPolicy() {
  const [check2, setCheck2] = useState<any>(true);
  const [check3, setCheck3] = useState<any>(true);
  const [check4, setCheck4] = useState<any>(true);
  const [check5, setCheck5] = useState<any>(true);
  const [check6, setCheck6] = useState<any>(true);
  const [check7, setCheck7] = useState<any>(true);
  const [check8, setCheck8] = useState<any>(true);
  const [check9, setCheck9] = useState<any>(true);
  const [check10, setCheck10] = useState<any>(true);
  const [check11, setCheck11] = useState<any>(true);
  const Op2 = () => {
    if (check2 == true) {
      setCheck2(false);
      document.querySelector('.content_1')?.classList.add('hidden');
      document.querySelector('.icon_1')?.classList.add('-rotate-90');
      document
        .querySelector('.title-2')
        ?.classList.add('text-black', 'dark:text-white');

      document.querySelector('.title-2')?.classList.remove('text-[#FF860A]');
    }
    if (check2 == false) {
      setCheck2(true);
      document.querySelector('.content_1')?.classList.remove('hidden');
      document.querySelector('.icon_1')?.classList.remove('-rotate-90');
      document.querySelector('.title-2')?.classList.add('text-[#FF860A]');
      document
        .querySelector('.title-2')
        ?.classList.remove('text-black', 'dark:text-white');
    }
  };
  const Op3 = () => {
    if (check3 == true) {
      setCheck3(false);
      document.querySelector('.icon_2')?.classList.remove('-rotate-90');
      document.querySelector('.content_2')?.classList.remove('hidden');
      document.querySelector('.title-3')?.classList.add('text-[#FF860A]');
    }
    if (check3 == false) {
      setCheck3(true);
      document.querySelector('.icon_2')?.classList.add('-rotate-90');
      document.querySelector('.title-3')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_2')?.classList.add('hidden');
    }
  };
  const Op4 = () => {
    if (check4 == true) {
      setCheck4(false);
      document.querySelector('.icon_3')?.classList.remove('-rotate-90');
      document.querySelector('.content_3')?.classList.remove('hidden');
      document.querySelector('.title-4')?.classList.add('text-[#FF860A]');
    }
    if (check4 == false) {
      setCheck4(true);
      document.querySelector('.icon_3')?.classList.add('-rotate-90');
      document.querySelector('.title-4')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_3')?.classList.add('hidden');
    }
  };
  const Op5 = () => {
    if (check5 == true) {
      setCheck5(false);
      document.querySelector('.icon_4')?.classList.remove('-rotate-90');
      document.querySelector('.title-5')?.classList.add('text-[#FF860A]');
      document.querySelector('.content_4')?.classList.remove('hidden');
    }
    if (check5 == false) {
      setCheck5(true);
      document.querySelector('.icon_4')?.classList.add('-rotate-90');
      document.querySelector('.title-5')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_4')?.classList.add('hidden');
    }
  };
  const Op6 = () => {
    if (check6 == true) {
      setCheck6(false);
      document.querySelector('.icon_5')?.classList.remove('-rotate-90');
      document.querySelector('.content_5')?.classList.remove('hidden');
      document.querySelector('.title-6')?.classList.add('text-[#FF860A]');
    }
    if (check6 == false) {
      setCheck6(true);
      document.querySelector('.icon_5')?.classList.add('-rotate-90');
      document.querySelector('.title-6')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_5')?.classList.add('hidden');
    }
  };
  const Op7 = () => {
    if (check7 == true) {
      setCheck7(false);
      document.querySelector('.icon_6')?.classList.remove('-rotate-90');
      document.querySelector('.content_6')?.classList.remove('hidden');
      document.querySelector('.title-7')?.classList.add('text-[#FF860A]');
    }
    if (check7 == false) {
      setCheck7(true);
      document.querySelector('.icon_6')?.classList.add('-rotate-90');
      document.querySelector('.title-7')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_6')?.classList.add('hidden');
    }
  };
  const Op8 = () => {
    if (check8 == true) {
      setCheck8(false);
      document.querySelector('.icon_7')?.classList.remove('-rotate-90');
      document.querySelector('.content_7')?.classList.remove('hidden');
      document.querySelector('.title-8')?.classList.add('text-[#FF860A]');
    }
    if (check8 == false) {
      setCheck8(true);
      document.querySelector('.icon_7')?.classList.add('-rotate-90');
      document.querySelector('.title-8')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_7')?.classList.add('hidden');
    }
  };
  const Op9 = () => {
    if (check9 == true) {
      setCheck9(false);
      document.querySelector('.icon_8')?.classList.remove('-rotate-90');
      document.querySelector('.content_8')?.classList.remove('hidden');
      document.querySelector('.title-9')?.classList.add('text-[#FF860A]');
    }
    if (check9 == false) {
      setCheck9(true);
      document.querySelector('.icon_8')?.classList.add('-rotate-90');
      document.querySelector('.title-9')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_8')?.classList.add('hidden');
    }
  };
  const Op10 = () => {
    if (check10 == true) {
      setCheck10(false);
      document.querySelector('.icon_9')?.classList.remove('-rotate-90');
      document.querySelector('.content_9')?.classList.remove('hidden');
      document.querySelector('.title-10')?.classList.add('text-[#FF860A]');
    }
    if (check10 == false) {
      setCheck10(true);
      document.querySelector('.icon_9')?.classList.add('-rotate-90');
      document.querySelector('.title-10')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_9')?.classList.add('hidden');
    }
  };
  const Op11 = () => {
    if (check11 == true) {
      setCheck11(false);
      document.querySelector('.icon_10')?.classList.remove('-rotate-90');
      document.querySelector('.content_10')?.classList.remove('hidden');
      document.querySelector('.title-11')?.classList.add('text-[#FF860A]');
    }
    if (check11 == false) {
      setCheck11(true);
      document.querySelector('.icon_10')?.classList.add('-rotate-90');
      document.querySelector('.title-11')?.classList.remove('text-[#FF860A]');
      document.querySelector('.content_10')?.classList.add('hidden');
    }
  };
  const { isMobile } = useScreenSize();
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
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
              Privacy Policy Statement
            </h2>
            <div className=''>
              <div className='my-5'>
                <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                  1. General information.
                </h4>
                <p className='text-[18px] dark:text-white'>
                  GameHUB is committed to protecting the privacy of everyone who
                  uses our websites and applications. The GameHUB websites and
                  applications can be used all over the world. The privacy and
                  data protection requirements vary per country. Regardless of
                  where your personal data is processed, we believe it is
                  important to provide the same high level of protection as
                  described in this privacy statement, which now applies in all
                  countries outside the EU and UK. This privacy statement – the
                  “Privacy Policy Statement”, or just in short “Privacy
                  Statement” – is designed to provide transparency into
                  GameHUB’s privacy practices and principles. It provides
                  information on the data that we collect from our website
                  visitors through our GameHUB.com web platform, our GameHUB for
                  Developers platform, and other general- audience sites and
                  applications (hereafter referred to together as the “GameHUB
                  Website”).
                </p>
                <br />
                <p className='text-[18px] dark:text-white'>
                  The GameHUB Website is dedicated to website visitors of 16
                  years and older (“Website Visitors”). If you are under the age
                  of 16, this website is not meant for you. Please contact us at{' '}
                  <Link
                    className='text-[#FF860A] font-[600]'
                    href={'mailto:privacy@GameHUB.com'}
                  >
                    privacy@GameHUB.com.
                  </Link>
                   
                </p>
                <p className='text-[18px] dark:text-white'>
                  The GameHUB Website is owned and operated by GameHUB (referred
                  to in this Privacy Statement as “GameHUB", “we", “our", or
                  “us"). 
                </p>
                <br />
                <p className='text-[18px] italic dark:text-white'>
                  * Please note that we determine from which region you visit
                  our website based on your IP-address, thus if you use a
                  VPN-connection, you may not be shown the Privacy Statement
                  applicable to you.
                </p>
              </div>
              <div className='my-5'>
                <h4
                  onClick={() => Op2()}
                  className='text-[#FF860A] font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 title-2'
                >
                  <div className='icon_1 mt-1 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  2. Which data is used and for what purposes?
                </h4>
                <div className='content_1 mb-5'>
                  <p className='text-black dark:text-white'>
                    All features on the GameHUB Website are available without
                    the need for registration by Website Visitors. No contact
                    details such as your name, email address and phone number
                    are requested from or processed about Website Visitors,
                    unless they actively contact us. Furthermore, our game
                    developers are in principle required to remove all outgoing
                    links and branding/advertisements (e.g. splash-screens,
                    social links and app-store links) from their games.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Nonetheless, GameHUB does collect certain electronic data.
                    We can process this data in various ways. Please find
                    directly below some general information about our processing
                    of your data and further below, you find an overview of
                    various topics on which you can click for more detailed
                    information about the processing of your data in a specific
                    context.
                  </p>
                  <br />
                  <h2 className='text-[#FF860A] font-[700]'>
                    General processing purposes
                  </h2>
                  <p className='text-black dark:text-white'>
                    In general, we may always process your data for the
                    following purposes:
                  </p>
                  <br />
                  <ul className='ml-5'>
                    <li className='list-disc ml-5 text-black dark:text-white'>
                      For maintenance, administration and network and security
                      purposes;
                    </li>
                    <li className='list-disc ml-5 text-black dark:text-white'>
                      For internal control and business operations;
                    </li>
                    <li className='list-disc ml-5 text-black dark:text-white'>
                      For analyzing and improving our products;
                    </li>
                    <li className='list-disc ml-5 text-black dark:text-white'>
                      For handling any requests, complaints and disputes;
                    </li>
                    <li className='list-disc ml-5 text-black dark:text-white'>
                      For determining, exercising and defending our rights; and
                    </li>
                    <li className='list-disc ml-5 text-black dark:text-white'>
                      For complying with legal obligations (incl. fraud
                      prevention) and requests of authorized governmental
                      institutions.
                    </li>
                  </ul>
                  <br />
                  <h2 className='text-[#FF860A] font-[700]'>
                    General processing grounds
                  </h2>
                  <p className='text-black dark:text-white'>
                    In general, we may process your data based on a legal
                    obligation. This means that we will process your data for as
                    far as we are legally obliged to do so, for instance to
                    comply with statutory minimum retention periods.
                  </p>
                  <br />
                  <h2 className='text-[#FF860A] font-[700]'>
                    Legitimate interest
                  </h2>
                  <p className='text-black dark:text-white'>
                    Sometimes we indicate that we process your data based on the
                    legal ground "legitimate interest". This means that a
                    balance of interests is performed between the interests that
                    are served by the processing on the one hand and your
                    privacy interests on the other hand, and that the interests
                    in favor of the processing prevail. The related legitimate
                    interests are included below per topic. If you want more
                    information about this, you can contact us directly via our
                    contact details stated below.
                  </p>
                  <br />

                  <h1 className='text-[#000000] dark:text-white  font-[700]'>
                    i. The General GameHUB Website
                  </h1>
                  <div className='li_1'>
                    <p className='text-black dark:text-white'>
                      We process your data for providing, maintaining and
                      improving the GameHUB Website, our apps and for our social
                      media activities. For more specific information on the
                      cookies and similar technologies used in this respect,
                      please refer to our Cookie Statement. The persons
                      involved. Our Website Visitors: people who visit the
                      GameHUB Website.
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      <strong>The purpose of the processing.</strong> When you
                      visit the GameHUB Website, your data may be processed for
                      the following purposes:
                    </h2>
                    <br />
                    <p className='text-black dark:text-white'>
                      Functioning of the GameHUB Website (incl. remembering your
                      settings and consent choices); Advertising and marketing
                      to you, targeted advertising, and presenting you with
                      relevant advertisements;
                    </p>
                    <br />
                    <p className='text-black dark:text-white'>
                      Showing you the privacy information relevant to your
                      region (which data we process exactly will depend on from
                      which region you access the GameHUB Website).
                    </p>
                    <br />
                    <p className='text-black dark:text-white'>
                      The data that is processed. When you visit the GameHUB
                      Website, we may process the following information about
                      you which is collected automatically:
                    </p>
                    <ul className='text-black dark:text-white'>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        IP address;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Device ID;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Browser type ;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Global geographic location (e.g. location on national or
                        city level);
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Advertisements displayed to you and your interaction
                        with these (e.g. whether you clicked on an advertisement
                        or not);
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Other technical information (e.g. regarding the
                        interaction between your device and the GameHUB Website,
                        the web pages that were visited, the links clicked and
                        the log data).
                      </li>
                    </ul>
                    <br />
                    <h3 className='text-[#FF860A]'>Sensitive information:</h3>
                    <br />
                    <p className='text-black dark:text-white'>
                      In the context of the GameHUB Website we do not, in
                      principle, process sensitive information such as
                      information about your health. If we in certain cases
                      would decide to process sensitive information, you will be
                      separately informed about this processing and where
                      necessary, we will request explicit consent.
                    </p>
                    <br />
                    <h3 className='text-[#FF860A]'>
                      Legal grounds for the processing.{' '}
                    </h3>
                    <br />
                    <p className='text-black dark:text-white'>
                      We base the use of your data in the context of the GameHUB
                      Website on one of the following legal grounds:
                    </p>
                    <br />
                    <h3 className='text-[#FF860A]'>Consent.</h3>
                    <br />
                    <p className='text-black dark:text-white'>
                      Sometimes we base the processing of your data on the
                      (explicit) consent of the relevant person. This is for
                      example applicable for the cookies and similar
                      technologies we only use if you have provided consent for
                      this via a cookie pop-up. For further information on this,
                      please refer to our Cookie Statement .
                    </p>
                    <br />
                    <h3 className='text-[#FF860A]'>Legitimate interest.</h3>
                    <br />
                    <p className='text-black dark:text-white'>
                      Our legitimate interest in offering and using the GameHUB
                      Website, apps and social media; and pursuing the other
                      processing purposes listed above. Social media platforms.
                      GameHUB uses different social media platforms, for example
                      in the context of recruitment and selection and for
                      marketing purposes. GameHUB is not responsible for the
                      management of the social media platforms, but is
                      responsible for example for content of the GameHUB Website
                      that is shared by GameHUB via a social media platform. For
                      more information about how your data will be used by such
                      social media platforms, we refer to the information
                      already available on the websites of the suppliers of
                      these platforms. Below we have included links to the
                      privacy policies of various suppliers of social media
                      platforms, which we could use:
                    </p>
                    <ul className='text-black dark:text-white'>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of Facebook;
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of Twitter;
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of Instagram;
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of YouTube;
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of LinkedIn;
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of Google;
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of Reddit.
                          </strong>
                        </a>
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        <a href='#'>
                          The{' '}
                          <strong className='underline font-[500]'>
                            privacy policy of TikTok.
                          </strong>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <br />
                  <h1 className='text-[#000000] dark:text-white  font-[700]'>
                    ii. GameHUB for Developers (secondary domain:
                    developers.GameHUB.com and app.GameHUB.dev)
                  </h1>
                  <div className='li_2'>
                    <h2 className='text-[#FF860A] font-[700]'>
                      The persons involved.
                    </h2>
                    <br />
                    <p className='text-black dark:text-white'>
                      Game developers that offer their game(s) for the GameHUB
                      Website via the GameHUB for Developers platform with who
                      we have a partnership contract in place.
                    </p>
                    <br />

                    <h2 className='text-[#FF860A] font-[700]'>
                      The purpose of the processing.
                    </h2>
                    <br />
                    <p className='text-black dark:text-white'>
                      When you access our GameHUB for Developers platform, we
                      will process your data for the following purposes:
                    </p>
                    <br />
                    <p className='text-black dark:text-white'>
                      To provide you with information on the conditions that
                      apply if you wish to provide a game for the GameHUB
                      Website; To provide you with a financial overview and
                      related invoices for your account; To provide you with
                      information about our SDK (Software Development Kit), such
                      as that you are in principle required to remove all
                      outgoing links and branding/advertisements (e.g.
                      splash-screens, social links and app-store links) from the
                      game. The data that is processed. In case Developers
                      submit a game on our GameHUB for Developers platform, we
                      may process the following information about you:
                    </p>
                    <br />
                    <ul className='text-black dark:text-white'>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Full name;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        E-mail address;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Phone number;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Skype and/or Discord name;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Name company/studio;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Contract details;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Financial details;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Game(s) and related details such as game title and
                        description, No. of app installs, App Store URL, web
                        build URL;
                      </li>
                    </ul>
                    <br />

                    <h2 className='text-[#FF860A] font-[700]'>
                      Communication details incl.{' '}
                    </h2>
                    <br />
                    <p className='text-black dark:text-white'>
                      how you heard about us. Legal grounds for the processing.
                      We base the use of your personal data in the context of
                      developers.GameHUB.com on one of the following legal
                      grounds:
                    </p>
                    <br />

                    <h2 className='text-[#FF860A] font-[700]'>Contract. </h2>
                    <br />
                    <p className='text-black dark:text-white'>
                      If you’ve concluded a contract with us, we will process
                      your data in the context thereof.For instance, to make
                      sure you receive the payment due. Legitimate interest. Our
                      legitimate interest in providing you with the developers
                      platform and pursuing the other processing purposes
                      mentioned above.
                    </p>
                    <br />
                  </div>

                  <br />
                  <h1 className='text-[#000000] dark:text-white  font-[700]'>
                    iii. About GameHUB (secondary domain: about.GameHUB.com)
                  </h1>
                  <div className='li_3'>
                    <p className='text-black dark:text-white'>
                      On our “about GameHUB” webpage you can find additional
                      information about our company. On this webpage we do not
                      process any additional data about you. On this webpage we
                      do link to some of the above-mentioned webpages, such as
                      developer.GameHUB.com or jobs.GameHUB.com.
                    </p>
                  </div>

                  <br />
                  <h1 className='text-[#000000] dark:text-white  font-[700]'>
                    iv. GameHUB’s job application platform (secondary domain:
                    jobs.GameHUB.com)
                  </h1>
                  <div className='li_4'>
                    <h2 className='text-[#FF860A] font-[700]'>
                      The persons involved.
                    </h2>
                    <p className='text-black dark:text-white'>
                      People who apply for a job via our designated website.
                    </p>

                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      The purpose of the processing.
                    </h2>
                    <p className='text-black dark:text-white'>
                      When you apply for a job at GameHUB via jobs.GameHUB.com,
                      we will process your data for the following purposes:
                    </p>
                    <br />
                    <p className='text-black dark:text-white'>
                      To assess whether you are a viable candidate for our
                      company;
                      <br /> To contact you for the further process regarding
                      your application;
                      <br /> To further process your application. <br /> The
                      data that is processed. When you apply for a job via
                      jobs.GameHUB.com, we may process the following information
                      about you:
                    </p>
                    <br />
                    <ul className='text-black dark:text-white'>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Full name;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Email address;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        LinkedIn profile;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Answers to motivation & portfolio questions;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Resume*;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Phone number*;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Current company/employer*;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        How you heard about the job*;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Additional information such as a cover letter*.
                      </li>
                    </ul>
                    <p className='text-black dark:text-white'>
                      * This information is not mandatory.
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      Legal grounds for the processing.{' '}
                    </h2>
                    <p className='text-black dark:text-white'>
                      We base the use of your data in the context of
                      jobs.GameHUB.com on one of the following legal grounds:
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>Consent. </h2>
                    <p className='text-black dark:text-white'>
                      Sometimes we base the processing of your data on your
                      (explicit) consent. This is for example applicable when
                      you opt-in to the option that GameHUB may contact you
                      during one year after finalization of the application
                      procedure for other future job opportunities that may
                      interest you.
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      Legitimate interest.
                    </h2>
                    <p className='text-black dark:text-white'>
                      Our legitimate interest in assessing your application and
                      other processing purposes listed above.
                    </p>
                  </div>

                  <br />
                  <h1 className='text-[#000000] dark:text-white  font-[700]'>
                    v. GameHUB web shop (secondary domain: shop.GameHUB.com)
                  </h1>
                  <div className='li_5'>
                    <h2 className='text-[#FF860A] font-[700]'>
                      The persons involved.{' '}
                    </h2>
                    <p className='text-black dark:text-white'>
                      People who order products via our web shop.
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      The purpose of the processing.{' '}
                    </h2>
                    <p className='text-black dark:text-white'>
                      When you shop in our web shop, we will process your data
                      for the following purposes: <br /> To process your order
                      and payment;
                      <br /> To provide you with your order. <br /> The data
                      that is processed. When you shop via shop.GameHUB.com, we
                      may process the following information about you:
                    </p>
                    <ul className='text-black dark:text-white'>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Full name;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Email address;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Address;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Phone number*;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Payment information (amount, payment method).
                      </li>
                    </ul>
                    <p className='text-black dark:text-white'>
                      * This information is not mandatory.
                    </p>

                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      Legal grounds for the processing.
                    </h2>
                    <p className='text-black dark:text-white'>
                      We base the use of your data in the context of
                      shop.GameHUB.com on one of the following legal grounds:
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>Contract.</h2>
                    <p className='text-black dark:text-white'>
                      We process your data to execute the purchase contract with
                      you: to make sure you receive your order.
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      Legitimate interest.
                    </h2>
                    <p className='text-black dark:text-white'>
                      We may also process your data in this context based on our
                      legitimate interest involved with the processing purposes
                      mentioned above, such as to determine which of our
                      products are most popular.
                    </p>
                  </div>

                  <br />
                  <h1 className='text-[#000000] dark:text-white  font-[700]'>
                    vi. GameHUB support
                  </h1>
                  <div className='li_6'>
                    <h2 className='text-[#FF860A] font-[700]'>
                      The persons involved.
                    </h2>
                    <p className='text-black dark:text-white'>
                      People who send an email to customer support, e.g. via{' '}
                      <strong className='text-[#FF860A]'>
                        hello@GameHUB.com.
                      </strong>
                    </p>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      The purpose of the processing.{' '}
                    </h2>
                    <p className='text-black dark:text-white'>
                      When you contact GameHUB customer support or contact
                      GameHUB otherwise, we will process your data for the
                      following purposes:
                    </p>
                    <br />
                    <p className='text-black dark:text-white'>
                      To provide you with support;
                      <br /> To answer any question you may have for us. <br />{' '}
                      The data that is processed. When you contact GameHUB
                      customer support or contact GameHUB otherwise, we will
                      process the following information about you:
                    </p>
                    <ul className='text-black dark:text-white'>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Email address;
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        Name (if you provide one);
                      </li>
                      <li className='list-disc ml-5 text-black dark:text-white'>
                        The information you sent us and related metadata you
                        shared with us; as well as the information and related
                        metadata we may share with you in reply.
                      </li>
                    </ul>
                    <br />
                    <h2 className='text-[#FF860A] font-[700]'>
                      Legal grounds for the processing.
                    </h2>
                    <p className='text-black dark:text-white'>
                      In principle, we base the use of your data in the context
                      of the GameHUB customer service on the legitimate interest
                      ground. It concerns our legitimate interest to provide you
                      with support and answer any questions you have for us.
                    </p>
                  </div>
                </div>

                <h4
                  onClick={() => Op3()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5 title-3'
                >
                  <div className='icon_2 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  3. How do we obtain your data?
                </h4>
                <div className='content_2 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    We obtain your data in various ways:
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Provided by you.</strong> Some data about you, we
                    receive straight from you. Examples include information in
                    your messages to us and information you enter in our
                    application form. Obtained internally. It is possible that
                    we obtain your data via other GameHUB systems. An example
                    for game developers is the data which is included into our
                    CRM system.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Obtained from third parties.</strong> We could also
                    obtain data about you from other persons or external
                    parties. Specifically, we make use of this possibility in
                    two scenarios:
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Website Visitors:</strong> we may receive
                    information about you from privately held third parties,
                    such as for the advertisements that are shown on the GameHUB
                    Website. Further information on this is included in our
                    Cookie Statement.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Applicants:</strong> we may obtain information from
                    a referral included by you in your application.
                    Automatically obtained. Some data we obtain automatically,
                    for example by using cookies and similar techniques. When
                    your computer or mobile device contacts our web servers
                    (e.g. when you visit the GameHUB Website), our web servers
                    automatically collect usage information. Such usage
                    information includes information about how our Website
                    Visitors use and navigate the GameHUB Website. It can
                    include the number and frequency of Website Visitors to each
                    web page and the length of their stays, browser type, and
                    referrer data that identifies the web page visited prior and
                    subsequent to visiting the GameHUB Website. Further
                    information on this is included in ourCookie Statement.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Derived.</strong> Certain data we do not receive
                    directly, but can be derived from the information already in
                    our possession. For example, information about your language
                    preferences. In principle you are under no obligation to
                    provide any information about yourself to us. However,
                    refusal to supply certain information could have a negative
                    influence on, for example, the functionality of the GameHUB
                    Website. If the provision of certain personal data is a
                    legal or contractual obligation or an essential requirement
                    for concluding an agreement with us, we will separately
                    provide additional information about this for as far as this
                    is not clear in advance. In such case we will also inform
                    you about the possible consequences if this information is
                    not provided.
                  </p>
                </div>

                <h4
                  onClick={() => Op4()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5 title-4'
                >
                  <div className='icon_3 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  4. Who do we share your data with?
                </h4>
                <div className='content_3 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    We only share your data with third parties if:
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    This is necessary for the provision of a service or the
                    involvement of the third party. Sub-contractors, for
                    example, will in principle only get access to the data that
                    they require for their part of the service provision. <br />{' '}
                    The persons within the third party that have access to the
                    data are under an obligation to treat your data
                    confidentially. Where necessary this is also contractually
                    agreed on. The third party is obliged to comply with the
                    applicable regulations for the protection of personal data,
                    for instance because we have concluded an agreement with
                    this party or because our Terms of Use apply. This includes
                    that the party is obliged to ensure appropriate technical
                    and organizational security measures. <br /> We could share
                    your data on a need-to-know basis with the parties mentioned
                    below. In this context, "need-to-know" means that a party
                    only gets access to your data if and insofar as this is
                    required for the professional services provided by this
                    party.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Authorized persons, employed by GameHUB, who are involved
                    with the processing activity concerned. Such as, the members
                    of the support team you are in contact with. Authorized
                    persons, employed by service providers / sub-contractors
                    engaged by GameHUB, who are involved with the processing
                    activity concerned. Such as, the service provider for the
                    GameHUB web shop.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Authorized persons, employed by parties in the private
                    sector with whom we may share certain data, such as our game
                    developers and advertising partners. Traffic information may
                    be shared with game developers and advertisers on an
                    aggregate and anonymous basis. In addition, advertisers on
                    the GameHUB Website may receive information gathered by
                    cookies for targeted advertising purposes. Further
                    information regarding the use of cookies can be found in our
                    Cookie Statement.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Authorized government institutions. Such as, courts, police,
                    and law enforcement agencies. We may release information
                    about our Website Visitors, when legally required to do so,
                    at the request of governmental institutions conducting an
                    investigation or to verify or enforce compliance with the
                    policies governing the GameHUB Website and applicable law.
                    We may also disclose such user information whenever we
                    believe disclosure is necessary to protect the rights,
                    property or safety of GameHUB, or any of our respective
                    business partners, customers or others.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Aggregate Information. We may also disclose non-identifying,
                    aggregated user statistics to third parties for a variety of
                    purposes, including describing our services to prospective
                    partners and other third parties. Examples of such
                    non-personal information include the number of users who
                    visited this GameHUB Website during a specific time period
                    or played a specific game.
                  </p>
                </div>

                <h4
                  onClick={() => Op5()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5 title-5'
                >
                  <div className='icon_4 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  5. How do we secure your data?
                </h4>
                <div className='content_4 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    Protecting your privacy and data is very important to us.
                    Therefore, GameHUB has implemented appropriate technical and
                    organizational measures to protect and secure personal data,
                    in order to prevent violations of the confidentiality,
                    integrity and availability of the data. All GameHUB
                    employees and other persons engaged by GameHUB for the
                    processing of data are obliged to respect the
                    confidentiality of personal data.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    GameHUB has internal documentation in which it is described
                    how we safeguard an appropriate level of technical and
                    organizational security. In addition, a data breach
                    procedure is applicable within GameHUB, in which it is
                    explained how (potential) data breaches need to be handled.
                    We will, for example, inform the competent supervisory
                    authority and involved data subjects when this is required
                    by the applicable law.
                  </p>
                </div>

                <h4
                  onClick={() => Op6()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5  title-6'
                >
                  <div className='icon_5 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  6. To which countries will we transfer your data?
                </h4>
                <div className='content_5 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    Parties involved with the processing of your data may be
                    located in a different country than you are. No matter where
                    you are located, we are securing your personal data as much
                    as reasonably possible.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    If your data is transferred from the EU to a party located
                    outside the EU, we call this an 'EU transfer'. If your data
                    is transferred from the UK to a party located outside the
                    UK, we call this a 'UK transfer'. EU transfers and UK
                    transfers are legitimized in the manner described below. You
                    may contact us for information on the legitimization of
                    other data transfers.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    EU transfers. An EU transfer EUcan in the first place be
                    legitimized based on an adequacy decision of the European
                    Commission, in which it is decided that the (part within
                    the) third country in question ensures an adequate level of
                    data protection. See{' '}
                    <Link
                      className='text-[#FF860A] font-[600]'
                      href={
                        'https://www.gov.uk/government/publications/uk-approach-to-international-data-transfers/international-data-transfers-building-trust-delivering-growth-and-firing-up-innovation'
                      }
                    >
                      this link
                    </Link>{' '}
                    for a summary of the applicable adequacy decisions.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    UK transfers. A UK transfer can in the first place be
                    legitimized based on an adequacy regulation of the UK
                    government. See{' '}
                    <Link
                      className='text-[#FF860A] font-[600]'
                      href={
                        'https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_nl'
                      }
                    >
                      this link
                    </Link>{' '}
                    for an overview of the applicable adequacy regulations.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    If an EU transfer and/or UK transfer takes place for which
                    there is no adequacy decision or adequacy regulation in
                    place, we agree on the applicability of the relevant version
                    of the Standard Contractual Clauses with the relevant party.
                    This is a standard contract to safeguard the protection of
                    your data, which is approved by the European Commission in
                    which the parties fill out the appendices. See{' '}
                    <Link
                      className='text-[#FF860A] font-[600]'
                      href={
                        'https://ico.org.uk/media/for-organisations/documents/4019539/international-data-transfer-addendum.pdf'
                      }
                    >
                      this link
                    </Link>{' '}
                    for the various versions of the Standard Contractual Clauses
                    for the EU. Where appropriate, additional safeguards should
                    be taken. Where the UK GDPR is applicable, a UK Addendum
                    will be added to the Standard Contractual Clauses mentioned
                    above, as required by UK law and regulations.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    In specific situations we can also rely on the derogations
                    as specified in applicable law to legitimize the EU transfer
                    and/or UK data transfer. This could mean that we may
                    transfer your data: (i) with your explicit consent, (ii) if
                    this is necessary for the performance of a contract that has
                    been concluded with you or has been concluded in your
                    interest, or (iii) if this is necessary for the
                    establishment, exercise or defense of legal claims. Lastly,
                    in exceptional cases we may also transfer your data if the
                    data transfer is necessary for our compelling legitimate
                    interests and is not overridden by your interests or rights
                    and freedoms.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    You can contact us if you want additional information via
                    our contact details as stated at the bottom of this Privacy
                    Statement.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Google Analytics Blockage Blockage Please note that we do
                    not use Google Analytics on any of our websites. However, it
                    is possible that one of the game developers we work with
                    tries to use Google Analytics for tracking in-game
                    activities. We actively try to find these implementations
                    and overwrite them for users from the EU. To opt out of
                    being tracked by Google Analytics across all websites,
                    please visit:{' '}
                    <Link
                      className='text-[#FF860A] font-[600]'
                      href={'http://tools.google.com/dlpage/gaoptout'}
                    >
                      http://tools.google.com/dlpage/gaoptout
                    </Link>
                    .
                  </p>
                </div>

                <h4
                  onClick={() => Op7()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5 title-7'
                >
                  <div className='icon_6 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  7. How do we determine how long we retain your data?
                </h4>
                <div className='content_6 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    In general, we do not keep your data for longer than what is
                    necessary in relation to the purposes for which we process
                    the data. There could however be exceptions applicable to
                    the general retention terms.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Exception: shorter retention period.</strong> If you
                    exercise certain privacy rights, it is possible that GameHUB
                    will remove your data earlier than the general applicable
                    retention period or – oppositely – retain it for a longer
                    period of time. For more information about this, please
                    refer to the header "What are your privacy rights (incl.
                    right to object)?"
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Exception: longer retention period.</strong> In
                    certain situations, we process your data for a longer period
                    of time than what is necessary for the purpose of the
                    processing. This is for instance the case when we have to
                    process your data for a longer period of time:
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Retention obligation.</strong>To comply with a
                    minimum retention period or other legal obligation to which
                    we are subject based on the applicable law;
                    <br /> Procedure. Your personal data is necessary in
                    relation to a legal procedure;
                    <br />
                    <strong>Freedom of expression.</strong> When further
                    processing of your personal data is necessary in order to
                    exercise the right to freedom of expression and information.
                  </p>
                </div>

                <h4
                  onClick={() => Op8()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5  title-8'
                >
                  <div className='icon_7 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  8. What are your privacy rights (incl. right to object)?
                </h4>
                <div className='content_7 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    You have various privacy rights. Which privacy rights you
                    have, depends on the applicable law. To what extent you can
                    exercise these rights may depend on the circumstances of the
                    processing, such as the manner in which GameHUB processes
                    the personal data and the legal ground for the processing.
                    Below, we included a summary of the privacy rights you may
                    have. The applicable law may allow or require us to refuse
                    your request, because these rights are not absolute or may
                    not be applicable in your region.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    For more information about your privacy rights in the EU and
                    the UK, go to this webpage or this webpage of the European
                    Commission or this webpage of the UK Information
                    Commissioner’s Office.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    8.1 Your privacy rights.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    In relation to our processing of your personal data, you may
                    have the below privacy rights. Right to withdraw consent. In
                    so far as our processing of your data is based on your
                    consent, you have the right to withdraw your consent at any
                    time via our contact details stated below. Withdrawal of
                    consent does not influence the legitimacy of the processing
                    before you withdrew your consent. If you withdraw your
                    consent, GameHUB will no longer process your data for the
                    purpose that you consented to. It can however be possible
                    that we still process the personal data for another purpose,
                    such as to comply with a minimum retention period. In that
                    case you will be informed about this.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right of access.</strong> You may have the right to
                    request access to your data. This enables you to receive a
                    copy of the data we hold about you (but not necessarily the
                    documents themselves). We will then also provide you with
                    further information on our processing of your personal data.
                    For example, the purposes for which we process your data,
                    where we got it from, and with whom we share it. Where
                    applicable, we may refer to this Privacy Statement.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right to rectification.</strong>. You may have the
                    right to request rectification of the personal data that we
                    hold about you. This enables you to have any incomplete or
                    inaccurate data we hold about you corrected. You have this
                    right in case we process personal data about you that: (i)
                    is factually incorrect; (ii) is incomplete or not related to
                    the purpose it was collected for; or (iii) is in any other
                    way used in a manner that is in conflict with an applicable
                    law. <br />
                    The right of rectification is not intended for the
                    correction of professional opinions, findings or conclusions
                    that you do not agree with. However, GameHUB could in such
                    case consider adding your opinion about this to your data.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right to erasure.</strong> You may have the right to
                    request erasure of your personal data. This enables you to
                    ask us to delete or remove your data where: (i) the data is
                    no longer necessary, (ii) you have withdrawn your consent,
                    (iii) you have objected to the processing activities, (iv)
                    the data has been unlawfully processed, (v) the data has to
                    be erased on the basis of a legal requirement, or (vi) where
                    the data has been collected in relation to the offer of
                    information society services.
                    <br />
                    However, we do not have to honor your request to the extent
                    that the processing is necessary: (i) for exercising the
                    right of freedom of expression and information, (ii) for
                    compliance with a legal obligation which requires
                    processing, (iii) for reasons of public interest in the area
                    of public health, (iv) for archiving purposes, or (v) for
                    the establishment, exercise or defense of legal claims.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right to object.</strong> You may have the right to
                    object to the processing of your data where we are relying
                    on legitimate interest as processing ground (see above).
                    Insofar as the processing of your data takes place for
                    direct marketing purposes, we will always honor your
                    request. For processing for other purposes, we will also
                    cease and desist processing, unless we have compelling
                    legitimate grounds which override your interests, rights and
                    freedoms or that are related to the institution, exercise or
                    substantiation of a legal claim. If such is the case, we
                    will inform you on our compelling grounds and the balance of
                    interests made.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right to restriction.</strong>. If applicable, the
                    right to restriction of processing means that GameHUB will
                    continue to store personal data at your request but may in
                    principle not do anything further with it. In short, you
                    have this right when GameHUB does not have (or no longer
                    has) any legal ground for the processing of your data or if
                    this is under discussion. This right is specifically
                    applicable in the following situations:
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Unlawful processing.</strong> We may not (or no
                    longer) process certain personal data, but you do not want
                    us to erase the data. For example, because you still want to
                    request the data at a later stage.
                  </p>
                  <p className='text-black dark:text-white'>
                    <strong>Data no longer required.</strong> GameHUB no longer
                    needs your data for our processing purposes, but you still
                    require the personal data for a legal claim. For example, in
                    case of a dispute.Pending an appeal. You objected against
                    the processing of your data by GameHUB (see the right to
                    object above). Pending the verification of your appeal we
                    will no longer process this personal data at your request.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Contesting the accuracy of data.</strong> You
                    contest the accuracy of certain data that we process about
                    you (e.g. via your right to rectification; see above).
                    During the period in which we assess your contest we will no
                    longer process this personal data at your request.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right to data portability.</strong> You may have the
                    right to request the transfer of your data to you or to a
                    third party of your choice (right to data portability). We
                    will provide you, or such third party, with your data in a
                    structured, commonly used, machine-readable format. Please
                    note that this right only applies if it concerns processing
                    that is carried out by us by automated means, and only if
                    our processing ground for such processing is your consent or
                    the performance of a contract to which you are a party (see
                    above).
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Automated decision-making.</strong> You may have the
                    right not to be subject to a decision based solely on
                    automated processing, which significantly impacts you
                    (“which produces legal effects concerning you or similarly
                    significantly affects you”). In this respect, please be
                    informed that when processing your personal data, we do not
                    make use of automated decision-making which significantly
                    impacts you.
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    <strong>Right to complaint.</strong> In addition to the
                    above-mentioned rights, you may have the right to lodge a
                    complaint with a supervisory authority, in particular in the
                    country of your habitual residence, place of work or where
                    an alleged infringement took place. However, we would
                    appreciate the chance to deal with your concerns before you
                    approach them, so please contact us beforehand.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    8.2 How to exercise your rights.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    You can exercise your privacy rights free of charge, by
                    phone or by e-mail via the contact details displayed below.
                    If requests are manifestly unfounded or excessive, in
                    particular because of the repetitive character, we may
                    either charge you a reasonable fee or refuse to comply with
                    the request.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    8.3 Verification of your identity.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    We may request specific information from you to help us
                    confirm your identity before we further respond to your
                    privacy request.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    8.4 Follow-up of your requests.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    We will provide you with information about the follow-up of
                    the request without undue delay and in principle within one
                    month of receipt of the request. Depending on the complexity
                    of the request, the number of requests and the applicable
                    law, this period can be extended. We will notify you of such
                    an extension within one month of receipt of the request. The
                    applicable law may allow or require us to refuse your
                    request. If we cannot comply with your request, we will
                    inform you of the reasons why, subject to any legal or
                    regulatory restrictions.
                  </p>
                </div>

                <h4
                  onClick={() => Op9()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5 title-9'
                >
                  <div className='icon_8 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  9. Who is responsible for the processing of your data?
                </h4>
                <div className='content_8 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    GameHUB is in principle responsible for the processing of
                    your data in the context of the GameHUB Website, but other
                    parties may also be involved and responsible themselves, as
                    specified below.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    9.1 Developers.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    The developers of the games on the GameHUB Website are in
                    principle required to remove all outgoing links and
                    branding/advertisements (e.g. splash-screens, social links
                    and app-store links) from their game(s). If developers do
                    gather personal data for their own purposes, GameHUB is not
                    responsible for this processing: only the developer decides
                    what (personal) data is processed and for what purpose.
                    However, because GameHUB feels it is important that your
                    data is also safe when you play a game, we took two
                    measures. In the first place, we included contractual
                    safeguards with the developers. They are only allowed to
                    include cookies and similar technologies in their game if no
                    consent for this is required under the applicable law. In
                    the second place, we have prepared this list of the cookies
                    used by our game developers, categorized per game, to inform
                    you on behalf of the developers.* For further information on
                    developers cookies, please refer to our Cookie Statement.
                    Furthermore, if you notice any possible undue processing by
                    a developer of your data, please inform us so that we can
                    investigate.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    9.2 Advertisement partners.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    GameHUB uses the services of several advertising parties.
                    These parties provide us with advertisements for the GameHUB
                    Website and are responsible for their part of the processing
                    of your data in this context. To nevertheless safeguard your
                    privacy in this respect as much as possible, GameHUB has,
                    amongst other things, ensured that suitable contractual
                    measures are in place. Further information regarding the use
                    of cookies, also in the context of advertising partners, can
                    be found in our Cookie Statement.
                  </p>
                  <br />
                  <h4 className='text-[#FF860A] font-[700] text-[24px] flex gap-3'>
                    9.3 Externally hosted games, third party games and other
                    websites.
                  </h4>
                  <br />
                  <p className='text-black dark:text-white'>
                    This Privacy Statement does not apply to usage of your data
                    by other parties that are themselves responsible for such
                    usage of your data, such as providers of third-party games
                    available on the GameHUB Website. The relevant provider of
                    such third-party game is responsible for ensuring that any
                    processing of your data by them in the context of a game
                    complies with the applicable law. In principle, GameHUB does
                    not permit third party content providers to collect personal
                    data about Website Visitors. However, if any personal data
                    will be collected by a third-party content provider, GameHUB
                    will require that the processing of such data by them
                    complies with the applicable law.
                    <br />* Please note that this list may not be complete,
                    since randomized cookies that are placed with less than 100
                    Website Visitors are not included in the list. Furthermore,
                    the cookies used by developers may change over time.
                    Therefore, we automatically update this list daily.
                  </p>
                </div>

                <h4
                  onClick={() => Op10()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5 title-10'
                >
                  <div className='icon_9 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  10. How can you contact us?
                </h4>
                <div className='content_9 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    If you have any questions concerning this Privacy Statement,
                    or our usage of your data, please contact us at
                    <a className='text-[#FF860A]' href='#'>
                      privacy@GameHUB.com
                    </a>
                  </p>
                  <br />
                  <p className='text-black dark:text-white'>
                    Please let us know by e-mail in advance if you prefer to
                    have further contact over the phone in another language. We
                    will then try to facilitate your request.
                  </p>
                </div>

                <h4
                  onClick={() => Op11()}
                  className='text-black dark:text-white font-[700] text-[24px] flex gap-3 cursor-pointer transition-all relative pl-10 mb-5  title-11'
                >
                  <div className='icon_10 mt-1 -rotate-90 absolute top-0 left-0'>
                    <Image
                      src={'/images/Expand_down.png'}
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  11. Changes
                </h4>
                <div className='content_10 mb-5  dark:text-white hidden'>
                  <p className='text-black dark:text-white'>
                    We may change this Privacy Statement from time to time to
                    accommodate new technologies, industry practices, regulatory
                    requirements or for other purposes. The latest version can
                    always be consulted via the GameHUB Website. Important
                    changes will also be communicated to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
