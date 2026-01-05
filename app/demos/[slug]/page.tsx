import { notFound } from 'next/navigation'
import DemoLayout from '@/components/DemoLayout'

const demos = [
  'luxury-real-estate',
  'barber-salon',
  'gym-trainer',
  'restaurant',
  'creator-artist',
  'contractor',
]

const demoNames: Record<string, string> = {
  'luxury-real-estate': 'Luxury Real Estate',
  'barber-salon': 'Barber / Salon',
  'gym-trainer': 'Gym / Trainer',
  'restaurant': 'Restaurant',
  'creator-artist': 'Creator / Artist',
  'contractor': 'Contractor / Local Business',
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!demos.includes(slug)) {
    notFound()
  }

  return <DemoLayout title={demoNames[slug] || slug} />
}

