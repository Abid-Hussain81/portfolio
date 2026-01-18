import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Portfolio - Full Stack Developer',
  description: 'Professional portfolio showcasing web development projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  )
}