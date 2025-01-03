import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
import AppRoutes from './routes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/stylish" element={<Home />} />
                <Route path="/components" element={<Components />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;