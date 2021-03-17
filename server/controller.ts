import model from './model';

class Controller {

    constructor() { }


    //select
    getAdoteme() {
        return model.find({});
    }

    select(req, res) {
        this.getAdoteme()
            .then(users => res.status(200).json({ 'result': users}))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    //selectone
    getUsersByID(id) {
        return model.find(id);
    }

    selectOne(req, res) {
        const id = { _id: req.params.id }

        this.getUsersByID(id)
            .then(users => res.status(200).json({ 'result': users }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    //delete
    deleteByID(id) {
        return model.deleteOne(id);
    }

    delete(req, res) {
        const id = { _id: req.params.id }

        this.deleteByID(id)
            .then(users => res.status(200).json({ 'result': users }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    //update
    updateUsers(id, data) {
        return model.findOneAndUpdate(id, data);
    }

    update(req, res) {
        const id = { _id: req.params.id }
        const users = req.body;

        this.updateUsers(id, users)
            .then(users => res.status(200).json({ 'result': users }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    //insert
    createUsers(data) {
        return model.create(data);
    }

    insert(req, res) {
        const user = req.body;

        this.createUsers(user)
            .then(users => res.status(200).json({ 'result': users }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

}

export default Controller;