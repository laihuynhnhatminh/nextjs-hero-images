'use client';

import Image from 'next/image';

import useMediaQuery, { type MediaQueryType } from '@/hooks/use-media-query';

type BookingImageProps = Readonly<{
  device: MediaQueryType;
}>;

export default function BookingImage({ device }: BookingImageProps) {
  const { isMobile } = useMediaQuery(device);

  return (
    <div className="relative h-[300px] w-full lg:h-[400px]">
      <Image
        src={isMobile ? '/images/booking-mobile.webp' : '/images/booking.webp'}
        alt="booking"
        sizes="100vw"
        fill
        className="-z-1 object-cover"
        priority
        fetchPriority="high"
        loading="eager"
      />
    </div>
  );
}
