import React from "react";
import FooterImg from "../../assets/logo-footer.png";
import FooterBg from "../../assets/bg-shadow.png";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
   <>
   <Subscribe></Subscribe>
    <div className="min-h-[60vh] bg-[#06091A] ">
      <div className="flex justify-center items-center">
        <img className="mx-auto mt-36" src={FooterImg} alt="" />
      </div>
      <div className="text-white flex justify-around items-center mt-16">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-white/60">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="text-white/60">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2  className="text-lg font-semibold">Subscribe</h2>
          <p>Subscribe to our newsletter for the <br /> latest updates.</p>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter your email
              </div>
            </div>
            <button className="btn bg-gradient-to-r from-yellow-300 to-pink-300 join-item">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Footer;
