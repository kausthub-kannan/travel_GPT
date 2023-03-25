import React from 'react';
import { historyData} from '../data/dummy';
import "./History.css";
import { NavLink } from 'react-router-dom';

const History = () => {

  return (
<>
<h1 style={{textAlign: "center", fontSize: "25px", textDecoration: "underline"}}>History</h1>
 <div className="flex flex-wrap justify-center">
    <NavLink to="/HistoryDetails"> 
{historyData.map((item) => (
            
        <div key={item.key} className="boxx">
        {/* w-800 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 */}
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-gray-400 ">{item.subtitle}</p>

        </div>
          ))}
          
          </NavLink>
      </div>
      
      </>
  );
};

export default History;
