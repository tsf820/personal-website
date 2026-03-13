import { Linkedin, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrambleText } from "@/components/ScrambleText";
import { useTextScramble } from "@/hooks/use-text-scramble";

const LINK_CLASS = "text-white hover:text-white transition-all duration-300 border-b border-white/20 hover:border-white/80 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]";

const FadeIn = ({ delay, children }: { delay: number; children: React.ReactNode }) => {
  const { started } = useTextScramble("x", { delay, duration: 100 });
  return (
    <span style={{ opacity: started ? 1 : 0, transition: "opacity 0.3s ease" }}>
      {children}
    </span>
  );
};

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
                <h1 className="text-2xl md:text-3xl font-light tracking-tight font-sans">
                  <ScrambleText text="Teddy" delay={500} duration={1200} />
                </h1>
                <h1 className="text-2xl md:text-3xl font-light tracking-tight font-sans">
                  <ScrambleText text="Freedman" delay={800} duration={1400} />
                </h1>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2.5 ml-0.5">
                <FadeIn delay={2000}>
                  <a href="https://www.linkedin.com/in/teddyfreedman/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white/70 hover:text-white/90 transition-colors">
                    <Linkedin size={isMobile ? 11 : 15} />
                  </a>
                </FadeIn>
                <FadeIn delay={2000}>
                  <a href="mailto:teddyfreedman@gmail.com"
                     className="text-white/70 hover:text-white/90 transition-colors flex items-center space-x-1.5">
                    <Mail size={isMobile ? 11 : 15} />
                    <ScrambleText text="teddyfreedman@gmail.com" delay={2200} duration={1200} className="text-[11px] md:text-[14px] font-light font-sans" />
                  </a>
                </FadeIn>
              </div>
            </div>

            {/* Current Role - with highlight */}
            <div className="space-y-2 md:space-y-2.5">
              <div className="space-y-0.5 md:space-y-1">
                <p className="text-[11px] md:text-[14px] font-light text-white/70 font-sans">
                  <ScrambleText text="CURRENTLY" delay={3500} duration={800} />
                </p>
                <p className="text-[11px] md:text-[14px] font-light ml-2 hover:text-white/90 transition-colors font-sans">
                  <ScrambleText text="Investing in Consumer Brick & Mortar — " delay={4500} duration={1200} />
                  <a href="http://bonside.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                    <ScrambleText text="Bonside" delay={4800} duration={800} />
                  </a>
                </p>
                <p className="text-[11px] md:text-[14px] font-light ml-2 hover:text-white/90 transition-colors font-sans">
                  <ScrambleText text="Building a Secondaries Platform — " delay={5800} duration={1200} />
                  <a href="https://duendevc.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                    <ScrambleText text="Duende Ventures" delay={6100} duration={800} />
                  </a>
                </p>
                <p className="text-[11px] md:text-[14px] font-light ml-2 hover:text-white/90 transition-colors font-sans">
                  <ScrambleText text="Bringing European Tifo Culture to U.S. Sports — " delay={7100} duration={1200} />
                  <a href="https://www.tifolabs.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                    <ScrambleText text="TifoLabs" delay={7400} duration={800} />
                  </a>
                </p>
              </div>

              {/* Previous Roles - with elegant spacing */}
              <div className="space-y-0.5 md:space-y-1">
                <p className="text-[11px] md:text-[14px] font-light text-white/70 font-sans">
                  <ScrambleText text="PREVIOUSLY" delay={8500} duration={800} />
                </p>
                <div className="space-y-0.5 md:space-y-1 ml-2">
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    <ScrambleText text="Democratizing Access to Private Equity — " delay={9500} duration={1000} />
                    <a href="http://investwithaqua.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      <ScrambleText text="Aqua" delay={9800} duration={800} />
                    </a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    <ScrambleText text="Designing Football Pilgrimages with Eric Cantona — " delay={10500} duration={1000} />
                    <a href="https://www.seekdharma.com/looking-fc/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      <ScrambleText text="Looking FC" delay={10800} duration={800} />
                    </a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    <ScrambleText text="Launching Travel Brands — " delay={11500} duration={1000} />
                    <a href="https://www.seekdharma.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      <ScrambleText text="Dharma" delay={11800} duration={800} />
                    </a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    <ScrambleText text="Software for Digital Nomads — " delay={12500} duration={1000} />
                    <a href="https://www.nomad.do/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      <ScrambleText text="Nomad" delay={12800} duration={800} />
                    </a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    <ScrambleText text="Late-Stage Technology Private Equity — " delay={13200} duration={1000} />
                    <a href="https://siris.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      <ScrambleText text="Siris Capital" delay={13500} duration={800} />
                    </a>
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light hover:text-white/90 transition-colors font-sans">
                    <ScrambleText text="Fintech Investment Banking — " delay={13900} duration={1000} />
                    <a href="https://www.guggenheimpartners.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                      <ScrambleText text="Guggenheim Partners" delay={14200} duration={800} />
                    </a>
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
