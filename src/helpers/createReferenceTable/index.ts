import { setPrimaryKey } from "../setPrimaryKey"
import { setUniqueColumn } from "../setUniqueColumn"
import { createSchemaConstraints } from "../createSchemaConstraints"

export const createReferenceTable = async (queryInterface: any, Sequelize: any, tableName: string, tablePrimaryKey: string, tableReferenceKey: string) => {
  await queryInterface.createTable(tableName, {
    [tablePrimaryKey]: createSchemaConstraints.primaryKey(Sequelize),
    [tableReferenceKey]: createSchemaConstraints.referenceKey(Sequelize),
    description: { type: Sequelize.STRING(255), allowNull: false },
  })

  await setPrimaryKey(queryInterface, tableName, tablePrimaryKey)
  await setUniqueColumn(queryInterface, tableName, tableReferenceKey)
}