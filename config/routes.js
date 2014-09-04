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
    path: '/events/all',
    data: function() {
      return Meteor.events.find({});
    },
    waitOn: function() {
      this.data;
    }
  });
  this.route('events_upcoming', {
    path: '/events/upcoming',
    data: function() {
      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate()+1);
      return Meteor.events.find({"startDate": {"$gte": tomorrow}}, {sort: {startDate: 1}});
    },
    waitOn: function() {
      this.data;
    }
  });
  this.route('events_past', {
    path: '/events/past',
    data: function() {
      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate()+1);
      return Meteor.events.find({"startDate": {"$lte": today}}, {sort: {startDate: -1}});
    },
    waitOn: function() {
      this.data;
    }
  });
});
