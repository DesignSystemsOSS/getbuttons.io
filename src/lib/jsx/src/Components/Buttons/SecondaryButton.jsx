import "../../css/getbuttons.css";

function SecondaryButton(props) {

  const _CLASS_LIST = "gbtn-secondary " + `${props.Animate}` + " " + `${props.ShadowEffect}`;
  return (
    <button className={_CLASS_LIST}>{props.TextContent}</button>
  )
}

export default SecondaryButton;