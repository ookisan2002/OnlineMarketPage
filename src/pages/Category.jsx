import { useEffect, useState } from "react";
import Header from "../components/Header";

const Category = () => {
  const [sort, setSort] = useState(false);
  console.log(document.getElementById('test'))
  const [currentLetterPart,setCurrentLetterPart] = useState('A');
  const findCurrentLetterPart = ()=>{
    const elements = document.querySelectorAll('.letterPart');
    let closestDistance = Infinity;
    let closestElement = null;
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestElement = element;
        }
    });
    setCurrentLetterPart(closestElement.getAttribute('id'));
}
  useEffect(()=>{
    window.addEventListener('scroll', findCurrentLetterPart);
    return () => {
      window.removeEventListener('scroll', findCurrentLetterPart);
    };
  })
  return (
    <>
      <Header isScrolledOut={true} />
      <div className="bg-red-600 w-full h-[75px] z-10 md:hidden absolute top-[79px]"></div>
      <div className=" relative  w-full flex justify-center">
        <div className="-ml-60 h-full fixed top-14  -left-[calc(170px-(50vw-620px))]">
          <img
            src="https://as.realclick.vn/data/image/2022/11/19/Banner-dien-may-400x800-meta-left-a.png"
            className=""
            alt="🖼️"
          ></img>
        </div>
        <div className="content-center h-full xl:w-[1240px] lg:w-[calc(100vw-128px)] w-full xl:m-0 md:m-0 mx-16">
          <div className="w-full flex justify-center items-center flex-col">
            <div className="flex my-2 h-[20px] content-start xl:w-[1240px] lg:w-[calc(100vw-128px)] md:w-full">
              <i class="fa-solid fa-house h-full flex items-center mr-3 text-red-500"></i>
              <a className="flex items-center text-center text-red-500">
                Trang chủ
              </a>
            </div>
          </div>
          <div className="bg-white w-full p-1 h-fit relative overflow-visible">
            <div className="flex p-2">
              <div
                className={`w-[230px] h-[29px] flex mb-1 p-2 border-b cursor-pointer  ${
                  sort ? "border-slate-300" : "border-blue-600"
                } items-center mr-1`}
                onClick={() => {
                  setSort(false);
                }}
              >
                <img
                  src="https://meta.vn/Data/image/2021/06/25/grid-icon-a.png"
                  alt=""
                  className="mr-2 w-[22px] h-[22px]"
                />
                <p className="text-sm">Nhóm hàng</p>
              </div>
              <div
                className={`w-[230px] h-[29px] flex mb-1 p-2 border-b cursor-pointer ${
                  sort ? "border-blue-600" : "border-slate-300"
                } items-center`}
                onClick={() => {
                  setSort(true);
                }}
              >
                <p className="text-sm">Sắp xếp A-Z</p>
              </div>
            </div>
            <div
              className={`w-full py-2 flex flex-col ${
                sort ? "hidden" : "flex"
              }`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                return (
                  <>
                    <div className="w-full bg-slate-200 flex items-center p-3">
                      <img
                        src="https://meta.vn/icons/cats/1018.png"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                      <p className="ml-2 font-medium">Điều hòa</p>
                    </div>
                    <div className="flex flex-wrap w-full p-2">
                      <div className="w-[294px] md:w-full flex mb-1">
                        <img
                          src="https://meta.vn/icons/cats/1039.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Điều hòa 1 chiều</p>
                      </div>
                      <div className="w-[294px] md:w-full flex mb-1">
                        <img
                          src="https://meta.vn/icons/cats/3257.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Điều hòa cây</p>
                      </div>
                      <div className="w-[294px] md:w-full flex mb-1">
                        <img
                          src="https://meta.vn/icons/cats/3791.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Điều hòa áp trần</p>
                      </div>
                      <div className="w-[294px] md:w-full flex mb-1">
                        <img
                          src="https://meta.vn/icons/cats/3523.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Phụ kiện điều hòa</p>
                      </div>
                      <div className="w-[294px] md:w-full flex mb-1">
                        <img
                          src="https://meta.vn/icons/cats/1040.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Điều hòa 2 chiều</p>
                      </div>
                      <div className="w-[294px] md:w-full flex mb-1" >
                        <img
                          src="https://meta.vn/icons/cats/3425.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Điều hòa âm trần</p>
                      </div>
                      <div className="w-[294px] md:w-full flex mb-1">
                        <img
                          src="https://meta.vn/icons/cats/3782.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                        <p className="ml-2 text-sm">Điều hòa multi</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div
              className={`w-full px-2 flex flex-col ${
                sort ? "flex" : "hidden"
              } relative overflow-visible h-fit`}
            >
              <div className="w-full p-1 border flex h-fit justify-start sticky bg-white top-[51px] md:top-[81px]">
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='A' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('A').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>A</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='B' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('B').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>B</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='C' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('C').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>C</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='D' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('D').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>D</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='E' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('E').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>E</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='F' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('F').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>F</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='G' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('G').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>G</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='H' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('H').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>H</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='I' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('I').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>I</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='J' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('J').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>J</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='K' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('K').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>K</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='L' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('L').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>L</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='M' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('M').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>M</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='N' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('N').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>N</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='O' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('O').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>O</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='P' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('P').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>P</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='Q' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('Q').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>Q</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='R' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('R').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>R</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='S' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('S').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>S</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='T' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('T').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>T</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='U' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('U').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>U</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='V' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('V').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>V</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='W' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('W').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>W</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='X' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('X').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>X</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='Y' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('Y').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>Y</p>
                <p className={`text-base font-medium mr-2 ${currentLetterPart==='Z' ?'text-red-500' :''}`} onClick={()=>{document.getElementById('Z').scrollIntoView({
                    
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'    // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });}}>Z</p>
              </div>
              <div className="w-full h-fit p-1 mt-2">
                <div className="w-full flex items-center letterPart p-1" id='A'>
                  <p className={`text-base font-medium w-full text-left`}>
                    A
                  </p>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 1 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa cây</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa áp trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Phụ kiện điều hòa</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 2 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa âm trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa multi</p>
                  </div>
                </div>
                <div className="w-full flex items-center letterPart p-1" id='B'>
                  <p className={`text-base font-medium w-full text-left`}>
                    B
                  </p>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 1 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa cây</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa áp trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Phụ kiện điều hòa</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 2 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa âm trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa multi</p>
                  </div>
                </div>
                <div className="w-full flex items-center letterPart p-1" id='C'>
                  <p className={`text-base font-medium w-full text-left`}>
                    C
                  </p>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 1 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa cây</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa áp trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Phụ kiện điều hòa</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 2 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa âm trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa multi</p>
                  </div>
                </div>
                <div className="w-full flex items-center letterPart p-1" id='D'>
                  <p className={`text-base font-medium w-full text-left`}>
                    D
                  </p>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 1 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa cây</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa áp trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Phụ kiện điều hòa</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa 2 chiều</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa âm trần</p>
                  </div>
                  <div className="w-[294px] md:w-full flex mb-4">
                    <p className="ml-2 text-sm">Điều hòa multi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-60 fixed h-full top-14  -right-[calc(170px-(50vw-620px))]">
          <img
            src="https://as.realclick.vn/data/image/2022/11/19/Banner-dien-may-400x800-meta-right-a.png"
            alt="🖼️"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
