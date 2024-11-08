import Marquee from "react-fast-marquee";

const Partners = () => {
    const partners=[
        {name:"Partner 1", img:"/p1.png"},
        {name:"Partner 2", img:"/p2.png"},
        {name:"Partner 3", img:"/p3.png"},
        {name:"Partner 4", img:"/p4.png"},
        {name:"Partner 5", img:"/p5.png"},
        {name:"Partner 6", img:"/p6.png"},
        {name:"Partner 7", img:"/p7.png"},
        {name:"Partner 8", img:"/p8.png"},
        {name:"Partner 9", img:"/p9.png"},
        {name:"Partner 10", img:"/p10.png"},
        // Add more partners here...
 
    ]
    return (
        <div>

            <Marquee pauseOnHover={true}>
                <div className="flex gap-6 items-center">
                    {partners.map((partner,idx) =><div key={idx} className=" bg-white p-6 w-[262px] h-[120px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[10px] flex justify-center items-center">
                        <img src={partner.img} alt={partner.name} className="w-full h-full object-contain"/>
                    </div>)}
                    
                  


                </div>
            </Marquee>
        </div>
    );
};

export default Partners;