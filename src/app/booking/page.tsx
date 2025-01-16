import Image from 'next/image';

import JSComponent from '../_components/js-component';
import { HomePageSections } from '../_components/sections';
import SSRComponent from '../_components/ssr-component';

export default function Home() {
  return (
    <main className="mx-auto flex h-auto w-full flex-col gap-6 text-center">
      <div className="relative h-[300px] w-full lg:h-[400px]">
        <Image
          src="/images/booking.webp"
          alt="booking"
          sizes="100vw"
          fill
          className="-z-1 object-cover"
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <HomePageSections />
      <SSRComponent />
      <JSComponent />
    </main>
  );
}
