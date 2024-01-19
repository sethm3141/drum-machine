import PlaySound from '../functions/PlaySound';

const Button = ({ audioID, audioKey, audioURL }) => {
  return (
    <>
      <button
        className='drum-pad btn col-3'
        id={audioID}
        onClick={() => {
          PlaySound(audioKey, audioID);
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
