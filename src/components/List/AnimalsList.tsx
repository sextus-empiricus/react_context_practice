import React from 'react';

import classes from './AnimalsList.module.css';
import {diurnalAnimals} from '../../db/animals';
import {ListElement} from './ListElement';

interface Props {

}

const AnimalsList = (props: Props) => {
    return (
        <ul className={classes.AnimalsList}>
            {
                diurnalAnimals.map(el => <ListElement animal={el}/>)
            }
        </ul>
    );
}

export {AnimalsList};