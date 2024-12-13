class Utility {
  public static trimInputs(obj) {
    for (let prop in obj) {
      let value = obj[prop],
        type = typeof value;
      if (value != null && (type == "string" || type == "object") && obj.hasOwnProperty(prop)) {
        if (type == "object") {
          Utility.trimInputs(obj[prop]);
        } else {
          obj[prop] = obj[prop].trim();
        }
      }
    }
    return obj;
  }
}

export default Utility;
