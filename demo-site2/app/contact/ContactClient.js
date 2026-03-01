'use client';
import { Icons } from '@/components/Icons';
import AppointmentForm from '@/components/AppointmentForm';

const timings = [
    { day: 'Monday – Friday', time: '5:00 PM – 9:00 PM', note: 'Evening consultations' },
    { day: 'Saturday', time: '10:00 AM – 1 PM & 5 PM – 9 PM', note: 'Full day available' },
    { day: 'Sunday', time: '10:00 AM – 1:00 PM', note: 'Limited slots' },
];

export default function ContactClient() {
    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '120px', paddingBottom: '72px', background: 'linear-gradient(145deg, #2D0B45, #4A1060)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(212,175,55,0.07), transparent 60%)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ height: '3px', width: '40px', background: '#D4AF37', margin: '0 auto 20px', borderRadius: '2px' }} />
                    <span className="label-tag">Find Us</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>Book an Appointment</h1>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
                        Visit us at Niti Khand, Indirapuram or reach us via WhatsApp. Evening slots available for working women.
                    </p>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 50" fill="none"><path d="M0 50L1440 50L1440 20C1200 50 800 0 480 25C240 45 120 10 0 25L0 50Z" fill="#FDFBFE" /></svg>
                </div>
            </section>

            {/* Content */}
            <section style={{ background: '#FDFBFE', padding: '96px 0' }}>
                <div className="container-custom">
                    <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                        {/* Left info */}
                        <div>
                            <div className="gold-line" />
                            <span className="label-tag">Clinic Information</span>
                            <h2 className="heading-lg" style={{ marginBottom: '36px' }}>We&apos;re Here for You</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                                {[
                                    { Icon: Icons.phone, label: 'Phone', value: '+91 99904 21048', href: 'tel:+919990421048', color: '#7B2D8B', bg: '#F5EEF8' },
                                    { Icon: Icons.whatsapp, label: 'WhatsApp', value: 'Emergency Consult', href: 'https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website', color: '#25D366', bg: '#E8F5E9' },
                                    { Icon: Icons.mapPin, label: 'Clinic Address', value: 'Niti Khand, Indirapuram, Ghaziabad – 201014', href: 'https://maps.google.com/?q=Niti+Khand,+Indirapuram,+Ghaziabad', color: '#E65100', bg: '#FFF3E0' },
                                    { Icon: Icons.mail, label: 'Email', value: 'drpriyagupta@example.com', href: 'mailto:drpriyagupta@example.com', color: '#0288D1', bg: '#E3F2FD' },
                                ].map((item) => {
                                    const Icon = item.Icon;
                                    return (
                                        <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '18px 20px', borderRadius: '12px', border: '1.5px solid #E2D4EC', textDecoration: 'none', background: '#fff', transition: 'border-color 0.2s ease' }}
                                        >
                                            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Icon width={18} height={18} color={item.color} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '11px', color: '#987AB0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</div>
                                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A0A2E', marginTop: '2px', lineHeight: '1.4' }}>{item.value}</div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Timings */}
                            <div style={{ background: '#F5EEF8', borderRadius: '16px', padding: '28px', border: '1px solid #E2D4EC' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                    <Icons.clock width={18} height={18} color="#7B2D8B" />
                                    <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#1A0A2E' }}>Clinic Hours</h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {timings.map((t) => (
                                        <div key={t.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px' }}>
                                            <div>
                                                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A0A2E' }}>{t.day}</div>
                                                <div style={{ fontSize: '12px', color: '#D4AF37', fontWeight: '600', marginTop: '2px' }}>{t.note}</div>
                                            </div>
                                            <div style={{ fontWeight: '700', fontSize: '14px', color: '#7B2D8B', textAlign: 'right' }}>{t.time}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E2D4EC', fontSize: '13px', color: '#987AB0' }}>
                                    Walk-ins welcome · Same-day appointments often available · WhatsApp for quickest response
                                </div>
                            </div>
                        </div>

                        {/* Right: Form + Map */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ background: '#fff', borderRadius: '20px', padding: '36px', border: '1px solid #E2D4EC', boxShadow: '0 4px 24px rgba(74,16,96,0.06)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1A0A2E', marginBottom: '6px' }}>Book via WhatsApp</h3>
                                <p style={{ fontSize: '13px', color: '#987AB0', marginBottom: '24px' }}>Fill in your details and we&apos;ll open WhatsApp with everything pre-filled.</p>
                                <AppointmentForm compact={true} />
                            </div>

                            {/* Map */}
                            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(74,16,96,0.1)', border: '1px solid #E2D4EC' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3!2d77.36!3d28.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c9a9a9a9a9%3A0x0!2sNiti+Khand%2C+Indirapuram%2C+Ghaziabad!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Clinic Location – Niti Khand, Indirapuram"
                                />
                            </div>

                            {/* Download PDF */}
                            <a
                                href="/health-checklist.pdf"
                                download
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '16px',
                                    padding: '18px 22px', borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #2D0B45, #4A1060)',
                                    textDecoration: 'none', color: '#fff',
                                }}
                            >
                                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icons.download width={20} height={20} color="#D4AF37" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Free Resource</div>
                                    <div style={{ fontWeight: '800', fontSize: '15px', color: '#D4AF37' }}>Women&apos;s Annual Health Checklist PDF</div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Practical guide to preventive healthcare</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
