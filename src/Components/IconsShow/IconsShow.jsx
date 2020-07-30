import React from "react";
import './IconsShow.scss'

let arrayIcons = [0,1,2,3,4,5];
const IconsShow = () => {
  return (
    <div className="container-icons">
      {arrayIcons.map(icon => (
        <i  key={icon}className={`icons-${icon}`}/>
      ))}
    </div>
  );
};

export default IconsShow;
