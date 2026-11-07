const galleryData = {
  2025: [
    { full: "https://i.imgur.com/auEgzmY.jpeg", thumb: "https://i.imgur.com/QKQnP20.jpeg", title: "Tails Big" },
    { full: "https://i.imgur.com/bfK4e70.jpeg", thumb: "https://i.imgur.com/srOXwHs.jpeg", title: "Heads" },
    { full: "https://i.imgur.com/h6qr42E.jpeg", thumb: "https://i.imgur.com/OoP7Ebq.jpeg", title: "Tails Small" },
    { full: "https://i.imgur.com/PvoODzl.jpeg", thumb: "https://i.imgur.com/lfAvMBM.jpeg", title: "Final Chapter V1" },
    { full: "https://i.imgur.com/B5bSK8U.jpeg", thumb: "https://i.imgur.com/vPDRyHj.jpeg", title: "Final Chapter V2" },
    { full: "https://i.imgur.com/UwyicH8.jpeg", thumb: "https://i.imgur.com/GmTfS98.jpeg", title: "Revelion" },
    { full: "https://i.imgur.com/Hi0UcJW.jpeg", thumb: "https://i.imgur.com/6QhVD1B.jpeg", title: "In Presence of the One" },
    { full: "https://i.imgur.com/NfUYvCx.jpeg", thumb: "https://i.imgur.com/daPo5nk.jpeg", title: "Heaven Gates" },
    { full: "https://i.imgur.com/pJV9B4u.jpeg", thumb: "https://i.imgur.com/7jqjMuo.jpeg", title: "Holy War" },
    { full: "https://i.imgur.com/WnwBFF6.jpeg", thumb: "https://i.imgur.com/0sLIlz8.jpeg", title: "Sheep" },
    { full: "https://i.imgur.com/qYarDkG.jpeg", thumb: "https://i.imgur.com/h0JDo0W.jpeg", title: "Mage" },
    { full: "https://i.imgur.com/vQ0QsRN.jpeg", thumb: "https://i.imgur.com/6QP6iOR.jpeg", title: "Soldier" },
    { full: "https://i.imgur.com/aljf3hD.jpeg", thumb: "https://i.imgur.com/ovm4tIC.jpeg", title: "Shark Girl" },
    { full: "https://i.imgur.com/YyU61oI.jpeg", thumb: "https://i.imgur.com/DA0Bhql.jpeg", title: "Amai and Neru" },
    { full: "https://i.imgur.com/tocGtcW.jpeg", thumb: "https://i.imgur.com/ggudJua.jpeg", title: "Pixel Azz" },
    { full: "https://i.imgur.com/JUeRK6C.jpeg", thumb: "https://i.imgur.com/mDKlNAJ.jpeg", title: "Colab Friends" },
    { full: "https://i.imgur.com/XTmBXYe.jpeg", thumb: "https://i.imgur.com/DJDv7aQ.jpeg", title: "Amalia" },
    { full: "https://i.imgur.com/NvWRZo6.jpeg", thumb: "https://i.imgur.com/gQmIQQi.jpeg", title: "Gift for AshKeel 2025" },  
  ],
};

function createGalleryItem(item) {
  return `
    <div class="image">
      <a href="${item.full}" class="glightbox">
        <img src="images/thumb-effect.png" class="effect">
        <img src="${item.thumb}" class="crop">
        <div class="overlay">
          <div class="title"></div>
          <p class="info">${item.title}</p>
        </div>
      </a>
    </div>
  `;
}

function renderGalleries() {
  const years = Object.keys(galleryData).sort((a, b) => b - a);
  const container = document.getElementById("gallery-container");
  
  if (!container) return;

  let html = "";

  years.forEach(year => {
    const items = galleryData[year];
    if (!items || items.length === 0) return;

    html += `<h1>> ${year}</h1>`;
    html += `<div class="gallery">`;
    html += items.map(createGalleryItem).join("");
    html += `</div>`;
  });

  container.innerHTML = html;

  // Reinicializar GLightbox después de generar el HTML
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
  }
}

document.addEventListener("DOMContentLoaded", renderGalleries);
