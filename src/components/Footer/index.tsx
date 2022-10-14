import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Follow,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
            <Follow>Follow Us Here</Follow>
            <FooterContainer>
              <SocialLink
                href="https://twitter.com/techkriti_iitk?lang=en"
                src="Twitter.svg"
                
              />
              <SocialLink
                href="https://www.facebook.com/techkriti.iitk/"
                src="FB-icon.svg"
              />
              <SocialLink
                href="https://www.youtube.com/c/TechkritiIITKanpur"
                src="Youtube.svg"
              />
              <SocialLink
                href="https://www.instagram.com/techkriti.iitk/"
                src="newinsta.svg"
              />
              {/* <a href="https://www.buymeacoffee.com/adrinlol">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=adrinlol&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                  alt="Buy me a pizza"
                />
              </a> */}
            </FooterContainer>
          {/* </Row>
        </Container>
      </Extra> */}
    </>
  );
};

export default withTranslation()(Footer);
