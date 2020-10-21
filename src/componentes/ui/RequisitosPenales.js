import React, {useState}  from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'componentes/ui/Footer';
import Hidden from '@material-ui/core/Hidden'
import AlbumIcon from '@material-ui/icons/Album';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    ListItemText: {
        fontSize: "2rem"
    }

     
}))

export default function RequisitosPenales() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);
    
  return (
        <div>
            
        <Grid 
            container
            style={{padding: "5em"}}    
            >
            <Grid item>
           
            <Typography
                    variant="h2"
                    style={{ fontSize: "1.7em", marginTop:"3em"}}
                    align={matchesSM ? "center" : undefined}
                    >Podemos proporcionártelo, si necesitas que te asesoren y/o representen en:
                </Typography>    
            </Grid>    
        </Grid>
        <Grid item container direction="row">  
        <Grid container direction="column" spacing={2} style={{ padding:"6em", marginTop:"-9em"}}> 
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"2rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Citaciones.
                    </Typography>
                </Grid>
            
            <Grid item container xs={6} sm={6} style={{ marginLeft: "25em", marginTop: "-1.5em"}}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Contravenciones.
                    </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Grid container direction="column" spacing={3} style={{ padding:"6em", marginTop:"-12em"}}> 
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"2rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Denuncias.
                    </Typography>
                </Grid>
            
            <Grid item container xs={6} sm={6} style={{ marginLeft: "25em", marginTop: "-1.5em"}}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Privaciones de libertad.
                    </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Grid container direction="column" spacing={3} style={{ padding:"6em", marginTop:"-12em"}}> 
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"2rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Delitos.
                    </Typography>
                </Grid>
            
            <Grid item container xs={6} sm={6} style={{ marginLeft: "25em", marginTop: "-1.5em"}}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Violencia policial.
                    </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Grid> 
        {/*--2do Contenedor---*/}
        <Grid 
            container
            style={{padding: "5em", marginTop:"-5em"}}    
            >
            <Grid item>
           
            <Typography
                    variant="h2"
                    style={{ fontSize: "1.7em"}}
                    align={matchesSM ? "center" : undefined}
                    >¿Cuándo puedo acceder a un abogado en estos temas?
                </Typography>    
            </Grid>    
        </Grid>   
        <Grid container direction="row" spacing={2} style={{ padding:"6em", marginTop:"-9em"}}> 
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"2rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >En los casos en que te haya llegado un papel diciendo <br/> que vayas a tribunales por una causa penal  o <br/> contravencional, siempre que no designes un abogado particular.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item md>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Cuando hayas sido víctima de golpes, insultos o trato denigrante por parte de personal policial.
                    </Typography>
                </Grid>
            </Grid>
            
        </Grid>
        <Grid container direction="row" spacing={3} style={{ padding:"6em", marginTop:"-12em", flexWrap:"inherit"}}> 
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >En ocasiones en que tenés conocimiento que alguien <br/> te denunció por haber cometido un delito o <br/> contravención y querés tener asesoramiento.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container xs={6} sm={6} style={{ flexWrap:"inherit" }}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >En los casos en que hayan privado de libertad, y no hayas designado un abogado particular, nuestra intervención será inmediata, luego del aviso de las autoridades judiciales que intervengan en el caso.
                    </Typography>
                </Grid>
            </Grid>
            
        </Grid>
        
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

        </div>

    );
}