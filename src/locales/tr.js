export const tr = {
  nav: {
    features: "Özellikler",
    architecture: "Mimari Akış",
    usage: "Kullanım",
    installation: "Kurulum",
    roadmap: "Yol Haritası",
    faq: "SSS"
  },
  hero: {
    version: "v1.0.0 SÜRÜM",
    title: "OffSploit",
    subtitle1: "Otonom",
    subtitle2: "Exploit Uyarlama",
    subtitle3: "& C2 Framework'ü",
    desc: "RAG ve Yerel LLM'leri kullanarak exploit'leri anında hedefe göre uyarlayan yeni nesil Red Team aracı. Yüksek güvenlikli ve tamamen kapalı ağlar (air-gapped) için tasarlandı.",
    cloneBtn: "Kodu İndir",
    learnBtn: "Daha Fazla Bilgi",
    termTitle: "offsploit@local:~",
    term1: "offsploit --nmap tarama.xml --lhost 10.10.14.5 --rhost 10.10.10.3 --obfuscate",
    term2: "[*] OffSploit Otonom Boru Hattı Başlatılıyor...",
    term3: "[+] Nmap çıktısı okundu: 2 zafiyetli servis bulundu.",
    term4: "[*] Exploit-DB üzerinde RAG Motoru çalıştırılıyor (nomic-embed-text)",
    term5: "[+] 3 aday exploit bulundu. Yerel LLM'e aktarılıyor (qwen2.5-coder).",
    term6: "[*] AST tabanlı OPSEC doğrulaması: Başarılı.",
    term7: "[*] Polimorfik Evasion Motoru: Aktif (Seviye: Gelişmiş).",
    term8: "[+] Sandbox içerisinde derleme başarılı. Hedefe gönderime hazır!",
    btnDocs: "Dokümantasyonu Oku",
    providersTitle: "Desteklenen Yapay Zeka Motorları:",
    providers: ["Ollama (Local)", "Google Gemini", "OpenAI API", "Anthropic Claude"]
  },
  features: {
    title: "Çekirdek Mimari ve Özellikler",
    subtitle: "Birçok yenilikçi ofansif güvenlik konseptini barındıran modüler ve olay güdümlü bir mimari üzerine inşa edilmiştir.",
    items: [
      {
        title: "Otonom Exploit Uyarlaması (RAG + LLM)",
        desc: "Nmap/BloodHound çıktılarını dinamik olarak okur, ChromaDB ile Exploit-DB'yi tarar ve yerel LLM'leri kullanarak kaynak kodunu hedefe göre yeniden yazar (payload ve bellek ofsetleri ayarlanarak)."
      },
      {
        title: "Multi-Agent OPSEC Swarm",
        desc: "ExploitAgent ve OPSECAgent döngüsel geri bildirim ile çalışır. Üretilen kod, açık IP adresleri veya gürültülü işlemler için statik olarak analiz edilir. Riskli kodlar otonom olarak yeniden refactor edilir."
      },
      {
        title: "Kendi Kendini Onaran Docker Sandbox",
        desc: "İstismar kodları izole bir container'da derlenir. Hata olursa (örn. eksik kütüphane), hata çıktısı LLM'e geri gönderilir. Çalışan bir dosya üretilene kadar otonom yamalama döngüsü devam eder."
      },
      {
        title: "Polimorfik Evasion Motoru (AV/EDR Atlatma)",
        desc: "AST Yeniden Yapılandırma, Değişken Gizleme, String Obfuscation ve Windows hedefleri için API Hashing ile Dolaylı Sistem Çağrıları (Indirect Syscalls) kullanarak modern AV/EDR'ları atlatır."
      },
      {
        title: "Saldırı Yolu Korelatörü",
        desc: "Nmap verileri ile Active Directory BloodHound grafiklerini birleştirir. İlk erişimden Domain Admin'e kadar uzanan karmaşık çok aşamalı saldırı yollarını otonom olarak hesaplar."
      },
      {
        title: "Durum Makinesi (State Machine) Pivoting",
        desc: "Ele geçirilen varlıkları izler ve NetworkX tabanlı durum makinesi sayesinde bir sonraki optimal stratejik hedefi (Yanal Hareket veya Yetki Yükseltme) hesaplayıp önerir."
      }
    ]
  },
  usage: {
    title: "Komuta ve Kontrol",
    subtitle: "OffSploit, interaktif CLI veya Flask ve Socket.IO tabanlı gerçek zamanlı Web Arayüzü üzerinden kullanılabilir.",
    dashboard: {
      url: "http://localhost:5000",
      targets: "Hedefler",
      vulns: "Zafiyetler",
      compiled: "Derlenen Exploitler",
      log1: "[SYSTEM] Dashboard başarıyla başlatıldı.",
      log2: "[NMAP] scan.xml dosyasından hedefler ayrıştırıldı.",
      log3: "[RAG] MS17-010 için Exploit-DB taranıyor...",
      log4: "[LLM] Python istismar kodu hedefe uyarlanıyor...",
      log5: "[OPSEC] Açık metin imzası tespit edilmedi."
    },
    cli: {
      interactive: "İnteraktif Mod",
      interactiveDesc: "Etkileşimli komut satırı arayüzünü başlatın.",
      standard: "Standart Yürütme",
      standardDesc: "Hedefe karşı tamamen otonom modu çalıştırın.",
      docker: "Docker ile Dağıtım",
      dockerDesc: "Host ağıyla çalıştırıp Exploit-DB'yi doğrudan bağlayın."
    }
  },
  install: {
    title: "Sorunsuz Kurulum",
    subtitle: "OffSploit'i kapalı ağ (air-gapped) ortamınıza dakikalar içinde kurun. Harici API'lere bağımlı olmadan güvenli ve izole sistemlerde çalışmak üzere tasarlanmıştır.",
    reqs: "Sistem Gereksinimleri",
    reqList: [
      { name: "Python 3.10+", desc: "(Çekirdek Motor İçin)", url: "https://www.python.org/downloads/" },
      { name: "Docker Desktop", desc: "(Kendi Kendini Onaran Sandbox İçin)", url: "https://www.docker.com/products/docker-desktop/" },
      { name: "Ollama", desc: "(Yerel ve Kapalı Ağ LLM Çıkarımı İçin)", url: "https://ollama.com/download" },
      { name: "Nmap", desc: "(Hedef Keşfi İçin)", url: "https://nmap.org/download.html" }
    ],
    steps: [
      { title: "1. Çatı Deposunu Klonlayın", code: "git clone https://github.com/egnake/OffSploit.git\ncd OffSploit" },
      { title: "2. Temel Bağımlılıkları Yükleyin", code: "pip install -r requirements.txt\npip install -e ." },
      { title: "3. Yerel Yapay Zeka Modellerini Başlatın", code: "ollama run qwen2.5-coder:14b\nollama run nomic-embed-text" },
      { title: "4. Exploit-DB Veritabanını Senkronize Edin", code: "git clone https://gitlab.com/exploit-database/exploitdb.git" }
    ]
  },
  roadmap: {
    title: "Gelecek Planları ve Yol Haritası",
    subtitle: "OffSploit sürekli geliştirilmektedir. Yaklaşan sürümler için planlanan temel özellikler:",
    items: [
      {
        title: "Gelişmiş Active Directory Analizi",
        desc: "Daha karmaşık saldırı yollarını teorik olarak tespit etmek için BloodHound ayrıştırma yeteneklerinin genişletilmesi ve AD güvenlik makaleleriyle RAG entegrasyonu."
      },
      {
        title: "OffSploit LLM Fine-Tuning",
        desc: "Sadece ofansif güvenlik, exploit geliştirme ve OPSEC atlatma teknikleri üzerine özel olarak eğitilmiş offsploit-coder modelinin yayınlanması."
      },
      {
        title: "Çoklu Platform Desteği",
        desc: "Standart x86/x64 hedeflerinin yanı sıra otonom olarak MIPS, ARM gibi mimariler için cross-compile exploit üretebilmek adına Docker derleme mekanizmasının genişletilmesi."
      }
    ]
  },
  footer: {
    desc: "Otonom Exploit Uyarlama & C2 Framework'ü",
    star: "GitHub'da Yıldız Ver",
    disclaimerTitle: "Yasal Uyarı ve Sorumluluk Reddi",
    disclaimerText: "OffSploit kesinlikle ve sadece yetkili sızma testleri, Red Team operasyonları ve eğitim amaçlı geliştirilmiştir. Bu aracın açık ve önceden alınmış bir izin olmaksızın sistemlere karşı kullanılması yasa dışıdır. geliştirici (egnake) hiçbir sorumluluk kabul etmez.",
    rights: "OffSploit Projesi. Tüm hakları saklıdır.",
    feedback: "Geri bildirimleriniz benim için önemli!"
  },
  flow: {
    title: "Otonom Boru Hattı (Pipeline)",
    subtitle: "İlk keşif aşamasından, izole sandbox içindeki başarılı sömürüye kadar olan veri akışını inceleyin.",
    nodes: ["Ağ Keşfi (Nmap)", "RAG Motoru (ChromaDB)", "Yerel LLM Refactoring", "OPSEC Doğrulaması", "Sandbox Derlemesi", "Hedef Yürütme"]
  },
  faq: {
    title: "Sıkça Sorulan Sorular",
    subtitle: "OffSploit mimarisi, yetenekleri ve güvenliği hakkında kapsamlı bilgiler.",
    items: [
      { q: "OffSploit internet bağlantısı gerektirir mi?", a: "Hayır. OffSploit, yüksek güvenlikli ve kapalı (air-gapped) ağlar için özel olarak tasarlanmıştır. Ollama üzerinden yerel LLM'leri ve yerel ChromaDB vektör veritabanını kullanır, böylece hassas operasyonel verileriniz ve exploit kodlarınız asla iç ağınızın dışına çıkmaz." },
      { q: "Hangi Yapay Zeka Modelleri (LLM'ler) destekleniyor?", a: "Mimari modüler ve son derece esnektir. Kapalı ağlarda maksimum OPSEC için yerel Ollama üzerinden 'qwen2.5-coder' modelini öneriyoruz. Ancak, yapılandırmaya bir API anahtarı ekleyerek Google Gemini, OpenAI (GPT-4) veya Anthropic Claude modellerini de anında entegre edebilirsiniz." },
      { q: "Kendi Kendini Onaran Sandbox (Self-Healing Sandbox) nasıl çalışır?", a: "Karmaşık exploit'ler (örneğin MS17-010 veya çekirdek açıkları) uyarlanırken derleme hataları yaygındır. OffSploit'in Self-Healing Docker Sandbox'u bu derleme hatalarını (stderr) yakalar ve çağrı yığınını güvenli bir şekilde LLM'e geri besler. Yapay zeka, kodu otonom olarak yamalar ve çalışan bir dosya üretilene kadar rekürsif olarak yeniden derleme dener." },
      { q: "Sistem tamamen otonom mu çalışıyor?", a: "OffSploit hem Tam Otonom Modu hem de İnteraktif Modu destekler. İnteraktif Modda sistem bir Red Team co-pilot'u gibi davranır, saldırı planını detaylandırır ve hedef üzerinde herhangi bir kod derlemeden veya komut çalıştırmadan önce operatörden açık onay ister." },
      { q: "Modern AV/EDR çözümlerini atlatabilir mi?", a: "Evet. OffSploit, Polimorfik Evasion Motoru içerir. Derlemeden önce exploit kodunu bir AST yeniden yapılandırma aşamasından geçirir, değişkenleri gizler, string'leri şifreler (obfuscation) ve statik imza izini en aza indirmek için Dolaylı Sistem Çağrıları (Indirect Syscalls) ile API Hashing uygular (özellikle Windows hedefleri için)." },
      { q: "Zero-Day (Sıfırıncı Gün) zafiyetleriyle nasıl başa çıkıyor?", a: "OffSploit öncelikli olarak RAG üzerinden yerel Exploit-DB klonuna güvense de, sisteme Proof-of-Concept (PoC) kodları veya güvenlik makaleleri besleyebilirsiniz. LLM, bu teorik konseptleri işleyecek ve sağlanan metodolojiye dayalı olarak silahlandırılmış (weaponized) bir exploit üretmeye çalışacaktır." },
      { q: "Hangi İşletim Sistemleri destekleniyor?", a: "OffSploit Çerçevesi Linux ve macOS üzerinde çalışır (Docker ve Python desteklenen ortamlar). Veritabanından çekilen exploitlere bağlı olarak Windows, Linux ve çeşitli web uygulamaları dahil olmak üzere çok çeşitli hedef sistemler için exploit üretebilir ve uyarlayabilir." }
    ]
  },
  stats: {
    title: "Topluluk Destekli",
    subtitle: "Sürekli büyüyen ofansif güvenlik araştırmacıları topluluğumuza katılın.",
    stars: "GitHub Yıldızları",
    forks: "Fork Sayısı",
    issues: "Açık İssue'lar"
  }
};
