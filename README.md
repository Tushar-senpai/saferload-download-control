# 🛡️ SafeLoad - Verified Software Download Assistant

**SafeLoad** is a Chrome extension designed to protect users from accidentally downloading malicious or unsafe software by providing **verified, trustworthy links** directly from official sources.

---

## 🚀 Features

- ✅ Suggests **verified download links** for popular software
- ⚠️ Warns users when they visit **suspicious or untrusted domains**
- 🔎 Allows **manual search** for trusted software download links
- 🔄 Displays **latest GitHub release versions** (for select open-source projects)
- 🧠 Lightweight, fast, and privacy-friendly (no data tracking)


## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Chrome Extension (Manifest V3)
- GitHub REST API (for latest release info)

---

## 📂 Folder Structure

saferLoad/
│
├── manifest.json # Extension config
├── popup.html # UI for manual search
├── popup.js # Logic for safe link search + GitHub version check
├── content.js # Injects warning banner on dangerous sites
├── style.css # Simple clean styling
└── background.js # (Reserved for future use)



---

## 📦 Installation (For Developers)

1. Clone or download this repo.
2. Go to `chrome://extensions` in Chrome.
3. Enable **Developer Mode** (top right).
4. Click **Load Unpacked**.
5. Select the folder containing the extension files.
6. Done! Click the 🔰 SafeLoad icon to start using.

---

## 💡 Future Enhancements

- ✅ User-powered rating & reporting system (community trust layer)
- 🔍 Integration with VirusTotal for deeper scan
- 🌐 Device-specific recommendations
- ☁️ Firebase or Supabase backend for scalable data

---

## 📜 License
free to use, modify, and share.

---

## 👨‍💻 Made with ❤️ Tushar

