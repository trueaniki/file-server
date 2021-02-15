function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

// function createContentTypeMap (contentTypeMap) {
// 	// const contentTypeMap = contentTypeMap
// 	return ext => {
// 		try return contentTypeMap[ext]
// 		catch return 'text/plain'
// 	}
// }


// module.exports = {
// 	isEmpty,
// 	createContentTypeMap
// }