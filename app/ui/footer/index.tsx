"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const linkList = [
  { name: 'CSDN', url: 'https://blog.csdn.net/weixin_43303603' },
  { name: '知乎', url: 'https://www.zhihu.com/people/zhang-song-88-58-79' },
  // { name: '松桑的前端后花园', url: 'https://blog.csdn.net/weixin_43303603', imageUrl: 'https://ice.frostsky.com/2024/03/21/e54962e6e8a091cc33398f6709b99482.png' },
];

interface IHoverImage {
  name: string,
  imageUrl: string
}

const hoverImage: IHoverImage[] = [{
  name: '松桑的前端后花园',
  imageUrl: 'https://ice.frostsky.com/2024/03/21/e54962e6e8a091cc33398f6709b99482.png'
}]

const ImageHover = ({ data }: { data: IHoverImage[]}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative ml-4">
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <p className={`bg-white text-black`}>
            {item.name}
          </p>
          {hoveredIndex === index && (
            <Image
              src={item.imageUrl}
              alt={item.name}
              className={`fixed transition-opacity duration-300 bottom-0 right-0 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              width={700}
              height={300}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>&copy; 2024 @955noicu</p>
        </div>
        <div className="flex items-center align-center">
          {linkList.map((link, index) => (
            <div key={index} className="relative ml-4">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 mr-4 relative"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute ml-4 bottom-4 right-2">
        <ImageHover data={hoverImage} />
      </div>
    </footer>
  );
};

export default Footer;
