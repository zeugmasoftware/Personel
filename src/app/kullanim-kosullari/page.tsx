import Link from 'next/link';

export default function KullanimKosullari() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='bg-[#100B21] py-6'>
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <div className='flex items-center justify-center scale-50'>
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
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1
          className='text-[#231655] font-bold text-4xl sm:text-5xl mb-8 text-center'
          style={{
            fontFamily: '"Mona Sans", sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          İnternet Sitesi Kullanım Koşulları ve Üyelik Sözleşmesi
        </h1>

        <div className='prose prose-lg max-w-none'>
          <div className='bg-gray-50 p-6 rounded-[10px] mb-8'>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Bu internet sitesini (www.personel.com) (Kısaca "SİTE" olarak
              anılacaktır) kullanmak için lütfen aşağıda yazılı koşulları
              okuyunuz. Bu SİTE'de sunulan hizmetlerden yararlananlar veya
              herhangi bir şekilde SİTE'ye erişim sağlayan her gerçek ve tüzel
              kişi aşağıdaki kullanım koşullarını kabul etmiş sayılmaktadır.
            </p>
          </div>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              KULLANIM KOŞULLARI
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Bu SİTE'de sunulan hizmetler, Personel.com tarafından
              sağlanmaktadır ve SİTE'nin kanuni sahibi Personel.com olup, SİTE
              üzerinde her türlü kullanım ve tasarruf yetkisi Personel.com'a
              aittir.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              İşbu kullanım koşulları, Personel.com tarafından gerektiğinde
              değiştirilebilir. Değişiklik olması halinde, bunlar SİTE'de
              yayınlanacak ve aynı tarihten itibaren geçerli olacaktır.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              SİTE hizmetlerinden faydalanan ve SİTE'ye erişim sağlayan her
              gerçek ve tüzel kişi, Personel.com tarafından işbu kullanım
              koşulları hükümlerinde yapılan her değişikliği, önceden kabul
              etmiş sayılmaktadır.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Personel.com, bu SİTE'de yer alan veya alacak olan bilgileri,
              formları ve içeriği dilediği zaman değiştirme hakkını saklı
              tutmaktadır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              SÖZLEŞME TANIMLARI
            </h2>
            <div className='space-y-4'>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>SİTE:</strong> Personel.com
                  tarafından belirlenen çerçeve içerisinde çeşitli hizmetlerin
                  ve içeriklerin sunulduğu çevrimiçi ortamdan erişimi mümkün
                  olan internet sitesidir.
                </p>
              </div>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>ÜYE:</strong>{' '}
                  Personel.com'dan hizmet almak üzere faydalanmak isteyen,
                  seçmiş olduğu üyelik formunu eksiksiz doldurarak, Personel.com
                  tarafından üyelikleri onaylanarak, kabul edilen her gerçek
                  kimlik bilgileri ile SİTE'deki ilgili üyelik formunu eksiksiz
                  doldurarak üye olabilirler.
                </p>
              </div>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>KULLANICI:</strong>{' '}
                  Personel.com internet sitesini hizmet alarak veya hizmet
                  almaksızın ziyaret eden kişidir.
                </p>
              </div>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>LİNK:</strong> SİTE
                  üzerinden bir başka internet sitesine, dosyalara, içeriğe veya
                  başka bir internet sitesinden SİTE'ye dosyalara ve içeriğe
                  erişimi mümkün kılan bağlantıdır.
                </p>
              </div>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>İÇERİK:</strong> SİTE'de
                  veya herhangi bir internet sitesinde yayınlanan veya erişimi
                  mümkün olan her türlü bilgi, dosya, resim, program, rakam,
                  fiyat, vs. görsel, yazılı ve işitsel imgelerdir.
                </p>
              </div>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>
                    İNTERNET SİTESİ KULLANIM KOŞULLARI SÖZLEŞMESİ:
                  </strong>{' '}
                  SİTE vasıtası ile sunulmakta olan ticari ve kişiye özel
                  nitelikteki hizmetlerden yararlanacak gerçek veya tüzel
                  kişilerle Personel.com arasında elektronik ortamda akdedilen
                  işbu sözleşmedir.
                </p>
              </div>
              <div>
                <p className='text-gray-700 leading-relaxed'>
                  <strong className='text-[#231655]'>KİŞİSEL BİLGİ:</strong>{' '}
                  Üyenin kimliği, adresi, elektronik posta adresi, telefon
                  numarası, IP adresi, SİTE'nin hangi bölümlerini ziyaret
                  ettiği, domain tipi, browser tipi, ziyaret tarihi, saati, vs.
                  bilgilendirilir.
                </p>
              </div>
            </div>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              HİZMETLERİN KAPSAMI
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Personel.com'in, SİTE üzerinden sunacağı hizmetler; iş arayanlar
              ve işverenler arasında köprü kuran dijital platform hizmetleridir.
              Sunduğumuz temel hizmetler:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>İş ilanı yayınlama ve arama hizmetleri</li>
              <li>Profil oluşturma ve CV yönetimi</li>
              <li>Eşleştirme algoritması ile uygun adayları bulma</li>
              <li>Doğrudan iletişim imkanları</li>
              <li>Güvenlik ve doğrulama hizmetleri</li>
            </ul>
            <p className='text-gray-700 leading-relaxed mt-4'>
              Personel.com, SİTE üzerinden vereceği hizmetlerin kapsamını ve
              niteliğini belirlemekte tamamen serbest olup, hizmetlere ilişkin
              olarak yapacağı değişiklikleri SİTE'de yayınlamasıyla yürürlüğe
              koymuş kabul edilir.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              GENEL HÜKÜMLER
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              SİTE'yi kullananlar, yalnızca hukuka uygun ve şahsi amaçlarla SİTE
              üzerinden işlem yapabilirler. KULLANICI'ların ve ÜYE'lerin, SİTE
              dahilinde yaptığı her işlem ve eylemdeki hukuki ve cezai
              sorumlulukları kendilerine aittir.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Her kullanıcı ve her üye, Personel.com veya başka bir üçüncü
              kişinin haklarına tecavüz teşkil edecek nitelikteki herhangi bir
              faaliyetette bulunmayacağını taahhüt eder. KULLANICI ve ÜYE'lerin
              SİTE üzerindeki faaliyetleri nedeniyle üçüncü kişilerin
              uğradıkları ve uğrayabilecekleri zararlardan dolayı
              Personel.com'un doğrudan veya dolaylı hiçbir sorumluluğu yoktur.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              İşbu SİTE'nin sahibi Personel.com'dur. Bu sitede bulunan bilgileri
              yazılar, resimler, markalar, slogan ve diğer işaretler ile sair
              sınai ve fikri mülkiyet haklarına ilişkin bilgilerin korunmasına
              yönelik programlar ile, sayfa düzeni ve SİTE'nin sunumu
              Personel.com'un veya Personel.com'un izin ve lisans aldığı
              kuruluşların mülkiyetindedir.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              SORUMLUĞUN SINIRLANDIRILMASI
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Personel.com, SİTE'ye erişilmesi, SİTE'nin veya SİTE'deki
              bilgilerin ve diğer verilerin programlarının vs. kullanılması
              sebebi ile, sözleşmenin ihlali, haksız fiil veya başkaca nedenlere
              binaen, doğabilecek doğrudan veya dolaylı hiçbir zarardan sorumlu
              değildir.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Personel.com, sözleşmenin ihlali, haksız fiil, ihmal veya diğer
              sebepler neticesinde, işlemin kesintiye uğraması, hata, ihmal,
              kesinti hususunda herhangi bir sorumluluk kabul etmez.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              FİKRİ MÜLKİYET HAKLARI
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              SİTE'deki genel görünüm, tasarım, metin, imge logo, demonstratif,
              yazılı, elektronik, grafik veya makinede okunabilir şekilde
              sunulan teknik verileri, Personel.com markası, uygulanan iş metodu
              ve modeli yazılım kodu ve diğer kodlar da dahil ve bunlarla
              sınırlı olmamak kaydıyla tüm unsurları Personel.com'a aittir.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Fikri ve Sınai haklar kapsamında korunan Personel.com'a ait tüm bu
              unsurlar çoğaltılamaz, başka bir lisana çevrilemez, yeniden
              yayımlanamaz, paylaşılamaz, dağıtılamaz, sergilenemez, bu sözleşme
              dışında kullanılamaz.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              SÖZLEŞMENİN DEVRİ
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Personel.com, bu sözleşmeyi bildirimsiz olarak istediği zaman
              kısmen veya bütünüyle devredebilir. Ancak KULLANICI ve ÜYE bu
              sözleşmeyi veya herhangi bir kısmını başka bir tarafa devredemez.
              Bu türden bir devir girişimi geçersizdir.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              MÜCBİR SEBEPLER
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Hukuken mücbir sebep sayılan tüm durumlarda, Personel.com işbu
              "İnternet sitesi kullanım koşulları ve üyelik sözleşmesi"ni geç
              ifa etmekten veya ifa etmemekten dolayı yükümlü değildir. Bu ve
              bunun gibi durumlar, Personel.com açısından, gecikme veya ifa
              etmeme veya temerrüt addedilmeyecek veya bu durumlar için
              Personel.com'un herhangi bir tazminat yükümlülüğü doğmayacaktır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              UYGULANACAK HUKUK VE YETKİ
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              İşbu "İnternet sitesi kullanım koşulları ve üyelik sözleşmesi"ndan
              kaynaklanacak ihtilaflar Türk Hukuku'na tabidir ve yetkili mahkeme
              İstanbul Mahkemeleri ve İcra Daireleri'dir. Personel.com'un,
              KULLANICI ve ÜYE'nin bulunduğu ülkede dava açma hakkı saklıdır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              YÜRÜRLÜK VE KABUL
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              İşbu "İnternet sitesi kullanım koşulları ve üyelik sözleşmesi",
              Personel.com tarafından SİTE içeriğinde ilan edildiği tarihte
              yürürlük kazanır. KULLANICI'lar ve ÜYE'ler, işbu sözleşme
              hükümlerini SİTE'yi kullanmakla kabul etmiş olmaktadırlar.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Personel.com, dilediği zaman işbu sözleşme hükümlerinde
              değişikliğe gidebilir, değişiklikler, sürüm numarası ve değişiklik
              tarihi belirtilerek SİTE üzerinden yayınlanır ve aynı tarihte
              yürürlüğe girer.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              İletişim
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Bu kullanım koşulları hakkında sorularınız için bizimle iletişime
              geçebilirsiniz:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>
                E-posta:{' '}
                <a
                  href='mailto:destek@personel.com'
                  className='text-[#003CFF] hover:underline'
                >
                  destek@personel.com
                </a>
              </li>
              <li>
                <Link
                  href='/iletisim'
                  className='text-[#003CFF] hover:underline'
                >
                  İletişim sayfamız
                </Link>{' '}
                üzerinden
              </li>
            </ul>
          </section>

          <div className='bg-[#003CFF] text-white p-6 rounded-[10px] mt-12'>
            <h3 className='font-semibold text-xl mb-4'>Önemli Notlar</h3>
            <ul className='space-y-2'>
              <li>
                • Bu koşullar, kullanıcı ile Personel.com arasındaki tam
                anlaşmayı oluşturur
              </li>
              <li>
                • Herhangi bir maddenin geçersiz olması, diğer maddelerin
                geçerliliğini etkilemez
              </li>
              <li>
                • Platform kullanımına devam etmek bu koşulları kabul ettiğiniz
                anlamına gelir
              </li>
            </ul>
            <p className='mt-4 text-sm'>Son güncelleme: Ocak 2025</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-[#100B21] py-8 mt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-white/80'>
            © 2025 Personel.com - Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
