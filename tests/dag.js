var test = require('tape')
var abstractBlobTests = require('abstract-blob-store/tests')
var blobs = require('./')

var common = {
  setup: function (t, cb) {
    var store = blobs().dag
    cb(null, store)
  },
  teardown: function (t, store, blob, cb) {
    cb()
  }
}

abstractBlobTests(test, common)