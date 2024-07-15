import React from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
