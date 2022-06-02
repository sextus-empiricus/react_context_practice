import React from 'react';

import {Footer} from './components/Footer/Footer';

import classes from './App.module.css';
import {Card} from './components/Card/Card';
import {ModeBox} from './components/Header/ModeBox/ModeBox';
import {AnimalsList} from './components/List/AnimalsList';
import {Title} from './components/Header/Title/Title';

const App = () => {



  return <>
    <div className={classes.App}>
      <header>
        <Title/>
        <ModeBox/>
      </header>

      <main>
        <Card>
          <h2 style={{marginBottom: '30px', color: '#f50de3'}}>Diurnal animals</h2>
          <AnimalsList/>
        </Card>
      </main>

      <footer>
        <Footer/>
      </footer>

      <div className={classes['circle-1']}/>
      <div className={classes['circle-2']}/>
    </div>
  </>
}

export
{
  App
}
  ;
