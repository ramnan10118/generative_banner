import Canvas from './Canvas';
import { Logo, Heading, OfferText, ProductImage, CTAButton, Disclaimer } from './BannerComponents';

const BannerWorkspace = () => {
  return (
    <div className="workspace-container">
      <Canvas>
        <Logo />
        <Heading />
        <OfferText />
        <ProductImage />
        <CTAButton />
        <Disclaimer />
      </Canvas>
    </div>
  );
};

export default BannerWorkspace; 