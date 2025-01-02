import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';


function App() {
  if (window.location.pathname.endsWith('/index.html')) {
    window.location.href = window.location.pathname.replace('/index.html', '/');
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
