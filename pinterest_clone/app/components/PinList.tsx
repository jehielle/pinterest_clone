import React from 'react';
import PinItem from './PinItem';

interface Pin {
  id: string;
  title: string;
  image: string;
}

interface Props {
  listOfPins: Pin[]; 
}

function PinList({ listOfPins }: Props) {
  return (
    <div className='grid grid-flow-row md:auto-cols-auto grid-cols-5'>
      {listOfPins.map((item, index) => (
        <PinItem key={index} pin={item} /> 
      ))}
    </div>
  );
}

export default PinList;
