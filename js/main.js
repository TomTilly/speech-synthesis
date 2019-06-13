const utterance = new SpeechSynthesisUtterance();
const voiceSelectEl = document.getElementById('voice-select');
const rangeEls = document.querySelectorAll('[type="range"');
const textarea = document.querySelector('textarea');
const stopButton = document.querySelector('.stop');
const startButton = document.querySelector('.start');
let voices;

function populateVoices() {
  voices = this.getVoices();
  voiceSelectEl.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  utterance.voice = voices.find(voice => this.value === voice.name);
}

function alterVoice() {
  utterance[this.id] = this.value;
}

function setUtteranceText() {
  utterance.text = this.value;
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

voiceSelectEl.addEventListener('change', setVoice);

rangeEls.forEach(rangeEl => rangeEl.addEventListener('input', alterVoice));

textarea.addEventListener('change', setUtteranceText);

startButton.addEventListener('click', (e) => {
  e.preventDefault();
  speechSynthesis.speak(utterance);
});

stopButton.addEventListener('click', (e) => {
  e.preventDefault();
  speechSynthesis.cancel();
});

setUtteranceText.call(textarea);
