import { useResizeScreenModifile } from "common/hooks";
import AiOutlineUser from "components/atoms/Icon/ai/AiOutlineUser";
import Title from "components/atoms/Title";
import Image from "next/image";
import { useRouter } from "node_modules/next/router";
import { useEffect, useRef, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import {
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineDownload,
  AiOutlineGlobal,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import useOutsideClick from "./useOutsideClick";

const dataNav = [
  {
    page_name: "Anime",
    url: "/",
  },
  {
    page_name: "Manga",
    url: "/manga",
  },
  {
    page_name: "Tìm Anime bằng ảnh",
    url: "/image",
  },
  {
    page_name: "Xem cùng bạn",
    url: "/see",
  },
  {
    page_name: "Anime Themes",
    url: "/theme",
  },
];
const Header = () => {
  const [screen, setScreen] = useState(null);
  useResizeScreenModifile(setScreen);
  const [navActive, setNavActive] = useState(false);
  // nav
  const [showSidebar, setShowSidebar] = useState(false);

  const router = useRouter();

  const listenScrollEvent = () => {
    let isActive = window.scrollY > 60;
    let navElement = document.getElementById("nav-desktop");
    setNavActive(isActive);
    if (isActive) {
      navElement.classList.add("fixed", "!top-0");
    } else {
      navElement.classList.remove("fixed", "!top-0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    setShowSidebar(false);
  }, [screen]);

  return (
    <>
      {screen === "DESKTOP" ? (
        <div
          className={`fixed top-0 z-50 flex w-full items-center justify-between bg-[#2B2B2B] px-36 duration-500`}
          id="nav-desktop"
          style={{
            backgroundColor: navActive ? "#000" : "",
            height: "64px",
          }}
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="mr-3">
                <Image
                  src={`/assets/images/logo.png`}
                  alt="Logo skill"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div>
              {dataNav?.map((item) => {
                return (
                  <div className="inline-block px-5" key={item.page_name}>
                    <a href={item.url || "/"}>
                      <span
                        id="navActive"
                        className={` pb-5 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                          router.pathname === "/" ? "text-white " : " "
                        } ${
                          router.pathname === item.url
                            ? "text-red-500 hover:text-white"
                            : " hover:text-red-500"
                        } `}
                      >
                        {item.page_name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <AiOutlineDownload
                size={28}
                className={`mr-10 font-bold text-white`}
              />
            </div>
            <div className="mr-10 flex items-center rounded-3xl bg-[#3B3B3B] px-5 py-2">
              <div>
                <AiOutlineGlobal size={28} className={`mr-3 text-white`} />
              </div>
              <p className=" text-lg font-semibold">Tiếng Việt</p>
            </div>
            <div>
              <AiOutlineBell size={28} className={`mr-3 text-white`} />
            </div>
            <div>
              <AiOutlineSearch size={28} className={`mr-3 text-white`} />
            </div>
            <div className="mr-10 flex items-center rounded-3xl bg-red-500 px-5 py-2">
              <p className=" text-lg font-semibold">Đăng Nhập</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fixed top-0 z-50 w-full bg-[#2B2B2B] px-5`}
          id="nav-desktop"
          style={{
            boxShadow: "rgb(181 181 181 / 0.75) 0 2px 4px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="row items-center">
            <div className="col-8 p-5">
              <div className="flex items-center">
                <div>
                  {" "}
                  <IoLogoGithub size={32} className={`mr-3 text-white`} />
                </div>
                <Title
                  className={`whitespace-nowrap text-base font-bold text-white`}
                >
                  NFT Marketplace
                </Title>
              </div>
            </div>
            <div className="col-4 p-5 ">
              <div className="flex justify-end">
                <>
                  {showSidebar ? (
                    <button
                      className="z-50 text-4xl text-white"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <AiOutlineClose size={30} />
                    </button>
                  ) : (
                    <FaBars
                      size={25}
                      className={`text-4xl text-white`}
                      onClick={() => setShowSidebar(!showSidebar)}
                    />
                  )}
                  <div
                    className={`fixed top-0 right-0 z-40  h-full w-[195px] duration-300 ease-in-out ${
                      showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
                  >
                    <div className=" overflow-hidden rounded-2xl bg-[#2B2B2B] py-10 pt-15 text-4xl font-semibold">
                      <div className="px-3">
                        <a href="" className="group overflow-hidden">
                          <div
                            className={`mt-4 text-sm font-bold tracking-wider transition-colors duration-300`}
                          >
                            <p className="text-white">Marketplace</p>
                            <div className="-translate-x-[170%] rounded-sm border-b-4 border-white duration-200 group-hover:translate-x-0"></div>
                          </div>
                        </a>
                        <a href="" className="group overflow-hidden">
                          <div
                            className={`mt-4 text-sm font-bold tracking-wider transition-colors duration-300`}
                          >
                            <p className="text-white">Rankings</p>
                            <div className="-translate-x-[170%] rounded-sm border-b-4 border-white duration-200 group-hover:translate-x-0"></div>
                          </div>
                        </a>
                        <a href="" className="group overflow-hidden">
                          <div
                            className={`mt-4 text-sm font-bold tracking-wider transition-colors duration-300`}
                          >
                            <p className="text-white">Connect a wallet</p>
                            <div className="-translate-x-[170%] rounded-sm border-b-4 border-white duration-200 group-hover:translate-x-0"></div>
                          </div>
                        </a>
                        <a href="" className="overflow-hidden rounded-3xl ">
                          <div
                            className={`mt-4 rounded-2xl bg-[#A259FF] p-4 text-sm font-bold`}
                          >
                            <div className="flex items-center">
                              <AiOutlineUser
                                size={16}
                                className={`mr-3 font-bold text-white`}
                              />
                              <p className="text-white">Sign Up</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
