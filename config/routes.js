Router.configure({
  layoutTemplate: 'layout',
notFoundTemplate: 'notFound',
loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('welcome', { 
    path: '/',
    data: function() {
      return Meteor.events.find({});
    },
    waitOn: function() {
      this.data;
    }
  });
  this.route('events_main', { 
    path: '/events',
    data: function() {
      return Meteor.events.find({});
    },
    waitOn: function() {
      this.data;
    }
  });
});
