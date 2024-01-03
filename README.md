# Piano
Digital KeyBoard Using HTml CSS and javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Make music with the WebAudio API - Example #2</title>
  <meta charset="utf-8"/>
  <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
  <style>
#synth
{
    padding:20px;
    background: #2b2b2b;
    width:968px;
    height:570px;
    box-shadow: 2px 2px 10px black;
    margin:auto;
    position: relative;
}

#synth:before
{
    content:"";
    width:968px;
    height:5%;
    background: #2b2b2b;
    position: absolute;
    left:20px;
    top:325px;
    box-shadow: 0px 5px 5px black;
}

#synth:after
{
    content:"";
    width:980px;
    height:5%;
    background: #2b2b2b;
    position: absolute;
    left:15px;
    top:325px;
}


h4, h5 {
    line-height: 0em;
}

datalist
{
    display: block;
}
.waveForms li
{

    list-style: none;
    margin:10px -25px;
}


.white
{
    border: 2px groove black;
    height: 250px;
    width: 40px;
    float: left;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 2px 5px black;

    background: linear-gradient(85deg, rgba(188,188,188,1) 0%,rgba(255,255,255,1) 0%,rgba(247,247,247,1) 100%);
}


.white.keyDown
{
    background: linear-gradient(89deg, rgba(76,76,76,1) 0%,rgba(255,255,255,1) 10%,rgba(247,247,247,1) 100%);
    transition: all 0.2s;
}



.black
{
    border: 1px solid black;
    height: 150px;
    width: 20px;
    position: absolute;
    top:0;
    right:-12px;

    background:black;
    color:white;
    z-index: 10;
    box-shadow: 2px 2px 2px black;



    background: linear-gradient(to bottom,  rgba(28,28,28,1) 0%,rgba(63,63,63,1) 100%);


}



#pianoKeys p
{

    width:100%;
    position: absolute;
    bottom: 0;
    text-align: center;
}


#pianoKeys
{
    margin-top: 20px;
    clear:both;
    width:100%;
}

#blackKeys
{
    position: absolute;
    top:0;
}



.keyDown
{
    color: #48a6ff;

    /*background: #48a6ff;*/
    /*border-right: 2px groove #c0c0c0 !important;*/
    /*background: linear-gradient(to bottom, rgba(73,192,240,1) 0%,rgba(44,175,227,1) 100%);*/

    box-shadow: 0 0 1px black;
    transition: all 0.2s;
}


#oscs, #mixer
{
    /*width:50%;*/
    width:968px;
    height:340px;
    float:left;
    background: #2b2b2b;
    color: whitesmoke;
}


.waveForm, .gain, .octave, .fineTune
{
    float: left;
}
.osc
{
    clear: both;

}

#osc1,#osc2
{
    padding-left:2em;
    display: block;
    height: 150px;
}

#osc1
{
    border-bottom: 1px solid black;
}

#osc2
{
    border-top: 1px ridge grey;
}


.gain, .octave, .fineTune
{
    margin-left: 60px;
}

.gain, .fineTune
{
  max-width:150px;
}

.ledLabel
{
    margin:0 0 0.75em 1em;
}

.ledLabel input[type="radio"] {
    display:none;
}
.ledLabel input[type="radio"] + label {
    font-family:Arial, sans-serif;
    font-size:14px;
}
.ledLabel input[type="radio"] + label span {
    display:inline-block;
    width:10px;
    height:10px;
    margin:-1px 4px 0 0;
    vertical-align:middle;
    cursor:pointer;
    -moz-border-radius:  50%;
    border-radius:  50%;
}

.ledLabel input[type="radio"] + label span {
    background: radial-gradient(ellipse at center,  rgba(152,255,84,1) 0%,rgba(135,196,56,1) 31%,rgba(0,0,0,1) 100%); /* W3C */

}

.ledLabel input[type="radio"]:checked + label span{
    box-shadow: 0 0 15px #79ff5d;
    background: radial-gradient(ellipse at center,  rgba(255,255,255,1) 12%,rgba(210,255,82,1) 39%,rgba(145,232,66,1) 65%,rgba(0,0,0,1) 92%); /* W3C */

}

.ledLabel input[type="radio"] + label span,
.ledLabel input[type="radio"]:checked + label span {
    -webkit-transition:background-color 0.4s linear;
    /*-moz-transition:background-color 0.4s linear;*/
    transition:background-color 0.4s linear;
}

.ledLabel
{
    float:left;
}

.ledLabel img
{
    height:10px;
}



input[type="range"]:focus
{
    outline:none;
}




/*================Button Style=================*/

button
{
    width:85%;
    height:80%;
    box-shadow: 1px 1px 2px black;
    cursor:pointer;
    position: absolute;
    top:10%;
    left:7%;
    background: linear-gradient(to bottom,  rgba(75,75,75,1) 0%,rgba(63,63,63,1) 100%); /* W3C */
    border:none;
}


button:active
{
    box-shadow: 0 0 0 black;
    border: 2px groove #2b2b2b;
    background: linear-gradient(to bottom,  rgba(47,47,47,1) 0%,rgba(59,59,59,1) 100%); /* W3C */
    width:90%;
    height:84%;
    left:5%;
}

button:focus
{
    outline:none;
}

.buttonDrop
{
    width:50px;
    height:30px;
    display:block;
    position: relative;
    /*left:190px;/*/
    /*top:-5px;*/

    border-radius: 10%;
    background: linear-gradient(to bottom,  rgba(28,28,28,1) 0%,rgba(63,63,63,1) 100%); /* W3C */

}

  </style>
</head>
<body> 
  <!--
I Hope you enjoy this pen, it was a lot of fun to make.

Both mouse and keyboard is supported. However, make sure you click onto the preview window before using keyboard.
-->
<div id="synth">
  <div id="oscs">
    <div id="osc1" class="osc">
      <h4>Osc 1</h4>
      <div class="waveForm">
        <h5>Wave Form</h5>
        <div class="ledLabel">
          <input type="radio" id="osc1Led0" data-position="0" name="osc1Led" data-waveform="sine" data-osc="1" onclick="setWaveForm(this)">
          <label for="osc1Led0"><span></span><img src="https://www.dropbox.com/s/tnzshhffok4n9ux/sine.png?dl=0&raw=1" alt="sine wave"></label>
        </div>
        <div class="ledLabel">
          <input type="radio" id="osc1Led1" data-position="1" name="osc1Led" data-waveform="square" data-osc="1" onclick="setWaveForm(this)" checked>
          <label for="osc1Led1"><span></span><img src="https://www.dropbox.com/s/vzq1yzkc123cxug/square.png?dl=0&raw=1" alt="square wave"></label>
        </div>

        <div class="ledLabel">
          <input type="radio" id="osc1Led2" data-position="2" name="osc1Led" data-waveform="sawtooth" data-osc="1" onclick="setWaveForm(this)">
          <label for="osc1Led2"><span></span><img src="https://www.dropbox.com/s/du33z0m0pxkuxar/sawtooth.png?dl=0&raw=1" alt="sawtooth wave"></label>
        </div>

        <div class="ledLabel">
          <input type="radio" id="osc1Led3" data-position="3" name="osc1Led" data-waveform="triangle" data-osc="1" onclick="setWaveForm(this)">
          <label for="osc1Led3"><span></span><img src="https://www.dropbox.com/s/au6p9mn2h8xb0lp/triangle.png?dl=0&raw=1" alt="triangle wave"></label>
        </div>
        <div class="ledLabel">
          <div class="buttonDrop">
            <button id="switchOsc1Wave" data-osc="1" onclick="setWaveForm(this)"></button>
          </div>
        </div>
      </div>

      <div class="gain">
        <h5>Gain</h5>
        <input id="osc1Gain" type="range" min="0" max="100" value="100" data-osc="1">
      </div>

      <div class="octave">
        <h5>Octave</h5>
        <div class="ledLabel">
          <input type="radio" id="osc1OctLed0" data-position="0" name="osc1OctLed" data-osc="1" onclick="setOctave(this)" checked>
          <label for="osc1OctLed0"><span></span>4'</label>
        </div>
        <div class="ledLabel">
          <input type="radio" id="osc1OctLed1" data-position="1" name="osc1OctLed" data-osc="1" onclick="setOctave(this)" >
          <label for="osc1OctLed1"><span></span>8'</label>
        </div>
        <div class="ledLabel">
          <input type="radio" id="osc1OctLed2" data-position="2" name="osc1OctLed" data-osc="1" onclick="setOctave(this)" >
          <label for="osc1OctLed2"><span></span>16'</label>
        </div>

        <div class="ledLabel">
          <div class="buttonDrop">
            <button id="switchOsc1Octave" data-osc="1" onclick="setOctave(this)"></button>
          </div>
        </div>
      </div>

      <div class="fineTune">
        <h5>Fine Tune</h5>
        <input id="osc1FineTune" type="range" min="-10" max="10" value="0" data-osc="1" step="1" list="range_snap">
      </div>
    </div>


    <div id="osc2" class="osc">
      <h4>Osc 2</h4>
      <div class="waveForm">
        <h5>Wave Form</h5>
        <div class="ledLabel">
          <input type="radio" id="osc2Led0" data-position="0" name="osc2Led" data-waveform="sine" data-osc="2" onclick="setWaveForm(this)">
          <label for="osc2Led0"><span></span><img src="https://www.dropbox.com/s/tnzshhffok4n9ux/sine.png?dl=0&raw=1" alt="sine wave"></label>
        </div>

        <div class="ledLabel">
          <input type="radio" id="osc2Led1" data-position="1" name="osc2Led" data-waveform="square" data-osc="2" onclick="setWaveForm(this)">
          <label for="osc2Led1"><span></span><img src="https://www.dropbox.com/s/vzq1yzkc123cxug/square.png?dl=0&raw=1" alt="square wave"></label>
        </div>

        <div class="ledLabel">
          <input type="radio" id="osc2Led2" data-position="2" name="osc2Led" data-waveform="sawtooth" data-osc="2" onclick="setWaveForm(this)" checked>
          <label for="osc2Led2"><span></span><img src="https://www.dropbox.com/s/du33z0m0pxkuxar/sawtooth.png?dl=0&raw=1" alt="sawtooth wave"></label>
        </div>

        <div class="ledLabel">
          <input type="radio" id="osc2Led3" data-position="3" name="osc2Led" data-waveform="triangle" data-osc="2" onclick="setWaveForm(this)">
          <label for="osc2Led3"><span></span><img src="https://www.dropbox.com/s/au6p9mn2h8xb0lp/triangle.png?dl=0&raw=1" alt="triangle wave"></label>
        </div>
        <div class="ledLabel">
          <div class="buttonDrop">
            <button id="switchOsc2Wave" data-osc="2" onclick="setWaveForm(this)"></button>
          </div>
        </div>
      </div>

      <div class="gain">
        <h5>Gain</h5>
        <input id="osc2Gain" type="range" min="0" max="100" value="100" data-osc="2">
      </div>

      <div class="octave">
        <h5>Octave</h5>
        <div class="ledLabel">
          <input type="radio" id="osc2OctLed0" data-position="0" name="osc2OctLed" data-osc="2" onclick="setOctave(this)">
          <label for="osc2OctLed0"><span></span>4'</label>
        </div>
        <div class="ledLabel">
          <input type="radio" id="osc2OctLed1" data-position="1" name="osc2OctLed" data-osc="2" onclick="setOctave(this)">
          <label for="osc2OctLed1"><span></span>8'</label>
        </div>
        <div class="ledLabel">
          <input type="radio" id="osc2OctLed2" data-position="2" name="osc2OctLed" data-osc="2" onclick="setOctave(this)" checked>
          <label for="osc2OctLed2"><span></span>16'</label>
        </div>

        <div class="ledLabel">
          <div class="buttonDrop">
            <button id="switchOsc2Octave" data-osc="2" onclick="setOctave(this)"></button>
          </div>
        </div>
      </div>

      <div class="fineTune">
        <h5>Fine Tune</h5>
        <input id="osc2FineTune" type="range" min="-10" max="10" value="0" data-osc="2" step="1" list="range_snap">
      </div>
    </div>
    <datalist id="range_snap">
      <option value="0">
    </datalist>
  </div>

  <br>
  <div id="pianoKeys"></div>
</div>
<script>

var notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
var note = 0;
var octave = 1;

for(var i=13;i<=49;i++)
{
   var thisNote = notes[note];
   var className = (thisNote.length > 1) ? 'black' : 'white';

   var el = "<div id='" + thisNote + octave + "' class='" + className + "' onmousedown='start("+i+",this);' onmouseup='stop(this);'><p>" + thisNote + "</p></div>";

   if(className == "white")
   {
      document.getElementById("pianoKeys").innerHTML += el;
   }
   else
   {
      //console.log(thisNote.substring(0,1) + octave);
      document.getElementById(thisNote.substring(0,1) + octave).innerHTML += el;
   }

   if(thisNote == "B")
   {
      octave ++;
   }

   if(i%12 == 0)
   {
      note = 0;
   }
   else
   {
      note++;
   }
}

//=============== Context.js ==================//
var context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext)();

function getContext()
{
   return context;
}


//================= Oscillator.js ================//

function Oscillator()
{
   this.context = getContext();
   this.instance = context.createOscillator();
   this.gainNode = context.createGain();
   this.freq = 440;
   this.gain = 100;
   this.waveForm = "sine";
   this.octave = 0;
   this.fineTune = 0;

   //Methods
   this.createOscillator = function(freq, gain)
   {
      this.instance = this.context.createOscillator();
      this.instance.connect(this.gainNode);
      this.gainNode.connect(context.destination);
      this.instance.type = this.waveForm;
   };

   this.setFreq = function(freq)
   {
      this.freq = freq;
      this.instance.frequency.value = freq;
   };

   this.setGain = function(gain)
   {
      this.gain = gain;
      this.gainNode.gain.value = gain / 100 / 12;
   };

   this.setWaveForm = function(waveForm)
   {
      this.waveForm = waveForm;
   };

   this.setOctave = function(octave)
   {
      this.octave = octave;
   };

   this.setFineTune = function(fineTune)
   {
      this.fineTune = fineTune;
   };

}

//================ Tones.js ================//

var context = getContext();

var playing = false;

var osc = new Oscillator();
var osc2 = new Oscillator();

osc.setGain(document.getElementById("osc1Gain").value);
osc2.setGain(document.getElementById("osc2Gain").value);

osc.setWaveForm(document.querySelector('input[name="osc1Led"]:checked').getAttribute("data-waveform"));
osc2.setWaveForm(document.querySelector('input[name="osc2Led"]:checked').getAttribute("data-waveform"));

osc.setOctave(document.querySelector('input[name="osc1OctLed"]:checked').getAttribute("data-position") - 1);
osc2.setOctave(document.querySelector('input[name="osc2OctLed"]:checked').getAttribute("data-position") - 1);

console.log(osc.octave);

function toneGen(oscillator, noteKey)
{
   var freq = calculateFrequency(noteKey + (oscillator.octave * 12));

   freq = calculateFineTune(oscillator.fineTune, freq);

   oscillator.createOscillator();
   oscillator.setFreq(freq);
   oscillator.instance.start(0);
}


function start(noteKey,e) {
   console.log(e.id);

   e.className = e.className + " keyDown";
   event.cancelBubble = true;

   if(e.id.substring(1,1) == "#")
   {
      document.getElementById(e.id.substring(0,1) + e.id.substring(2,1)).className = "white";
   }

   if(!playing) {
      playing = true;

      toneGen(osc,noteKey);
      toneGen(osc2,noteKey);
   }
}

function stop(e)
{
   e.className = e.className.substring(0,5) == "white" ? "white" : "black";

   playing = false;
   //setVolume(0);


   osc.instance.stop();
   osc.gainNode.disconnect();
   osc2.instance.stop();
   osc2.gainNode.disconnect();

}

function calculateFrequency(noteKey)
{
   var concertPitch = 440;
   var A4Key = 49;
   var a = Math.pow(2,(1/12));
   return Math.pow(a,(noteKey - A4Key)) * concertPitch;
}


function calculateFineTune(fineTune, freq)
{
   var pos, positive;
   if(-fineTune>0)
   {
      pos = -fineTune; //Is made positive
      positive = false;

   }
   else
   {
      pos = fineTune; //Already Positive
      positive = true;
   }

   var percentage = freq * (pos/100);
   freq = positive ? freq + percentage : freq - percentage;

   //console.log(fineTune + " " +  freq + "hz before | " + (parseFloat(freq) + parseInt(fineTune)) + "hz after");
   return freq;
}


document.addEventListener('DOMContentLoaded', function ()
{
   document.getElementById("osc1Gain").addEventListener("change", setGain);
   document.getElementById("osc2Gain").addEventListener("change", setGain);

   document.getElementById("osc1FineTune").addEventListener("change", setFineTune);
   document.getElementById("osc2FineTune").addEventListener("change", setFineTune);

   window.addEventListener("keydown",handleKeyPress,false);
   window.addEventListener("keyup",handleKeyPress,false);
});


function handleKeyPress(e)
{
   var keyCode = e.which;
   var id = null;
   //console.log(e, keyCode, e.which);

   switch(keyCode)
   {

      case 90:    id = "A1";     break;
      case 83:    id = "A#1";    break;
      case 88:    id = "B1";     break;
      case 67:    id = "C2";     break;
      case 70:    id = "C#2";    break;
      case 86:    id = "D2";     break;
      case 71:    id = "D#2";    break;
      case 66:    id = "E2";     break;
      case 78:    id = "F2";     break;
      case 74:    id = "F#2";    break;
      case 77:    id = "G2";     break;
      case 75:    id = "G#2";    break;
      case 188:   id = "A2";     break;

      case 81:    id = "A2";     break;
      case 50:    id = "A#2";    break;
      case 87:    id = "B2";     break;
      case 69:    id = "C3";     break;
      case 52:    id = "C#3";    break;
      case 82:    id = "D3";     break;
      case 53:    id = "D#3";    break;
      case 84:    id = "E3";     break;
      case 89:    id = "F3";     break;
      case 55:    id = "F#3";    break;
      case 85:    id = "G3";     break;
      case 56:    id = "G#3";    break;
      case 73:   id = "A3";     break;

      default:
   }

   var el = document.getElementById(id);

   if(id != null)
   {
      if(e.type == "keydown")
      {
         el.onmousedown();
         el.className = el.className.substring(0,5) + " keyDown";
      }
      else
      {
         el.onmouseup();
         el.className = el.className.substring(0,5);
      }
   }


}




//--------------------------Getters And Setters--------------------------//



function setGain(e)
{
   var oscillator = this.getAttribute("data-osc");

   switch(oscillator)
   {
      case "1":
         osc.setGain(this.value);
         break;
      case "2":
         osc2.setGain(this.value);
         break;
      default:
   }
}

function setFineTune(e)
{
   var oscillator = this.getAttribute("data-osc");

   switch(oscillator)
   {
      case "1":
         osc.setFineTune(this.value);
         console.log(osc.fineTune);
         break;
      case "2":
         osc2.setFineTune(this.value);
         break;
      default:
   }
}

function setOctave(e)
{
   var oscillator = e.getAttribute("data-osc");
   var position = parseInt(document.querySelector('input[name="osc' + oscillator + 'OctLed"]:checked').getAttribute("data-position"));
   var newPosition = position < 2 ? (position + 1) : 0;
   newPosition = e.id.substring(0,7) == "osc" + oscillator + "Oct" ?  position : newPosition;

   var octaves = [-1,0,+1];

   switch(oscillator)
   {
      case "1":
         osc.setOctave(newPosition - 1);
         console.log("osc1 " + osc.octave);
         break;
      case "2":
         osc2.setOctave(newPosition - 1);
         console.log("osc2 " + osc2.octave);
         break;
      default:
   }

   id = "osc" + oscillator + "OctLed" + newPosition;

   document.getElementById(id).checked = true;
}



function setWaveForm(e)
{
   var oscillator = e.getAttribute("data-osc");
   var position = parseInt(document.querySelector('input[name="osc' + oscillator + 'Led"]:checked').getAttribute("data-position"));


   var newPosition = position < 3 ? (position + 1) : 0;
   newPosition = (e.id.substring(0,7) == "osc" + oscillator + "Led") ?  position : newPosition;

   var waves = ["sine","square","sawtooth","triangle"];


   switch(oscillator)
   {
      case "1":
         osc.setWaveForm(waves[newPosition]);
         console.log("osc1 " + osc.waveForm);
         break;
      case "2":
         osc2.setWaveForm(waves[newPosition]);
         console.log("osc2 " + osc2.waveForm);
         break;
      default:
   }

   id = "osc" + oscillator + "Led" + newPosition;

   document.getElementById(id).checked = true;

}



</script>
  </body>
</html>
