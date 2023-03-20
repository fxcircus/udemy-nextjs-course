import { useRouter } from "next/router"
import { getFilteredEvents } from "../../../dummy-data"
import EventList from "roy/components/events/EventList"

export default function EventSlug() {
  const router = useRouter()
  
  const filtereData = router.query.slug

  if(!filtereData) {
    return<p className="center">Loading...</p>
  } else {
    const filteredYear = filtereData[0]
    const filteredMonth = filtereData[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear < 2021 ||
        numYear > 2030 ||
        numMonth < 1 ||
        numMonth > 12
        ) {
          return <p>Invalid filter. Please adjust your values</p>
      }

      const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
      })

      if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter!</p>
      }

      return (
        <div>
          <EventList items={filteredEvents} />
        </div>
      )

    }
}
  
  