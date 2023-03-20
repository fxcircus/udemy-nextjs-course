import { getAllEvents } from "../../../dummy-data"
import EventList from "roy/components/events/EventList"
import EventsSearch from '../../components/events/EventsSearch'

export default function EventsMainPage() {

    const events = getAllEvents()
    return (
      <div>
        <EventsSearch />
        <EventList items={events} />
      </div>
    )
  }
  
  