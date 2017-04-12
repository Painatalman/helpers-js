/**
 * A Pubsub pattern for managing events and subscriptions with names like 'on' (subscribe), 'off' (remove) and 'emit' (manually trigger event)
 * The source code is authory of [learncodeacademy](https://gist.github.com/learncodeacademy). [Painatalman](https://github.com/Painatalman) just wrapped this in a module
 * WARNING: this code was not tested yet 
 *
 * @see {@link https://gist.github.com/learncodeacademy/777349747d8382bfb722|LearncodeacademyGist}
 * @author learncodeacademy <https://gist.github.com/learncodeacademy>
 */
module.exports = function initializePubSubEventCollection() {
  //events - a super-basic Javascript (publish subscribe) pattern

  var events = {
    events: {},
    on: function (eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === fn) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    },
    emit: function (eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };
  
  return events;
}
