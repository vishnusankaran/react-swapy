# react-swapy

A react wrapper for the [Swapy](https://swapy.tahazsh.com/) library by [TahaSh](https://github.com/TahaSh)

## Demo

[Storybook](https://66cb8472f3d66518c09049a8-kgsqqsclqv.chromatic.com/)

## Installation

```bash
npm install react-swapy -S
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

> Make sure to add styles for your slots and items through `className` prop for each component, as some properties of the inline `style` props is getting overridden.


## Props

#### ReactSwapy.Container

| Prop            | Description                                                              |
|:--------------- | :----------------------------------------------------------------------- |
| `enable?`       | `default: true`. `false` for locking swaped items                        |
| `config?`       | `default: {}`. ```js { animation: 'dynamic' \| 'spring' \| 'none' } ```  |
| `onSwap?`       | callback for all swapping events                                         |


#### ReactSwapy.Slot

| Prop            | Description                                                              |
|:--------------- | :----------------------------------------------------------------------- |
| `id?`           | **unique** ID for each slot. If `id` is not provided a `name` prop is must   |
| `name?`         | **unique** name for each slot                                                |

#### ReactSwapy.Item

| Prop            | Description                                                              |
|:--------------- | :----------------------------------------------------------------------- |
| `name`          | **unique** name to identify an item in the slots                             |


## Disclaimer

This library is not extensively tested. If you find issues, please raise it [here in Github Issues](https://github.com/vishnusankaran/react-swapy/issues)
