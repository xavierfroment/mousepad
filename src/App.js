import React, { lazy, Suspense } from 'react'
import Footer from './components/system/Footer';
import ScrollTop from './components/system/ScrollTop';
import './App.css'
import Loader from './components/system/Loader';

const Routes = lazy(() => import("./components/system/RoutePaths"));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes/>
      <ScrollTop/>
      <Footer/>
    </Suspense>
  );
}

export default App;
