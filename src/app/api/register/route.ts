import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Submit to Google Form function
const submitToGoogleForm = async (data: RegistrationData) => {
  const formUrl = process.env.GOOGLE_FORM_SUBMIT_URL;
  const nameEntryId = process.env.GOOGLE_FORM_ENTRY_ID_NAME;
  const emailEntryId = process.env.GOOGLE_FORM_ENTRY_ID_EMAIL;
  const phoneEntryId = process.env.GOOGLE_FORM_ENTRY_ID_PHONE;

  if (!formUrl || !nameEntryId || !emailEntryId || !phoneEntryId) {
    console.error('Google Form environment variables not set');
    throw new Error('Google Form configuration is incomplete.');
  }

  const formData = new URLSearchParams();
  formData.append(nameEntryId, data.name);
  formData.append(emailEntryId, data.email);
  formData.append(phoneEntryId, data.phone);

  try {
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      console.warn(
        `Google Form submission response status: ${response.status}`
      );
    }
    console.log('Data submitted to Google Form successfully');
  } catch (error) {
    console.error('Google Form submission error:', error);
    throw error;
  }
};

// Send notification email function
const sendNotificationEmail = async (data: RegistrationData) => {
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!process.env.RESEND_API_KEY || !notificationEmail) {
    console.error('Resend configuration is incomplete');
    throw new Error('Email configuration is incomplete.');
  }

  try {
    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: notificationEmail,
      subject: 'Yeni Form Başvurusu',
      html: `
        <h2>🎉 Yeni Kayıt Başvurusu</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
          <h3>Başvuru Detayları:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">İsim:</td>
              <td style="padding: 8px; color: #666;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">E-posta:</td>
              <td style="padding: 8px; color: #666;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Telefon:</td>
              <td style="padding: 8px; color: #666;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Tarih:</td>
              <td style="padding: 8px; color: #666;">${new Date().toLocaleString('tr-TR')}</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 20px; color: #888; font-size: 12px;">
          Bu e-posta otomatik olarak gönderilmiştir.
        </p>
      `,
    });

    console.log('Notification email sent successfully:', result.data?.id);
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json();

    // Validate data
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }

    // Submit to Google Form
    try {
      await submitToGoogleForm(data);
    } catch (formSubmitError) {
      console.error('Google Form submission failed:', formSubmitError);
      return NextResponse.json(
        { error: 'Kayıt sırasında bir hata oluştu' },
        { status: 500 }
      );
    }

    // Send notification email
    try {
      await sendNotificationEmail(data);
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the whole request if email fails
      console.warn('Registration successful but email notification failed');
    }

    return NextResponse.json(
      { message: 'Kayıt başarıyla tamamlandı' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu' },
      { status: 500 }
    );
  }
}
