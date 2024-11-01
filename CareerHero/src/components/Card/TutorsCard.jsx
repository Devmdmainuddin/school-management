import { FaStar } from "react-icons/fa6";
import { TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
const TutorsCard = ({item}) => {
    return (
        <div>
            <div className="w-[346px] p-3 flex flex-wrap justify-center  items-center shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:scale-105 transition-all duration-500 rounded-md">
                <div className="image ">
                    <div className="w-[144px] h-[144px]">
                    <img src={item?.profilePhoto} alt="IMAGE" className="w-full h-full object-cover rounded-md"/>
                    </div>
                   
                </div>
                <div className="content px-3">
                    <h2 className="text-[#42495b] text-[22px] leading-[1.45em] font-bold">{item?.fullName}</h2>
                    <h4 className="text-[14px] leading-[21px] font-normal text-[#abb8c3]">{item?.designation}</h4>
                    <p className="mt-[7px] text-[18px] leading-[1.56em] font-normal text-gray-500 ">{item?.description?.slice(0,70)}</p>
                    <p className="flex gap-1 items-center text-[11px] leading-[17px] text-[#b9b9b9] pb-4">{item?.subjectsTaught[1]}</p>
                    <div className="flex justify-center items-center py-4 border-t">
                   <span><TiSocialTwitter className="text-2xl leading-[17px] text-[#b9b9b9] hover:text-[#04d2c8] transition-all duration-500" /> </span> 
                   <span> <TiSocialInstagram className="text-2xl leading-[17px] text-[#b9b9b9] hover:text-[#04d2c8] transition-all duration-500"/></span>
                   <span> <FaFacebookSquare className="text-2xl leading-[17px] text-[#b9b9b9] hover:text-[#04d2c8] transition-all duration-500"/></span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorsCard;