import "./rightSect.css";
import "./gondol.jpg";

const RightSect = () => {
  return (
    <div className="RightSect">
      <div className="box-R1">
        <div className="R1-img"></div>
        <div className="r-content">
          <h3>My Name</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            mollitia libero veniam. Accusantium quos dolore deserunt
            exercitationem consectetur hic omnis.
          </p>
        </div>
      </div>
      <div className="box-R2">
        <div className="r-heading">
          <h6>Popular Posts</h6>
        </div>
        <div className="r-list">
          <ul>
            <li>
              <div className="r-img1"></div>
              <div>
                <p>Lorem</p>
                <p>Sed mattis nunc</p>
              </div>
            </li>
            <hr />
            <li>
              <div className="r-img2"></div>
              <div>
                <p>Ipsum</p>
                <p>Praes tinci sed</p>
              </div>
            </li>
            <hr />
            <li>
              <div className="r-img3"></div>
              <div>
                <p>Dorum</p>
                <p>Ultricies congue</p>
              </div>
            </li>
            <hr />
            <li>
              <div className="r-img4"></div>
              <div>
                <p>Mingsum</p>
                <p>Lorem ipsum dipsum</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-R3">
        <div className="r-heading">
           <h6>Tags</h6>
        </div>
        <div className="tags">
            <span id="activeSpan" className="spanText">New York</span>
            <span className="spanText">Travel</span>
            <span className="spanText">London</span>
            <span className="spanText">IKEA</span>
            <span className="spanText">NORWAY</span>
            <span className="spanText">DIY</span>
            <span className="spanText">Ideas</span>
            <span className="spanText">Ideas</span>
            <span className="spanText">Ideas</span>
            <span className="spanText">Ideas</span>
            <span className="spanText">Ideas</span>
            <span className="spanText">Ideas</span>
        </div>
      </div>
    </div>
  );
};

export default RightSect;
