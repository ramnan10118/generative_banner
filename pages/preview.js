import { useEffect, useState } from 'react';
import Image from 'next/image';

const BannerVariation1 = () => {
  return (
    <div className="banner-frame">
      <div className="banner-background purple-gradient"></div>
      <div className="content left-aligned">
        {/* Logo */}
        <div className="logo-container">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={227} height={75} priority />
        </div>

        {/* Heading */}
        <div className="heading-container">
          <h1 className="heading-line">
            <span className="highlight">Ride</span>
            <span className="white">secure,</span>
          </h1>
          <h1 className="heading-line">
            <span className="highlight">and</span>
            <span className="white">save</span>
          </h1>
          <h1 className="heading-line">
            <span className="highlight">more!</span>
          </h1>
        </div>

        {/* Offer Text */}
        <div className="offer-container">
          <p className="offer-text">Get up to 85% off on bike</p>
          <p className="offer-text">insurance on ACKO!</p>
        </div>

        {/* CTA Button */}
        <div className="cta-container">
          <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={486} height={137} priority />
          <span className="cta-text">Check now {'>'}</span>
        </div>

        {/* Bike Image */}
        <div className="bike-container">
          <Image src="/assets/images/bike_image.png" alt="Bike" width={1382} height={776} priority />
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-container">
          <div className="disclaimer-line"></div>
          <p className="disclaimer-text">
            Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5394 | Two Wheeler Package Policy IRDAN157RP0002V01201819
          </p>
        </div>
      </div>
    </div>
  );
};

const BannerVariation2 = () => {
  return (
    <div className="banner-frame">
      <div className="banner-background blue-gradient"></div>
      <div className="content center-aligned">
        {/* Logo */}
        <div className="logo-container centered">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={227} height={75} priority />
        </div>

        {/* Heading */}
        <div className="heading-container centered">
          <h1 className="heading-line">
            <span className="highlight-blue">Save Big</span>
          </h1>
          <h1 className="heading-line">
            <span className="white">on bike insurance</span>
          </h1>
        </div>

        {/* Offer Text */}
        <div className="offer-container centered">
          <p className="offer-text">Up to 85% off exclusively on ACKO!</p>
        </div>

        {/* CTA Button */}
        <div className="cta-container centered">
          <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={486} height={137} priority />
          <span className="cta-text">Insure Now {'>'}</span>
        </div>

        {/* Bike Image */}
        <div className="bike-container centered">
          <Image src="/assets/images/bike_image.png" alt="Bike" width={1382} height={776} priority />
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-container">
          <div className="disclaimer-line"></div>
          <p className="disclaimer-text">
            Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5394
          </p>
        </div>
      </div>
    </div>
  );
};

const BannerVariation3 = () => {
  return (
    <div className="banner-frame">
      <div className="banner-background green-gradient"></div>
      <div className="content right-aligned">
        {/* Logo */}
        <div className="logo-container">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={227} height={75} priority />
        </div>

        {/* Heading */}
        <div className="heading-container">
          <h1 className="heading-line">
            <span className="highlight-green">Protection</span>
          </h1>
          <h1 className="heading-line">
            <span className="white">that doesn't</span>
          </h1>
          <h1 className="heading-line">
            <span className="highlight-green">break the bank</span>
          </h1>
        </div>

        {/* Offer Text */}
        <div className="offer-container">
          <p className="offer-text">Maximum coverage, minimum premium</p>
          <p className="offer-text">Save up to 85% today!</p>
        </div>

        {/* Bike Image */}
        <div className="bike-container top">
          <Image src="/assets/images/bike_image.png" alt="Bike" width={1382} height={776} priority />
        </div>

        {/* CTA Button */}
        <div className="cta-container">
          <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={486} height={137} priority />
          <span className="cta-text">Get Quote {'>'}</span>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-container">
          <div className="disclaimer-line"></div>
          <p className="disclaimer-text">
            T&Cs Apply | Visit www.acko.com for more details
          </p>
        </div>
      </div>
    </div>
  );
};

const MediumRectangle = () => {
  return (
    <div className="banner-frame medium-rectangle">
      <div className="banner-background purple-gradient"></div>
      <div className="content">
        {/* Logo */}
        <div className="logo-container small">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={80} height={26} priority />
        </div>

        {/* Heading */}
        <div className="heading-container compact">
          <h1 className="heading-line">
            <span className="highlight">85% Off</span>
          </h1>
          <h2 className="subheading">
            <span className="white">on bike insurance</span>
          </h2>
        </div>

        {/* CTA Button */}
        <div className="cta-container small">
          <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={120} height={34} priority />
          <span className="cta-text small">Insure Now {'>'}</span>
        </div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  return (
    <div className="banner-frame leaderboard">
      <div className="banner-background blue-gradient"></div>
      <div className="content horizontal">
        {/* Logo */}
        <div className="logo-container small">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={60} height={20} priority />
        </div>

        {/* Content Group */}
        <div className="content-group">
          <h1 className="heading-line horizontal">
            <span className="highlight-blue">Save up to 85% on Bike Insurance</span>
          </h1>
          
          {/* CTA Button */}
          <div className="cta-container small">
            <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={100} height={28} priority />
            <span className="cta-text small">Check Now {'>'}</span>
          </div>
        </div>

        {/* Bike Image */}
        <div className="bike-container small">
          <Image src="/assets/images/bike_image.png" alt="Bike" width={200} height={112} priority />
        </div>
      </div>
    </div>
  );
};

const WideSkyscraper = () => {
  return (
    <div className="banner-frame wide-skyscraper">
      <div className="banner-background green-gradient"></div>
      <div className="content vertical">
        {/* Logo */}
        <div className="logo-container small">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={100} height={33} priority />
        </div>

        {/* Bike Image */}
        <div className="bike-container small centered">
          <Image src="/assets/images/bike_image.png" alt="Bike" width={140} height={79} priority />
        </div>

        {/* Heading */}
        <div className="heading-container compact centered">
          <h1 className="heading-line">
            <span className="highlight-green">Save</span>
          </h1>
          <h1 className="heading-line">
            <span className="white">up to</span>
          </h1>
          <h1 className="heading-line large">
            <span className="highlight-green">85%</span>
          </h1>
        </div>

        {/* CTA Button */}
        <div className="cta-container small centered">
          <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={120} height={34} priority />
          <span className="cta-text small">Get Quote {'>'}</span>
        </div>
      </div>
    </div>
  );
};

const MobileBanner = () => {
  return (
    <div className="banner-frame mobile-banner">
      <div className="banner-background purple-gradient"></div>
      <div className="content horizontal compact">
        {/* Logo */}
        <div className="logo-container extra-small">
          <Image src="/assets/components/logo.svg" alt="ACKO Logo" width={40} height={13} priority />
        </div>

        {/* Content */}
        <div className="content-group mobile">
          <h1 className="heading-line mobile">
            <span className="highlight">85% Off on Bike Insurance</span>
          </h1>
        </div>

        {/* CTA Button */}
        <div className="cta-container extra-small">
          <Image src="/assets/components/cta-button.svg" alt="CTA Button" width={80} height={22} priority />
          <span className="cta-text extra-small">Buy Now {'>'}</span>
        </div>
      </div>
    </div>
  );
};

const PreviewBanner = () => {
  return (
    <div className="preview-wrapper">
      <div className="preview-container">
        <div className="section">
          <h2 className="section-title">Original Vertical Banners</h2>
          <div className="banner-group">
            <BannerVariation1 />
            <BannerVariation2 />
            <BannerVariation3 />
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Google Ads Sizes</h2>
          <div className="banner-group google-ads">
            <MediumRectangle />
            <Leaderboard />
            <WideSkyscraper />
            <MobileBanner />
          </div>
        </div>

        <style jsx global>{`
          .preview-wrapper {
            width: 100%;
            min-height: 100vh;
            overflow-y: auto;
            background: #f5f5f5;
          }

          .preview-container {
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .banner-frame {
            width: 1080px;
            height: 1920px;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .banner-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .purple-gradient {
            background: linear-gradient(135deg, rgba(158, 87, 189, 1) 0%, rgba(94, 47, 127, 1) 65.88%, rgba(85, 41, 120, 1) 93.90%);
          }

          .blue-gradient {
            background: linear-gradient(135deg, #2B32B2 0%, #1488CC 100%);
          }

          .green-gradient {
            background: linear-gradient(135deg, #134E5E 0%, #71B280 100%);
          }

          .content {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
          }

          .left-aligned {
            text-align: left;
          }

          .center-aligned {
            text-align: center;
          }

          .right-aligned {
            text-align: right;
          }

          .logo-container {
            position: absolute;
            top: 33px;
            right: 36px;
            z-index: 2;
          }

          .logo-container.centered {
            right: 50%;
            transform: translateX(50%);
          }

          .heading-container {
            position: absolute;
            top: 217px;
            left: 88px;
            z-index: 2;
          }

          .heading-container.centered {
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
          }

          .heading-line {
            font-family: 'AckoPrimary', sans-serif;
            font-size: 120px;
            line-height: 140px;
            margin: 0;
          }

          .highlight {
            color: #FFD700;
          }

          .highlight-blue {
            color: #00ffff;
          }

          .highlight-green {
            color: #98FB98;
          }

          .white {
            color: #FFFFFF;
            margin-left: 20px;
          }

          .offer-container {
            position: absolute;
            top: 727px;
            left: 88px;
            z-index: 2;
          }

          .offer-container.centered {
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
          }

          .offer-text {
            font-family: 'AckoSecondary', sans-serif;
            font-size: 64px;
            color: #FFFFFF;
            margin: 0;
            line-height: 1.2;
          }

          .cta-container {
            position: absolute;
            top: 1012px;
            left: 88px;
            z-index: 3;
          }

          .cta-container.centered {
            left: 50%;
            transform: translateX(-50%);
          }

          .cta-text {
            position: absolute;
            top: 50%;
            left: 30px;
            transform: translateY(-50%);
            color: #FFFFFF;
            font-family: 'AckoSecondary', sans-serif;
            font-size: 42px;
          }

          .bike-container {
            position: absolute;
            top: 1012px;
            left: 240px;
            z-index: 1;
          }

          .bike-container.centered {
            left: 50%;
            transform: translateX(-50%);
          }

          .bike-container.top {
            top: 512px;
          }

          .disclaimer-container {
            position: absolute;
            bottom: 92px;
            left: 48px;
            right: 48px;
            z-index: 2;
          }

          .disclaimer-line {
            width: 100%;
            height: 2px;
            background: rgba(255, 255, 255, 0.3);
            margin-bottom: 23px;
          }

          .disclaimer-text {
            font-family: 'AckoPrimary', sans-serif;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            margin: 0;
          }

          .section {
            width: 100%;
            margin: 2rem 0;
          }

          .section-title {
            font-family: 'AckoPrimary', sans-serif;
            color: #333;
            margin-bottom: 1rem;
            text-align: center;
          }

          .banner-group {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .banner-group.google-ads {
            align-items: flex-start;
          }

          /* Google Ads Sizes */
          .medium-rectangle {
            width: 300px;
            height: 250px;
          }

          .leaderboard {
            width: 728px;
            height: 90px;
          }

          .wide-skyscraper {
            width: 160px;
            height: 600px;
          }

          .mobile-banner {
            width: 320px;
            height: 50px;
          }

          /* Responsive Content Styles */
          .content.horizontal {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
          }

          .content.horizontal.compact {
            padding: 0 5px;
          }

          .content.vertical {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
          }

          .content-group {
            flex: 1;
            padding: 0 10px;
          }

          .content-group.mobile {
            padding: 0 5px;
          }

          /* Compact Components */
          .logo-container.small img {
            max-width: 100%;
            height: auto;
          }

          .logo-container.extra-small {
            position: relative;
            top: unset;
            right: unset;
          }

          .heading-container.compact {
            position: relative;
            top: unset;
            left: unset;
            text-align: center;
          }

          .heading-line.horizontal {
            font-size: 24px;
            line-height: 1.2;
            margin: 0;
          }

          .heading-line.mobile {
            font-size: 16px;
            line-height: 1;
            margin: 0;
          }

          .heading-line.large {
            font-size: 48px;
            line-height: 1;
          }

          .subheading {
            font-size: 18px;
            line-height: 1.2;
            margin: 5px 0;
          }

          .cta-container.small {
            position: relative;
            top: unset;
            left: unset;
          }

          .cta-container.extra-small {
            position: relative;
            top: unset;
            left: unset;
          }

          .cta-text.small {
            font-size: 14px;
          }

          .cta-text.extra-small {
            font-size: 12px;
          }

          .bike-container.small {
            position: relative;
            top: unset;
            left: unset;
          }

          .bike-container.small.centered {
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PreviewBanner;
