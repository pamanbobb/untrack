const looking = new URLSearchParams(window.location.search);
const directed = looking.get('url');
window.location.href = directed;