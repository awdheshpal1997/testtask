import React from 'react'
import { useEffect, useState } from 'react';

import logo from '../../asset/back_to_top_icon.svg';

const Y_OFFSET_LIMIT = 300;

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > Y_OFFSET_LIMIT) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton ? <img
                src={logo}
                onClick={scrollToTop}
                className={`fixed translate-y-43 right-43 bottom-43 cursor-pointer scale-75	${showButton ? 'translate-y-0' : ''}`}
                alt='backtoTop'
            /> : <></>}
        </>
    );
};

export default BackToTop;

