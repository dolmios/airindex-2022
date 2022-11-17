import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { supabase } from '../hooks/useClient';

import Modal from './Modal';
export default function Header(): JSX.Element {
  const router = useRouter();
  const [submitTopic, setSubmitTopic] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [followEmail, setFollowEmail] = useState('');

  async function handleSubmit(): Promise<void> {
    const { error } = await supabase.from('feedback').insert({
      followEmail: followEmail || 'Not provided',
      message: submitMessage,
      topic: submitTopic,
    });

    if (error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
    }
  }

  return (
    <header>
      <Link href='/'>
        <div className='logo'>
          <Image src='/icon.png' alt='logo' width={25} height={25} className='spin' />
          <b className='mra'>AIRINDEX</b>
          <p>STR Research</p>
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
        <Modal
          trigger={<button type='button'>Submit</button>}
          title='Submit a company or alteration'>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='mtb'>
                <label htmlFor='topic'>Topic</label>
                <input
                  id='topic'
                  type='text'
                  value={submitTopic}
                  onChange={(e): void => setSubmitTopic(e.target.value)}
                />
              </div>
              <div className='mtb'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  value={submitMessage}
                  onChange={(e): void => setSubmitMessage(e.target.value)}
                />
              </div>
              <div className='mtb'>
                <label htmlFor='followEmail'>Follow up email (optional)</label>
                <input
                  id='followEmail'
                  type='email'
                  value={followEmail}
                  onChange={(e): void => setFollowEmail(e.target.value)}
                />
              </div>
              <div className='mtb'>
                <button type='submit'>Submit</button>
              </div>
            </form>
            {submitStatus && (
              <div className='mtb'>
                <p>{submitStatus}</p>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </header>
  );
}
