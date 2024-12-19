import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Live View', path: '/dashboard', icon: '/static/menu/Dashboard.svg'},
    { label: 'Versioning ', path: '/versioning-process' , icon: '/static/menu/Versioning.svg'},
    // { label: 'Live delivery | TODO', path: '/', icon: '/static/menu/Dashboard.svg' },
    { label: 'Query - Logs', path: '/query-logs', icon: '/static/menu/Query.svg' },
    { label: 'Query - Process ', path: '/query-process', icon: '/static/menu/Query.svg' },
    { label: 'Statistics', path: '/statistics', icon: '/static/menu/Statistics.svg' },
    { label: 'Statistics - Treemap', path: '/statistics-treemap', icon: '/static/menu/Statistics.svg' },
    // { label: 'Alerts - Setup | TODO ', path: '/', icon: '/static/menu/Alerts.svg' },
    // { label: 'Alerts - Mailbox', path: '/alerts-mailbox', icon: '/static/menu/Alerts.svg' },
    { label: 'Mapping', path: '/mapping' , icon: '/static/menu/Mapping.svg'},
  ];

  return (
    <div className="flex flex-col h-screen w-[17.1875%] fixed bg-[#f7f7f8] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      {/* Top Section */}
      <div className="flex flex-col w-full h-[84px] relative">
        {/* Divider */}
        <div className="w-full h-1 bg-[#f1f1f1] absolute bottom-0" />
        {/* Logo and Production Info */}
        <div className="flex justify-between items-center px-6 h-full">
          <div className="text-black text-lg font-semibold font-['Poppins']">XCare</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#ededef] rounded-[5px] px-2 py-1">
              <span className="text-[#6e7087] text-lg font-semibold font-['Poppins']">
                Production
              </span>
            </div>
            <img
              className="w-[39px] h-[39px]"
              src="https://via.placeholder.com/39x39"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="flex-grow overflow-y-auto px-[13px] pt-[11px]">
        <div className="flex flex-col gap-[3px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)} // Navigate to the selected page
              className={`flex items-center gap-4 px-[18px] py-2 rounded-[5px] ${
                location.pathname === item.path // Check if the current path matches the menu item's path
                  ? 'bg-[#e3ebf6] text-black font-semibold'
                  : 'text-[#6a6971] font-medium'
              } text-xl font-['Poppins'] cursor-pointer hover:font-semibold hover:text-black transition-colors`}
            >
              <div className="w-[23px] h-[23px]">
                <img src={item.icon} alt="Dashboard Icon"/>
              </div>
              <div>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
