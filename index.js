var recipes = { property : 'somevalue'};


function updateObjectWithKeyAndValue(object, key, value){
     return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
      object.assign (object,{[key]:value})
      return object;
}

function deleteFromObjectByKey(){

}

function destructivelyDeleteFromObjectByKey(){

}
