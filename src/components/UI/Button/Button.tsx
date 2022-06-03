import React from 'react';

import classes from './Button.module.css';

interface Props {
    content: string
    actionHandler: () => void;
}

const Button = ({content, actionHandler}: Props) => {
    return (
        <button className={classes.Button} onClick={actionHandler}>{content}</button>
    );
}

export {Button};