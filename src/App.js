import './App.css';
import { Navbar } from './Components/Navbar';
// import { Products } from './Components/Products';
import {Routes,Route} from 'react-router-dom'
import { About } from './Pages/About';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Users } from './Pages/Users';
import { TodoList } from './Todo/TodoList';
function App() {
  return (
    <div className="App">
      hello  
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about-us' element = {<About />} />
        <Route path='/users' element = {<Users />} />
        <Route path='/Login' element = {<Login />} />
        <Route />

      </Routes>
      <TodoList />
      {/* <Products />      */}
    </div>
  );
}

export default App;
