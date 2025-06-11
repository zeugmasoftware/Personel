'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [phoneError, setPhoneError] = useState<string>('');
  const [isPhoneFocused, setIsPhoneFocused] = useState<boolean>(false);

  // Turkish phone number validation
  const validateTurkishPhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');

    // Turkish mobile numbers patterns:
    // - +90 5XX XXX XX XX (starts with +905)
    // - 0 5XX XXX XX XX (starts with 05)
    // - 5XX XXX XX XX (starts with 5)

    // Check if it's a valid Turkish mobile number
    if (cleanPhone.length === 13 && cleanPhone.startsWith('905')) {
      // +90 5XX XXX XX XX format
      return /^905[0-9]{9}$/.test(cleanPhone);
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith('05')) {
      // 0 5XX XXX XX XX format
      return /^05[0-9]{9}$/.test(cleanPhone);
    } else if (cleanPhone.length === 10 && cleanPhone.startsWith('5')) {
      // 5XX XXX XX XX format
      return /^5[0-9]{9}$/.test(cleanPhone);
    }

    return false;
  };

  // Format phone number as user types
  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters except +
    const cleaned = value.replace(/[^\d+]/g, '');

    // Handle different input scenarios
    if (cleaned.startsWith('+90')) {
      const digits = cleaned.substring(3);
      if (digits.length <= 3) return `+90 ${digits}`;
      if (digits.length <= 6)
        return `+90 ${digits.substring(0, 3)} ${digits.substring(3)}`;
      if (digits.length <= 8)
        return `+90 ${digits.substring(0, 3)} ${digits.substring(
          3,
          6
        )} ${digits.substring(6)}`;
      return `+90 ${digits.substring(0, 3)} ${digits.substring(
        3,
        6
      )} ${digits.substring(6, 8)} ${digits.substring(8, 10)}`;
    } else if (cleaned.startsWith('0')) {
      if (cleaned.length <= 4) return cleaned;
      if (cleaned.length <= 7)
        return `${cleaned.substring(0, 4)} ${cleaned.substring(4)}`;
      if (cleaned.length <= 9)
        return `${cleaned.substring(0, 4)} ${cleaned.substring(
          4,
          7
        )} ${cleaned.substring(7)}`;
      return `${cleaned.substring(0, 4)} ${cleaned.substring(
        4,
        7
      )} ${cleaned.substring(7, 9)} ${cleaned.substring(9, 11)}`;
    } else if (cleaned.length > 0 && !cleaned.startsWith('+')) {
      if (cleaned.length <= 3) return cleaned;
      if (cleaned.length <= 6)
        return `${cleaned.substring(0, 3)} ${cleaned.substring(3)}`;
      if (cleaned.length <= 8)
        return `${cleaned.substring(0, 3)} ${cleaned.substring(
          3,
          6
        )} ${cleaned.substring(6)}`;
      return `${cleaned.substring(0, 3)} ${cleaned.substring(
        3,
        6
      )} ${cleaned.substring(6, 8)} ${cleaned.substring(8, 10)}`;
    }

    return cleaned;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));

      // Validate phone number and show error if invalid
      if (formattedPhone && !validateTurkishPhone(formattedPhone)) {
        setPhoneError(
          'Geçerli bir telefon numarası giriniz (örn: 0532 123 45 67)'
        );
      } else {
        setPhoneError('');
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePhoneFocus = () => {
    setIsPhoneFocused(true);
  };

  const handlePhoneBlur = () => {
    setIsPhoneFocused(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    if (!validateTurkishPhone(formData.phone)) {
      setPhoneError(
        'Geçerli bir telefon numarası giriniz (örn: 0532 123 45 67)'
      );
      alert('Lütfen geçerli bir telefon numarası giriniz.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' });
        setPhoneError('');
        alert('Kayıt başarılı! E-posta adresinize onay mesajı gönderildi.');
      } else {
        setSubmitStatus('error');
        alert('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      alert('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4'>
        <div>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Ad Soyad'
            required
            autoComplete='name'
            className='w-full px-4 sm:px-6 py-4 sm:py-5 rounded-lg bg-white text-[#100B21] placeholder-[#100B21] text-xl font-bold border-0 focus:outline-none focus:ring-2 focus:ring-[#003CFF]'
            style={{
              fontFamily: '"Mona Sans", sans-serif',
              letterSpacing: '-0.05em',
            }}
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='E-Posta'
            required
            autoComplete='email'
            className='w-full px-4 sm:px-6 py-4 sm:py-5 rounded-lg bg-white text-[#100B21] placeholder-[#100B21] text-xl font-bold border-0 focus:outline-none focus:ring-2 focus:ring-[#003CFF]'
            style={{
              fontFamily: '"Mona Sans", sans-serif',
              letterSpacing: '-0.05em',
            }}
          />
        </div>
        <div className='sm:col-span-2 lg:col-span-1'>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            placeholder='Telefon Numarası'
            required
            autoComplete='tel'
            className={`w-full px-4 sm:px-6 py-4 sm:py-5 rounded-lg bg-white text-[#100B21] placeholder-[#100B21] text-xl font-bold border-0 focus:outline-none focus:ring-2 ${
              phoneError && isPhoneFocused
                ? 'focus:ring-red-500 ring-2 ring-red-500'
                : 'focus:ring-[#003CFF]'
            }`}
            style={{
              fontFamily: '"Mona Sans", sans-serif',
              letterSpacing: '-0.05em',
            }}
          />
          {isPhoneFocused && (
            <div className='h-6 mt-2 flex items-start'>
              {phoneError && (
                <p
                  className='text-red-500 text-sm font-medium'
                  style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                  {phoneError}
                </p>
              )}
            </div>
          )}
        </div>
        <div className='sm:col-start-2 lg:col-start-1 xl:col-start-3'>
          <button
            type='submit'
            disabled={isSubmitting || !!phoneError}
            className={`w-full ${
              isSubmitting || phoneError
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#FF7654] hover:bg-[#E6673F]'
            } text-white font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-lg transition-colors duration-200 text-lg sm:text-xl`}
            style={{
              fontFamily: '"Mona Sans", sans-serif',
              letterSpacing: '-0.05em',
            }}
          >
            {isSubmitting ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
          </button>
        </div>
      </div>
    </form>
  );
}
