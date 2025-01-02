import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';

function App() {
  
  if (window.location.pathname.endsWith('/index.html')) {
    window.location.href = window.location.pathname.replace('/index.html', '/stylish');
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/stylish" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
