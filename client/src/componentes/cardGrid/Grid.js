import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Avatar } from 'antd';
import {
  PhoneOutlined,
} from "@ant-design/icons";
import './Grid.scss';
import { Collapse } from 'antd';



const { Panel } = Collapse;

const ComponentName = () => {

  return (
    <div className="preFooterContainer">
      <div className="bottomContainer" style={{ cursor: 'pointer' }}>
        <div>
          <span>Penales Resistencia / Penales Interior</span>
        </div>
        <div>
          <Avatar shape="circle" className="socialPhone" size={45} icon={<PhoneOutlined />} />
        </div>
      </div>
      <div className="bottomContainer" style={{ cursor: 'pointer' }}>
        <div>
          <span>Defensorías Públicas Civiles</span>
        </div>
        <div>
          <Avatar shape="circle" className="socialPhone" size={45} icon={<PhoneOutlined />} />
        </div>
      </div>
      <div className="bottomContainer" style={{ cursor: 'pointer' }}>
        <div>
          <span>Asesorias de Ninas, Niños y Adolescentes</span>
        </div>
        <div className="phoneContainer">
          <Avatar shape="circle" className="socialPhone" size={45} icon={<PhoneOutlined />} />
        </div>
      </div>
    </div>


    /*  <Row justify="center">
       <Col span={8} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
       <div className="bottomContainer" style={{ cursor: 'pointer' }}>
           <div>
             <span>Penales Resistencia / Penales Interior</span>
           </div>
           <div>
             <Avatar shape="circle" className="socialPhone" size={45} icon={<PhoneOutlined />} />
           </div>
         </div>
       </Col>
       <Col span={8} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
       <div className="bottomContainer" style={{ cursor: 'pointer' }}>
           <div>
             <span>Defensorías Públicas Civiles</span>
           </div>
           <div>
             <Avatar shape="circle" className="socialPhone" size={45} icon={<PhoneOutlined />} />
           </div>
         </div>
       </Col>
       <Col span={8} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
         <div className="bottomContainer" style={{ cursor: 'pointer' }}>
           <div>
             <span>Asesorias de Ninas, Niños y Adolescentes</span>
           </div>
           <div className="phoneContainer">
             <Avatar shape="circle" className="socialPhone" size={45} icon={<PhoneOutlined />} />
           </div>
         </div>
       </Col>
     </Row> */
  );
};



export default ComponentName;

