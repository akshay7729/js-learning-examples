// to raise and  handle custom events
var events = require("events");

var em = new events.EventEmitter();

let listener = () => console.log("listen");

em.on("FirstEvent", listener);

em.emit("Firstevent", "Data");
em.emit("Secondevent", "Data");

em.removeListener("FirstEvent", listener);
em.removeAllListeners();
