import React from 'react';
import { Button } from '../components';
import {recentTransactions } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';


const Profile = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div >
      <div className="flex gap-10 m-4 flex-wrap justify-center">  
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 border-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Profile</p>
          </div>
          <div className="mt-10">
            <img className=" h-50  md:w-96 rounded-2xl border-4" src={avatar} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">Welcome to your profile!</p>

              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="mt-10  ">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <p className="text-md font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
            
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Edit Profile"
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

export default Profile;







// const Ecommerce = () => {
//   const { currentColor, currentMode } = useStateContext();
  

//   return (
//     <div >


//       <div className="flex gap-10 m-4 flex-wrap justify-center">
    

        
//         <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 border-4">
//           <div className="flex justify-between">
//             <p className="text-xl font-semibold">Edit Profile</p>
//           </div>
//           <div className="mt-10">
//             <img className=" h-50  md:w-96 border-4 rounded-2xl"  src={product9} alt="" />
//             {/* src of this img will be taken from the DB, which will receive the img from the below input field */}
//             <form action="/editProfile" method='POST' style={{margin : "10px"}}>
//                     <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
//                   </form>
//             <div className="mt-8">
//               <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
//           <div className="mt-0  ">
//           {/* w-72 */}
//             {recentTransactions.map((item) => (
//               <div key={item.title} className="flex justify-between mt-4 gap-4">
//                   <p className="text-sm text-gray-400">{item.desc}</p>
//                   <form action="/editProfile" method='POST'>
//                     <input type="text" style={{background: "#F0F0F0", padding: "5px", display: "inline-block", borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"}}></input>
//                   </form>
//               </div>
//             ))}
//           </div>
//         </div>
            
//               <div className="mt-3">
//                 <Button
//                   color="white"
//                   bgColor={currentColor}
//                   text="Save Changes"
//                   borderRadius="10px"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </div>

//     </div>
//   );
// };

// export default Ecommerce;
