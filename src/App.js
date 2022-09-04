import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './containers/AddBooks';
import SearchBooks from './containers/SearchBooks';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<AddBooks />} />
            <Route path="/search" element={< SearchBooks/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
