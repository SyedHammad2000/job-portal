import { Container, Heading } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import React, { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "@/components/appContext/ApplicationContext";
import { Typewriter } from "react-simple-typewriter";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import job1 from "@/assets/job1.jpg";
import job2 from "@/assets/job2.jpg";
import job3 from "@/assets/job3.jpg";
import bg from "@/assets/background.jpg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { Settoken, tokens } = useContext(ApplicationContext);
  const [User, setUser] = useState();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, []);
  console.log(tokens, "token index page");
  console.log(User, "user data index page");
  return (
    <>
      <Container
        minH={"100vh"}
        maxW={"100%"}
        bg={"#FFF4EA"}
        centerContent
        gap={5}
        pb={"2px"}
        backgroundImage={`url(${bg.src})`}
        backgroundSize={("cover", "100% 100%")}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        p={5}
        flexWrap={"wrap"}
        className="font-poppins"
      >
        <Heading>
          <Typewriter
            loop
            words={[
              "Welcome To Job Portal",
              `${User ? `${User?.name}` : `Login Please`}`,
            ]}
            cursor
          />
        </Heading>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {/* <Image
            src={job1}
            alt="image1"
            width={1000}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            src={job2}
            alt="image1"
            width={1000}
            height={700}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            src={job3}
            alt="image1"
            width={1000}
            height={1000}
            style={{
              width: "100%",
              height: "100%",
            }}
          /> */}
        </Carousel>
      </Container>
    </>
  );
}
