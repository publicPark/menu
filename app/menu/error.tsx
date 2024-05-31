'use client';
export default function Error({ error }: { error: Error }) {
  return (
    <main className="">
      <h2>Error</h2>
      <p>{error.message}</p>
    </main>
  );
}
