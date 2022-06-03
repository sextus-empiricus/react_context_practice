import React from 'react';

import {AnimalEntity} from '../../../types/Animal';

import classes from './ListElement.module.css';


interface Props {
    animal: AnimalEntity
}


const ListElement = ({animal}: Props) => {

    return (

        <li className={classes.ListElement}>
            <h3>{animal.name}</h3>
            <img src={`./img/${animal.img}`} alt={animal.name}/>
            <p>{animal.description}</p>
        </li>

    );
}

export {ListElement};