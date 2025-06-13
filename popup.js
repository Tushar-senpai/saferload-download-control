
const verifiedLinks = {
  "vlc": "https://www.videolan.org/vlc/",
  "audacity": "https://www.audacityteam.org/download/",
  "gimp": "https://www.gimp.org/downloads/",
  "python": "https://www.python.org/downloads/",
  "chrome": "https://www.google.com/chrome/",
  "node": "https://nodejs.org/en/download/"
};

async function getGithubVersion(repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
    const data = await res.json();
    return data.tag_name || "No version info";
  } catch (error) {
    return "Version info unavailable";
  }
}

document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultDiv = document.getElementById("result");

  if (query in verifiedLinks) {
    let output = `<a href="${verifiedLinks[query]}" target="_blank">${verifiedLinks[query]}</a>`;

    if (query === "node") {
      const version = await getGithubVersion("nodejs/node");
      output += `<br><small>Latest GitHub version: ${version}</small>`;
    }

    resultDiv.innerHTML = output;
  } else {
    resultDiv.innerText = "No verified link found. Try official site or GitHub.";
  }
});
