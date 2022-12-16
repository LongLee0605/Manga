import AiOutlineMail from "components/atoms/Icon/ai/AiOutlineMail";
import Title from "components/atoms/Title";
import { useEffect, useState } from "react";
import { AiOutlineCopyright, AiOutlineYoutube } from "react-icons/ai";
import { IoIosArrowUp, IoLogoGithub } from "react-icons/io";
import { RxDiscordLogo } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div
      className="bg-[#3B3B3B]"
      style={{ boxShadow: "rgb(0 0 0 / 0.25) 0px 4px 10px" }}
    >
      <div className="container py-10 px-8">
        <div className="row border-b-2 pb-10">
          <div className="col-12 mb-6 lg:mb-0 lg:col-4">
            <div className="flex items-center">
              <div>
                <IoLogoGithub size={32} className={`mr-3 text-[#cccccc]`} />
              </div>
              <Title as="h3">NFT Marketplace</Title>
            </div>
            <div>
              <p className="font-base mt-6 pr-32 text-[#cccccc]">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <p className="font-base mt-5 text-[#cccccc]">
                Join our community
              </p>
            </div>
            <div className="mt-4 flex">
              <div>
                <RxDiscordLogo size={32} className={`mr-2 text-[#cccccc]`} />
              </div>
              <div>
                <FiYoutube size={32} className={`mr-2 text-[#cccccc]`} />
              </div>
              <div>
                <CiTwitter size={32} className={`mr-2 text-[#cccccc]`} />
              </div>
              <div>
                <FiInstagram size={32} className={`text-[#cccccc]`} />
              </div>
            </div>
          </div>
          <div className="col-12 mb-6 lg:mb-0 lg:col-3">
            <div className="flex items-center">
              <Title as="h3">Explore</Title>
            </div>
            <div>
              <p className="font-base mt-6 text-[#cccccc]">Marketplace</p>
              <p className="font-base mt-5 text-[#cccccc]">Rankings</p>
              <p className="font-base mt-5 text-[#cccccc]">Connect a wallet</p>
            </div>
          </div>
          <div className="col-12 mb-6 lg:mb-0 lg:col-5">
            <Title as="h3">Join Our Weekly Digest</Title>
            <p className="mb-10 mt-3 pr-36 text-[#cccccc]">
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </p>
            <div className="block justify-between overflow-hidden rounded-2xl lg:flex lg:bg-white">
              <input
                placeholder="Enter your email here"
                className="mb-6 w-full rounded-2xl border-none p-5 ring-0 focus:outline-none lg:mb-0"
              />
              <a href="">
                <div className="flex w-full items-center justify-center rounded-2xl bg-[#A259FF] px-5 py-5">
                  <div>
                    <AiOutlineMail size={20} className={`mr-3 text-white`} />
                  </div>
                  <p className="w-fit font-bold">Subscribe</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center text-[#CCCCCC]">
          <div>
            <AiOutlineCopyright size={20} className={`mr-3`} />
          </div>
          <p className="text-[#CCCCCC]">
            NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
