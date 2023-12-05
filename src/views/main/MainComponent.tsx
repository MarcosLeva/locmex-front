'use client';
import { useState } from 'react';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='bg-black w-full h-screen flex'>
      <div className='bg-blue-500 w-[28rem]'>
        <div className='flex justify-end'></div>
      </div>
      <button className='absolute bg-red-500 w-5 h-36 rounded-tr-xl rounded-br-xl top-36 left-[28rem]'></button>
      <div className='bg-green-500 flex-auto'></div>
    </div>
  );
};
export default MainComponent;
