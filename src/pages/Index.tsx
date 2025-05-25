import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Rocket, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Full screen Spline Animation Background */}
      <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden">
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
            transform: 'translate(-50%, -50%) scale(1.4)',
            width: '120%',
            height: '120%',
            pointerEvents: 'none',
          }}
        ></iframe>
      </div>
      
      {/* Professional text overlay with modern design */}
      <div className="fixed bottom-12 left-12 z-10 max-w-2xl">
        <div className="space-y-6">
          {/* Name Section */}
          <div className="space-y-2">
            <div>
              <h1 className="text-4xl font-light tracking-tight">Teddy</h1>
              <h1 className="text-4xl font-light tracking-tight">Freedman</h1>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-1">
              <a href="https://www.linkedin.com/in/teddyfreedman/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white/70 hover:text-white/90 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:teddyfreedman@gmail.com"
                 className="text-white/70 hover:text-white/90 transition-colors flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm font-light">teddyfreedman@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Current Role - with highlight */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-base font-light text-white/70">CURRENTLY</p>
              <p className="text-sm font-light ml-4 hover:text-white/90 transition-colors">
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
            <div className="space-y-2">
              <p className="text-base font-light text-white/70">PREVIOUSLY</p>
              <div className="space-y-2 ml-4">
                <p className="text-sm font-light hover:text-white/90 transition-colors">
                  Democratizing Access to Private Equity —{' '}
                  <a href="http://investwithaqua.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Aqua</a>
                </p>
                <p className="text-sm font-light hover:text-white/90 transition-colors">
                  Growing Eric Cantona's Travel Venture —{' '}
                  <a href="https://www.seekdharma.com/looking-fc/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Looking FC</a>
                </p>
                <p className="text-sm font-light hover:text-white/90 transition-colors">
                  Launching Travel Brands —{' '}
                  <a href="https://www.seekdharma.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Dharma</a>
                </p>
                <p className="text-sm font-light hover:text-white/90 transition-colors">
                  Building Software for Digital Nomads —{' '}
                  <a href="https://www.nomad.do/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Nomad</a>
                </p>
                <p className="text-sm font-light hover:text-white/90 transition-colors">
                  Late-Stage Technology Private Equity —{' '}
                  <a href="https://siris.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Siris Capital</a>
                </p>
                <p className="text-sm font-light hover:text-white/90 transition-colors">
                  Fintech M&A —{' '}
                  <a href="https://www.guggenheimpartners.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white/60">Guggenheim Partners</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
