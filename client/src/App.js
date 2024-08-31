import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VmmitState from './context/VmmitState';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AuthorProfile from './components/AuthorProfile';
import UnCategorizedProfile from './components/UnCategorizedProfile'
import AddComment from './components/AddComment';
import './styles/tailwind.css';
function App() {
  return (
    <div>
      <VmmitState>
        <BrowserRouter>
          <Navbar />
          <div className="mx-auto min-h-screen lg:px-32">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/author/vmmgroupsgmail-com/' element={<AuthorProfile/>}/>
            <Route exact path='/category/uncategorized/' element={<UnCategorizedProfile/>}/>
            <Route exact path='/api/addcomment' element={<AddComment/>}/>
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </VmmitState>
    </div>
  );
}

export default App;
