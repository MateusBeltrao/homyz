import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Websites from "./pages/Websites";
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import Properties from './pages/Properties/Properties';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route path='/' element={<Websites />}></Route>
            <Route path='/properties' element={<Properties></Properties>}></Route>
          </Route>       
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
