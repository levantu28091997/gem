import React from 'react'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputBase from '@mui/material/InputBase'
import Image from 'next/image'

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
    '& .MuiSelect-icon' : {
        color: '#FFFFFF',
    },
    '.MuiMenuItem-root' : {
        gap: 30,
    }
}))

const menuItemCSS = {
    gap: '30px'
}

export default function SelectLanguage() {
    const [lang, setLang] = React.useState('en')
    const handleChange = (event: { target: { value: string } }) => {
        setLang(event.target.value)
    }
    return (
        <div>
            <Select
                MenuProps={{ disableScrollLock: true }}
                value={lang}
                onChange={handleChange}
                input={<StyleInput />}
            >
                <MenuItem value="en" style={menuItemCSS}>
                    <Image src="/icons/en.svg" alt="English" width={28} height={28} />
                        English
                </MenuItem>
                <MenuItem value="ind" style={menuItemCSS}>
                    <Image src="/icons/ind.svg" alt="India" width={28} height={28} />
                        India
                </MenuItem>
            </Select>
        </div>
    )
}
