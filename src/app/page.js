import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex font-bold min-h-screen flex-col items-center justify-between p-24">
     

     Hell0

     <Link href="/about">
        Go TO About Page
     </Link>

      
    </main>
  )
}
