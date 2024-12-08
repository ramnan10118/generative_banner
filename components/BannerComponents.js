import { Image, Text, Group, Rect } from 'react-konva';
import useImage from 'use-image';

export const Logo = () => {
  const [logo] = useImage('/assets/components/logo.svg');
  return (
    <Image
      image={logo}
      x={817}
      y={33}
      width={227}
      height={75}
    />
  );
};

export const Heading = () => {
  return (
    <Group x={88} y={217}>
      <Text
        text="Ride secure,"
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFD700"
        width={972}
        listening={false}
      />
      <Text
        text="and save"
        y={140}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFD700"
        width={972}
        listening={false}
      />
      <Text
        text="more!"
        y={280}
        fontSize={120}
        fontFamily="AckoPrimary"
        fill="#FFD700"
        width={972}
        listening={false}
      />
    </Group>
  );
};

export const OfferText = () => {
  return (
    <Text
      text="Get up to 85% off on bike insurance on ACKO!"
      x={88}
      y={727}
      width={819}
      height={123}
      fontSize={64}
      fontFamily="AckoSecondary"
      fill="#FFFFFF"
      listening={false}
    />
  );
};

export const ProductImage = () => {
  const [image] = useImage('/assets/images/bike_image.png');
  return (
    <Image
      image={image}
      x={240}
      y={1012}
      width={1382}
      height={776}
      listening={false}
    />
  );
};

export const CTAButton = () => {
  const [ctaImage] = useImage('/assets/components/cta-button.svg');
  return (
    <Group x={88} y={1012}>
      <Image
        image={ctaImage}
        width={486}
        height={137.34}
      />
    </Group>
  );
};

export const Disclaimer = () => {
  return (
    <Group y={1805}>
      <Rect
        x={48}
        width={985}
        height={2}
        fill="rgba(255, 255, 255, 0.3)"
      />
      <Text
        text="Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5394 | Two Wheeler Package Policy IRDAN157RP0002V01201819 for more details visit www.acko.com|*T&Cs Apply"
        x={-17}
        y={23}
        width={1115}
        height={92}
        fontSize={16}
        fontFamily="AckoPrimary"
        fill="#FFFFFF"
        align="center"
        listening={false}
      />
    </Group>
  );
}; 