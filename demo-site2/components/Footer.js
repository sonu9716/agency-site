import Link from 'next/link';
import { Icons } from '@/components/Icons';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: '#1A0A2E', color: '#fff', paddingTop: '64px' }}>
            <div className="container-custom">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', paddingBottom: '52px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #7B2D8B, #4A1060)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icons.stethoscope width={20} height={20} color="#fff" />
                            </div>
                            <div>
                                <div style={{ fontWeight: '800', fontSize: '15px' }}>Dr. Priya Gupta</div>
                                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>MD Gynaecology & Obstetrics</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '20px' }}>
                            Compassionate women&apos;s healthcare in Niti Khand, Indirapuram. 15+ years of dedicated service.
                        </p>
                        {/* IMA badge */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '8px', padding: '8px 14px' }}>
                            <Icons.shield width={14} height={14} color="#D4AF37" />
                            <span style={{ fontSize: '12px', color: '#D4AF37', fontWeight: '700' }}>Member – Indian Medical Association</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[['/', 'Home'], ['/about', 'About Dr. Priya'], ['/services', 'Our Services'], ['/patient-stories', 'Patient Stories'], ['/contact', 'Book Appointment']].map(([href, label]) => (
                                <Link key={href} href={href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}>
                                    <Icons.chevronRight width={12} height={12} color="rgba(255,255,255,0.3)" />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>Services</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {['Pregnancy Care', 'PCOS Treatment', 'Menopause Management', 'IVF Counseling', 'Regular Checkups'].map((s) => (
                                <Link key={s} href="/services" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Icons.chevronRight width={12} height={12} color="rgba(255,255,255,0.3)" />
                                    {s}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <Icons.phone width={15} height={15} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Phone</div>
                                    <a href="tel:+919990421048" style={{ fontWeight: '600', fontSize: '14px', color: '#fff', textDecoration: 'none' }}>+91 99904 21048</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <Icons.mapPin width={15} height={15} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Address</div>
                                    <div style={{ fontWeight: '600', fontSize: '13px', color: '#fff', lineHeight: '1.5' }}>Niti Khand, Indirapuram<br />Ghaziabad – 201014</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <Icons.clock width={15} height={15} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Timings</div>
                                    <div style={{ fontWeight: '600', fontSize: '13px', color: '#fff', lineHeight: '1.5' }}>Mon–Sat: 5 PM – 9 PM<br />Sunday: 10 AM – 1 PM</div>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website"
                                target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    background: '#25D366', color: '#fff', padding: '10px 18px',
                                    borderRadius: '8px', fontWeight: '700', fontSize: '13px',
                                    textDecoration: 'none', width: 'fit-content',
                                }}
                            >
                                <Icons.whatsapp width={16} height={16} />
                                Emergency Consult
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                        © {year} Dr. Priya Gupta – Sharma Women&apos;s Clinic. All rights reserved.
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
                        Built with care by{' '}
                        <a href="https://docsitesolutions.online" style={{ color: '#D4AF37', fontWeight: '700', textDecoration: 'none' }}>DocSite Solutions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
