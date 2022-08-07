import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pageproducts from './pages/Pageproducts/Pageproducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/products">
          <Route index element={<Pageproducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
