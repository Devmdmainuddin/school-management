import Container from "../Share/Container";
import Heading from "../Share/Heading";

const Events = () => {
    return (
        <div className="bg-[#fafafa]">
            <Container>
                <div data-aos="fade-up" className="pt-[120px]  flex justify-center items-center flex-col ">
                    <Heading text='Whats New' className='text-center'></Heading>
                    <h2 className="capitalize text-[#42495b] text-[45px] leading-[1.33em] font-bold mt-6 text-center">new events </h2>
                    <p className="capitalize max-w-[682px] text-[#595959] text-lg leading-[1.36em] text-center mt-6">Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
                </div>
            </Container>
        </div>
    );
};

export default Events;