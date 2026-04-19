import Link from 'next/link'
import Image from 'next/image'
import Icon from './Icon'

const CATALOG_LINKS = [
  { label: 'Rodamientos',    cat: 'rodamientos'    },
  { label: 'Retenes',        cat: 'retenes'        },
  { label: 'Correas',        cat: 'correas'        },
  { label: 'Amortiguadores', cat: 'amortiguadores' },
  { label: 'Crucetas',       cat: 'crucetas'       },
  { label: 'Juntas',         cat: 'juntas'         },
  { label: 'Herramientas',   cat: 'herramientas'   },
  { label: 'Lubricantes',    cat: 'lubricantes'    },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111827', marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Image src="/logo-official.png" alt="Rodamientin" width={140} height={44} style={{ height: 44, width: 'auto', marginBottom: 12, background: '#fff', borderRadius: 4, padding: '3px 6px' }} />
          <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 16, fontStyle: 'italic' }}>"Rodamientos para tu vehículo, encontrados al toque."</p>
          <a href="https://wa.me/59100000000" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 14, fontWeight: 600, borderRadius: 999, padding: '9px 18px', width: 'fit-content' }}>
            <Icon name="whatsapp" size={18} color="#fff" />
            Consultanos
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Catálogo</div>
          {CATALOG_LINKS.map(({ label, cat }) => (
            <Link key={cat} href={`/catalogo?cat=${cat}`} style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 14, color: '#9CA3AF', padding: '3px 0', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Sucursales</div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#D1D5DB', marginBottom: 2 }}>Sucursal Central</div>
            <div style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.4 }}>Av. La Paz esq. Avaroa Nº 0196</div>
            <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>Lun–Vie 08:00–18:30 · Sáb –14:00</div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#D1D5DB', marginBottom: 2 }}>Sucursal Sur</div>
            <div style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.4 }}>Salida a Bermejo · F824+26M</div>
            <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>Lun–Vie 08:00–18:00</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Marcas</div>
          {['SKF', 'NSK', 'NTN', 'NAK', 'ZKL'].map(b => (
            <div key={b} style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: '#9CA3AF', padding: '3px 0' }}>{b}</div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1F2937', padding: '16px 24px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6B7280', fontFamily: 'var(--font-barlow), sans-serif' }}>
        <span>© 2026 Rodamientin · Tarija, Bolivia</span>
        <span style={{ color: '#4B5563' }}>Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
