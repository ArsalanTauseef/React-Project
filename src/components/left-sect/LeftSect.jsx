import './left.css'

const LeftSect = () => {
  return (
    <div className="leftSect">
      <div className="box-L1">
        <div className="l1-img"></div>
        <div className='box-content'>
        <h3>TITLE HEADING</h3>
        <h5>Title description, April 7, 2014</h5>
        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <div className="l-footer">
          <button>Read More »</button>
          <h6>Comments <span>0</span></h6>
        </div>
        </div>
      </div>
      <div className="box-L2">
        <div className="l2-img"></div>
        <div className='box-content'>
        <h3>BLOG ENTRY</h3>
        <h5>Title description, April 2, 2014</h5>
        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <div className="l-footer">
          <button>Read More »</button>
          <h6>Comments
            <span> 20</span>
          </h6>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSect;
