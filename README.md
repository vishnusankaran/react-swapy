# React-Swapy

A react wrapper for the swapy library by taha-sh - (https://swapy.tahazsh.com/)[https://swapy.tahazsh.com/]

## Installation

```bash
npm install react-swapy
```

## Usage 
The library exports 3 components - `Container`, `Slot` and `Item`. It can be used like below:

```js
import ReactSwapy from 'react-swapy'

const Component = () => {
  <ReactSwapy.Container className='container'>
    <ReactSwapy.Slot id={0} className='slot'>
      <ReactSwapy.Item className='item' name={'a'}>
        <ItemA />
      </ReactSwapy.Item>
    </ReactSwapy.Slot>
    <ReactSwapy.Slot id={1} className='slot'>
    </ReactSwapy.Slot>
    <ReactSwapy.Slot id={2} className='slot'>
      <ReactSwapy.Item className='item' name={'c'}>
        <ItemC />
      </ReactSwapy.Item>
    </ReactSwapy.Slot>
    <ReactSwapy.Slot id={3} className='slot'>
      <ReactSwapy.Item className='item' name={'d'}>
        <ItemD />
      </ReactSwapy.Item>
    </ReactSwapy.Slot>
  </ReactSwapy.Container>
}
```

#### Props

| Component         | Prop            | Description                                                              |
| ----------------- |:---------------:| :----------------------------------------------------------------------- |
| Container         | `enable?`       | `default: true`. `false` for locking swaped items                        |
| Container         | `config?`       | `default: {}`. ```js { animation: 'dynamic' \| 'spring' \| 'none' } ```  |
| Container         | `onSwap?`       | Callback for all swapping events                                         |
|                   |                 |                                                                          |
| Slot              | `id?`           | Unique ID for each slot. If `id` is not provided a `name` prop is must   |
| Slot              | `name?`         | Unique name for each slot                                                |
|                   |                 |                                                                          |
| Item              | `name`          | Unique name to identify an item in the slots                             |


