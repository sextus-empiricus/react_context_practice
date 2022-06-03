import React, {useContext} from 'react';
import {ListElement} from './ListElement';

import {ThemeContext} from '../../App';

import {diurnalAnimals, nocturnalAnimals} from '../../db/animals';
import classes from './AnimalsList.module.css';

interface Props {

}

const AnimalsList = (props: Props) => {
    const darkTheme = useContext(ThemeContext)
    const animals = darkTheme ? nocturnalAnimals : diurnalAnimals;
    return (
        <ul className={classes.AnimalsList}>
            {
                animals.map(el => <ListElement animal={el} key={el.name}/>)
            }
        </ul>
    );
}

export {AnimalsList};