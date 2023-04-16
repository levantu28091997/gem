import React, { useRef, useState } from 'react';
import LogoHeader from '@/components/Atoms/LogoHeader';
import styles from './Navbar.module.scss';
import cs from '@/utils/cs';
import { Box } from '@mui/system';
import Navigation from '@/components/Molecules/Navigation';
import DarkMode from '@/components/Molecules/DarkMode';
import SearchForm from '@/components/Molecules/SearchForm';
import SearchFormTablet from '@/components/Molecules/SearchFormTablet';
import algoliasearch from 'algoliasearch/lite';
import { IconClose } from '@/components/Atoms/Icons';

const client = algoliasearch(
  process.env.ALGOLIA_PROVIDER_APPLICATION_ID as string,
  process.env.ALGOLIA_PROVIDER_ADMIN_API_KEY as string,
);
const index = client.initIndex(process.env.DEVELOPMENT_API as string);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const modalRef = useRef<any>(null);

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  function handleOverlayClick(event: any) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setValue('');
      setSearchResults([]);
      closeModal();
    }
  }

  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (event: any) => {
    const query = event.target.value;
    setValue(query);
    if (!query) return setSearchResults([]);

    // Search for "query string" in the index "contacts"
    index.search(query).then(({ hits }) => {
      setSearchResults(hits);
    });
  };

  const removeSearch = () => {
    return (
      <div
        onClick={() => {
          setValue('');
          setSearchResults([]);
        }}
      >
        <IconClose />
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className='absolute inset-0 z-40 overflow-auto bg-gray-900 bg-opacity-75 min-h-screen'
        ></div>
      )}
      <nav
        className={cs([
          'relative z-50 pt-2.5 pb-[11px] md:py-3 mb-[18px] md:mb-12 xl:mb-[50px] bg-light dark:bg-dark',
          styles.wrapper,
        ])}
      >
        <div className='mx-4 md:mx-[30px] xl:mx-[70px]'>
          <Box className='flex items-center justify-between mx-auto max-w-full xl:w-[1864px] md:gap-[120px]'>
            <LogoHeader />
            <SearchForm
              isOpen={isOpen}
              openModal={openModal}
              modalRef={modalRef}
              value={value}
              searchResults={searchResults}
              handleSearch={handleSearch}
              removeSearch={removeSearch}
            />
            <Box className='flex items-center'>
              <SearchFormTablet
                isOpen={isOpen}
                openModal={openModal}
                modalRef={modalRef}
                value={value}
                searchResults={searchResults}
                handleSearch={handleSearch}
                removeSearch={removeSearch}
              />
              <Navigation />
              <DarkMode className='pl-14 hidden xl:block' />
            </Box>
          </Box>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
