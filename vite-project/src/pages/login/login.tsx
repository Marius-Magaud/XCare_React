import {Component} from "react";
import {useNavigate} from "react-router-dom";

class Container extends Component<{ children: any }> {
  render() {
    let {children} = this.props;
    return (
      <div className="h-full w-full bg-gradient-to-r from-[#352090] to-[#F34980] flex items-center">
        {children}
      </div>
    );
  }
}

const Left = () => {

  const navigate = useNavigate();


  return (

    <div className="w-[716px] h-full">

      <img
        src="/static/logo-x.png"
        className="w-[78px] h-[75px] ml-[78px] mt-[52px]"
      />

      <div className="mt-[129px] font-poppins font-bold text-black text-[40px] text-left ml-[83px] leading-[53px]">
        Welcome To
      </div>
      <div className=" font-poppins font-bold text-[#B41E3B] text-[40px] text-left ml-[83px] leading-[53px]">
        Aexis XCare Product
      </div>

      <div className="ml-[83px] mt-[47px] w-[587px] h-[80px] text-left border-b-[1px] border-b-[#B7B7B7]">
        <div className="font-poppins font-regular text-[22px] text-black">
          Username
        </div>
        <input
          className="ml-[1px] mt-[5px] h-[42px] w-[587px] font-poppins font-regular text-[20px] text-[#000000] placeholder-[#B7B7B7] bg-white border-b border-[#B7B7B7] outline-none focus:border-black"
          placeholder="Enter your username here"
        />
      </div>
      <div className="ml-[83px] mt-[26px] w-[587px] h-[80px] text-left border-b-[1px] border-b-[#B7B7B7]">
        <div className="font-poppins font-regular text-[22px] text-black">
          Password
        </div>
        <input
          className="ml-[1px] mt-[6px] h-[42px] w-[587px] font-poppins font-regular text-[20px] text-[#000000] placeholder-[#B7B7B7] bg-white border-b border-[#B7B7B7] outline-none focus:border-black"
          placeholder="Enter your password here"
        />

      </div>

      <div className="ml-[84px] mt-[22px] w-[587px] text-poppins font-regular text-[#002F5F] text-right text-[15px] ">
        Forgot Password ?
      </div>

      <div className="mt-[54px] ml-[83px] w-[584px] h-[70px] bg-[#002F5F] rounded-[10px] content-center cursor-pointer"
           onClick={() => navigate("/dashboard")}
      >
        <div className="font-poppins font-semibold text-[22px] text-white">
          Login
        </div>
      </div>

      <div className="ml-[83px] mt-[29px] w-[587px] h-[264px] bg-[#FDCCCC] rounded-[10px] pt-[5px]">
        <div className="mt-[5px] text-poppins font-semibold text-[22px] text-black">
          Error while login
        </div>
        <div className="mt-[15px] ml-[16px] mr-[16px] text-poppins font-regular text-[22px] text-black text-left">
          The long and ugly error message here, <br/>
          We are not going to use any other sort of error management on this page
        </div>
      </div>

    </div>
  );
};

const Right = () => {
  return (
    <div className="w-[889px] h-full">
      <div
        className="mt-[29px] ml-[25px] w-[838px] h-[1083px] rounded-[10px] bg-cover bg-center"
        style={{ backgroundImage: "url('/static/Idriss.jpg')" }}
      >
      </div>
    </div>
  );
};

const ContentWindow = () => {
  return (
    <div className="w-[1605px] h-[1133px] bg-[#ffffff] m-auto rounded-[30px] flex">
      <Left/>
      <Right/>
    </div>
  );
};


const Login = () => {
  return (
      <Container>
              <ContentWindow/>
      </Container>

)
    ;
};

export default Login;