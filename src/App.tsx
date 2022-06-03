import React, {createContext, useState} from 'react';

import {Footer} from './components/Footer/Footer';

import {Card} from './components/Card/Card';
import {ModeBox} from './components/Header/ModeBox/ModeBox';
import {AnimalsList} from './components/List/AnimalsList';
import {Title} from './components/Header/Title/Title';

import classes from './App.module.css';

const ThemeContext = createContext<boolean>(true);

const App = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setDarkTheme(prev => !prev);
    }

    return <>
        <ThemeContext.Provider value={darkTheme}>
            <div className={classes.App}>

                <div className={`${classes.background} ${darkTheme && classes['background--dark']}`}/>

                <header>
                    <Title/>
                    <ModeBox btnActionHandler={toggleTheme}/>
                </header>

                <main>
                    <Card>
                        <h2 style={{
                            marginBottom: '30px',
                            color: '#356de3'
                        }}>{darkTheme ? 'Nocturnal animals' : 'Diurnal animals'}</h2>
                        <AnimalsList/>
                    </Card>
                </main>

                <footer>
                    <Footer/>
                </footer>

                <div className={`${classes['circle-1']} ${darkTheme && classes['circle-1--dark']}`}/>
                <div className={`${classes['circle-2']} ${darkTheme && classes['circle-2--dark']}`}/>
            </div>
        </ThemeContext.Provider>
    </>
}

export {App, ThemeContext};
