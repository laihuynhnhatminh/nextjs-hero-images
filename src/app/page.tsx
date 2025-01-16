import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto flex h-auto w-full flex-col gap-6 text-center">
      <div className="relative h-full max-h-[1280px] w-full">
        <Image
          src="/images/landing-sunset.webp"
          alt="landing-sunset"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1920px"
          style={{ objectFit: 'cover' }}
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </main>
  );
}
