const Card = require("../models/cardModel");
const List = require("../models/listModel");
exports.createCard = (req, res) => {
    const card = {
        listRef: req.body.listRef
    };
    console.log(card)
    Card.create(card)
      .then((newcard) => {
        List.findByIdAndUpdate(
          newcard.listRef,
          { $push: { cardList: newcard._id } },
          { new: true }
        )
          .populate(
            "cardList",
            "title description createdAt updatedAt _id listRef"
          )
          .populate("createdBy", "email")
          .then((updatedList) => {
            return res.status(201).json(updatedList);
          })
          .catch((e) => {
            return res.status(422).json(e);
          });
      })
      .catch((e) => {
        return res.status(422).json(e);
      });

};
exports.updateCard = (req, res) => {
    const card = {
      title: req.body.title,
      description: req.body.description,
    };
    Card.findByIdAndUpdate(req.body.cardId, card, {new:true}).then(udatedCard => {
        return res.status(201).json(udatedCard);
    }).catch(e => {
        return res.status(422).json(e);
    })
};
exports.deleteCard = (req, res) => {
    Card.findByIdAndDelete(req.params.cardId)
      .then(() => {
        List.findByIdAndUpdate(
          req.params.listId,
          { $pull: { cardList: req.params.cardId } },
          { new: true }
        )
          .populate(
            "cardList",
            "title description createdAt updatedAt _id listRef"
          )
          .populate("createdBy", "email")
          .then((updatedList) => {
            return res.status(201).json(updatedList);
          })
          .catch((e) => {
            return res.status(422).json(e);
          });
      })
      .catch((e) => {
        return res.status(422).json(e);
      });
};