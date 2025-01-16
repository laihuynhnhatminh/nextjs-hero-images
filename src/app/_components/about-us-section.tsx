import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

function AboutUsSection() {
  const youtubeUrl =
    'https://www.youtube.com/embed/_fkmFaxUEe4?si=GZbgLwYwo9a3W6a8&controls=0';

  return (
    <div className="xl:px-common-horizontal mt-4 flex flex-col items-center gap-4 px-6 lg:my-10 lg:px-16">
      <div className="mb-6 text-center">
        <h1 className="text-primary text-lg font-semibold tracking-tight lg:text-[32px]">
          {'SECTIONS.ABOUT_US_TITLE'}
        </h1>
        <p className="text-muted-foreground font-normal lg:text-lg lg:font-semibold">
          {'SECTIONS.ABOUT_US_SUB_TITLE'}
        </p>
      </div>
      <div className="grid grid-cols-none grid-rows-2 gap-x-8 lg:grid-cols-2 lg:grid-rows-none">
        <iframe
          className="row-span-1 -my-4 h-[360px] w-full rounded-lg lg:col-span-1"
          src={youtubeUrl}
          loading="lazy"
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/_fkmFaxUEe4?si=GZbgLwYwo9a3W6a8&controls=0&autoplay=1&muted=1><img src=https://img.youtube.com/vi/_fkmFaxUEe4/hqdefault.jpg alt=''><span>▶</span></a>"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        />
        <div className="row-span-1 flex flex-col gap-4 self-center text-center lg:col-span-1 lg:text-start">
          <p>{'SECTIONS.ABOUT_US_DESCRIPTION_1'}</p>
          <p>{'SECTIONS.ABOUT_US_DESCRIPTION_2'}</p>
          <Link href="/about">
            <Button
              variant={'outline'}
              className="w-fit items-center font-semibold"
            >
              {'SECTIONS.MORE_ABOUT_US'}
              <ChevronRight className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { AboutUsSection };
