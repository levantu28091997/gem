import React, { FC } from 'react';
import { Box } from '@mui/system';
import ModalSearch from '@/components/Organisms/ModalSearch/ModalSearch';
import styles from './SearchForm.module.scss';
import { IconClose, IconSearch } from '@/components/Atoms/Icons';
import cs from '@/utils/cs';

type TProps = {
  isOpen: boolean;
  openModal: () => void;
  modalRef: React.MutableRefObject<any>;
  value: string;
  handleSearch: (event: any) => Promise<void>;
  searchResults: any;
  removeSearch: () => JSX.Element;
};

const SearchForm: FC<TProps> = ({
  isOpen,
  openModal,
  modalRef,
  value,
  handleSearch,
  searchResults,
  removeSearch,
}) => {
  return (
    <>
      <Box
        className={cs([styles.search, 'hidden xl:flex relative'])}
        onClick={openModal}
      >
        <input
          type='text'
          onChange={handleSearch}
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
            modalRef={modalRef}
            searchResults={searchResults}
            value={value}
            handleSearch={handleSearch}
          />
        )}
      </Box>
    </>
  );
};

export default SearchForm;
