import React from 'react'

import phonePhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/phone.jpg'

import emailPhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/email.png'

import addressPhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/location.jpg'

import bigPhoto from 'C:/Users/TOME/Desktop/test1/HCI-project/src/images/contactBig1.jpg'

import { Card, CardContent, Grid, Typography} from '@material-ui/core' 

import styles from './style.module.css'

const ContactBody = () => (
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
            <CardContent
                className={styles.cardContent}
            >
                <Typography className={styles.typo} variant="title">
                    Email: info@g4u.hr
                </Typography>

                
                <img className={styles.img} src={emailPhoto}/>
            </CardContent>
            
        </Card>
        <Card 
        variant="elevation"
        className={styles.card}
        >
            <CardContent
                className={styles.cardContent}
            >
                <img className={styles.img} src={phonePhoto}/>
                <Typography className={styles.typo} variant="title">
                    Phone: +385 12 345 6789
                </Typography>
            </CardContent>
            
        </Card>

        <Card 
        variant="elevation"
        className={styles.address}
        >
            <CardContent
                className={styles.addcc}
            >
                <Typography className={styles.typo} variant="title">
                    Address: 
                    <Typography variant="subtitle1">
                        Head office:
                        <Typography variant="subtitle2">
                            Ulica Matice hrvatske 15, Split, Croatia
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1">
                        Research and development:
                        <Typography variant="subtitle2">
                            Metković, Croatia
                        </Typography>
                    </Typography>
                </Typography>
                
            </CardContent>
            <img className={styles.addimg} src={addressPhoto}/>
        </Card>
    </Grid>
)

export default ContactBody;