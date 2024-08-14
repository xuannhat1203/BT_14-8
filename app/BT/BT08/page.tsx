import React from "react";
import style from "../../bt08.module.css";

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.prev}>
        <i className="fa-solid fa-arrow-left"></i> Prev
      </div>
      <div>
        <ul className={style.listUl}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </div>
      <div className={style.next}>
        Next <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}
