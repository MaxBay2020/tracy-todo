import './App.css';
import Navbar from './components/Navbar'
import Counter from "./components/Counter";
import TodoPanel from "./components/TodoPanel";

function App() {
    const name = 'Tracy'

  return (
    <div className="App">
        {/*<Navbar*/}
        {/*    name={name}*/}
        {/*    age={18}*/}
        {/*    address='USA'*/}
        {/*    email='tracy@gmail.com'*/}
        {/*    roomate='Connie'*/}
        {/*    favFood='Meet'*/}
        {/*/>*/}
        {/*<hr/>*/}

        {/*<Counter />*/}

        <TodoPanel />


    </div>
  );
}

export default App;
