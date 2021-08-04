use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
    name: "Muhhamed Nugmanaedov",
    email: "hereismylocation@smash.com",
    checked_in: "Yes"
    },
    {
    name: "John Jones",
    email: "john@john.com",
    checked_in: "No"
    },
    {
    name: "Brian Johnson",
    email: "brian@brian.com",
    checked_in: "Yes" 
    }
]);