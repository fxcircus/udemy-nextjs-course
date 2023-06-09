import { getFeaturedEvents } from '../../dummy-data'
import EventList from 'roy/components/events/EventList'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

