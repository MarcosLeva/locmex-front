'use client';
import { useRouter } from 'next/navigation';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<LinkProps> = ({ children, href, className }) => {
  const { push, refresh } = useRouter();
  return (
    <a
      className={className}
      onClick={(e) => {
        e.preventDefault();
        push(href);
        refresh();
      }}>
      {children}
    </a>
  );
};
export default Link;
