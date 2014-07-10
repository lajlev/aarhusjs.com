Template.welcome.helpers({
  next: function() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return Meteor.events.findOne({"startDate": {"$gte": tomorrow}}, {sort: {startDate: 1},limit: 1});
  }
});

