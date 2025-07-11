import { ReactNode } from 'react'
import { BottomNavBar } from '@/components/navigation/BottomNavBar'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 overflow-y-auto px-4 py-2">{children}</main>
      <BottomNavBar />
    </div>
  )
}
