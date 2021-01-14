import React from 'react'

import phonePhoto from '../../images/phone.jpg'

import emailPhoto from '../../images/email.png'

import addressPhoto from '../../images/location.jpg'

import bigPhoto from '../../images/contactBig1.jpg'

import { Card, CardContent, Grid, Typography} from '@material-ui/core' 

import styles from './style.module.css'

const ContactBody = () => (
    <Grid
    className={styles.body}
    container
    direction="column"
    justify="space-around"
    >
        <img src={bigPhoto} className={styles.mainPhoto}/>
        <div className={styles.bodyContent}>
        <div className={styles.emailContainer}>
            <h1>E-mail:</h1>
            <Card 
            className={styles.card}
            variant="elevation"
            >
                <CardContent
                    className={styles.cardContent}
                >
                    <Typography className={styles.typo} variant="title">
                        info@g4u.hr
                    </Typography>

                    
                    <img className={styles.img} src={emailPhoto}/>
                </CardContent>
                
            </Card>
        </div>

        <div className={styles.phoneContainer}>
            <h1 className={styles.title}>Phone:</h1>
            <Card 
            variant="elevation"
            className={styles.card}
            >
                <CardContent
                    className={styles.cardContent}
                >
                    <img className={styles.img} src={phonePhoto}/>
                    <Typography className={styles.typo} variant="title">
                        +385 12 345 6789
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
        
        <div className={styles.addressContainer}>
            <h1>Address:</h1>
        <Card 
        variant="elevation"
        className={styles.address}
        >
            <CardContent
                className={styles.addcc}
            >
                <Typography className={styles.typo} variant="title">
                    Head office:
                    <Typography variant="subtitle1">
                        Ulica Matice hrvatske 15, Split, Croatia
                    </Typography>
                </Typography>
                <Typography className={styles.typo} variant="title">
                    Research and development:
                    <Typography variant="subtitle1">
                        Metković, Croatia
                    </Typography>
                </Typography>
            </CardContent>
            <img className={styles.addimg} src={addressPhoto}/>
        </Card>
        </div>

        
            
        </div>
        
    </Grid>
)

export default ContactBody;