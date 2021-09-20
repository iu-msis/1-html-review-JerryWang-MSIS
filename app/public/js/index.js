/*!
The following code was included through follow professor Gregory's lecture on Wednesday
*/

const app = Vue.createApp({
    data() {
        return {
            "person": {},
            "profile": [
                {
                    "name": "Richard Hendricks"
                    "countryoforigin":"USA"
                    "birthdate":"April 10th"
                    "age":"38"
                    "email":"richardhendricks@piedpiper.com"
                    "image":"img/richard.jpg"
                }

            ]
        }
    }
})

/*!
The following code was included through follow professor Gregory's lecture on Wednesday
*/
    created() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
            this.person = parsedJson.result[0]})
        .catch(err=> {
            console.error(err)})
    }
}