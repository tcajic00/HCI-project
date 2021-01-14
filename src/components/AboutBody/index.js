import React from 'react'

import bigPhoto from '../../images/aboutMain.jpeg'

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
        <Card 
        className={styles.card}
        variant="elevation"
        >
            <CardContent>
                <Typography>

                </Typography>
                <img  className={styles.pic}/>
            </CardContent>

        </Card>
        <Card 
        variant="elevation"
        className={styles.card}
        >
            
        </Card>

        <Card 
        variant="elevation"
        className={styles.card}
        >
            
        </Card>

        <Card 
        variant="elevation"
        className={styles.card}
        >
            
        </Card>
    </Grid>
)

export default AboutBody;