export const findItem = (searchingItem, property, items) => {
  let found = false
  for (let i= 0; i < items.length; i++) {
    if (items[i][property] === searchingItem) {
      found = true;
      return found
    }
  }  
}

