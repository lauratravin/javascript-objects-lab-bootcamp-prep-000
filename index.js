var object = { property : 'somevalue'}; 


function updateObjectWithKeyAndValue(object, key, value){
     return Object.assign({}, {[key]: value});
}

object = updateObjectWithKeyAndValue(object, property2, 'somevalue2');

  
