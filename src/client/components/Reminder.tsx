import React from 'react';
import { useState, useEffect } from 'react';

const Reminder = () => {
    const [reminder, setReminder] = useState<string>("");

    const handleAdd = (e) => {
        e.preventDefault();
        newReminder();
    }

    const newReminder = async () => {
        const reminder = { 
            content: content 
        };
        let res = await fetch("/api/reminders", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
                body: JSON.stringify{reminder},
        })
        if (res.ok) {
            console.log('reminder posted');
            history.push('/');
        } else {
            console.log('reminder not posted');
        }
    }
    return (
        
    )
    
}

export default Reminder;