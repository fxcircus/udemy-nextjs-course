import { getAllEvents } from "../../../dummy-data"
import EventList from "roy/components/events/EventList"

export default function EventsMainPage() {

    const events = getAllEvents()
    return (
      <div>
        <EventList items={events} />
      </div>
    )
  }
  
  