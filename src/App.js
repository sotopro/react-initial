import logo from './logo.svg';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'description'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'description'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    description: 'description'
  },
]

function App() {
  const onHandleClick = () => {
    console.log('was clicked')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <button onClick={onHandleClick} className='button-primary'>Click me</button>
        <div className='products'>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
