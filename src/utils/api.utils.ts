
// api actions to search
let apiActions = {
  indexOf: function (data: any, searchTerm: any, property: any) {
    for (let i = 0; i < data.length; i++) {
      if (data[i][property] === searchTerm) return i;
    }
    return -1;
  },
  indexAllOf: function (data: any, searchTerm: any, property: any) {
    let ai = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][property] === searchTerm) ai.push(i);
    }
    return ai;
  },
  lookup: function (data: Array<any>, searchTerm: any, property: any, firstOnly: any) {
    let foundData = [];
    let i = data.length;
    while (i--) {
      if (data[i][property] === searchTerm) {
        foundData.push(data[i]);
        if (firstOnly) break; //if only the first 
      }
    }
    return foundData;
  },
  lookupAny: function (data: any, searchTerm: any, property: any, firstOnly: any) {
    let foundData = [];
    let i = data.length;
    while (i--) {
      if (data[i][property].indexOf(searchTerm) !== -1) {
        foundData.push(data[i]);
        if (firstOnly) break; //if only the first 
      }
    }
    return foundData;
  },
  lookupAll: function (data: any, searchTerm: any, property: any) {
    return this.lookup(data, searchTerm, property, false);
  },
  remove: function (data: any, searchTerm: any, property: any, firstOnly: any) {
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i][property] === searchTerm) {
        data.splice(i, 1);
        if (firstOnly) break; //if only the first term has to be removed
      }
    }
  },
  removeByIndex: function (data: any, index: any) {
    data.splice(index, 1);
  }
}
/**
 * getProductByQueryString
 * Get products by query string parameters
 * 
 * @param {Array<any>} data
 * @param {Object} parameters
 * @return {Array<any>}  products list
 */
export const getProductByQueryString = (data: Array<any>, parameters: any): Array<any> => {
  const { id, name } = parameters;

  if (id) {
    return apiActions.lookup(data, id, 'id', false)
  } else if(name) {
    return apiActions.lookupAny(data, name.toLowerCase(), 'name', false)
  }

  return data
}