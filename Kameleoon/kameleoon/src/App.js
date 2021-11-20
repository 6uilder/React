import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Finalize } from './pages/Finalize';
import { Results } from './pages/Results';


function App() {
  const [dataAll, setDataAll] = React.useState([]);
  const [siteAll, setSiteAll] = React.useState([]);
  
  useEffect(() => {
      fetch('http://localhost:3100/tests') //добавить ?_limit=5  если много приходит с сервера
      .then(respons => respons.json())
      .then(json => {setDataAll(json)});

      fetch('http://localhost:3100/sites') 
      .then(respons => respons.json())
      .then(json => {setSiteAll(json)});
  }, []);



  const onCreate = (text) => {
    setDataAll(dataAll.concat([{
      text
    }]))
  }
  
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Dashboard dataAll={dataAll} siteAll={siteAll} onCreate={onCreate}/>} />
            <Route path='/results' element={<Results/>} />
            <Route path='/finalize' element={<Finalize/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
