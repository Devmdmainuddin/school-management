import { useEffect, useState } from "react";
import Courses from "../Card/Courses";
import Container from "../Share/Container";
import Heading from "../Share/Heading";


const PopularCourses = () => {
    const [course,setCourse]=useState([])
    console.log(course);


useEffect(()=>{
    fetch('fakeData.json')
    .then(response => response.json())
    .then(data => {
        setCourse(data)
        // const popularCourses = data.filter(course => course.popular);
        // renderPopularCourses(popularCourses);
    });
},[])
   
    return (
        <>
            <div className="bg-[#fafafa]">
                <Container>
                    <div className="pt-[120px]  flex justify-center items-center flex-col ">
                        <Heading text='Whats New' className='text-center'></Heading>
                        <h2 className="text-[#42495b] text-[45px] leading-[1.33em] font-bold mt-6 text-center">Popular Online Courses</h2>
                        <p className="max-w-[682px] text-[#595959] text-lg leading-[1.36em] text-center mt-6">Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 mt-[50px]">
                        {
                            course.map((item, index) => (
                                <Courses key={index} item={item}/>
                            ))
                        }
                       
                   
                    </div>
                </Container>
            </div>
        </>

    );
};

export default PopularCourses;