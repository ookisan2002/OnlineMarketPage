import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import MechandiseCard2 from "../components/MechandiseDetail/MechandiseCard2";
import CategoryCard from "../components/Home/CategoryCard";
import Header from "../components/Header";
import StarRating from "../components/StarRating";
import Cmt from "../components/Cmt";

const MechandiseDetail = () => {
  const [suggestSlide, setSuggestSlide] = useState(0);
  const [sameBranchSlide, setSameBranchSlide] = useState(0);
  const [saleTime, setSaleTime] = useState(864000);
  const [imagePage, setImagePage] = useState(0);
  const [mechandiseQuantity, setMechandiseQuantity] = useState(1);
  const [contactDetails, setContactDetails] = useState(false);
  const [mechandiseDetails, setMechanicalDetails] = useState(false);
  const [relavantMechandise, setRelavantMechandise] = useState(0);
  const [myRating, setMyRating] = useState(6);
  const [myCmt, setMyCmt] = useState("");
  const [cmtQuantity, setCmtQuantity] = useState(10);
  const [replyNumber, setReplyNumber] = useState("0");
  const inforPart=useRef()
  const CmtPart=useRef()
  const [isScrolledOut, setIsScrolledOut] = useState(false);
  const buyPart=useRef()
  const handleScroll = () => {
    if (buyPart.current) {
      const { top, bottom } = buyPart.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Kiểm tra nếu phần tử cuộn ra khỏi view port (vùng hiển thị của cửa sổ trình duyệt)
      if (bottom < 0 || top > windowHeight) {
        setIsScrolledOut(true);
      } else {
        setIsScrolledOut(false);
      }
    }
  };

  var time = {
    days: Math.floor(saleTime / 86400),
    hours: Math.floor((saleTime % 86400) / 3600),
    minutes: Math.floor(((saleTime % 86400) % 3600) / 60),
    second: ((saleTime % 86400) % 3600) % 60,
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSaleTime((prevSaleTime) => prevSaleTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  const handlePrevRelavantMecahndise = () => {
    if (relavantMechandise > 0) {
      setRelavantMechandise(
        (prevRelavantMechandise) => prevRelavantMechandise - 500
      );
    }
  };
  const handleNexRelavantMecahndise = () => {
    if (relavantMechandise < 40 * 206) {
      setRelavantMechandise(
        (prevRelavantMechandise) => prevRelavantMechandise + 500
      );
    }
  };
  const handlePrevSuggestSlide = () => {
    if (suggestSlide > 0) {
      setSuggestSlide((prevSuggestSlide) => prevSuggestSlide - 500);
    }
  };
  const handleNexSuggestSlide = () => {
    if (suggestSlide < 40 * 206) {
      setSuggestSlide((prevSuggestSlide) => prevSuggestSlide + 500);
    }
  };
  const handlePrevSameBranchSlide = () => {
    if (sameBranchSlide > 0) {
      setSameBranchSlide((prevSameBranchSlide) => prevSameBranchSlide - 500);
    }
  };
  const handleNexSameBranchSlide = () => {
    if (sameBranchSlide < 40 * 206) {
      setSameBranchSlide((prevSameBranchSlide) => prevSameBranchSlide + 500);
    }
  };
  const handlePrevMechanSlide = () => {
    if (imagePage > 0) {
      setImagePage((prevImagePage) => prevImagePage - 440);
    }
  };
  const handleNexvMechanSlide = () => {
    if (imagePage < 40 * 440) {
      setImagePage((prevImagePage) => prevImagePage + 440);
    }
  };
  const handleIncreaseQuantity = () => {
    setMechandiseQuantity(
      (prevMechandiseQuantity) => prevMechandiseQuantity + 1
    );
  };
  const handleDecreaseQuantity = () => {
    if (mechandiseQuantity >= 2) {
      setMechandiseQuantity(
        (prevMechandiseQuantity) => prevMechandiseQuantity - 1
      );
    }
  };
  return (
    <>
      <div className="relative z-30 w-full">
        <Header isScrolledOut={true}/>
      </div>
      <div className="bg-red-600 w-full h-[75px] z-10 md:hidden absolute top-[79px]"></div>
      <div className="-ml-60 h-full fixed  -left-[calc(170px-(50vw-623px))]">
        <img
          src="https://as.realclick.vn/data/image/2022/11/19/Banner-dien-may-400x800-meta-left-a.png"
          className=""
          alt="🖼️"
        ></img>
      </div>
      <div className="flex fixed top-0 w-full z-50 justify-center bg-white transition-transform duration-500 ease-linear md:hidden"
        style={{ transform: `translateY(-${isScrolledOut ?0 :50}px)` }}
      >
        <div className="w-[1240px] h-[50px] bg-white flex py-[5px] items-center">
          <p className="text-lg font-semibold line-clamp-1">Bộ 3 nồi inox 4 đáy Nagakawa NAG1304 (16cm, 20cm, 24cm)</p>
          <div className="ml-auto flex items-center">
            <p className="text-red-600 mr-2 text-lg font-medium">399.000đ</p>
            <div className="w-[169px] h-[45px] bg-red-600 rounded-sm flex p-1 my-2">
                <div className=" h-full w-[43px] border-r border-r-white flex justify-center items-center">
                  <i class="fa-solid fa-cart-shopping text-white text-xl"></i>
                </div>
                <div className="h-full flex flex-col w-[calc(100%-43px)] text-white justify-center">
                  <p className="w-full text-lg font-medium text-center">
                    Đặt mua
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="flex fixed bottom-0 w-full z-50 justify-center bg-white transition-transform duration-500 ease-linear lg:hidden xl:hidden"
        style={{ transform: `translateY(${isScrolledOut ?0 :50}px)` }}
      >
        <div className="w-[1240px] h-[55px] bg-white flex py-[5px] items-center p-[5px]">
          <button className="w-full h-full flex flex-col items-center justify-center bg-red-600 p-1">
            <p className="w-full text-xl text-white text-center">
              Đặt mua
            </p>
            <p className="w-full text-xs text-white font-medium text-center">
              399.000đ
            </p>
          </button>
        </div>
      </div>
      <div className=" relative  w-full flex justify-center">
        <div className=" content-center h-full xl:w-[1240px] lg:w-[calc(100vw-128px)] w-full xl:m-0 md:m-0 mx-16 lg:overflow-hidden md:overflow-hidden">
          <div className="w-full flex justify-center items-center flex-col">
            <div className="flex my-2 h-[20px] content-start xl:w-[1240px] lg:w-[calc(100vw-128px)] md:w-full">
              <i class="fa-solid fa-house h-full flex items-center"></i>
              <i class="fa-solid fa-angle-right mx-2 h-full flex items-center"></i>
              <a className="flex items-center text-center">Đồ gia dụng</a>
              <i class="fa-solid fa-angle-right mx-2 h-full flex items-center"></i>
              <a className="flex items-center text-center">Các loại nồi</a>
              <i class="fa-solid fa-angle-right mx-2 h-full flex items-center"></i>
              <a className="flex items-center text-center">Nồi - Bộ nồi</a>
              <i class="fa-solid fa-angle-right mx-2 h-full flex items-center"></i>
              <a className="flex items-center text-center">Bộ nồi</a>
            </div>
          </div>
          <div className="bg-white w-full xl:flex lg:flex md:flex-col md:flex" ref={buyPart}>
            <div className="flex flex-col xl:w-[450px] lg:w-[450px] md: w-full">
              <div className=" bg-red-500 m-[5px] xl:w-[440px] md:w-[calc(100%-10px)] h-[330px] overflow-hidden flex relative">
                <div
                  className="absolute bg-slate-600 text-white left-0 top-32 h-11 z-10 flex items-center rounded-r-full"
                  onClick={() => {
                    handlePrevMechanSlide();
                  }}
                >
                  <i class="fa-solid fa-angle-left  flex items-center p-2 m-auto"></i>
                </div>
                <div
                  className={`flex relative -translate-x-[${imagePage}px] transition-transform duration-500 ease-linear`}
                  style={{ transform: `translateX(-${imagePage}px)` }}
                >
                  <div className="flex basis-full flex-grow shrink-0">
                    <img
                      src="https://s.meta.com.vn/img/thumb.ashx/Data/2023/Thang07/xa-hang/Banner-xa-hang-720x445.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex basis-full flex-grow shrink-0">
                    <img
                      src="https://s.meta.com.vn/img/thumb.ashx/Data/2023/Thang06/banner-Aguri-720x445.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex basis-full flex-grow shrink-0">
                    <img
                      src="https://s.meta.com.vn/img/thumb.ashx/Data/2023/Thang07/xa-hang/Banner-xa-hang-720x445.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div
                  className="absolute bg-slate-600 text-white right-0 top-32 h-11 z-10 flex items-center rounded-l-full"
                  onClick={() => {
                    handleNexvMechanSlide();
                  }}
                >
                  <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
                </div>
              </div>
              <div className="flex m-[5px]">
                <div className="w-[66px] h-[56px] bg-black mr-3 relative rounded-md border">
                  <img
                    src="https://s.meta.com.vn/img/thumb.ashx/66x0x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-t1.jpg"
                    className="w-full h-full"
                    alt=""
                  />
                  <div className="bg-black opacity-60 absolute w-full h-full top-0 left-0 rounded-md">
                    <p className="text-white z-10 h-full">Xem 11 hình</p>
                  </div>
                </div>
                <div className="w-[66px] h-[56px] bg-black mr-3 rounded-md border relative">
                  <img
                    src="https://s.meta.com.vn/img/thumb.ashx/66x56x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png"
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <button className="w-[66px] h-[56px] bg-white mr-3  rounded-md flex flex-col content-center" onClick={()=>{
                  CmtPart.current.scrollIntoView({
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'   // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });
                }}>
                  <i class="fa-solid fa-comment h-[24px] flex items-center justify-center  text-red-600 w-full"></i>
                  <p className="text-black text-xs hover:text-red-600">
                    Xem 40 nhận xét
                  </p>
                </button>
                <button className="w-[66px] h-[56px] bg-white mr-3  rounded-md" onClick={()=>{
                  inforPart.current.scrollIntoView({
                    behavior: 'smooth', // Có thể thay 'smooth' thành 'auto' nếu muốn cuộn tức thì
                    block: 'start',     // 'start' để đảm bảo phần tử nằm ở đầu cửa sổ cuộn
                    inline: 'nearest'   // 'nearest' để đảm bảo phần tử nằm ngang hàng với điểm hiện tại của cửa sổ cuộn
                  });
                }}>
                  <i class="fa-solid fa-gear h-[24px] flex items-center justify-center text-red-600 w-full"></i>
                  <p className="text-black text-xs hover:text-red-600">
                    Thông số kĩ thuật
                  </p>
                </button>
                <div className="w-[66px] h-[56px] mr-3  rounded-md">
                  <img
                    src="https://meta.vn/qrcode/qrcode.ashx?width=100&height=100&margin=0&text=https%3a%2f%2fmeta.vn%2f65830%3fref%3dqr"
                    className=" h-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="p-1 flex flex-col w-[calc(100%-450px)] md:w-full">
              <div className="w-full">
                <h1 className="text-xl font-semibold text-left">
                  Bộ 3 nồi inox 4 đáy Nagakawa NAG1304 (16cm, 20cm, 24cm)
                </h1>
                <div className="flex">
                  <div className="relative w-[12px] h-[14px] m-1 flex items-center">
                    <i class="fa-solid fa-star text-xs w-full text-slate-400 h-full"></i>
                    <i class="fa-solid fa-star text-xs w-full text-yellow-400 absolute top-0 left-0 h-full"></i>
                  </div>
                  <div className="relative w-[12px] h-[14px] m-1 flex items-center">
                    <i class="fa-solid fa-star text-xs w-full text-slate-400 h-full"></i>
                    <i class="fa-solid fa-star text-xs w-full text-yellow-400 absolute top-0 left-0 h-full"></i>
                  </div>
                  <div className="relative w-[12px] h-[14px] m-1 flex items-center">
                    <i class="fa-solid fa-star text-xs w-full text-slate-400 h-full"></i>
                    <i class="fa-solid fa-star text-xs w-full text-yellow-400 absolute top-0 left-0 h-full"></i>
                  </div>
                  <div className="relative w-[12px] h-[14px] m-1 flex items-center">
                    <i class="fa-solid fa-star text-xs w-full text-slate-400 h-full"></i>
                    <i class="fa-solid fa-star text-xs w-full text-yellow-400 absolute top-0 left-0 h-full"></i>
                  </div>
                  <div className="relative w-[12px] h-[14px] m-1 flex items-center">
                    <i class="fa-solid fa-star text-xs w-full text-slate-400 h-full"></i>
                    <i class="text-xs w-[60%] fon text-yellow-400 absolute top-0 left-0 h-full"></i>
                  </div>
                  <p className="text-blue-500 cursor-pointer">(28 đánh giá)</p>
                </div>
                <div className="flex">
                  <p className="mr-8 text-sm h-full ">Thương hiệu:</p>
                  <p className="text-blue-500 text-sm cursor-pointer mx-1">
                    Narakawa
                  </p>
                  <p className="text-sm">|</p>
                  <p className="text-blue-500 text-sm cursor-pointer mx-1">
                    Bộ nồi Narakawa
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="xl:w-[calc(100%-250px)] p-1 flex flex-col md:w-full">
                  <div className="w-full h-[97px] bg-red-600 rounded-md relative flex flex-col items-start justify-center p-2 mb-1">
                    <p className="text-white text-2xl font-semibold">
                      399.000 đ
                    </p>
                    <div className="flex">
                      <p className="text-white text-base font-normal mr-3">
                        -34%
                      </p>
                      <p className="text-white text-base font-normal line-through">
                        605.000 đ
                      </p>
                    </div>
                    <div className="absolute flex flex-col items-end right-2">
                      <p className="text-white text-xs mb-1">Kết thúc sau</p>
                      <div className="flex">
                        <div className="w-[35px] h-[34px] bg-white rounded-md ml-2">
                          <p className="text-black text-xs ">{time.days}</p>
                          <p className="text-black text-xs ">Ngày</p>
                        </div>
                        <div className="w-[35px] h-[34px] bg-white rounded-md ml-2">
                          <p className="text-black text-xs ">{time.hours}</p>
                          <p className="text-black text-xs ">Giờ</p>
                        </div>
                        <div className="w-[35px] h-[34px] bg-white rounded-md ml-2">
                          <p className="text-black text-xs ">{time.minutes}</p>
                          <p className="text-black text-xs ">Phút</p>
                        </div>
                        <div className="w-[35px] h-[34px] bg-white rounded-md ml-2">
                          <p className="text-black text-xs ">{time.second}</p>
                          <p className="text-black text-xs ">Giây</p>
                        </div>
                      </div>
                      <p className="text-white text-xs ">
                        Còn <span className="text-sm font-bold mt-1">2</span> bộ
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex my-1">
                    <p className="mr-8 text-sm h-full ">Trạng thái:</p>
                    <p className=" text-sm h-full ">Còn hàng</p>
                  </div>
                  <div className="w-full flex my-2">
                    <p className="mr-2 text-sm h-full items-center leading-8">
                      Chọn số lượng:
                    </p>
                    <div className="flex w-[102px] h-[32px] mr-5">
                      <div className="border  h-full w-1/3">
                        <i
                          class="fa-solid fa-plus flex w-full h-full justify-center items-center"
                          onClick={() => {
                            handleIncreaseQuantity();
                          }}
                        ></i>
                      </div>
                      <div className="border  h-full w-1/3">
                        <input
                          type="number"
                          value={mechandiseQuantity}
                          className="w-full h-full text-center"
                          onChange={(e) => {
                            setMechandiseQuantity(e.target.value);
                          }}
                        />
                      </div>
                      <div className="border  h-full w-1/3">
                        <i
                          class="fa-solid fa-minus flex w-full h-full justify-center items-center"
                          onClick={() => {
                            handleDecreaseQuantity();
                          }}
                        ></i>
                      </div>
                    </div>
                    <p className="mr-4 text-sm h-full leading-8">Cho vào giỏ</p>
                    <img
                      src="https://meta.vn/Data/image/2020/10/21/dd.png"
                      alt=""
                      className="h-[32px]"
                    />
                  </div>
                  <div className="w-full flex flex-wrap relative my-2 border rounded-md pt-2">
                    <div className="flex absolute items-center left-2 -top-[11px] w-[73px] bg-white">
                      <img
                        src="https://meta.vn/themes/meta.vn/images/gift.png"
                        alt=""
                        className="w-[16px] h-[16px] mx-1"
                      />
                      <p className="text-red-600 font-semibold text-xs">
                        ƯU ĐÃI
                      </p>
                    </div>
                    <div className="w-[88px] h-[28px] bg-white rounded-md mx-2 my-1 border border-blue-500 voucher relative overall">
                      <p className="text-xs font-semibold h-full text-center leading-loose w-full">
                        Giảm 500K
                      </p>
                      <div className="w-[300px] flex flex-wrap absolute left-0 top-[27px] border bg-white border-slate-300 p-2 detail invisible z-20">
                        <p className="text-xs w-full text-left leading-5">
                          Tặng voucher giảm trực tiếp 500.000đ cho tổng sản phẩm
                          Nagakawa trị giá từ 10 triệu
                        </p>
                        <p className="text-slate-400 text-xs w-full text-left">
                          Đến khi hết số lượng voucher
                        </p>
                      </div>
                    </div>
                    <div className="w-[88px] h-[28px] bg-white rounded-md mx-2 my-1 border border-blue-500 voucher relative overall">
                      <p className="text-xs font-semibold h-full text-center leading-loose w-full">
                        Giảm 500K
                      </p>
                      <div className="w-[300px] flex flex-wrap absolute left-0 top-[27px] border bg-white border-slate-300 p-2 detail invisible z-20">
                        <p className="text-xs w-full text-left leading-5">
                          Tặng voucher giảm trực tiếp 500.000đ cho tổng sản phẩm
                          Nagakawa trị giá từ 10 triệu
                        </p>
                        <p className="text-slate-400 text-xs w-full text-left">
                          Đến khi hết số lượng voucher
                        </p>
                      </div>
                    </div>
                    <div className="w-[88px] h-[28px] bg-white rounded-md mx-2 my-1 border border-blue-500 voucher relative overall">
                      <p className="text-xs font-semibold h-full text-center leading-loose w-full">
                        Giảm 500K
                      </p>
                      <div className="w-[300px] flex flex-wrap absolute left-0 top-[27px] border bg-white border-slate-300 p-2 detail invisible z-20">
                        <p className="text-xs w-full text-left leading-5">
                          Tặng voucher giảm trực tiếp 500.000đ cho tổng sản phẩm
                          Nagakawa trị giá từ 10 triệu
                        </p>
                        <p className="text-slate-400 text-xs w-full text-left">
                          Đến khi hết số lượng voucher
                        </p>
                      </div>
                    </div>
                    <div className="w-[88px] h-[28px] bg-white rounded-md mx-2 my-1 border border-blue-500 voucher relative overall">
                      <p className="text-xs font-semibold h-full text-center leading-loose w-full">
                        Giảm 500K
                      </p>
                      <div className="w-[300px] flex flex-wrap absolute left-0 top-[27px] border bg-white border-slate-300 p-2 detail invisible z-20">
                        <p className="text-xs w-full text-left leading-5">
                          Tặng voucher giảm trực tiếp 500.000đ cho tổng sản phẩm
                          Nagakawa trị giá từ 10 triệu
                        </p>
                        <p className="text-slate-400 text-xs w-full text-left">
                          Đến khi hết số lượng voucher
                        </p>
                      </div>
                    </div>
                    <div className="w-[88px] h-[28px] bg-white rounded-md mx-2 my-1 border border-blue-500 voucher relative overall">
                      <p className="text-xs font-semibold h-full text-center leading-loose w-full">
                        Giảm 500K
                      </p>
                      <div className="w-[300px] flex flex-wrap absolute left-0 top-[27px] border bg-white border-slate-300 p-2 detail invisible z-20">
                        <p className="text-xs w-full text-left leading-5">
                          Tặng voucher giảm trực tiếp 500.000đ cho tổng sản phẩm
                          Nagakawa trị giá từ 10 triệu
                        </p>
                        <p className="text-slate-400 text-xs w-full text-left">
                          Đến khi hết số lượng voucher
                        </p>
                      </div>
                    </div>
                    <div className="w-[88px] h-[28px] bg-white rounded-md mx-2 my-1 border border-blue-500 voucher relative overall">
                      <p className="text-xs font-semibold h-full text-center leading-loose w-full">
                        Giảm 500K
                      </p>
                      <div className="w-[300px] flex flex-wrap absolute left-0 top-[27px] border bg-white border-slate-300 p-2 detail invisible z-20">
                        <p className="text-xs w-full text-left leading-5">
                          Tặng voucher giảm trực tiếp 500.000đ cho tổng sản phẩm
                          Nagakawa trị giá từ 10 triệu
                        </p>
                        <p className="text-slate-400 text-xs w-full text-left">
                          Đến khi hết số lượng voucher
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[45px] bg-red-600 rounded-md flex p-1 my-2">
                    <div className=" h-full w-[43px] border-r border-r-white flex justify-center items-center">
                      <i class="fa-solid fa-cart-shopping text-white text-xl"></i>
                    </div>
                    <div className="h-full flex flex-col w-[calc(100%-43px)] text-white">
                      <p className="w-full text-base font-medium h-1/2 text-center">
                        Đặt mua
                      </p>
                      <p className="w-full text-sm h-1/2  text-center">
                        Giao hàng tận nơi trên toàn quốc
                      </p>
                    </div>
                  </div>
                  <div className="w-full border my-2 p-1 overflow-hidden">
                    <p className="text-sm text-left">
                      META - Trên 16 năm Uy tín cung cấp Dịch vụ Bán hàng & Thu
                      tiền tại nhà toàn quốc
                    </p>
                    <p className="h-[30px] w-full flex justify-center text-blue-500">
                      Xem thêm chi tiết{" "}
                      <i
                        class={`fa-solid fa-angle-down mx-2 flex justify-center items-end w-[18px] h-[18px] border rounded-full border-blue-500 text-blue-500 transition-transform duration-500 ease-linear`}
                        onClick={() => {
                          setContactDetails(!contactDetails);
                        }}
                        style={{ transform: `rotate(${contactDetails ? 180 : 0}deg)` }}
                      ></i>
                    </p>
                    <div
                      className={`flex w-full justify-start ${
                        contactDetails ? "flex" : "hidden"
                      } transition-all duration-300 ease-out `}
                    >
                      <div className="mr-9">
                        <p className="text-black font-semibold h-7 text-sm text-left my-1 ml-2">
                          <i class="fa-solid fa-phone mx-1"></i>Hotline
                        </p>
                        <p className="text-black font-semibold h-7 text-sm text-left my-1 ml-2">
                          <i class="fa-solid fa-house mx-1"></i>Hà Nội:
                        </p>
                        <p className="text-black font-semibold h-7 text-sm text-left my-1 ml-2">
                          <i class="fa-solid fa-house mx-1"></i>TP Hồ Chí Minh:
                        </p>
                        <p className="text-black font-semibold h-7 text-sm text-left my-1 ml-2">
                          <i class="fa-solid fa-clock mx-1"></i>Thời gian
                        </p>
                      </div>
                      <div>
                        <p className="text-red-600 text-left text-sm my-1 h-7">
                          028.3833.6666
                        </p>
                        <p className="text-left text-sm my-1 h-7">
                          56 Duy Tân, Dịch Vọng Hậu, Cầu Giấy
                        </p>
                        <p className="text-left text-sm my-1 h-7">
                          716-718 Điện Biên Phủ, P.10, Q.10
                        </p>
                        <p className="text-left text-sm my-1 h-7">
                          Từ 8h - 19h00 Thứ 2 đến thứ 6{" "}
                        </p>
                        <p className="text-left text-sm my-1 h-7">
                          Từ 8h - 17h30 Thứ 7 & Chủ nhật
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 p-1 my-2">
                    <p>DỊCH VỤ & CHÚ Ý</p>
                    <div className="border-t-2">
                      <div className="w-full h-[20px] flex text-xs items-center">
                        <img
                          src="	https://meta.vn/themes/meta.vn/images/Checkmark.png"
                          className="h-[10px]"
                          alt=""
                        />
                        Giảm đến <b className="text-red-500"> 100K </b> khi mua
                        trả góp qua <b> Home PayLater </b> (
                        <a href="" className="text-blue-300">
                          Xem chi tiết
                        </a>{" "}
                        )
                      </div>
                    </div>
                    <div>
                      <div className="w-full h-[20px] flex text-xs items-center">
                        <img
                          src="	https://meta.vn/themes/meta.vn/images/Checkmark.png"
                          className="h-[10px]"
                          alt=""
                        />
                        Giảm đến <b className="text-red-500"> 100K </b> khi mua
                        trả góp qua <b> Home PayLater </b> (
                        <a href="" className="text-blue-300">
                          Xem chi tiết
                        </a>{" "}
                        )
                      </div>
                    </div>
                    <div>
                      <div className="w-full h-[20px] flex text-xs items-center">
                        <img
                          src="	https://meta.vn/themes/meta.vn/images/Checkmark.png"
                          className="h-[10px]"
                          alt=""
                        />
                        Giảm đến <b className="text-red-500"> 100K </b> khi mua
                        trả góp qua <b> Home PayLater </b> (
                        <a href="" className="text-blue-300">
                          Xem chi tiết
                        </a>{" "}
                        )
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[250px] bg-slate-100 p-2 h-fit md:hidden lg:hidden">
                  <p className="text-md p-2 font-semibold w-full text-left">
                    Thông tin hữu ích
                  </p>
                  <p className=" p-2 font-semibold w-full text-left flex text-sm items-center border-b-2">
                    <img
                      className="w-[12px] mr-3 h-[12px]"
                      src="https://meta.vn/images/tools-icon-s.png"
                      alt=""
                    />
                    Trung tâm bảo hành
                  </p>
                  <p className=" p-2 font-semibold w-full text-left flex text-sm items-center border-b-2">
                    <img
                      className="w-[12px] mr-3 h-[12px]"
                      src="https://meta.vn/images/giao-hang-toan-quoc-icon.png"
                      alt=""
                    />
                    Thông tin vận chuển
                  </p>
                  <p className=" p-2 font-semibold w-full text-left flex text-sm items-center border-b-2">
                    <img
                      className="w-[12px] mr-3 h-[12px]"
                      src="https://meta.vn/images/dich-vu-uy-tin-icon.png"
                      alt=""
                    />
                    Hướng dẫn thanh toán
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:my-4 bg-white w-full h-fit  pl-[10px]  py-[10px]">
            <div className=" h-[32px]  flex relative">
              <h1 className="font-bold text-md text-black">
                Sản phẩm tương tự
              </h1>
              <div className="absolute top-0 h-fit text-sm   text-center right-3 flex items-center">
                <div className="w-[300px] h-full relative mr-2">
                  <input
                    className="w-[300px] h-full border border-yellow-400 p-1  rounded-sm relative focus:outline-none"
                    placeholder="Nhập tên sản phẩm để so sánh"
                  ></input>
                  <i class="fa-solid fa-magnifying-glass h-full absolute right-2 inline-grid items-center "></i>
                </div>
                <Link className="flex text-white bg-yellow-400 p-1 rounded-md">
                  Xem tất cả
                </Link>
              </div>
            </div>
            <div className="overflow-hidden flex relative w-full h-fit">
              <div
                className="absolute bg-slate-600 text-white left-0 top-32 h-11 z-10 flex items-center rounded-r-full"
                onClick={() => {
                  handlePrevRelavantMecahndise();
                }}
              >
                <i class="fa-solid fa-angle-left  flex items-center p-2 m-auto"></i>
              </div>
              <div
                className={`flex relative  transform transition-transform duration-500 ease-linear`}
                style={{ transform: `translateX(-${relavantMechandise}px)` }}
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                  34, 35, 36, 37, 38, 39, 40,
                ].map((i) => {
                  return (
                    <div className="flex flex-grow shrink-0 mr-4 w-[235px] h-[375px] hover:shadow-md">
                      <MechandiseCard2></MechandiseCard2>
                    </div>
                  );
                })}
              </div>
              <div
                className="absolute bg-slate-600 text-white right-2 top-32 h-11 z-10 flex items-center rounded-l-full"
                onClick={() => {
                  handleNexRelavantMecahndise();
                }}
              >
                <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
              </div>
            </div>
          </div>
          <div className="my-4 w-full h-fit flex md:flex-col lg:flex-col relative !overflow-visible">
            <div className="xl:w-[calc(100%-332px)] lg:w-full md:w-full" ref={inforPart}>
              <div>
                <p className="w-full text-left font-semibold mb-2">
                  Thông số kĩ thuật
                </p>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td className="text-left">Đường kính</td>
                      <td className="text-left">16cm, 20cm, 24cm</td>
                    </tr>
                    <tr>
                      <td className="text-left">Loại bếp sử dụng</td>
                      <td className="text-left">
                        Bếp ga, Bếp hồng ngoại, Bếp từ
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left">Chất liệu</td>
                      <td className="text-left">Inox 201</td>
                    </tr>
                    <tr>
                      <td className="text-left">Số lượng</td>
                      <td className="text-left">3 chiếc</td>
                    </tr>
                    <tr>
                      <td className="text-left">Trọng lượng sản phẩm</td>
                      <td className="text-left">2,2kg</td>
                    </tr>
                    <tr>
                      <td className="text-left">Kích thước đóng gói</td>
                      <td className="text-left">260mm x 255mm x 215mm</td>
                    </tr>
                    <tr>
                      <td className="text-left">Xuất xứ thương hiệu</td>
                      <td className="text-left">Việt Nam</td>
                    </tr>
                    <tr>
                      <td className="text-left">Sản xuất tại</td>
                      <td className="text-left">Trung Quốc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="w-full text-left font-semibold mb-2">
                  Thông tin sản phẩm
                </p>
                <div
                  className={`bg-white p-2 overflow-hidden relative ${
                    mechandiseDetails ? "h-fit" : "h-[850px]"
                  }`}
                >
                  <p className="font-semibold text-base w-full text-left">
                    Ưu điểm nổi bật của bộ nồi inox 4 đáy Nagakawa NAG1304
                  </p>
                  <ul className="w-full">
                    <li className="bg-white px-3">
                      <p className="w-full text-left text-black">
                        <span>
                          <a href="" className="text-blue-500">
                            Nagakawa NAG1304
                          </a>
                        </span>{" "}
                        là bộ{" "}
                        <span>
                          <a href="" className="text-blue-500">
                            nồi inox
                          </a>
                        </span>{" "}
                        gồm 3 chiếc với đường kính khác nhau: 16cm, 20cm và
                        24cm.{" "}
                        <span>
                          <a href="" className="text-blue-500">
                            Nồi inox
                          </a>
                        </span>{" "}
                        16cm có thể dùng để nấu cháo, quấy bột cho bé hoặc làm
                        các món kho. Nồi 20cm có thể dùng để nấu canh, luộc rau,
                        kho thịt, cá. Nồi 24cm dùng để nấu lượng thực phẩm nhiều
                        hơn hoặc dùng để luộc gà, vịt...{" "}
                      </p>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="https://s.meta.com.vn/Data/image/2021/08/27/bo-noi-inox-4-day-nagakawa-nag1304.jpg"
                          alt=""
                          className="max-w-[80%] py-1"
                        />
                        <p>Hình ảnh bộ nồi inox 4 đáy Nagakawa NAG1304</p>
                      </div>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="https://s.meta.com.vn/Data/image/2020/07/10/nagakawa-nag1304-1.jpg"
                          alt=""
                          className="max-w-[80%] py-1"
                        />
                        <p>
                          Bộ nồi inox 4 đáy Nagakawa NAG1304 tô điểm cho không
                          gian bếp nhà bạn
                        </p>
                      </div>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="https://s.meta.com.vn/Data/image/2020/07/10/nagakawa-nag1304-2.jpg"
                          alt=""
                          className="max-w-[80%] py-1"
                        />
                        <p>
                          Kích thước đa dạng của bộ nồi inox 4 đáy Nagakawa
                          NAG1304{" "}
                        </p>
                      </div>
                    </li>
                    <li className="bg-white px-3">
                      <p className="w-full text-left text-black">
                        <span>
                          <a href="" className="text-blue-500">
                            Nagakawa NAG1304
                          </a>
                        </span>{" "}
                        là bộ{" "}
                        <span>
                          <a href="" className="text-blue-500">
                            nồi inox
                          </a>
                        </span>{" "}
                        gồm 3 chiếc với đường kính khác nhau: 16cm, 20cm và
                        24cm.{" "}
                        <span>
                          <a href="" className="text-blue-500">
                            Nồi inox
                          </a>
                        </span>{" "}
                        16cm có thể dùng để nấu cháo, quấy bột cho bé hoặc làm
                        các món kho. Nồi 20cm có thể dùng để nấu canh, luộc rau,
                        kho thịt, cá. Nồi 24cm dùng để nấu lượng thực phẩm nhiều
                        hơn hoặc dùng để luộc gà, vịt...{" "}
                      </p>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="https://s.meta.com.vn/Data/image/2021/08/27/bo-noi-inox-4-day-nagakawa-nag1304.jpg"
                          alt=""
                          className="max-w-[80%] py-1"
                        />
                        <p>Hình ảnh bộ nồi inox 4 đáy Nagakawa NAG1304</p>
                      </div>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="https://s.meta.com.vn/Data/image/2020/07/10/nagakawa-nag1304-1.jpg"
                          alt=""
                          className="max-w-[80%] py-1"
                        />
                        <p>
                          Bộ nồi inox 4 đáy Nagakawa NAG1304 tô điểm cho không
                          gian bếp nhà bạn
                        </p>
                      </div>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="https://s.meta.com.vn/Data/image/2020/07/10/nagakawa-nag1304-2.jpg"
                          alt=""
                          className="max-w-[80%] py-1"
                        />
                        <p>
                          Kích thước đa dạng của bộ nồi inox 4 đáy Nagakawa
                          NAG1304{" "}
                        </p>
                      </div>
                    </li>
                    <div
                      className={`flex  w-[calc(100%-16px)] justify-center ${
                        mechandiseDetails
                          ? "h-[47px] items-center"
                          : "bg-gradient-to-b from-transparent via-white to-white h-[150px] absolute bottom-0 items-end pb-4"
                      }`}
                    >
                      <button
                        className="bg-white border text-sm flex items-center text-blue-600 py-1 px-3 border-blue-600 rounded-sm"
                        onClick={() => {
                          setMechanicalDetails(!mechandiseDetails);
                        }}
                      >
                        Xem thêm chuyên mục
                        <i class="fa-solid fa-angle-down pt-[7px] ml-1 mr-1"></i>
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
              <div>
                <div className="my-4 bg-white w-full  pl-[10px]  py-[10px]">
                  <div className=" h-[32px]  flex relative">
                    <img
                      src="	https://meta.vn/Data/image/2021/01/13/prod-hot-a.png"
                      className="mr-2 h-full"
                      alt=""
                    />
                    <h1 className="font-bold text-md text-black">
                      Gợi ý của META
                    </h1>
                    <Link className="flex text-sm text-black bg-white absolute h-full -top-0 p-1 text-center right-0">
                      Xem tất cả
                      <i class="fa-solid fa-angle-right text-sm flex items-center h-full px-2"></i>
                    </Link>
                  </div>
                  <div className="overflow-hidden flex relative w-full">
                    <div
                      className="absolute bg-slate-600 text-white left-0 top-32 h-11 z-10 flex items-center rounded-r-full"
                      onClick={() => {
                        handlePrevSuggestSlide();
                      }}
                    >
                      <i class="fa-solid fa-angle-left  flex items-center p-2 m-auto"></i>
                    </div>
                    <div
                      className={`flex relative  transform transition-transform duration-500 ease-linear`}
                      style={{ transform: `translateX(-${suggestSlide}px)` }}
                    >
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                      ].map((i) => {
                        return (
                          <div className="flex flex-grow shrink-0 mr-4 w-[235px] h-[375px] hover:shadow-md">
                            <MechandiseCard2></MechandiseCard2>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="absolute bg-slate-600 text-white right-2 top-32 h-11 z-10 flex items-center rounded-l-full"
                      onClick={() => {
                        handleNexSuggestSlide();
                      }}
                    >
                      <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white p-1 flex flex-col">
                <p className="font-bold text-md text-black w-full text-left">
                  Đánh giá & Bình luận
                </p>
                <div className="flex justify-center border-b">
                  <div className="flex flex-col items-center mr-8">
                    <div className="flex items-center">
                      <i
                        for="star5"
                        className={`star text-2xl  ${
                          5 >= 1 ? "text-amber-400" : "text-slate-600"
                        }`}
                      >
                        &#9733;
                      </i>
                      <i
                        for="star5"
                        className={`star text-2xl  ${
                          5 >= 2 ? "text-amber-400" : "text-slate-600"
                        }`}
                      >
                        &#9733;
                      </i>
                      <i
                        for="star5"
                        className={`star text-2xl  ${
                          5 >= 3 ? "text-amber-400" : "text-slate-600"
                        }`}
                      >
                        &#9733;
                      </i>
                      <i
                        for="star5"
                        className={`star text-2xl  ${
                          5 >= 4 ? "text-amber-400" : "text-slate-600"
                        }`}
                      >
                        &#9733;
                      </i>
                      <i
                        for="star5"
                        className={`star text-2xl  ${
                          5 >= 5 ? "text-amber-400" : "text-slate-600"
                        }`}
                      >
                        &#9733;
                      </i>
                    </div>
                    <p className="text-base">Đánh giá trung bình</p>
                    <p className="text-slate-400 text-sm">(Có 29 đánh giá)</p>
                    <p className="text-3xl font-bold text-slate-500">4.6</p>
                  </div>
                  <div className="flex flex-col text-slate-600">
                    <div className="flex items-center">
                      <p className="mr-3">5 &#9733;</p>
                      <div className="w-[70px] h-[12px] bg-slate-200 rounded-md mr-3">
                        <div className="bg-yellow-400 w-4/5 rounded-md h-full"></div>
                      </div>
                      <p>28 đánh giá</p>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-3">4 &#9733;</p>
                      <div className="w-[70px] h-[12px] bg-slate-200 rounded-md mr-3">
                        <div className="bg-yellow-400 w-0 rounded-md h-full"></div>
                      </div>
                      <p>0 đánh giá</p>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-3">3 &#9733;</p>
                      <div className="w-[70px] h-[12px] bg-slate-200 rounded-md mr-3">
                        <div className="bg-yellow-400 w-0 rounded-md h-full"></div>
                      </div>
                      <p>0 đánh giá</p>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-3">2 &#9733;</p>
                      <div className="w-[70px] h-[12px] bg-slate-200 rounded-md mr-3">
                        <div className="bg-yellow-400 w-0 rounded-md h-full"></div>
                      </div>
                      <p>0 đánh giá</p>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-3">1 &#9733;</p>
                      <div className="w-[70px] h-[12px] bg-slate-200 rounded-md mr-3">
                        <div className="bg-yellow-400 w-0 rounded-md h-full"></div>
                      </div>
                      <p>0 đánh giá</p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-md text-black w-full text-left">
                  Chia sẻ nhận xét của bạn
                </p>
                <div className="relative flex items-center w-full flex-wrap">
                  <p className="mr-16">Đánh giá của bạn về sản phẩm</p>
                  <div class="star-rating flex flex-row-reverse justify-start mr-1">
                    <input
                      type="radio"
                      id="star5"
                      name="rating"
                      value="5"
                      className=" hidden"
                      checked={myRating >= 5}
                      onClick={() => {
                        setMyRating(5);
                      }}
                    />
                    <label
                      for="star5"
                      className="text-slate-300 star text-2xl mr-auto"
                    >
                      <i class="fa-solid fa-star"></i>
                      <p
                        className={`text-sm w-[70px] ${
                          myRating >= 5
                            ? "text-blue-500 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        Tuyệt vời
                      </p>
                    </label>
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      value="4"
                      className=" hidden"
                      checked={myRating === 4}
                      onClick={() => {
                        setMyRating(4);
                      }}
                    />
                    <label for="star4" className="text-slate-300 star text-2xl">
                      <i class="fa-solid fa-star"></i>
                      <p
                        className={`text-sm w-[70px] ${
                          myRating === 4
                            ? "text-blue-500 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        Hài lòng
                      </p>
                    </label>
                    <input
                      type="radio"
                      id="star3"
                      name="rating"
                      value="3"
                      className=" hidden"
                      checked={myRating === 3}
                      onClick={() => {
                        setMyRating(3);
                      }}
                    />
                    <label for="star3" className="text-slate-300 star text-2xl">
                      <i class="fa-solid fa-star"></i>
                      <p
                        className={`text-sm w-[70px] ${
                          myRating === 3
                            ? "text-blue-500 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        Bình thường
                      </p>
                    </label>
                    <input
                      type="radio"
                      id="star2"
                      name="rating"
                      value="2"
                      className=" hidden"
                      checked={myRating === 2}
                      onClick={() => {
                        setMyRating(2);
                      }}
                    />
                    <label for="star2" className="text-slate-300 star text-2xl">
                      <i class="fa-solid fa-star"></i>
                      <p
                        className={`text-sm w-[70px] ${
                          myRating === 2
                            ? "text-blue-500 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        Tạm được
                      </p>
                    </label>
                    <input
                      type="radio"
                      id="star1"
                      name="rating"
                      value="1"
                      className=" hidden"
                      checked={myRating === 1}
                      onClick={() => {
                        setMyRating(1);
                      }}
                    />
                    <label for="star1" className="text-slate-300 star text-2xl">
                      <i class="fa-solid fa-star"></i>
                      <p
                        className={`text-sm w-[70px] ${
                          myRating === 1
                            ? "text-blue-500 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        Không thích
                      </p>
                    </label>
                  </div>
                  <p
                    className={`text-green-400 text-sm ${
                      myRating === 6 ? "hidden" : ""
                    }`}
                  >
                    <i class="fa-solid fa-check"></i> Cảm ơn bạn đã đánh giá
                  </p>
                </div>
                <p className="w-full text-left text-sm">
                  Bạn đang băn khoăn cần tư vấn? Vui lòng để lại số điện thoại
                  hoặc lời nhắn, META sẽ liên hệ trả lời bạn sớm nhất.
                </p>
                <div className="w-full border flex flex-col relative my-2">
                  <div className="border">
                    <input
                      type="text"
                      placeholder="Nhập câu hỏi / bình luận / nhận xét tại đây ..."
                      className="p-1 text-left w-full focus:outline-none"
                      value={myCmt}
                      onChange={(e) => {
                        setMyCmt(e.target.value);
                      }}
                    />
                    <div className="m-2 h-[20px] cursor-pointer">
                      <input type="file" id="image" className=" hidden" />
                      <label
                        for="image"
                        className="text-slate-300 star text-2xl mr-auto flex items-center cursor-pointers"
                      >
                        <img
                          src="https://meta.vn/themes/meta.vn/images/photo-icon.png"
                          alt=""
                          className="h-full"
                        />
                        <p
                          className={`text-sm w-[70px] text-blue-500 font-medium`}
                        >
                          Nhập ảnh
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="bg-slate-50 w-full p-2">
                    <div className="flex pb-2">
                      <p
                        className="text-sm text-center mr-1 rounded-md border-black p-2 border cursor-pointer"
                        onClick={() => {
                          setMyCmt(
                            (prevMyCmt) =>
                              prevMyCmt + "Chất lượng sản phẩm tuyệt vời "
                          );
                        }}
                      >
                        Chất lượng sản phẩm tuyệt vời
                      </p>

                      <p
                        className="text-sm text-center mr-1 rounded-md border-black p-2 border cursor-pointer"
                        onClick={() => {
                          setMyCmt(
                            (prevMyCmt) => prevMyCmt + "META phục vụ rất tốt "
                          );
                        }}
                      >
                        META phục vụ rất tốt
                      </p>

                      <p
                        className="text-sm text-center mr-1 rounded-md border-black p-2 border cursor-pointer"
                        onClick={() => {
                          setMyCmt(
                            (prevMyCmt) =>
                              prevMyCmt + "Đóng gói sản phẩm đẹp và chắc chắn "
                          );
                        }}
                      >
                        Đóng gói sản phẩm đẹp và chắc chắn
                      </p>
                    </div>
                    <div className="w-full flex">
                      <input
                        type="text"
                        placeholder="Nhập tên của bạn"
                        className="w-[237px] p-1 text-sm mr-3 focus:outline-none border"
                      />
                    </div>
                  </div>
                  <button className="bg-blue-400 p-2 rounded-md absolute bottom-2 right-2 text-sm">
                    Gửi đánh giá
                  </button>
                </div>
                <div className="flex flex-col w-full" ref={CmtPart}>
                  <div className="flex  mt-2">
                    <div className="border-b-2 p-[1px] font-medium text-sm border-red-500 mr-2">
                      Bình luận hay nhất
                    </div>
                    <div className="border-b-2 p-[1px] text-sm border-slate-300">
                      Mới nhất
                    </div>
                  </div>
                  <div className="flex flex-col p-2 w-full ">
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                      32, 33, 34, 35, 36, 37, 38, 39, 40,
                    ].map((i) => {
                      if (i <= cmtQuantity) {
                        return (
                          <Cmt
                            Stt={i}
                            setReplyNumber={setReplyNumber}
                            replyNumber={replyNumber}
                          />
                        );
                      }
                    })}
                  </div>
                  <div className="w-full">
                    <p
                      className="w-full text-blue-400 cursor-pointer"
                      onClick={() => {
                        setCmtQuantity(
                          (prevCmtQuantity) => prevCmtQuantity + 5
                        );
                      }}
                    >
                      Xem thêm bình luận
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="my-4 bg-white w-full  pl-[10px]  py-[10px]">
                  <div className=" h-[32px]  flex relative">
                    <h1 className="font-bold text-md text-black">
                      Sản phẩm cùng thương hiệu
                    </h1>
                    <Link className="flex text-sm text-black bg-white absolute h-full -top-0 p-1 text-center right-0">
                      Xem tất cả
                      <i class="fa-solid fa-angle-right text-sm flex items-center h-full px-2"></i>
                    </Link>
                  </div>
                  <div className="overflow-hidden flex relative w-full">
                    <div
                      className="absolute bg-slate-600 text-white left-0 top-32 h-11 z-10 flex items-center rounded-r-full"
                      onClick={() => {
                        handlePrevSameBranchSlide();
                      }}
                    >
                      <i class="fa-solid fa-angle-left  flex items-center p-2 m-auto"></i>
                    </div>
                    <div
                      className={`flex relative  transform transition-transform duration-500 ease-linear`}
                      style={{ transform: `translateX(-${sameBranchSlide}px)` }}
                    >
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                      ].map((i) => {
                        return (
                          <div className="flex flex-grow shrink-0 mr-4 w-[235px] h-[375px] hover:shadow-md">
                            <MechandiseCard2></MechandiseCard2>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="absolute bg-slate-600 text-white right-2 top-32 h-11 z-10 flex items-center rounded-l-full"
                      onClick={() => {
                        handleNexSameBranchSlide();
                      }}
                    >
                      <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[320px] h-fit xl:ml-3 sticky top-2 bg-white p-2 lg:w-full md:w-full overflow-visible">
              <p className="font-medium w-full text-left mb-3">
                Có thể bạn quan tâm
              </p>
              <div className="w-full flex xl:flex-col">
                {[1,2,3,4].map(()=>{
                  return (
                    <div className="xl:w-full xl:h-[140px] md:w-[165px] md:h-[228px] lg:w-[165px] lg:h-[228px] lg:mr-2 mb-2 border-b-2">
                      <div className="w-full h-full bg-white hover:border rounded-md overflow-hidden">
                        <Link to="/detail">
                          <div className="w-full h-full p-[10px] flex flex-col relative">
                            <div className="w-[100px] h-[24px] bg-red-600 rotate-45 absolute -right-[28px] text-white z-30">
                              46%
                            </div>
                            <div className="h-full w-full relative flex md:flex-col lg:flex-col">
                              <div className="w-[100px] h-[100px] md:w-full lg:w-full flex justify-center">
                                <img
                                  src="https://s.meta.com.vn/img/thumb.ashx/200x200x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png"
                                  srcset="https://s.meta.com.vn/img/thumb.ashx/200x200x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png, https://s.meta.com.vn/img/thumb.ashx/300x300x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png 1.5x, https://s.meta.com.vn/img/thumb.ashx/400x400x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png 2x"
                                  className="thumb-list is-thumb w-[100px] h-[100px]"
                                  alt="✓"
                                />
                              </div>
                              <div className="ml-1 xl:w-[calc(100%-100px)]">
                                <h3 className=" text-left text-sm">
                                  Bộ 3 nồi inox 4 đáy Nagakawa NAG1304 (16cm, 20cm,
                                  24cm)
                                </h3>
                                <div className=" mt-2">
                                  <StarRating rating={4}></StarRating>
                                  <div className="flex mr-4">
                                    <p className="text-red-700 text-xs font-bold -m-[2px] mr-3">
                                      10.790.000 đ
                                    </p>
                                    <p className="text-slate-600 line-through text-xs font-bold md:hidden lg:hidden">
                                      10.790.000 đ
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mr-60 fixed h-full  -right-[calc(170px-(50vw-627px))]">
        <img
          src="https://as.realclick.vn/data/image/2022/11/19/Banner-dien-may-400x800-meta-right-a.png"
          alt="🖼️"
        />
      </div>
    </>
  );
};

export default MechandiseDetail;
