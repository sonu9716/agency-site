'use client';
import AppointmentForm from '@/components/AppointmentForm';

const timings = [
    { day: 'Monday', time: '9:00 AM – 8:00 PM', open: true },
    { day: 'Tuesday', time: '9:00 AM – 8:00 PM', open: true },
    { day: 'Wednesday', time: '9:00 AM – 8:00 PM', open: true },
    { day: 'Thursday', time: '9:00 AM – 8:00 PM', open: true },
    { day: 'Friday', time: '9:00 AM – 8:00 PM', open: true },
    { day: 'Saturday', time: '9:00 AM – 6:00 PM', open: true },
    { day: 'Sunday', time: '10:00 AM – 2:00 PM', open: true },
];

export default function ContactClient() {
    const phone = '919990421048';
    const waMessage = encodeURIComponent(
        'Hi, I want a free consultation for my clinic website'
    );
    const mapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.!2d77.3717!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a02b9e47af%3A0xe3a7c30b29c71dab!2sVaibhav%20Khand%2C%20Indirapuram%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    paddingTop: '120px',
                    paddingBottom: '80px',
                    background: 'linear-gradient(135deg, #0D1B3E 0%, #1565C0 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(76,175,80,0.1), transparent 60%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <span className="badge" style={{ marginBottom: '20px' }}>📍 Find Us</span>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
                        Book an Appointment
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
                        Visit us at Vaibhav Khand, Indirapuram or contact us via phone / WhatsApp.
                        Same-day appointments often available.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#F8FBFF" />
                    </svg>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#F8FBFF' }}>
                <div className="container-custom">
                    <div className="contact-grid">
                        {/* Left Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Contact Info Card */}
                            <div className="card responsive-card-padding">
                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1A1A2E', marginBottom: '20px' }}>
                                    📞 Contact Information
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <a
                                        href="tel:+919990421048"
                                        style={{ display: 'flex', gap: '14px', alignItems: 'center' }}
                                    >
                                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>📞</div>
                                        <div>
                                            <div style={{ fontSize: '12px', color: '#78909C', marginBottom: '2px' }}>Phone</div>
                                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#1565C0' }}>+91 99904 21048</div>
                                        </div>
                                    </a>

                                    <a
                                        href={`https://wa.me/${phone}?text=${waMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', gap: '14px', alignItems: 'center' }}
                                    >
                                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>💬</div>
                                        <div>
                                            <div style={{ fontSize: '12px', color: '#78909C', marginBottom: '2px' }}>WhatsApp</div>
                                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#4CAF50' }}>+91 99904 21048</div>
                                        </div>
                                    </a>

                                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>📍</div>
                                        <div>
                                            <div style={{ fontSize: '12px', color: '#78909C', marginBottom: '2px' }}>Address</div>
                                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#1A1A2E', lineHeight: '1.5' }}>
                                                Shop No. 12, Vaibhav Khand<br />
                                                Indirapuram, Ghaziabad<br />
                                                Uttar Pradesh – 201010
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F3E5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>✉️</div>
                                        <div>
                                            <div style={{ fontSize: '12px', color: '#78909C', marginBottom: '2px' }}>Email</div>
                                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#1A1A2E' }}>
                                                dr.amitsharma@sharmadentalclinic.in
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/${phone}?text=${waMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-accent"
                                    style={{ marginTop: '24px', justifyContent: 'center', fontSize: '15px' }}
                                >
                                    💬 Chat on WhatsApp Now
                                </a>
                            </div>

                            {/* Timings */}
                            <div className="card responsive-card-padding">
                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1A1A2E', marginBottom: '20px' }}>
                                    ⏰ Clinic Timings
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                    {timings.map((t, i) => (
                                        <div
                                            key={t.day}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '11px 0',
                                                borderBottom: i < timings.length - 1 ? '1px solid #F0F4F8' : 'none',
                                            }}
                                        >
                                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#1A1A2E' }}>{t.day}</div>
                                            <div
                                                style={{
                                                    fontSize: '13px',
                                                    color: t.open ? '#388E3C' : '#EF5350',
                                                    fontWeight: '500',
                                                    background: t.open ? '#E8F5E9' : '#FFEBEE',
                                                    padding: '3px 10px',
                                                    borderRadius: '50px',
                                                }}
                                            >
                                                {t.time}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    style={{
                                        marginTop: '16px',
                                        padding: '12px 16px',
                                        background: '#E3F2FD',
                                        borderRadius: '10px',
                                        fontSize: '13px',
                                        color: '#1565C0',
                                        fontWeight: '500',
                                    }}
                                >
                                    💡 Emergency dental services available. Call anytime.
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Appointment Form */}
                            <div className="card responsive-card-padding">
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A2E', marginBottom: '8px' }}>
                                    📅 Book an Appointment
                                </h3>
                                <p style={{ color: '#546E7A', fontSize: '14px', marginBottom: '24px' }}>
                                    Fill the form below and it will open WhatsApp with your details pre-filled.
                                </p>
                                <AppointmentForm />
                            </div>

                            {/* Map */}
                            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                                <div style={{ padding: '20px 24px', borderBottom: '1px solid #E0E7EF' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1A1A2E' }}>
                                        🗺️ Find Us on Google Maps
                                    </h3>
                                    <p style={{ color: '#546E7A', fontSize: '13px', marginTop: '4px' }}>
                                        Vaibhav Khand, Indirapuram, Ghaziabad
                                    </p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14003.562614437226!2d77.36430774999999!3d28.644808749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a03a6b9a9b%3A0x45c3b8a84d0b60f6!2sVaibhav%20Khand%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201012!5e0!3m2!1sen!2sin!4v1709315600000!5m2!1sen!2sin"
                                    width="100%"
                                    height="340"
                                    style={{ border: 0, display: 'block', maxWidth: '100%' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sharma Dental Clinic Location – Vaibhav Khand, Indirapuram"
                                />
                                <div style={{ padding: '16px 24px', background: '#F8FBFF' }}>
                                    <a
                                        href="https://maps.google.com/?q=Vaibhav+Khand,+Indirapuram,+Ghaziabad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ fontSize: '14px', padding: '10px 20px' }}
                                    >
                                        🗺️ Open in Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
