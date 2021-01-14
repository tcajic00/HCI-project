import React from 'react'

import phonePhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/phone.jpg'

import emailPhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/email.png'

import addressPhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/location.jpg'

import bigPhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/aboutMain.jpeg'

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