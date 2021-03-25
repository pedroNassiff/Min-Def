//acciones
import AccionesJudiciales from 'pages/acciones/accionesJudiciales'
import Convenios from 'pages/acciones/convenios'
import DefensoriaItinerante from 'pages/acciones/defensoriaItinerante'
import Informes from 'pages/acciones/informes'
import Monitoreos from 'pages/acciones/monitoreos'
import ProyectoDeLey from 'pages/acciones/proyectoDeLey'

export default [
    {
        path: "/acciones/accionesJudiciales",
        component: AccionesJudiciales,
        exact: true
    },
    {
        path: "/acciones/convenios",
        component: Convenios,
        exact: true
    },
    {
        path: "/acciones/defensoriaItinerante",
        component: DefensoriaItinerante,
        exact: true
    },
    {
        path: "/acciones/informes",
        component: Informes,
        exact: true
    },
    {
        path: "/acciones/monitoreos",
        component: Monitoreos,
        exact: true
    },
    {
        path: "/acciones/proyectoDeLey",
        component: ProyectoDeLey,
        exact: true
    }
]
