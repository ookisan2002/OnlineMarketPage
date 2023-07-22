import MechandiseCard from "./MechandiseCard";

import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  const [mechandisePage, setMechandisePage] = useState(0);
  const [categorySlidePage, setCategorySlidePage] = useState(0);
  const handlePrevMechanSlide = () => {
    if (mechandisePage > 0) {
      setMechandisePage((prevMechandisePage) => prevMechandisePage - 500);
    }
  };
  const handleNexMechanSlide = () => {
    if (mechandisePage < 40 * 206) {
      setMechandisePage((prevMechandisePage) => prevMechandisePage + 500);
    }
  };
  const handlePrevCategorySlidePage = () => {
    if (categorySlidePage > 0) {
      setCategorySlidePage((prevCategorySlidePage) => prevCategorySlidePage - 500);
    }
  };
  const handleNexCategorySlidePage = () => {
    if (categorySlidePage < 40 * 206) {
      setCategorySlidePage((prevCategorySlidePage) => prevCategorySlidePage + 500);
    }
  };
  return (
    <div className="my-4 bg-white p-3 w-full">
      <div className=" h-[32px]  flex relative">
        <h1 className="font-bold text-lg text-black p-1 border-l-8 border-yellow-400">
          ĐIỆN MÁY - ĐIỆN LẠNH
        </h1>
        <Link className="flex text-black  absolute -top-[0px] h-[38px] p-1 rounded-bl-md text-center right-0">
          Xem tất cả
          <i class="fa-solid fa-angle-right text-black flex items-center p-2"></i>
        </Link>
      </div>
      <div className="flex w-full h-[350px] ">
        <Link className="w-[290px] flex h-[350px]">
          <img
            src="https://s.meta.com.vn/img/thumb.ashx/Data/image/2022/02/08/Banner-may-loc-nuoc-290x350.png"
            alt=""
          />
        </Link>

        <div className="overflow-hidden relative w-[calc(100%-290px)] h-full">
          <div
            className="absolute bg-slate-600 text-white left-0 top-32 h-11 z-10 flex items-center rounded-r-full"
            onClick={() => {
                handlePrevCategorySlidePage();
            }}
          >
            <i class="fa-solid fa-angle-left  flex items-center p-2 m-auto"></i>
          </div>
          <div
            className={`flex relative  flex-col flex-wrap transform transition-transform duration-500 h-full ease-linear`}
            style={{ transform: `translateX(-${categorySlidePage}px)` }}
          >
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
              36, 37, 38, 39, 40,
            ].map((i) => {
              return (
                <div className="flex flex-col flex-grow shrink-0 w-[170px] h-1/2">
                <div class="flex flex-col h-full border px-[5px] py-[20px] relative">
                  <img src="https://meta.vn/icons/cateico/c1017-210x210.jpg" class="h-[120px] w-[120px] ml-auto mr-auto" alt=""/>
                    <p>Máy giặt</p>
                </div>
              </div>
              );
            })}
          </div>
          <div
            className="absolute bg-slate-600 text-white right-0 top-32 h-11 z-10 flex items-center rounded-l-full"
            onClick={() => {
                handleNexCategorySlidePage();
            }}
          >
            <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
          </div>
        </div>
      </div>
      <div className=" h-[32px] my-3 flex relative ">
        <h1 className="font-bold text-lg text-black p-1 ">
          Điện máy nổi bật 
        </h1>
        <Link className="flex text-white  absolute -top-[0px] h-[38px] rounded-md items-center right-2 px-2 bg-yellow-400">
          Xem tất cả sản phẩm
        </Link>
      </div>
      <div className="overflow-hidden flex relative w-full h-[353px]">
        <div
          className="absolute bg-slate-600 text-white left-0 top-32 h-11 z-10 flex items-center rounded-r-full"
          onClick={() => {
            handlePrevMechanSlide();
          }}
        >
          <i class="fa-solid fa-angle-left  flex items-center p-2 m-auto"></i>
        </div>
        <div
          className={`flex relative  transform transition-transform duration-500 ease-linear`}
          style={{ transform: `translateX(-${mechandisePage}px)` }}
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40,
          ].map((i) => {
            return (
              <div className="flex flex-grow shrink-0 mr-4 w-[206px] h-[353px]">
                <MechandiseCard />
              </div>
            );
          })}
        </div>
        <div
          className="absolute bg-slate-600 text-white right-2 top-32 h-11 z-10 flex items-center rounded-l-full"
          onClick={() => {
            handleNexMechanSlide();
          }}
        >
          <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
