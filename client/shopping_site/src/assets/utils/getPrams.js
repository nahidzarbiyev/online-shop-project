export default (query) => {
  if (query) {
    const queryString = query.split("?")[1];
    if (queryString.length > 0) {
      const params = queryString.split("&");
      const paramsOBj = [];
      params.forEach((param) => {
        const keyvalue = param.split("=");
        paramsOBj[keyvalue[0]] = keyvalue[1];
      });

      return paramsOBj
    }
  }
  return {}
};
