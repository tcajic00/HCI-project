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
                <Typography className={styles} color="textPrimary">
                    E-mail: info@g4u.hr
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
                <Typography className={styles} color="textPrimary">
                    Phone: +385 12 345 6789
                </Typography>
            </CardContent>
            
        </Card>
    </Grid>
)

export default ContactBody;