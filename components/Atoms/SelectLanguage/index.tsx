import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

export default function SelectLanguage() {
  const [lang, setLang] = useState('en');
  const { locale } = useRouter();
  // const { t, i18n } = useTranslation();
  const handleChange = (event: { target: { value: string } }) => {
    setLang(event.target.value);
    // const dataLang = event.target.value;
    // i18n.changeLanguage(dataLang);
    // localStorage.setItem('lng', dataLang);
  };

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
}
