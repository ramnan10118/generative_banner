import { Image, Text, Group } from 'react-konva';
import useImage from 'use-image';

export const Logo = () => {
  const [logo] = useImage('/public/assets/components/logo.svg');
  return (
    <Image
      image={logo}
      x={920}
      y={40}
      width={120}
      height={40}
    />
  );
};

export const Heading = () => {
  const topBoundary = 1920 * 0.2;
  return (
    <Group y={topBoundary}>
      <Text
        text="Ride"
        x={40}
        y={0}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFD700"
        listening={false}
      />
      <Text
        text="secure,"
        x={320}
        y={0}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFFFFF"
        listening={false}
      />
      <Text
        text="and"
        x={40}
        y={140}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFD700"
        listening={false}
      />
      <Text
        text="save"
        x={320}
        y={140}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFFFFF"
        listening={false}
      />
      <Text
        text="more!"
        x={40}
        y={280}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFD700"
        listening={false}
      />
    </Group>
  );
};

export const OfferText = () => {
  const y = 1920 * 0.4;
  return (
    <Group>
      <Text
        text="Get up to 85% off on bike"
        x={40}
        y={y}
        width={756}
        fontSize={64}
        fontFamily="AckoPrimary"
        fill="#FFFFFF"
        listening={false}
      />
      <Text
        text="insurance on ACKO!"
        x={40}
        y={y + 80}
        width={756}
        fontSize={64}
        fontFamily="AckoPrimary"
        fill="#FFFFFF"
        listening={false}
      />
    </Group>
  );
};

export const ProductImage = () => {
  const [image] = useImage('/public/assets/images/bike_image.png');
  const width = 1080 * 0.6;
  return (
    <Image
      image={image}
      x={1080 - width - 40}
      y={1920 * 0.5}
      width={width}
      height={width}
      listening={false}
    />
  );
};

export const CTAButton = () => {
  const [ctaImage] = useImage('/public/assets/components/cta-button.svg');
  return (
    <Group>
      <Image
        image={ctaImage}
        x={40}
        y={1920 * 0.6}
        width={200}
        height={60}
      />
      <Text
        text="Check now >"
        x={40}
        y={1920 * 0.6 + 10}
        width={200}
        align="center"
        fontSize={36}
        fontFamily="AckoPrimary"
        fill="#FFFFFF"
        listening={false}
      />
    </Group>
  );
};

export const Disclaimer = () => {
  return (
    <Text
      text="Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5394 | Two Wheeler Package Policy IRDAN157RP0002V01201819 for more details visit www.acko.com|*T&Cs Apply"
      x={40}
      y={1840}
      width={1000}
      align="center"
      fontSize={16}
      fontFamily="AckoSecondary"
      fill="#FFFFFF"
      listening={false}
    />
  );
}; 