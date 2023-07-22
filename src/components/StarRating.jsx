import { useEffect, useState } from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-1 items-center mt-[12px]">
      <i for="star5" className={`star text-base -m-[1px] ${(rating>=1) ? "text-amber-400" :"text-slate-600"}` }>&#9733;</i>
      <i for="star5" className={`star text-base -m-[1px] ${rating>=2 ?"text-amber-400" :"text-slate-600"}`}>&#9733;</i>
      <i for="star5" className={`star text-base -m-[1px] ${rating>=3 ?"text-amber-400" :"text-slate-600"}`}>&#9733;</i>
      <i for="star5" className={`star text-base -m-[1px] ${rating>=4 ?"text-amber-400" :"text-slate-600"}`}>&#9733;</i>
      <i for="star5" className={`star text-base -m-[1px] ${rating>=5 ?"text-amber-400" :"text-slate-600"}`}>&#9733;</i>
      <p className='text-sm'>{`(28)`}</p>
      
    </div>
  );
};

export default StarRating;
