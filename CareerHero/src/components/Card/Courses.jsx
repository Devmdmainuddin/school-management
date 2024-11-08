import { FaStar } from "react-icons/fa6";
import { UpdateFollower } from "react-mouse-follower";

const Courses = ({ item }) => {
    console.log(item.image);
    return (
        <div>
            <UpdateFollower
                mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 80,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 4,
                }}
            >


                <div className="w-[346px] flex flex-wrap justify-center shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:scale-105 transition-all duration-500">
                    <div className="image">
                        <div className="w-[346px] h-[188px]">
                            <img src={item?.image} alt="IMAGE" className="w-full h-full object-cover" />
                        </div>

                    </div>
                    <div className="content px-3 mt-4 ">
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 1.5,
                                scale: 4,
                                mixBlendMode: "difference",
                              }}
                        >
                            <h2 className="text-[#42495b] text-[22px] leading-[1.45em] font-bold cursor-pointer">{item?.title}</h2>
                        </UpdateFollower>

                        {item?.price ?
                            <div className="flex justify-between items-center">

                                <h4 className="text-[14px] leading-[21px] font-normal text-[#abb8c3] ">{item?.category}</h4>
                                <p className="flex gap-1 items-center text-sm leading-[17px] text-[#b9b9b9]"><FaStar /> <span>5</span> Ratings</p>
                            </div>
                            :
                            <h4 className="text-[14px] leading-[21px] font-normal text-[#abb8c3] ">{item?.category}</h4>}
                        <p className="mt-[7px] text-[18px] leading-[1.56em] font-normal text-gray-500 pb-4">{item?.description?.slice(0, 70)}</p>
                        {item?.price ?
                            <div className="flex justify-between items-center py-4 border-t">

                                <p className="text-sm leading-[17px] text-[#b9b9b9]">${item?.price}</p>
                                <button className="text-[12px] leading-[17px] text-white py-1 px-2 bg-[#f52ede] rounded-sm">By Now</button>
                            </div> :
                            <div className="flex justify-between items-center py-4 border-t">
                                <p className="flex gap-1 items-center text-sm leading-[17px] text-[#b9b9b9]"><FaStar /> <span>5</span> Ratings</p>
                                <p className="text-sm leading-[17px] text-white py-1 px-2 bg-[#04d2c8] rounded-sm">free</p>
                            </div>
                        }

                    </div>
                </div>
            </UpdateFollower>
        </div>
    );
};

export default Courses;