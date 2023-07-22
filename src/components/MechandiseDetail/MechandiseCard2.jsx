import { Link } from "react-router-dom";
import StarRating from "../StarRating";

const MechandiseCard2 = () => {
  return (
    <div className="w-full h-full bg-white hover:border rounded-md overflow-hidden">
      <Link to="/detail">
        <div className="w-full h-full p-[10px] flex flex-col relative">
          <div className="w-[100px] h-[24px] bg-red-600 rotate-45 absolute -right-[28px] text-white z-30">
            46%
          </div>
          <div className="h-full w-full relative flex flex-wrap">
            {/* <div className="w-full h-[65px] rounded-md text-white flex bg-red-600 absolute bottom-0 left-0 items-center p-1">
              <div className="flex flex-col">
                <p className=" text-sm font-bold ">6.190.000 đ</p>
                <p className=" line-through text-xs font-medium text-left">10.790.000 đ</p>
              </div>
              <div className="flex flex-col w-[95px]">
                <p className=" text-xs text-right">Kết thúc sau 30 ngày</p>
                <p className=" text-xs font-medium text-right">Còn <span className="font-bold">15</span></p>
              </div>
            </div> */}
            <img
              src="https://s.meta.com.vn/img/thumb.ashx/200x200x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png"
              srcset="https://s.meta.com.vn/img/thumb.ashx/200x200x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png, https://s.meta.com.vn/img/thumb.ashx/300x300x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png 1.5x, https://s.meta.com.vn/img/thumb.ashx/400x400x95/Data/image/2020/02/17/bo-noi-inox-4-day-nagakawa-nag1304-300.png 2x"
              width="200"
              height="200"
              className="thumb-list is-thumb max-h-full max-w-full"
              alt="✓"
            />
            <div>
                <h3 className="line-clamp-2 text-left">
                Bộ 3 nồi inox 4 đáy Nagakawa NAG1304 (16cm, 20cm, 24cm)
                </h3>
                <div className=" mt-2">
                <StarRating rating={4}></StarRating>
                <div className="flex mr-4">
                    <p className="text-red-700 text-sm font-bold -m-[2px] mr-3">
                    10.790.000 đ
                    </p>
                    <p className="text-slate-600 line-through text-sm font-bold">
                    10.790.000 đ
                    </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MechandiseCard2;
