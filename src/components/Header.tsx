import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Header(): JSX.Element {
  const router = useRouter();
  return (
    <header>
      <Link href='/'>
        <div className='logo'>
          <div className='spin'>✴︎</div>
          <p>Airindex</p>
        </div>
      </Link>
      <div>
        <Link href='/insights'>
          <button className='mrb' disabled={router.pathname === '/insights'}>
            Insights
          </button>
        </Link>
        <Link href='/managers'>
          <button className='mrb' disabled={router.pathname === '/managers'}>
            Managers
          </button>
        </Link>
        <button className='mrb'>Cleaners</button>
        <button className='mrb'>Research</button>

        <button type='button'>Submit</button>
      </div>
    </header>
  );
}
