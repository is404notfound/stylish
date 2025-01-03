import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/pages/home.css';
import cloudy01 from '../assets/cloud01.png';
import cloudy02 from '../assets/cloud02.png';
import cloudy03 from '../assets/cloud03.png';
import cloudy04 from '../assets/cloud04.png';
import cloudy05 from '../assets/cloud05.png';
import cloudy06 from '../assets/cloud06.png';
import newYearMessage from '../assets/new-year-message.jpeg';

function Home() {
    const [circleSize, setCircleSize] = useState(200);
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [showMessage, setShowMessage] = useState(false);
    const [showSwipeMessage, setShowSwipeMessage] = useState(true);
    const scrollContainerRef = useRef(null);
    const backgroundRef = useRef(null);
    const circleRef = useRef(null);
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        let throttleTimer;

        const handleWheel = (event) => {
            if (throttleTimer) return;

            event.preventDefault();

            throttleTimer = setTimeout(() => {
                window.scrollBy({
                    left: event.deltaY,
                    behavior: 'smooth'
                });
                throttleTimer = null;
            }, 16);
        };

        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            handleCircleSizeChange(window.scrollX);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, [navigate]);

    const handleCircleSizeChange = (scrollPosition) => {
        if (!backgroundRef.current || !circleRef.current) return;

        const maxScroll = document.documentElement.scrollWidth - window.innerWidth;
        const minCircleSize = 200;
        const maxCircleSize = Math.max(window.innerWidth, window.innerHeight) * 1.5;

        if (scrollPosition <= maxScroll) {
            const progress = scrollPosition / maxScroll;
            const newSize = minCircleSize + (maxCircleSize - minCircleSize) * progress;
            setCircleSize(newSize);

            let backgroundColorValue = 'transparent';
            if (scrollPosition > maxScroll / 2) {
                const bgProgress = (scrollPosition - maxScroll / 2) / (maxScroll / 2);
                const startColor = [255, 255, 255, 0];
                const endColor = [248, 255, 221, 1];

                const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * bgProgress);
                const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * bgProgress);
                const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * bgProgress);
                const a = Math.round(startColor[3] + (endColor[3] - startColor[3]) * bgProgress);

                backgroundColorValue = `rgba(${r}, ${g}, ${b}, ${a})`;
            }
            setBackgroundColor(backgroundColorValue);

            if (scrollPosition > 0) {
                setShowSwipeMessage(false);
            }

            if (scrollPosition >= maxScroll - 50) {
                setShowMessage(true);
                setTimeout(() => {
                    navigate('/components');
                }, 2000);
            } else {
                setShowMessage(false);
            }
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current) return;

        const x = e.clientX;
        const walk = (x - startX) * 1;
        scrollContainerRef.current.scrollLeft -= walk;
        setStartX(x);
        handleCircleSizeChange(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    }

    return (
        <div className="container" ref={scrollContainerRef}>
            <div className="background" style={{ backgroundColor: backgroundColor }} ref={backgroundRef}>
                {showMessage && (
                    <div className="message" style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                    }}>
                        <img src={newYearMessage} alt="new-year-message" className='message-img' />
                    </div>
                )}
                <div className="circle-container" style={{
                }}>
                    {showSwipeMessage && (<span className='circle-message'> swipe me » </span>)}
                    <div
                        className="animated-circle"
                        ref={circleRef}
                        style={{
                            width: circleSize,
                            height: circleSize,
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    ></div>
                </div>
            </div>
            <div className="cloud">
                <img src={cloudy01} alt="cloud1" className="cloud-img cloud1" />
                <img src={cloudy02} alt="cloud2" className="cloud-img cloud2" />
                <img src={cloudy03} alt="cloud3" className="cloud-img cloud3" />
                <img src={cloudy04} alt="cloud4" className="cloud-img cloud4" />
                <img src={cloudy05} alt="cloud5" className="cloud-img cloud5" />
                <img src={cloudy06} alt="cloud6" className="cloud-img cloud6" />
            </div>
        </div>
    );
}

export default Home;