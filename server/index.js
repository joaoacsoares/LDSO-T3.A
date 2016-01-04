'use strict';

const Hapi = require('hapi');
const sequelize = require('sequelize');


var Boom = require("boom");
var Promise = require("bluebird");
var jwt = require('jsonwebtoken');
var crypto = require("crypto");

var Sequelize = new sequelize('P4a', 'LDSO', 'Places4all', {
  host: 'jswzsfxiys.database.windows.net',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }, dialectOptions: {
    encrypt: true
  }


});

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

var privateKey = 'Places4AllMobileApp';

server.route({
    method: 'GET',
    path: '/logout',
    config:{
       handler: function (request, reply) {
           request.auth.session.clear();
           return JSON.stringify('Logout bem sucedido');
       }}
});
        
var validate = function(decodedToken, callback) {
    var error;
    Sequelize.query("SELECT * FROM [dbo].[Users] where [email] = " + decodedToken, { type: Sequelize.QueryTypes.SELECT}).then(function(account) {
       if(!account) {
           return callback(error, false, {});
       }
       return callback(error, true, account);
       }).catch(function(error) {
            return callback(error, false, {});
       });
};
    
    
    
server.register(require('hapi-auth-jwt'), function (error) {
   server.auth.strategy('token', 'jwt', {
       key: privateKey,
       validateFunc: validate
     });
});
    
        server.route({
            method: 'POST',
            path: '/login',
            config:{
                auth: false,
                handler: function (request, reply) {
                    if (request.method === 'post') {
                        if (!request.payload.username ||
                            !request.payload.password) {
                            return reply(Boom.badRequest('Missing username or password'));
                        }
                        else {
                            Sequelize.query("SELECT * FROM [dbo].[Users] where [email] = " + request.payload.email, { type: Sequelize.QueryTypes.SELECT}).then(function(account) {
                                if(!account) {
                                    return reply(Boom.unauthorized('Invalid username or password'));
                                }
                                else {
                                    var passHash=crypto.createHash('sha512');
                                    passHash.update(request.payload.password);
                                    if (account.password !== passHash.digest('hex')) {
                                        return reply(Boom.unauthorized('Invalid username or password'));
                                    }
                                    else {
                                        var token = jwt.sign(account.email, privateKey);
                                        return reply({userID: account.userID, email: account.email, type: account.type, token: token});
                                    }
                                }
                            }).catch(function(error) {
                                return reply(Boom.badImplementation(error));
                            });
                        }
                    }
    
                }
            }
        });

server.route({
    method: 'GET',
    path:'/places', 
    handler: function (request, reply) {

        Sequelize.query("SELECT * FROM [dbo].[Places]", { type: Sequelize.QueryTypes.SELECT})
	.then(function(places) {
      return reply(places);   });
	   
    }
});

server.route({
    method: 'GET',
    path:'/places/{PlaceID}', 
    handler: function (request, reply) {

        Sequelize.query("SELECT * FROM [dbo].[Places] where [PlaceId] = "+request.params.PlaceID, { type: Sequelize.QueryTypes.SELECT})
	.then(function(places) {
      return reply(places);
	})
    }
});

server.route({
    method: 'GET',
    path:'/places/{PlaceID}/checklist', 
    handler: function (request, reply) {

        Sequelize.query("SELECT * FROM [dbo].[CheckList]", { type: Sequelize.QueryTypes.SELECT})
	.then(function(places) {
      return reply(places);
	})
    }
});

server.route({
    method: 'GET',
    path:'/places/{PlaceID}/checklist/{ChecklistID}', 
    handler: function (request, reply) {

        Sequelize.query("SELECT * FROM [dbo].[questions] where [ChecklistID] = "+request.params.ChecklistID, { type: Sequelize.QueryTypes.SELECT})
	.then(function(places) {
      return reply(places);
	})
    }
});

server.route({
    method: 'POST',
    path:'/places/{PlaceID}/checklist/{ChecklistID}/submitAnswers', 
    handler: function (request, reply) {

        var questions=request.payload.questions;
        var answers=request.payload.answers;
        var answersPromises = [];
        for(var i = 0; i<answers.length; i++){
            if(answers[i].Suggestion !== null)
                answersPromises.push(Sequelize.query("INSERT INTO [dbo].[Answers] ([QuestionID],[Answer],[Suggestion]) VALUES ("+questions[i].QuestionID,+","+answers[i].Answer+","+answers[i].Suggestion+")" ,{ type: Sequelize.QueryTypes.INSERT}));
            else
                answersPromises.push(Sequelize.query("INSERT INTO [dbo].[Answers] ([QuestionID],[Answer]) VALUES ("+questions[i].QuestionID,+","+answers[i].Answer+")" ,{ type: Sequelize.QueryTypes.INSERT}));
         }
         Promise.all(answersPromises).then(function() {
         reply("Successful answers added");
	})
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});