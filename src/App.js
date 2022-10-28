import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import Button from './components/Button'

const productsData = [
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

const App = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);

  const onHandleClick = () => {
    console.log('was clicked')
    setBackgroundColor('#BFBDC1');
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timestamp = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
    setTime(timestamp);
    setClicks(previousClick=> previousClick + 1);

  }

  console.log(clicks, time)
  const onHandlerAddProduct = () => {
    console.log('add product')
  }

  useEffect(() => {
    setTitle('Hello!');
    // const getProducts = () => {
    //   setTimeout(() => {
    //     setProducts(productsData);
    //   }, 2000);
    // }

    const getAllProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          setProducts(productsData)
        );
      }, 2000);
    });
    getAllProducts.then((result) => {
      console.log('result', result)
    });
  }, []);

  useEffect(() => {
    if(clicks > 2) {
      setTitle('Hello again!');
    }
  }, [clicks])


  return (
    <div className="App" style={{ backgroundColor: backgroundColor  }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {title}
        </p>
        <p>
          {clicks} {time}
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
