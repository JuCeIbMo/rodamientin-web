'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Icon from './Icon'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) router.push(`/catalogo?q=${encodeURIComponent(search.trim())}`)
  }

  const navLinks = [
    { href: '/',           label: 'Inicio'     },
    { href: '/catalogo',   label: 'Catálogo'   },
    { href: '/sucursales', label: 'Sucursales' },
  ]

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 20 }}>
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image src="/logo-official.png" alt="Rodamientin" width={140} height={40} style={{ height: 40, width: 'auto', background: '#fff', borderRadius: 4, padding: '2px 4px' }} priority />
        </Link>

        <form onSubmit={handleSearch} style={{ flex: 1, position: 'relative', maxWidth: 440 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', display: 'flex' }}>
            <Icon name="search" size={18} color="#9CA3AF" />
          </span>
          <input
            type="text"
            placeholder="Buscar por código o descripción (ej. 6205-2RS)…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', fontFamily: 'var(--font-barlow), sans-serif', fontSize: 14, border: '1.5px solid #D1D5DB', borderRadius: 8, padding: '9px 14px 9px 38px', outline: 'none', color: '#111827', transition: 'border-color 150ms' }}
          />
        </form>

        <nav style={{ display: 'flex', gap: 4 }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: 14,
              padding: '6px 12px',
              borderRadius: 6,
              textDecoration: 'none',
              color: pathname === href ? '#D41515' : '#374151',
              fontWeight: pathname === href ? 600 : 400,
            }}>
              {label}
            </Link>
          ))}
        </nav>

        <a href="https://wa.me/59100000000" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#25D366', color: '#fff', fontFamily: 'var(--font-barlow), sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', borderRadius: 999, padding: '9px 18px', flexShrink: 0, boxShadow: '0 2px 10px rgba(37,211,102,0.28)' }}>
          <Icon name="whatsapp" size={18} color="#fff" />
          Consultanos
        </a>
      </div>
    </header>
  )
}
