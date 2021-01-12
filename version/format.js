/*
 * @Author: weidong19
 * @Date: 2020-11-12 17:57:23
 * @LastEditTime: 2020-11-13 12:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wb-ad-asset/version/format.js
 */
function addZero(num) {
  return num < 10 ? "0" + num : num;
}
function formatDate(timestamp) {
  timestamp = Number(timestamp);
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);
  var day = addZero(date.getDate());
  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());
  return year + "-" + month + "" + day + "-" + "" + hours + "" + minutes;
}
module.exports = formatDate;
