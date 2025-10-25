import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    { icon: "psychology", title: "Brand Strategy & Identity" },
    { icon: "brush", title: "Design & Visual Communication" },
    { icon: "rocket_launch", title: "Integrated Marketing Campaigns" },
    { icon: "auto_awesome", title: "Innovative Solutions" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-20 max-w-[1400px] mx-auto px-8 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <p
              className="text-2xl font-bold drop-shadow-md text-shadow-small"
              style={{ color: "#F59922" }}
            >
              Hey, We're
            </p>
            <h1
              className="font-extrabold text-6xl md:text-7xl lg:text-8xl leading-none mb-8 text-black drop-shadow-2xl"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              Brewing Brands
              <br />
              to Perfection
            </h1>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-150 group">
                    <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-150 shadow-sm">
                      <span className="material-icons text-black text-2xl">{service.icon}</span>
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className={`flex flex-col items-end justify-center space-y-6 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="text-right">
              <h2 className="font-semibold text-3xl mb-4" style={{ color: '#F59922' }}>
                Great work should
                <br />
                feel invisible.
              </h2>
              <p className="text-[#F59922]/70 max-w-md">
                From perfect imagery to compelling brands, crafted to connect and convert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}