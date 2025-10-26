const gallery = document.getElementById("flag-gallery");

quizData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("flag-card");
  
  card.innerHTML = `
    <img src="${item.flag}" alt="${item.country}">
    <div class="flag-name">${item.country}</div>
  `;
  
  gallery.appendChild(card);
});
