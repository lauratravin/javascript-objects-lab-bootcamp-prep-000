var object = { property : 'somevalue'};


function updateObjectWithKeyAndValue(object, key, value){
     return Object.assign({}, object, {[key]: value});
}
