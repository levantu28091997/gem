import React, { FC } from 'react';
import { Box } from '@mui/system';
import ModalSearch from '@/components/Organisms/ModalSearch/ModalSearch';
import styles from './SearchForm.module.scss';
import { IconClose, IconSearch } from '@/components/Atoms/Icons';
import cs from '@/utils/cs';

type TProps = {
  isOpen: boolean;
  showTags: boolean;
  openModal: () => void;
  modalRef: React.MutableRefObject<any>;
  value: string;
  handleSearch: (event: any) => Promise<void>;
  searchResults: any;
  removeSearch: () => JSX.Element;
  changeTag: (event: any, classTag: any) => void;
  dataFill: any;
  refBoxSearch: any;
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
}) => {
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
          placeholder='What are you playing today?'
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
          />
        )}
      </Box>
    </>
  );
};

export default SearchForm;
