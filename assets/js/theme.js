// const STORAGE_KEY = "theme";
// const THEME_ATTR  = "data-theme";
// const QUERY_KEY   = "(prefers-color-scheme: dark)";

// const themes = {
//   LIGHT: "light",
//   DARK: "dark",
// };

// initTheme();

// function initTheme() {
//   const savedTheme = localStorage.getItem(STORAGE_KEY);

//   if (savedTheme) {
//     // Storage theme
//     setTheme(savedTheme);
//   } else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
//     // system theme
//     setTheme(themes.DARK);
//   } else {
//     // Default theme
//     setTheme(themes.LIGHT);
//   }

//   // Watch for system theme changes
//   window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
//     const newTheme = e.matches ? themes.DARK : themes.LIGHT;
//     setTheme(newTheme);
//   });
// }

// function toggleTheme() {
//   const theme = getTheme();
//   const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
//   setTheme(newTheme);
//   localStorage.setItem(STORAGE_KEY, newTheme);
// }

// function getTheme() {
//   return document.documentElement.getAttribute(THEME_ATTR);
// }

// function setTheme(value) {
//   document.documentElement.setAttribute(THEME_ATTR, value);
// }







function get_tools(repo) {
  fetch(`https://api.github.com/repos/${repo}/topics`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  })
    .then(response => response.json())
    .then(data => {
      var name = repo.split("/")[1];
      var parent = document.getElementById(`${name}-tools`);
      parse_tools(data.names).forEach(t => parent.appendChild(t));
    });
}

function parse_tools(tools) {
  var classes = "badge badge-pill text-primary border border-primary ml-1";
  var classesArr = classes.split(" ");
  return tools.map(tool => {
    var span = document.createElement("span");
    span.classList.add(...classesArr);
    span.innerHTML = tool;
    return span;
  });
}









































