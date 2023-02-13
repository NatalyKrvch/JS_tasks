const giveParcel = () => {
    const clientName = peopleWaiting.shift();
    alert(`${clientName} has received parcel. Ther's ${peopleWaiting.length} people are staying in the queue`);
}

const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop();
    alert(`${clientName} hasn't received parcel and left the queue`);
}