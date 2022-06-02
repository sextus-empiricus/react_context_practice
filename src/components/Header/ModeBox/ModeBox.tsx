import React from 'react';

import {Animation} from '../Animation/Animation';
import {Button} from '../../UI/Button/Button';

import classes from './ModeBox.module.css';

interface Props {

}

const ModeBox = (props: Props) => {

    return (
        <div className={classes.Mode}>
            <div className={classes['bgc-box']}>
                <div className={classes['animation-wrapper']}>

                    <Animation/>

                    <div className={classes['mode-box']}>
                        <p>day</p>
                    </div>
                </div>
            </div>

            <Button content="Switch"/>

        </div>

    );
}

export {ModeBox};