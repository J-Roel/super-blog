var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


//DEFAULT
router.get('/', function(req, res, next) {
  knex('posts').then(function (movies) {
    res.json(movies)
  }).catch(function (err) {
    next(new Error(err));
  })
});

//CREATE USERS
router.post('/create', function(req, res, next) {

	var username = req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	//validation
	//USERNAME


  if(req.body !== {} ){
    knex('users')
    .insert([{
    		username: username,
    		password: password,
    		firstname: firstname,
    		lastname: lastname
    	}]).returning('*')

    .then(function (data) {
      res.json(data)
    }).catch(function (err) {
      next(new Error(err));
    })
  }//end if

});



//GET OUR USER FOR OUR UPDATE
router.get('/update/:id', function(req, res, next) {

  knex('users')
  .where({'id': req.params.id })
  .select({
  			username: username,
    		password: password,
    		firstname: firstname,
    		lastname: lastname
  })

  
  .then(function (actors) {
    res.json('UPDATED')
  }).catch(function (err) {
    next(new Error(err));
  })
});


//UPDATE USERS
router.post('/update/:id', function(req, res, next) {

	var username = req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	//validation
	//USERNAME


  knex('users')
  .where({'id': req.params.id })
  .update({
  		username: username,
    		password: password,
    		firstname: firstname,
    		lastname: lastname
  })

  .then(function (actors) {
    res.json('UPDATED')
  }).catch(function (err) {
    next(new Error(err));
  })
});



//DELETE USERS
router.get('/delete/:id', function(req, res, next) {
	//console.log("ID: ", req.params.id);
	//console.log("Body: ", req.body)
  knex('movies')
  .where({'movies.id': req.params.id })
  .del()

  .then(function (actors) {
    res.json('DELETED');
  }).catch(function (err) {
    next(new Error(err));
  })
});












module.exports = router;









/*END OF FILE*/