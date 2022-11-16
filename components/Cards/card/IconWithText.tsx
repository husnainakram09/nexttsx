import { StarFilled } from "@ant-design/icons";
import React from "react";

interface PropsType {
  icon: JSX.Element;
  color?: any;
  bgcolor?:any,
  label: any;
  labelSec?: any;
}
const IconWithText: React.FC<PropsType> = ({
    icon,
    color,
    bgcolor,
    label,
    labelSec,
}) => {
    const div: React.CSSProperties = {
      backgroundColor: bgcolor,
      width: "fit-content",
      borderRadius: "5px",
      padding: "0 5px",
    };
  return (
    <div style={div}>
      <span style={{ color: color}}>{icon}</span>
      <span style={{ fontSize: "14px", color: color, marginLeft: "-7px" }}>
        {label}
      </span>
      <span style={{ fontSize: "10px", marginLeft: "3px" }}>{labelSec}</span>
    </div>
  );
};

export default IconWithText;
