import Apero from '@/components/Organisms/Apedo';
import ContactUs from '@/components/Organisms/ContactUs';
import Global from '@/components/Organisms/Global';
import Joinus from '@/components/Organisms/Joinus';
import Mission from '@/components/Organisms/Mission';
import Aos from 'aos';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AboutGamehub = () => {
  const router = useRouter();
  useEffect(() => {
    Aos.init({duration:2000});
    Aos.refresh()
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
