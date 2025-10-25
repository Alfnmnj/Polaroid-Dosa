import { useState, useEffect, memo } from "react";

export const AboutSectionOriginal = memo(function AboutSectionOriginal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className="scroll-optimized relative py-12 px-9"
      style={{ background: "#F9F5F0" }}
    >
      <div
        className="max-w-[1180px] mx-auto"
        style={{ padding: "36px", boxSizing: "border-box" }}
      >
        {/* Hero Card */}
        <div className={`relative flex gap-10 overflow-visible transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          {/* Left Column - Text Content */}
          <div
            className="flex flex-col justify-center"
            style={{ flex: "0 0 48%" }}
          >
            {/* Horizontal ABOUT US Label */}
            <div
              style={{
                fontSize: "16px",
                color: "#F59922",
                letterSpacing: "0.08em",
                fontWeight: "700",
                fontFamily: "Bricolage Grotesque, sans-serif",
                marginBottom: "24px",
                marginLeft: "60px",
              }}
            >
              ABOUT US
            </div>

            <div style={{ marginLeft: "60px" }}>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#0f0f10",
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                }}
              >
                We're Creative Directors
              </p>
              <h1
                className="text-black font-extrabold mb-7"
                style={{
                  fontWeight: "900",
                  fontSize: "clamp(48px, 8.5vw, 78px)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.02em",
                  color: "#0f0f10",
                  fontFamily: "Bricolage Grotesque, sans-serif",
                }}
              >
                Who Shape Brands
              </h1>
            </div>

            {/* Orange Horizontal Line */}
            <div
              style={{
                background: "#F59922",
                height: "4px",
                width: "180px",
                marginTop: "24px",
                marginLeft: "60px",
              }}
            ></div>
          </div>

          {/* Right Column - Supporting Text */}
          <div style={{ flex: "1" }}>
            <div
              className="relative flex items-center justify-center"
              style={{ height: "360px" }}
            >
              <div
                style={{
                  background: "#F59922",
                  borderRadius: "24px",
                  padding: "32px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                className="hover:shadow-2xl hover:scale-[1.015]"
              >
                <p
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    maxWidth: "480px",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                  }}
                >
                  We're a team of creative mind cooking up bold ideas and flavorful designs that bring brands to life. At Polaroid Dosa, we blend strategy with imagination to craft experiences that not only look beautiful but connect deeply with people. Every project we serve is seasoned with creativity, precision, and purpose — designed to leave a lasting taste in your audience's mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});