import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import MechandiseCard from "../components/Home/MechandiseCard";
import CategoryCard from "../components/Home/CategoryCard";
import Header from "../components/Header";

const Homes = () => {
  const gift = ["gift1", "gift2", "gift3", "gift4", "gift5"];
  const [giftNumber, setGiftNumber] = useState(0);
  const [isShown, setIsShown] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);
  const [categoryQuantity, setCategoryQuantity] = useState(20);
  const [suggestQuantity, setSuggestQuantity] = useState(18);
  const [flashSalePage, setFlashSalePage] = useState(0);
  const widthDiv = useRef();
  const menu = useRef(null);
  const [isScrolledOut, setIsScrolledOut] = useState(false);

  const handleScroll = () => {
    if (menu.current) {
      const { top, bottom } = menu.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Kiểm tra nếu phần tử cuộn ra khỏi view port (vùng hiển thị của cửa sổ trình duyệt)
      if (bottom < 0 || top > windowHeight) {
        setIsScrolledOut(true);
      } else {
        setIsScrolledOut(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setGiftNumber((prevGiftNumber) => (prevGiftNumber + 1) % 5);
      setSlideNumber((prevSlideNumber) => {
        if (
          (prevSlideNumber + widthDiv.current.offsetWidth) %
            widthDiv.current.offsetWidth !==
          0
        ) {
          return 0;
        } else {
          return (
            (prevSlideNumber + widthDiv.current.offsetWidth) %
            (widthDiv.current.offsetWidth * 3)
          );
        }
      });
      console.log(widthDiv.current.offsetWidth);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });
  const handleExtend = () => {
    setCategoryQuantity((prevCategoryQuantity) => prevCategoryQuantity + 20);
  };
  const handleExtendSuggest = () => {
    setSuggestQuantity((prevSuggestQuantity) => prevSuggestQuantity + 18);
  };
  const handlePrevMechanSlide = () => {
    if (flashSalePage > 0) {
      setFlashSalePage((prevFlashSalePage) => prevFlashSalePage - 500);
    }
  };
  const handleNexvMechanSlide = () => {
    if (flashSalePage < 40 * 206) {
      setFlashSalePage((prevFlashSalePage) => prevFlashSalePage + 500);
    }
  };

  return (
    <>
      <Header 
        isScrolledOut={isScrolledOut}
      />
      <div className="bg-red-600 w-full h-[75px] z-10 md:hidden absolute top-[79px]"></div>
      <div className=" relative  w-full flex justify-center overflow-hidden">
        <div className="-ml-60 h-full fixed top-14  -left-[calc(170px-(50vw-620px))]">
          <img
            src="https://as.realclick.vn/data/image/2022/11/19/Banner-dien-may-400x800-meta-left-a.png"
            className=""
            alt="🖼️"
          ></img>
        </div>
        <div className="content-center h-full xl:w-[1240px] lg:w-[calc(100vw-128px)] w-full xl:m-0 mx-16">
          <div className="bg-white my-1 w-full">
            <div className="flex p-1 border content-center w-full h-9">
              <div className="flex w-[308px] md:hidden">
                <i className="fa-solid fa-bars text-2xl text-red-500 items-center flex ml-3 mr-3"></i>
                <h4 className="font-medium text-lg">Danh mục sản phẩm</h4>
              </div>
              <div className="relative flex w-full">
                <h4 className="font-bold">Khuyến mại</h4>
                <i className="fa-solid fa-gift text-red-500 flex items-center  ml-2 mr-2"></i>
                <h4 className="fade-in">{gift[giftNumber]}</h4>
                <img
                  src="https://meta.vn/images/gia-re-moi-ngay.png"
                  alt=""
                  className="absolute right-0 hidden xl:block"
                />
              </div>
            </div>
            <div className="flex w-full">
              <ul className=" h-[569px] flex w-[243px] flex-col p-0 relative md:hidden " ref={menu}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => {
                  return (
                    <li className="overall h-[6.667%] p-1 flex w-full hover:bg-red-600 hover:text-white">
                      <img
                        class="h-[22px] mr-3 ml-3"
                        src="https://meta.vn/icons/cats/1013.png"
                        data-src="/icons/cats/1013.png"
                        alt="Dien may"
                      />
                      <p>Điện máy</p>
                      <i class="fa-solid fa-angle-right text-white ml-auto h-full flex items-center"></i>
                      <div className="bg-white absolute xl:w-[994px] lg:w-[750px] h-[569px] top-0 z-30  lg:-right-[750px] xl:-right-[994px] fle flex flex-col flex-wrap detail invisible p-3 content-start">
                        {[
                          [1, 2, 3, 4, 5, 6, 7].map(() => {
                            return (
                              <>
                                <div className="flex w-1/5 text-left h-[27px] ">
                                  <img
                                    src="https://meta.vn/Data/image/2021/01/13/hot-category.png"
                                    className="mr-2 h-[18px] "
                                    alt=""
                                  />
                                  <p className="text-xs text-red-600 ">
                                    Điều hòa
                                  </p>
                                </div>
                                <div className="text-xs h-[27px] text-black w-1/5 text-left hover:text-red-600">
                                  Điều hòa 1 chiều
                                </div>
                                <div className="text-xs h-[27px] text-black w-1/5 text-left hover:text-red-600">
                                  Điều hòa 1 chiều
                                </div>
                                <div className="text-xs h-[27px] text-black w-1/5 text-left hover:text-red-600">
                                  Điều hòa 1 chiều
                                </div>
                                <div className="text-xs h-[27px] text-black w-1/5 text-left hover:text-red-600">
                                  Điều hòa 1 chiều
                                </div>
                                <div className="text-xs h-[27px] text-black w-1/5 text-left hover:text-red-600">
                                  Điều hòa 1 chiều
                                </div>
                              </>
                            );
                          }),
                        ]}
                      </div>
                    </li>
                  );
                })}

                <li className="h-[6.667%] w-[243px] hover:text-red-600">
                  <Link to="/category">xem tất cả danh mục</Link>
                </li>
              </ul>
              <div className="flex flex-col w-[calc(100%-240px)] md:w-full">
                <div className="flex">
                  <div
                    className=" bg-red-500 m-[5px] w-[720px] md:w-full h-[445px] overflow-hidden flex relative"
                    ref={widthDiv}
                  >
                    <div
                      className={`flex relative -translate-x-[${slideNumber}px] transition-transform duration-500 ease-linear`}
                      style={{ transform: `translateX(-${slideNumber}px)` }}
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
                  </div>
                  <div className=" hidden xl:flex xl:flex-col">
                    <div className="bg-black m-1 w-[260px] h-[220px]">
                      <img
                        src="https://s.meta.com.vn/Data/2022/Thang01/may-giat-say-300x250.jpg"
                        alt=""
                      />
                    </div>
                    <div className="bg-blue-400 m-1 w-[260px] h-[220px]">
                      <img
                        src="	https://s.meta.com.vn/Data/2022/Thang08/Banner-may-loc-khong-khi-300x250.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex xl:w-full lg:w-[740px] md:hidden">
                  <div className="bg-orange-500 m-1 w-1/3 h-[98px]">
                    <img
                      src="https://s.meta.com.vn/Data/2022/Thang04/Banner-may-khoan-330x99.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-lime-400 m-1 w-1/3 h-[98px]">
                    <img
                      src="https://s.meta.com.vn/Data/2022/Thang07/Banner-may-rua-xe-gia-dinh-330x99.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-green-700 m-1 w-1/3 h-[98px]">
                    <img
                      src="https://s.meta.com.vn/Data/2022/Thang02/caphe-a.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full py-[10px] flex flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
              return (
                <div className="flex flex-col items-center h-[100px] justify-center w-[12.5%] md:w-1/4">
                  <img
                    src="https://s.meta.com.vn/Data/2022/Thang11/giam-gia.svg"
                    alt=""
                    className="w-[60px] h-[60px]"
                  />
                  <p className="text-black text-xs mt-2">
                    Mã freeship, Giảm giá
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white w-full my-1 h-fit">
            <div className=" h-[46px] p-[10px] flex">
              <img
                src="https://meta.vn/Data/image/2021/01/13/hot-category.png"
                className="mr-2 h-full"
                alt=""
              />
              <h1 className="font-bold text-lg">Danh mục nổi bật</h1>
            </div>
            <div className="bg-white h-fit p-1">
              <ul className="flex flex-wrap">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                  34, 35, 36, 37, 38, 39, 40,
                ].map((i) => {
                  if (i <= categoryQuantity) {
                    return (
                      <li className="flex flex-col w-[10%] md:w-1/6 h-[152px] border px-[5px] py-[20px] relative">
                        <p className="absolute bg-red-600 text-white text-xs pl-1 pr-1 rounded-sm top-1 right-1">
                          43%
                        </p>
                        <img
                          src="https://meta.vn/icons/cateico/c1017-210x210.jpg"
                          className="h-[70px] w-[70px] ml-auto mr-auto"
                          alt=""
                        />
                        <p>Máy giặt</p>
                      </li>
                    );
                  }
                })}
              </ul>
              <div className="flex items-center justify-center h-[47px]   ">
                <button
                  className="bg-white border text-sm flex items-center text-blue-600 py-1 px-3 border-blue-600 rounded-sm"
                  onClick={() => {
                    handleExtend();
                  }}
                >
                  Xem thêm chuyên mục
                  <i class="fa-solid fa-angle-down pt-[7px] ml-1 mr-1"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="my-4 bg-blue-600 w-full h-[412px]  pl-[10px]  py-[10px]">
            <div className=" h-[32px]  flex relative">
              <img
                src="	https://meta.vn/Data/image/2021/06/11/fs-vang.png"
                className="mr-2 h-full"
                alt=""
              />
              <h1 className="font-bold text-lg text-white">FLASH SALE</h1>
              <Link className="flex text-white bg-blue-400 absolute -top-[9px] h-[38px] p-1 rounded-bl-md text-center right-0">
                Xem tất cả
                <i class="fa-solid fa-angle-right  flex items-center p-2"></i>
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
                style={{ transform: `translateX(-${flashSalePage}px)` }}
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                  34, 35, 36, 37, 38, 39, 40,
                ].map((i) => {
                  return (
                    <div className="flex flex-grow shrink-0 mr-4 w-[206px] h-[353px]">
                      <MechandiseCard></MechandiseCard>
                    </div>
                  );
                })}
              </div>
              <div
                className="absolute bg-slate-600 text-white right-2 top-32 h-11 z-10 flex items-center rounded-l-full"
                onClick={() => {
                  handleNexvMechanSlide();
                }}
              >
                <i class="fa-solid fa-angle-right  flex items-center p-2 "></i>
              </div>
            </div>
          </div>
          <div className="bg-white w-full">
            <div className=" w-full flex flex-col h-full">
              <div className=" w-full p-3 flex ">
                <img
                  src="https://meta.vn/Data/image/2021/01/13/prod-hot-a.png"
                  alt=""
                  className="w-[28px] h-[28px] mr-2"
                />
                <h1 class="font-bold text-lg text-black">Gợi ý cho bạn</h1>
              </div>
              <div className="w-full bg-white h-full p-3">
                <ul className="flex flex-wrap justify-center">
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
                    33, 34, 35, 36,
                  ].map((i) => {
                    if (i <= suggestQuantity) {
                      return (
                        <li className="flex flex-col min-w-[189px] w-[16%] h-[305px] p-[10px] relative border rounded-md hover:border-gray-300 hover:shadow-lg m-1">
                          <p className="absolute bg-orange-400 rounded-full text-white pl-2 pr-2 text-lg top-3 right-3">
                            43%
                          </p>
                          <img
                            src="https://s.meta.com.vn/img/thumb.ashx/140x140x95/Data/image/2020/06/22/may-bom-lop-o-to-dien-tu-cam-ung-good-year-gy-3302-300.jpg"
                            className=" ml-auto mr-auto w-[160px] h-[160px]"
                            alt=""
                          />
                          <p className="line-clamp-3 text-left">
                            Máy bơm lốp ô tô điện tử cảm ứng thông minh, tự
                            ngắt, vòi bơm đa năng Good Year GY-3302
                          </p>
                          <p className="text-red-700 w-full text-center font-bold -m-[2px]">
                            10.790.000 đ
                          </p>
                          <div className="flex content-center relative mt-2">
                            <p className="absolute right-[54px] text-white text-xs">
                              Đã bán 2146
                            </p>
                            <div className="w-[169px] h-[16px] bg-slate-300 rounded-lg">
                              <div className=" w-3/5 bg-orange-600 h-full rounded-lg"></div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="flex items-center justify-center h-[47px]   ">
                  <button
                    className="bg-white border text-sm flex items-center text-blue-600 py-1 px-3 border-blue-600 rounded-sm"
                    onClick={() => {
                      handleExtendSuggest();
                    }}
                  >
                    Xem thêm gợi ý
                    <i class="fa-solid fa-angle-down pt-[7px] ml-1 mr-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <CategoryCard />
          </div>
          <div className="bg-white w-full flex flex-col mb-1">
            <h1 className="font-bold text-lg text-black p-1 w-full text-left border-l-8 border-yellow-400">
              ĐIỆN MÁY - ĐIỆN LẠNH
            </h1>
            <div className="w-full flex flex-wrap p-1">
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
              <div className="w-[14%] h-[60px] flex items-center justify-center">
                <img src="	https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/02/24/logo-samsung-to.png" alt="" className="w-[80px] h-[36px]"/>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white mb-1">
            <div className=" h-[32px]  flex relative">
              <h1 className="font-bold text-lg text-black p-1 border-l-8 border-blue-400">
                HỖ TRỢ & DỊCH VỤ
              </h1>
              <Link className="flex text-black  absolute -top-[0px] h-[38px] p-1 rounded-bl-md text-center right-0">
                Xem tất cả
                <i class="fa-solid fa-angle-right text-black flex items-center p-2"></i>
              </Link>
            </div>
            <div className="w-full flex border-b">
              <div className="flex flex-col items-center justify-center w-1/4 p-1">
                <img src="	https://meta.vn/images/chinh-sach-doi-tra.jpg" alt="" />
                <p className="text-sm">Chính sách đổi trả</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/4 p-1">
                <img src="	https://meta.vn/images/chinh-sach-doi-tra.jpg" alt="" />
                <p className="text-sm">Chính sách đổi trả</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/4 p-1">
                <img src="	https://meta.vn/images/chinh-sach-doi-tra.jpg" alt="" />
                <p className="text-sm">Chính sách đổi trả</p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/4 p-1">
                <img src="	https://meta.vn/images/chinh-sach-doi-tra.jpg" alt="" />
                <p className="text-sm">Chính sách đổi trả</p>
              </div>
            </div>
            <div className="w-full flex flex-wrap p-2">
              <div className="flex md:w-1/2 w-1/4 h-[65px] items-start justify-start">
                <img src="https://img.meta.com.vn/data/image/2023/07/21/sua-may-loc-khong-khi-lg-al-size-80x50-znd.jpg" alt=""  className="w-[80px] h-[50px] mr-1"/>
                <p className="text-sm">Cách sửa máy lọc không khí LG với các lỗi thường gặp</p>
              </div>
              <div className="flex md:w-1/2 w-1/4 h-[65px] items-start justify-start">
                <img src="https://img.meta.com.vn/data/image/2023/07/21/sua-may-loc-khong-khi-lg-al-size-80x50-znd.jpg" alt=""  className="w-[80px] h-[50px] mr-1"/>
                <p className="text-sm">Cách sửa máy lọc không khí LG với các lỗi thường gặp</p>
              </div>
              <div className="flex md:w-1/2 w-1/4 h-[65px] items-start justify-start">
                <img src="https://img.meta.com.vn/data/image/2023/07/21/sua-may-loc-khong-khi-lg-al-size-80x50-znd.jpg" alt=""  className="w-[80px] h-[50px] mr-1"/>
                <p className="text-sm">Cách sửa máy lọc không khí LG với các lỗi thường gặp</p>
              </div>
              <div className="flex md:w-1/2 w-1/4 h-[65px] items-start justify-start">
                <img src="https://img.meta.com.vn/data/image/2023/07/21/sua-may-loc-khong-khi-lg-al-size-80x50-znd.jpg" alt=""  className="w-[80px] h-[50px] mr-1"/>
                <p className="text-sm">Cách sửa máy lọc không khí LG với các lỗi thường gặp</p>
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

export default Homes;
