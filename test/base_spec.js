var should = require('should')
var helper = require('node-red-node-test-helper')
var baseNode = require('../nodes/base.js')

helper.init(require.resolve('node-red'))

describe('Base Node', function () {
  beforeEach(function (done) {
    helper.startServer(done)
  })

  afterEach(function (done) {
    helper.unload()
    helper.stopServer(done)
  })

  it('should be loaded', function (done) {
    var flow = [{ id: 'n1', type: 'base-node', name: 'Base node' }]
    helper.load(baseNode, flow, function () {
      var n1 = helper.getNode('n1') // FIXME:return null
      console.log(n1)
      n1.should.have.property('name', 'Base node')
      done()
    })
  })
})