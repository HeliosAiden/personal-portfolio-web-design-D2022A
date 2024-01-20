export const injectElement = (input) => {
  const {id, path, images = [], style = null} = input
  const element = document.getElementById(`${id}`)
  if (!element) return;
  try {
    fetch(`./${path}`)
      .then((res) => res.text())
      .then((data) => {
        element.innerHTML = data;
        const oldScript = element.querySelector("script");
        if (oldScript) {
          const newScript = document.createElement("script");
          if (oldScript.text) {
            newScript.text = oldScript.text;
          }
          if (oldScript.src) {
            newScript.src = oldScript.src;
          }
          if (oldScript.type) {
            newScript.type = oldScript.type;
          }
          element.removeChild(oldScript);
          element.appendChild(newScript);
        }
        if (images.length !== 0) {
          images.map((img, index) => {
            const currentIMG = document.getElementById(`img-${index}`);
            const newIMG = document.createElement("img");
            if (currentIMG) {
              newIMG.src = `${rootURL}/${img.src}`;
              newIMG.alt = img.alt;
              newIMG.style = img.style;
              newIMG.id = currentIMG.id;
              newIMG.className = currentIMG.className;
            }
            currentIMG.replaceWith(newIMG);
          });
        }
        if (style !== null) {
          const newStyle = document.createElement("link");
          newStyle.rel = "stylesheet";
          newStyle.href = `${rootURL}/${style.href}`;
          const oldStyle = element.querySelector("link");
          if (oldStyle) {
            element.removeChild(oldStyle);
          }
          element.appendChild(newStyle);
        }
      });
  } catch (err) {
    console.log(err);
  }
};