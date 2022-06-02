import React from 'react';

import classes from './Button.module.css';

interface Props {
    content: string
}

const Button = ({content}: Props) => {
    return (
        <button className={classes.Button}>{content}</button>
    );
}

export {Button};