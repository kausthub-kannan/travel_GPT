import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../components';

const Home = () => {
  const { currentColor,isLoggedIn, setLoggedIn } = useStateContext();
  return (
    <div >
      {isLoggedIn ?(
          <div className="mt-24">
            <Reports/> 
          </div>        
      ):(
        <div class="flex items-center justify-center h-screen gap-10">
        <NavLink to="/Login">
          <Button
                color="white"
                bgColor={currentColor}
                text="SignIn"
                borderRadius="10px"
          />
          </NavLink>
          <NavLink to="/Signup">
          <Button
                color="white"
                bgColor={currentColor}
                text="SignUp"
                borderRadius="10px"
          />
          </NavLink>
        </div>
      )}
    </div>
    
  );
};

export default Home;