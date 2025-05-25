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
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${isMobile ? '0.8' : '1.4'})`,
            width: isMobile ? '200%' : '120%',
            height: isMobile ? '200%' : '120%',
            pointerEvents: 'none',
          }}
        ></iframe>
      </div>
      
      {/* Content container with proper overflow handling */}
      <div className="relative z-10 h-full w-full overflow-auto">
        {/* Professional text overlay with modern design */}
        <div className="fixed md:bottom-12 md:left-12 bottom-8 left-6 z-10 max-w-2xl">
          <div className="space-y-4 md:space-y-6">
            {/* Name Section */}
            <div className="space-y-1 md:space-y-2">
              <div>
                <h1 className="text-2xl md:text-4xl font-light tracking-tight">Teddy</h1>
                <h1 className="text-2xl md:text-4xl font-light tracking-tight">Freedman</h1>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 ml-1">
                <a href="https://www.linkedin.com/in/teddyfreedman/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-white/70 hover:text-white/90 transition-colors">
                  <Linkedin size={isMobile ? 12 : 16} />
                </a>
                <a href="mailto:teddyfreedman@gmail.com"
                   className="text-white/70 hover:text-white/90 transition-colors flex items-center space-x-2">
                  <Mail size={isMobile ? 12 : 16} />
                  <span className="text-[10px] md:text-sm font-light">teddyfreedman@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Current Role - with highlight */}
            <div className="space-y-3 md:space-y-4">
              <div className="space-y-1.5 md:space-y-2">
                <p className="text-xs md:text-base font-light text-white/70">CURRENTLY</p>
                <p className="text-[10px] md:text-sm font-light ml-3 md:ml-4 hover:text-white/90 transition-colors">
                  Investing in Brick & Mortar —{' '}
                  <a href="http://bonside.com/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">
                    Bonside
                  </a>
                </p>
              </div>

              {/* Previous Roles - with elegant spacing */}
              <div className="space-y-1.5 md:space-y-2">
                <p className="text-xs md:text-base font-light text-white/70">PREVIOUSLY</p>
                <div className="space-y-1.5 md:space-y-2 ml-3 md:ml-4">
                  <p className="text-[10px] md:text-sm font-light hover:text-white/90 transition-colors">
                    Democratizing Access to Private Equity —{' '}
                    <a href="http://investwithaqua.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Aqua</a>
                  </p>
                  <p className="text-[10px] md:text-sm font-light hover:text-white/90 transition-colors">
                    Designing Football Pilgrimages with Eric Cantona —{' '}
                    <a href="https://www.seekdharma.com/looking-fc/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Looking FC</a>
                  </p>
                  <p className="text-[10px] md:text-sm font-light hover:text-white/90 transition-colors">
                    Launching Travel Brands —{' '}
                    <a href="https://www.seekdharma.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Dharma</a>
                  </p>
                  <p className="text-[10px] md:text-sm font-light hover:text-white/90 transition-colors">
                    Building Software for Digital Nomads —{' '}
                    <a href="https://www.nomad.do/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Nomad</a>
                  </p>
                  <p className="text-[10px] md:text-sm font-light hover:text-white/90 transition-colors">
                    Take Privates of Mature Tech Companies —{' '}
                    <a href="https://siris.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Siris Capital</a>
                  </p>
                  <p className="text-[10px] md:text-sm font-light hover:text-white/90 transition-colors">
                    Buying and Selling Fintech Businesses —{' '}
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
