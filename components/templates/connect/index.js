import Title from "components/atoms/Title";
import Image from "next/image";
import { GiFox } from "react-icons/gi";
const HomeTemplate = ({ dataStatic }) => {
  return (
    <>
      <section className="mt-8 lg:mt-[100px]">
        <div className="container pt-10 lg:pt-0">
          <div className="row items-center">
            <div className="col-12 pt-8 lg:col-6 lg:pt-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/images/Connect.png"
                  alt="Logo skill"
                  width={610}
                  height={651}
                  className={`hidden lg:block`}
                />
                <Image
                  src="/assets/images/Connect-m.png"
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
                Connect Wallet
              </Title>
              <p className="mt-5 mb-10 pr-0 text-lg lg:pr-10 lg:text-2xl">
                Choose a wallet you want to connect. There are several wallet
                providers.
              </p>
              <div>
                <a href="">
                  <div className="mb-5 flex w-full items-center rounded-2xl border border-[#A259FF] px-10 py-4 lg:w-2/3">
                    <div className="mr-5">
                      <Image
                        src="/assets/images/Fox.png"
                        alt="Logo skill"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-2xl font-bold">Metamask</p>
                  </div>
                </a>
                <a href="">
                  <div className="mb-5 flex w-full items-center rounded-2xl border border-[#A259FF] px-10 py-4 lg:w-2/3">
                    <div className="mr-5">
                      <Image
                        src="/assets/images/Wallet.png"
                        alt="Logo skill"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-2xl font-bold">Metamask</p>
                  </div>
                </a>
                <a href="">
                  <div className="mb-5 flex w-full items-center rounded-2xl border border-[#A259FF] px-10 py-4 lg:w-2/3">
                    <div className="mr-5">
                      <Image
                        src="/assets/images/Coin.png"
                        alt="Logo skill"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="text-2xl font-bold">Metamask</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
