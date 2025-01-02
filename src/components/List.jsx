import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/list.css';

const List = ({ items }) => {
  const listRef = useRef(null);
  const itemRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      distributeItems();

      if (scrollContainerRef.current && listRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const scrollHeight = scrollContainerRef.current.scrollHeight;
        const clientHeight = scrollContainerRef.current.clientHeight;

        if (scrollHeight > clientHeight) {
          const scrollPercent = scrollTop / (scrollHeight - clientHeight);
          const newRotation = scrollPercent * 360 * 2;
          setRotation(newRotation);
        }
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        undistributeScroll();
      }, 100); 
    };

    const distributeItems = () => {
      if (!listRef.current || isScrolling) return; 
      if (listRef.current) {
        const numItems = listRef.current.children.length;
        const radius = listRef.current.offsetWidth / 2;
      
        Array.from(listRef.current.children).forEach((item, index) => {
          const angle = (360 / numItems) * index;
          const x = radius * Math.cos(angle * Math.PI / 180);
          const y = radius * Math.sin(angle * Math.PI / 180);

          item.style.left = '50%';
          item.style.top = '50%';
          item.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
          item.style.position = 'absolute';
        });
        setIsScrolling(false);
      }
    };

    const undistributeScroll = () => {
      if (listRef.current) {
        const list = listRef.current;
        list.style.borderRadius = '0%';
        list.style.transform = 'rotate(360deg)';
        scrollContainerRef.current.scrollTop = 0;

        Array.from(listRef.current.children).forEach((item) => {
          item.style.left = '';
          item.style.top = '';
          item.style.transform = '';
          item.style.transition = 'transform 2s';
          item.style.position = 'static';
          
        });
      }
    };

    if (scrollContainerRef.current && listRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimeout); 
    };
  }, [items, isScrolling]);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div
        className="circular-list"
        ref={listRef}
        style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
      >
        {items.map((item, index) => (
          <div className="item" key={index} ref={itemRef}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;