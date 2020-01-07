module.exports = function (RED) {
  'use strict'

  function BaseCredentialsNode(config) {
    RED.nodes.createNode(this, config)
    this.server = config.server
    if (this.credentials) {
      this.id = this.credentials.id
      this.password = this.credentials.password
    }
  }
  RED.nodes.registerType('base-credentials', BaseCredentialsNode, {
    credentials: {
      id: { type: 'text' },
      password: { type: 'password' }
    }
  })
}