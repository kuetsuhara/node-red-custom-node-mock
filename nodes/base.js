const Util = require("../lib/util.js")

module.exports = function (RED) {
  function BaseNode(config) {
    RED.nodes.createNode(this, config);

    // get login data
    // if you use crednetial, uncomment
    // this.login = RED.nodes.getNode(config.login)
    // if (!this.login) {
    //   node.status({
    //     fill: 'red',
    //     shape: 'dot',
    //     text: 'Credentials error'
    //   })
    //   node.error('No credentials specified')
    //   return
    // }

    var node = this;

    // input action
    node.on('input', function (msg) {
      var util = new Util()
      var result = util.joinString("hoo", "bar")

      msg.payload = result;
      node.send(msg);
    });

    // close action
    node.on('close', function () {
      node.status({})
    })

  }
  RED.nodes.registerType("base-node", BaseNode);
}