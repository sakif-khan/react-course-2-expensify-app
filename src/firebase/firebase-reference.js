// SUBSCRIBE TO child_removed event
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    });

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        })
        console.log(expenses);
    });

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 30000,
    createdAt: 1234
});

database.ref('notes/-LZ9LMO99HvUrijk5f4N').remove();

database.ref('notes').push({
    title: 'Course topics',
    body: 'React Native, Angular, Python'
});

database.ref().on('value', (snapshot) => {
    console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
}, (e) => {
    console.log('Error with data fetching', e);
});

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});
setTimeout(() => {
    database.ref('age').set(29);
}, 3500);
setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);
setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });

database.ref().set({ // reference // equivalent to collections in mongoDB
    name: 'Sakif Khan',
    age: 21,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log(e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Nuakhali'
});

database.ref().update({
    job: 'Manager',
    // location: {          // only updates in root directory
    //     city: 'Boston'   // works as set for nested directories
    // }
    'location/city': 'Boston'
});

database.ref('isSingle').set(null);

database.ref()
    .remove()
    .then(() => {
        console.log('Data was removed');
    }).catch((e) => {
        console.log('Could\'n remove data');
    });