Template.events_main.helpers({
  next: function() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return Meteor.events.findOne({"startDate": {"$gte": tomorrow}}, {sort: {startDate: 1},limit: 1});
  },
  upcoming: function() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return Meteor.events.find({"startDate": {"$gte": tomorrow}}, {sort: {startDate: 1},skip: 1});
  },
  past: function() {
    var today = new Date();
    return Meteor.events.find({"startDate": {"$lte": today}}, {sort: {startDate: -1}});
  }
});

