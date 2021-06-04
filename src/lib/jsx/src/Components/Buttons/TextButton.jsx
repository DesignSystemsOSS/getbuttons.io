import "../../css/getbuttons.css";

function TextButton(props) {

  const _CLASS_LIST = "gbtn-text " + `${props.Animate}` + " " + `${props.ShadowEffect}`;

  return (
    <button className={_CLASS_LIST}>{props.TextContent}</button>
  )
}

export default TextButton;