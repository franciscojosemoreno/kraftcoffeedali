import { images } from '@/config/images'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-kraft-900 text-white py-16 md:py-20">
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={images.logo} alt="Kraft" className="h-14 w-auto mb-4" />
            <p className="font-serif italic text-white/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors"
              >
                Spotify
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Locales
            </p>
            <div className="flex flex-col gap-3">
              {siteConfig.locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="font-sans text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    {loc.name}
                  </p>
                  <p className="font-sans text-xs text-white/40">{loc.address}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              {siteConfig.locations
                .filter((l) => l.whatsapp)
                .map((loc) => (
                  <a
                    key={loc.id}
                    href={`https://wa.me/${loc.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {loc.name}: {loc.whatsappLabel}
                  </a>
                ))}
              <a
                href={siteConfig.menuPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors mt-2"
              >
                Ver menú completo →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} Kraft Coffee Deli. Buenos Aires.
          </p>
          <a
            href="https://jmdigitalconsulting.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors"
          >
            Diseño web · JM Digital Consulting
          </a>
        </div>

      </div>
    </footer>
  )
}
