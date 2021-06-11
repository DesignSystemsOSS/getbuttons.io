import "../../css/getbuttons.css";

function SecondaryButton(props) {

  const _CLASS_LIST = "gbtn-secondary " + `${props.Animate}` + " " + `${props.ShadowEffect}`;
  
  const _STYLE_LIST = {
    backgroundColor: props.BGColor,
    color: props.TextColor,
    borderRadius: props.BorderRadius,
    padding: props.Padding,
    boxShadow: props.BoxShadow,
    outline: props.Outline
  }

  return (
    <button 
      className={_CLASS_LIST}
      style={_STYLE_LIST}
      >
        {props.TextContent}
      </button>
  )
}

export default SecondaryButton;