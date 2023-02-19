import React from "react";
import { Collapse } from "antd";
import Link from "antd/es/typography/Link";
import Contact from "./contact";
const { Panel } = Collapse;
const Yardim = () => {
  return (
 <>
    <div className="flex flex-col ">
      <h1 className="font-normal text-dark text-[2rem] text-center p-5">
        YARDIM AL
      </h1>
      <span className="block h1 border-b border-gray-400 w-full max-w-[1400px] mx-auto my-3">
        <h1 className="font-normal text-dark text-[2rem]  p-5">
          HIZLI YARDIM{" "}
        </h1>

        <p className="uppercase text-dark text-sm p-5">
          Sık sorulan soruların yanıtlarına yalnızca bir tıkla ulaşabilirsin.
        </p>
      </span>
      <div className="w-full max-w-[1400px] mx-auto my-3">
        <Collapse>
          <Panel header="KARGO VE TESLİMAT" key="1">
            <Collapse defaultActiveKey="1">
              <Panel
                header="Nike Si̇pari̇şleri̇nde Ücretsi̇z Kargodan Nasil Yararlanabi̇li̇ri̇m?"
                key="1"
              >
                <p>
                  Herhangi bir promosyon kodu gerekmeksizin kargo
                  ücretleri/vergiler eklenmeden önce, indirimler uygulandıktan
                  sonra minimum sipariş toplamı için standart kargo ücretsizdir.
                </p>
              </Panel>
            </Collapse>
            <Collapse defaultActiveKey="2">
              <Panel header="Nike'in Tesli̇mat Seçenekleri̇ Nelerdi̇r?" key="1">
                <ul>
                  <li>
                    Ödeme aşamasında tahmini bir teslimat tarihi veririz. Bu
                    tarihi sipariş onay e-postana da ekleriz.
                  </li>
                  <li>2.200 ₺ ve üzeri siparişlerde ücretsiz</li>
                  <li>2.200 ₺ altındaki siparişlerde 59 ₺</li>{" "}
                  <li>3-11 iş günü içinde ulaşır</li>
                </ul>
                <Collapse defaultActiveKey="4">
                  <Panel
                    header="
Siparişimin gümrükten geçmesi gerekiyor mu?"
                    key="1"
                  >
                    <p>
                      Siparişin uluslararası olarak gönderildiği için gümrükten
                      geçmesi gerekir. Merak etme, bu konuyla biz ilgileneceğiz.
                      Ödeme sırasında bilgilerini onaylaman yeterli. Ödeme
                      sırasında sağlanan teslimat tarihi, gümrük çıkış
                      zamanlarını dikkate alır.
                    </p>
                  </Panel>
                  <Panel
                    header="
                    Peki ya gümrük vergileri ve diğer vergiler?"
                    key="2"
                  >
                    <p>
                      Senin için bu konuyla da ilgileniyoruz. Ödeme sırasındaki
                      sipariş toplamına tüm geçerli vergiler ve gümrük vergileri
                      dahildir.
                    </p>
                  </Panel>
                  <Panel
                    header="
                    Hızlı kargo seçeneği bulunuyor mu?"
                    key="3"
                  >
                    <p>
                      Siparişini mümkün olan en hızlı şekilde göndeririz.
                      Böylece sen de dışarı çıkıp yeni ayakkabılarının ve
                      ekipmanlarının keyfini çıkarabilirsin. Şu anda hızlı kargo
                      hizmeti sunamıyoruz.
                    </p>
                  </Panel>
                </Collapse>
              </Panel>
            </Collapse>
            <Collapse defaultActiveKey="3">
              <Panel
                header="Nike Si̇pari̇şi̇m Uluslararasi Gönderi̇me Uygun Mu?"
                key="1"
              >
                <p>
                  Siparişinin verildiği ülkenin veya bölgenin dışındaki
                  adreslere uluslararası gönderim yapmıyoruz. Fakat Nike, dünya
                  genelinde çeşitli konumlarda alışveriş yapma imkanı sunar.
                  Ayrıca posta kutularına, Nike mağazalarına, aracı
                  göndericilere ve kargo yönlendirme hizmetlerine de kargo
                  gönderimi yapılmaz.
                </p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="İADELER" key="2">
            <Collapse defaultActiveKey="3">
              <Panel header="NIKE SİPARİŞİMİ NASIL İADE EDERİM?" key="1">
                <p>
                  Ürün iadelerini kolaylaştırdık. Nike siparişini hangi nedenle
                  olursa olsun 30 gün içinde kolayca iade edebileceğini bilmenin
                  verdiği güvenle yeni ayakkabılarını veya stilini deneme
                  koşusuna çıkarmanı istiyoruz.* Siparişini geri göndermek için
                  aşağıdaki adımları izle. İadelerin her zaman ücretsiz olduğunu
                  da unutma.
                </p>
                <ol>
                  <li>
                    1. Aşağıdaki düğmeye tıkla. Siparişini seçip "İadeyi Başlat"
                    düğmesine tıkla.
                  </li>
                  <li>
                    2. İade bilgilerini gir. Böylece iade etiketini e-postayla
                    gönderebiliriz.
                  </li>
                  <li>
                    3. İade edeceğin ürünü sağlam bir şekilde paketle, sana
                    iletilen formları ekle ve iade etiketini yapıştır.
                  </li>
                  <li>4. İadeni sana en yakın PTT ofisine götür.</li>
                  <Link className="px-7 py-2 block w-56 text-center text-white bg-dark rounded-3xl m-4 ">
                    IADE ETİKETİNİ AL
                  </Link>
                </ol>
                <Collapse defaultActiveKey="5">
                  <Panel header="Nike siparişimi değiştirebilir miyim?" key="1">
                    <p>
                      Siparişini değiştirmenin en iyi yolu istediğin ürün için
                      yeni bir sipariş vermek ve elindeki ürünü iade etmektir.
                    </p>
                  </Panel>
                  <Panel header="Ödeme iademi ne zaman alacağım?" key="2">
                    <p>
                      Ürün iadeni alıp işleme koyduktan sonra, kullanmış olduğun
                      ödeme yöntemiyle ödeme iadesi yaparız. Ayrıntılı bilgi
                      almak için ödeme iadesi bilgilerimizi incele.
                    </p>
                  </Panel>
                  <Panel
                    header="Nike By You ayakkabılarımı iade edebilir miyim?"
                    key="3"
                  >
                    <p>
                      Evet, Nike By You ayakkabılar iade politikamıza dahildir.
                      Tek yapman gereken, yukarıdan iade işlemini başlatmaktır.
                    </p>
                  </Panel>
                  <Panel
                    header="Teslimatının üzerinden 30 günden fazla zaman geçmiş ürünleri iade edebilir miyim?"
                    key="4"
                  >
                    <p>Lütfen iade politikamızı incele.</p>
                  </Panel>
                  <Panel
                    header="İade edeceğim birden fazla kutu varsa ne yapmalıyım?"
                    key="5"
                  >
                    <p>
                      Gerekiyorsa iadeni birkaç paket halinde hazırlayabilirsin
                      fakat bu durumda her kutu için ayrı bir iade oluşturman
                      gerekir. Böylece iadeni daha hızlı işleme koyabiliriz.
                      *Bazı istisnalar olabilir. Daha fazla bilgi edinmek için
                      iade politikamızı incele.
                    </p>
                  </Panel>
                </Collapse>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="NIKE ÜYELİĞİ" key="3">
            <Collapse defaultActiveKey="1">
              <Panel header="NIKE ÜYELİĞİ NEDİR?" key="1">
                <p>
                  Nike Üyeliği ilham verici içeriklere, topluluğa ve özel Nike
                  ürünlerine erişim sunar. Nike ile ilgili her şeye erişmenin en
                  iyi yoludur. Ayrıca ücretsiz, hızlı ve katılımı kolaydır.
                  İster internetten ister Nike uygulamalarından birini indirip
                  üye olabilirsin. Üye olur olmaz avantajlarını görmeye
                  başlarsın:
                  <ol>
                    <li>
                      Üye Mağazası. Nike Üyelerine özel Nike ayakkabıları ve
                      stillerinden oluşan benzersiz bir koleksiyon.
                    </li>
                    <li>
                      Fırsatlar. Üyelerimize teşekkür etmek ve doğum günü gibi
                      önemli anlarını kutlamak için özel fırsatlar ve
                      promosyonlar.
                    </li>
                    <li>
                      Erişim. Nike Üyesi olduğun zaman şunlara erişebilirsin:
                    </li>
                    <li>
                      NIKE APP İncele. Nike'ın sunduğu, sana özel tüm ürünler.
                      Nike App spor dünyasından güncel haberleri, en yeni
                      ürünleri ve hikayeleri parmaklarının ucuna getirir.
                    </li>
                    <li>
                      NIKE RUN CLUB UYGULAMASI Koş. Daha iyi ve daha sık koşmak
                      için ihtiyacın olan motivasyonu bul. Rehberli Koşular.
                      Nike koşu koçları ve sporcularının sesleri ve
                      rehberliğiyle zihnini ve vücudunu sonraki koşuna odakla.
                    </li>
                  </ol>
                </p>
              </Panel>
              <Panel header="NASIL NIKE ÜYESİ OLURUM?" key="2">
                <p>
                  Niye Üyesi olmak, Nike ile ilgili her şeye erişmenin en iyi
                  yoludur. Üstelik katılım ücretsiz, hızlı ve kolaydır. İster
                  internetten ister Nike uygulamalarından birini indirip üye
                  olabilirsin. Üye olur olmaz avantajlarını görmeye başlarsın.
                  Aramıza Üye olarak katılmak için aşağıdaki düğmeyi kullan ve
                  gerekli alanları doldur.
                </p>
                <Link className="px-7 py-2 block w-56 text-center text-white bg-dark rounded-3xl m-4 ">
                  BIZE KATIL
                </Link>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="SİPARİŞLER" key="4">
            <p>
              Nike siparişinle ilgili en doğru ve yeni bilgiyi her zaman
              nike.com/orders adresinde bulabilirsin. Siparişinin durumunu
              kontrol etmek için sipariş numaranı ve e-posta adresini kullanman
              gerekir. Nike Üyeleri sipariş bilgilerine erişmek için oturum da
              açabilir.
            </p>
            <div className="flex gap-5">
              {" "}
              <Link className="px-7 py-2 block w-72 text-center text-white bg-dark rounded-3xl m-4 ">
                SİPARİŞ DURUMUNU KONTROL ET
              </Link>{" "}
              <Link className="px-7 py-2 block w-56 text-center text-white bg-dark rounded-3xl m-4 ">
                ÜYE GİRİŞİ
              </Link>
            </div>
            <p>
              Siparişin kargoya verildikten sonra kargoyu nike.com/orders
              adresinden dilediğin zaman takip edebilirsin. Ayrıca sana
              gönderdiğimiz kargo onay e-postasında takip numaran ve kargo takip
              bağlantısı bulunur.
            </p>
            <Collapse defaultActiveKey="6">
              <Panel
                header="Sipariş durumu kontrolü ve sipariş takibini Nike App'te yapabilir miyim?"
                key="1"
              >
                <p>
                  Evet, Nike Üyeleri Nike App'i kullanabilir. Profil sekmesine
                  ve ardından "Siparişler"e dokun. Durumunu görüntülemek
                  istediğin siparişe dokun. Siparişin kargoya verildiyse "Kargo
                  Takibi" seçeneğine dokunarak paketlerini takip edebilirsin.
                </p>
              </Panel>
              <Panel
                header="Tahmini teslimat tarihimi nerede bulabilirim?"
                key="2"
              >
                <p>
                  Tahmini teslimat tarihini görmek için siparişinin durumuna göz
                  atabilir veya siparişini takip edebilirsin. Bu tarihin sadece
                  bir tahmin olduğunu lütfen unutma. Siparişin bu tarihten biraz
                  önce veya sonra teslim edilebilir.
                </p>
              </Panel>
              <Panel
                header="Sipariş onayı e-postası ne zaman gönderilir?"
                key="3"
              >
                <p>
                  Sipariş onayı e-postasını genellikle sipariş verildikten
                  sonraki 24 saat içinde göndeririz.
                </p>
              </Panel>
              <Panel header="Sipariş numaramı nerede bulabilirim?" key="4">
                <p>
                  Sipariş numaranı sana gönderdiğimiz sipariş durumu
                  e-postalarının tümünde bulabilirsin.
                </p>
              </Panel>
              <Panel
                header="Siparişimin teslimat adresini değiştirebilir miyim?"
                key="5"
              >
                <p>
                  Hayır. Ekibimiz siparişini mümkün olan en kısa sürede işleme
                  almak ve kargoya vermek için hızlı şekilde çalışır. Bu sebeple
                  siparişini ve teslimat adresini değiştiremeyiz. Siparişini
                  verdikten sonra 30 dakika içinde iptal edebilir ve doğru
                  adresi kullanarak yeni bir sipariş verebilirsin.
                </p>
              </Panel>

              <Panel header="Takip numaramı nerede bulabilirim?" key="6">
                <p>
                  Siparişin kargoya verildiğinde sana kargo takip numarasını
                  içeren bir e-posta göndeririz. (Not: Bu e-posta, orijinal
                  sipariş onayı e-postasından ayrıdır.) Takip numarana
                  nike.com/orders adresinden de ulaşabilirsin. Burada "Görüntüle
                  veya Yönet" ve "Kargo Takibi" seçeneklerine tıkla ya da dokun
                </p>
              </Panel>
              <Panel header="Takip bilgilerim neden güncellenmedi?" key="7">
                <p>
                  Takip bilgilerin hemen girilmezse endişelenme. Bazen kargo
                  şirketinin takip bilgilerini etkinleştirmesi 48 saate kadar
                  sürebilir. Lütfen daha sonra tekrar kontrol et. Takip
                  bilgilerin kısa süre içinde güncellenir.
                </p>
              </Panel>
              <Panel header="Siparişim neden gecikti?" key="8">
                <p>
                  Siparişini zamanında teslim etmek için elimizden geleni yapsak
                  da bazen bu süreç biraz uzayabilir. Artan güvenlik
                  uygulamaları ve yüksek sipariş hacmi bazen bizi
                  yavaşlatabilir. Ayrıca siparişin kargoya verildikten sonra
                  paketin zorlu hava koşulları, eksik teslimat adresi ve
                  bölgesel hizmet gecikmeleri gibi nedenlerle gecikebilir.
                </p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="ÜRÜN BİLGİLERİ" key="5">
            <Collapse defaultActiveKey="1">
              <Panel
                header="Nike'ın en yeni spor ayakkabılarını nasıl edinebilirim?"
                key="1"
              >
                <p>
                  SNKRS, en yeni Nike stillerini arayanlar için tek adrestir.
                  Baştan tasarlanmış ikonik stillerden özel iş birliği
                  ürünlerine kadar en çok talep gören ayakkabılarımızı SNKRS'ta
                  satışa sunuyoruz. Çoğu lansmanımız sınırlı sayıda gerçekleşir
                  ve hemen sonlanır. Ancak yine de şansını artırabilirsin.
                </p>
                <ul>
                  <p>SEZON ÖNCESİ:</p>
                  <ul>
                    <li>
                      OYUNA KATIL SNKRS'a özel erişime sahip olmak için bize
                      katıl.
                    </li>
                    <li>
                      Daha hızlı ödeme yapmak için teslimat adresini profil
                      ayarlarına kaydet.
                    </li>
                    <li>Yaklaşan lansmanlardan haberdar ol.</li>
                  </ul>{" "}
                  <p>MAÇ ÖNCESİ:</p>
                  <ul>
                    <li>
                      SON HAZIRLIKLARINI YAP Lansman zamanından önce Nike Üye
                      profilinde oturum açtığından emin ol.
                    </li>
                    <li>
                      Numaranı doğrulamak için mobil cihazını hazır bulundur.
                    </li>
                    <li>
                      {" "}
                      Ödeme bilgilerini hızla girmek için kredi kartın da hazır
                      olsun.
                    </li>
                    <li>
                      Fırsatı kaçırmamak için lansman zamanını not etmeyi
                      unutma.
                    </li>
                  </ul>
                  <p> OYUN ZAMANI:</p>
                  <ul>
                    <li>
                      AYAKKABINI AL İstediğin ayakkabıya tıkla ve numaranı seç.
                    </li>
                    <li>
                      Sana kısa mesajla gönderdiğimiz kodu girerek cep telefonu
                      numaranı doğrula.
                    </li>
                    <li>Teslimat ve ödeme bilgilerini girip siparişini ver.</li>
                    <li>
                      Bir çift almaya hak kazanıp kazanmadığını öğrenene kadar
                      tarayıcı pencereni açık tut.
                    </li>
                  </ul>
                </ul>
              </Panel>
              <Panel
                header="Doğru bedeni/numarayı ve uyumu nasıl bulurum?"
                key="2"
              >
                <p>
                  Performans söz konusu olduğunda uyum büyük önem taşır. Bu
                  yüzden, en iyi performansını sergileyebilmen amacıyla ayakkabı
                  ve ekipmanlarda doğru numara/bedeni bulmana yardımcı olacak
                  araçlar sunuyoruz. Nike bedeninden/numarandan emin değil
                  misin? Beden/numara çizelgelerimiz sana en uygun
                  ayakkabılarımızı, giysilerimizi ve ekipmanlarımızı tespit
                  etmene yardımcı olabilir. Erkek, kadın, unisex, çocuk ve
                  aksesuarlar dahil aşağıdaki beden/numara çizelgelerimize göz
                  atabilirsin. Ayrıca, tüm ürün sayfalarımızda uygun
                  beden/numara çizelgesi bağlantılarını bulabilirsin.
                </p>
                <Link
                  to="/nike/size"
                  className="px-7 py-2 block w-72 text-center text-white bg-dark rounded-3xl m-4 "
                >
                  NİKE BEDEN/NUMARA CİZELGELERİ
                </Link>
              </Panel>
              <Panel
                header="Nike By You'nin kişiselleştirme politikası nedir?"
                key="3"
              >
                <p>
                  Çoğu Nike By You sneaker'a Kişisel iD ekleyebilirsin. Kişisel
                  iD, ayakkabılarını sana özel kılan kişisel bir mesajdır.
                  Sneaker'larını kişiselleştirirken seçtiğin Kişisel iD
                  reddedilirse tasarımını bitirmeden önce yeni bir Kişisel iD
                  girmen istenir. Seçtiğin Kişisel iD, kurallara uymadıysan veya
                  içeriğin uygunsuz olduğunu düşünüyorsak reddedilir.
                </p>
                <p>KİŞİSEL iD KURALLARI</p>
                <p>
                  Uzunluk ve karakter kuralları, kişiselleştirme sırasında
                  ekranda görünür (örneğin, 3 büyük harf ve/veya rakam). Uzunluk
                  ve karakter seçenekleri sneaker stiline göre değişiklik
                  gösterir ve tüm diller veya özel karakterler desteklenmez.
                  Seçtiğin Kişisel iD, aşağıdakilerden herhangi birini
                  içeriyorsa reddedilir:
                </p>
                <ul>
                  <li>
                    Olası ticari marka veya diğer fikri mülkiyet hakları
                    ihlalleri
                  </li>
                  <li>Küfür</li>
                  <li>Uygunsuz argo</li>
                  <li>Aşağılayıcı veya ayrımcı içerik</li>
                  <li>Şiddeti teşvik eden içerik</li>
                </ul>
                <p>
                  Gönderilen herhangi bir Kişisel iD'yi reddetme hakkımız
                  saklıdır.
                </p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="KURUMSAL" key="6">
            <Collapse defaultActiveKey="1">
              <Panel
                header="Nike, Inc. hakkında daha fazla bilgiye nereden ulaşabilirim?"
                key="10"
              >
                <p>
                  Nike olarak, sonu gelmeyen yeniliklerle daha kapsayıcı ve
                  sürdürülebilir bir gelecek inşa etmek için çabalıyoruz.
                  Potansiyellerini açığa çıkarmaları için sporuculara ilham
                  olmayı amaçlıyoruz. Nike işletmesi hakkında daha fazla bilgi
                  edinmek için aşağıdaki kaynakları inceleyin.
                </p>
                <Collapse defaultActiveKey="1">
                
                    <Panel
                      header="En yeni Nike haberlerine nereden ulaşabilirim?"
                      key="10"
                    >
                      <p>
                        En yeni ürünler, öne çıkan sporcular ve Nike hakkında
                        her şeyi <a href="news.nike.com">news.nike.com</a>{" "}
                        adresinden takip edebilirsin.
                      </p>
                    </Panel>
                    <Panel
                      header="Nike'ın sürdürülebilirliğe bağlılığı ne anlama gelir?"
                      key="11"
                    >
                      <p>
                        Sürdürülebilir yenilikler yoluyla dünyanın her
                        köşesindeki sporcular ve topluluklar için daha iyi bir
                        gelecek inşa etme amacımıza son derece bağlıyız.
                      </p>
                    </Panel>
                    <Panel
                      header="Nike'a fikirlerimi gönderebilir miyim?"
                      key="12"
                    >
                      <p>
                        Şu anda yalnızca onaylı bir kullanım patenti, faydalı
                        model veya onay bekleyen daimi kullanım patenti
                        başvurusu bulunan fikirleri değerlendiriyoruz. Aşağıdaki
                        kategorilerden birine uygunsa fikrini bize
                        gönderebilirsin.
                      </p>
                    </Panel>
               
                </Collapse>
              </Panel>
            </Collapse>
          </Panel>
        </Collapse>
      </div>
    </div>
    <Contact/>
 </>
  );
};

export default Yardim;
