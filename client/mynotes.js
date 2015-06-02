
Template.myNotes.helpers({
  nutworks: function () {
    return Nuts.find({}, {sort: {createdAt: -1} } );
  }
});

Template.myNotes.events({
  "click .deleteMe": function () {
    var nutId = this._id;
    Session.set("nutOfNow", this._id);
    console.log("deleteMe");
    console.log( "now's nut is " + Session.get("nutOfNow") );
    $(".noteBox").first().fadeOut('300', function(){
      console.log("Fade me out, Scotty");
      Meteor.call( 'deleteNut', nutId );
     });

    // $("this").fadeOut();
    
  }
});
