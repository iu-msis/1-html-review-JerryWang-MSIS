/*!
The following code was included through follow professor Gregory's lecture on Wednesday
*/

const Offer = {
    data() {
        return {
            "person": {},
            "offers": [
                {
                    "name": "Richard Hendricks",
                    "countryoforigin":"USA",
                    "birthdate":"April 10th",
                    "age":"38",
                    "email":"richardhendricks@piedpiper.com",
                    "image":"img/richard.jpg",
                }

                {
                    "name": "Jerry Wang",
                    "countryoforigin":"Taiwan",
                    "birthdate":"April 9th",
                    "age":"18",
                    "email":"jerry@gmail.com",
                    "image":"img/richard.jpg",
                }
            ]
        }
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },

    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.person = parsedJson.results[0];
            })
            .catch( (err)=> {
                console.error(err);
        })
    }
},

        created() {
            this.fetchUserData();
        }

    }

/*!
The following code was included through follow professor Gregory's lecture on Wednesday
*/

Vue.createApp(Offer).mount('#offerApp');