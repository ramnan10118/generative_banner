import React from 'react';
import Image from 'next/image';

const Banner1 = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="logo">
          <Image
            src="/assets/components/logo.svg"
            alt="Acko Logo"
            width={227}
            height={75}
            style={{ width: '227px', height: '75px' }}
          />
        </div>
        
        <div className="content">
          <h1 className="heading">
            Ride secure, and save more!
          </h1>
          
          <h2 className="subheading">
            Get up to 85% off on bike insurance on <span>ACKO!</span>
          </h2>
          
          <div className="cta-wrapper">
            <Image
              src="/assets/components/cta-button.svg"
              alt="Check now"
              width={486}
              height={137.34}
              style={{ width: '486px', height: '137.34px' }}
            />
          </div>
        </div>

        <div className="bike-image">
          <Image
            src="/assets/images/bike_image.png"
            alt="Red Motorcycle"
            width={1382}
            height={776}
            style={{ width: '1382px', height: '776px' }}
            priority
          />
        </div>

        <div className="disclaimer-wrapper">
          <div className="disclaimer-line"></div>
          <p className="disclaimer">
            Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5394 | Two Wheeler Package Policy IRDAN157RP0002V01201819 for more details visit www.acko.com|*T&Cs Apply
          </p>
        </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #000;
          display: block;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .banner-wrapper {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          aspect-ratio: 1080/1920;
          overflow: hidden;
        }

        .banner {
          background: linear-gradient(135deg, rgb(158, 87, 189) 0%, rgb(94, 47, 128) 65.88%, rgb(85, 41, 120) 93.9%);
          width: 1080px;
          height: 1920px;
          position: relative;
          transform-origin: top left;
        }

        .logo {
          position: absolute;
          top: 33px;
          left: 817px;
          width: 227px;
          height: 75px;
        }

        .content {
          position: absolute;
          left: 88px;
          top: 217px;
          width: 972px;
        }

        .heading {
          font-size: 120px;
          line-height: 1.2;
          color: #FFD700;
          margin: 0;
          font-family: 'AckoPrimary', sans-serif;
          max-width: 800px;
          white-space: wrap;
          word-break: break-word;
        }

        .heading span {
          display: inline;
        }

        .subheading {
          font-size: 64px;
          color: white;
          position: absolute;
          top: 460px;
          width: 819px;
          height: 123px;
          font-family: 'AckoSecondary', sans-serif;
        }

        .cta-wrapper {
          position: absolute;
          left: -20px;
          top: 780px;
          width: 486px;
          height: 137.34px;
        }

        .bike-image {
          position: absolute;
          left: 240px;
          top: 1012px;
          width: 1382px;
          height: 776px;
        }

        .disclaimer-wrapper {
          position: absolute;
          top: 1805px;
          left: 0;
          width: 100%;
          padding: 0;
        }

        .disclaimer-line {
          width: 985px;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          margin: 0 auto;
        }

        .disclaimer {
          color: white;
          font-size: 16px;
          text-align: center;
          margin: 23px auto 0;
          width: 1115px;
          height: 92px;
          font-family: 'AckoPrimary', sans-serif;
          opacity: 0.7;
        }

        @media (max-width: 1080px) {
          .banner {
            transform: scale(calc(100vw / 1080));
          }
          .banner-wrapper {
            height: calc(100vw * (1920/1080));
          }
        }
      `}</style>
    </div>
  );
}

export default Banner1; 