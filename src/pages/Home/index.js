import React, { useState } from 'react';
import style from './style.module.scss';

const Home = ({ apiData }) => {
  const [planets, setPlanets] = useState(false);

  let planetTable;
  function handleButtonClick() {
    setPlanets(true);
  }

  function handleHideButton() {
    setPlanets(false);
  }

  if (planets === true) {
    planetTable = (
      <div>
        <div>
          <h1 className={style.planetsHeading}>Planets</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Planet</th>
                  <th>Release Date</th>
                  <th>Planet radius (earth units)</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.pl_name}</td>
                    <td>{data.releasedate}</td>
                    <td>{data.pl_rade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>{' '}
        <button
          className={style.btn}
          id="hidePlanetsButton"
          onClick={handleHideButton}>
          Hide Table
        </button>
      </div>
    );
  } else {
    planetTable = '';
  }

  return (
    <div className={`container-sm ${style.main}`}>
      <div>
        <h1>Cosmos</h1>
        <p>
          Once you have an innovation culture, even those who are not scientists
          or engineers - poets, actors, journalists - they, as communities,
          embrace the meaning of what it is to be scientifically literate. They
          embrace the concept of an innovation culture. They vote in ways that
          promote it. They don't fight science and they don't fight technology.
        </p>
        <p>
          Private enterprise in the history of civilization has never led large,
          expensive, dangerous projects with unknown risks. That has never
          happened because when you combine all these factors, you cannot create
          a capital market valuation of that activity.
        </p>
        <p>
          In science, if you don't do it, somebody else will. Whereas in art, if
          Beethoven didn't compose the 'Ninth Symphony,' no one else before or
          after is going to compose the 'Ninth Symphony' that he composed; no
          one else is going to paint 'Starry Night' by van Gogh.
        </p>
      </div>
      <button
        className={style.btn}
        id="showPlanetsButton"
        onClick={handleButtonClick}>
        Show Planets
      </button>
      {planetTable}
    </div>
  );
};

export default Home;
