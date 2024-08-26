import React, { useState } from 'react';
import ReactSwapy from '../src'
import './index.css';

const DEFAULT: (string | null)[] = ['a', null, 'c', 'd', null, 'f', 'g']

const A = () => {
  const [count, setCount] = useState(0)

  return (<div className='test-wrapper'>
    <button className='test-1' onClick={() => setCount(count >= 1 ? count - 1 : count)}>-</button>
    <span className='test-2'>{count}</span>
    <button className='test-1' onClick={() => setCount(count + 1)}>+</button>
  </div>)
}

function getItemById(itemId: string | null) {
  return itemId ? <ReactSwapy.Item className={`item item-${itemId}`} name={itemId}>{itemId}</ReactSwapy.Item> : itemId
}

export const ReactSwapyComponent = ({ enable, onSwap, config }) => {
  return (
    <div className="wrapper">
      <ReactSwapy.Container enable={enable} onSwap={onSwap} config={config} className='container'>
        <ReactSwapy.Slot id={0} className={`slot slot-${0}`}>
          <ReactSwapy.Item className='item item-a' name={'a'}>
            <A />
          </ReactSwapy.Item>
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={1} className={`slot slot-${1}`}>
          <ReactSwapy.Item className={`item item-b`} name={'b'}>
            <div className='b-2'>b</div>
            <ReactSwapy.Handle className='b-1'>|||</ReactSwapy.Handle>
          </ReactSwapy.Item>
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
    </div >
  );
};
