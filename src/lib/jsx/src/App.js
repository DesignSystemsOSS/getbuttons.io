
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import SecondaryButton from "./Components/Buttons/SecondaryButton";
import TextButton from "./Components/Buttons/TextButton";

function App() {
  return (
    <div className="App">
      <PrimaryButton TextContent={"Download"}/>
      <SecondaryButton TextContent={"Download"} />
      <TextButton TextContent={"Download"} Effect={"tf-up"}/>
    </div>
  );
}

export default App;
