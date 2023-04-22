import React, { useEffect, useRef, useState } from 'react';
import LogoHeader from '@/components/Atoms/LogoHeader';
import styles from './Navbar.module.scss';
import cs from '@/utils/cs';
import { Box } from '@mui/system';
import Navigation from '@/components/Molecules/Navigation';
import DarkMode from '@/components/Molecules/DarkMode';
import SearchForm from '@/components/Molecules/SearchForm';
import SearchFormTablet from '@/components/Molecules/SearchFormTablet';
import algoliasearch from 'algoliasearch';
import { IconClose } from '@/components/Atoms/Icons';
import useScreenSize from '@/utils/useScreenSize';

const client = algoliasearch(
  process.env.ALGOLIA_PROVIDER_APPLICATION_ID as string,
  process.env.ALGOLIA_PROVIDER_ADMIN_API_KEY as string,
);
const index = client.initIndex(process.env.DEVELOPMENT_API as string);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTags, setShowTags] = useState(true);
  const [dataFill, setDataFill] = useState<any[]>([]);
  const [value, setValue] = useState('');
  const modalRef = useRef<any>(null);
  const { isMobile } = useScreenSize();

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
    setDataFill([]);
  };
  const openModal = () => {
    if (isMobile) {
      document.body.style.overflow = 'auto';
    }
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  const refBoxSearch = useRef<any>();

  function handleOverlayClick(event: any) {
    const target = event.target as any;

    if (modalRef.current && !modalRef.current.contains(target)) {
      if (isMobile || (!isMobile && !refBoxSearch?.current?.contains(target))) {
        setValue('');
        setSearchResults([]);
        closeModal();
      }
    }
  }

  const changeTag = (event: any, classTag: any) => {
    if (dataFill.length < 5 && !dataFill.includes(event)) {
      setDataFill([...dataFill, event]);
    }

    if (classTag == 'enable' && dataFill) {
      setDataFill(dataFill.filter((item) => item != event));
    }
  };

  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (event: any) => {
    const query = event.target.value;
    if (query && dataFill.length == 0) {
      setShowTags(false);
    } else {
      setShowTags(true);
    }

    setValue(query);
    handleAlgoliaSearch(query);
  };

  const handleAlgoliaSearch = (query: any) => {
    if (!query && dataFill.length == 0) {
      return setSearchResults([]);
    }

    index.setSettings({
      attributesForFaceting: ['status', '_tags'],
    });

    const tagsString = dataFill
      .reverse()
      .map((tag) => `_tags:'${tag}'`)
      .join(' OR ');
    let filters = 'status:Active';
    if (tagsString) {
      filters += ` AND ${tagsString}`;
    }

    index
      .search(query, {
        filters: filters,
        hitsPerPage: 30,
      })
      .then(({ hits }) => {
        console.log(hits);
        setSearchResults(hits);
      });
  };

  useEffect(() => {
    if (dataFill.length) {
      handleAlgoliaSearch('');
    } else {
      setSearchResults([]);
    }
  }, [dataFill]);

  const removeSearch = () => {
    return (
      <div
        onClick={() => {
          setValue('');
          setSearchResults([]);
          setShowTags(true);
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
          'fixed top-0 left-0 w-[100vw] z-50 pt-2.5 pb-[11px] md:py-3 mb-[18px] md:mb-12 xl:mb-[50px] bg-light dark:bg-dark',
          styles.wrapper,
        ])}
        onClick={handleOverlayClick}
      >
        <div className='mx-4 md:mx-[30px] xl:mx-[70px]'>
          <Box className='flex items-center justify-between mx-auto max-w-full xl:w-[1864px] md:gap-[120px]'>
            <LogoHeader />
            <SearchForm
              refBoxSearch={refBoxSearch}
              isOpen={isOpen}
              showTags={showTags}
              openModal={openModal}
              modalRef={modalRef}
              value={value}
              searchResults={searchResults}
              handleSearch={handleSearch}
              removeSearch={removeSearch}
              changeTag={changeTag}
              dataFill={dataFill}
            />
            <Box className='flex items-center'>
              <SearchFormTablet
                isOpen={isOpen}
                showTags={showTags}
                openModal={openModal}
                modalRef={modalRef}
                value={value}
                searchResults={searchResults}
                handleSearch={handleSearch}
                removeSearch={removeSearch}
                changeTag={changeTag}
                dataFill={dataFill}
              />
              <Navigation />
              <DarkMode className='pl-14 hidden xl:block' />
            </Box>
          </Box>
        </div>
      </nav>
      <div className=' w-[100vw] z-50 pt-2.5 pb-[11px] md:py-3 mb-[18px] md:mb-12 xl:mb-[50px]'></div>
    </>
  );
};

export default Navbar;
