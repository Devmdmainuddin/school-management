import Card from "../../components/Card/Card";
import Blogs from "../../components/home/Blogs";
import Events from "../../components/home/Events";
import HeroBanner from "../../components/home/HeroBanner";
import Partners from "../../components/home/Partners";
import PopularCourses from "../../components/home/PopularCourses";
import Tutors from "../../components/home/Tutors";


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <PopularCourses></PopularCourses>
            <Tutors></Tutors>
            <Events></Events>
            <Blogs></Blogs>
            <Partners></Partners>
        </div>
    );
};

export default Home;