import React from 'react'

import bigPhoto from '../../images/aboutMain.jpeg'

import guysPhoto from '../../images/guys.jpg'

import gamesPhoto from '../../images/games.jpeg'

import oldGuysPhoto from '../../images/oldGuys.jpg'

import arenaPhoto from '../../images/arena.jpg'

import { Card, CardContent, Grid, Typography} from '@material-ui/core' 

import styles from './style.module.css'

const AboutBody = () => (
    <Grid
    className={styles.body}
    container
    direction="column"
    justify="space-around"
    alignItems="center"
    >
        <img src={bigPhoto} className={styles.mainPhoto}/>

        <div className={styles.container} >
        <h1 className={styles.titlesLeft}>What is G4U ?</h1>
        <Card 
        className={styles.card}
        variant="elevation"
        >
            <CardContent className={styles.cardContent}>
                <Typography variant="h5">
                    A gaming and esports hub
                    that empowers over 5
                    million gamers.

                    <Typography variant="h6">
                        We've built a safe and convenient
                        space to connect, share knowledge,
                        and exchange digital goods.
                    </Typography>

                </Typography>
                <img src={guysPhoto} className={styles.pic}/>
            </CardContent>

        </Card>
        </div>
        
        <div className={styles.container} >
        <h1 className={styles.titlesRight}>What can you do on G4U ?</h1>
        <Card 
        className={styles.card}
        variant="elevation"
        >
            <CardContent className={styles.cardContent}>
            <img src={gamesPhoto} className={styles.pic}/>
                <Typography variant="h5">
                    Buy video game digital items
                    such as in-game items, gift
                    cards, games and more.

                    <Typography variant="h6">
                        All transactions are safe and secure,
                        backed by our G4U Guarantee.
                    </Typography>

                </Typography>
                
            </CardContent>

        </Card>
        </div>

        <div className={styles.container} >
        <h1 className={styles.titlesLeft}>Who we are ?</h1>
        <Card 
        className={styles.card}
        variant="elevation"
        >
            <CardContent className={styles.cardContent}>
                <Typography variant="h5">
                    We're a group of passionate
                    gamers who started off with
                    the goal of empowering
                    gamers by offering a safe
                    and reliable place to
                    monetize your hard earned
                    digital goods.
                </Typography>
                <img src={oldGuysPhoto} className={styles.pic}/>
            </CardContent>

        </Card>
        </div>

        <div className={styles.container} >
        <h1 className={styles.titlesRight}>Where we are going ?</h1>
        <Card 
        className={styles.card}
        variant="elevation"
        >
            <CardContent className={styles.cardContent}> 
                <img src={arenaPhoto} className={styles.pic}/>
                <div className={styles.typs}>
                    <Typography variant="h6">
                        We aim to continue to empower our
                        community by staying on top of trends
                        and by constantly improving our
                        platform to the user needs.
                    </Typography>

                    <Typography variant="h6">
                        We've also set our sights on eSports
                        and we're ready to help you level up
                        in your favorite games.
                    </Typography>
                </div>
            </CardContent>

        </Card>
        </div>
    </Grid>
)

export default AboutBody;