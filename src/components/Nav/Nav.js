import React from 'react';
import {Link} from 'react-router-dom';

import '../../../src/style.css';

const Nav = () => {
  return (
    <div className='relative bg-white dark:bg-gray-800'>
      <div className='flex flex-col sm:flex-row sm:justify-around'>
        <div className='h-screen w-72'>
          <nav className='mt-10 px-6 '>
            <Link
              to='/'
              className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg'>
              <span className='mx-4 text-lg font-normal'>게시판</span>
            </Link>
            <Link
              to='/join'
              className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg'>
              <span className='mx-4 text-lg font-normal'>로그인</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
