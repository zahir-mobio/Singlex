import React from "react";

import { Img, Text, Button, List } from "components";

const DemoTwoPage: React.FC = () => {
  function handleNavigate() {
    window.location.href = "google.com";
  }
  function handleNavigate1() {
    window.location.href = "google.com";
  }
  function handleNavigate2() {
    window.location.href = "google.com";
  }
  function handleNavigate3() {
    window.location.href = "google.com";
  }
  function handleNavigate4() {
    window.location.href = "www.fonduri-ue.ro";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-spacegrotesk items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-gradient  sm:h-[738px] h-[753px] md:h-[960px] md:px-[20px] relative w-[100%]">
              <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
                  <Img
                    src="images/img_div3.png"
                    className="md:flex-1 h-[738px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                    alt="divThree"
                  />
                  <Img
                    src="images/img_div2.png"
                    className="md:flex-1 h-[351px] sm:h-[auto] sm:mt-[0] mt-[387px] object-cover md:w-[100%] w-[auto]"
                    alt="divTwo"
                  />
                </div>
              </div>
              <div className="absolute bottom-[11%] flex md:flex-col flex-row gap-[40px] md:gap-[54px] inset-x-[0] items-center justify-start mt-[] mx-[auto] sm:px-[20px] px-[24px] w-[61%]">
                <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] md:w-[100%] w-[41%]">
                  <Text
                    className="font-inter leading-[56.00px] text-left text-white_A700 sm:w-[100%] w-[85%]"
                    as="h1"
                    variant="h1"
                  >
                    Export your Figma designs to HTML using TeleportHQ Design to
                    Code
                  </Text>
                  <Text
                    className="font-normal font-sourcesanspro leading-[27.00px] mt-[25px] not-italic text-left text-white_A700_cc w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Generate code from your designs by exporting from Figma to
                    TeleportHQ. Convert your prototypes into developer-friendly
                    HTML and CSS code, or directly into React, Preact, Gatsby,
                    Vue, Next, Angular, or Stencil.
                  </Text>
                  <Button className="bg-gray_900 cursor-pointer font-black font-inter min-w-[256px] mt-[37px] pl-[32px] pr-[32.3px] sm:px-[20px] py-[20px] rounded-[32px] text-[16px] text-center text-white_A700 tracking-[0.16px] w-[auto]">
                    Get the plugin. It&#39;s Free!
                  </Button>
                </div>
                <Img
                  src="images/img_group2024171500wpng.png"
                  className="h-[457px] sm:h-[auto] object-cover md:w-[100%] w-[55%]"
                  alt="group2024171500"
                />
              </div>
              <header className="absolute bg-white_A700 flex flex-col inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:ml-[0] mx-[381px] sm:px-[20px] px-[24px] w-[61%]">
                  <div className="header-row my-[21px]">
                    <Img
                      src="images/img_teleportlogodarktextsvg.svg"
                      className="h-[37px] w-[144px]"
                      alt="teleportlogodar"
                    />
                    <div className="mobile-menu">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:hidden items-center justify-start self-stretch w-[auto]">
                    <ul className="flex flex-row sm:hidden items-center justify-start sm:pr-[20px] pr-[35px] w-[61%] common-row-list">
                      <li className="sm:w-[100%] sm:my-[10px] w-[27%]">
                        <div className="flex flex-row items-center justify-evenly py-[30px]">
                          <a
                            className="cursor-pointer font-medium text-[14px] text-gray_901 text-left w-[auto]"
                            href="javascript:"
                          >
                            Product
                          </a>
                          <Img
                            src="images/img_frame12.svg"
                            className="h-[16px] w-[16px]"
                            alt="frameTwelve"
                          />
                        </div>
                      </li>
                      <li className="ml-[32px] sm:w-[100%] sm:my-[10px] w-[33%]">
                        <div className="flex flex-row items-center justify-center py-[30px]">
                          <a
                            className="cursor-pointer font-medium text-[14px] text-gray_901 text-left w-[auto]"
                            href="javascript:"
                          >
                            Resources
                          </a>
                          <Img
                            src="images/img_frame12.svg"
                            className="h-[16px] ml-[3px] w-[16px]"
                            alt="frameThirteen"
                          />
                        </div>
                      </li>
                      <li className="mt-[31px] mb-[30px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          className="cursor-pointer font-medium text-[14px] text-gray_901 text-left"
                          href="javascript:"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                      <Button className="bg-gray_300 cursor-pointer font-medium min-w-[69px] pb-[8.69px] pl-[16px] pr-[15.36px] pt-[7px] rounded-[2px] text-[14px] text-center text-gray_901 w-[auto]">
                        Login
                      </Button>
                      <Button className="bg-deep_purple_A200 cursor-pointer font-medium min-w-[121px] pb-[8.69px] pl-[16px] pr-[15.53px] pt-[7px] rounded-[2px] text-[14px] text-center text-white_A700 w-[auto]">
                        Start for free
                      </Button>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="flex font-inter items-center justify-center p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[69px] items-center justify-start sm:px-[20px] md:px-[40px] px-[55px] md:w-[100%] w-[64%]">
                <div className="flex flex-col gap-[20px] items-center justify-start pl-[3.59px] pr-[3.39px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-inter leading-[48.00px] md:max-w-[100%] max-w-[992px] text-center text-gray_900"
                    as="h2"
                    variant="h2"
                  >
                    Code instantly generated for your preferred development
                    environment
                  </Text>
                  <Text
                    className="font-normal font-sourcesanspro leading-[24.00px] md:max-w-[100%] max-w-[669px] not-italic text-center text-gray_900_cc"
                    variant="body2"
                  >
                    Copy element layers from Figma to TeleportHQ and instantly
                    generate code for React, Preact, Gatsby, Vue, Next, Angular,
                    Stencil and plain HTML and CSS.Our Figma plugin offers a
                    smooth transition from prototype or design to a clean code
                    export.
                  </Text>
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[80%]">
                  <div className="md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col gap-[20px] items-center justify-start sm:px-[20px] px-[33px] w-[100%]">
                      <Img
                        src="images/img_f2200hpng.png"
                        className="h-[34px] md:h-[auto] object-cover sm:w-[100%] w-[30%]"
                        alt="f2200hpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to React
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[12px] items-center justify-start sm:px-[20px] px-[24px] w-[100%]">
                      <Img
                        src="images/img_f4200wpng.png"
                        className="h-[42px] md:h-[auto] object-cover sm:w-[100%] w-[27%]"
                        alt="f4200wpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to Angular
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[14px] items-center justify-start sm:px-[20px] px-[27px] w-[100%]">
                      <Img
                        src="images/img_f1200hpng.png"
                        className="h-[40px] md:h-[auto] object-cover w-[40px]"
                        alt="f1200hpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to Gatsby
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[14px] items-center justify-start sm:px-[20px] px-[29px] w-[100%]">
                      <Img
                        src="images/img_f3200hpng.png"
                        className="h-[40px] md:h-[auto] object-cover w-[40px]"
                        alt="f3200hpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to Stencil
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[14px] items-center justify-start sm:px-[20px] px-[36px] w-[100%]">
                      <Img
                        src="images/img_music.svg"
                        className="h-[40px] w-[40px]"
                        alt="music"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to Next
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[21px] items-center justify-start sm:px-[20px] px-[40px] w-[100%]">
                      <Img
                        src="images/img_f6200hpng.png"
                        className="h-[33px] md:h-[auto] object-cover sm:w-[100%] w-[34%]"
                        alt="f6200hpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to Vue
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[8px] items-center justify-start sm:px-[20px] px-[30px] w-[100%]">
                      <Img
                        src="images/img_f7200wpng.png"
                        className="h-[46px] md:h-[auto] object-cover sm:w-[100%] w-[29%]"
                        alt="f7200wpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to Preact
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[20px] items-center justify-start px-[3px] w-[100%]">
                      <Img
                        src="images/img_f2200hpng.png"
                        className="h-[34px] md:h-[auto] object-cover sm:w-[100%] w-[21%]"
                        alt="f2200hpng"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Export to React Native
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_900_0c flex font-roboto items-center justify-center p-[82px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[55px] items-center justify-start max-w-[1158px] mx-[auto] sm:px-[20px] px-[24px] w-[100%]">
                <div className="flex md:flex-1 items-center justify-start rounded-[8px] md:w-[100%] w-[55%]">
                  <div className="bg-black_900 flex items-start justify-start rounded-[8px] self-stretch md:w-[100%] w-[auto]">
                    <div className="bg-black_900 flex items-center justify-start rounded-[8px] w-[100%]">
                      <div className="h-[344px] relative rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_div22.png"
                          className="h-[344px] m-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="divTwentyTwo"
                        />
                        <Img
                          src="images/img_youtube.svg"
                          className="absolute h-[48px] inset-[0] justify-center m-[auto] w-[auto]"
                          alt="youtube"
                        />
                        <div className="absolute bg-gray_900_cc1 bottom-[1%] flex items-center justify-start left-[0] py-[15px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[2px] self-stretch w-[auto]">
                          <div className="flex flex-row gap-[9.05px] items-start justify-start px-[12px] self-stretch w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              Watch on
                            </Text>
                            <Img
                              src="images/img_signal.svg"
                              className="h-[16px] w-[72px]"
                              alt="signal"
                            />
                          </div>
                        </div>
                        <div className="absolute sm:h-[130px] h-[99px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <Img
                            src="images/img_div24.png"
                            className="h-[99px] m-[auto] object-cover w-[100%]"
                            alt="divTwentyFour"
                          />
                          <div className="absolute flex sm:flex-col flex-row gap-[10px] inset-x-[0] items-center justify-between mx-[auto] pr-[10px] self-stretch top-[0] w-[auto]">
                            <div className="h-[60px] relative sm:w-[100%] w-[91%]">
                              <div className="absolute flex h-[100%] inset-[0] items-center justify-start m-[auto] w-[100%]">
                                <div className="flex items-start justify-start pb-[15.8px] sm:pl-[20px] md:pl-[40px] pl-[50px] pt-[21px] w-[100%]">
                                  <div className="flex items-center justify-start pt-[2px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_200 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Figma to HTML and CSS export | Create a
                                      responsive website from Figma to code
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[5%] flex h-[50px] items-center justify-start left-[0] p-[5px] rounded-[50%] w-[50px]">
                                <Img
                                  src="images/img_photoimageofteleporthq.png"
                                  className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                                  alt="photoimageoftel"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[-1px] items-center justify-start pt-[6px] self-stretch w-[auto]">
                              <Img
                                src="images/img_reply.svg"
                                className="h-[36px] w-[36px]"
                                alt="reply"
                              />
                              <div className="flex items-start justify-start pb-[0.19px] pl-[5.94px] pr-[5.06px] self-stretch w-[auto]">
                                <Text
                                  className="font-medium text-center text-gray_200 w-[auto]"
                                  variant="body3"
                                >
                                  Share
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter gap-[22px] items-start justify-end py-[20px] md:w-[100%] w-[41%]">
                  <Text
                    className="leading-[48.00px] mt-[6px] text-gray_900 text-left sm:w-[100%] w-[94%]"
                    as="h2"
                    variant="h2"
                  >
                    How to export Figma to HTML & CSS (Video tutorial)
                  </Text>
                  <div className="flex font-sourcesanspro items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[24.00px] not-italic text-gray_900_cc text-left"
                      variant="body2"
                    >
                      <>
                        Watch this short video tutorial on how to convert Figma
                        design to HTML and CSS. Follow these easy steps and you
                        will be ready to export a Figma design in no time.
                        <br />
                        Generate code in 9 different JavaScript frameworks
                        including React, Angular or Vue using TeleportHQ.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start p-[82px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[54px] items-center justify-start max-w-[1158px] mx-[auto] sm:px-[20px] px-[24px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[41%]">
                  <div className="flex font-inter items-start justify-start pr-[6px] py-[6px] md:w-[100%] w-[auto]">
                    <Text
                      className="leading-[48.00px] text-black_900 text-left sm:w-[100%] w-[95%]"
                      as="h2"
                      variant="h2"
                    ></Text>
                  </div>
                  <Text
                    className="font-normal font-sourcesanspro leading-[26.00px] mt-[13px] not-italic text-gray_900_cc text-left w-[100%]"
                    variant="body2"
                  >
                    Our Figma export plugin offers a straightforward approach to
                    converting Figma designs to HTML and CSS with the main focus
                    on the designer-developer hand-off.
                  </Text>
                  <div className="flex flex-col font-inter gap-[23px] items-start justify-start mt-[34px] self-stretch sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[15px] items-start justify-start pb-[0.5px] pr-[2.34px] self-stretch w-[auto]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark"
                      />
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Instant code generation
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start pb-[0.5px] pr-[4.66px] self-stretch w-[auto]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark_One"
                      />
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body2"
                      >
                        Assets inventory
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start pb-[0.5px] pr-[6.28px] self-stretch w-[auto]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark_Two"
                      />
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Export to CodeSandbox
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start pb-[0.5px] pr-[11.3px] self-stretch w-[auto]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Export to TeleportHQ from Figma
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start pb-[0.5px] pr-[10px] self-stretch sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark_Four"
                      />
                      <Text
                        className="font-bold text-gray_902 text-left w-[auto]"
                        variant="body1"
                      >
                        Deploy your project as a website to Vercel
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_publish1500wpng.png"
                  className="md:flex-1 h-[405px] sm:h-[auto] object-cover md:w-[100%] w-[55%]"
                  alt="publish1500wpng"
                />
              </div>
            </div>
            <div className="bg-blue_700 font-inter h-[422px] md:px-[20px] relative w-[100%]">
              <div className="h-[422px] m-[auto] w-[100%]">
                <Img
                  src="images/img_div40.png"
                  className="absolute h-[422px] inset-y-[0] my-[auto] object-cover right-[0] w-[76%]"
                  alt="divForty"
                />
                <Img
                  src="images/img_div41.png"
                  className="absolute h-[422px] inset-y-[0] left-[0] my-[auto] object-cover w-[33%]"
                  alt="divFortyOne"
                />
              </div>
              <div className="absolute flex flex-col gap-[32px] h-[max-content] inset-[0] items-center justify-center m-[auto] px-[190px] sm:px-[20px] md:px-[40px] w-[61%]">
                <div className="flex flex-col gap-[28px] items-center justify-end p-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-inter leading-[48.00px] mt-[4px] text-center text-white_A700 sm:w-[100%] w-[95%]"
                    as="h2"
                    variant="h2"
                  >
                    TeleportHQ is now available for Figma and helps you export
                    to HTML and CSS
                  </Text>
                  <Text
                    className="font-normal font-sourcesanspro leading-[24.00px] not-italic text-center text-white_A700_cc sm:w-[100%] w-[68%]"
                    variant="body2"
                  >
                    Create a free account to find out why TeleportHQ is the best
                    website builder for developers. The free plan includes 10
                    projects and free hosting.
                  </Text>
                </div>
                <Button className="bg-gray_900 cursor-pointer font-black min-w-[256px] pl-[32px] pr-[32.3px] sm:px-[20px] py-[16px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[0.16px] w-[auto]">
                  Get the plugin. It&#39;s Free!
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-start p-[82px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[62px] items-center justify-start max-w-[1158px] mx-[auto] sm:px-[20px] px-[24px] w-[100%]">
                <div className="flex flex-col gap-[21px] items-center justify-end p-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-inter mt-[3px] text-center text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    How to export your Figma design to HTML code?
                  </Text>
                  <Text
                    className="font-normal font-sourcesanspro leading-[24.00px] not-italic text-center text-gray_900_cc sm:w-[100%] w-[67%]"
                    variant="body2"
                  >
                    In order to export your work from Figma you first need to
                    install TeleportHQ Design to Code. Once you have the plugin
                    installed you are ready to convert any Figma design to HTML
                    by following 4 simple steps.
                  </Text>
                </div>
                <List
                  className="flex-col md:gap-[40px] gap-[61px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_div48.svg"
                      className="h-[329px] w-[auto]"
                      alt="divFortyEight"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[54px] items-start justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold font-inter text-blue_701 text-left uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          STEP 1
                        </Text>
                        <Text
                          className="font-inter mt-[29px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Launch the plugin
                        </Text>
                        <Text
                          className="font-normal font-sourcesanspro mt-[12px] not-italic text-gray_900_cc text-left w-[auto]"
                          variant="body2"
                        >
                          Launch the Figma export plugin by following this
                          steps:
                        </Text>
                        <Text
                          className="font-normal font-sourcesanspro mt-[11px] not-italic text-gray_900_cc text-left w-[auto]"
                          variant="body2"
                        >
                          {"Right click > Plugins > TeleportHQ Design to Code"}
                        </Text>
                        <Button className="bg-gray_900 cursor-pointer font-extrabold font-inter min-w-[216px] mt-[35px] pl-[25px] pr-[24.27px] sm:px-[20px] py-[12px] rounded-[24px] text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]">
                          Get the plugin. It&#39;s Free!
                        </Button>
                      </div>
                      <Img
                        src="images/img_figmaexportstep11500wpng.png"
                        className="h-[329px] sm:h-[auto] md:mt-[0] mt-[8px] object-cover md:w-[100%] w-[auto]"
                        alt="figmaexportstep"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_div48.svg"
                      className="h-[329px] w-[auto]"
                      alt="divFiftyThree"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[54px] items-start justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-inter font-normal not-italic text-blue_701 text-left uppercase w-[auto]"
                          variant="body1"
                        >
                          step 2
                        </Text>
                        <Text
                          className="font-inter mt-[29px] text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Select your frame
                        </Text>
                        <Text
                          className="font-normal font-sourcesanspro mt-[11px] not-italic text-gray_900_cc text-left w-[auto]"
                          variant="body2"
                        >
                          Launch the Figma export plugin by following this
                          steps:
                        </Text>
                        <Text
                          className="font-normal font-sourcesanspro mt-[11px] not-italic text-gray_900_cc text-left w-[auto]"
                          variant="body2"
                        >
                          {"Right click > Plugins > TeleportHQ Design to Code"}
                        </Text>
                      </div>
                      <Img
                        src="images/img_figmaexportstep21500wpng.png"
                        className="h-[329px] sm:h-[auto] md:mt-[0] mt-[8px] object-cover md:w-[100%] w-[auto]"
                        alt="figmaexportstep"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_div48.svg"
                      className="h-[329px] w-[auto]"
                      alt="divFiftyEight"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[54px] items-start justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-inter font-normal not-italic text-blue_701 text-left uppercase w-[auto]"
                          variant="body1"
                        >
                          step 3
                        </Text>
                        <Text
                          className="font-inter mt-[29px] text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Export your design
                        </Text>
                        <Text
                          className="font-normal font-sourcesanspro leading-[24.00px] mt-[10px] not-italic text-gray_900_cc text-left sm:w-[100%] w-[99%]"
                          variant="body2"
                        >
                          To convert a Figma design to code, click on the button
                          “Export to TeleportHQ” and a project will be created
                          automatically in TeleportHQ with the output.
                        </Text>
                        <Text
                          className="font-normal font-sourcesanspro leading-[24.00px] mt-[12px] not-italic text-gray_900_cc text-left sm:w-[100%] w-[99%]"
                          variant="body2"
                        >
                          If you’re updating existing projects, use the button
                          &quot;Copy Layers to Clipboard&quot; to copy and then
                          paste in your existing TeleportHQ project.
                        </Text>
                      </div>
                      <Img
                        src="images/img_figmaexportstep31500wpng.png"
                        className="h-[329px] sm:h-[auto] md:mt-[0] mt-[8px] object-cover md:w-[100%] w-[auto]"
                        alt="figmaexportstep"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-gradient  h-[907px] pt-[82px] md:px-[20px] px-[82px] relative w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[-327px] mt-[auto] mx-[auto] sm:px-[20px] px-[24px] w-[61%] z-[1]">
                <div className="flex flex-col gap-[28px] items-center justify-end p-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-inter leading-[48.00px] mt-[4px] text-center text-white_A700 sm:w-[100%] w-[97%]"
                    as="h2"
                    variant="h2"
                  >
                    Export any Figma frames to HTML and CSS and validate your
                    designs in minutes
                  </Text>
                  <Text
                    className="font-normal font-sourcesanspro leading-[24.00px] not-italic text-center text-white_A700_cc sm:w-[100%] w-[70%]"
                    variant="body2"
                  >
                    TeleportHQ simplifies the designer-developers process by
                    allowing you to quickly export HTML, CSS, or import figma to
                    React, Vue or other developer-friendly supported code
                    flavours.\nAutomatically convert your design into a
                    production-ready code, for a faster developer handoff.
                  </Text>
                </div>
                <Text
                  className="font-bold font-sourcesanspro mt-[23px] text-center text-white_A700_e5 w-[auto]"
                  variant="body2"
                >
                  From Figma to Website in minutes by using TeleportHQ Design to
                  Code
                </Text>
                <Button className="bg-gray_900 cursor-pointer font-black font-inter min-w-[256px] mt-[31px] pl-[32px] pr-[32.3px] sm:px-[20px] py-[20px] rounded-[32px] text-[16px] text-center text-white_A700 tracking-[0.16px] w-[auto]">
                  Get the plugin. It&#39;s Free!
                </Button>
                <Img
                  src="images/img_image2051200wpng.png"
                  className="h-[433px] sm:h-[auto] mt-[31px] object-cover w-[100%]"
                  alt="image2051200wpn"
                />
              </div>
              <div className="bg-red_A200 h-[327px] mt-[auto] mx-[auto] w-[80%]"></div>
            </div>
          </div>
          <div className="bg-gray_901 flex flex-col font-manrope gap-[48px] items-center justify-end p-[49px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[24px] items-start justify-center max-w-[1170px] mx-[auto] w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[75%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start mb-[40px] sm:ml-[0] w-[100%]">
                  <Text
                    className="font-bold font-manrope text-left text-white_A700 tracking-[0.42px] w-[auto]"
                    variant="body3"
                  >
                    Product
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[35px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Professional website builder
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[21px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Static website builder
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[23px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Static website templates
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[22px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Low-code development
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[20px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    AI website builder
                  </Text>
                  <div className="flex flex-col font-spacegrotesk gap-[16px] items-start justify-start mt-[18px] pb-[16px] self-stretch w-[auto]">
                    <Text
                      className="font-light text-left text-white_A700_b2 w-[auto]"
                      variant="body3"
                    >
                      Code collaboration
                    </Text>
                    <Text
                      className="font-light text-left text-white_A700_b2 w-[auto]"
                      variant="body3"
                    >
                      Figma plugin
                    </Text>
                  </div>
                  <Text
                    className="font-light font-spacegrotesk mb-[17px] mt-[3px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Release notes
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:ml-[0] pb-[18px] pr-[18px] w-[100%]">
                  <Text
                    className="font-bold font-manrope text-left text-white_A700 tracking-[0.42px] w-[auto]"
                    variant="body3"
                  >
                    Solutions
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[37px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Responsive Web Design
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[22px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Responsive Prototypes
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[21px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Design to Code
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[20px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Static Website Builder
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[22px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Static Website Generator
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[22px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    React Website Generator
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[23px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Angular Site Generator
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[20px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    VUE Site Generator
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[22px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    React UI Builder
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[120px] sm:ml-[0] w-[100%]">
                  <Text
                    className="font-bold font-manrope text-left text-white_A700 tracking-[0.42px] w-[auto]"
                    variant="body3"
                  >
                    About
                  </Text>
                  <Text
                    className="common-pointer font-light font-spacegrotesk mt-[35px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                    onClick={handleNavigate3}
                  >
                    About Us
                  </Text>
                  <Text
                    className="common-pointer font-light font-spacegrotesk mt-[21px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                    onClick={handleNavigate2}
                  >
                    Careers
                  </Text>
                  <Text
                    className="common-pointer font-light font-spacegrotesk mt-[23px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                    onClick={handleNavigate1}
                  >
                    Community
                  </Text>
                  <Text
                    className="common-pointer font-light font-spacegrotesk mt-[22px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                    onClick={handleNavigate}
                  >
                    Report abuse
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mt-[20px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Terms and Policies
                  </Text>
                  <Text
                    className="font-light font-spacegrotesk mb-[17px] mt-[21px] text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Contact Us
                  </Text>
                </div>
              </List>
              <div className="flex md:flex-1 flex-col gap-[16px] md:gap-[32px] items-start justify-start md:w-[100%] w-[24%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.42px] w-[auto]"
                  variant="body3"
                >
                  Follow
                </Text>
                <div className="flex flex-row font-spacegrotesk gap-[10px] items-start justify-start pb-[16px] self-stretch w-[auto]">
                  <Img
                    src="images/img_twitter.svg"
                    className="h-[24px] w-[24px]"
                    alt="twitter"
                  />
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Twitter
                  </Text>
                </div>
                <div className="flex flex-row font-spacegrotesk gap-[10px] items-start justify-start pb-[16px] pr-[0.13px] self-stretch w-[auto]">
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-[24px] w-[24px]"
                    alt="linkedin"
                  />
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    LinkedIn
                  </Text>
                </div>
                <div className="flex flex-row font-spacegrotesk gap-[10px] items-start justify-start pb-[16px] self-stretch w-[auto]">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[24px] w-[24px]"
                    alt="lightbulb"
                  />
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Github
                  </Text>
                </div>
                <div className="flex flex-row font-spacegrotesk gap-[10px] items-start justify-start pb-[16px] self-stretch w-[auto]">
                  <Img
                    src="images/img_frame10.svg"
                    className="h-[24px] w-[24px]"
                    alt="frameTen"
                  />
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Youtube
                  </Text>
                </div>
                <div className="flex flex-row font-spacegrotesk gap-[10px] items-start justify-start pb-[16px] self-stretch w-[auto]">
                  <Img
                    src="images/img_facebook.svg"
                    className="h-[24px] w-[24px]"
                    alt="facebook"
                  />
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Facebook
                  </Text>
                </div>
                <div className="flex flex-row font-spacegrotesk gap-[7px] items-start justify-start pb-[13px] self-stretch w-[auto]">
                  <div className="flex h-[27px] items-center justify-start w-[27px]">
                    <Img
                      src="images/img_lock.svg"
                      className="h-[27px] w-[27px]"
                      alt="lock"
                    />
                  </div>
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Discord
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-spacegrotesk gap-[40px] items-center justify-start max-w-[1218px] mx-[auto] sm:px-[20px] px-[24px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[80px] items-center justify-start sm:px-[20px] px-[40px] md:w-[100%] w-[51%]">
                <Img
                  src="images/img_logoue200hpng.png"
                  className="h-[100px] md:h-[auto] object-cover sm:w-[100%] w-[25%]"
                  alt="logoue200hpng"
                />
                <Img
                  src="images/img_logoguvernulromaniei200hpng.png"
                  className="h-[100px] md:h-[auto] object-cover w-[100px]"
                  alt="logoguvernulrom"
                />
                <Img
                  src="images/img_logo20is20142020200hpng.png"
                  className="h-[100px] md:h-[auto] object-cover sm:w-[100%] w-[25%]"
                  alt="logo20is2014202"
                />
              </div>
              <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Competitivi Împreună
                  </Text>
                  <Text
                    className="font-light leading-[21.00px] mt-[23px] text-center text-white_A700_b2 w-[100%]"
                    variant="body3"
                  >
                    Dezvoltarea produsului TIC Unicornspace, instrument de
                    prototipare, design vizual și generator de cod cu
                    aplicabilitate în sectoarele industrii creative, sănătate și
                    tic pentru integrarea pe verticală a solutiilor TIC
                  </Text>
                  <Text
                    className="font-light mt-[25px] text-center text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Pentru informații detaliate despre celelalte programe
                    cofinanțate de Uniunea Europeană, vă invităm să vizitați
                  </Text>
                  <Text
                    className="common-pointer font-bold text-center text-white_A700_b2 w-[auto]"
                    variant="body3"
                    onClick={handleNavigate4}
                  >
                    www.fonduri-ue.ro
                  </Text>
                  <Text
                    className="font-light mb-[19px] mt-[25px] text-center text-white_A700_b2 w-[auto]"
                    variant="body3"
                  >
                    Conținutul acestui material nu reprezintă în mod obligatoriu
                    poziția oficială a Uniunii Europene sau a Guvernului
                    României.
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-end justify-end sm:px-[20px] px-[403px] md:px-[40px] w-[100%]">
                  <Img
                    src="images/img_teleportlogowhitetextsvgsvg.svg"
                    className="h-[27px] w-[auto]"
                    alt="teleportlogowhi"
                  />
                  <Text
                    className="font-light my-[4px] text-gray_400 text-left w-[auto]"
                    variant="body3"
                  >
                    Copyright © TeleportHQ - 2022
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoTwoPage;
