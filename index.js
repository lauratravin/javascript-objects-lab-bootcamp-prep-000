var recipes = { property : 'somevalue'};


function updateObjectWithKeyAndValue(object, key, value){
     return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
      delete object[key];
      return object
}

function deleteFromObjectByKey(){

}

function destructivelyDeleteFromObjectByKey(){

}
