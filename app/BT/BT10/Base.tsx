import Image from "next/image";
import React from "react";
import BaseButton from "./BaseButton";
import style from "../../bt10.module.css";
export default function Base({
  content,
  title,
  img,
  type,
  children,
}: {
  content: any;
  title: any;
  img: any;
  type: any;
  children: any;
}) {
  return (
    <div className={style.container}>
      <div>
        <Image width={210} height={200} src={img} alt={title} />
      </div>
      <div className={style.text}>{title}</div>
      <div>{content}</div>
      <BaseButton type={type}>{children}</BaseButton>
    </div>
  );
}
