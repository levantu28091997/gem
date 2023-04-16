import React, { FC } from 'react';
import cs from '@/utils/cs';
import { Box } from '@mui/system';
import styles from './SearchFormTablet.module.scss';
import { IconSearchActive, IconSearchLight } from '@/components/Atoms/Icons';
import ModalSearch from '@/components/Organisms/ModalSearch/ModalSearch';

type TProps = {
  isOpen: boolean;
  openModal: () => void;
  modalRef: React.MutableRefObject<any>;
  searchResults: any;
  value: string;
  handleSearch: (event: any) => Promise<void>;
  removeSearch: () => JSX.Element;
};

const SearchFormTablet: FC<TProps> = ({
  isOpen,
  openModal,
  modalRef,
  searchResults,
  value,
  handleSearch,
  removeSearch,
}) => {
  return (
    <>
      <Box
        className={cs([
          styles.search,
          'flex items-center justify-center xl:hidden mx-1.5',
        ])}
        onClick={openModal}
      >
        {isOpen ? <IconSearchActive /> : <IconSearchLight />}
        {isOpen && (
          <ModalSearch
            modalRef={modalRef}
            searchResults={searchResults}
            value={value}
            handleSearch={handleSearch}
            removeSearch={removeSearch}
          />
        )}
      </Box>
    </>
  );
};

export default SearchFormTablet;
