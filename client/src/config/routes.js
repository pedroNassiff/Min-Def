//Layout
import LayoutMain from 'layouts/LayoutMain'

//Pages
import Home from 'pages/Home'
import Contact from 'pages/Contact'

import biblioteca from 'pages/biblioteca'

import Dashboard from 'pages/Admin/dashboard'

import RequisitosPenales from 'componentes/ui/RequisitosPenales'
import RequisitosCiviles from 'componentes/ui/RequisitosCiviles'
import RequisitosNiños from 'componentes/ui/RequisitosNiños'
import Miembros from 'componentes/ui/Miembros'
import MiembrosCiviles from 'componentes/ui/MiembrosCiviles'
import MiembrosANNA from 'componentes/ui/MiembrosANNA'



//Other
import Error404 from 'pages/Error404'

//login
import Login from 'componentes/auth/Login'
import NuevaCuenta from 'componentes/auth/NuevaCuenta'
//routes.algo.js
import Acciones from 'config/acciones.routes'
import Institucional from 'config/institucional.routes'
import Mienbros from 'config/mienbros.routes'
import saludMental from 'config/saludMental.routes'
import AdminBiblioteca from 'pages/biblioteca/AdminBiblioteca';

const routes = [
    {
        path: "/",
        component: LayoutMain,
        exact: false,
        routes: [
            ...Acciones,
            ...Institucional,
            ...Mienbros,
            ...saludMental,
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/dashboard",
                component: Dashboard,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path: "/biblioteca",
                component: biblioteca,
                exact: true
            },
            {
                path: "/admin-biblioteca",
                component: AdminBiblioteca,
                exact: true
            },
            {
                path: "/login",
                component: Login,
                exact: true
            },
            {
                path: "/nueva-cuenta",
                component: NuevaCuenta,
                exact: true
            },
            {
                path: "/miembros",
                component: Miembros,
                exact: false
            },
            {
                path: "/miembrosCiviles",
                component: MiembrosCiviles,
                exact: false
            },
            {
                path: "/miembrosANNA",
                component: MiembrosANNA,
                exact: false
            },
            {
                path: "/requisitos-penales",
                component: RequisitosPenales,
                exact: true
            },
            {
                path: "/requisitos-civiles",
                component: RequisitosCiviles,
                exact: true
            },
            {
                path: "/requisitos-niños",
                component: RequisitosNiños,
                exact: true
            },
            {
                component: Error404
            }
        ]

    },
]

export default routes