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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AlbumIcon from '@material-ui/icons/Album';

const useStyles = makeStyles(theme => ({
    ListItemText: {
        fontSize: "2rem"
    },
    botonUbicacion2: {
        fontFamily: "Roboto",
        borderColor: "#00a0dc",
        color: "white",
        borderWidth: 2,
        borderRadius: 50,
        fontFamily: "Roboto",
        backgroundColor: "#00a0dc",
        fontSize: "0.8em",
        marginBottom: "2em",
        fontWeight: "bold",
       "&:hover": {
           backgroundColor: "#00a0dc",
           color: "white",
       }
    },

     
}))

export default function RequisitosNiños() {

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
                    style={{ fontSize: "1.7em", marginTop:"3em", background: "#00a0dc",  color: "white", maxWidth: "43em", width: "35em", marginLeft: "-3em"}}
                    align={matchesSM ? "center" : undefined}
                    >Podemos proporcionártelo, si necesitas que te asesoren y/o representen en:
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
                        >Representación de niños niñas y adolescentes y <br/> personas con padecimiento mental.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container xs={6} sm={6} >
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Tramites de filiaciones, guardas pre adoptivas en <br/>algunos casos.
                    </Typography>
                </Grid>
            </Grid>
            
        </Grid>
        <Grid container direction="row" spacing={3} style={{ padding:"6em", marginTop:"-12em"}}> 
            <Grid item container xs={6} sm={6}>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Solicitud de avenimientos por cuidado personal, <br/> responsabilidad parental y asistencia alimentaria para <br/> niños niñas y adolescentes.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container xs={6} sm={6}  >
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"1.5rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        >Intervención en cuanto a los derechos de las víctimas, <br/>testigos o imputados menores de edad o personas con <br/> padecimiento mental.
                    </Typography>
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
                    style={{ fontSize: "1.7em", background: "#00a0dc",  color: "white", maxWidth: "43em", width: "30em", marginLeft: "-3em"}}
                    align={matchesSM ? "center" : undefined}
                    >¿Cuándo puedo acceder a un abogado en estos temas?
                </Typography>    
            </Grid>    
        </Grid>   
        <Grid container direction="row" style={{ padding:"6em", marginTop:"-9em"}}> 
            <Grid item container  xs={12} sm={6} md>
                <Grid item>
                    <AlbumIcon
                    style={{ marginRight:"2rem" }} />
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        style={{ fontSize:"1.5rem" }}
                        
                        >Para solicitar asesoramiento o representación para niñas niños y adolescentes, personas con padecimiento mental en <br/> todos los casos no es necesario acreditar escasez de recursos.
                    </Typography>
                </Grid>
            </Grid>         
        </Grid>
        <Grid container>
            <Grid item>
                <Button
                    
                    component={Link}
                    to="/requisitos-niños" 
                    variant="outlined" 
                    className={classes.botonUbicacion2} 
                    style={{ marginRight: 20, marginLeft: "53em", marginBottom: "5em", justify: "center", align: "center" }}>
                    <span style={{ marginRight: 0 }}>CONTACTANOS</span>
                </Button>
            </Grid>
        </Grid>
        
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

        </div>

    );
}