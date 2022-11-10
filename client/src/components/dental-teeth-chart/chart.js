const polygonsArray = document.querySelectorAll('polygon');
for (const polygon of polygonsArray) {
  polygon.onclick = event => {
    event.currentTarget.classList.toggle('unmarked');
    event.currentTarget.classList.toggle('marked');
  };
}