const updatesData = [
  {
    title: "2023 Cumulative Upates & New LightBox Gallery",
    date: "Sat, 29-07-2023",
    content: `
      - New Lightbox scheme for Index with gallery and lots of images powered by <a href="https://github.com/biati-digital/glightbox">Glightbox</a>.
      <br>
      - New exclusive Headers css for various Pages.
      <br>
      - <a href="projects">Legacy of kain Defiance Voices Project</a> uploaded.
      <br>
      - Corrections in css Topic pages.
      <br>
      - New legend intro for Index.
      <br>
      - Site url changed to https://razzbunker.xyz
      <br>
      - Using a better iframes for navbar and footer.
    `
  },
  {
    title: "New Service Page",
    date: "Tue, 20-09-2022",
    content: `
      - New Page for Services <a href="sr/services">Services</a>.
      <br>
      - Corrections in css Topic page.
      <br>
      - Javasctipt from gallery corrected for a fast slice view.
    `
  },
  {
    title: "New Pages and Mayor Updates",
    date: "Tue, 22-03-2022",
    content: `
      - Site url changed to https://razzbunker.com
      <br>
      - Corrections in html files and index css.
      <br>
      - Artist Pals is updated with some new Artists!.
      <br>
      - Navigation bar simplified, no more sub-menus!.
      <br>
      - New <a href="topic">Topic</a> page is here for a better order and new syntax.
      <br>
      - Changed "pals" page for the new <a href="artists">Artists</a>.
    `
  },
  {
    title: "New Artist Palss site",
    date: "Fri, 28-01-2022",
    content: `
      - Some minor correctios in url's.
      <br>
      - Artist Pals is updated with some new Artists!.
      <br>
      - New <a href="tos">ToS</a> page is here for new clients.
    `
  },
  {
    title: "Changes in Navigations and Gallerys comments",
    date: "Thu, 09 Dec 2021",
    content: `
      - New style for the nav bar.
      <br>
      - Some corrections in footer text align and space.
      <br>
      - Experimenting with a new set for the gallery.
      <br>
      - New pages for each image as arrived to leave comments with Disqus.
    `
  },
  {
    title: "Web Site is cloud-online!",
    date: "Thu, 09 Dec 2021",
    content: `
      - The site url changed to https://razzbunker.sytes.net
      <br>
      - Minor corrections for functionality in bar navigation.
      <br>
      - DMCA image changed to suit with the web style.
      <br>
      - The "Bunker" Project is on github for continuous deployment and ready sharing.
    `
  },
  {
    title: "Creation of Contact",
    date: "Mon, 07 Dec 2021",
    content: `
      - New Site for the "Contact" and full functional with Formspree!.
    `
  },
  {
    title: "Creation of Pals Site!",
    date: "Sat, 04 Dec 2021",
    content: `
      - New Site for the "Associates", there's a self-introduction and links for each artist gallery.
      <br>
      - Experimenting with titles fade in/out in gallery images.
      <br>
      - Minor corrections in hyperlinks from the navigator.
      <br>
      - Footer with new transitions and colors.
    `
  },
  {
    title: "Light Updates & Fixes",
    date: "Sat, 04 Dec 2021",
    content: `
      - Index new simple view.
      <br>
      - The "About" page was set.
      <br>
      - Legend in index changed for simplicity a intro.
      <br>
      - Notice: The script of gallery dosn't filter thew views interactions.
      <br>
      - Changues in various text of the websyte, fonts, colors, spacing.
      <br>
      - The new set time gonna be day/month/year but only in quick view.
    `
  },
  {
    title: "Major Updates!",
    date: "Fri, 19 Nov 2021",
    content: `
      - New Gallery View.
      <br>
      - Fixed interactions in Gallery.
      <br>
      - New Filters in Gallery and setting up new pages for Artist Pals and Collaborators.
      <br>
      - Fixed all the javas scripts in gallery.
      <br>
      - Changed the color background in Welcome Menu and sub pages.
    `
  },
  {
    title: "Set of Gallery",
    date: "Sun, 10 Oct 2021",
    content: `
      - Creation of "Gallery"
      <br>
      - Made a template for error 404 and 405 (showing the same) <a href="404">404 error</a>.
      <br>
      - Fixed the legend of profile.
    `
  },
  {
    title: "New page & Footer",
    date: "Sat, 09 Oct 2021",
    content: `
      - Creation of "Web Updates"
      <br>
      - Footer Content with social links and DMCA links.
    `
  },
  {
    title: "First Pages Update",
    date: "Fri, 08 Oct 2021",
    content: `
      - Creation of /Test for Lab improbment. Html & CSS study.
      <br>
      - Making a better align in text but still in Web v1.0. More tune ups in the incoming days.
    `
  }
];

// ========== Render completo para web.html ==========
function renderFullUpdates() {
  const container = document.getElementById("updates-container");
  if (!container) return;

  let html = "";
  updatesData.forEach(update => {
    html += `
      <article class="update">
        <b>${update.title}</b>
        <p id="date">${update.date}</p>
        <p>${update.content}</p>
      </article>
    `;
  });

  container.innerHTML = html;
}

// ========== Quick View (3 últimos) para index.html ==========
function renderQuickView() {
  const container = document.getElementById("qv");
  if (!container) return;

  // Tomamos solo los 3 primeros (los más recientes)
  const latest = updatesData.slice(0, 3);

  let html = "";
  latest.forEach(update => {
    // Tomamos solo la primera línea del contenido para el resumen
    const firstLine = update.content
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .trim()
      .split("\n")[0]
      .substring(0, 120);

    html += `
      <p>
        <small>${update.date}</small><br>
        <b>${update.title}</b>
      </p>
      ${firstLine}...
      <a href="web.html">view</a>
      <br>----------------------------
    `;
  });

  container.innerHTML = html;
}

// Detecta en qué página estamos
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("updates-container")) {
    renderFullUpdates();
  }
  if (document.getElementById("qv")) {
    renderQuickView();
  }
});
