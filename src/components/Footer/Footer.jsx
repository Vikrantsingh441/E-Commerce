import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam remaperiam,
            eaque ipsa quae ab illo inventore veritatis etquasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <span className="text">
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala,
              688006
            </span>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <span className="text">Phone: 8279802351</span>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <span className="text">Email: Singvikrant21@gmail.com</span>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>{" "}
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectorss </span>
        </div>
        <div className="col">
          <div className="title">Pages</div>

          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text"> VZKYSTORE 2022 CREATED BY VIKRANT.</div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
