
// router.js -- flow router
// ----- HOME ---===------
FlowRouter.route('/', {
  subscriptions: function(){
    this.register('myNutsSub', Meteor.subscribe('myNuts'));
  },
  action: function(){
    FlowLayout.render('layout1', {
      top: "header",
      main: "myNotes"
    });
  }
});

FlowRouter.route('/notes', {
  subscriptions: function(){
    this.register('myNutsSub', Meteor.subscribe('myNuts'));
  },
  action: function(){
    FlowLayout.render('layout1', {
      top: "header",
      main: "myNotes"
    });
  }
});

// --------------=========
FlowRouter.route('/taskarea', {
  subscriptions: function(){
   this.register('tasknotes', Meteor.subscribe('myNuts'));
},
  action: function() {
    FlowLayout.render('layout1', {
      top: "header",
      main: "tasks"
    });
  }
});

FlowRouter.route('/tasks', {
  subscriptions: function(){
    this.register('myTasks', Meteor.subscribe('tasks'))
},
  action: function() {
    FlowLayout.render('layout1', {
      top: "header",
      main: "tasks"
    });
  }
});

FlowRouter.route('/write', {
  subscriptions: function(){
    // register the sub as 'myNutsMetaSub' and subscribe to the pub
    // myNutsMeta: meta data like tags, titles
    this.register( 'myNutsMetaSub', Meteor.subscribe('myNutsMeta') )
},
  action: function() {
    FlowLayout.render('layout1', {
      top: "header",
      main: "editor"
    });
  }
});


FlowRouter.route('/grid', {
  subscriptions: function(){
    this.register('myTasks', Meteor.subscribe('tasks'))
},
  action: function() { // not working
    FlowLayout.render('layout1', {
      top: "header",
      main: "grids"
    });
  }
});

FlowRouter.route('/share', {
  subscriptions: function () {
    this.register('sharingSub', Meteor.subscribe('sharingPub'));
  },
  action: function() {
    FlowLayout.render('layout1', {
      top: "header",
      main: "sharing"
    });
  }
})

FlowRouter.route('/myProfile', {
  subscriptions: function () {
    this.register(profileSub), Meteor.subscribe('profile')
}
});