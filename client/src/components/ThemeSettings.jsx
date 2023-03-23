import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineSend } from "react-icons/ai";
const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Chat</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
            <div class="flex w-full m-5 gap-2 fixed bottom-4 ">
              <textarea
                className="peer w-80 resize-none rounded-[7px] border-2 border-black-1000 font-sans placeholder:translate-y-2"
                placeholder="Enter Your Queries"
              ></textarea>
              <button
                type='button'
                className='border-sloid border-2 border-black rounded-full p-2 hover:bg-sky-200'
              >
                <AiOutlineSend/>
              </button>
            </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
