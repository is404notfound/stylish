import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/stylish" element={<Home />} >
          <Route path="/components" element={<Components />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
