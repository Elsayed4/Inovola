import './Markapp.scss';
import kamra from './../../assets/images/kumra.png';
import star from './../../assets/icons/star.svg';
import { FiChevronLeft } from 'react-icons/fi';
import {useState} from 'react';
function Markapp() {
    const [data,setdata] = useState([
        {
         id:1,
         name:"عمر ابراهيم",
         title:" نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الامثل اللذي يمكنك من رفع مبيعاتك"
        },
        {
            id:1,
            name:"عمر ابراهيم",
            title:" نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الامثل اللذي يمكنك من رفع مبيعاتك"
   
        },
        {
            id:2,
            name:"عمر ابراهيم",
            title:" نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الامثل اللذي يمكنك من رفع مبيعاتك"
   
        },
        {
            id:3,
            name:"عمر ابراهيم",
            title:" نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الامثل اللذي يمكنك من رفع مبيعاتك"
   
        }
    ])
    return (
    <section className="Markapp" id="NewApps">
      <div className="container">
         <div className="text-center mb-5">
           <h3>التطبيقات المميزة</h3>
           <p >تطبيقات تقدم حلول و خدمات مميزة نوصي بتجربتها</p>
         </div>
         <div className="row">
          {
              data.map((d,index) =>(

                <div className="col-sm-3">
                <div class="card">
                <div class="card-body">
                <div className="row">
                <div className="col-3">
                  <img src={kamra} className="img-fluid" />
                </div>
                <div className="col-9">
                  <h5 class="card-title"><span>قمرة</span> <img src={star} /> <small className="text-success">5</small></h5>
                  <h6 class="card-subtitle mb-2 ">
                  <small>تطوير : <span className="text-muted">{d.name}</span>
                  </small></h6>
                  <p class="card-text"><small>
                    {d.title}
                  </small>
                  </p>
                </div>
                </div>
                </div>
              </div>
                </div>
            
              ))
           
          }
           </div>
           <div className="text-center pt-5">
              <a href="#" className="text-decoration-none">جميع التطبيقات <FiChevronLeft></FiChevronLeft>
            </a>
           </div>
      </div>
    </section>
  );
}

export default Markapp;
