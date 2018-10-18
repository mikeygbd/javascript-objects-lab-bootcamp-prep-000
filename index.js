
var recipes = {
  pizza: 'cheese',
  soup: 'broth',
  sandwich:'meat'
  function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value })
  }
