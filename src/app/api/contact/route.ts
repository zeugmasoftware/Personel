import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Send contact notification email function
const sendContactNotification = async (data: ContactFormData) => {
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!process.env.RESEND_API_KEY || !notificationEmail) {
    console.error('Resend configuration is incomplete');
    throw new Error('Email configuration is incomplete.');
  }

  try {
    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `📧 Yeni İletişim Mesajı: ${data.subject}`,
      html: `
        <h2>💬 Yeni İletişim Mesajı Alındı</h2>
        <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; font-family: Arial, sans-serif; margin: 16px 0;">
          <h3 style="color: #1e293b; margin-bottom: 16px;">Mesaj Detayları:</h3>
          <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <tr style="background-color: #f1f5f9;">
              <td style="padding: 12px 16px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Gönderen:</td>
              <td style="padding: 12px 16px; color: #475569; border-bottom: 1px solid #e2e8f0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">E-posta:</td>
              <td style="padding: 12px 16px; color: #475569; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr style="background-color: #f1f5f9;">
              <td style="padding: 12px 16px; font-weight: bold; color: #334155; border-bottom: 1px solid #e2e8f0;">Konu:</td>
              <td style="padding: 12px 16px; color: #475569; border-bottom: 1px solid #e2e8f0;">${data.subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #334155; vertical-align: top; background-color: #f8fafc;">Mesaj:</td>
              <td style="padding: 12px 16px; color: #475569; background-color: #f8fafc; line-height: 1.6;">
                ${data.message.replace(/\n/g, '<br>')}
              </td>
            </tr>
            <tr style="background-color: #f1f5f9;">
              <td style="padding: 12px 16px; font-weight: bold; color: #334155;">Tarih:</td>
              <td style="padding: 12px 16px; color: #475569;">${new Date().toLocaleString('tr-TR')}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #dbeafe; border: 1px solid #93c5fd; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>💡 Hızlı Yanıt:</strong> Bu e-postaya doğrudan yanıt vererek müşteriyle iletişime geçebilirsiniz.
          </p>
        </div>
        
        <p style="margin-top: 24px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 16px;">
          Bu e-posta <strong>Personel.com</strong> iletişim formu aracılığıyla otomatik olarak gönderilmiştir.
        </p>
      `,
    });

    console.log(
      'Contact notification email sent successfully:',
      result.data?.id
    );
  } catch (error) {
    console.error('Contact email sending error:', error);
    throw error;
  }
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate data
    if (!data.name || !data.email || !data.subject || !data.message) {
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

    // Validate message length
    if (data.message.length < 10) {
      return NextResponse.json(
        { error: 'Mesaj en az 10 karakter olmalıdır' },
        { status: 400 }
      );
    }

    if (data.message.length > 2000) {
      return NextResponse.json(
        { error: 'Mesaj 2000 karakterden uzun olamaz' },
        { status: 400 }
      );
    }

    // Send contact notification email
    try {
      await sendContactNotification(data);
    } catch (emailError) {
      console.error('Contact email notification failed:', emailError);
      return NextResponse.json(
        { error: 'Mesaj gönderilirken bir hata oluştu' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası oluştu' },
      { status: 500 }
    );
  }
}
