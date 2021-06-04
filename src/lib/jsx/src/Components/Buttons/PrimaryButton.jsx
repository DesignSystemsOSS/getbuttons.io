
import "../../css/getbuttons.css";

function PrimaryButton(props) {

  const _CLASS_LIST = "gbtn-primary " + `${props.Animate}` + " " + `${props.ShadowEffect}`;

  // checking the status of outline from the props
  // if (!props.Outline) {
  //   props.Outline = "none"
  // }

  // properties for handling on-hovering effects and animations
  // if (props.removeBoxShadowOnHover) {
  //   var __temp_hover_removing_css = `
  //       box-shadow: none;
  //   `;
  //   console.log(__temp_hover_removing_css)
  // }

  // This style list will be containing all the
  // style related properties which will be overriding the parent
  // class properties
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

export default PrimaryButton;