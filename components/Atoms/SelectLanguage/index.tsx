import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import isUserInIndia from "@/utils/geo";
import i18next from "i18next";
const StyleInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid #FFFFFF',
    color: '#FFFFFF',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    minWidth: 138,
    display: 'flex',
    gap: 30,
    alignItems: 'center',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  '& .MuiSelect-icon': {
    color: '#FFFFFF',
  },
  '.MuiMenuItem-root': {
    gap: 30,
  },
}));

const menuItemCSS = {
  gap: '30px',
};

const SelectLanguage = () => {
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation();
  const handleChange = (event: { target: { value: string } }) => {
    setCurrentLang(event.target.value);
    localStorage.setItem('lang', event.target.value);
  };

  const setCurrentLang = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      fetch("https://api.ipify.org")
          .then((response) => response.text())
          .then((data) => {
            const lang = isUserInIndia(data) ? 'hi' : 'en';
            setCurrentLang(lang);
          });
    } else  {
      setCurrentLang(localStorage.getItem('lang') ?? 'en');
    }
  }, []);

  return (
    <div>
      <Select
        MenuProps={{ disableScrollLock: true }}
        value={lang}
        onChange={handleChange}
        input={<StyleInput />}
      >
        <MenuItem value='en' style={menuItemCSS}>
          <Image src='/icons/en.png' alt='English' width={28} height={28} />
          English
        </MenuItem>
        <MenuItem value='hi' style={menuItemCSS}>
          <Image src='/icons/ind.svg' alt='India' width={28} height={28} />
          India
        </MenuItem>
      </Select>
    </div>
  );
};
export default SelectLanguage;
