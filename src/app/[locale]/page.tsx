import { useTranslations } from 'next-intl';
import Link from 'next/link';
export default function Home() {

  const t = useTranslations('default')
  return (
    <main className='flex justify-center items-center text-primary'>
      <h1>Welcome to my app, {t('test')}!</h1>
      <div className="flex justify-evenly">
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </main>
  );
}
