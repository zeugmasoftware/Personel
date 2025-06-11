'use client';

interface ScrollToFormButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function ScrollToFormButton({
  className,
  style,
  children,
}: ScrollToFormButtonProps) {
  const handleClick = () => {
    document.getElementById('registration-form')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
