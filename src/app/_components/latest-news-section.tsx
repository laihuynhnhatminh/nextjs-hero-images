'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import useMediaQuery from '@/hooks/use-media-query';
import { useLatestNewsQuery } from '@/lib/api/news';
import { type TAny } from '@/types/common';

function NewsCard({ coverImage, title }: TAny) {
  return (
    <Link
      href={`/`}
      className="col-span-1 flex w-full flex-col items-center rounded-lg bg-primary-foreground"
    >
      <div className="relative h-[240px] w-full">
        <Image
          src={coverImage.path}
          alt={coverImage.name}
          height={0}
          width={0}
          loading="lazy"
          className="rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </div>
      <div className="flex w-full flex-col p-6">
        <h1 className="w-full font-semibold">{title.en.value}</h1>
      </div>
    </Link>
  );
}

function LatestNewsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const { isTablet, isMobile } = useMediaQuery();
  const { data = [] } = useLatestNewsQuery();

  const handleDotButtonClick = useCallback(
    (index: number) => {
      if (api) {
        setActiveIndex(index);
        api.scrollTo(index * (isTablet ? 2 : 1));
      }
    },
    [api, isTablet],
  );

  useEffect(() => {
    if (api)
      api.on('slidesInView', api => {
        if (api.slidesInView().length > 0) {
          setActiveIndex(api.slidesInView()[0]);
        }
      });
  }, [api]);

  return (
    <div className="xl:px-common-horizontal my-10 flex flex-col items-center gap-4 px-6 py-10 lg:px-16">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold tracking-tight text-primary lg:text-[32px]">
          {'SECTIONS.NEWS'}
        </h1>
        <p className="text-sm text-muted-foreground lg:text-lg">
          {'SECTIONS.NEWS_DESCRIPTION'}
        </p>
      </div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {data.map((news: TAny) => (
            <CarouselItem
              key={news.id}
              className="h-full md:basis-1/2 lg:basis-1/3"
            >
              <NewsCard {...news} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex">
        {Array.from({ length: isTablet ? 2 : isMobile ? 3 : 1 }).map(
          (_, index) => (
            <Button
              key={index}
              type="button"
              variant={'ghost'}
              size={'icon'}
              className="h-4 w-4 rounded-full hover:bg-transparent"
              onClick={() => handleDotButtonClick(index)}
            >
              {index === activeIndex ? (
                <div className="h-[10px] w-[10px] rounded-full bg-primary" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              )}
            </Button>
          ),
        )}
      </div>
      <Button variant={'outline'} className="mt-6 font-bold">
        {'SECTIONS.VIEW_ALL'}
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}

export { LatestNewsSection };
