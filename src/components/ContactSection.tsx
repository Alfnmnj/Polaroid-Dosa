// Social Media Icons - Premium Icons
const InstagramIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
  </svg>
);

const EmailIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

function ContactSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '40px 16px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '350px', margin: '0 auto' }}>

        {/* Service Categories */}
        <div style={{ marginBottom: '32px' }}>
          {/* First row: BRANDING & DESIGN and DIGITAL MARKETING */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '16px',
            flexWrap: 'nowrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#F59922',
                borderRadius: '50%'
              }}></div>
              <span style={{
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontFamily: 'Bricolage Grotesque, sans-serif'
              }}>
                BRANDING & DESIGN
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#F59922',
                borderRadius: '50%'
              }}></div>
              <span style={{
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontFamily: 'Bricolage Grotesque, sans-serif'
              }}>
                DIGITAL MARKETING
              </span>
            </div>
          </div>

          {/* Second row: CREATIVE SOLUTIONS centered */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#F59922',
                borderRadius: '50%'
              }}></div>
              <span style={{
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontFamily: 'Bricolage Grotesque, sans-serif'
              }}>
                CREATIVE SOLUTIONS
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '32px',
          flexWrap: 'nowrap'
        }}>
          <button
            onClick={() => scrollToSection("home")}
            style={{
              color: '#d1d5db',
              fontSize: '14px',
              fontWeight: 'normal',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              fontFamily: 'Bricolage Grotesque, sans-serif'
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about-section")}
            style={{
              color: '#d1d5db',
              fontSize: '14px',
              fontWeight: 'normal',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              fontFamily: 'Bricolage Grotesque, sans-serif'
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              color: '#d1d5db',
              fontSize: '14px',
              fontWeight: 'normal',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              fontFamily: 'Bricolage Grotesque, sans-serif'
            }}
          >
            Projects
          </button>
          <a
            href="mailto:polaroiddosa@gmail.com"
            style={{
              color: '#d1d5db',
              fontSize: '14px',
              fontWeight: 'normal',
              textDecoration: 'none',
              padding: '4px',
              fontFamily: 'Bricolage Grotesque, sans-serif'
            }}
          >
            Contact
          </a>
        </div>

        {/* Social Icons - Premium Icons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <a
            href="https://www.instagram.com/polaroiddosa?igsh=anI2bDJtanJweTh3"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#374151',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <InstagramIcon style={{ width: '16px', height: '16px', color: '#ffffff' }} />
          </a>
          <a
            href="https://wa.me/919446086999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#374151',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <WhatsAppIcon style={{ width: '16px', height: '16px', color: '#ffffff' }} />
          </a>
          <a
            href="mailto:polaroiddosa@gmail.com"
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#374151',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <EmailIcon style={{ width: '16px', height: '16px', color: '#ffffff' }} />
          </a>
        </div>

        {/* Phone Numbers */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            border: '1px solid #ffffff',
            borderRadius: '30px',
            padding: '12px 16px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '95%'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              border: '1px solid #ffffff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <span style={{
                color: '#ffffff',
                fontSize: '7px',
                fontWeight: '600'
              }}>
                PHONE
              </span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <a
                href="tel:+919446086999"
                style={{
                  display: 'block',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  marginBottom: '1px'
                }}
              >
                +91 94460 86999
              </a>
              <a
                href="tel:+917356872396"
                style={{
                  display: 'block',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                +91 73568 72396
              </a>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '0.02em',
            margin: '0',
            lineHeight: '1.1',
            fontFamily: 'Bricolage Grotesque, sans-serif'
          }}>
            POLAROID DOSA
          </h1>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #333333',
          paddingTop: '24px',
          color: '#9ca3af',
          fontSize: '12px'
        }}>
          © 2025 Polaroid Dosa. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}

export default ContactSection;