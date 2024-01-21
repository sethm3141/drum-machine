import { useSelector } from 'react-redux';

const Display = () => {
  const { text } = useSelector((store) => store.display);
  return <div id='display'>{text}</div>;
};

export default Display;
