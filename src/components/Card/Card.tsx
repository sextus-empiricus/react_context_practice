import React, {CSSProperties, ReactNode} from 'react';

import classes from './Card.module.css';

interface Props {
    children?: ReactNode;
}

const Card = ({children}: Props) => {
    return (
        <div className={classes.Card}>
            {children}
        </div>
    );
}

export {Card};