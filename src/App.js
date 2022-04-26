import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import Planets from './pages/Planets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    Axios.get(`/discoveries.json?sort_by=asc(releasedate)`).then((response) => {
      function byDate(a, b) {
        //chronologically by year, month, then day
        return (
          new Date(a.releasedate).valueOf() - new Date(b.releasedate).valueOf()
        );
      }
      setApiData(response.data.sort(byDate));
    });
  }, []);

  console.log(apiData);

  return (
    <div className={style.main}>
      <Router>
        <div>
          <Hero />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<Planets apiData={apiData} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
