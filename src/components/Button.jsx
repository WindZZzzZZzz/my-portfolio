import React from "react";
import "./css/Button.css";

export default function Button({text, className, href, newTab, isWrapped}) {
  if (isWrapped) {
    return <div className="main-button">{text}</div>;
  }
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
