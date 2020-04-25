exports = function convertToDMY(data) {
  let unix_timestamp = data;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp);
  // Day part from the timestamp
  var Day = date.getDate();
  // Month part from the timestamp
  var Month = date.getMonth() + 1;
  // Year part from the timestamp
  var Year = date.getFullYear();

  return Year + "-" + Month + "-" + Day;
};
