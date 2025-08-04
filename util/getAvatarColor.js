// utils/getAvatarColor.js

function getAvatarColor(username) {
  // Simple color hash generator
  const colors = ['#232323', '#5A2A2A', '#4A2C2C', '#4A4C2C', '#3C2F3F', '#2F3F3C'];
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
}

module.exports = getAvatarColor;
