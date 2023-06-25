function addDefaultColumns(table:any) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

function references(table:any, tableName:any) {
  table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

export default {
  addDefaultColumns,
  references,
};