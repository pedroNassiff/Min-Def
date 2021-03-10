import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";



const useStyles = makeStyles((theme) => ({
 
}));


export default function SingleLegend({defOficNum,tel,email,img,dir}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div>
         
            <Accordion>
                <Card >
                    <Card.Header >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <img src={img} class="img-fluid mx-auto d-block" style={{height:"200px", borderRadius: "100px", height:"6em", width:"6em", marginLeft:  matchesSM ? "16em" : "8em", marginTop: "1em", objectFit: "cover"}} alt=" responsive"/>
                           <p className={classes.textCenter} style={{fontFamily: "Roboto", fontSize: matchesSM ? "20px" :"25px", marginBottom: "1em", marginTop:"1em", width: matchesSM ? "11em" : undefined, marginLeft: matchesSM ? "10.2em" : undefined}}>{defOficNum}</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                 
                        <p className="font-weight-normal"> <ContactPhoneIcon style={{width: "25px", height: "25px", margin: "0px auto"}} />{dir}</p>
 
                        <p className="font-weight-normal"> <ContactPhoneIcon style={{width: "25px", height: "25px", margin: "0px auto"}} />{tel}</p>
                        <p className="font-weight-normal">  <AlternateEmailIcon style={{width: "25px", height: "25px", margin: "0px auto"}} />{email}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    )
}
