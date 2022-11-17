import { useState } from 'react';
import useSWRImmutable from 'swr/immutable';

import { supabase } from '../hooks/useClient';

export default function Build({
  city,
  reference,
}: {
  city: string;
  reference: string;
}): JSX.Element {
  const [isReady, setIsReady] = useState(false);

  const { data, error } = useSWRImmutable(
    isReady
      ? `${process.env.NEXT_PUBLIC_SCRAPE_ENDPOINT}/market/summary/?access_token=${process.env.NEXT_PUBLIC_SCRAPE_API_KEY}&city_id=${city}&currency=native`
      : null
  );
  const [status, setStatus] = useState('');

  async function handleSave(): Promise<void> {
    const { error: saveError } = await supabase.from('insights').upsert({
      data,
      reference,
      updated_at: new Date(),
    });

    if (saveError) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  return (
    <div key={reference}>
      <div>
        <h2>1) Fetch</h2>
        <button onClick={(): void => setIsReady(true)}>Start</button>
      </div>

      <div className='mtd'>
        <h2>2) Save</h2>
        {isReady && data ? (
          <button onClick={handleSave}>Save</button>
        ) : isReady && error ? (
          <p>Error</p>
        ) : isReady && !data ? (
          <p>Loading...</p>
        ) : (
          <p>Fetch data first</p>
        )}
      </div>
      {status && (
        <div className='mtb'>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}
