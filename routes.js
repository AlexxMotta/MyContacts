const { Router } = require('express');
const CategoryController = require('./src/app/controllers/CategoryController');
const ContactController = require('./src/app/controllers/ContactController');

const router = Router();

router.get('/contact', ContactController.index);
router.get('/contact/:id', ContactController.show);
router.delete('/contact/:id', ContactController.delete);
router.post('/contact', ContactController.store);// ainda n terminado
router.put('/contact/:id', ContactController.update);// ainda n terminado

router.get('/category', CategoryController.index);// ainda n terminado
router.get('/category/:id', CategoryController.show);// ainda n terminado
router.delete('/category/:id', CategoryController.delete);// ainda n terminado
router.post('/category', CategoryController.store);// ainda n terminado
router.put('/category/:id', CategoryController.update);// ainda n terminado

module.exports = router;
