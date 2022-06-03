import {AnimalEntity} from '../../types/Animal';

const diurnalAnimals: AnimalEntity[] = [
    {
        name: 'Human',
        description: 'Really nice human.',
        img: 'diurnal/human.png'
    },
    {
        name: 'Bee',
        description: 'Incredible honeybee.',
        img: 'diurnal/bee.png'
    },
    {
        name: 'Dog',
        description: 'Dog - best friend you ever had.',
        img: 'diurnal/dog.png'
    },
    {
        name: 'Deer',
        description: 'Deer which makes you smile.',
        img: 'diurnal/deer.png'
    },
    {
        name: 'Elephant',
        description: 'The big one - elephant.',
        img: 'diurnal/elephant.png'
    },
];

const nocturnalAnimals: AnimalEntity[] = [
    {
        name: 'Owl',
        description: 'Really cleaver guy - owl.',
        img: 'nocturnal/owl.png'
    },
    {
        name: 'Hedgehog',
        description: 'Hedgehog the sweet.',
        img: 'nocturnal/hedgehog.png'
    },
    {
        name: 'Moth',
        description: 'Biggest brother of butterfly.',
        img: 'nocturnal/moth.png'
    },
    {
        name: 'Fox',
        description: 'He likes your chickens. Check your cote!',
        img: 'nocturnal/fox.png'
    },
    {
        name: 'Badger',
        description: 'Never seen.',
        img: 'nocturnal/badger.png'
    },
];

export {diurnalAnimals, nocturnalAnimals};