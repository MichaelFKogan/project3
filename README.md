#iCode

iCode is a search application for developers to search technologies for article, tutorial, and other resource results. For example, a user searches "Angular" and is presented with results from Google, Youtube, GitHub, or Stack Overflow.

### UP & RUNNING
* `npm install`
* `npm start`
* visit `http://localhost:8080/`

Template taken from: https://github.com/alanbsmith/react-node-example

###Landing Page(not logged in)
Users visit landing page to review app description, and may sign up with an email address and password. Upon signing up, user logs in with email and password.

###Main Page(logged in)
Components: Search Bar, Search Results Panel, Saved Searches Panel
APIs
Google - custom search API, search term against 'code schools that each "search term"
Youtube - return videos, channels, or playlists
GitHub- search repositories that use specified technology
StackOverflow - search term against tags

###Technologies
MongoDb
React
Express/Node
Passport
Materialize
Axios(api)
JQuery

###Database& Authentication
User email address and passwords are stored against a unique user id
User searches are stored as saved searches against their user id.