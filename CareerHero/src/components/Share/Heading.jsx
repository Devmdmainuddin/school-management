

const Heading = ({className,text}) => {
    return (
        <div>
            <h2 className={`text-[#04d2c8] text-[22px] leading-[1.27em] font-bold tracking-[0.025em] ${className}`}>{text}</h2>
        </div>
    );
};

export default Heading;