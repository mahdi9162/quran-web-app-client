import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-base-content">Page Not Found</h2>

      <p className="mt-4 text-base-content/70">The page you are looking for does not exist or has been moved.</p>

      <Link href="/" className="btn btn-primary mt-8">
        Back Home
      </Link>
    </section>
  );
}
