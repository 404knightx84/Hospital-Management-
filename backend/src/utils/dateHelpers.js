function isFutureDate(date) {
  return new Date(date) > new Date();
}

function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

module.exports = { isFutureDate, formatDate };
