import React from 'react';
import Image from 'next/image';

const Banner3 = () => {
  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'Acko Primary';
          src: url('../assets/fonts/acko_primary.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Acko Secondary';
          src: url('../assets/fonts/acko_secondary.ttf') format('truetype');
        }

        .banner-container {
          width: 1080px;
          height: 1920px;
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(158, 87, 189, 1) 0%,
            rgba(94, 47, 127, 1) 65.88%,
            rgba(85, 41, 120, 1) 93.90%
          );
          font-family: 'Acko Primary', sans-serif;
        }

        .logo {
          position: absolute;
          top: 33px;
          right: 36px;
          width: 227px;
          height: 75px;
        }

        .main-text {
          position: absolute;
          top: 265px;
          left: 82px;
          font-size: 88px;
          font-weight: bold;
          color: #F1C911;
          line-height: 1.2;
          font-family: 'Acko Secondary', sans-serif;
        }

        .sub-text {
          position: absolute;
          top: 628px;
          left: 83px;
          font-size: 64px;
          color: white;
          line-height: 1.3;
        }

        .yellow-line {
          position: absolute;
          top: 830px;
          left: 86px;
          width: 250px;
          height: 26px;
          background: #F1C911;
        }

        .features-container {
          position: absolute;
          top: 917px;
          left: 82px;
          width: 709px;
          height: 287px;
          background: linear-gradient(
            135deg,
            rgba(66, 27, 89, 1) 0%,
            rgba(69, 29, 92, 0) 100%
          );
          padding: 40px;
          display: flex;
          justify-content: space-between;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          text-align: center;
          width: 30%;
          gap: 15px;
        }

        .feature-item span {
          font-size: 24px;
        }

        .buy-now-button {
          position: absolute;
          top: 1331px;
          left: 82px;
          width: 486px;
          height: 137px;
          background: linear-gradient(
            135deg,
            rgba(55, 109, 45, 1) 0%,
            rgba(60, 134, 64, 1) 20%,
            rgba(53, 134, 64, 1) 39%,
            rgba(49, 98, 112, 1) 100%
          );
          border: none;
          border-radius: 0;
          color: white;
          font-size: 48px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding-left: 40px;
          font-family: 'Acko Secondary', sans-serif;
        }

        .person-image {
          position: absolute;
          right: -219px;
          bottom: -115px;
          width: 725px;
          height: 1081px;
        }

        .disclaimer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 14px;
          padding: 20px;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <div className="banner-container">
        <div className="logo">
          <Image src="/assets/components/logo.svg" alt="Acko Logo" layout="fill" objectFit="contain" />
        </div>
        
        <div className="main-text">Everything<br />you want</div>
        
        <div className="sub-text">for your bike<br />insurance is here.</div>
        
        <div className="yellow-line"></div>
        
        <div className="features-container">
          <div className="feature-item">
            <Image src="/assets/components/no-paperwork.svg" alt="No paperwork" width={49} height={50} />
            <span>No paperwork</span>
          </div>
          <div className="feature-item">
            <Image src="/assets/components/no-commission.svg" alt="No commission" width={49} height={51} />
            <span>No commission</span>
          </div>
          <div className="feature-item">
            <Image src="/assets/components/support.svg" alt="24x7 customer Support" width={49} height={50} />
            <span>24x7 customer Support</span>
          </div>
        </div>
        
        <button className="buy-now-button">Buy now &gt;</button>
        
        <div className="person-image">
          <Image src="/assets/images/bike_image.png" alt="Person" layout="fill" objectFit="cover" />
        </div>
        
        <div className="disclaimer">
          Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5399 | Two Wheeler Package Policy 
          IRDAN157RP0002V01201819 for more details visit www.acko.com|*T&Cs Apply
        </div>
      </div>
    </>
  );
};

export default Banner3;
