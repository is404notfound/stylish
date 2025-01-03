import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/drawer.css';

const Drawer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null); 
      const drawerRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (e.clientX < 50) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setIsOpen(true);
          }, 300);
        } else {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
          }, 300);
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timeoutRef.current);
      };
    }, []);
  
    return (
      <>
        <div className={`drawer ${isOpen ? 'open' : ''}`} ref={drawerRef}>
          <nav>
            <ul>
              {children}
            </ul>
          </nav>
        </div>
      </>
    );
  };
  
  export default Drawer;