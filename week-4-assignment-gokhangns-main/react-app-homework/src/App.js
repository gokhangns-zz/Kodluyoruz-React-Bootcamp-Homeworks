import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavBar from './Components/TopNavBar';
import { ThemeProvider } from './Context/ThemeContext';
import Features from './Pages/Features';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import Pricing from './Pages/Pricing';

function App() {
  return(
    <BrowserRouter> 
    <ThemeProvider>
      <TopNavBar/>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;

