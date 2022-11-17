import { ReactNode, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

export default function Modal({
  children,
  trigger,
  title,
}: {
  children: ReactNode;
  trigger: ReactNode;
  title: string;
}): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 500);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      handleClose();
    } else {
      handleOpen();
    }
  }

  useOnClickOutside(ref, () => handleClose());

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div onClick={handleClick}>{trigger}</div>
      {isMounted && (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`} ref={ref}>
          <div className='summary'>
            <h3>{title}</h3>
            <button onClick={handleClose}>X</button>
          </div>
          <div className='mtc'>{children}</div>
        </div>
      )}
    </div>
  );
}
