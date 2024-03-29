import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import diet from "../../Images/dietapp.png";
import gmail from "../../Images/gmailapp.png";
import ecom from "../../Images/ecommerceapp.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Portfolio</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={ecom} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">E-Commerce Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Shopify</div>
            <div className="img-description">
              <p>
                User can filter products by Brand,Product_type,Price range using
                filter bars.{" "}
              </p>
              <p>
                Implemented this application with complete authentication system
                along with varoius roles(Admin,Client)
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/React-E-commerce-Client"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/Node-JS-E-Commerce-Server"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://muth-ecommerce-client.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img
            src="https://res.cloudinary.com/krishcloudstorage/image/upload/v1629096055/dev_setups/fxn61y48w5zfurvfoewa.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="title_heading">
            <h5 className="card-title">Blog Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Blogzoid</div>
            <div className="img-description">
              <p>
                Blog Application where the user can read, post, edit or delete
                articles. Edit and delete can only be performed by the
                respective article owner. Also, post can be categorized based on
                the tags or author
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/React-Full-stack-Blog-Application-using-MERN"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/NodeJS-Blog-Application-Server"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://muthu-blog-application.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={diet} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Diet Track Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Diet Zone</div>
            <div className="img-description">
              <p>
                Diet Track application where only logged in users access to the
                dashboard
              </p>
              <p>
                Implemented this application with complete authentication system
                along with account verification via email
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/DietZone-Application-Client"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/Diet_Application-server-"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://muthu-diet-client.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={gmail} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">GMail Clone</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">GMail-Zoid</div>
            <div className="img-description">
              <p>Authendicated User can send Email , and Read Email .</p>
              <p>
                Implemented this application with complete authentication system
                along with account verification via email
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/mkandanmk7/React-Gmail-Clone"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>

                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://gifted-perlman-5409d5.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
