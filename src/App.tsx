import React, { useState } from 'react'
import './App.css'

import ReactSwapy from '../lib/index'

const DEFAULT: (string | null)[] = ['a', null, 'c', 'd']

const A = () => {
  const [count, setCount] = useState(0)

  return <div className='test-1' onClick={() => setCount(count + 1)}>{count}</div>
}

function App() {
  function getItemById(itemId: string | null) {
    return itemId ? <ReactSwapy.Item className='item' name={itemId}>{itemId}</ReactSwapy.Item> : itemId
  }

  return (
    <>
      <h1>React-Swapy</h1>
      <ReactSwapy.Container className='container'>
        <ReactSwapy.Slot id={0} className='slot'>
          <ReactSwapy.Item className='item' name={'a'}>
            <div className='test-wrapper'>
              <A />
              <div className='test-2' />
            </div>
          </ReactSwapy.Item>
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={1} className='slot'>
          {getItemById(DEFAULT[1])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={2} className='slot'>
          {getItemById(DEFAULT[2])}
        </ReactSwapy.Slot>
        <ReactSwapy.Slot id={3} className='slot'>
          {getItemById(DEFAULT[3])}
        </ReactSwapy.Slot>
      </ReactSwapy.Container>
    </>
  )
}

export default App
