const utterance = new SpeechSynthesisUtterance();
const voiceSelectEl = document.getElementById('voice-select')
const rateEl = document.getElementById('rate');
const pitchEl = document.getElementById('pitch');
const textarea = document.querySelector('textarea');
const stopButton = document.querySelector('.stop');
const startButton = document.querySelector('.start');
let voices = [];

utterance.text = textarea.value;

function populateVoices() {
  voices = this.getVoices();
  voiceSelectEl.innerHTML = voices
    .map(voice => `<option value="${voice.name}>${voice.name} (${voice.lang})</option>`)
    .join('');
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
