migrate((db) => {
  const collection = new Collection({
    "id": "x32ycy0di4jsqfg",
    "created": "2023-06-07 14:10:09.911Z",
    "updated": "2023-06-07 14:10:09.911Z",
    "name": "user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "97vu5yhn",
        "name": "is_admin",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vm8i0lrr",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x32ycy0di4jsqfg");

  return dao.deleteCollection(collection);
})
