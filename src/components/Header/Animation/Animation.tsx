import React, {useContext, useEffect, useRef} from 'react';
import lottie from 'lottie-web';

import sunAnimation from '../../../assets/lottie-animatios/sun.json'
import moonAnimation from '../../../assets/lottie-animatios/moon.json'

import {ThemeContext} from '../../../App';

import classes from './Animation.module.css';

const Animation = () => {
    const darkMode = useContext(ThemeContext);
    const sunRef = useRef<any>(null);
    const moonRef = useRef<any>(null);

    useEffect(() => {
        lottie.destroy();

        lottie.loadAnimation({
            container: sunRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: sunAnimation,
        })

        lottie.loadAnimation({
            container: moonRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: moonAnimation
        })

    }, [darkMode])


    return <>
        {!darkMode && <div className={classes.Animation} ref={sunRef}/>}
        {darkMode && <div className={classes.Animation} ref={moonRef}/>}
    </>
}

export {Animation};