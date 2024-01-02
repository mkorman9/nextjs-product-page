import Link from 'next/link';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
