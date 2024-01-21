const PlaySound = (audioKey) => {
  const audioClip = document.getElementById(audioKey);
  audioClip.currentTime = 0;
  //TODO: set volume from settings...
  audioClip.volume = 0.2;
  audioClip.play();
};

export default PlaySound;
