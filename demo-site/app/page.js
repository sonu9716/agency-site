import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';
import { Icons } from '@/components/Icons';
import ServiceTiles from '@/components/ServiceTiles';

const testimonials = [
  { name: 'Priya Gupta', initials: 'PG', text: 'My root canal was completely painless. The clinic is spotless and Dr. Sharma is incredibly calm and reassuring. Cannot recommend enough.', rating: 5, loc: 'Indirapuram' },
  { name: 'Rahul Verma', initials: 'RV', text: 'Got my dental implants done 2 years ago. They look and feel exactly like natural teeth. The entire team was professional throughout.', rating: 5, loc: 'Vaishali' },
  { name: 'Anita Singh', initials: 'AS', text: 'My kids genuinely enjoy their dental visits here — no crying, no fuss. Dr. Sharma has a rare gift for putting children at ease.', rating: 5, loc: 'Raj Nagar, GZB' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        background: '#0B1C38',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '70px',
      }}>
        {/* Subtle texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(21,101,192,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(76,175,80,0.08) 0%, transparent 60%)
          `,
        }} />

        {/* Thin accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'linear-gradient(to bottom, #4CAF50, transparent)' }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>
          <div className="hero-grid" style={{ display: 'grid', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
                <div style={{ width: '32px', height: '2px', background: '#4CAF50' }} />
                <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#4CAF50' }}>Vaibhav Khand, Indirapuram</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: '900',
                color: '#fff',
                lineHeight: '1.1',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}>
                Your Smile<br />
                Deserves<br />
                <span style={{ color: '#4CAF50' }}>Expert Care.</span>
              </h1>

              <p style={{
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: '1.8',
                marginBottom: '40px',
                maxWidth: '420px',
              }}>
                Dr. Amit Sharma brings 20+ years of precision dentistry to Indirapuram —
                from root canals to implants to smile makeovers.
              </p>

              <div className="hero-btn-group" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#4CAF50', color: '#fff',
                  padding: '13px 28px', borderRadius: '6px',
                  fontWeight: '700', fontSize: '14px',
                  letterSpacing: '0.3px', transition: 'all 0.2s ease',
                }}>
                  Book Appointment
                  <Icons.arrowRight width={16} height={16} />
                </Link>
                <a href="tel:+919990421048" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff',
                  padding: '13px 28px', borderRadius: '6px',
                  fontWeight: '600', fontSize: '14px',
                  transition: 'all 0.2s ease',
                }}>
                  <Icons.phone width={16} height={16} color="#4CAF50" />
                  +91 99904 21048
                </a>
              </div>

              {/* Stats row */}
              <div className="hero-stat-row" style={{ display: 'flex', gap: '0', marginTop: '56px', paddingTop: '36px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { val: '500+', label: 'Patients Treated' },
                  { val: '98%', label: 'Success Rate' },
                  { val: '20+', label: 'Years of Practice' },
                ].map((s, i) => (
                  <div key={s.label} style={{
                    flex: 1,
                    paddingRight: i < 2 ? '24px' : 0,
                    marginRight: i < 2 ? '24px' : 0,
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}>
                    <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.03em' }}>{s.val}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '3px', fontWeight: '500' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '4px 24px 4px 24px',
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=90&fit=crop&crop=top"
                  alt="Dr. Amit Sharma – Dentist in Indirapuram"
                  style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay gradient for card */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,56,0.85) 0%, transparent 50%)' }} />

                {/* Bottom info card */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '2px' }}>Dr. Amit Sharma</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px' }}>BDS, MDS · Endodontist & Implantologist</div>
                    </div>
                    <div style={{
                      background: '#4CAF50',
                      color: '#fff',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex', alignItems: 'center', gap: '4px',
                    }}>
                      <Icons.star width={12} height={12} />
                      4.9 · 250 reviews
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating award badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '8px',
                background: '#fff',
                borderRadius: '12px',
                padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                textAlign: 'center',
                minWidth: '110px',
              }}>
                <Icons.award width={24} height={24} color="#1565C0" style={{ margin: '0 auto 6px' }} />
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#1A1A2E', lineHeight: '1.3' }}>Best Dentist<br />Indirapuram 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE BAND ─── */}
      <div style={{ background: '#4CAF50', padding: '14px 0', overflow: 'hidden', position: 'relative', width: '100%', maxWidth: '100vw' }}>
        <div style={{ display: 'inline-flex', gap: '60px', animation: 'marquee 25s linear infinite', whiteSpace: 'nowrap' }}>
          {['Root Canal Treatment', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening', 'Kids Dentistry', 'Root Canal Treatment', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening', 'Kids Dentistry'].map((t, i) => (
            <span key={i} style={{ fontSize: '13px', fontWeight: '600', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '16px', paddingLeft: i === 0 ? '24px' : '0' }}>
              {t}
              <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#4CAF50', marginBottom: '12px' }}>What We Treat</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '900', color: '#0B1C38', letterSpacing: '-0.02em', lineHeight: '1.15' }}>
                Comprehensive<br />Dental Care
              </h2>
            </div>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#1565C0', fontWeight: '700', fontSize: '14px',
              borderBottom: '2px solid #1565C0', paddingBottom: '2px',
            }}>
              All Services <Icons.arrowRight width={14} height={14} />
            </Link>
          </div>

          <ServiceTiles />
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ background: '#F8FBFF', padding: '100px 0' }}>
        <div className="container-custom">
          <div className="about-grid" style={{ display: 'grid', alignItems: 'center' }}>
            {/* Stacked photo layout */}
            <div style={{ position: 'relative', paddingBottom: '60px' }}>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=90&fit=crop"
                alt="Dental clinic"
                style={{ width: '85%', borderRadius: '16px', objectFit: 'cover', height: '360px', display: 'block', boxShadow: '0 20px 60px rgba(11,28,56,0.15)' }}
              />
              {/* Overlapping second image */}
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80&fit=crop"
                alt="Dental procedure"
                style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: '55%', height: '220px',
                  objectFit: 'cover', borderRadius: '16px',
                  border: '4px solid #F8FBFF',
                  boxShadow: '0 12px 40px rgba(11,28,56,0.2)',
                }}
              />
              {/* Floating stat */}
              <div style={{
                position: 'absolute', top: '24px', right: '0',
                background: '#0B1C38', color: '#fff',
                padding: '18px 22px', borderRadius: '14px',
                boxShadow: '0 8px 32px rgba(11,28,56,0.25)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#4CAF50' }}>98%</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>Success Rate</div>
              </div>
            </div>

            {/* Right text */}
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#4CAF50', marginBottom: '12px' }}>Why Patients Trust Us</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: '900', color: '#0B1C38', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                Indirapuram&apos;s Most Trusted<br />Dental Practice
              </h2>
              <p style={{ color: '#546E7A', lineHeight: '1.8', fontSize: '15px', marginBottom: '36px' }}>
                Dr. Amit Sharma built this practice on one principle: every patient deserves the same
                care he would give his own family. That means no unnecessary procedures, honest
                pricing, and treatments that last.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {[
                  { Icon: Icons.microscope, title: 'Advanced Technology', desc: 'Digital X-rays, rotary endodontics, laser whitening' },
                  { Icon: Icons.shield, title: 'Hospital-Grade Sterilisation', desc: 'Autoclaved instruments, disposable kits for every patient' },
                  { Icon: Icons.heart, title: 'Genuinely Painless', desc: 'Modern anaesthesia and a calm, reassuring approach' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <item.Icon width={18} height={18} color="#1565C0" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '14px', color: '#0B1C38', marginBottom: '3px' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: '#78909C', lineHeight: '1.5' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#0B1C38', color: '#fff',
                padding: '13px 28px', borderRadius: '6px',
                fontWeight: '700', fontSize: '14px',
              }}>
                Meet Dr. Amit Sharma
                <Icons.arrowRight width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ background: '#0B1C38', padding: '100px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#4CAF50', marginBottom: '12px' }}>Patient Stories</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.02em' }}>What Our Patients Say</h2>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <Icons.star key={i} width={18} height={18} color="#FFB300" />
              ))}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginLeft: '8px', alignSelf: 'center' }}>4.9 / 5 · Google</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <div key={t.name} style={{
                background: i === 1 ? '#1565C0' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${i === 1 ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px',
                padding: '32px 28px',
              }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '18px' }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Icons.star key={j} width={14} height={14} color="#FFB300" />
                  ))}
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '24px', fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: i === 1 ? 'rgba(255,255,255,0.2)' : '#1565C0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: '800', fontSize: '14px',
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <Icons.mapPin width={10} height={10} color="rgba(255,255,255,0.35)" />
                      {t.loc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SPLIT ─── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container-custom">
          <div className="cta-grid" style={{ display: 'grid', alignItems: 'start', minWidth: 0 }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#4CAF50', marginBottom: '12px' }}>Ready to visit us?</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '900', color: '#0B1C38', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Book Your Appointment Today
              </h2>
              <p style={{ color: '#546E7A', lineHeight: '1.8', fontSize: '15px', marginBottom: '36px' }}>
                Walk-ins welcome. Same-day appointments often available.
                Mon – Sat 9:00 AM – 8:00 PM · Sunday 10:00 AM – 2:00 PM
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:+919990421048" style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '18px 22px', borderRadius: '10px',
                  border: '1.5px solid #E0E7EF', textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icons.phone width={18} height={18} color="#1565C0" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#78909C', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Call Us</div>
                    <div style={{ fontWeight: '700', color: '#0B1C38', fontSize: '15px' }}>+91 99904 21048</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website"
                  target="_blank" rel="noopener noreferrer"
                  className="cta-contact-btn"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '18px 22px', borderRadius: '10px',
                    border: '1.5px solid #E0E7EF', textDecoration: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icons.whatsapp width={18} height={18} color="#25D366" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#78909C', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>WhatsApp</div>
                    <div style={{ fontWeight: '700', color: '#0B1C38', fontSize: '15px' }}>Chat with us instantly</div>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=Vaibhav+Khand,+Indirapuram,+Ghaziabad"
                  target="_blank" rel="noopener noreferrer"
                  className="cta-contact-btn"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '18px 22px', borderRadius: '10px',
                    border: '1.5px solid #E0E7EF', textDecoration: 'none',
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icons.mapPin width={18} height={18} color="#E65100" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#78909C', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Location</div>
                    <div style={{ fontWeight: '700', color: '#0B1C38', fontSize: '15px' }}>Vaibhav Khand, Indirapuram</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="cta-form-card" style={{ background: '#F8FBFF', borderRadius: '20px', padding: '36px', border: '1px solid #E0E7EF' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0B1C38', marginBottom: '6px' }}>Quick Appointment Request</h3>
              <p style={{ fontSize: '13px', color: '#78909C', marginBottom: '24px' }}>Fills WhatsApp automatically — just tap send.</p>
              <AppointmentForm compact={true} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          /* ── HERO GRID: force single column ── */
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          /* ── HERO BUTTONS: stack full-width ── */
          .hero-btn-group {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .hero-btn-group a {
            width: 100% !important;
            justify-content: center !important;
            box-sizing: border-box !important;
          }

          /* ── HERO STATS: compact 3-column ── */
          .hero-stat-row {
            margin-top: 36px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-btn-group a {
            font-size: 15px !important;
            padding: 14px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
