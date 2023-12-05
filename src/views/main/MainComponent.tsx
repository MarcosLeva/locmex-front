'use client';
import { classNames } from '@/utils/classnames';
import { useState } from 'react';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='bg-black w-full h-screen flex'>
      <div className={classNames(showSidebar && 'w-[28rem]', 'bg-blue-500')}>
        <div className='flex justify-end'></div>
      </div>
      <button
        className={classNames(
          showSidebar && 'left-[28rem]',
          'absolute bg-red-500 w-5 h-36 rounded-tr-xl rounded-br-xl top-36'
        )}
        onClick={handleSidebar}></button>
      <div className='bg-green-500 flex-auto'></div>
    </div>
  );
};
export default MainComponent;
