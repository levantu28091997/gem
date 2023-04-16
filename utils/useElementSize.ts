import { useRef, useState, useEffect, RefObject } from 'react';

const useElementSize = () => {
  const elementRef = useRef<HTMLDivElement | null>(null); // Kiểu dữ liệu của elementRef là RefObject<HTMLDivElement | null>
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { ref: elementRef as RefObject<HTMLDivElement>, size }; // Sử dụng kiểu dữ liệu RefObject<HTMLDivElement>
};

export default useElementSize;
