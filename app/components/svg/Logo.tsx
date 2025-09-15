import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={width}
      height={height}
      style={{ width: `${width}px`, height: `${height}px` }}
      priority
    />
  );
};

export default Logo;
