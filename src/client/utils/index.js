const generateTime = dateObj => new Date(dateObj).toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' }).toUpperCase();

module.exports = {
  generateTime
};
