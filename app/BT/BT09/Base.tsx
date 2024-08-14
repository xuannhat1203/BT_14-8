import React from "react";
import styles from "../../base.module.css";
const BaseAlert = ({ type, message }: { type: any; message: any }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{message}</div>;
};
export default BaseAlert;
