const { Router } = require('express');
const router = Router();
const loanController = require('../controller/loanController')

router.post('/create-loan',  loanController.createLoan )
router.get('/get-loans',  loanController.getAllLoans )
router.delete('/delete',  loanController.deleteLoan )
router.put('/update',  loanController.updateLoan )




module.exports = router ;