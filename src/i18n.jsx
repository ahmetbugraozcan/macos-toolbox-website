import { createContext, useContext, useEffect, useMemo, useState } from "react";

const dict = {
  en: {
    nav: { features: "Features", gallery: "Gallery", video: "Video", download: "Download", cta: "Download" },
    hero: {
      eyebrow: "A tiny toolbox for your Mac menu bar",
      title: ["Capture, collect, and send —", "without breaking your flow."],
      lede: "DeskCast lives quietly in your menu bar. Snap a region into a floating shelf, record a full display or selected area, gather files onto a drop tray, and search every screenshot by its text — all in a single, focused little app.",
      download: "Download for Mac",
      secondary: "See what it does ↓",
      meta: "Free · macOS · Version {v}",
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
      video: {
        eyebrow: "Selected-area video",
        title: "Record exactly the part that matters.",
        body: "Record a full display or resize a precise area in DeskCast's own recorder. Choose system audio, a microphone, frame rate, cursor options, and where the finished .mov should be saved.",
        bullets: ["Full display or resizable area", "System audio + microphone", "Videos join the capture shelf"],
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
        body: "No Dock icon, no window clutter. DeskCast tucks into the menu bar with tidy, toggleable tools — screenshots, video capture, OCR, image search, and Finder-path copy — a keystroke away.",
        bullets: ["No Dock icon", "Global shortcuts", "Toggle each tool"],
      },
    },
    gallery: {
      eyebrow: "A closer look",
      title: "Small app. Surprising range.",
      hint: "Hover to pause ⏸",
      captions: {
        capture: "Screenshot exactly the region you need.",
        shelf: "Captures stack up, ready to drag out.",
        video: "Record a full display or resizable area from DeskCast's own recorder.",
        search: "Find any screenshot by the text inside it.",
        drop: "A staging tray for anything you drag.",
        menu: "One tidy menu, zero window clutter.",
        settings: "Fine-tune every tool from one place.",
      },
      names: {
        capture: "Capture Selected Area",
        shelf: "Screenshot Shelf",
        video: "Video Recording",
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
    nav: { features: "Özellikler", gallery: "Galeri", video: "Video", download: "İndir", cta: "İndir" },
    hero: {
      eyebrow: "Mac menü çubuğun için minik bir araç kutusu",
      title: ["Yakala, topla ve gönder —", "akışını bozmadan."],
      lede: "DeskCast menü çubuğunda sessizce yaşar. Bir bölgeyi yakalayıp yüzen rafa at, seçili alanı kaydet, dosyaları bırakma rafında topla ve her ekran görüntüsünü içindeki metne göre ara — hepsi tek, odaklı küçük bir uygulamada.",
      download: "Mac için indir",
      secondary: "Neler yapıyor? ↓",
      meta: "Ücretsiz · macOS · Sürüm {v}",
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
      video: {
        eyebrow: "Seçili alan videosu",
        title: "Tam olarak önemli olan kısmı kaydet.",
        body: "DeskCast'in kendi kayıt panelinden tam ekranı veya hassas biçimde boyutlandırdığın bir alanı kaydet. Sistem sesi, mikrofon, kare hızı, imleç seçenekleri ve .mov kayıt klasörünü sen belirle.",
        bullets: ["Tam ekran veya boyutlandırılabilir alan", "Sistem sesi + mikrofon", "Videolar yakalama rafına eklenir"],
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
        body: "Dock ikonu yok, pencere kalabalığı yok. DeskCast menü çubuğuna yerleşir — ekran görüntüsü, video, OCR, görsel arama ve Finder-yolu kopyalama — bir tuş uzaklıkta.",
        bullets: ["Dock ikonu yok", "Global kısayollar", "Her aracı aç/kapat"],
      },
    },
    gallery: {
      eyebrow: "Yakından bak",
      title: "Küçük uygulama. Şaşırtıcı kapsam.",
      hint: "Durdurmak için üzerine gelin ⏸",
      captions: {
        capture: "Tam ihtiyacın olan bölgeyi yakala.",
        shelf: "Yakalamalar üst üste birikir, sürüklemeye hazır.",
        video: "DeskCast'in kendi paneliyle tam ekranı veya boyutlandırılabilir alanı kaydet.",
        search: "Herhangi bir ekran görüntüsünü içindeki metinle bul.",
        drop: "Sürüklediğin her şey için bir hazırlama rafı.",
        menu: "Tek düzenli menü, sıfır pencere kalabalığı.",
        settings: "Her aracı tek yerden ince ayar yap.",
      },
      names: {
        capture: "Seçili Alanı Yakala",
        shelf: "Ekran Görüntüsü Rafı",
        video: "Video Kaydı",
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
