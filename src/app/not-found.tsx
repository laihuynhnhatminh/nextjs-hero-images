import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="mx-auto my-12 max-w-4xl content-center justify-center xl:max-w-5xl">
      <div className="mb-8 flex justify-between">
        <h1 className="text-3xl font-bold">Resources not found!</h1>
      </div>

      <Link href="/" className="inline-flex gap-2">
        <span>Go back home</span>
      </Link>
    </main>
  );
}
