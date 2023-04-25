import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inbox from './Pages/Inbox';
import Spam from './Pages/Spam';
import Trash from './Pages/Trash';
import Header from './Components/Header';
import ViewDetails from './Pages/ViewDetails';
import Filter from './Components/Filter';

function App() {
  return (
    <>
      <h1 className='name-heading'>Umesh's MailBox</h1>
    <Header/>
    <div className="container">

    <Filter />
    </div>
    <Routes>
      <Route path="/" element={<Inbox/>}/>
      <Route path="/spam" element={<Spam/>}/>
      <Route path="/trash" element={<Trash/>}/>
      <Route path="/viewdetails/:mailId" element={<ViewDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
