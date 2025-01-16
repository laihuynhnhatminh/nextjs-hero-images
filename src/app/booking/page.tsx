import Image from 'next/image';

import JSComponent from '../_components/js-component';
import SSRComponent from '../_components/ssr-component';

export default function Home() {
  return (
    <main className="mx-auto flex h-auto w-full flex-col gap-6 text-center">
      <div className="relative h-[300px] w-full lg:h-[400px]">
        <Image
          src="/images/booking.webp"
          alt="booking"
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1920px"
          style={{ objectFit: 'cover' }}
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <SSRComponent />
      <JSComponent />
    </main>
  );
}
