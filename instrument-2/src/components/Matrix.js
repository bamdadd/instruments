import React, { Component } from 'react';
import Tone from 'tone';

const Matrix = () => {
  var synth = new Tone.Synth().toMaster();

  var loop = new Tone.Loop(function(time){
    console.log(time);
  	synth.triggerAttackRelease("C3", "16n", 0);
    synth.triggerAttackRelease("E3", "16n", time);
  }, "8n");

  loop.start("1m").stop("4m");
  Tone.Transport.start();
  //play a middle 'C' for the duration of an 8th note
  // synth.triggerAttackRelease("C4", "8n");
  return (<div>Hello</div>)
}


export default Matrix;
