# Burger Diary

## Live Link
 - https://desolate-mountain-36608.herokuapp.com/

## Make a list of burgers you want to devour! Once you've devoured a burger, you can remove it, re-order it, or simply add more.

## Requirements
Follow the MVC design pattern to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM

## Technologies Used
- JavaScript
- jQuery, AJAX, and JSON
- Node.js, Express and Handlebars
- MySQL and ClearDB
- ORM
- Heoku

## Code Explanation
Node.js CLI connects to MySQL database and runs schema.sql & seeds.sql. 
Connection.js connects to the local database or ClearDB remotely while orm.js uses function methods to SELECT, INSERT, UPDATE, and DELETE data.
Express routing then loads HTML pages created by the Handlebars controller in conjunction with jQuery and ORM.
