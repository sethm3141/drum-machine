const PlaySound = (audioKey, volume) => {
  const audioClip = document.getElementById(audioKey);
  audioClip.currentTime = 0;
  audioClip.volume = volume / 100;
  audioClip.play();
};

export default PlaySound;
