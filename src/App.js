import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import NavBar from './components/NavBar';

function App() {
  const [isModalOpen,setIsModalOpen] = useState(true);
  return (
    <div className="App">
      <NavBar />
      <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} />
    </div>
  );
}

export default App;
