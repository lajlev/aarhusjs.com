Template.events_main.helpers({
  next: function() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return Meteor.events.findOne({"startDate": {"$gte": tomorrow}}, {limit: 1});
  },
  upcoming: function() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return Meteor.events.find({"startDate": {"$gte": tomorrow}});
  },
  past: function() {
    var today = new Date();
    return Meteor.events.find({"startDate": {"$lte": today}});
  }
});

