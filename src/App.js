import './App.css';
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import {useState} from 'react';
import ComponentTodo from './ComponentTodo.jsx';
import {useEffect} from 'react';


function handleButtonCardGear(event){
  
}





const App = () => {
  let [todos, setTodos] = useState([
    {
      title: 'test1',
      id: 1,
      todosList: ['test1','test2','test3']
    },
    {
      title: 'test2',
      id: 2,
      todosList: ['test1','test2','test3']
    },
    {
      title: 'test3',
      id: 3,
      todosList: ['test1','test2','test3']
    }
    ])


  return (

    <main className="App w-screen h-screen dark:bg-slate-900 text-white">
      <Header />
      My Main test
      <ComponentTodo  todos={todos}  />  
      <Footer />
    </main>
    
  );
}

export default App;
