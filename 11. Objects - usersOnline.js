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