import React from 'react'
// import first from '../../assests/login_image/first-add1.jpg'
// import second from '../../assests/login_image/frist-add2.jpg'
// import third from '../../assests/login_image/first-add3.jpg'
import fifth from '../../assests/login_image/login_left.png'
import injurio from '../../assests/logo/injurio_logo.png'
// import { BsEye } from "react-icons/bs";
// import { BsEyeSlash } from "react-icons/bs";
// import { Button } from "@material-tailwind/react";
import './login.css'

const Login = () => {
  function handleSumbit(){

  }
  return (
    <div className='flex justify-center  my-5 w-[80vw] mx-auto bg-slate-100 rounded-lg'>
    <div className='w-1/2 rounded-lg'>
    <img src={fifth} alt="" className='w-[100%] h-[100%] rounded-lg' />
    </div>
    <div className='w-1/2 py-2'>
      <div className="login-form-container px-8 md:mt-0">
        <div className="page-title flex justify-center items-center gap-2 md:gap-3 lg:justify-start">
        <div className='w-48 h-20 rounded-lg bg-[#32324b]'>
          <img src={injurio} alt="" className='h-[100%] w-[90%] mx-auto py-1' />
        </div>
          {/* <p className="text-[1.2rem] text-[#d1b33e] font-Public Sans md:text-[3rem]  fw-bolder">
            INJURIO
          </p> */}
          
        </div>
        <div className="page-heading flex flex-col items-center gap-5 mt-4 md:mt-4 md:items-start">
          <h1 className=" text-xl lg:text-3xl  font-[700] text-[#414A53] font-publicSans">
            Login
          </h1>
          <p className="style-[Public Sans] text-[#21262C]  text-sm lg:text-lg text-center md:text-start font-publicSans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <form method="POST" onSubmit={handleSumbit} className="mt-10">
          <div className="flex flex-col my-5">
            <label
              htmlFor="email"
              className="font-[500] text-[#85909B] text-base py-2 font-publicSans"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#F7F8FB] border-solid border-2 border-[#E2E3E8] p-2 rounded-lg text-base md:text-xl focus:outline-none md:py-3 md:px-4"
              placeholder="Enter your email"
              // value={inputLoginData.email}
              // onChange={handleLoginData}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col my-5">
            <div className="flex justify-between py-2">
              <label
                htmlFor="password"
                className="font-[500] text-[#85909B] text-base font-publicSans"
              >
                Password
              </label>
              <p
                to="/forgot-password"
                className="text-[#377EF9] font-publicSans cursor-pointer"
              >
                Forgot Password?
              </p>
            </div>
            <div className=" md:px-2 flex  items-center w-[100%] bg-[#F7F8FB] border-solid border-2 border-[#E2E3E8] rounded-lg">
              <input
                // type={} ? "text" : "password"}
                name="password"
                id="password"
                className="mt-1  py-3 px-2 md:w-full  w-[90%] bg-[#F7F8FB] focus:outline-none  text-base md:text-xl"
                placeholder="Enter your password"
                // value={inputLoginData.password}
                // onChange={handleLoginData}
                autoComplete="off"
                required
              />
              <div
                className="cursor-pointer"
                // onClick={togglePasswordVisibility}
              >
                {/* {showPassword ? (
                  <BsEyeSlash size={"2rem"} color={"#747D83"} />
                ) : (
                  <BsEye size={"2rem"} color={"#747D83"} />
                )} */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-between mt-5 md:flex-row lg:mt-10">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="remember-me"
                name="lsRememberMe"
                className="w-[1.7rem] h-[1.7rem] accent-[#32324b] cursor-pointer  focus:ring-0 focus:ring-offset-0 focus:outline-none"
                onChange={() => {
                }}
              />
              <label
                htmlFor="remember-me"
                className="text-[#85909B] font-publicSans"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="py-4 px-8 text-white bg-[#32324b] rounded-lg text-[1rem] font-[500] md:py-4 md:px-5 font-publicSans"
              variant="gradient"
            >
              Login Now!
            </button>
          </div>
        </form>
        <div className="flex justify-center md:justify-start gap-2 items-center mt-5 h-13">
          
             <span className='pt-1'>New User ?</span>
              <span className="text-green-600 text-[1.5rem] fw-bolder h-8 hover:text-green-900 hover:border-b-2 hover:border-b-yellow-700 hover:cursor-pointer">
                Sign Up
            </span>
        </div>
      </div>
   </div>
    

    </div>
  )
}

export default Login
