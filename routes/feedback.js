var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var tbFeedback = require('../models').tbFeedback;

/* Cadastrar feedback */
router.post('/cadastrar', function(req, res, next) {
	console.log('Enviando um feedback');
	tbFeedback.create({
		nome: req.body.nome,
		email: req.body.email,
        assunto: req.body.assunto,
        feedback: req.body.feedback
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Recuperar todos os feedbacks */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os feedbacks');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);
		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;