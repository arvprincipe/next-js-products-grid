import { NextPage } from "next";
import Image from "next/image";
import { ImageWrapper } from "./styles"

interface ImageProps {
  src: string;
  alt: string;
  title?: string;
}

const ImageLoader = (src: string) => {
  return `https://www.gef.co/${src}?`
}

const ImagenCard: NextPage<ImageProps> = ({ src, alt, title }) => {
  return (
    <ImageWrapper>
      <Image
        src={ImageLoader(src)}
        alt={alt}
        title={title}
        width={500}
        height={500}
      />
    </ImageWrapper>
  )
}

export default ImagenCard;