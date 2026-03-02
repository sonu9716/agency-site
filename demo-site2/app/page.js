import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';
import { Icons } from '@/components/Icons';
import ServiceCards from '@/components/ServiceCards';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const trustItems = [
  { val: '2,000+', label: 'Patients Cared For' },
  { val: '15+', label: 'Years of Practice' },
  { val: '4.9★', label: 'Google Rating' },
  { val: '98%', label: 'Patient Satisfaction' },
];

const blogPosts = [
  { tag: 'Pregnancy', title: '10 Things Every First-Time Mother Should Know', date: 'Feb 2026', href: '#', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&fit=crop' },
  { tag: 'PCOS', title: 'Managing PCOS Naturally: Diet & Lifestyle Tips', date: 'Jan 2026', href: '#', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&fit=crop' },
  { tag: 'Menopause', title: 'Navigating Menopause with Confidence', date: 'Dec 2025', href: '#', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #2D0B45 0%, #4A1060 45%, #6B1E7A 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '68px',
      }}>
        {/* Radial glows */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse 60% 80% at 75% 50%, rgba(212,175,55,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 70%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        {/* Top left accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(to right, #D4AF37, transparent)' }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <div style={{ width: '36px', height: '2px', background: '#D4AF37' }} />
                <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#D4AF37' }}>Niti Khand, Indirapuram</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: '900', color: '#fff', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Your Health,<br />Your Confidence,<br />
                <span style={{ color: '#D4AF37' }}>Your Doctor.</span>
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {['Senior Gynecologist', '15 Years Experience', 'MD Gynaecology'].map((b) => (
                  <span key={b} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', fontSize: '12px', padding: '5px 12px', borderRadius: '50px', fontWeight: '600' }}>{b}</span>
                ))}
              </div>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', lineHeight: '1.8', marginBottom: '36px', maxWidth: '420px' }}>
                Dr. Priya Gupta provides compassionate, expert care for every stage of a woman&apos;s health journey —
                from first periods to pregnancy to menopause.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-gold">
                  <Icons.calendar width={15} height={15} />
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919990421048?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20clinic%20website"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.4)',
                    color: '#fff', padding: '13px 24px', borderRadius: '8px',
                    fontWeight: '700', fontSize: '14px', textDecoration: 'none',
                  }}
                >
                  <Icons.whatsapp width={16} height={16} color="#25D366" />
                  Emergency Consult
                </a>
              </div>

              {/* Trust stats inline */}
              <div className="trust-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginTop: '52px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {trustItems.map((s, i) => (
                  <div key={s.label} style={{
                    paddingRight: i < 3 ? '16px' : 0,
                    marginRight: i < 3 ? '16px' : 0,
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.03em' }}>{s.val}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '3px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px 4px 24px 4px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=90&fit=crop&crop=top"
                  alt="Dr. Priya Gupta – Gynecologist in Indirapuram"
                  className="hero-doctor-img"
                  style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,11,69,0.8) 0%, transparent 55%)' }} />

                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <div style={{ fontWeight: '800', color: '#fff', fontSize: '17px' }}>Dr. Priya Gupta</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginTop: '2px' }}>MD (Gynaecology & Obstetrics) · AIIMS Graduate</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                    {[...Array(5)].map((_, i) => <Icons.star key={i} width={12} height={12} color="#D4AF37" />)}
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '4px' }}>4.9 · 180+ reviews</span>
                  </div>
                </div>
              </div>

              {/* IMA badge */}
              <div style={{ position: 'absolute', top: '24px', right: '8px', background: '#fff', borderRadius: '12px', padding: '14px 16px', boxShadow: '0 8px 32px rgba(74,16,96,0.2)', maxWidth: '145px' }}>
                <Icons.award width={22} height={22} color="#7B2D8B" style={{ marginBottom: '6px' }} />
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#1A0A2E', lineHeight: '1.4' }}>Member<br />Indian Medical<br />Association</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72L1440 72L1440 36C1200 72 800 0 480 36C240 64 120 16 0 36L0 72Z" fill="#FDFBFE" />
          </svg>
        </div>
      </section>

      {/* ─── PURPLE TICKER ─── */}
      <div style={{ background: '#7B2D8B', padding: '13px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: '60px', animation: 'marquee 28s linear infinite' }}>
          {['Pregnancy Care', 'PCOS Treatment', 'Menopause Management', 'IVF Counseling', 'Regular Checkups', 'Pregnancy Care', 'PCOS Treatment', 'Menopause Management', 'IVF Counseling', 'Regular Checkups'].map((t, i) => (
            <span key={i} style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.9)', letterSpacing: '2px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
              {t} <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES PREVIEW ─── */}
      <section style={{ background: '#FDFBFE', padding: '100px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="gold-line" />
              <span className="label-tag">Our Specialisations</span>
              <h2 className="heading-lg">Care Tailored for<br />Every Woman</h2>
            </div>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7B2D8B', fontWeight: '700', fontSize: '14px', textDecoration: 'none', borderBottom: '2px solid #7B2D8B', paddingBottom: '2px' }}>
              All Services <Icons.arrowRight width={13} height={13} />
            </Link>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* ─── FOR EXPECTING MOTHERS ─── */}
      <section style={{ background: 'linear-gradient(135deg, #F5EEF8, #E8DAEF)', padding: '100px 0' }}>
        <div className="container-custom">
          <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&q=90&fit=crop"
                alt="Expecting mother consultation"
                style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 60px rgba(74,16,96,0.2)' }}
              />
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                background: '#fff', borderRadius: '16px', padding: '20px 24px',
                boxShadow: '0 8px 32px rgba(74,16,96,0.15)', textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#7B2D8B' }}>500+</div>
                <div style={{ fontSize: '12px', color: '#987AB0', marginTop: '2px', fontWeight: '600' }}>Babies Delivered</div>
              </div>
            </div>
            <div>
              <div className="gold-line" />
              <span className="label-tag">For Expecting Mothers</span>
              <h2 className="heading-lg" style={{ marginBottom: '20px' }}>You&apos;re Not Alone on This Journey</h2>
              <p className="body-text" style={{ marginBottom: '28px' }}>
                From your first positive test to your baby&apos;s first cry, Dr. Priya Gupta provides
                comprehensive antenatal care — regular monitoring, diet guidance, birthing preparation,
                and 24/7 WhatsApp support for any worry, big or small.
              </p>
              {['Monthly / bi-weekly antenatal check-ups', 'High-risk pregnancy monitoring', 'Birthing plan & delivery support', 'Pre-conception counselling', 'Post-delivery care & breastfeeding guidance'].map((pt) => (
                <div key={pt} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7B2D8B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <Icons.check width={12} height={12} color="#fff" />
                  </div>
                  <span style={{ fontSize: '14px', color: '#5D397A', lineHeight: '1.5' }}>{pt}</span>
                </div>
              ))}
              <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn-primary">Learn About Pregnancy Care</Link>
                <Link href="/contact" className="btn-outline">Book a Visit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PATIENT STORIES ─── */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="gold-line" style={{ margin: '0 auto 16px' }} />
            <span className="label-tag">Patient Stories</span>
            <h2 className="heading-lg">Trusted by 2,000+ Women</h2>
            <p className="body-text" style={{ maxWidth: '520px', margin: '12px auto 0', textAlign: 'center' }}>All testimonials are shared anonymously to protect patient privacy.</p>
          </div>
          <TestimonialCarousel />
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/patient-stories" className="btn-outline">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* ─── WOMEN'S HEALTH TIPS BLOG ─── */}
      <section style={{ background: '#F5EEF8', padding: '100px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="gold-line" />
              <span className="label-tag">Women&apos;s Health Tips</span>
              <h2 className="heading-lg">Health Insights for You</h2>
            </div>
            <a href="#" style={{ fontSize: '14px', fontWeight: '700', color: '#7B2D8B', borderBottom: '2px solid #7B2D8B', paddingBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              View All <Icons.arrowRight width={13} height={13} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {blogPosts.map((post) => (
              <a key={post.title} href={post.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{ position: 'absolute', top: '14px', left: '14px', background: '#7B2D8B', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '50px', letterSpacing: '1px' }}>
                      {post.tag}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ fontSize: '12px', color: '#987AB0', marginBottom: '8px' }}>{post.date}</div>
                    <h3 style={{ fontWeight: '700', fontSize: '15px', color: '#1A0A2E', lineHeight: '1.5', marginBottom: '12px' }}>{post.title}</h3>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#7B2D8B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Read Article <Icons.chevronRight width={12} height={12} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / APPOINTMENT ─── */}
      <section style={{ background: 'linear-gradient(135deg, #2D0B45, #4A1060)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(212,175,55,0.08), transparent 60%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <div style={{ height: '3px', width: '40px', background: '#D4AF37', marginBottom: '28px', borderRadius: '2px' }} />
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '900', color: '#fff', letterSpacing: '-0.02em', lineHeight: '1.15', marginBottom: '20px' }}>
                Book Your Appointment Today
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.8', fontSize: '15px', marginBottom: '36px' }}>
                Evening clinics Mon–Sat 5–9 PM. Walk-ins welcome. Same-day appointments often available.
                WhatsApp for quick response or call directly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="tel:+919990421048" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icons.phone width={18} height={18} color="#D4AF37" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Call</div>
                    <div style={{ fontWeight: '700', color: '#fff', fontSize: '15px' }}>+91 99904 21048</div>
                  </div>
                </a>
                <a href="https://wa.me/919990421048" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icons.whatsapp width={18} height={18} color="#25D366" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>WhatsApp</div>
                    <div style={{ fontWeight: '700', color: '#fff', fontSize: '15px' }}>Emergency Consult</div>
                  </div>
                </a>
                {/* Download PDF */}
                <a
                  href="/health-checklist.pdf"
                  download
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(212,175,55,0.3)', textDecoration: 'none', background: 'rgba(212,175,55,0.08)' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212,175,55,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icons.download width={18} height={18} color="#D4AF37" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Free Download</div>
                    <div style={{ fontWeight: '700', color: '#D4AF37', fontSize: '15px' }}>Women&apos;s Health Checklist PDF</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#fff', borderRadius: '20px', padding: '36px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1A0A2E', marginBottom: '6px' }}>Quick Appointment Request</h3>
              <p style={{ fontSize: '13px', color: '#987AB0', marginBottom: '24px' }}>Select your concern and we&apos;ll open WhatsApp for you.</p>
              <AppointmentForm compact={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
