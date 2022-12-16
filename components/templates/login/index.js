import FadeContent from "components/atoms/Animate/FadeContent";
import Title from "components/atoms/Title";
import Image from "next/image";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { AiFillRocket, AiTwotoneEye } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
import AiOutlineMail from "components/atoms/Icon/ai/AiOutlineMail";
import AiOutlineUser from "components/atoms/Icon/ai/AiOutlineUser";
import AiOutlineLock from "components/atoms/Icon/ai/AiOutlineLock";
const HomeTemplate = ({ dataStatic }) => {
  return (
    <>
      <section className="mt-8 lg:mt-[100px]">
        <div className="container pt-10 lg:pt-0">
          <div className="row items-center">
            <div className="col-12 pt-8 lg:col-6 lg:pt-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/images/login.png"
                  alt="Logo skill"
                  width={610}
                  height={651}
                  className={`hidden lg:block`}
                />
                <Image
                  src="/assets/images/login-m.png"
                  alt="Logo skill"
                  width={1024}
                  height={232}
                  className={`block lg:hidden`}
                />
              </div>
            </div>
            <div className="col-12 mt-8 lg:mt-0 lg:col-6">
              <Title
                className={` text-[34px] font-bold leading-9 text-white  lg:text-[67px] lg:leading-[74px]`}
              >
                Create Account
              </Title>
              <p className="mt-5 mb-10 pr-0 text-lg lg:pr-10 lg:text-2xl">
                Welcome! Enter Your Details And Start Creating, Collecting And
                Selling NFTs.
              </p>
              <div>
                <form>
                  <div class="relative mt-4 w-full lg:w-2/3">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineUser size={20} className="text-[#BDBDBD]" />
                    </div>
                    <input
                      type="text"
                      class="w-full rounded-2xl p-2.5 pl-10 text-sm"
                      placeholder="Username"
                    />
                  </div>
                  <div class="relative mt-4 w-full lg:w-2/3">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineMail size={20} className="text-[#BDBDBD]" />
                    </div>
                    <input
                      type="text"
                      class="w-full rounded-2xl p-2.5 pl-10 text-sm"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="relative mt-4 w-full lg:w-2/3">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineLock size={20} className="text-[#BDBDBD]" />
                    </div>
                    <input
                      type="text"
                      class="w-full rounded-2xl p-2.5 pl-10 text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div class="relative mt-4 w-full lg:w-2/3">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <AiOutlineLock size={20} className="text-[#BDBDBD]" />
                    </div>
                    <input
                      type="text"
                      class="w-full rounded-2xl p-2.5 pl-10 text-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="mt-4 w-full lg:w-2/3">
                    <a href="/connect">
                      <div className="flex w-full items-center justify-center rounded-2xl bg-[#A259FF] py-2">
                        <p className="w-fitfont-bold">Create account</p>
                      </div>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
