import React, { useState } from 'react';
import Card from './Card';
import img1 from '../src/assets/helmes2.jpg'
import img2 from '../src/assets/helmes3.jpg'
import img3 from '../src/assets/luisvuiton.jpg'

const Store = () => {
  const [displayFlex, setDisplayFlex] = useState(true);

  const toggleDisplay = () => {
    setDisplayFlex(!displayFlex);
  };

  return (
    <div className={`store ${displayFlex ? 'flex-row' : 'flex-column'}`}>
      <button onClick={toggleDisplay}>
        Toggle Display ({displayFlex ? 'Column' : 'Row'})
      </button>

      <Card image={img1} title="Product 1" />
      <Card image={img2} title="Product 2" />
      <Card image={img3} title="Product 3" />
    </div>
  );
};

export default Store;
