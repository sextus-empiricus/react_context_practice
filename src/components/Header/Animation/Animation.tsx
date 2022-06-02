import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';

import sunAnimation from '../../../assets/lottie-animatios/sun.json'
import oweAnimation from '../../../assets/lottie-animatios/owl.json'

import classes from './Animation.module.css';

const Animation = () => {
    const cowRef = useRef<any>(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: cowRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: sunAnimation,
        })
    }, [])

    return <div className={classes.Animation} ref={cowRef}/>

}

export {Animation};