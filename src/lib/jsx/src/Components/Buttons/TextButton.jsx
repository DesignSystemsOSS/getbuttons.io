import "../../css/getbuttons.css";

function TextButton(props) {
  return (
    <button className="gbtn-text">{props.TextContent}</button>
  )
}

export default TextButton;