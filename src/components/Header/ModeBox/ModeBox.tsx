import React, {useContext} from 'react';
import {Animation} from '../Animation/Animation';
import {Button} from '../../UI/Button/Button';

import classes from './ModeBox.module.css';
import {ThemeContext} from '../../../App';

interface Props {
    btnActionHandler: () => void;
}

const ModeBox = ({btnActionHandler}: Props) => {
    const darkTheme = useContext(ThemeContext);
    return (
        <div className={classes.Mode}>
            <div className={`${classes['bgc-box']} ${darkTheme && classes['bgc-box--dark']}`}>
                <div className={classes['animation-wrapper']}>

                    <div className={classes['overflow-wrapper']}>
                        <Animation/>
                    </div>

                    <div className={`${classes['mode-box']} ${darkTheme && classes['mode-box--dark']}`}>
                        <p>{darkTheme ? 'night' : 'day'}</p>
                    </div>
                </div>
            </div>

            <Button content="Switch" actionHandler={btnActionHandler}/>
        </div>

    );
}

export {ModeBox};