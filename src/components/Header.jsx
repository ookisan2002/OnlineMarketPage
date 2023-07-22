import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Header = ({ isScrolledOut }) => {
  return (
    <>
      <img
        alt="Hè sắc màu - Giảm đậm sâu"
        className="w-full h-20 z-50"
        src="https://s.meta.com.vn/img/thumb.ashx/Data/2023/Thang05/chao-he/Banner-chao-he-a-1236x60.png"
      ></img>
      <div className="bg-red-600 w-full h-[50px] z-20 sticky top-0 pt-2 pb-2 mt-[12px] mb-[12px] justify-center lg:flex xl:flex md:hidden">
        <div className="flex justify-center  h-[34px] relative">
          <div className={`h-full w-[245px] flex flex-row items-center  ${isScrolledOut ?'overall1' :''}`}>
            <i class={`fa-solid fa-bars text-2xl text-white items-center ml-3 mr-3 absolute ${isScrolledOut ?'flex' :'hidden'}`}></i>
            <img
              src="https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo-1024x986.png"
              alt=""
              className="w-28 h-full m-auto "
            />
            <ul className=" h-[569px] flex w-[243px] flex-col p-0 absolute top-[42px] -left-[6px] bg-white detail1 invisible">
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
          </div>
          <div className=" w-[540px] h-full flex flex-row items-center relative">
            <input
              type="text"
              className="w-10/12 h-8 p-2"
              placeholder="&#x1F50D; Bạn đang tìm kiếm sản phẩm gì?"
            />
            <a className="absolute right-[20%]" href="/">
              <i className="fa-solid fa-microphone text-black text-base "></i>
            </a>
            <button className="bg-slate-500 w-2/12 h-8 p-1">Tìm kiếm</button>
          </div>
          <div className="flex h-full overall relative">
            <i className="fa-solid fa-user h-full text-white items-center flex relative text-2xl xl:ml-2 xl:mr-2 lg:mx-4 "></i>
            <a
              href="/"
              className="flex justify-center text-left flex-col text-white text-xs"
            >
              <h3 className="xl:flex lg:hidden  ">Đăng nhập</h3>
              <h4 className="xl:flex lg:hidden">Chưa xem sản phẩm nào</h4>
            </a>
            <div className="flex flex-col bg-white absolute top-12 detail lg:-right-10 invisible">
              <div className="relative">
                <i class=" fa-solid fa-angle-up absolute text-white w-[16px] h-[16px] -top-[10px]"></i>
                <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                  Tra cứu đơn hàng
                </p>
                <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                  Lịch sử mua hàng
                </p>
                <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                  Lấy mã khuyến mãi
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full ">
            <i className="fa-solid fa-cart-shopping h-full text-white items-center flex  text-2xl xl:ml-2 xl:mr-2 lg:mx-4"></i>
            <a
              href="/"
              className=" justify-center text-left flex-col text-white text-xs xl:flex lg:hidden"
            >
              Giỏ hàng
            </a>
          </div>
          <div className="flex h-full overall relative">
            <i className="fa-regular fa-circle-question h-full text-white items-center flex  text-2xl xl:ml-2 xl:mr-2 lg:mx-4"></i>
            <a
              href="/"
              className=" justify-center text-left flex-col text-white text-xs xl:flex lg:hidden"
            >
              Hướng dẫn
            </a>
            <div className="flex flex-col bg-white absolute top-10 detail invisible xl:right-0 lg:-right-10">
              <div className="relative">
                <i class=" fa-solid fa-angle-up absolute text-white w-[16px] h-[16px] -top-[10px]"></i>
                <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                  Tra cứu đơn hàng
                </p>
                <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                  Lịch sử mua hàng
                </p>
                <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                  Lấy mã khuyến mãi
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full overall relative">
            <i className="fa-solid fa-phone h-full text-white items-center flex  text-2xl xl:ml-2 xl:mr-2 lg:mx-4"></i>
            <a
              href="/"
              className=" text-lef justify-center flex-col text-white text-xs xl:flex lg:hidden"
            >
              Hotline
            </a>
            <div className="flex flex-col bg-white absolute top-10 detail invisible -right-1">
              <div className="relative flex ">
                <i class=" fa-solid fa-angle-up absolute text-white w-[16px] h-[16px] -top-[10px] right-5"></i>
                <div className="flex flex-col  text-left">
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Phía bắc & trung:
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Phía nam:
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Thời gian
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Email
                  </p>
                </div>
                <div className="flex flex-col font-bold  text-left text-red-500">
                  <p className=" h-[39px] p-2">(024) 3568 6969</p>
                  <p className=" h-[39px] p-2">(024) 3568 6969</p>
                  <p className=" h-[39px] p-2">8h00 - 19h00</p>
                  <p className=" h-[39px] p-2">dainam826@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 w-full h-[80px] z-20 sticky top-0 p-2 justify-center lg:hidden xl:hidden md:flex md:flex-col">
        <div className="w-full h-1/2 relative">
          <i class="fa-solid fa-bars text-2xl text-white items-center flex ml-3 mr-3 absolute left-0"></i>
          <div className="h-full w-full flex flex-col">
            <img
              src="https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo-1024x986.png"
              alt=""
              className="w-28 h-full m-auto "
            />
          </div>
          <div className="absolute right-0 flex top-0">
            <div className="mx-2 flex h-full overall">
              <i className="fa-solid fa-user h-full text-white items-center flex relative text-2xl xl:ml-2 xl:mr-2 lg:mx-4 "></i>

              <div className="flex flex-col bg-white absolute top-12 detail invisible">
                <div className="relative">
                  <i class=" fa-solid fa-angle-up absolute text-white w-[16px] h-[16px] -top-[10px]"></i>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Tra cứu đơn hàng
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Lịch sử mua hàng
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Lấy mã khuyến mãi
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-2 flex h-full ">
              <i className="fa-solid fa-cart-shopping h-full text-white items-center flex  text-2xl xl:ml-2 xl:mr-2 lg:mx-4"></i>
            </div>
            <div className="mx-2 flex h-full overall relative">
              <i className="fa-regular fa-circle-question h-full text-white items-center flex  text-2xl xl:ml-2 xl:mr-2 lg:mx-4"></i>
              <div className="flex flex-col bg-white absolute top-10 detail invisible right-0">
                <div className="relative">
                  <i class=" fa-solid fa-angle-up absolute text-white w-[16px] h-[16px] -top-[10px]"></i>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Tra cứu đơn hàng
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Lịch sử mua hàng
                  </p>
                  <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                    Lấy mã khuyến mãi
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-2 flex h-full overall relative">
              <i className="fa-solid fa-phone h-full text-white items-center flex  text-2xl xl:ml-2 xl:mr-2 lg:mx-4"></i>
              <div className="flex flex-col bg-white absolute top-10 detail invisible -right-1">
                <div className="relative flex ">
                  <i class=" fa-solid fa-angle-up absolute text-white w-[16px] h-[16px] -top-[10px] right-5"></i>
                  <div className="flex flex-col  text-left">
                    <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                      Phía bắc & trung:
                    </p>
                    <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                      Phía nam:
                    </p>
                    <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                      Thời gian
                    </p>
                    <p className="w-[163px] h-[39px] p-2 hover:text-red-500">
                      Email
                    </p>
                  </div>
                  <div className="flex flex-col font-bold  text-left text-red-500">
                    <p className=" h-[39px] p-2">(024) 3568 6969</p>
                    <p className=" h-[39px] p-2">(024) 3568 6969</p>
                    <p className=" h-[39px] p-2">8h00 - 19h00</p>
                    <p className=" h-[39px] p-2">dainam826@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 relative p-2 flex flex-col">
          <div className=" w-full h-full flex flex-row items-center relative">
            <input
              type="text"
              className="w-10/12 h-8 p-2"
              placeholder="&#x1F50D; Bạn đang tìm kiếm sản phẩm gì?"
            />
            <a className="absolute right-[20%]" href="/">
              <i className="fa-solid fa-microphone text-black text-base "></i>
            </a>
            <button className="bg-slate-500 w-2/12 h-8 p-1">Tìm kiếm</button>
          </div>
        </div>
      </div>
      {/* <ul className=" h-[569px] flex w-[243px] flex-col p-0 absolute top-[42px] -left-[6px] bg-white detail1 invisible">
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
      </ul> */}
    </>
  );
};
export default Header;
