import React from 'react'
import {  Button, Typography } from '@mui/material'
import styles from "./SuccessCard.module.css"
import {ReactComponent as Unicorn} from '../../assets/Union.svg'

const SuccessCard = ({title, body}) => {
  return (
    <div className={styles.cardWrapper} >
        <div className={styles.svgBackground}>
            <Unicorn />
        </div>
        <Typography sx={{margin:"26px 0px", fontWeight: "600", fontSize: "24px"}}>{title}</Typography>
        <Typography sx={{ fontWeight: "500", fontSize: "14px", color: "secondary.contrastText" }}>{body}</Typography>
        <Button color='secondary' variant='contained' 
         sx={{
            marginTop: "22px",
            width: "121px",
            height: "43px",
            backgroundColor: "#E3B748", // Change the background color of the button
            borderRadius: "23.5px", // Set the border radius of the button
            color: "Black", // Set the text color of the button
          }}
        >Read More</Button>
    </div>
  )
}

export default SuccessCard