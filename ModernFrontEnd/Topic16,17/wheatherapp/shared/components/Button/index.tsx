import React, { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface Props {
  color?: "primary" | "waring";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  color = "primary",
  size = "md",
  children,
}) => {
  return <button className={`${styles[size]}`}>{children}</button>;
};
