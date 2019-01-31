const config = require('../../config.json')
const entityMap = require('../utils/entityMap')

const entityMapper = entityMap(config)

const subscriber = entityMapper.define('subscriber', ['id', 'email'])

module.exports = {
  subscriber
}
