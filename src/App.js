import { } from 'antd';
import './App.css';

import Header from './components/Header/index';
import PageContent from './components/PageContent/index';
import Footer from './components/Footer/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PageContent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
