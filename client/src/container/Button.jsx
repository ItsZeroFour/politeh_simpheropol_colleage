import style from "./Style.module.scss";

const Button = ({ width, textContent, margin, padding, fontSize }) => {
  return (
    <button
      className={style.button__blue}
      style={{
        width: width,
        margin: margin,
        padding: padding,
        fontSize: fontSize,
      }}
    >
      {textContent}
    </button>
  );
};

export default Button;
