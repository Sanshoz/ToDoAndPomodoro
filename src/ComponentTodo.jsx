import gear from './engrenagem.png'


function gearButtonClick(){

}

const ComponentTodo = ({todos}) => {

  return (

    <div className="">
      <div id='container' className = 'grid grid-cols-4 gap-4'>
        {todos.map(todo => <div id ={todo.id} key = {todo.id} className='border rounded shadow-lg'>
         <div className="bg-amber-400 text-center flex items-center"> <button type='button' ><img src ={gear} alt='gear' className='h-4  float-left pl-1 mr-2'/> </button> title: {todo.title}</div> 
          <ul className ='text-black'>
            {todo.todosList.map((todoList, index) => <li className={index%2 !== 0?'bg-amber-200 pl-2':'bg-amber-100 pl-2'}><input type = 'checkbox'/> {todoList}</li>)}
          </ul> 
        </div>)}

      </div>
      
    </div>
    
  );
}

export default ComponentTodo;
