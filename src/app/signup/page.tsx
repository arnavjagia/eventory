import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
      <div className="flex flex-col items-start justify-between lg:max-w-[30%] xs:gap-7 xs:pt-4 md:min-w-[30%] bg-[#FFFFFF]">
        <div className="flex gap-7 md:px-11 xs:pl-5 lg:mt-[5rem] items-start justify-start xs:self-start">
          <div className="bg-indigo-600 h-[0.625rem] w-[4rem] rounded-xl"></div>
          <div className="bg-indigo-600 h-[0.625rem] w-[4rem] rounded-xl"></div>
        </div>
        <div className="flex flex-col items-start justify-center gap-9 lg:p-8 h-[50%] md:px-11 px-9 xs:pl-5">
          <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl">
            Tell us about you
          </h1>
          <p className="md:w-[90%] text-black xs:text-sm">
            Fill out your personal details to get verified and proceed to the
            registration process.
          </p>
        </div>
        <div className="lg:w-full relative h-[10rem]">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col min-w-[70%] items-center justify-center bg-[#F7F6F9] md:p-[2.2rem] p-2">
        <div className="flex flex-col gap-7 md:p-6 p-3 xs:min-w-[90%] bg-white rounded-xl">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex flex-col items-center gap-5 min-w-full min-h-full">
            <div className="flex items-center md:flex-row flex-col justify-between gap-5 min-w-full">
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                />
              </div>
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                />
              </div>
            </div>
            <div className="flex items-center md:flex-row flex-col justify-between gap-5 min-w-full">
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="phoneNumber">Mobile No.</label>
                <input
                  id="phoneNumber"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                />
              </div>
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="dob">Create Password</label>
                <input
                  id="dob"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                />
              </div>
            </div>
            <div className="flex md:items-center md:flex-row flex-col-reverse md:mt-0 mt-9 md:px-0 justify-between w-full gap-3 self-start">
              <div className="flex md:gap-3 xs:text-sm gap-2">
                <input type="checkbox" id="tc" placeholder="t&c" />I agree with{" "}
                <span className="underline text-purple-700">
                  Terms & Conditions
                </span>
              </div>
              <Link href="/" className="underline text-purple-700">
                Forgot Password
              </Link>
            </div>
            <p className="self-start text-gray-500 xs:text-sm xs:mt-5">
              To verify it’s you, we will send you an OTP to your mobile number.
            </p>
            <div className="self-start w-[80%] h-[1px] bg-gray-300"></div>
            <div className="flex flex-col items-start self-start">
              or continue with
              <div className="flex gap-5 mt-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.0753 13.388H28.0013V13.3327H16.0013V18.666H23.5366C22.4373 21.7707 19.4833 23.9993 16.0013 23.9993C11.5833 23.9993 8.0013 20.4173 8.0013 15.9993C8.0013 11.5813 11.5833 7.99935 16.0013 7.99935C18.0406 7.99935 19.896 8.76868 21.3086 10.0253L25.08 6.25402C22.6986 4.03468 19.5133 2.66602 16.0013 2.66602C8.63797 2.66602 2.66797 8.63602 2.66797 15.9993C2.66797 23.3627 8.63797 29.3327 16.0013 29.3327C23.3646 29.3327 29.3346 23.3627 29.3346 15.9993C29.3346 15.1053 29.2426 14.2327 29.0753 13.388Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M4.20312 9.79335L8.58379 13.006C9.76912 10.0713 12.6398 7.99935 15.9991 7.99935C18.0385 7.99935 19.8938 8.76868 21.3065 10.0253L25.0778 6.25402C22.6965 4.03468 19.5111 2.66602 15.9991 2.66602C10.8778 2.66602 6.43646 5.55735 4.20312 9.79335Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M15.9989 29.3338C19.4429 29.3338 22.5722 28.0158 24.9382 25.8725L20.8116 22.3805C19.4279 23.4327 17.7372 24.0018 15.9989 24.0005C12.5309 24.0005 9.58624 21.7891 8.47691 18.7031L4.12891 22.0531C6.33557 26.3711 10.8169 29.3338 15.9989 29.3338Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M29.074 13.3893H28V13.334H16V18.6673H23.5353C23.0095 20.1449 22.0622 21.4361 20.8107 22.3813L20.8127 22.38L24.9393 25.872C24.6473 26.1373 29.3333 22.6673 29.3333 16.0007C29.3333 15.1067 29.2413 14.234 29.074 13.3893Z"
                    fill="#1976D2"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0013 2.7207C8.66797 2.7207 2.66797 8.70737 2.66797 16.0807C2.66797 22.7474 7.54797 28.2807 13.9213 29.2807V19.9474H10.5346V16.0807H13.9213V13.134C13.9213 9.78737 15.908 7.94737 18.9613 7.94737C20.4146 7.94737 21.9346 8.2007 21.9346 8.2007V11.494H20.2546C18.6013 11.494 18.0813 12.5207 18.0813 13.574V16.0807H21.788L21.188 19.9474H18.0813V29.2807C21.2232 28.7845 24.0842 27.1814 26.1479 24.7608C28.2115 22.3402 29.3418 19.2616 29.3346 16.0807C29.3346 8.70737 23.3346 2.7207 16.0013 2.7207Z"
                    fill="#1877F2"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="32"
                    height="32"
                    fill="url(#pattern0_1106_2957)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_1106_2957"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_1106_2957"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_1106_2957"
                      width="512"
                      height="512"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className="flex min-w-[56vw] gap-9 md:flex-row flex-col justify-between">
                <div className="flex gap-2 mt-5 xs:text-sm">
                  already have an account ?{" "}
                  <Link href={"/"} className="text-purple-600 underline">
                    LogIn
                  </Link>
                </div>
                <button className="bg-purple-600 py-4 px-5 xs:px-3 xs:py-2 xs:w-fit rounded-xl text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
