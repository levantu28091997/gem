import { useRouter } from 'next/router';
import hi from './public/lang/hi';
import en from './public/lang/en';

const useTransLate = () => {
  const { locale } = useRouter();
  const trans = locale === 'hi' ? hi : en;
  return trans;
};

export default useTransLate;
