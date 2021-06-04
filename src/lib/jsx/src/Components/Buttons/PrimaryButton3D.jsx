import "../../css/getbuttons.css";

function PrimaryButton3D(props) {
  
  const _CLASS_LIST = "gbtn-3d-primary " + `${props.Animate}` + " " + `${props.ShadowEffect}`;
  
  return (
    <button className={_CLASS_LIST}>{props.TextContent}</button>
  )
}

export default PrimaryButton3D;