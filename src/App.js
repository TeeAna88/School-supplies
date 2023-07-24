import './App.css';
import Image from './pencils.jpeg';
import ImageTwo from './laptop.jpeg'
import { SchoolSupply } from './SchoolSupply';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={Image} width='200px' alt='pencils'/>
      </div>
      <div className='container'>
        <h1>School Supplies</h1>
      </div>
      <SchoolSupply/>
      <div className='container'>
          <img src={ImageTwo} width='200px' alt='laptop'/>
      </div>
    </div>
  );
}

export default App;
