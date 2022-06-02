import React from 'react';

import classes from './Title.module.css';

interface Props {
}

const Title = (props: Props) => {

    return (
        <h1 className={classes.Title}>
            <span className={classes['span-1']}>react</span>
            <span className={classes['span-2']}>context</span> -
            <span className={classes['span-3']}> learning app</span>
        </h1>
    );
}

export {Title};