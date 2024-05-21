import React, { useState,useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext';

const Details = () => {
    const mockEvents = [
        { id: 1, name: 'concert', date: '25.05.2024', time: '03:00', venue: 'Av Room', availability: 100 },
        { id: 2, name: 'Live', date: '26.05.2024', time: '06:00', venue: 'Park', availability: 30 },
        { id: 3, name: 'Movie', date: '22.05.2024', time: '12:00', venue: 'Theater', availability: 66 },
        { id: 4, name: 'Music', date: '21.05.2024', time: '11:00', venue: 'Music hall', availability: 50 },
        //we can add more 
    ]

    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext) // Get the user from AuthContext

    const event = mockEvents.find(event => event.id === parseInt(id))
    const [tickets, setTickets] = useState(1)
    const [availability, setAvailability] = useState(event.availability)

    const handleBooking = () => {
        if (!user) {
            
            navigate('/login');
            return null;
        }

        if (tickets > availability) {
            alert('Not enough tickets available')
            return
        }

        setAvailability(availability - tickets)
        saveBooking(user.username, event.id, tickets)
        alert(`Successfully booked ${tickets} tickets for ${event.name}`)
        navigate('/')
    }

    const saveBooking = (username, eventId, tickets) => {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || []
        bookings.push({ username, eventId, tickets })
        localStorage.setItem('bookings', JSON.stringify(bookings))
    }

    return (
        <div style={{ fontFamily: 'georgia pro', padding: '20px' }}>
            <h1>{event.name}</h1>
            <p>{event.date} at {event.time}</p>
            <p>{event.venue}</p>
            <p>Tickets available: {availability}</p>

            <div>
                <label>
                    Number Of Tickets:
                    <input
                        type='number'
                        value={tickets}
                        onChange={(e) => setTickets(parseInt(e.target.value))}
                        min='1'
                        max={availability}
                    />
                </label>
                <button onClick={handleBooking}>Book Tickets</button>
            </div>
        </div>
    )
}

export default Details
