import React, { FC, useEffect } from 'react';
import { Box } from '@mui/system';
import ModalSearch from '@/components/Organisms/ModalSearch/ModalSearch';
import styles from './SearchForm.module.scss';
import { IconClose, IconSearch } from '@/components/Atoms/Icons';
import cs from '@/utils/cs';
import { useTranslation } from 'react-i18next';
import { log } from 'console';
import { TFunction } from 'i18next';

type TProps = {
  isOpen: boolean;
  showTags: boolean;
  openModal: () => void;
  modalRef: React.MutableRefObject<any>;
  value: string;
  handleSearch: (event: any) => Promise<void>;
  searchResults: any;
  removeSearch: () => JSX.Element;
  changeTag: (event: any) => void;
  dataFill: any;
  refBoxSearch: any;
  closeModal: (event: any) => void;
};

const SearchForm: FC<TProps> = ({
  isOpen,
  showTags,
  openModal,
  modalRef,
  value,
  handleSearch,
  searchResults,
  removeSearch,
  changeTag,
  dataFill,
  refBoxSearch,
  closeModal,
}) => {
  const { t }: { t: TFunction } = useTranslation();

  return (
    <>
      <Box
        className={cs([styles.search, 'hidden xl:flex relative'])}
        ref={refBoxSearch}
        onClick={openModal}
      >
        <input
          type='text'
          onInput={handleSearch}
          className={styles.searchTerm}
          value={value}
          maxLength={50}
          placeholder={`${t('whatPlay')}`}
          id='inp_search'
        />
        <button type='submit' className={styles.searchButton}>
          {value ? removeSearch() : <IconSearch />}
        </button>
        {isOpen && (
          <ModalSearch
            isOpen={isOpen}
            modalRef={modalRef}
            showTags={showTags}
            searchResults={searchResults}
            value={value}
            handleSearch={handleSearch}
            changeTag={changeTag}
            dataFill={dataFill}
            closeModal={closeModal}
          />
        )}
      </Box>
    </>
  );
};

export default SearchForm;
