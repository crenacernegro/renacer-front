import Image, { type ImageProps } from "next/image";
import logo from "./logo.module.css";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

const Logo = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className={logo.imgLight} alt="light" />
      <Image {...rest} src={srcDark} className={logo.imgDark} alt="dark" />
    </>
  );
};

export default Logo;
