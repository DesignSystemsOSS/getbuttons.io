import "../../css/getbuttons.css";

function SecondaryButton3D(props) {
  
  const _CLASS_LIST = "gbtn-3d-secondary " + `${props.Animate}` + " " + `${props.ShadowEffect}`;
  
  return (
    <button className={_CLASS_LIST}>{props.TextContent}</button>
  )
}

export default SecondaryButton3D;