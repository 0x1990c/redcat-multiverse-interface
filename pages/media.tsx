import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Media = () => {
  const router = useRouter();
  useEffect(() => {
    const link = document.createElement('a');
    link.href = '/media/';
    link.download = 'RCMPressRelease.pdf';
    link.dispatchEvent(new MouseEvent('click'));

    router.replace('/');
  }, [router]);

  return (
    <div>MEDIA</div>
  )
}

export default Media;
