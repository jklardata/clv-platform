import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Industries from '../components/Industries'
import CTA from '../components/CTA'
import MailingList from '../components/MailingList'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Industries />
      <MailingList />
      <CTA />
    </main>
  )
}
