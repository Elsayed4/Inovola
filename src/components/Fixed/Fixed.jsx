import {useState} from 'react';
import './Fixed.scss';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {HiChatAlt2} from 'react-icons/hi';

function Fixed() {
 
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 250){
        setVisible(true)
      } 
      else if (scrolled <= 250){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);  
    
  return (
    <>
     <section className="Fixed">
        <a href="#"><AiOutlineArrowUp  className="AiOutlineArrowUp" onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}}></AiOutlineArrowUp></a>
        <a href="#"><HiChatAlt2 className="HiChatAlt2"></HiChatAlt2></a>
      </section>  
    </>
  );
}

export default Fixed;
