import { getAllEvents } from "../../../dummy-data"
import EventList from "roy/components/events/EventList"
import EventsSearch from '../../components/events/EventsSearch'
import { useRouter } from "next/router"

export default function EventsMainPage() {
    const events = getAllEvents()
    const router = useRouter()
    
    function findEventsHandler(year, month) {
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath) // navigate to different page
    }

    return (
      <div>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </div>
    )
  }
  
  