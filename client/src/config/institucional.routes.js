//acciones
import DondeEstamos from 'pages/institucional/dondeEstamos'
import MPD from 'pages/institucional/mpd'
import Organizacion from 'pages/institucional/organizacion'
import QueHacemos from 'pages/institucional/queHacemos'


export default [
    {
        path: "/institucional/dondeEstamos",
        component: DondeEstamos,
        exact: true
    },
    {
        path: "/institucional/mpd",
        component: MPD,
        exact: true
    },
    {
        path: "/institucional/organizacion",
        component: Organizacion,
        exact: true
    },
    {
        path: "/institucional/queHacemos",
        component: QueHacemos,
        exact: true
    }
]