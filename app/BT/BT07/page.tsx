import style from "../../button.module.css";
export default function page() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        position: "relative",
        top: "20px",
      }}
    >
      <button className={style.btn1}>Success</button>
      <button className={style.btn2}>Warning</button>
      <button className={style.btn3}>Danger</button>
      <button className={style.btn4}>Primary</button>
    </div>
  );
}
