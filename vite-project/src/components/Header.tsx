const Header = ({ title = "Live View", subtitle = "Follow your TM1 base life content without any delay" }) => {
    return (
        <div className="h-[124px] items-start inline-flex mb-[65px]">
            <div className="w-[124px] self-stretch pl-[37px] pr-[11px] pt-8 pb-4 justify-end items-center inline-flex">
                <div className="w-[76px] h-[76px] p-[3px] bg-[#e9ecff] rounded-[15px] justify-center items-center inline-flex">
                    <div className="w-[70px] h-[70px] relative flex-col justify-start items-start flex" />
                </div>
            </div>
            <div className="self-stretch pl-[3px] pt-[33px] pb-[9px] flex-col justify-end items-start gap-1.5 inline-flex">
                <div className="h-9 text-black text-3xl font-semibold font-['Poppins'] text-left">
                    {title}
                </div>
                <div className="h-9 text-black text-xl font-normal font-['Poppins'] text-left">
                    {subtitle}
                </div>
            </div>
        </div>
    );
};

export default Header;
