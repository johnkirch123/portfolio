# 5 Fun Apps Project

![Multi Apps Image](https://johnwkirch.com/img/multi-apps.png)

This is a small project, not following tutorials of 5 small apps that connect to API's and some can store user data in local storage in your browser. This is part of the [Multi Apps](http://peaceful-temple-95021.herokuapp.com/) project for my portfolio.

## Weather App

The [Weather App](http://peaceful-temple-95021.herokuapp.com/weather) uses the [Open Weather](https://openweathermap.org/api) API to retrieve data. Since it uses the 'One Call API', I also use the [Position Stack](https://openweathermap.org/api) API to get the requested coordinates to use the 'One Call API'.

The last retrieved data is stored in local storage and will be retrieved upon reopnening the application. Further work will be added to this project, such as a dark/light mode and displaying detailed information about the days when it is clicked on.

## Countdown Timer App

The [Countdown Timer App](http://peaceful-temple-95021.herokuapp.com/countdown_timer) does not use any APIs, but it does have a dropdown form to input any day that you would like to countdown to. It stores this in local storage and will be remembered when re-opened.

## Quiz App

The [Quiz App](http://peaceful-temple-95021.herokuapp.com/quiz) uses the [Open Trivia](https://opentdb.com/api_config.php) API and allows the user to select the number of questions, choose from the various categories, set the difficulty and choose the type of questions. This App will keep score of right and wrong answers selected and will display the correct answer for 4 seconds at the end of each question.

## Recipe App

The [Recipe App](http://peaceful-temple-95021.herokuapp.com/recipe) uses the [Spoonacular](https://spoonacular.com/food-api) API and returns the top 10 results for any type of search. You can click on any of the cards to be shown the details page and the recipe's ingredients.

## Crypto App

The [Crypto App](http://peaceful-temple-95021.herokuapp.com/crypto) uses the [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1) API from Rapid API. Rapid API is a great location to find all types of fun APIs to work with. This application displays the top 100 Crypto Coins by market cap and allows the user to filter them and and click on the coin to get the details from coinrankings page.

## Todos App

The [Todos App](http://peaceful-temple-95021.herokuapp.com/todo) uses the Context API for managing state and has editable fields. Add todos and the data is persisted via local storage
