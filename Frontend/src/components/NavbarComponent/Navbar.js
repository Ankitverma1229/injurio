import React from "react";
import injurio_logo from "../../assests/logo/injurio_logo.png";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="text-white mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="bg-[#32324b] p-1 font-normal h-8 hover:border-b-2 hover:border-b-lime-200 hover:transform hover:translate-y-0"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="bg-[#32324b] p-1 font-normal h-8 hover:border-b-2 hover:border-b-lime-200"
      >
        <a href="#" className="flex items-center">
          Data
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto py-2 px-4 lg:px-10 lg:py-0 bg-[#32324b] ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium w-[3rem]"
        >
          <div className=" h-13 w-40">
            <img
              src={injurio_logo}
              alt="injurio logo"
              className="h-[100%] w-[100%]"
            />
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block bg-red-600 hover:bg-red-900 hover:scale-125 duration-200 rounded-lg  place-items-center"
        >
          <span>Login/SignUp</span>
        </Button>
        <IconButton
          variant="text"
          className=" mb-5 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-red-600"
          >
            <span>Login/SignUp</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
