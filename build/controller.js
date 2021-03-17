"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    //select
    Controller.prototype.getUsers = function () {
        return model_1.default.find({});
    };
    Controller.prototype.select = function (req, res) {
        this.getUsers()
            .then(function (users) { return res.status(200).json({ 'result': users }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //selectone
    Controller.prototype.getUsersByID = function (id) {
        return model_1.default.find(id);
    };
    Controller.prototype.selectOne = function (req, res) {
        var id = { _id: req.params.id };
        this.getUsersByID(id)
            .then(function (users) { return res.status(200).json({ 'result': users }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //delete
    Controller.prototype.deleteByID = function (id) {
        return model_1.default.deleteOne(id);
    };
    Controller.prototype.delete = function (req, res) {
        var id = { _id: req.params.id };
        this.deleteByID(id)
            .then(function (users) { return res.status(200).json({ 'result': users }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //update
    Controller.prototype.updateUsers = function (id, data) {
        return model_1.default.findOneAndUpdate(id, data);
    };
    Controller.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var users = req.body;
        this.updateUsers(id, users)
            .then(function (users) { return res.status(200).json({ 'result': users }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //insert
    Controller.prototype.createUsers = function (data) {
        return model_1.default.create(data);
    };
    Controller.prototype.insert = function (req, res) {
        var users = req.body;
        this.createUsers(users)
            .then(function (users) { return res.status(200).json({ 'result': users }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    return Controller;
}());
exports.default = Controller;
