import LoadingSalad from '@/app/_components/layout/loading-salad';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <h1>Search Houses</h1>

      <form className="text-center">
        <input type="text" placeholder="houseKey" id="key" name="key" />
      </form>
    </>
  );
}
