import React from 'react';
import List from './cr2 component/List';

const Forecast = () => {
  return (
    <div>
    <div className='text-white font-semibold text-xl px-16 mt-[-30px]'>5 Days Forcast</div>
  <div className='flex p-7 px-11 mt-[-30px]'>
    <div className='h-70 w-60 bg-[#3f3e41] m-4 rounded-xl overflow-hidden'>

      <List date='25 Oct' day='Friday' temp='7' />
      <List date='24 Oct' day='Thursday' temp='10' />
      <List date='23 Oct' day='Wednesday' temp='8' />
      <List date='22 Oct' day='Tuesday' temp='4' />
      <List date='21 Oct' day='Monday' temp='15' />

    </div>
  </div>
  </div>
  );
};

export default Forecast;
