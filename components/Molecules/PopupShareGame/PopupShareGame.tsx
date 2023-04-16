import React, { useEffect, useRef, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconSkype,
  IconTelegram,
  IconTwitter,
} from '@/components/Atoms/Icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  
} from 'next-share'
import InputCopy from '../InputCopy/InputCopy';

function PopupShareGame({ onClose, isOpen,contentShare }: any) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const modalRef = useRef<any>(null);

  function handleOverlayClick(event: any) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(false)
    }
  }
  return (
    <div>
      {isOpen ? (
        <div
          className='fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75'
          onClick={handleOverlayClick}
        >
          {/* Khối bao phủ modal */}
          <div className='flex items-center justify-center min-h-screen '>
            {/* Nội dung modal */}
            <div
              className='lg:min-w-[600px] md:min-w-[300px] relative bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl rounded-[20px]'
              ref={modalRef}
            >
              <div>
                {/* Nút thoát */}
                <button
                  className='absolute right-0 text-gray-500 hover:text-gray-700 focus:outline-none m-2'
                  onClick={onClose}
                >
                  <CancelIcon />
                </button>
                {/* Tiêu đề modal */}
                <div className='flex justify-center items-cente px-4 py-4 pt-[28px] text-gray-700 font-medium pb-[80px]'>
                  <span className='font-bold text-[30px] leading-[36px]'>
                    Share Your Game
                  </span>
                </div>
              </div>
              {/* Nội dung modal */}
              <div className='px-[50px] pt-0'>
                <div className='flex network-social gap-5 justify-center'>
                  <FacebookShareButton
                    url={contentShare.url}
                    quote={contentShare.quote}
                    hashtag={contentShare.hashtag}
                  >
                    <IconFacebook />
                  </FacebookShareButton>
                  <TwitterShareButton url={contentShare.url}>
                    <IconTwitter />
                  </TwitterShareButton>
                  <TelegramShareButton url={contentShare.url}>
                    <IconTelegram />
                  </TelegramShareButton>
                  <LinkedinShareButton url={contentShare.url}>
                    <IconLinkedIn />
                  </LinkedinShareButton>
                </div>
                <div className='pb-20 pt-[55px]'>
                  <InputCopy
                    contentClipboard={currentUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default PopupShareGame;
