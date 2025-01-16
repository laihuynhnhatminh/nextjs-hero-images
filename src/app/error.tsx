'use client';

import NextError from 'next/error';
import Link from 'next/link';

type Props = Readonly<{
  error: Error;
}>;

export default function ErrorBoundary({ error }: Props) {
  return (
    <main className="mx-auto my-12 min-h-svh max-w-4xl justify-center xl:max-w-5xl">
      <NextError statusCode={500} withDarkMode={true} title={error.message} />
      <Link href="/" className="inline-flex gap-2">
        <span>Go back home</span>
      </Link>
    </main>
  );
}
