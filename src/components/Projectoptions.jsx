import React, { useEffect, useMemo, useState } from 'react';
import Linkto from './Linkto';

const IMAGE_SWAP_INTERVAL = 1200;

const Projectoptions = ({ technologies, title, originalsite, sitelink, descp, images = [], coverimg, linktitle, originallinktitle }) => {
  const normalizedImages = useMemo(() => {
    if (Array.isArray(images) && images.length) {
      return images;
    }

    if (coverimg) {
      return [coverimg];
    }

    return [];
  }, [images, coverimg]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [normalizedImages]);

  useEffect(() => {
    if (!isHovered || normalizedImages.length < 2) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % normalizedImages.length);
    }, IMAGE_SWAP_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isHovered, normalizedImages]);

  useEffect(() => {
    if (!isHovered) {
      setActiveImageIndex(0);
    }
  }, [isHovered]);

  return (
    <div
      className="group my-6 max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col min-h-[480px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={sitelink} className="block w-full flex-1 basis-1/2 min-h-[240px]">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-t-lg bg-white dark:bg-gray-800 min-h-[240px]">
          {normalizedImages.map((imgSrc, idx) => (
            <img
              key={`${title}-${idx}`}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${idx === activeImageIndex ? 'opacity-100' : 'opacity-0'}`}
              src={imgSrc}
              alt={`${title} preview ${idx + 1}`}
              loading="lazy"
            />
          ))}
          {normalizedImages.length === 0 && (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-400 dark:text-gray-500">
              Preview coming soon
            </div>
          )}
        </div>
      </a>

      <div className="p-5 flex flex-1 basis-1/2 flex-col justify-between">
        <a href={sitelink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descp}</p>
        <div className="flex flex-wrap items-center gap-1.5 my-4">
          {technologies?.map((tech, i) => (
            <div key={i} className="lowercase text-xs rounded-lg p-3 bg-[#FAF9F6] dark:bg-[#364153]">
              {tech}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Linkto address={sitelink} action={'_blank'} caption={linktitle} styles={'text-xs font-bold'} />

          {originalsite && (
            <Linkto address={originalsite} action={'_blank'} caption={originallinktitle} styles={'text-xs font-bold'} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectoptions;
