import Image from 'next/image';

import logoImg from '@/public/green-salad.png';

export default function LoadingSalad() {
  return (
    <main className="p-6 flex w-full h-full justify-center items-center">
      <Image
        src={logoImg}
        width={64}
        height={64}
        alt="loading"
        className="animate-spin-slow"
      />
    </main>
  );
}
