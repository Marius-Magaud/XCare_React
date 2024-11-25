const Item = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-start h-full">
            {/* Title */}
            <h2 className="text-black text-[23px] font-medium font-['Poppins'] mb-2">{title}</h2>

            {/* Main Container */}
            <div className="w-full h-full flex flex-col rounded-lg border border-[#ececec] text-[#797896] overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Item;