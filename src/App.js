import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'description',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbN4hEMNReLTBOTFa8iKdx7JSM2EJ5ZPdfJCzu0CGY_H7UDX33I8GXQil_gkw0FqmHUMY&usqp=CAU'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'description',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIfPm1qtVRH2dz-EMrRc3l7r8kf-mVcQfXinzXrh992OgCQD1xmpN19C0kbgYJ2YwbxY&usqp=CAU'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    description: 'description',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Do-eg663j3L9FuvvV8--uvnknGCUVoBE1tmLLOnST65uTF4Z_StK7dTZ2pXe0wLLReY&usqp=CAU'
  },
]

// class ButtonClass extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return (
//       <button onClick={this.props.onClick} className='button-primary'>{this.props.text}</button>
//     )
//   }
// }

function App() {
  const onHandleClick = () => {
    console.log('was clicked')
  }

  const onHandlerAddProduct = () => {
    console.log('add product')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <Button onClick={onHandleClick} text='Click me' />
        <div className='products'>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <img className='product-image' src={product.imageUrl} alt={product.name} />
              <p>{product.description}</p>
              <Button onClick={onHandlerAddProduct} text='Add to Cart' />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
