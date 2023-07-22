import { useState } from "react";


const Footer = ()=>{
    const [extend1,setExtend1]= useState(false);
    const [extend2,setExtend2]= useState(false);
    const [extend3,setExtend3]= useState(false);
    return (
        <div className="xl:w-[1240px] w-full mx-auto flex flex-col ">
            <div className="w-full bg-white flex justify-center py-4 mb-1">
                <div className="flex items-center">
                    <img src="https://meta.vn/images/icons/dich-vu-uy-tin-icon.svg" alt=""  className="w-[42px] h-[48px] mr-2 "/>
                    <p className="text-2xl ">Dịch vụ uy tín</p>
                </div>
                <div className="flex items-center mx-4">
                    <img src="https://meta.vn/images/icons/doi-tra-hang-icon.svg" alt=""  className="w-[42px] h-[48px] mr-2"/>
                    <p className="text-2xl ">Đổi trả trong 7 ngày</p>
                </div>
                <div className="flex items-center">
                    <img src="https://meta.vn/images/icons/giao-hang-toan-quoc-icon.svg" alt=""  className="w-[42px] h-[48px] mr-2"/>
                    <p className="text-2xl ">Giao hàng toàn quốc</p>
                </div>
            </div>
            <div className="w-full bg-white flex flex-col p-4 mb-1 md:hidden">
                <div className="w-full flex justify-start">
                    <div className="flex flex-col items-start mr-9">
                        <p className="text-base font-medium mb-2">Tổng đài hỗ trợ</p>
                        <div className="flex flex-col mb-2">
                            <div className="flex items-center">
                                <i class="fa-solid fa-square-phone mr-1 text-red-600 w-[12px] h-[14px]"></i>
                                <p className="text-base font-medium">Phía bắc & trung</p>
                            </div>
                            <div className="flex">
                                <p className="text-base font-medium">Mua hàng:</p>
                                <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(024) 3568 6969</p>
                            </div>
                            <div className="flex">
                                <p className="text-base font-medium">Bảo hành:</p>
                                <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(028) 38 333 222</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <i class="fa-solid fa-square-phone mr-1 text-red-600 w-[12px] h-[14px]"></i>
                                <p className="text-base font-medium">Phía nam</p>
                            </div>
                            <div className="flex">
                                <p className="text-base font-medium">Mua hàng:</p>
                                <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(024) 3568 6969</p>
                            </div>
                            <div className="flex">
                                <p className="text-base font-medium">Bảo hành:</p>
                                <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(028) 38 333 222</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mr-9">
                        <p className="text-base font-medium mb-2">Hỗ trợ khách hàng</p>
                        <p className="text-sm mb-1 cursor-pointer">Khiếu nại bồi thường</p>
                        <p className="text-sm mb-1 cursor-pointer">Hỗ trợ thanh toán</p>
                        <p className="text-sm mb-1 cursor-pointer">Hướng dẫn mua hàng</p>
                        <p className="text-sm mb-1 cursor-pointer">Hóa đơn GTGT điện tử</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách và quy định chung</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách bán hàng & chất lượng hàng hóa</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách vận chuyển - giao nhận</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách đổi - trả hàng hóa</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách bảo hành</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách bảo mật</p>
                    </div>
                    <div className="flex flex-col items-start mr-9">
                        <p className="text-base font-medium mb-2">Quản lý tài khoản</p>
                        <p className="text-sm mb-1 cursor-pointer">Thay đổi thông tin</p>
                        <p className="text-sm mb-1 cursor-pointer">Lấy lại mật khẩu</p>
                        <p className="text-sm mb-1 cursor-pointer">Lịch sử mua hàng</p>
                        <p className="text-sm mb-1 cursor-pointer">Quản lý giỏ hàng</p>
                    </div>
                    <div className="flex flex-col items-start mr-9">
                        <p className="text-base font-medium mb-2">Giới thiệu về META.vn</p>
                        <p className="text-sm mb-1 cursor-pointer">Giới thiệu về META</p>
                        <p className="text-sm mb-1 cursor-pointer">Liên hệ</p>
                        <p className="text-sm mb-1 cursor-pointer">Tuyển dụng</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-base font-medium mb-2">Kết nối với chúng tôi</p>
                        <a href="youtube.com" className="flex items-center mb-1">
                            <img src="https://meta.vn/images/icons/pinterest-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-sm ml-1">Pinterest</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mb-1">
                            <img src="https://meta.vn/images/icons/facebook-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-sm ml-1">Facebook</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mb-1">
                            <img src="https://meta.vn/images/icons/youtube-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-sm ml-1">Youtube</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mb-1">
                            <p className="text-sm ml-1 active:text-red-500 text-blue-500">Language/语言/言語/언어/Sprache</p>
                        </a>
                    </div>
                </div>
                <div className="flex p-2 border-t items-center">
                    <p className="mr-5 text-lg">Tải ứng dụng trên điện thoại</p>
                    <a href="youtube.com" className="flex items-center mr-7">
                        <img src="https://meta.vn/images/icons/apple-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                        <p className="text-xs ml-1 font-medium">App store</p>
                    </a>
                    <a href="youtube.com" className="flex items-center mr-7">
                        <img src="https://meta.vn/images/icons/playstore-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                        <p className="text-xs ml-1 font-medium">Google play</p>
                    </a>
                    <img src="https://meta.vn/images/qrcode-ios.png" alt=""  className="w-[32px] h-[32px]"/>
                    <div className="ml-auto flex">
                        <p className="mr-1 text-lg">Chấp nhận thanh toán</p>
                        <img src="https://meta.vn/images/icons/pay/visa.svg" alt="" className="w-[54px] h-[33px] mr-1"/>
                        <img src="https://meta.vn/images/icons/pay/mastercard.svg" alt="" className="w-[54px] h-[33px] mr-1"/>
                        <img src="https://meta.vn/images/icons/pay/internet-banking.svg" alt="" className="w-[54px] h-[33px] mr-1"/>
                        <img src="https://meta.vn/images/icons/pay/cash.svg" alt="" className="w-[54px] h-[33px] mr-1"/>
                        <img src="https://meta.vn/images/icons/pay/alepay.svg" alt="" className="w-[54px] h-[33px] mr-1"/>
                    </div>
                </div>
                <div className="flex p-2 border-t items-center">
                    <div className="flex flex-col items-start">
                        <p className="text-xl font-normal">CÔNG TY CỔ PHẦN MẠNG TRỰC TUYẾN META</p>
                        <p className="text-sm">Trên 16 năm Uy tín cung cấp Dịch vụ Bán hàng & Thu tiền tại nhà toàn quốc</p>
                        <p className="text-sm">Giấy chứng nhận ĐKDN số <b>0102196915</b> do Sở KH&ĐT TP. Hà Nội cấp ngày 29/03/2007.</p>
                    </div>
                    <div className="ml-auto flex items-center">
                        <img src="https://meta.vn/images/bo-cong-thuong.png" alt="" className="w-[120px] h-fit mr-1"/>
                        <img src="https://meta.vn/images/comodo_secure_seal.png" alt="" className="w-[120px] h-fit mr-1 pb-[15px]"/>
                        <img src="https://meta.vn/images/dmca_logo.png" alt="" className="w-[120px] h-fit mr-1 "/>
                        <img src="https://tinnhiemmang.vn/handle_cert?id=meta.vn" alt="" className="w-[120px] h-fit mr-1"/>
                    </div>
                </div>
                <div className="flex p-2 border-t items-center">
                    <div className="flex flex-col items-start">
                        <div className="flex">
                            <p className="text-sm font-bold ">Hà Nội: </p>
                            <div className="flex flex-col items-start">
                                <p className="text-sm">B49 Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội <b>- Điện thoại</b>: (024) 3568 6969</p>
                                <p className="text-sm">(56 Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội)</p>
                            </div>
                        </div>
                        <p className="text-sm"><b>TP.HCM:</b> Số 716-718 Điện Biên Phủ, Phường 10, Quận 10 <b>- Điện thoại</b>: (028) 3833 6666</p>
                        <p className="text-sm"><b>Email:</b> info@meta.vn</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white hidden flex-col p-4 mb-1 md:flex">
                <div className="flex justify-end flex-wrap">
                    <p className="text-base font-medium mb-2 w-full text-left">Tổng đài hỗ trợ</p>
                    <div className="flex items-center w-[40%] justify-start">
                        <i class="fa-solid fa-square-phone mr-1 text-red-600 w-[12px] h-[14px]"></i>
                        <p className="text-base font-medium">Phía nam</p>
                    </div>
                    <div className="flex items-center w-[40%] justify-start">
                        <i class="fa-solid fa-square-phone mr-1 text-red-600 w-[12px] h-[14px]"></i>
                        <p className="text-base font-medium">Phía bắc & trung</p>
                    </div>
                    <div className="flex justify-end w-full my-1">
                        <div className="flex items-center w-[20%] justify-start">
                            <p className="text-base font-medium">Mua hàng:</p>
                        </div>
                        <div className="flex items-center w-[40%] justify-start">
                            <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(024) 3568 6969</p>
                        </div>
                        <div className="flex items-center w-[40%] justify-start">
                            <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(024) 3568 6969</p>
                        </div>
                    </div>
                    <div className="flex justify-end w-full my-1">
                        <div className="flex items-center w-[20%] justify-start">
                            <p className="text-base font-medium">Mua hàng:</p>
                        </div>
                        <div className="flex items-center w-[40%] justify-start">
                            <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(028) 38 333 222</p>
                        </div>
                        <div className="flex items-center w-[40%] justify-start">
                            <p className="text-base font-medium text-blue-500 ml-1 cursor-pointer">(028) 38 333 222</p>
                        </div>
                    </div>
                    <div className="flex w-full my-1">
                        <div className="flex  w-[20%] justify-start items-start">
                            <p className="text-base font-medium">Thời gian:</p>
                        </div>
                        <p className="text-left">8h - 19h (Thứ 2 đến Thứ 6)<br/>8h - 17h30 (Thứ 7 và Chủ nhật)</p>
                    </div>
                </div>
                <div className="flex flex-col p-2 border-t">
                    <p className="text-base font-medium mb-2 w-full text-left">Kết nối với chúng tôi</p>
                    <div className="flex items-center justify-center w-full mb-3">
                        <a href="youtube.com" className="flex items-center mr-7 flex-col">
                            <img src="https://meta.vn/images/icons/apple-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-xs ml-1 font-medium">App store</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mr-7 flex-col">
                            <img src="https://meta.vn/images/icons/playstore-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-xs ml-1 font-medium">Google play</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mr-7 flex-col">
                            <img src="https://meta.vn/images/icons/pinterest-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-sm ml-1">Pinterest</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mr-7 flex-col">
                            <img src="https://meta.vn/images/icons/facebook-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-sm ml-1">Facebook</p>
                        </a>
                        <a href="youtube.com" className="flex items-center mr-7 flex-col">
                            <img src="https://meta.vn/images/icons/youtube-icon.svg" alt=""  className="w-[32px] h-[32px]"/>
                            <p className="text-sm ml-1">Youtube</p>
                        </a>
                    </div>
                    <a href="youtube.com" className="flex items-center mb-1">
                        <p className="text-sm ml-1 active:text-red-500 text-blue-500">Language/语言/言語/언어/Sprache</p>
                    </a>
                </div>
                <div className="flex flex-col p-2 border-t">
                    <p className="text-base font-medium mb-2 w-full text-left">Đã chứng nhận</p>
                    <div className="flex items-center justify-center w-full">
                        <img src="https://meta.vn/images/bo-cong-thuong.png" alt="" className="w-[80px] h-fit mr-1"/>
                        <img src="https://meta.vn/images/comodo_secure_seal.png" alt="" className="w-[80px] h-fit mr-1 pb-[10px]"/>
                        <img src="https://meta.vn/images/dmca_logo.png" alt="" className="w-[80px] h-fit mr-1 "/>
                        <img src="https://tinnhiemmang.vn/handle_cert?id=meta.vn" alt="" className="w-[80px] h-fit mr-1"/>
                    </div>
                </div>
                <div className="flex flex-col p-2 border-t items-start">
                    <p className="text-xl font-normal">CÔNG TY CỔ PHẦN MẠNG TRỰC TUYẾN META</p>
                    <p className="text-sm">Trên 16 năm Uy tín cung cấp Dịch vụ Bán hàng & Thu tiền tại nhà toàn quốc</p>
                    <p className="text-sm">Giấy chứng nhận ĐKDN số <b>0102196915</b> do Sở KH&ĐT TP. Hà Nội cấp ngày 29/03/2007.</p>
                    <div className="flex mt-2">
                        <p className="text-sm font-bold ">Hà Nội: </p>
                        <div className="flex flex-col items-start">
                            <p className="text-sm">B49 Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội <b>- Điện thoại</b>: (024) 3568 6969</p>
                            <p className="text-sm">(56 Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội)</p>
                        </div>
                    </div>
                    <p className="text-sm"><b>TP.HCM:</b> Số 716-718 Điện Biên Phủ, Phường 10, Quận 10 <b>- Điện thoại</b>: (028) 3833 6666</p>
                    <p className="text-sm"><b>Email:</b> info@meta.vn</p>
                </div>
                <div className="flex flex-col p-2 border-b items-start">
                    <div className="flex w-full h-full">
                        <p className="text-base font-medium mb-2">Hỗ trợ khách hàng </p>
                        <i class="fa-solid fa-angle-down ml-auto w-[24px] h-full flex items-center justify-center pt-2" onClick={()=>{setExtend1(!extend1)}}
                        style={{ transform: `rotate(${extend1 ? 180 : 0}deg)` }}
                        ></i>
                    </div>
                    <div className={`flex-col items-start ml-3 ${extend1 ?'flex' :'hidden'}`}>
                        <p className="text-sm mb-1 cursor-pointer">Khiếu nại bồi thường</p>
                        <p className="text-sm mb-1 cursor-pointer">Hỗ trợ thanh toán</p>
                        <p className="text-sm mb-1 cursor-pointer">Hướng dẫn mua hàng</p>
                        <p className="text-sm mb-1 cursor-pointer">Hóa đơn GTGT điện tử</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách và quy định chung</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách bán hàng & chất lượng hàng hóa</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách vận chuyển - giao nhận</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách đổi - trả hàng hóa</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách bảo hành</p>
                        <p className="text-sm mb-1 cursor-pointer">Chính sách bảo mật</p>
                    </div>
                </div>
                <div className="flex flex-col p-2 border-b items-start">
                    <div className="flex w-full h-full">
                        <p className="text-base font-medium mb-2">Quản lý tài khoản</p>
                        <i class="fa-solid fa-angle-down ml-auto w-[24px] h-full flex items-center justify-center pt-2" onClick={()=>{setExtend2(!extend2)}}
                        style={{ transform: `rotate(${extend2 ? 180 : 0}deg)` }}
                        ></i>
                    </div>
                    <div className={`flex-col items-start ml-3 ${extend2 ?'flex' :'hidden'}`}>
                        <p className="text-sm mb-1 cursor-pointer">Thay đổi thông tin</p>
                        <p className="text-sm mb-1 cursor-pointer">Lấy lại mật khẩu</p>
                        <p className="text-sm mb-1 cursor-pointer">Lịch sử mua hàng</p>
                        <p className="text-sm mb-1 cursor-pointer">Quản lý giỏ hàng</p>
                    </div>
                </div>
                <div className="flex flex-col p-2 border-b items-start">
                    <div className="flex w-full h-full">
                        <p className="text-base font-medium mb-2">Về META.vn</p>
                        <i class="fa-solid fa-angle-down ml-auto w-[24px] h-full flex items-center justify-center pt-2" onClick={()=>{setExtend3(!extend3)}}
                        style={{ transform: `rotate(${extend3 ? 180 : 0}deg)` }}
                        ></i>
                    </div>
                    <div className={`flex-col items-start ml-3 ${extend3 ?'flex' :'hidden'}`}>
                        <p className="text-sm mb-1 cursor-pointer">Giới thiệu về META</p>
                        <p className="text-sm mb-1 cursor-pointer">Liên hệ</p>
                        <p className="text-sm mb-1 cursor-pointer">Tuyển dụng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;