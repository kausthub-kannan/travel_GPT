import React from 'react';
import { Button } from '../components';
import {recentTransactions } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';



const Recommendation = () => {
  const { currentColor, currentMode } = useStateContext();
  

  return (

    <div className="flex  justify-center flex-row" style={{height: "78vh"}}>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full flex justify-between">
           
            <div className="bg-gray-100 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-9/12">
                
            </div>
            <div className=" m-2.5 p-4 pt-0">
            
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Recommendation</p>
          </div>

            <img className=" h-40  md:w-96 border-4 rounded-2xl"  src={avatar} alt="" />
            <div className="">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
          <div className="mt-0 mb-10 ">
          {/* w-72 */}
            {recentTransactions.map((item) => (
              <div key={item.id} className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <form action="/Recommendation" method='POST'>
                  
                    <input type="text" id={item.id} style={{background: "#F0F0F0", padding: "5px", display: "inline-block", borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"}}></input>
                  </form>
              </div>
            ))}

           
        </div>           
              <div className="" style={{padding:"0"}}>
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Explore"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>

   
            </div>
        </div>
    </div>
  );
};

export default Recommendation;







