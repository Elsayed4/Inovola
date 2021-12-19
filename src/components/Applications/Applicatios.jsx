
import './Applicatios.scss';

import Categories from './../Categories/Categories';
import Btn from './../Btn/Btn';

import hand from './../../assets/icons/features/hand.svg';
import chat from './../../assets/icons/features/chat.svg';
import mail from './../../assets/icons/features/mail.svg';

function Applicatios() {
  return (
    <section className="Applicatios" id="ApplicatiosId">
      <div className="container ">
        <div className="row">
        <div className="col-sm-6">
            <div className="Applicatios-data">
              <h3>كل ما تحتاجه لنمو متجرك ف مكان واحد</h3>
              <p>مميزات سوق تطبيقات زد تساعدك ف سهوله و سرعه الإستفادة من خدمات و حلول سوق التطبيقات لنمو متجرك و مضتعفه أرباحك</p>
              <ul>
                <li className="mb-5"><img src={mail} /> سهوله واداره تفعيل تطبيقات من نفس لوحه متجرك</li>
                <li className="mb-5"><img src={chat} /> دعم فني وتقني متكامل متوفر عل مدار الساعه</li>
                <li className="mb-5"><img src={hand} /> اسعار تنافسيه مع تجربه مجانيه وباقات اشتراك متنوعة</li>
              </ul>
              <Btn />
              </div>
        </div>
          <div className="col-sm-6 py-3">
           <Categories />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applicatios;
