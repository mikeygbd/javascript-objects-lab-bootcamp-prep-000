
var recipes = {
  pizza: 'cheese',
  soup: 'broth',
  sandwich:'meat'
  function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value })
  }
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object
  }
  function deleteFromObjectByKey(object, key) {
    var newObj = Object.assign({}, object)
    delete newObject[key];
    return newObject
  }
  function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
    return object
