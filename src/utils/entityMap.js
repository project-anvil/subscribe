const knex = require('knex')

module.exports = config => {
  const entityMap = knex(config)
  return {
    define: (entityType = '', entityStruct = []) => {
      const fields = [...entityStruct]
      return {
        read: () => entityMap.select(...fields).from(entityType),
        write: entity => entityMap(entityType).insert(entity)
      }
    }
  }
}
