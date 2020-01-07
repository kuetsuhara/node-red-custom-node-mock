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
      msg.payload = "Hi i am base node!";
      node.send(msg);
    });

    // close action
    node.on('close', function () {
      node.status({})
    })

  }
  RED.nodes.registerType("base-node", BaseNode);
}