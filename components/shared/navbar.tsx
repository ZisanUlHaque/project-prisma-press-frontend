'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, Settings, User } from 'lucide-react'

// Navigation items array
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

// User dropdown options array
const userMenuItems = [
  { icon: User, label: 'Profile', action: 'profile' },
  { icon: Settings, label: 'Settings', action: 'settings' },
  { icon: LogOut, label: 'Logout', action: 'logout' },
]

export default function Navbar() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' })

  const handleUserMenuClick = (action: string) => {
    console.log(`User clicked: ${action}`)
    if (action === 'logout') {
      // Handle logout logic
      setUser({ name: '', email: '' })
    }
    // Add more action handlers as needed
  }

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-green-700 to-green-700 flex items-center justify-center">
              <span className="text-sm font-bold text-white">PP</span>
            </div>
            <span className="hidden font-bold text-lg sm:inline text-primary">Prisma Press</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* User Dropdown */}
        {user.name ? (
                <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <DropdownMenuSeparator />
              {userMenuItems.map((item) => {
                const Icon = item.icon
                return (
                  <DropdownMenuItem
                    key={item.action}
                    onClick={() => handleUserMenuClick(item.action)}
                    className="cursor-pointer"
                  >
                    <Icon className="mr-2 size-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
    </nav>
  )
}
