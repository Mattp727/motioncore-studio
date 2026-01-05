import Hero from '@/components/sections/Hero'
import WhatWeDo from '@/components/sections/WhatWeDo'
import DemoGallery from '@/components/sections/DemoGallery'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <DemoGallery />
      <BeforeAfter />
      <Pricing />
      <FinalCTA />
    </main>
  )
}

