import Link from 'next/link';

export default function KVKK() {
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
          Web Sitesi Gizlilik Politikası ve KVKK
        </h1>

        <div className='prose prose-lg max-w-none'>
          <div className='bg-gray-50 p-6 rounded-[10px] mb-8'>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Personel.com ("Şirket"), internet sitesini ziyaret eden kişilerin
              paylaşmış olduğu bilgilerin gizliliğini sağlamayı ilke olarak
              kabul etmiştir. Bu nedenle işbu "Gizlilik Politikası" kişilerin
              hangi bilgilerinin, hangi yollarla işlendiğini, bu bilgilerin
              hukuka uygun olarak ve vermiş olduğunuz izin kapsamında hangi
              üçüncü kişiler ile paylaşıldığını ve Şirket tarafından ne şekilde
              korunduğunu açıklayarak sizi bilgilendirmek amacı ile
              oluşturulmuştur.
            </p>
          </div>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Veri Sorumlusu
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Kişisel veri kimliği belirli veya belirlenebilir gerçek kişiye
              ilişkin isim, soyisim, doğum tarihi veya telefon numarası gibi her
              türlü bilgiyi ifade etmektedir.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Kişisel verileriniz, veri sorumlusu sıfatıyla Personel.com
              tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
              başta olmak üzere, ilgili mevzuat düzenlemeleri ve yetkili otorite
              kararları/duyuruları ile işbu Gizlilik Politikası çerçevesinde
              işlenmektedir.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Şirket, gizliliğinizin ve kişisel verilerinizin korunmasına
              ilişkin endişelerinize saygı duymaktadır. Bu kapsamda Şirket,
              kişisel verilerinizi KVKK başta olmak üzere kişisel verilerin
              korunmasına ilişkin tüm mevzuat hükümlerine uygun şekilde
              işlemekte, verilerinizin güvenli şekilde barındırılmasını
              sağlamakta ve olası hukuka aykırı erişimlere karşı gerekli tüm
              güvenlik tedbirlerini almaktadır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Gizlilik Politikasının Kapsamı ve Toplanan Veriler
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Belirli bir kişiye ait kullanılacak ve işlenecek bilgiler,
              yalnızca bu kişinin kendi istemiyle veri girmesi veya bu hususta
              açıkça muvafakat vermesi halinde mümkündür. İnternet sitesi
              ziyaret edildiğinde bazı bilgiler internet sitesi sunucularında
              depolanır.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Bu veriler şu şekilde olabilir:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>İsim</li>
              <li>Soyisim</li>
              <li>Adres</li>
              <li>Posta kodu</li>
              <li>E-mail</li>
              <li>Telefon/Fax numarası</li>
              <li>Kredi kartı numarası</li>
              <li>Kimlik numarası</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Kişisel Verilerin Kullanım Amaçları
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Kişisel verilerin ve çerezlerin kullanım amaçları aşağıda
              listelenmiştir:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>Kullanıcıların deneyimlerini özelleştirme</li>
              <li>Web sitelerine erişim</li>
              <li>Kullanıcılarla iletişimin sağlanması</li>
              <li>Rekabet</li>
              <li>Reklam ve pazarlama</li>
              <li>Analizler ve pazar araştırması yapma</li>
              <li>İnternet sitesini yönetme ve kayıt tutma</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Çocukların Gizliliği
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              İnternet sitemizde 18 yaşının altındaki çocuklara yönelik
              içerikler bulunmaktadır. Bu bağlamda çocuklardan toplanması söz
              konusu olabilecek tüm veriler çocuğun velisinin ya da vasisinin
              onayıyla toplanmaktadır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Çerez Kullanımı
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Şirket, anılan kişisel verilerden bazılarını teknik bir iletişim
              dosyasını (Çerez-cookie) kullanarak elde edebilir. Bahsi geçen
              teknik iletişim dosyaları, ana bellekte saklanmak üzere bir
              internet sitesinin kullanıcının tarayıcısına gönderdiği küçük
              metin dosyalarıdır.
            </p>
            <p className='text-gray-700 leading-relaxed mb-4'>
              İnternet sitesinde kullanılan çerezler şu şekildedir:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>İnternet sitesini bulmak amacı ile kullanılan kelimeler</li>
              <li>İnternet servisi sağlayıcısının ismi</li>
              <li>IP adresi ve/veya konumu</li>
              <li>Erişim sağlayan bilgisayarın işletim sistemi</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Hizmetlerden Faydalanabilmek İçin Gereken Veriler
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Şirket, internet sitesi üzerinden yaptığınız hizmet alımlarında
              güvenliğinizi önemsemektedir. Bu nedenle kredi kartı bilgileriniz
              sadece satın alım işlemi gerçekleştirilirken kullanılır ve veri
              tabanında kayıtlı olarak tutulmaz.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Diğer İnternet Sitelerine Verilen Bağlantılar
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Şirket internet sitesi, içeriğinde üçüncü kişilere ait internet
              sitelerine yönlendiren bağlantılar/linkler içerebilecek olup işbu
              Gizlilik Politikası bu internet siteleri için geçerli değildir.
              Şirket bu internet sitelerine ilişkin herhangi bir sorumluluk
              kabul etmemektedir.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Sosyal Medya
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Şirket internet sitesi üretilen içeriklerin sosyal medya ağlarında
              paylaşılabilmesi için bazı sosyal medya ağlarına gömülü şekilde
              bağlantı vermektedir. Bu bağlantılı hizmetler yalnızca onay
              verilmesi durumunda çalışmakta olup bu sosyal medya
              bağlantılarının amacı site içeriklerinin görüntülenmesi ve
              istenildiğinde arkadaşlarınızla ve yakınlarınızla
              paylaşabilmenizdir.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              İşlenen Kişisel Veri Kategorileri ve İşlenme Amaçları
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Paylaşılan kişisel veriler müşterilere verilen hizmetlerin
              gereklerini, sözleşmenin ve teknolojinin gereklerine uygun şekilde
              yapabilmek, sunulan ürün ve hizmetlerimizi geliştirebilmek için;
              kamu güvenliğine ilişkin hususlarda ve hukuki uyuşmazlıklarda,
              talep halinde ve mevzuat gereği savcılıklara, mahkemelere ve
              ilgili kamu görevlilerine bilgi verebilmek için; üyelerimize geniş
              kapsamda çeşitli imkanlar sunabilmek için veya bu imkanları
              sunabilecek kişi ve kurumlarla yasal çerçevede paylaşabilmek için;
              reklam tercihlerini analiz etmek için 6698 sayılı KVKK ve ilgili
              ikincil düzenlemelere uygun olarak işlenecektir.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Verileri Saklama Süresi
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Üye olurken doğrudan paylaşılan veriler üyelik süresinin devamı
              boyunca saklanmaktadır. Bültene abone olurken paylaşılan veriler
              abonelikten ayrılana kadar sistemde saklanmaktadır. IP adresleri
              sistemde süresiz boyunca saklanmaktadır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Kişisel Verilerin Aktarılabileceği Üçüncü Kişi Veya Kuruluşlar
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Yukarıda belirtilen amaçlarla, Personel.com ile paylaşılan kişisel
              verilerin aktarılabileceği kişi ve kuruluşlar; ana hissedarlar,
              hissedarlar, reklam verenler, doğrudan veya dolaylı
              yurtiçi/yurtdışı iştiraklerimiz; başta Personel.com altyapısını
              kullanan üye firmalar ve bunlarla sınırlı olmamak üzere sunulan
              hizmet ile ilgili kişi ve kuruluşlar olmak üzere, faaliyetlerimizi
              yürütmek üzere veya Veri İşleyen sıfatı ile hizmet aldığımız, iş
              birliği yaptığımız, program ortağı kuruluşları, yurtiçi/yurtdışı
              kuruluşlar ve diğer 3. kişiler ve kuruluşlardır.
            </p>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Veri Sahibinin Hakları
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Veri sahibi verilerine erişim hakkını her zaman kullanabilir. Buna
              ek olarak ilgili şartların yerine getirilmesi durumunda KVKK madde
              11'de düzenlenen haklar ve aşağıda belirtilen haklar
              kullanılabilir:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>Düzeltme hakkı</li>
              <li>Silme hakkı</li>
              <li>İşlemeyi kısıtlama hakkı</li>
              <li>
                Yetkili veri koruma denetim kurumu üzerinden bir şikayet
                oluşturma hakkı
              </li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>Kişisel verilerin işlenmesine itiraz hakkı</li>
              <li>Kişisel verilerin işlenmesine onayın geri çekilmesi</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Başvuru Yöntemleri
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Kanun kapsamında, kişisel verileriniz ile ilgili her türlü talep,
              şikayet ve önerilerinizi, kimliğinizi tevsik edici belgeler ve
              talebinizi içeren dilekçeniz ile aşağıdaki yöntemlerle
              başvurabilirsiniz:
            </p>
            <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
              <li>
                E-posta:{' '}
                <a
                  href='mailto:kvkk@personel.com'
                  className='text-[#003CFF] hover:underline'
                >
                  kvkk@personel.com
                </a>
              </li>
              <li>Posta yoluyla şirket adresimize yazılı başvuru</li>
              <li>Platform üzerinden iletişim formu</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2
              className='text-[#231655] font-semibold text-2xl mb-4'
              style={{ fontFamily: '"Mona Sans", sans-serif' }}
            >
              Bilgi Güncelleme ve Değişiklik
            </h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Şirket, gizlilik veri koruma prensiplerini güncel tutmak ve ilgili
              mevzuata uygun hale getirmek için işbu Gizlilik Politikası'nın
              içeriğini dilediği zaman değiştirebilir. Değişen Gizlilik
              Politikası Şirket internet sitesinde ilan edilir. Gizlilik
              Politikası'nın güncel haline personel.com adresinden sürekli
              olarak ulaşmanız mümkündür.
            </p>
          </section>

          <div className='bg-[#003CFF] text-white p-6 rounded-[10px] mt-12'>
            <h3 className='font-semibold text-xl mb-4'>Güncellemeler</h3>
            <p className='leading-relaxed'>
              Bu KVKK ve Gizlilik Politikası metni gerektiğinde güncellenebilir.
              Güncellemeler hakkında kullanıcılarımız e-posta yoluyla veya
              platform üzerinden bilgilendirilecektir.
            </p>
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
