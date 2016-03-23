import todos from '../models/models_todos';


export default function(router){
    router.get('/', (req, res) => {
        res.send(todos);
    });

    return router;
}

