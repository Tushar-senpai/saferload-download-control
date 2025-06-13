
const suspiciousDomains = ["softonic.com", "malavida.com", "filehippo.com"];

const hostname = window.location.hostname;
if (suspiciousDomains.some(domain => hostname.includes(domain))) {
  const warningBanner = document.createElement("div");
  warningBanner.style.position = "fixed";
  warningBanner.style.top = 0;
  warningBanner.style.left = 0;
  warningBanner.style.right = 0;
  warningBanner.style.backgroundColor = "red";
  warningBanner.style.color = "white";
  warningBanner.style.padding = "10px";
  warningBanner.style.zIndex = 9999;
  warningBanner.style.textAlign = "center";
  warningBanner.innerText = "⚠️ This website may host unsafe downloads. Use verified links instead.";
  document.body.prepend(warningBanner);
}
