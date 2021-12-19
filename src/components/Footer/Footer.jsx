import './../../assets/styles/main.scss';
import './Footer.scss';
import zidlogowhite from'./../../assets/images/zid-logo-white.png';
import youtubeIcon from'./../../assets/icons/social/youtube.svg';
import linkedinIcon from'./../../assets/icons/social/linkedin.svg';
import instaIcon from'./../../assets/icons/social/insta.svg';
import twitterIcon from'./../../assets/icons/social/twitter.svg';

function Footer() {
    return (
      <footer className="footer">
       <div className="container">
         <div className="row">
           <div className="col-sm-12 text-center">
              <div className="footer-top">
                <img src={zidlogowhite} className="img-fluid" />
              </div>
              <ul className="footer-socialIcons my-3">
                <li><img src={youtubeIcon} /></li>
                <li><img src={linkedinIcon} /></li>
                <li><img src={instaIcon} /></li>
                <li><img src={twitterIcon} /></li>
              </ul>
         </div>
       </div></div>
      </footer>
    );
  }
  
  export default Footer;
  