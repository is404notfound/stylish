import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';

function App() {
  const PUBLIC_URL = 'https://localhost:3000/stylish';

  if (window.location.pathname.endsWith('/index.html')) {
    window.location.href = PUBLIC_URL;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/stylish"} element={<Home />} />
          <Route path="/stylish/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
