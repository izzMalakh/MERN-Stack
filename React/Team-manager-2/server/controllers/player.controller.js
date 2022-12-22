const { Player } = require('../models/player.model');

    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { name,position,game1,game2,game3 } = request.body;
    Player.create({
        name,
        position,
        game1,
        game2,
        game3
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

module.exports.findAllPlayers = (req, res) => {
    Player.find()
      .then(allDaPlayers => res.json(allDaPlayers))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators: [true, "{PATH} is required"]})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateStatusTeam = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedTeam => response.json(updatedTeam))
        .catch(err => response.status(400).json(err));
}

