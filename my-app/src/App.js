import logo from './logo.svg';
import './App.css';


function MyButton(){
  return (
    <button>
      i am a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton />
    </div>
  );
}