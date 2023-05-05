import React, {useRef, useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconCopy } from '@/components/Atoms/Icons';

// input for copy to clipboard
export default function InputCopy({ contentClipboard }: any) {
  const [isTooltip, setToolTip] = useState(false)
  const refInput = useRef<any>(null);
  const handleCopy = () => {
    const text = refInput.current.value;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => {
          setToolTip(true);
          setTimeout(() => {
            setToolTip(false);
          }, 5000);
        },
        () => {
          setToolTip(false);
        }
      );
    } else {
      manuallyCopyToClipboard(text);
    }
  };
  
  const manuallyCopyToClipboard = (text:any) => {
    try {
      refInput.current.select();
      document.execCommand('copy');
      setToolTip(true);
      setTimeout(() => {
        setToolTip(false);
      }, 5000);
    } catch (err) {
      console.error('Sao chép thủ công thất bại:', err);
      setToolTip(false);
    }
  };

  return (
    <div className='flex items-center justify-between bg-yellow-50 rounded-md h-16 p-5'>
      <div className='px-5 w-full'>
        <input
          className='bg-transparent outline-none text-lg font-normal text-black w-full '
          type='text'
          defaultValue={contentClipboard}
          disabled
          ref={refInput}
        />
      </div>
      
      <span className='cursor-pointer' onClick={handleCopy}>
        <IconCopy />
      </span>
      {isTooltip&&
      <span className='absolute bg-black bg-opacity-80 text-white px-2 py-1 text-sm right-0 rounded-md'>
         Copied
      </span>
      }
    </div>
  );
}
