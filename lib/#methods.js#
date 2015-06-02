Meteor.methods({
  addNut: function (text) {
    Nuts.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteNut: function (nutId) {
    Nuts.remove({_id: nutId});
  }
}); // end methods
