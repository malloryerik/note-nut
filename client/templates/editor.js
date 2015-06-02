Template.editor.events({
  // listen to what's being written and save in a Session variable
  "keyup #noteEditArea": _.debounce( function() {
      var shortMem = document.getElementById("noteEditArea").value;
      Session.set( "noteShortMemory", shortMem );
    }, 1000),

  "click #saveNote": function() {
    console.log("#saveNote");
    // insert to Nuts collection
    var text = document.getElementById("noteEditArea").value;
    Meteor.call( 'addNut', text
// , function(error, result) {  
//       if (error) console.log(error);
//       else console.log('response: ', result);
//      }
    );
    document.getElementById("noteEditArea").value = "";
    FlowRouter.go('/notes'); // 
  }
});


Template.editor.helpers({
  "myShortMem": function () {
   return Session.get( "noteShortMemory" );
  }
});
