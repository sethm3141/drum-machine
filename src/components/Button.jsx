const Button = ({ audioID, audioKey, audioURL }) => {
  return (
    <>
      <button
        className='drum-pad btn col-3'
        id={audioID}
        onClick={() => {
          const audioClip = document.getElementById(audioKey);
          audioClip.currentTime = 0;
          audioClip.play();
        }}
      >
        <audio
          className='clip'
          id={audioKey}
          src={audioURL}
          preload='metadata'
        />
        {audioKey}
      </button>
    </>
  );
};

export default Button;
