import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import Iot from "../../content/Iot.json";
import Java from "../../content/Java.json";
// import { CustomNavLinkSmall } from "../../components/Header/styles";
import Link from "react-router-dom";
import { Button } from "antd";


import laptopanim from "../../anims/laptop.json";
import phoneanim from "../../anims/phone.json";
import iotanim from "../../anims/iot.json";
import javaanim from "../../anims/java.json";

// const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="techkriti.svg"
        id="intro"
      />
      <h2 id="workshop" style={{textAlign:"center"}}>Workshops</h2>
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        anim={laptopanim}
        icon="techkriti.svg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section}
        anim={phoneanim}
        icon="techkriti.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={Iot.title}
        content={Iot.text}
        section={Iot.section}
        anim={iotanim}
        icon="techkriti.svg"
        id="product"
      />
      <ContentBlock
        type="left"
        title={Java.title}
        content={Java.text}
        section={Java.section}
        anim={javaanim}
        icon="techkriti.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
