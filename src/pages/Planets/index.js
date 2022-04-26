import React from 'react';
import style from './style.module.scss';

const index = ({ apiData }) => {
  // var sortByDate = apiData.data.releassedate.sort((a,b) => {
  //     return new Date(a.scheduled_for).getTime() -
  //         new Date(b.scheduled_for).getTime()
  // }).reverse();

  // console.log(sortByDate)
  return (
    <div className={`container-sm ${style.main}`}>
      <div>
        <h1>Planets</h1>
        <div>
          <table style={{ width: '100%' }}>
            <tr>
              <th>Planet</th>
              <th>Release Date</th>
              <th>Planet radius (earth units)</th>
            </tr>

            {apiData.map((data) => (
              <tr>
                <td>{data.pl_name}</td>
                <td>{data.releasedate}</td>
                <td>{data.pl_rade}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>{' '}
    </div>
  );
};

export default index;
