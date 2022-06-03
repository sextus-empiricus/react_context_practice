import React, {useContext} from 'react';

import classes from './Title.module.css';
import {ThemeContext} from '../../../App';

interface Props {
}

const Title = (props: Props) => {
    const darkTheme = useContext(ThemeContext);
    return (
        <h1 className={`${classes.Title} ${darkTheme && classes['Title--dark']}`}>
            <span className={classes['span-1']}>react</span>
            <span className={classes['span-2']}>context</span> -
            <span className={classes['span-3']}> learning app</span>
        </h1>
    );
}

export {Title};