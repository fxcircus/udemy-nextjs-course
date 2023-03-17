import Link from "next/link"
import classes from './EventItem.module.css'
import Button from '../ui/Button'

export default function (props) {
    const { id, title, image, date, location} = props
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(' ', '\n')
    const exploreLink = `/events/${id}`

    return (
      <li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.content}>
            <h2>{title}</h2>
            <div className={classes.date}>
                <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
                <address>{formattedAddress}</address>
            </div>
        </div>
        <div className={classes.action}>
            <Button link={exploreLink}>Explore</Button>
        </div>
      </li>
    )
  }
  
  