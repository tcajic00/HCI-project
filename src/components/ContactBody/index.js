import React from 'react'

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

                
                <img className={styles.img} src="https://freeiconshop.com/wp-content/uploads/edd/mail-open-outline-filled.png"/>
            </CardContent>
            
        </Card>
        <Card 
        variant="elevation"
        className={styles.card}
        >
            <CardContent
                className={styles.cardContent}
            >
                <img className={styles.img} src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"/>
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
            <img className={styles.addimg} src="https://static.vecteezy.com/system/resources/previews/001/265/765/non_2x/map-with-location-pin-vector.jpg"/>
        </Card>
    </Grid>
)

export default ContactBody;