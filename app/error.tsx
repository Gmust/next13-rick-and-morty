'use client';


import { useEffect } from 'react';

interface ErrorInterface {
  error: Error,
  reset: () => void
}

const Error = ({ error, reset }: ErrorInterface) => {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset}>Reset error</button>
    </div>
  );
};

export default Error;