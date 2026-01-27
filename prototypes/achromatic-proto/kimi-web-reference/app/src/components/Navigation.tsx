import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 transition-transform duration-200 group-hover:scale-105">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <path d="M16 2L4 8L16 14L28 8L16 2Z" fill="#171717"/>
                <path d="M4 14L16 20L28 14" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20L16 26L28 20" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-neutral-900 font-semibold">adapty</span>
          </a>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavDropdown label="Product">
              <NavItem href="/sdk" title="SDK" />
              <NavItem href="/paywall-builder" title="Paywall Builder" />
              <NavItem href="/analytics" title="Analytics" />
              <NavItem href="/ab-testing" title="A/B Testing" />
            </NavDropdown>
            
            <NavDropdown label="Cases">
              <NavItem href="/case-studies" title="Case Studies" />
              <NavItem href="/testimonials" title="Testimonials" />
            </NavDropdown>
            
            <NavDropdown label="Resources">
              <NavItem href="/docs" title="Documentation" />
              <NavItem href="/blog" title="Blog" />
              <NavItem href="/ebooks" title="Ebooks" />
            </NavDropdown>
            
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/customers">Customers</NavLink>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden sm:block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="text-sm px-4 py-2 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-50"
  >
    {children}
  </a>
)

const NavDropdown = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors rounded-md hover:bg-neutral-50">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-neutral-100 rounded-lg shadow-lg overflow-hidden py-1 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

const NavItem = ({ href, title }: { href: string; title: string }) => (
  <a
    href={href}
    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
  >
    {title}
  </a>
)

export default Navigation
