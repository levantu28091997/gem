import React from 'react';
import Image from 'next/image';
const BackgroundFAQ = () => {
  return (
    <div className='z-20 h-[2102px] w-full absolute'>
      <div className='absolute -top-28 left-56 blur-sm'>
        <Image
          src={'/images/gameee-05_2.png'}
          alt=''
          height={458.26}
          width={439.3}
        />
      </div>
      <div className='absolute top-10 right-10 blur-sm'>
        <Image
          src={'/images/1[Converted]-031.png'}
          alt=''
          height={404}
          width={439.3}
        />
      </div>
      <div className='absolute bottom-[50%] right-[400px] blur-sm'>
        <Image src={'/images/item-08.png'} alt='' height={306} width={306} />
      </div>
      <div className='absolute bottom-[30%] left-0 blur-sm'>
        <Image
          src={'/images/gameee-03.png'}
          alt=''
          height={467}
          width={439.3}
        />
      </div>
      <div className='absolute bottom-44 right-44 blur-sm'>
        <Image
          src={'/images/gameee-04.png'}
          alt=''
          height={458.26}
          width={439.3}
        />
      </div>
    </div>
  );
};

export default BackgroundFAQ;
