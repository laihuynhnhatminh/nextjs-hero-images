import { headers } from 'next/headers';

import { type MediaQueryType } from '@/hooks/use-media-query';

import JSComponent from '../_components/js-component';
import { HomePageSections } from '../_components/sections';
import SSRComponent from '../_components/ssr-component';
import BookingImage from './booking-image';

export default async function Home() {
  const headerList = await headers();
  const userDeviceType = headerList.get('x-user-device');

  return (
    <main className="mx-auto flex h-auto w-full flex-col gap-6 text-center">
      <BookingImage device={userDeviceType as MediaQueryType} />
      <HomePageSections />
      <SSRComponent />
      <JSComponent />
    </main>
  );
}
