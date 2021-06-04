
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import PrimaryButton3D from "./Components/Buttons/PrimaryButton3D";
import SecondaryButton from "./Components/Buttons/SecondaryButton";
import SecondaryButton3D from "./Components/Buttons/SecondaryButton3D";
import TextButton from "./Components/Buttons/TextButton";

function App() {
  return (
    <div className="App">
      
      <PrimaryButton 
        TextContent={"Download"}
        Animate={"tf-top"}
        removeBoxShadowOnHover={true}
      />

      <SecondaryButton 
        TextContent={"Download"} 
        Animate={"tf-down"}
      />
      
      <TextButton 
        TextContent={"Download"}
        Animate={"tf-right"}
      />
    
      <PrimaryButton3D
        TextContent={"Download"}
        Animate={"tf-top"}
      />

      <SecondaryButton3D
        TextContent={"Download"}
        Animate={"tf-down"}
      />

      <SecondaryButton
        TextContent={"Download"}
        Animate={"tf-down"}
      />


    </div>
  );
}

export default App;
