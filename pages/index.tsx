import { AdkContainer } from '@/adk/AdkContainer'

export default function Home() {
  return (
    <div className='home'>
      <p>Current route: /</p>
      <AdkContainer id="my-container" />
    </div>
  )
}
