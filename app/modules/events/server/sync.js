
var update_events = function update_events() {
  scraper = Meteor.npmRequire('lanyrd-scraper');
  scraper.scrape('series/aarhusjs', Meteor.bindEnvironment(function(err, series) {
    if(!err) {
      var events = series.events;
      events.forEach(function(event_data) {
        scraper.scrape(event_data.url, Meteor.bindEnvironment(function(err, event_object) {
          if(!err) {
            event_object['url'] = event_data.url;
            event_object['startDate'] = new Date(Date.parse(event_object.startDate));
            Meteor.events.upsert({url: event_data.url}, event_object);
          } else {
            console.log(err);
          }
        }))
      });
    } else {
      console.log(err);
    }
  }));

  var bound_function = Meteor.bindEnvironment(update_events);

  Meteor.setTimeout(function() {
    bound_function();
  }, 354100)
};
update_events();
