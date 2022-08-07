import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PageProducts from './pages/PageProducts/PageProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/products">
          <Route index element={<PageProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
