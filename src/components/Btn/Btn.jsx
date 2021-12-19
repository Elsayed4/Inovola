import './Btn.scss';
import { FiChevronLeft } from 'react-icons/fi';
function Btn() {
  return (
    <>
        <div className="text-center my-5 myBtn">
          <a href="#" className="text-decoration-none">تصفح التطبيقات <FiChevronLeft></FiChevronLeft>
          </a>
         </div>
    </>
  );
}

export default Btn;
