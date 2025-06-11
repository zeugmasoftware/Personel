import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Personel.com - İş Bulmanın ve Personel Bulmanın Yeni Yolu',
  description:
    'Kalifiye ve güvenilir iş gücünü kolayca bulun veya size en uygun işi keşfedin. Personel.com yakında hizmetinizde!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
