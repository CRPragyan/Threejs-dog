// import { Perf } from "r3f-perf";

import CanvasItem from "./assets/CanvasItem";
import useSpeechRecongnition from "./hooks/useSpeechRecongnition";

function App() {
  const { transcript, startListening } = useSpeechRecongnition();

  return (
    <>
      <p style={{ color: "white" }}>{transcript}</p>
      <button onClick={startListening}>Start listening</button>
      <CanvasItem transcript={transcript} />
    </>
  );
}

export default App;
