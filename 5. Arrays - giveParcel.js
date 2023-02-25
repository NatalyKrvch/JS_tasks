// Task description:

// Imagine we’re developing a queue system for an institution.
// For example, for post office.

// When a person receives a parcel, it is necessary to print the message "clientName has received parcel. Ther's number people are staying in the queue`" 
// If the person did not receive the parcel and left the queue, then print the modal window via alert message "clientName hasn't received parcel and left the queue".

const giveParcel = () => {
    const clientName = peopleWaiting.shift();
    alert(`${clientName} has received parcel. Ther's ${peopleWaiting.length} people are staying in the queue`);
}

const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop();
    alert(`${clientName} hasn't received parcel and left the queue`);
}
