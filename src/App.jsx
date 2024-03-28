import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Websites from "./pages/Websites";
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import Properties from './pages/Properties/Properties';
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Property from './pages/Properties/property/Property';

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route path='/' element={<Websites />}></Route>
              <Route path='/properties'>
                <Route index element={<Properties></Properties>}></Route>
                <Route path=':propertyId' element={<Property></Property>}></Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>


  );
}

export default App;
