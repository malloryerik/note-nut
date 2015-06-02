Meteor.publish("myNuts", function() {
  return Nuts.find( {owner: this.userId}
  );
});

Meteor.publish("sharingPub", function() {
  return Meteor.users.find({});
});