import React from "react";
import { Layout } from "antd";
import LoadRoutes from "config/LoadRoutes";
import { ThemeProvider } from '@material-ui/styles';
import MenuTop from "componentes/menuTop";
import Whatsapp from 'componentes/whatsapp'
import Colapse from 'componentes/Colapse';
import Footer from 'componentes/ui/Footer';

import "./LayoutMain.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content } = Layout;
  
  return (
    <Layout>
      <MenuTop />
      <Content>
        <div className="contentLoadRoutes">
          <LoadRoutes routes={routes} />
        </div>
      </Content>

      <Whatsapp/>
    

    </Layout>
  );
}
