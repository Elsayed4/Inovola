import './Header.scss';
import zidlogo from './../../assets/images/zid-logo.png';
import Btn from './../Btn/Btn';
function Header() {
  return (
    <header>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
    
      <a className="navbar-brand" href="#">
       <img src={zidlogo} />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item ms-5">
            <a className="nav-link active" href="#">الرئيسية</a>
          </li>
          <li className="nav-item ms-5">
            <a className="nav-link" href="#CategoriesId">التصنيفات</a>
          </li>
          <li className="nav-item ms-5">
            <a className="nav-link" href="#ApplicatiosId">التطبيقات</a>
          </li>
          <li className="nav-item ms-5">
            <a className="nav-link" href="#NewApps">طور التطبيق</a>
          </li>
       </ul>
       </div> 
       </nav>

       <div className="text-center header-content pt-5 pb-4">
         <h2>طور متجرك ووسع أفاق تجارتك مع سوق نطبيقات زد</h2>
         <p>طور تجارتك من خلالتطبيقات و حلول زدالتي تساعدك فى نمو أرباحك عبر إدارت عمليات متجرك بشكل فعال و احترافي</p>
         <Btn />
         </div>
         
       </div>  
    </header>
    );
}

export default Header;
