

Template.tasks.events({});

Template.addNote.events({
  "click #addNewNoteBtn": function() {
    console.log("clicked AddNewNoteBtn");
    FlowRouter.go('/write');
    Meteor.setTimeout(function () {
      document.getElementById('noteEditArea').focus();
    }, 200);
  }
});

// Template.notes.events({});

// ---------------------------------



// ----------------------- 

// --------------------------

Template.share.helpers({
  members: function () {
    return Meteor.users.find();
  }
});

Meteor.startup(function () {
  $(".gridster ul").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [140, 140]
  });
});

