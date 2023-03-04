import DotLoader from 'react-spinners/ClipLoader';

import './style.scss';

export default function Loader() {
  return (
    <div className="overlay">
      <DotLoader size={250} color={'#c3697a'} className="loader" />
    </div>
  );
}
