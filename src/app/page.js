import Image from 'next/image'
import ExmapleClinet from '@/components/ExmapleClinet'


export default function Home() {
  console.log("where do i render")
  return (
    <main className="flex font-bold min-h-screen flex-col items-center justify-between p-24">
     

   <h1>hello</h1>
   <ExmapleClinet />
 
     

      
    </main>
  )
}
