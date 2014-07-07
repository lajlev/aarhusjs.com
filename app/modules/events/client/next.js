Template.events_next.helpers({
  event_date: function() {
    return moment(this.startDate).endOf('day').fromNow();
  },
  event_location: function() {
    if(this.venues && this.venues[0] && this.venues[0].name) {
      return this.venues[0].name + ' (' + this.venues[0].address + ')';
    }

    return 'no venue yet';
  }
});

