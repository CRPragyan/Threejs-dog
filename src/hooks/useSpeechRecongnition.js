import { useState } from "react";

const useSpeechRecongnition = () => {
  const [transcript, setTrasnscript] = useState();

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recongnition = new SpeechRecognition();

  recongnition.onresult = async function (event) {
    const transcript = event.results[event.results.length - 1][0].transcript;
    setTrasnscript(transcript);
  };

  const startListening = () => {
    recongnition.start();
  };

  const stopListening = () => {
    recongnition.stop();
  };

  return {
    transcript,
    startListening,
    stopListening,
  };
};

export default useSpeechRecongnition;
