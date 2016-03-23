import todos from './routes/routes_todos';

import express from 'express';
const router = express.Router();

router.use('/todos', todos(router));
router.get('/', (req, res) => {
    res.send({
        version : '1.0'
    });
});


export default router;