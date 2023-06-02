import './App.css';


 const Header = () => {
  return (
    <header className="bg-amber-400 justify-center h-10 w-screen flex place-items-center font-bold">
      <ul className='center'>
        <li className='float-left mr-4'>HOME</li>
        <li className='float-left mr-4'>POMODORO</li>
        <li className='float-left mr-4'>SETTINGS</li>
        <li className='float-left mr-4'>TO DOS</li>
        <li className='float-left mr-4'>GRAPHS</li>
      </ul>
    </header>
  );
}

export default Header;
