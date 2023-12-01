import f1 from '../../assets/images/f1.svg';
import f2 from '../../assets/images/f2.svg';
import f3 from '../../assets/images/f3.svg';
import fc from '../../assets/images/fc.svg';
import insta from '../../assets/images/instagram-167-svgrepo-com.svg';
import yt from '../../assets/images/youtube.svg';
import wp from '../../assets/images/whatsapp.svg';
import React from 'react';

interface FooterProps {
  bgColor: string,
  textColor?: string
};

const Footer: React.FC<FooterProps> = ({ bgColor, textColor }) => {
  return (
    <footer className="footer" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="columns">
          <div className='col'>
            <img src={f1} alt="" className='col-img' />
            <h2 className='title' style={{ color: textColor }}>Fəaliyyətimiz</h2>
            <ul className='product-list' style={{ color: textColor }}>
              <li>Məhsullarımız</li>
              <li>Biz alırıq</li>
              <li>Cihazlar</li>
            </ul>
          </div>
          <div className='col'>
            <img src={f2} alt="" className='col-img' />
            <h2 className='title' style={{ color: textColor }}>Bizimlə əlaqə</h2>
            <ul className='contact-list' style={{ color: textColor }}>
              <li>+994 12 222 22 22</li>
              <li>info@plast.az</li>
            </ul>
            <div className="social-medias">
              <img src={fc} alt="" />
              <img src={insta} alt="" />
              <img src={yt} alt="" />
              <img src={wp} alt="" />
            </div>
          </div>
          <div className='col'>
            <img src={f3} alt="" className='col-img' />
            <h2 className='title' style={{ color: textColor }}>Bizim Məkan</h2>
            <p className='footer-desc' style={{ color: textColor }}>Bakı şəhəri, Fikrət Əmirov 24, Perron Gallery 2-ci mərtəbə.( 28 may metro stansiyasının yanı)</p>
          </div>
        </div>
      </div>
      <div className="copy-right" style={{ color: textColor }}>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              Copyright © 2021 <span style={{ color: textColor }}>PLAST</span>. Bütün hüquqlar qorunur.
            </div>
            <div>
              Developed by <span style={{ color: textColor }}>Crocusoft LLC.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer