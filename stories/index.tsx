import React, { useState } from 'react';
import ReactSwapy from '../src'
import './index.css';

const DEFAULT: (string | null)[] = ['a', null, 'c', 'd', null, 'f', 'g']

const A = () => {
  const [count, setCount] = useState(0)

  return <div className='test-1' onClick={() => setCount(count + 1)}>{count}</div>
}

function getItemById(itemId: string | null) {
  return itemId ? <ReactSwapy.Item className={`item item-${itemId}`} name={itemId}>{itemId}</ReactSwapy.Item> : itemId
}

export const ReactSwapyComponent = () => {
  return (
    <div className="wrapper">
      <ReactSwapy.Container className='container'>
        <ReactSwapy.Slot id={0} className={`slot slot-${0}`}>
          <ReactSwapy.Item className='item item-a' name={'a'}>
            <div className='test-wrapper'>
              <A />
              <div className='test-2' />
            </div>
          </ReactSwapy.Item>
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={1} className={`slot slot-${1}`}>
          {getItemById(DEFAULT[1])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={2} className={`slot slot-${2}`}>
          {getItemById(DEFAULT[2])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={3} className={`slot slot-${3}`}>
          {getItemById(DEFAULT[3])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={4} className={`slot slot-${4}`}>
          {getItemById(DEFAULT[4])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={5} className={`slot slot-${5}`}>
          {getItemById(DEFAULT[5])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={6} className={`slot slot-${6}`}>
          {getItemById(DEFAULT[6])}
        </ReactSwapy.Slot>
      </ReactSwapy.Container>
    </div>
  );
};
