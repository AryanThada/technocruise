import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { SvgIcon } from "../../../common/SvgIcon";
import { Fade } from "react-awesome-reveal";
import logoAnim from "./logoAnim.json"
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { FirebaseApp } from "../../../firebase";
import { useHistory } from "react-router-dom";
import {useState,useEffect} from "react"
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react'


const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const history = useHistory();
  const auth = getAuth(FirebaseApp());
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const googleprovider = new GoogleAuthProvider();
    function loginWithGoogle(){
      signInWithPopup(auth,googleprovider).then((response)=>{
        history.push("/Forms")
      }).catch((error)=>alert("Error"))     
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);     
    })
    return unsubscribe;
    },[])

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      // <Button
                      //   key={id}
                      //   color={item.color}
                      //   fixedWidth={true}
                      //   onClick={() => scrollTo("about")}
                      // >
                      //   {t(item.title)}
                      // </Button>
                      // <button onClick={loginWithGoogle()}/>
                      <button 
                        onClick={loginWithGoogle}
                        style={{background:'transparent',border:'none'}}>
                          <SvgIcon src="signin.svg" width="115%" height="110%"/></button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            {/* <SvgIcon src={icon} width="100%" height="100%" /> */}
            <Lottie animationData={logoAnim}/>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
