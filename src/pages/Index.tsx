import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Rocket, Linkedin, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black text-white">
      {/* Full screen Spline Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src="https://my.spline.design/retrofuturismbganimation-bnpeMfLpW2NoII33RnX2Q8O2" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="RetroFuturism Background Animation"
          loading="lazy"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${isMobile ? '0.6' : '1.4'})`,
            width: isMobile ? '180%' : '120%',
            height: isMobile ? '180%' : '120%',
            pointerEvents: 'none',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        ></iframe>
      </div>
      
      {/* Content container with proper overflow handling */}
      <div className="relative z-10 h-full w-full overflow-auto">
        {/* Professional text overlay with modern design */}
        <div className="fixed md:bottom-10 md:left-10 bottom-6 left-4 z-10 max-w-xl">
          <div className="space-y-2.5 md:space-y-3.5">
            {/* Name Section */}
            <div className="space-y-0.5">
              <div>
                <h1 className="text-2xl md:text-3xl font-light tracking-tight font-sans">Teddy</h1>
                <h1 className="text-2xl md:text-3xl font-light tracking-tight font-sans">Freedman</h1>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-2.5 ml-0.5">
                <a href="https://www.linkedin.com/in/teddyfreedman/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-white/70 hover:text-white/90 transition-colors">
                  <Linkedin size={isMobile ? 11 : 15} />
                </a>
                <a href="mailto:teddyfreedman@gmail.com"
                   className="text-white/70 hover:text-white/90 transition-colors flex items-center space-x-1.5">
                  <Mail size={isMobile ? 11 : 15} />
                  <span className="text-[11px] md:text-[14px] font-light font-sans">teddyfreedman@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Current Role - with highlight */}
            <div className="space-y-2 md:space-y-2.5">
              <div className="space-y-0.5 md:space-y-1">
                <p className="text-[11px] md:text-[14px] font-light text-white/70 font-sans">CURRENTLY</p>
                <p className="text-[11px] md:text-[14px] font-light ml-2 hover:text-white/90 transition-colors font-sans">
                  Investing in Consumer Brick & Mortar —{' '}
                  <a href="http://bonside.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">
                    Bonside
                  </a>
                </p>
                <p className="text-[11px] md:text-[14px] font-light ml-2 hover:text-white/90 transition-colors font-sans">
                  Launching a Secondaries Platform —{' '}
                  <a href="https://duendevc.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">
                    Duende Ventures
                  </a>
                </p>
                <p className="text-[11px] md:text-[14px] font-light ml-2 hover:text-white/90 transition-colors font-sans">
                  Bringing European Tifo Culture to U.S. Stadiums —{' '}
                  <a href="https://www.tifolabs.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">
                    TifoLabs
                  </a>
                </p>
              </div>

              {/* Previous Roles - with elegant spacing */}
              <div className="space-y-0.5 md:space-y-1">
                <p className="text-[11px] md:text-[14px] font-light text-white/70 font-sans">PREVIOUSLY</p>
                <div className="space-y-0.5 md:space-y-1 ml-2">
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    Democratizing Access to Private Equity —{' '}
                    <a href="http://investwithaqua.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Aqua</a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    Designing Football Pilgrimages with Eric Cantona —{' '}
                    <a href="https://www.seekdharma.com/looking-fc/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Looking FC</a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    Launching Travel Brands —{' '}
                    <a href="https://www.seekdharma.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Dharma</a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    Building Software for Digital Nomads —{' '}
                    <a href="https://www.nomad.do/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Nomad</a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    Late-Stage Technology Private Equity —{' '}
                    <a href="https://siris.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Siris Capital</a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    Fintech Investment Banking —{' '}
                    <a href="https://www.guggenheimpartners.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Guggenheim Partners</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
