import React from "react";
import "./WhatsApp.scss";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import WhatsAppConf from '../../config/WhatsApp'

const WhatsApp = () => {
  return (
    <a
      href={WhatsAppConf.hrefWeb+WhatsAppConf.num}
      className="whatsapp"
      target="_blank"
    >
      <Avatar
        shape="circle"
        style={{ backgroundColor: "#4ced69" }}
        size={60}
        icon={<WhatsAppOutlined style={{ color: "white" }} />}
      />
    </a>
  );
};

export default WhatsApp;
