//Home
//constructor function
let app = new Vue({// creating an new vue instans object constructor 
  el: '#app',//el target any element by its ID // Giving asses to div everythin in myVueItem part of element
  data: {//relation ship in the dom
    titel: 'Watchlist',
    state: "default",
    selected: 'default',
    titel: 'Watchlist',
    title1: 'Feel-good Movies',
    myModel: '',
    
    movies: [{

      id: 1,//String
      name: "Lyle,Lyle,Crocodile",//String
      genre: "Comedy",//String
      comingsoon: "0",// boolean
      availDate: "2022",
      url: "./src/images/movies/anamalFrends.jpg",//String //(url for image)
      url1: "https://www.netflix.com/browse/genre/34399?jbv=81608495",//String//(YT link for IFrame)
    },
    {
      id: 2,
      name: "Muder Mystery ",
      genre: "Comedy",
      comingSoon: "1",
      availDate: "2023",
      url: "./src/images/movies/murderMystery2.jpg",
      preview: "https://www.netflix.com/browse/genre/34399?jbv=81212842",
    },
    {
      id: 3,
      name: "Family Camp",
      genre: "Comedy",
      comingSoon: "0",
      availDate: "2022",
      url: "./src/images/movies/familyCamp.jpg",
      preview: "https://www.netflix.com/browse/genre/34399?jbv=81595480",
    },
    {
      id: 4,
      name: "Instant Family",
      genre: "Comedy",
      comingSoon: "0",
      availDate: "2022",
      url: "./src/images/movies/instantFamily.jpg",
      preview: "https://www.netflix.com/browse/genre/6548?bc=34399&jbv=81018383",
    },
    {
      id: 5,
      name: "Pitch Perfect 3",
      genre: "Comedy",
      comingSoon: "1",
      availDate: "2023",
      url: "./src/images/movies/pitchPerfect3.jpg",
      preview: "https://www.netflix.com/browse/genre/6548?bc=34399&jbv=80192837",
    },
    {
      id: 6,
      name: "Hidden Strike",
      genre: "Action",
      comingSoon: "0",
      availDate: "2021",
      url: "./src/images/movies/hiddenStrike.jpg",
      preview: "https://www.netflix.com/browse/genre/1365?bc=34399&jbv=81322579",
    },
    {
      id: 7,
      name: "Knight And Day",
      genre: "Action",
      comingSoon: "0",
      availDate: "2010",
      url: "./src/images/movies/knightAndDay.jpg",
      preview: "https://www.netflix.com/browse/genre/1365?bc=34399&so=su&jbv=70127226",
    },
    {
      id: 8,
      name: "My Neighbor TOTORO",
      genre: "Anime",
      comingSoon: "0",
      availDate: "1988",
      url: "./src/images/movies/myNeighborTotoro.jpg",
      preview: "https://www.netflix.com/browse/genre/3063?bc=34399&jbv=60032294",
    },
    {
      id: 9,
      name: "The Karate Kid",
      genre: "Classic",
      comingSoon: "0",
      availDate: "1984",
      url: "./src/images/movies/theKarateKid.jpg",
      preview: "https://www.netflix.com/browse/genre/31574?bc=34399&jbv=60036164",
    },
    {
      id: 10,
      name: "E.T.",
      genre: "Classic",
      comingSoon: "0",
      availDate: "1982",
      url: "./src/images/movies/et.jpg",
      preview: "https://www.netflix.com/browse/genre/31574?bc=34399&jbv=60022398",
    },
    {
      id: 11,
      name: "WhisperOfTheHeart",
      genre: "Anime",
      comingSoon: "0",
      availDate: "1995",
      url: "./src/images/movies/whisperOfTheHeart.jpg",
      preview: "https://www.netflix.com/browse/genre/3063?bc=34399&jbv=70045021",
    },
    {
      id: 12,
      name: "Cast Away",
      genre: "Drama",
      comingSoon: "0",
      availDate: "2000",
      url: "./src/images/movies/castAway.jpg",
      preview: "https://www.netflix.com/browse/genre/5763?bc=34399&jbv=60020683",
    },
    {
      id: 13,
      name: "Scent Of A Woman",
      genre: "Drama",
      comingSoon: "0",
      availDate: "1992",
      url: "./src/images/movies/scentOfAWoman.jpg",
      preview: "https://www.netflix.com/browse/genre/5763?bc=34399&jbv=937499",
    },
    {
      id: 14,
      name: "Holiday In The Wild",
      genre: "Made in Africa",
      comingSoon: "0",
      availDate: "2019",
      url: "./src/images/movies/holidayInTheWild.jpg",
      preview: "https://www.netflix.com/browse/genre/81284582?bc=34399&jbv=80231468",
    },
    {
      id: 15,
      name: "Faith Like Patatoes",
      genre: "Made in Africa",
      comingSoon: "0",
      availDate: "2006",
      url: "./src/images/movies/faithLikePatatoes.jpg",
      preview: "https://www.netflix.com/browse/genre/81284582?bc=34399&jbv=70114291",
    },
    {
      id: 16,
      name: "Burlesque",
      genre: "Musicals",
      comingSoon: "0",
      availDate: "2010",
      url: "./src/images/movies/burlesque.jpg",
      preview: "https://www.netflix.com/browse/genre/52852?bc=34399&jbv=70137790",
    },
    {
      id: 17,
      name: "Sing",
      genre: "Musicals",
      comingSoon: "0",
      availDate: "2016",
      url: "./src/images/movies/sing.jpg",
      preview: "https://www.netflix.com/browse/genre/52852?bc=34399&jbv=80117526",
    },
    {
      id: 18,
      name: "Bride Wars",
      genre: "Romantic",
      comingSoon: "0",
      availDate: "2009",
      url: "./src/images/movies/brideWars.jpg",
      preview: "https://www.netflix.com/browse/genre/8883?bc=34399&jbv=70103758",
    },
    {
      id: 19,
      name: "New York Minute",
      genre: "Drama",
      comingSoon: "1",
      availDate: "2023",
      url: "./src/images/movies/newYorkMinute.jpg",
      preview: "https://www.netflix.com/search?q=new&jbv=60034568",
    },
    {
      id: 20,
      name: "Clifford The Big Red Dog",
      genre: "Comedy",
      comingSoon: "1",
      availDate: "1992",
      url: "./src/images/movies/cliffordTheBigRedDog.jpg",
      preview: "https://www.netflix.com/search?q=new&jbv=81286595",
    },
    
    ]
  },

  methods: {
    doThis(){

    },
    saveItem() {
      this.myList.push({label : this.myModel, done: false});
      this.myModel = "";
    },
    changeState(newState) {
      this.state = newState;
    },
    toggleDone(x) {//x is not related to the x at the top
      x.done = !x.done;// = to the oppisit what it is now inverting the property of done
    },

  
  },
  computed: {//computed propertie should always have a return
    sortedItems() {
      return this.movie.id.slice();
    },
  },
 
})


//top video 
var video = document.getElementById("myVideo");

//login page


let input = [];// array every todos store
loginForm.addEventListener('submit', function (event) {// eventListener on form, and for submit 
  event.preventDefault();// stop page from reloading on submitting form
  addInput(loginInput.value); // call addTodo function with input box current value text and date 
});

function addTodo(item) {// adding the todo
  if (item !== ' ') {// if item is not empty 
    const login = { // make a todo object, which has id, name and completed properties
      id: Date.now(),
      email: item,
      completed: false
    };
    login.push(login);// add to todos array
    addToLocalStorage(login); // store in localStorage
    renderLogin(logins);
    loginInput.value = '';// clear input box value in input
  }
}
const loginInput = document.querySelector('.login-input');
login = {
  email: ' ',
  password: '',
};
myData = JSON.stringify(login); //stringify convert Java to a string
localStorage.setItem("userData", myData);//saving the data to local starage 
myText = localStorage.getItem("userData");
newObj = JSON.parse(myText);//convert to java object litrial - use the parse opject of json
console.log(login);
document.getElementById("result").innerHTML = localStorage.getItem("email", "password",);


function myFunction() {
  location.href = "file:///C:/Users/Fujifilm/OneDrive/CodeSpace/GitHub/JANSMI832_ODM_JanaSmit_Netflix2/home.html";

  function doThis(){


}}






