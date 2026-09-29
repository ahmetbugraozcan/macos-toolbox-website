import { createContext, useContext, useEffect, useMemo, useState } from "react";

const dict = {
  en: {
    nav: { island: "Island", features: "Features", gallery: "Gallery", video: "Video", download: "Download", cta: "Download" },
    hero: {
      eyebrow: "A tiny toolbox for your Mac menu bar",
      title: ["Capture, collect, and send —", "without breaking your flow."],
      lede: "DeskCast lives quietly in your menu bar — and now around your notch. Capture and annotate a region, record and trim video, follow your music and AI agents in a Dynamic Island, and search every screenshot by its text. All in one focused little app.",
      download: "Download for Mac",
      secondary: "See what it does ↓",
      meta: "Free · macOS · Version {v}",
    },
    island: {
      eyebrow: "Dynamic Island",
      title: "Your notch, finally doing something.",
      lede: "DeskCast grows a Dynamic Island out of the notch — or the top of any display. It shows what's playing, keeps your timer running, mirrors other apps' notifications, and opens into a set of panels when you need them.",
      tabs: {
        glance: "At a glance",
        nowPlaying: "Now Playing",
        timer: "Timer",
        launcher: "Panels",
        weather: "Weather",
        system: "System",
        alerts: "Alerts",
      },
      captions: {
        glance: "Closed, it stays notch-sized: the song on one side, your timer on the other.",
        nowPlaying: "Controls, scrubbing, the player's own volume and time-synced lyrics — for Spotify, Music and YouTube in the browser.",
        timer: "A timer or stopwatch that keeps counting beside the song when the island closes.",
        launcher: "Seventeen panels, each a ⌥⌘ shortcut away. Drag to reorder, hide the ones you don't need.",
        weather: "An hourly forecast for your city — no account, no location permission.",
        system: "CPU, GPU, memory, network and power draw at a glance.",
        alerts: "Messages, Mail and calendar reminders arrive as banners — with a Join button for meetings.",
      },
      highlights: [
        { t: "AI agents at work", d: "See when Claude Code or Codex is working, and get a banner when a long task finishes." },
        { t: "Notifications, mirrored", d: "Other apps' banners show up in the island and stay in a history you can scroll back through." },
        { t: "Clipboard history", d: "Search what you copied and paste it back with a click." },
        { t: "Per-app volume", d: "Turn one app down without touching the rest." },
        { t: "Quick controls", d: "Dark Mode, Keep Awake, mute, microphone and output device, one tap each." },
        { t: "Calendar, camera, downloads", d: "Today's events, a camera mirror and your latest downloads, right under the notch." },
      ],
    },
    features: {
      capture: {
        eyebrow: "Capture Selected Area",
        title: "Screenshot only what you need.",
        body: "Drag over any part of your screen and DeskCast captures that exact region. The native macOS selection flow stays familiar and fast.",
        bullets: ["Precise region capture", "Global shortcut", "Native macOS selection"],
      },
      shelf: {
        eyebrow: "Screenshot Shelf",
        title: "Every capture lands on a floating shelf.",
        body: "Snap a region and it drops into a shelf that hovers over your work. Reorder, pin the ones you need, and drag any shot straight into another app — just like macOS, now with a memory.",
        bullets: ["Region capture", "Drag out to any app", "Pin · reorder · auto-hide"],
      },
      annotate: {
        eyebrow: "Annotate",
        title: "Mark it up before you send it.",
        body: "Open any capture in the editor to add arrows, boxes, text, highlights and pen strokes — or pixelate what shouldn't be seen. Done updates the shot on the shelf, and you can pin it to float above every window.",
        bullets: ["Arrow · box · pen · text · highlight", "Pixelate sensitive details", "Pin captures on screen"],
      },
      video: {
        eyebrow: "Selected-area video",
        title: "Record exactly the part that matters.",
        body: "Record a full display or resize a precise area in DeskCast's own recorder. Choose system audio, a microphone, frame rate, cursor options, and where the finished .mov should be saved.",
        bullets: ["Full display or resizable area", "System audio + microphone", "Videos join the capture shelf"],
      },
      trim: {
        eyebrow: "Trim or Make GIF",
        title: "Cut the clip. Or make it loop.",
        body: "Pick a recording on the shelf and trim it without re-encoding, or turn the selection into a looping GIF. The original is never overwritten.",
        bullets: ["Lossless trim", "Looping GIF export", "Original stays untouched"],
      },
      search: {
        eyebrow: "Image Search",
        title: "Find screenshots by the words inside them.",
        body: "Index a folder once, then search screenshots by filename or recognized text. The result you remember is a few keystrokes away.",
        bullets: ["On-device OCR", "Filename + text search", "Local folder indexing"],
      },
      drop: {
        eyebrow: "Drop Shelf",
        title: "Gather now. Send when you're ready.",
        body: "A floating tray that collects files, folders, links, text, and images from anywhere. Pile things up across apps, then send them together — or shake while dragging to summon it instantly.",
        bullets: ["Collect from any app", "Shake-to-open", "Send together"],
      },
      menu: {
        eyebrow: "One menu, every tool",
        title: "Lives in the menu bar. Stays out of your way.",
        body: "Click the menu bar icon for a compact panel: every tool as a tile with its shortcut, the song that's playing, and your recent colors. No Dock icon, no window clutter.",
        bullets: ["Tool tiles with shortcuts", "Now playing controls", "No Dock icon"],
      },
    },
    tools: {
      eyebrow: "And a few more",
      title: "Small tools you'll reach for every day.",
      items: [
        { k: "scroll", t: "Scrolling Capture", d: "Select an area and scroll — DeskCast stitches one tall image, with fixed headers kept once." },
        { k: "ocr", t: "Copy Text & QR", d: "Capture a region to copy its text, or the contents of any QR code or barcode in it." },
        { k: "color", t: "Color Picker", d: "Pick any pixel and copy it as HEX, RGB, HSL or SwiftUI." },
        { k: "pin", t: "Pin to Screen", d: "Keep a capture floating above every window while you work." },
        { k: "finder", t: "Copy Finder Path", d: "Copy the front Finder window's path with a shortcut." },
        { k: "language", t: "English & Türkçe", d: "The whole app, in both languages." },
      ],
    },
    gallery: {
      eyebrow: "A closer look",
      title: "Small app. Surprising range.",
      hint: "Hover to pause ⏸",
      captions: {
        island: "Music, timers and notifications around the notch.",
        capture: "Screenshot exactly the region you need.",
        shelf: "Captures stack up, ready to drag out.",
        annotate: "Arrows, boxes, text and pixelation in one editor.",
        launcher: "Every island panel, one hover away.",
        video: "Record a full display or resizable area from DeskCast's own recorder.",
        trim: "Trim a recording or turn it into a GIF.",
        timer: "A timer that keeps running beside your music.",
        search: "Find any screenshot by the text inside it.",
        drop: "A staging tray for anything you drag.",
        menu: "One tidy menu, zero window clutter.",
        settings: "Fine-tune every tool from one place.",
      },
      names: {
        island: "Dynamic Island",
        capture: "Capture Selected Area",
        shelf: "Screenshot Shelf",
        annotate: "Annotate",
        launcher: "Island panels",
        video: "Video Recording",
        trim: "Trim or Make GIF",
        timer: "Timer",
        search: "Image Search",
        drop: "Drop Shelf",
        menu: "Menu bar",
        settings: "Settings",
      },
    },
    video: {
      eyebrow: "See it move",
      title: "Thirty seconds of everyday flow.",
      play: "Watch the real app",
      note: "Captured directly from DeskCast on macOS.",
    },
    download: {
      title: "Get DeskCast.",
      lede: "Free, focused, and about as light as an app gets.",
      button: "Download for Mac",
      meta: "macOS · Version {v} · ",
      metaMuted: "downloadable .dmg",
      steps: [
        { t: "Download the .dmg", d: "One click below — no account, no installer wizard." },
        { t: "Drag to Applications", d: "Open the disk image and drop DeskCast into your Applications folder." },
        { t: "Launch from the menu bar", d: "Open it once; it settles into the menu bar and stays out of your Dock." },
      ],
    },
    footer: { fine: "© {y} Ahmet Buğra Özcan · MIT licensed · Made for macOS" },
  },

  tr: {
    nav: { island: "Ada", features: "Özellikler", gallery: "Galeri", video: "Video", download: "İndir", cta: "İndir" },
    hero: {
      eyebrow: "Mac menü çubuğun için minik bir araç kutusu",
      title: ["Yakala, topla ve gönder —", "akışını bozmadan."],
      lede: "DeskCast menü çubuğunda — ve artık çentiğinin etrafında — sessizce yaşar. Bir bölgeyi yakala ve üzerine not al, video kaydet ve kırp, müziğini ve yapay zekâ ajanlarını Dynamic Island'da takip et, her ekran görüntüsünü içindeki metinle ara. Hepsi tek, odaklı küçük bir uygulamada.",
      download: "Mac için indir",
      secondary: "Neler yapıyor? ↓",
      meta: "Ücretsiz · macOS · Sürüm {v}",
    },
    island: {
      eyebrow: "Dynamic Island",
      title: "Çentiğin sonunda bir işe yarıyor.",
      lede: "DeskCast çentikten — ya da herhangi bir ekranın üstünden — bir Dynamic Island çıkarır. Çalan şarkıyı gösterir, zamanlayıcını sayar, diğer uygulamaların bildirimlerini yansıtır ve ihtiyaç duyduğunda panellere açılır.",
      tabs: {
        glance: "Bir bakışta",
        nowPlaying: "Şimdi Çalıyor",
        timer: "Zamanlayıcı",
        launcher: "Paneller",
        weather: "Hava Durumu",
        system: "Sistem",
        alerts: "Bildirimler",
      },
      captions: {
        glance: "Kapalıyken çentik boyutunda kalır: bir yanda şarkı, diğer yanda zamanlayıcın.",
        nowPlaying: "Kontroller, ileri-geri sarma, oynatıcının kendi ses seviyesi ve zamanlı şarkı sözleri — Spotify, Müzik ve tarayıcıdaki YouTube için.",
        timer: "Ada kapanınca şarkının yanında saymaya devam eden bir zamanlayıcı ya da kronometre.",
        launcher: "Her biri bir ⌥⌘ kısayolu uzaklıkta on yedi panel. Sürükleyerek sırala, ihtiyacın olmayanları gizle.",
        weather: "Şehrin için saatlik tahmin — hesap yok, konum izni yok.",
        system: "İşlemci, GPU, bellek, ağ ve güç tüketimi bir bakışta.",
        alerts: "Mesajlar, Mail ve takvim hatırlatmaları bildirim olarak gelir — toplantılar için Katıl düğmesiyle.",
      },
      highlights: [
        { t: "Çalışan yapay zekâ ajanları", d: "Claude Code ya da Codex çalışırken gör, uzun bir görev bitince bildirim al." },
        { t: "Yansıtılan bildirimler", d: "Diğer uygulamaların bildirimleri adada görünür ve geriye dönüp bakabileceğin bir geçmişte kalır." },
        { t: "Pano geçmişi", d: "Kopyaladıklarında ara, tek tıkla geri yapıştır." },
        { t: "Uygulama başına ses", d: "Diğerlerine dokunmadan tek bir uygulamanın sesini kıs." },
        { t: "Hızlı kontroller", d: "Karanlık Mod, Uyanık Tut, sessiz, mikrofon ve çıkış aygıtı — her biri tek dokunuş." },
        { t: "Takvim, kamera, indirilenler", d: "Bugünün etkinlikleri, bir kamera aynası ve son indirdiklerin, çentiğin hemen altında." },
      ],
    },
    features: {
      capture: {
        eyebrow: "Seçili Alanı Yakala",
        title: "Sadece ihtiyacın olanı yakala.",
        body: "Ekranın herhangi bir bölümünün üzerine sürükle, DeskCast tam o bölgeyi yakalasın. Yerel macOS seçim akışı tanıdık ve hızlı kalır.",
        bullets: ["Hassas bölge yakalama", "Global kısayol", "Yerel macOS seçimi"],
      },
      shelf: {
        eyebrow: "Ekran Görüntüsü Rafı",
        title: "Her yakalama yüzen bir rafa düşer.",
        body: "Bir bölgeyi yakala, işinin üzerinde duran bir rafa düşsün. Yeniden sırala, gerekenleri sabitle ve herhangi bir çekimi doğrudan başka bir uygulamaya sürükle — tıpkı macOS gibi, artık hafızasıyla.",
        bullets: ["Bölge yakalama", "Herhangi bir uygulamaya sürükle", "Sabitle · sırala · otomatik gizle"],
      },
      annotate: {
        eyebrow: "Not Al",
        title: "Göndermeden önce üzerine işaretle.",
        body: "Herhangi bir yakalamayı düzenleyicide aç; ok, kutu, metin, vurgu ve kalem ekle — ya da görünmemesi gerekeni pikselleştir. Bitti dediğinde raftaki görüntü güncellenir; istersen onu her pencerenin üzerinde sabitle.",
        bullets: ["Ok · kutu · kalem · metin · vurgu", "Hassas ayrıntıları pikselleştir", "Yakalamaları ekrana sabitle"],
      },
      video: {
        eyebrow: "Seçili alan videosu",
        title: "Tam olarak önemli olan kısmı kaydet.",
        body: "DeskCast'in kendi kayıt panelinden tam ekranı veya hassas biçimde boyutlandırdığın bir alanı kaydet. Sistem sesi, mikrofon, kare hızı, imleç seçenekleri ve .mov kayıt klasörünü sen belirle.",
        bullets: ["Tam ekran veya boyutlandırılabilir alan", "Sistem sesi + mikrofon", "Videolar yakalama rafına eklenir"],
      },
      trim: {
        eyebrow: "Kırp veya GIF Yap",
        title: "Klibi kes. Ya da döngüye sok.",
        body: "Raftaki bir kaydı seç ve yeniden kodlamadan kırp ya da seçimi döngülü bir GIF'e çevir. Orijinal dosyanın üzerine asla yazılmaz.",
        bullets: ["Kayıpsız kırpma", "Döngülü GIF dışa aktarma", "Orijinal olduğu gibi kalır"],
      },
      search: {
        eyebrow: "Görselde Ara",
        title: "Ekran görüntülerini içindeki kelimelerle bul.",
        body: "Bir klasörü bir kez indeksle, sonra ekran görüntülerini dosya adına veya tanınan metne göre ara. Hatırladığın sonuç birkaç tuş uzaklıkta.",
        bullets: ["Cihazda OCR", "Dosya adı + metin araması", "Yerel klasör indeksleme"],
      },
      drop: {
        eyebrow: "Bırakma Rafı",
        title: "Şimdi topla. Hazır olunca gönder.",
        body: "Her yerden dosya, klasör, bağlantı, metin ve görsel toplayan yüzen bir raf. Uygulamalar arasında biriktir, sonra hepsini birlikte gönder — ya da sürüklerken sallağın anında çağır.",
        bullets: ["Her uygulamadan topla", "Salla-aç", "Birlikte gönder"],
      },
      menu: {
        eyebrow: "Tek menü, her araç",
        title: "Menü çubuğunda yaşar. Yolundan çekilir.",
        body: "Menü çubuğu simgesine tıkla, derli toplu bir panel açılsın: kısayollarıyla birlikte her araç bir kutucukta, çalan şarkı ve son renklerin. Dock ikonu yok, pencere kalabalığı yok.",
        bullets: ["Kısayollu araç kutucukları", "Şimdi çalan kontrolleri", "Dock ikonu yok"],
      },
    },
    tools: {
      eyebrow: "Ve birkaç tane daha",
      title: "Her gün uzanacağın küçük araçlar.",
      items: [
        { k: "scroll", t: "Kaydırmalı Yakalama", d: "Bir alan seç ve kaydır — DeskCast tek bir uzun görüntü birleştirir, sabit başlıklar bir kez kalır." },
        { k: "ocr", t: "Metni ve QR'ı Kopyala", d: "Bir bölgeyi yakala; içindeki metni ya da QR kod ve barkodların içeriğini kopyala." },
        { k: "color", t: "Renk Seçici", d: "Herhangi bir pikseli seç; HEX, RGB, HSL ya da SwiftUI olarak kopyala." },
        { k: "pin", t: "Ekrana Sabitle", d: "Çalışırken bir yakalamayı her pencerenin üzerinde tut." },
        { k: "finder", t: "Finder Yolunu Kopyala", d: "Öndeki Finder penceresinin yolunu bir kısayolla kopyala." },
        { k: "language", t: "Türkçe & English", d: "Uygulamanın tamamı, iki dilde." },
      ],
    },
    gallery: {
      eyebrow: "Yakından bak",
      title: "Küçük uygulama. Şaşırtıcı kapsam.",
      hint: "Durdurmak için üzerine gelin ⏸",
      captions: {
        island: "Çentiğin etrafında müzik, zamanlayıcı ve bildirimler.",
        capture: "Tam ihtiyacın olan bölgeyi yakala.",
        shelf: "Yakalamalar üst üste birikir, sürüklemeye hazır.",
        annotate: "Ok, kutu, metin ve pikselleştirme tek bir düzenleyicide.",
        launcher: "Adanın tüm panelleri, bir üzerine gelme uzaklıkta.",
        video: "DeskCast'in kendi paneliyle tam ekranı veya boyutlandırılabilir alanı kaydet.",
        trim: "Bir kaydı kırp ya da GIF'e çevir.",
        timer: "Müziğinin yanında çalışmaya devam eden bir zamanlayıcı.",
        search: "Herhangi bir ekran görüntüsünü içindeki metinle bul.",
        drop: "Sürüklediğin her şey için bir hazırlama rafı.",
        menu: "Tek düzenli menü, sıfır pencere kalabalığı.",
        settings: "Her aracı tek yerden ince ayar yap.",
      },
      names: {
        island: "Dynamic Island",
        capture: "Seçili Alanı Yakala",
        shelf: "Ekran Görüntüsü Rafı",
        annotate: "Not Al",
        launcher: "Ada panelleri",
        video: "Video Kaydı",
        trim: "Kırp veya GIF Yap",
        timer: "Zamanlayıcı",
        search: "Görselde Ara",
        drop: "Bırakma Rafı",
        menu: "Menü çubuğu",
        settings: "Ayarlar",
      },
    },
    video: {
      eyebrow: "Hareket halinde gör",
      title: "Günlük akıştan otuz saniye.",
      play: "Gerçek uygulamayı izle",
      note: "Doğrudan macOS'ta DeskCast'ten yakalandı.",
    },
    download: {
      title: "DeskCast'i edin.",
      lede: "Ücretsiz, odaklı ve bir uygulamanın olabileceği kadar hafif.",
      button: "Mac için indir",
      meta: "macOS · Sürüm {v} · ",
      metaMuted: "indirilebilir .dmg",
      steps: [
        { t: ".dmg dosyasını indir", d: "Aşağıda tek tık — hesap yok, kurulum sihirbazı yok." },
        { t: "Applications'a sürükle", d: "Disk imajını aç ve DeskCast'i Applications klasörüne bırak." },
        { t: "Menü çubuğundan başlat", d: "Bir kez aç; menü çubuğuna yerleşir ve Dock'undan uzak durur." },
      ],
    },
    footer: { fine: "© {y} Ahmet Buğra Özcan · MIT lisanslı · macOS için yapıldı" },
  },
};

function detectLang() {
  try {
    const saved = localStorage.getItem("deskcast-lang");
    if (saved === "en" || saved === "tr") return saved;
  } catch {
    /* ignore */
  }
  const langs = navigator.languages || [navigator.language || "en"];
  return langs.some((l) => l.toLowerCase().startsWith("tr")) ? "tr" : "en";
}

const LangContext = createContext({ lang: "en", setLang: () => {}, t: () => "" });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang);

  useEffect(() => {
    try {
      localStorage.setItem("deskcast-lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const table = dict[lang] || dict.en;
    const t = (path, vars) => {
      const raw = path.split(".").reduce((o, k) => (o == null ? o : o[k]), table);
      if (typeof raw !== "string") return raw; // arrays / objects pass through
      return vars
        ? raw.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`))
        : raw;
    };
    return { lang, setLang, t };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// oxlint-disable-next-line react/only-export-components
export function useI18n() {
  return useContext(LangContext);
}
