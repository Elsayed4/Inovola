
import './Categories.scss';
import  zidapp from './../../assets/images/zidapp.webm';
function Categories() {
  return (
    <section className="Categories" id="CategoriesId">
      <div className="container Categories-cot">
        <div class="embed-responsive Categories-video embed-responsive-1by1 ">
         <iframe class="embed-responsive-item " src={zidapp}></iframe>
        </div>

      </div>
    </section>
  );
}

export default Categories;
