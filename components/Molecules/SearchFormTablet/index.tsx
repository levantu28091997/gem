import React, { FC } from 'react';
import cs from '@/utils/cs';
import { Box } from '@mui/system';
import styles from './SearchFormTablet.module.scss';
import { IconSearchActive, IconSearchLight } from '@/components/Atoms/Icons';
import ModalSearch from '@/components/Organisms/ModalSearch/ModalSearch';

type TProps = {
  isOpen: boolean;
  showTags: boolean;
  openModal: () => void;
  modalRef: React.MutableRefObject<any>;
  searchResults: any;
  value: string;
  handleSearch: (event: any) => Promise<void>;
  removeSearch: () => JSX.Element;
  changeTag: (event: any, classTag: any) => void;
  dataFill: any;

};

const SearchFormTablet: FC<TProps> = ({
  isOpen,
  showTags,
  openModal,
  modalRef,
  searchResults,
  value,
  handleSearch,
  removeSearch,
  changeTag,
  dataFill,
}) => {
  return (
    <>
      <Box
      ref={modalRef}
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
            isOpen={isOpen}
            showTags={showTags}
            searchResults={searchResults}
            value={value}
            handleSearch={handleSearch}
            removeSearch={removeSearch}
            changeTag={changeTag}
            dataFill={dataFill}
          />
        )}
      </Box>
    </>
  );
};

export default SearchFormTablet;
