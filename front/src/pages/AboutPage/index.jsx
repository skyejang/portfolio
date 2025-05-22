import React, { useEffect, useRef, useState } from "react";
import Heading from "../../components/Heading";
import TypingText from "../../components/TypingText";
import Margin from "../../components/Margin";

const ScrollIcon = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 모바일 여부 확인
    const mobileCheck = () => {
      const isMobileDevice = window.innerWidth <= 768; // 기준 너비
      setIsMobile(isMobileDevice);
    };

    // 처음 스크롤 값 확인 + 이벤트 등록
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY <= 0); // 0일 때만 보여줌
    };

    mobileCheck();
    handleScroll(); // 초기 상태 체크
    window.addEventListener("resize", mobileCheck);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", mobileCheck);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile || !show) return null;
  return (
    <div
      className={`inline-flex flex-col items-center fixed transform -translate-x-1/2 left-1/2 bottom-9 animate-bounce duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 13.3333C15 13.8856 15.4477 14.3333 16 14.3333C16.5523 14.3333 17 13.8856 17 13.3333V9.33334C17 8.78106 16.5523 8.33334 16 8.33334C15.4477 8.33334 15 8.78106 15 9.33334V13.3333Z"
          fill="#35927C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25 12.0991C25 7.67046 21.7781 3.89996 17.4037 3.20925C16.4736 3.06241 15.5264 3.06241 14.5963 3.20925C10.2219 3.89996 7 7.67046 7 12.0991V19.9009C7 24.3296 10.2219 28.1001 14.5963 28.7908C15.5264 28.9376 16.4736 28.9376 17.4037 28.7908C21.7781 28.1001 25 24.3296 25 19.9009L25 12.0991ZM17.0917 5.18478C20.4941 5.722 23 8.6546 23 12.0991L23 19.9009C23 23.3454 20.4941 26.278 17.0917 26.8152C16.3684 26.9295 15.6316 26.9295 14.9083 26.8152C11.5059 26.278 9 23.3454 9 19.9009L9 12.0991C9 8.65461 11.5059 5.722 14.9083 5.18478C15.6316 5.07057 16.3684 5.07057 17.0917 5.18478Z"
          fill="#35927C"
        />
      </svg>
      <p className="font-russo text-mgreen-500">scroll</p>
    </div>
  );
};

const AboutPage = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "Tailwind CSS",
    "Less",
    "Vue.js",
    "React.js",
    "React Native",
    "Canvas.js",
    "Responsive web",
    "Mysql",
    "PHP",
    "Laravel",
    "Node.js",
    "Express",
    "Figma",
    "Git/Github",
    "Rest API",
  ];
  const carrers = [
    {
      name: "Amorepacific Canada",
      period: "(Oct 2024 - )",
      role: "IT Assistant",
      text: "Supported laptop setup, IT asset management, and user issue resolution, ensuring seamless operations and creating IT guidelines to enhance productivity and user satisfaction.",
    },
    {
      name: "Thinkserv.",
      period: "(Freelance)",
      role: "Frontend developer",
      text: "Assembled a freelance web development team to create websites and customized admin panels. Primarily used technologies such as Node.js, Less, EJS, and Express to build responsive websites and implement management systems.",
    },
    {
      name: "Chatis",
      period: "(Mar 2022 - Dec 2022)",
      role: "Frontend developer",
      text: "Developed an e-commerce solution application using PHP Laravel, Tailwind CSS, and Vue.js, focusing on delivering robust and user-friendly online shopping experiences.",
    },
    {
      name: "Otheon",
      period: "(Dec 2020 - Nov 2021)",
      role: "Frontend developer",
      text: "Developed a marketing platform for small and medium-sized businesses using node.js and express. Managed the entire project, including project management, UI design, and frontend development for website creation.",
    },
  ];
  const educations = [
    {
      name: "Humber College",
      country: "Canada, Toronto",
      period: "Sep 2023 - Aug 2024",
      major: "Web Development",
    },
    {
      name: "Pukyoung National Univ.",
      country: "South Korea, Busan",
      period: "Mar 2015 - Aug 2020",
      major: "Business Management",
    },
  ];
  const careerRef = useRef(null);
  const openClick = (e) => {
    const target = e.currentTarget;
    if (!target) return;

    const careerText =
      target.parentElement.parentElement.querySelector(".career-text");
    if (!careerText) return;
    target.classList.toggle("open");
    careerText.classList.toggle("open");
    // setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="p-4 sm:p-9 h-full">
        <div className="w-full h-screen sm:relative page-wrap aboutPage">
          <Heading as="h1" color="mgreen" text="LET'S" />
          <TypingText text="GET TO KNOW" speed={100} pause={2500} />
          <div className="inline-flex">
            <Heading as="h1" color="mgreen" text="ABOUT" />
            <Margin dir={"horizontal"} space={"28px"} />
            <Heading as="h1" color="mgreen" text="ME" outline={true} />
          </div>

          <ScrollIcon />
        </div>
        <div className="">
          <div className="py-4 sm:py-9 w-full inline-flex justify-between">
            <div className="lg:w-1/2 lg:relative max-lg:hidden">
              <div
                className="absolute border border-mgreen-600"
                style={{ width: "60%" }}
              >
                <img src="../../images/image2.jpeg" />
              </div>
              <div
                className="absolute border border-mgreen-600 z-10 right-0 top-36"
                style={{ width: "60%" }}
              >
                <img src="../../images/image1.jpeg" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ml-9">
              <div className="">
                <div className="block text-right">
                  <Heading as="h2" color="mgreen" text="HELLO," />
                  <Heading
                    as="h2"
                    color="mgreen"
                    outline={true}
                    text="I'M SKYE"
                  />
                </div>
                <p className="mt-12 text-lg/6">
                  Hello, World! I’m Skye. I’m a frontend Developer with over 3
                  years of experience in developing web applications, focusing
                  on optimizing user experiences and streamlining internal
                  processes. Successfully contributed to various projects,
                  including responsive UI design, backend API integration, and
                  efficient IT asset management. Adept at using tools such as
                  Vue.js, Tailwind CSS, Laravel, and MySQL, I have delivered
                  solutions that have improved operational efficiency, user
                  satisfaction, and system performance.
                </p>
              </div>
              <Margin dir="vertical" space={"64px"} />
              <div className="">
                <Heading
                  as="h2"
                  color="mgreen"
                  outline={true}
                  text="TECH SKILLS"
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-2 bg-mgreen-500/15 text-mgreen-600 inline-flex font-medium rounded-full"
                      style={{
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:inline-flex md:justify-between mt-28">
            <div className="md:w-1/2 w-full">
              <div className="">
                <div className="block">
                  <Heading
                    as="h2"
                    color="mgreen"
                    outline={true}
                    text="CAREER"
                  />
                  <Margin dir="vertical" space="36px" />
                  {carrers.map((carrer, i) => (
                    <div
                      key={i}
                      className="career px-4 py-3 rounded-lg [&+.career]:mt-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-mgreen-500/15 w-10 h-10 rounded-md flex items-center justify-center mr-3">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.66663 7.28168V9.1758L7.40805 9.35811C5.81115 9.48701 4.50852 10.6894 4.2524 12.2709C4.19674 12.6146 4.14612 12.9589 4.10055 13.3037C4.07793 13.4748 4.16918 13.6404 4.32517 13.7143L4.42791 13.7629C11.6662 17.1902 20.3337 17.1902 27.572 13.7629L27.6747 13.7143C27.8307 13.6405 27.922 13.4748 27.8994 13.3037C27.8538 12.9589 27.8032 12.6146 27.7475 12.2709C27.4914 10.6894 26.1888 9.48701 24.5918 9.35811L22.3333 9.1758V7.28168C22.3333 6.12669 21.4883 5.14549 20.3461 4.97416L18.7195 4.73018C16.9166 4.45973 15.0833 4.45973 13.2804 4.73018L11.6538 4.97416C10.5116 5.14549 9.66663 6.12669 9.66663 7.28168ZM18.4229 6.70805C16.8166 6.46711 15.1833 6.46711 13.5771 6.70805L11.9505 6.95203C11.7873 6.97651 11.6666 7.11668 11.6666 7.28168V9.03503C14.5531 8.86967 17.4468 8.86967 20.3333 9.03503V7.28168C20.3333 7.11668 20.2126 6.97651 20.0494 6.95203L18.4229 6.70805Z"
                                fill="#35927C"
                              />
                              <path
                                d="M28.1577 16.0946C28.1478 15.9078 27.9522 15.7911 27.7811 15.8668C20.3532 19.1556 11.6467 19.1556 4.21878 15.8668C4.04772 15.7911 3.85214 15.9078 3.8422 16.0946C3.7065 18.6432 3.84324 21.2027 4.2524 23.7293C4.50852 25.3108 5.81114 26.5132 7.40805 26.6421L9.90394 26.8435C13.9614 27.171 18.0385 27.171 22.096 26.8435L24.5918 26.6421C26.1888 26.5132 27.4914 25.3108 27.7475 23.7293C28.1567 21.2027 28.2934 18.6432 28.1577 16.0946Z"
                                fill="#35927C"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="text-lg font-russo text-gray-600 mr-2">
                              {carrer.name}
                            </span>
                            <span className="text-base text-gray-400 italic">
                              {carrer.period}
                            </span>
                          </div>
                        </div>
                        <button
                          className="career-btn cursor-pointer"
                          ref={careerRef}
                          onClick={openClick}
                        >
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                              fill="#2B2B2B"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="career-text">
                        <p className="font-russo text-lg/5 text-gray-500 mb-3">
                          {carrer.role}
                        </p>
                        <p className="text-lg/5">{carrer.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Margin dir="vertical" space={"64px"} />
            </div>
            <div className="md:w-1/2 md:ml-9 w-full">
              <Heading as="h2" color="mgreen" outline={true} text="EDUCATION" />
              <Margin dir="vertical" space="36px" />
              <div className="grid xl:grid-cols-2 gap-3">
                {educations.map((education, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 rounded-lg border border-mgreen-500 flex items-start"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3553 3.30176C12.1119 3.23267 11.8551 3.23273 11.6116 3.30203C11.0931 3.44957 10.5697 3.58623 10.0445 3.72335C7.70087 4.33527 5.12037 5.00904 2.91292 6.81037L1.87215 7.65967C1.04221 8.33693 1.04264 9.66327 1.8733 10.3398L2.89724 11.1738C3.65371 11.79 4.44208 12.2719 5.25 12.665V17.2939C5.25 18.4272 5.94522 19.4444 7.0011 19.8561L11.0011 21.4156C11.6435 21.666 12.3565 21.666 12.9989 21.4156L16.9989 19.8561C18.0548 19.4444 18.75 18.4272 18.75 17.2939V12.6733C19.5526 12.2823 20.3357 11.8028 21.0871 11.1896L21.25 11.0567V16C21.25 16.4142 21.5858 16.75 22 16.75C22.4142 16.75 22.75 16.4142 22.75 16V9C22.7498 8.49918 22.542 7.99845 22.1267 7.66016L21.1028 6.82618C18.8793 5.01516 16.1903 4.31386 13.9192 3.72153C13.3952 3.58485 12.8729 3.44863 12.3553 3.30176ZM8.29914 12.8122C7.9193 12.647 7.47745 12.821 7.31224 13.2009C7.14704 13.5807 7.32103 14.0226 7.70087 14.1878C8.97872 14.7435 10.3015 15.1983 11.6571 15.5462C11.8933 15.6068 12.1411 15.6068 12.3773 15.5459C13.7292 15.198 15.0481 14.7432 16.3219 14.1874C16.7015 14.0217 16.875 13.5797 16.7093 13.2C16.5436 12.8204 16.1016 12.6469 15.7219 12.8126C14.5253 13.3348 13.2865 13.7623 12.0167 14.0899C10.743 13.7622 9.50004 13.3346 8.29914 12.8122Z"
                        fill="#35927C"
                      />
                    </svg>
                    <div className="ml-4">
                      <p className="text-lg font-russo text-gray-600">
                        {education.name}
                      </p>
                      <p className="text-lg text-gray-700 font-medium">
                        {education.major}
                      </p>
                      <p className="text-base/5 text-gray-400 italic">
                        {education.country}
                      </p>
                      <p className="text-base/5 text-gray-400 italic">
                        {education.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <Heading
            as="h2"
            color="mgreen"
            text="HI! I'M SKYE. LET'S GET TO KNOW ABOUT ME!"
          />
          <Heading
            as="h2"
            color="mgreen"
            text="HI! I'M SKYE. LET'S GET TO KNOW ABOUT ME!"
          />
        </div>
      </div>
    </>
  );
};
export default AboutPage;
