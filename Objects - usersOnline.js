// Task description:

// The array of users is given. Each user has a status property that can equal either "online" or "offline".
// You need to create a new onlineUsers array that will contain only the objects of those users whose status is "online". 
// After print the alert message "Users online: usersOnlineNames", 
// where usersOnlineNames is the string in which the user names are separated by comma.

const users = [
    {
        username: 'Nazar',
        status: 'online',
        lastActivity: 30
    }, {
        username: 'Anna', 
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob', 
        status: 'online',
        lastActivity: 104
    }
]

const usersOnline = users.filter((person) => person.status === 'online');
const usersOnlineNames = usersOnline.map((person) => person.username).join(', ');
alert(`Users online: ${usersOnlineNames}`);
