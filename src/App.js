import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';

const App = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    Axios.get(`/discoveries.json?sort_by=asc(releasedate)`).then((response) => {
      console.log(response);
      setApiData(response.data);
      function byDate(a, b) {
        return (
          new Date(a.releasedate).valueOf() - new Date(b.releasedate).valueOf()
        );
      }
      setApiData(response.data.sort(byDate));
    });
  }, []);

  return (
    <div className={style.main}>
      <div>
        <Hero />
        <Home apiData={apiData} />
      </div>
    </div>
  );
};

export default App;
