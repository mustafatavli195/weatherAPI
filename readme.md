---

# Hava Durumu Uygulaması

## Genel Bakış

Temel web teknolojileri kullanılarak yapılan ve Open Weather API ile desteklenen hava durumu uygulamam, kullanıcıların bir şehir adı girmesine ve mevcut hava durumu bilgilerini (sıcaklık, nem, rüzgar hızı ve hissedilen sıcaklık) almasına olanak tanır.

## Özellikler

- **Şehir Bazlı Hava Durumu Arama:** Kullanıcılar bir şehir adı girerek mevcut hava durumu koşullarını alabilirler.
- **Dinamik Hava Durumu İkonları:** Uygulama, mevcut hava durumu koşullarına (açık, bulutlu, yağmurlu, sisli veya karlı) göre farklı ikonlar gösterir.
- **Duyarlı Tasarım:** Uygulama, farklı ekran boyutlarına uyum sağlar, bu sayede hem masaüstü hem de mobil cihazlarda kullanılabilir.

## Demo

![Example](assets/weatherApp.png)

## Kurulum

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/kullanici-adi/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. Ana dizinde bir `env.json` dosyası oluşturun ve OpenWeatherMap API anahtarınızı ekleyin:

   ```json
   {
     "API_KEY": "your_openweathermap_api_key"
   }
   ```

3. Uygulamayı görüntülemek için `index.html` dosyasını tarayıcınızda açın.

## Kullanım

1. Uygulamayı açın.
2. Şehir adını giriş kutusuna girin.
3. Hava durumu bilgilerini almak için arama düğmesine tıklayın veya Enter tuşuna basın.

## Kod Yapısı

### HTML

HTML dosyası (`index.html`), uygulamanın yapısını içerir, şehir adı için giriş alanını ve hava durumu bilgilerini görüntülemek için yer tutucuları içerir.

### CSS

CSS dosyası (`style.css`), uygulamanın stilini içerir ve duyarlı ve görsel olarak çekici bir düzen sağlar.

### JavaScript

JavaScript dosyası (`script.js`), OpenWeatherMap API'sinden hava durumu verilerini almak ve alınan verilere göre kullanıcı arayüzünü güncellemek için gerekli mantığı içerir.

### env.json

`env.json` dosyası, OpenWeatherMap API anahtarınızı içermelidir. Bu dosya, API anahtarını güvenli bir şekilde saklamak ve uygulama içinde erişmek için kullanılır.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen depoyu çatallayın ve bir özellik dalı kullanın. Çekme istekleri memnuniyetle karşılanır.

---

Bu README dosyasını GitHub projenize ekleyebilirsiniz. README dosyasını daha da özelleştirmek isterseniz, proje ile ilgili ek bilgiler, ekran görüntüleri veya diğer detayları ekleyebilirsiniz.
