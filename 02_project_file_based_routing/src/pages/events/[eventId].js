import { Router, useRouter } from "next/router"
import { getEventById } from "../../../dummy-data"
import EventSummary from "roy/components/event-detail/event-summary"
import EventLogistics from "roy/components/event-detail/event-logistics"
import EventContent from "roy/components/event-detail/event-content"
import { Fragment } from "react"

export default function EventId() {
    const router = useRouter()

    const eventId = router.query.eventId
    const event = getEventById(eventId)

    console.log(`eventId = ${eventId}`)

    if (!event) {
      return <p>No event found!</p>
    } else {
      return (
        <div>
          <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
              <p>{event.description}</p>
            </EventContent>

          </Fragment>
        </div>
      )
    }

    
  }
  
  