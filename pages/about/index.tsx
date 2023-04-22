import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ContactUs from '@/components/Organisms/ContactUs';
import Apero from '@/components/Organisms/Apedo';
import Mission from '@/components/Organisms/Mission';
import Global from '@/components/Organisms/Global';
import Joinus from '@/components/Organisms/Joinus';
import Aos from 'aos';
import Head from 'next/head';
const AboutGamehub = () => {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 300,
    });
  }, []);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className='-z-10'>
        <Apero />
        <Mission />
        <Global />
        <Joinus />
        <div className='w-full bg-[#0A0A0A]'>
          <div className='container mx-auto'>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGamehub;

AboutGamehub.layout = 'defaultAboutTheme';
