import React from 'react';
import {historyDetails } from '../data/dummy';


const HistoryDetails = () => {
const historyTitle = "this is a history title"
const historyInfo = "this is a piece of information"
  return ( 
    <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6  border-4 w-800">
          <div className="flex justify-between">
            <p className="text-xl font-semibold" style={{textDecoration:"underline"}}>{historyTitle}</p>
          </div>
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            {historyDetails.map((item) => (
             
              <div key={item.id} className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <p style={{background: "#F0F0F0", padding: "10px", display: "inline-block", borderRadius: "10px"}}>{historyInfo}</p>
            </div>
            ))}
            
        </div>
        </div>
</div>

  );
};

export default HistoryDetails;


 {/* <div key={item.title} className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <p className="text-md font-semibold">{item.title}</p>
              </div> */}