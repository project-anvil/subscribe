const uuidV4 = require('uuid/v4')

const { subscriber } = require('../entities')

const saveSubscriber = ({ id = uuidV4(), email }) => subscriber.write({ id, email })

module.exports = {
  saveSubscriber
}
