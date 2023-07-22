import { useState } from "react"
import StarRating from "./StarRating"

const Cmt=({Stt ,replyNumber,setReplyNumber})=>{
    return(
        <div className="w-full my-1">
            <div className="flex">
                <p className="w-[19px] h-[21px] bg-slate-400 rounded-sm mr-1 flex items-center justify-center text-white">T</p>
                <p className="font-medium text-blue-400 text-sm mr-2">Cô Thúy</p>
                <div className="flex">
                    <i class="fa-solid fa-star text-xs text-yellow-500 mr-1"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500 mr-1"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500 mr-1"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500 mr-1"></i>
                    <i class="fa-solid fa-star text-xs text-yellow-500 mr-1"></i>
                </div>
            </div>
            <div className="flex flex-col mx-4 items-start">
                <p className="text-sm my-1">Đóng gói sản phẩm đẹp và chắc chắn, giao nhanh</p>
                <div className="flex">
                    <p className="text-blue-400 text-sm mr-3 cursor-pointer active:text-red-500" onClick={()=>{setReplyNumber(`${Stt}`)}}>Trả lời</p>
                    <i class="fa-solid fa-thumbs-up text-sm mr-3 cursor-pointer "></i>
                    {true ?(<p className="text-slate-400 text-sm mr-3 cursor-pointer">1</p>) :(<></>)}
                    <p className="text-blue-400 text-sm mr-3 cursor-pointer">Thích</p>
                    <p className="text-slate-300 text-sm mr-3 cursor-pointer">1 tháng</p>
                </div>
                <div className={`border w-full ${replyNumber==`${Stt}` ?'' :'hidden'}`}>
                        <input type="text" placeholder="Nhập nội dung phản hồi ..." className="p-1 text-left w-full focus:outline-none"/>
                        <div className="m-2 cursor-pointer">
                            <input type="file" id="image" className="hidden" />
                            <label for="image" className="text-slate-300 w-full h-[20px] star text-2xl my-2 mr-auto flex items-center cursor-pointers">
                                <img src="https://meta.vn/themes/meta.vn/images/photo-icon.png" alt=""  className="h-full"/>
                                <p className={`text-sm w-[70px] text-blue-500 font-medium`}>Nhập ảnh</p>
                            </label>
                            <div className="w-full flex">
                                <input type="text" placeholder="Họ và tên" className="w-[150px] p-2 h-[24px] text-sm focus:outline-none border"/>
                                <button className="bg-blue-500 text-sm text-white h-[24px] w-[34px]">Gửi</button>
                            </div>
                        </div>
                </div>
                <div className="bg-slate-100 w-full p-2 mt-2">
                    <p className="font-medium text-sm text-red-500 w-full text-left">META</p>
                    <p className="text-sm my-1 w-full text-left">Chào cô Thúy,
                        <br />Cảm ơn Cô đã mua hàng tại META, mong Cô ủng hộ thêm nhiều sản phẩm khác nữa. </p>
                    <div className="flex">
                        <p className="text-blue-400 text-sm mr-3 cursor-pointer active:text-red-500" onClick={()=>{setReplyNumber(`${Stt}.1`)}}>Trả lời</p>
                        <i class="fa-solid fa-thumbs-up text-sm mr-3 cursor-pointer "></i>
                        {true ?(<p className="text-slate-400 text-sm mr-3 cursor-pointer">1</p>) :(<></>)}
                        <p className="text-blue-400 text-sm mr-3 cursor-pointer">Thích</p>
                        <p className="text-slate-300 text-sm mr-3 cursor-pointer">1 tháng</p>
                    </div>
                    <div className={`border w-full bg-white ${replyNumber==`${Stt}.1`?'' :'hidden'}`}>
                        <input type="text" placeholder="Nhập nội dung phản hồi ..." className="p-1 text-left w-full focus:outline-none"/>
                        <div className="m-2 cursor-pointer">
                            <input type="file" id="image" className="hidden" />
                            <label for="image" className="text-slate-300 w-full h-[20px] star text-2xl my-2 mr-auto flex items-center cursor-pointers">
                                <img src="https://meta.vn/themes/meta.vn/images/photo-icon.png" alt=""  className="h-full"/>
                                <p className={`text-sm w-[70px] text-blue-500 font-medium`}>Nhập ảnh</p>
                            </label>
                            <div className="w-full flex">
                                <input type="text" placeholder="Họ và tên" className="w-[150px] p-2 h-[24px] text-sm focus:outline-none border"/>
                                <button className="bg-blue-500 text-sm text-white h-[24px] w-[34px]">Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cmt