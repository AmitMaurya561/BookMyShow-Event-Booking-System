import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EventList = () => {
    const mockEvents = [
        { id: 1, name: 'concert', date: '25.05.2024', time: '03:00', venue: 'Av Room', availability: 100 },
        { id: 2, name: 'Live', date: '26.05.2024', time: '06:00', venue: 'Park', availability: 30 },
        { id: 3, name: 'Movie', date: '22.05.2024', time: '12:00', venue: 'Theater', availability: 66 },
        { id: 4, name: 'Music', date: '21.05.2024', time: '11:00', venue: 'Music hall', availability: 50 },
    ]

    const [events, setEvents] = useState(mockEvents)

    return (
        <div style={{ fontFamily: 'georgia pro', padding: '20px' }}>
            <h1 style={{ color: '#333' }}>Events</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {events.map(event => (
                    <li key={event.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
                        <h2>{event.name}</h2>
                        <p>{event.date} at {event.time}</p>
                        <p>Venue: {event.venue}</p>
                        <p>Tickets Available: {event.availability}</p>
                        <Link to={`/event/${event.id}`}>
                            <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                                View Details & Book
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EventList
