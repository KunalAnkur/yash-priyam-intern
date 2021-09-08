const cardModel = require("../models/cardModel");
const List = require("../models/listModel");

exports.getList = (req, res) => {
    List.find({ createdBy: req.user._id })
      .populate("cardList", "title description createdAt updatedAt _id listRef")
      .populate("createdBy", "email")
      .then((list) => {
        return res.status(200).json(list);
      }).catch(e => {
          return res.status(422).json(e);
      });
};
exports.createList = (req, res) => {
    const list = {
        createdBy: req.user,
    }
    List.create(list).then(newlist=>{
        return res.status(201).json(newlist);
    }).catch(e => {
        return res.status(422).json(e);
    })
};

exports.updateList = (req, res) => {
    const list = {
        listName: req.body.listName
    }
    List.findByIdAndUpdate(req.body.listId, list, { new: true })
      .populate("cardList", "title description")
      .populate("createdBy", "email")
      .then((updatedList) => {
        return res.status(201).json(updatedList);
      })
      .catch((e) => {
        console.log(e);
        return res.status(422).json(e);
      });
};
exports.deleteList = (req, res) => {
    List.findById(req.params.listId)
      .then((listData) => {
        if (listData.cardList.length !== 0){
          cardModel
            .deleteMany({ _id: { $in: listData.cardList } })
            .then(() => {
              List.findByIdAndDelete(req.params.listId)
                .then(() => {
                  return res
                    .status(201)
                    .json({ message: "List deleted successfully" });
                })
                .catch((e) => {
                  return res.status(422).json(e);
                });
            })
            .catch((e) => {
              return res.status(422).json(e);
            });
        }else{
          List.findByIdAndDelete(req.params.listId)
            .then(() => {
              return res
                .status(201)
                .json({ message: "List deleted successfully" });
            })
            .catch((e) => {
              return res.status(422).json(e);
            });
        }
          
      })
      .catch((e) => {
        return res.status(422).json(e);
      });
};
