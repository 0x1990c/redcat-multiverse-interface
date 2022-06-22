import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Media = () => {
  const router = useRouter();

  useEffect(() => {
    const link = document.createElement('a');
    link.href = '/medias/RCMPressRelease.pdf';
    link.download = 'RCMPressRelease.pdf';
    link.dispatchEvent(new MouseEvent('click'));

    router.replace('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>MEDIA</div>
  )
}

export default Media;
