import React from "react";

const DetailSpeaker = (props) => {
  function speakLoud() {
    const text = props.text;
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(speech);
  }
  return (
    <>
      <div className="detail-speaker" onClick={speakLoud} style={{cursor:"pointer", fontSize:"1.2rem"}}>
        🔊
      </div>
    </>
  );
};

export default DetailSpeaker;
