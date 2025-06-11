import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, Zap, MessageCircle, Shield } from 'lucide-react';
import ScrollToFormButton from '../components/ScrollToFormButton';
import RegistrationForm from '../components/RegistrationForm';

export default function Home() {
  return (
    <div className='min-h-screen relative overflow-x-hidden bg-white'>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, #005999 -9.65%, #B8D4FF 100%)',
        }}
        className='relative z-10 pt-8 sm:pt-16 lg:pt-20 pb-32 sm:pb-40 md:pb-48 lg:pb-60'
      >
        <div className='max-w-4xl mx-auto text-center'>
          {/* Logo & Brand */}
          <div className='flex items-center justify-center mb-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={63}
              height={63}
              fill='none'
              className='mr-4'
            >
              <circle cx={31.252} cy={31.252} r={9.079} fill='#003CFF' />
              <path
                fill='#003CFF'
                fillRule='evenodd'
                d='M31.252 50.185c10.456 0 18.933-8.477 18.933-18.933 0-10.457-8.477-18.934-18.933-18.934-10.457 0-18.934 8.477-18.934 18.934 0 10.456 8.477 18.933 18.934 18.933Zm0 12.318c17.26 0 31.251-13.992 31.251-31.251C62.503 13.992 48.511 0 31.252 0 13.992 0 0 13.992 0 31.252c0 17.26 13.992 31.251 31.252 31.251Z'
                clipRule='evenodd'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={288}
              height={40}
              fill='none'
            >
              <path
                fill='#fff'
                d='M181.528 37.92V.877a.659.659 0 0 0-.657-.658h-5.64a.659.659 0 0 0-.657.658v37.042c0 .363.295.659.657.659h5.64a.659.659 0 0 0 .657-.659Zm-27.487-14.901c.947-2.729 3.201-3.914 5.804-3.914 2.835 0 5.061 1.527 5.616 3.985a.642.642 0 0 1-.128.557.64.64 0 0 1-.514.247h-10.158a.636.636 0 0 1-.535-.277.638.638 0 0 1-.085-.598Zm18.545 2.737c0-7.608-5.787-12.663-12.9-12.663-7.06 0-13.165 5.055-13.165 13.088 0 7.662 5.574 13.035 13.218 13.035 4.13 0 8.212-1.676 10.614-4.528a.659.659 0 0 0-.034-.888l-3.151-3.199a.657.657 0 0 0-.924-.011 8.89 8.89 0 0 1-6.08 2.455c-2.935 0-5.11-1.354-6.074-3.721a.643.643 0 0 1 .063-.616.64.64 0 0 1 .546-.291h17.127a.655.655 0 0 0 .654-.604 24.51 24.51 0 0 0 .106-2.057Zm-37.715-12.663c-1.853 0-4.6.864-6.284 2.766a.645.645 0 0 1-.724.179.647.647 0 0 1-.424-.616v-1.031a.66.66 0 0 0-.657-.659h-5.64a.659.659 0 0 0-.657.659V37.92c0 .362.295.658.657.658h5.64a.66.66 0 0 0 .657-.659V25.544c0-4.522 3.079-5.852 5.574-5.852 2.389 0 4.724 1.756 4.724 5.64v12.588c0 .363.295.659.657.659h5.641a.659.659 0 0 0 .656-.659V24.959c.053-7.448-3.344-11.865-9.82-11.865ZM105.065 39.216c7.059 0 13.322-5.212 13.322-13.03 0-7.87-6.263-13.082-13.322-13.082-7.058 0-13.32 5.212-13.32 13.082 0 7.819 6.262 13.03 13.32 13.03Zm0-6.488c-3.449 0-6.262-2.712-6.262-6.542 0-3.881 2.813-6.594 6.262-6.594 3.45 0 6.263 2.713 6.263 6.595 0 3.829-2.813 6.541-6.263 6.541ZM80.78 39.216c5.096 0 10.403-2.711 10.403-7.923 0-2.022-.743-5.744-6.686-7.34L80.41 22.89c-1.38-.373-2.442-.958-2.442-2.128 0-1.276 1.274-2.18 2.866-2.18 1.464 0 2.717.716 2.977 2.07.06.314.326.535.644.535h5.363c.189 0 .35-.07.48-.208a.637.637 0 0 0 .175-.494c-.356-5.374-5.417-7.381-9.745-7.381-5.731 0-9.712 3.616-9.712 7.445 0 2.606.849 6.168 7.211 7.87l.015.003 3.277.795.01.002c1.853.479 2.702 1.01 2.702 2.074 0 1.435-1.539 2.446-3.556 2.446-2.145 0-3.348-1.19-3.608-2.454a.652.652 0 0 0-.643-.524h-5.248a.636.636 0 0 0-.486.215.64.64 0 0 0-.169.504c.467 5.019 5.292 7.736 10.26 7.736ZM.057 2.589v35.333c0 .363.296.659.657.659H6.78a.66.66 0 0 0 .658-.659V26.42c0-.363.295-.659.657-.659h6.88c8.282 0 11.945-5.85 11.945-11.862 0-6.011-3.663-11.969-11.944-11.969H.715a.66.66 0 0 0-.658.659Zm7.38 16.024V9.132a.66.66 0 0 1 .657-.659h6.616c3.45 0 4.777 2.766 4.777 5.426 0 2.607-1.327 5.372-4.884 5.372h-6.51a.659.659 0 0 1-.656-.658ZM51.955 25.762c0-7.606-5.785-12.658-12.897-12.658-7.06 0-13.163 5.052-13.163 13.082 0 7.66 5.573 13.03 13.216 13.03 4.128 0 8.21-1.675 10.612-4.527a.658.658 0 0 0-.035-.887l-3.15-3.197a.657.657 0 0 0-.924-.012 8.89 8.89 0 0 1-6.079 2.455c-2.934 0-5.108-1.354-6.072-3.72a.645.645 0 0 1 .063-.616.64.64 0 0 1 .545-.291h17.124a.657.657 0 0 0 .655-.603c.07-.828.105-1.495.105-2.056Zm-18.542-2.737c.948-2.727 3.2-3.912 5.804-3.912 2.834 0 5.06 1.526 5.614 3.984a.642.642 0 0 1-.128.556.637.637 0 0 1-.513.247H34.034a.639.639 0 0 1-.536-.277.641.641 0 0 1-.085-.598Zm34.7-9.921c-2.348 0-4.543 1.052-6.063 3.394a.648.648 0 0 1-.737.272.65.65 0 0 1-.47-.631V14.4a.659.659 0 0 0-.658-.658H54.6a.659.659 0 0 0-.656.658v23.52c0 .362.295.658.657.658h5.638a.66.66 0 0 0 .658-.658V30.07c0-7.073 2.441-10.424 5.997-10.424.71 0 1.682.075 2.852.568.184.077.373.07.551-.02a.635.635 0 0 0 .342-.434l1.276-5.33a.655.655 0 0 0-.398-.766c-1.032-.405-2.275-.56-3.403-.56ZM209.489 38.556c4.247 0 7.695-1.838 10.033-4.758a.633.633 0 0 0 .137-.506.631.631 0 0 0-.274-.446l-4.195-2.93a.653.653 0 0 0-.861.097c-1.165 1.28-3.019 2.055-4.787 2.055-3.929 0-6.583-2.978-6.583-6.648 0-3.616 2.654-6.488 6.583-6.488 1.768 0 3.622.775 4.787 2.054a.653.653 0 0 0 .861.097l4.195-2.929a.632.632 0 0 0 .274-.446.634.634 0 0 0-.137-.506c-2.338-2.921-5.786-4.759-10.033-4.759-7.22 0-13.591 5.106-13.591 12.977 0 7.87 6.371 13.136 13.591 13.136Zm23.435 0c7.061 0 13.325-5.212 13.325-13.03 0-7.87-6.264-13.325-13.325-13.082-7.06 0-13.324 5.211-13.324 13.082 0 7.818 6.264 13.03 13.324 13.03Zm0-6.488c-3.45 0-6.264-2.712-6.264-6.542 0-3.882 2.814-6.594 6.264-6.594 3.451 0 6.265 2.712 6.265 6.594 0 3.83-2.814 6.542-6.265 6.542Zm45.627-19.624c-2.356 0-5.757 1.047-7.719 3.93a.638.638 0 0 1-.555.288.642.642 0 0 1-.545-.308c-1.577-2.52-4.165-3.91-7.426-3.91-1.988 0-4.362.865-5.853 2.594a.647.647 0 0 1-.727.187.648.648 0 0 1-.428-.617v-.868a.659.659 0 0 0-.656-.658h-5.641a.66.66 0 0 0-.657.658v23.52a.66.66 0 0 0 .657.658h5.641a.659.659 0 0 0 .656-.658V24.835c0-4.467 2.549-5.85 5.044-5.85 2.336 0 4.353 1.702 4.353 5.637V37.26c0 .362.295.658.657.658h5.64a.659.659 0 0 0 .657-.658V25.686c0-4.624 1.909-6.751 4.879-6.7h.01c2.44 0 4.454 1.65 4.454 5.53V37.26a.66.66 0 0 0 .657.658h5.694a.659.659 0 0 0 .657-.658V24.303c0-7.445-3.238-11.86-9.449-11.86Z'
              />
              <path
                fill='#003CFF'
                d='M189.579 38.703a5.422 5.422 0 0 0 5.417-5.428 5.422 5.422 0 0 0-5.417-5.428 5.422 5.422 0 0 0-5.416 5.428 5.422 5.422 0 0 0 5.416 5.428Z'
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h1
            className='text-white font-semibold text-center mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight'
            style={{
              fontFamily: '"Mona Sans", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            <span className='font-light'>İş</span> Bulmanın ve Personel <br />{' '}
            Bulmanın <span className='font-light'>Yeni Yolu</span>
          </h1>

          {/* Subtitle */}
          <p
            className='text-white/80 text-center mb-6 text-md sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-normal'
            style={{
              fontFamily: '"Mona Sans", sans-serif',
              letterSpacing: '-0.05em',
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
          >
            Kalifiye ve güvenilir iş gücünü kolayca bulun veya size en uygun işi
            keşfedin. Personel.com yakında hizmetinizde!
          </p>

          {/* CTA Button */}
          <ScrollToFormButton
            className='relative z-30 bg-[#003CFF] hover:bg-[#0033DD] text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-[10px] text-lg sm:text-xl lg:text-2xl font-semibold transition-colors duration-200 mb-8 sm:mb-12'
            style={{ fontFamily: '"Mona Sans", sans-serif' }}
          >
            Erken Erişim İçin Kayıt Olun
          </ScrollToFormButton>
        </div>

        {/* Character Images - Positioned absolutely to ensure stable 75/25 split */}
        <div className='absolute bottom-0  left-1/2 transform -translate-x-1/2 translate-y-1/4 z-20'>
          <div className='flex justify-center items-end'>
            <div className='relative'>
              <Image
                src='/images/image1.png'
                alt='Character 1'
                width={242}
                height={475}
                className='w-28 h-auto sm:w-28 md:w-36 lg:w-44 xl:w-52'
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/image2.png'
                alt='Character 2'
                width={184}
                height={552}
                className='w-22 h-auto sm:w-22 md:w-26 lg:w-32 xl:w-38 '
                style={{ marginBottom: -20 }}
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/image3.png'
                alt='Character 3'
                width={219}
                height={419}
                className='w-28 h-auto sm:w-28 md:w-32 lg:w-40 xl:w-50 '
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>
          </div>

          {/* Shadow underneath all characters */}
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full'>
            <Image
              src='/images/image5.png'
              alt='Character Shadow'
              width={895}
              height={43}
              className='w-full h-auto max-w-none'
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <div
        style={{
          backgroundImage: 'url(/images/bg.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <section className='relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-50'>
          <div className='max-w-7xl bg-transparent mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Main Title */}
            <h2
              className='text-[#231655] font-semibold text-center mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight'
              style={{
                fontFamily: '"Mona Sans", sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              <span className='font-light text-[#003CFF]'>Hızlı, </span>
              <span className='text-[#231655]'>Kolay</span> ve <br />
              <span className='text-[#231655]'>Güvenilir</span>{' '}
              <span className='text-[#003CFF] font-light'>İş Platformu</span>
            </h2>

            {/* Description */}
            <p
              className='text-black font-medium text-center mb-12 sm:mb-16 text-sm sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed'
              style={{
                fontFamily: '"Mona Sans", sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Personel.com; işverenleri ve çalışan adaylarını <br /> doğrudan
              buluşturan yeni nesil bir platformdur.
            </p>

            {/* Feature Pills */}
            <div className='flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20'>
              <div
                className='bg-[#003CFF] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-[10px] text-sm sm:text-xl lg:text-2xl font-medium text-center max-w-[58rem] w-full'
                style={{ fontFamily: '"Mona Sans", sans-serif' }}
              >
                Karmaşık başvuru süreçleri, aracı maliyetleri ve gereksiz
                beklemeler yok.
              </div>
              <div
                className='bg-[#003CFF] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-[10px] text-sm sm:text-xl lg:text-2xl font-medium text-center max-w-[58rem] w-full'
                style={{ fontFamily: '"Mona Sans", sans-serif' }}
              >
                İş ilanınızı verin veya profilinizi oluşturun, doğru eşleşmeler
                anında cebinizde!
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
              {/* Mobile App Feature */}
              <div className='bg-[#E8F1F6] rounded-[10px] min-h-[280px] sm:min-h-[320px] lg:min-h-[337px] flex flex-col'>
                {/* Top Box - Icon */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-t-[10px] p-6 sm:p-7 lg:p-8 flex'>
                  <div className='w-[72px] h-[72px] bg-white rounded-[10px] flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={30}
                      fill='none'
                      viewBox='0 0 20 30'
                    >
                      <path
                        fill='#003CFF'
                        d='M2.917.833H18.5a1.417 1.417 0 0 1 1.417 1.417v25.5a1.416 1.416 0 0 1-1.417 1.417h-17A1.417 1.417 0 0 1 .083 27.75V0h2.834v.833Zm0 9.917h14.166V3.667H2.917v7.083Zm0 2.833v12.75h14.166v-12.75H2.917Z'
                      />
                    </svg>
                  </div>
                </div>
                {/* Bottom Box - Text */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-b-[10px] p-6 sm:p-7 lg:p-8 flex items-start'>
                  <h3
                    className='font-semibold text-[#2B2D33] text-lg sm:text-xl lg:text-2xl leading-tight text-left'
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <span className='text-[#003CFF]'>Kolay</span> <br />{' '}
                    kullanılabilir <br />{' '}
                    <span className='font-light'>mobil uygulama</span>
                  </h3>
                </div>
              </div>

              {/* Direct Communication */}
              <div className='bg-[#E8F1F6] rounded-[10px] min-h-[280px] sm:min-h-[320px] lg:min-h-[337px] flex flex-col'>
                {/* Top Box - Icon */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-t-[10px] p-6 sm:p-7 lg:p-8 flex'>
                  <div className='w-[72px] h-[72px] bg-white rounded-[10px] flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      fill='none'
                      viewBox='0 0 36 36'
                    >
                      <g clipPath='url(#a)'>
                        <path
                          fill='#003CFF'
                          d='M9.682 28.5 3 33.75V6a1.5 1.5 0 0 1 1.5-1.5h27A1.5 1.5 0 0 1 33 6v21a1.5 1.5 0 0 1-1.5 1.5H9.682Zm-1.037-3H30v-18H6v20.078L8.645 25.5Zm8.294-7.319 6.365-6.363 2.121 2.122-8.486 8.485-5.835-5.835 2.123-2.121 3.712 3.713Z'
                        />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M0 0h36v36H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                {/* Bottom Box - Text */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-b-[10px] p-6 sm:p-7 lg:p-8 flex items-start'>
                  <h3
                    className='font-semibold text-[#2B2D33] text-lg sm:text-xl lg:text-2xl leading-tight text-left'
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <span className='text-[#003CFF]'>Doğrudan</span> <br />{' '}
                    <span className='font-semibold'>iletişim imkanı</span>
                  </h3>
                </div>
              </div>

              {/* Fast Hiring */}
              <div className='bg-[#E8F1F6] rounded-[10px] min-h-[280px] sm:min-h-[320px] lg:min-h-[337px] flex flex-col'>
                {/* Top Box - Icon */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-t-[10px] p-6 sm:p-7 lg:p-8 flex'>
                  <div className='w-[72px] h-[72px] bg-white rounded-[10px] flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={42}
                      height={42}
                      viewBox='0 0 42 42'
                      fill='#003CFF'
                    >
                      <path
                        fill='#003CFF'
                        d='M13.4 5.4c-5 2.2-8.7 7.9-9.2 14C3.4 29.6 9.4 37 19.4 37.8c10.2.8 17.6-5.2 18.4-15.2.9-10.5-5.3-17.7-15.6-18.3-3.5-.2-6.9.2-8.8 1.1zm15.9 4.2c8.3 6.1 7.1 19.5-2.2 24-4.2 2-10.8 1.5-14.4-1.2-8.1-5.9-7.1-19.2 1.8-23.9 3.8-2 11.3-1.5 14.8 1.1z'
                      />
                      <path
                        fill='#003CFF'
                        d='M13.9 13.9C9.8 18 9.8 24 13.9 28.1c6.5 6.4 17.1 2 17.1-7.1S20.4 7.5 13.9 13.9zM26 16c4.3 4.3 1.1 12-5 12s-9.3-7.7-5-12c1.1-1.1 3.3-2 5-2 1.7 0 3.9.9 5 2z'
                      />
                      <path
                        fill='#003CFF'
                        d='M18.4 19.4c-1 2.6.4 4.8 2.8 4.4 1.7-.2 2.3-1 2.3-2.8 0-1.8-.6-2.6-2.3-2.8-1.3-.2-2.5.3-2.8 1.2z'
                      />
                    </svg>
                  </div>
                </div>
                {/* Bottom Box - Text */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-b-[10px] p-6 sm:p-7 lg:p-8 flex items-start'>
                  <h3
                    className='font-bold text-[#2B2D33] text-lg sm:text-xl lg:text-2xl leading-tight text-left'
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <span className='text-[#003CFF]'>Hızlı işe alım</span>{' '}
                    <br /> süreçleri
                  </h3>
                </div>
              </div>

              {/* Reliable Profiles */}
              <div className='bg-[#E8F1F6] rounded-[10px] min-h-[280px] sm:min-h-[320px] lg:min-h-[337px] flex flex-col pb-6'>
                {/* Top Box - Icon */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-t-[10px] p-6 sm:p-7 lg:p-8 flex'>
                  <div className='w-[72px] h-[72px] bg-white rounded-[10px] flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={35}
                      height={35}
                      fill='none'
                      viewBox='0 0 35 35'
                    >
                      <path
                        fill='#003CFF'
                        d='M5.517 4.121 17.5 1.458l11.983 2.663c.667.149 1.142.74 1.142 1.424v14.564a8.75 8.75 0 0 1-3.896 7.28L17.5 33.542l-9.229-6.153a8.75 8.75 0 0 1-3.896-7.28V5.545c0-.684.475-1.275 1.142-1.424Zm1.775 2.594v13.394c0 1.95.974 3.771 2.597 4.853l7.611 5.074 7.61-5.074a5.834 5.834 0 0 0 2.598-4.853V6.715L17.5 4.446 7.292 6.715Zm11.666 7.868h4.375l-7.291 10.209V17.5h-4.375l7.291-10.208v7.291Z'
                      />
                    </svg>
                  </div>
                </div>
                {/* Bottom Box - Text */}
                <div className='bg-[#E8F1F6] h-1/2 rounded-b-[10px] p-6 sm:p-7 lg:p-8 flex items-start'>
                  <h3
                    className='font-bold text-[#2B2D33] text-lg sm:text-xl lg:text-2xl leading-tight text-left'
                    style={{
                      fontFamily: '"Mona Sans", sans-serif',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <span className='text-[#003CFF]'>Güvenilir aday</span>{' '}
                    <br /> <span className='text-[#003CFF]'>profilleri</span> ve{' '}
                    <br /> <span className='font-light'>değerlendirme</span>{' '}
                    <br /> <span className='font-light'>sistemi</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Registration Section */}
      <section
        id='registration-form'
        className='relative z-10 bg-[#100B21] pt-12 py-12 sm:py-16 lg:py-16'
      >
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-20'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start lg:items-center'>
            {/* Left Side - Text Content (3/5 width) */}
            <div className='lg:col-span-3'>
              <h2
                className='text-white font-bold mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight'
                style={{
                  fontFamily: '"Mona Sans", sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                İlk Deneyenlerden <br />{' '}
                <span className='font-light'>Biri Olun!</span>
              </h2>
              <p
                className='text-white/70 font-medium mb-8 sm:mb-10 lg:mb-12 text-md sm:text-lg lg:text-xl leading-relaxed'
                style={{
                  fontFamily: '"Mona Sans", sans-serif',
                  letterSpacing: '-0.05em',
                }}
              >
                Platform yayına girdiğinde ilk siz haberdar <br /> olun ve
                avantajlardan erken yararlanın.
              </p>

              {/* Registration Form */}
              <RegistrationForm />
            </div>

            {/* Right Side - Character Image (2/5 width) */}
            <div className='hidden lg:flex lg:col-span-2 '>
              <Image
                src='/images/image4.png'
                alt='Footer Character'
                className='object-contain max-w-full h-auto absolute lg:-top-40 w-170 z-50'
                width={990}
                height={798}
              />
            </div>
          </div>
        </div>{' '}
        <footer className='relative z-10 bg-[#100B21] pt-24'>
          <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-20'>
            <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8'>
              {/* Logo */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={80}
                height={80}
                fill='none'
              >
                <circle cx={40} cy={40} r={11.62} fill='#fff' />
                <path
                  fill='#fff'
                  fillRule='evenodd'
                  d='M40 64.233c13.384 0 24.233-10.85 24.233-24.233 0-13.384-10.85-24.233-24.233-24.233-13.384 0-24.233 10.85-24.233 24.233 0 13.384 10.85 24.233 24.233 24.233ZM40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40Z'
                  clipRule='evenodd'
                />
              </svg>

              {/* Text Content */}
              <div className='text-center sm:text-left'>
                <p
                  className='text-white font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed mb-2'
                  style={{
                    fontFamily: '"Mona Sans", sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Personel.com © 2025 — Tüm Hakları Saklıdır.
                </p>
                <p
                  className='text-white/80 font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-80'
                  style={{
                    fontFamily: '"Mona Sans", sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <Link
                    href='/iletisim'
                    className='hover:text-white transition-colors duration-200 cursor-pointer underline opacity-80'
                  >
                    İletişim
                  </Link>
                  {' | '}
                  <Link
                    href='/kvkk'
                    className='hover:text-white transition-colors duration-200 cursor-pointer underline opacity-80'
                  >
                    KVKK
                  </Link>
                  {' | '}
                  <Link
                    href='/kullanim-kosullari'
                    className='hover:text-white transition-colors duration-200 cursor-pointer underline opacity-80'
                  >
                    Kullanım Koşulları
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>

      {/* Footer */}
    </div>
  );
}
