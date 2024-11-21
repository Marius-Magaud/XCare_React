
const Navbar = () => {
  return (
      <div className="left-0 top-0 w-[440px] h-screen bg-[#f7f7f8] flex flex-col justify-start items-start drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <div className="w-[440px] h-[84px] relative">
              <div className="w-[438px] h-1 left-[2px] top-[80px] absolute bg-[#f1f1f1] border"/>
              <div
                  className="w-[81px] h-6 left-[58px] top-[27px] absolute text-black text-lg font-semibold font-['Poppins']">XCare
              </div>
              <img className="w-[39px] h-[39px] left-[388px] top-[23px] absolute"
                   src="https://via.placeholder.com/39x39"/>
              <div className="w-[132px] h-[34px] left-[247px] top-[25px] absolute bg-[#ededef] rounded-[5px]">
                  <div
                      className="left-[9px] top-[3px] absolute text-[#6e7087] text-lg font-semibold font-['Poppins']">Production
                  </div>
                  <div
                      className="left-[132px] top-[13px] absolute origin-top-left rotate-90 text-[#6e7087] text-lg font-semibold font-['Poppins']">
                  </div>
              </div>
          </div>

          <div
              className="w-[440px] flex-grow pl-[13px] pr-3 pt-[11px] pb-[998px] flex flex-col justify-start items-center">
              <div className="self-stretch flex flex-col gap-[3px]">
                  {[
                      {label: 'Live View', active: true},
                      {label: 'Versioning', active: false},
                      {label: 'Live delivery', active: false},
                      {label: 'Query', active: false},
                      {label: 'Statistics', active: false},
                      {label: 'Alerts', active: false},
                      {label: 'Mapping', active: false},
                  ].map((item, index) => (
                      <div
                          key={index}
                          className={`pl-[18px] pt-2 pb-[9px] rounded-[5px] flex items-center ${
                              item.active ? 'bg-[#e3ebf6] text-black font-semibold' : 'text-[#6a6971] font-medium'
                          } text-xl font-['Poppins']`}
                      >
                          <div className="w-[23px] h-[23px] mr-4"></div>
                          <div>{item.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

  );
};

export default Navbar;