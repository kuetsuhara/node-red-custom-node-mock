module.exports = function (RED) {
  function BaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function (msg) {
      msg.payload = "Hi i am base node!";
      node.send(msg);
    });
  }
  RED.nodes.registerType("base-node", BaseNode);
}