module.exports = function(request, type) {
  return request.headers.accept.indexOf(type) > -1;
};
