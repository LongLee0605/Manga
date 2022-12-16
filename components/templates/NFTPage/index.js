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
      <section className="mt-8 lg:mt-[20px]">
        <div className=" h-[320px] bg-[url('/assets/images/bannerNFT.png')] bg-cover bg-center lg:h-[560px]"></div>
        <div className="container mt-10">
          <div className="row">
            <div className="col-12 lg:col-6">
              <div className="mb-8">
                <Title as="h2">The Orbitians</Title>
                <p className="mt-3 text-[#858584]">Minted on Sep 30, 2022</p>
              </div>
              <div>
                <p className="my-3 text-[#858584]">Created By</p>
                <div className="mb-8 flex items-center">
                  <div>
                    <Image
                      src="/assets/images/c-9.png"
                      alt="Logo skill"
                      width={24}
                      height={24}
                      className="mr-3"
                    />
                  </div>
                  <p>Orbitian</p>
                </div>
                <div>
                  <p className="text-[#858584]">Description</p>
                  <p className="mr-48">
                    The Orbitians <br></br>
                    is a collection of 10,000 unique NFTs on the Ethereum
                    blockchain, <br></br> <br></br>There are all sorts of beings
                    in the NFT Universe. The most advanced and friendly of the
                    bunch are Orbitians. <br></br> <br></br>They live in a metal
                    space machines, high up in the sky and only have one foot on
                    Earth. These Orbitians are a peaceful race, but they have
                    been at war with a group of invaders for many generations.
                    The invaders are called Upside-Downs, because of their
                    inverted bodies that live on the ground, yet do not know any
                    other way to be. Upside-Downs believe that they will be able
                    to win this war if they could only get an eye into Orbitian
                    territory, so they&#39;ve taken to make human beings their
                    target.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-6 flex justify-center lg:mt-0 lg:col-6 lg:justify-end">
              <div className="w-[300px] rounded-xl bg-[#3B3B3B] bg-opacity-50 p-8">
                <p>Auction ends in:</p>
                <div className="flex justify-between text-white">
                  <div className="">
                    <p className="text-[42px] font-bold">59</p>
                    <p>Hours</p>
                  </div>
                  <div className="pt-2 text-4xl">:</div>
                  <div className="">
                    <p className="text-[42px] font-bold">59</p>
                    <p>Minutes</p>
                  </div>
                  <div className="pt-2 text-4xl">:</div>
                  <div className="">
                    <p className="text-[42px] font-bold">59</p>
                    <p>Seconds</p>
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <a href="">
                    <div className="flex w-full items-center justify-center rounded-2xl bg-[#A259FF] py-4">
                      <p className="w-fit font-bold">Place Bid</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
