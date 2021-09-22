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
                },

                /*!The following user profile was included through follow professor Gregory's lecture on Wednesday */

                {
                    "id": 2,
                    "name": "Jordan Doe",
                    "salary": 80000,
                    "bonus": 2000,
                    "company":"IU",
                    "offerDate": "2021-08-09"
                }
            ]
        }
    },

    /*!The following calculation, methods and functions was included through follow professor Gregory's lecture on Wednesday
    logs are included for error checking*/
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            console.log("A");
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.person = responseJson.results[0];
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        }
    },
    created() {
        this.fetchUserData();
    } 
} 
  
Vue.createApp(Offer).mount('#offerApp');
console.log("Z");
