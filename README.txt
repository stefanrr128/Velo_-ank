MOJ ŠANK — OFFLINE WEB APLIKACIJA
=================================

Sadržaj:
- index.html       glavni ekran aplikacije
- style.css        izgled prilagođen telefonu
- app.js           funkcije, računi i lokalna IndexedDB baza
- manifest.json    podešavanja za instalaciju na početni ekran
- sw.js            service worker za keširanje i offline rad

ŠTA APLIKACIJA RADI
- Početnih 14 mesta: WC1, WC2, WC3, Kanabe, V. izlog, Stajalica,
  M. Izlog, Mali šank, Točak, Šank, Moji, 101, 102, 103.
- Poseban otvoren račun za svako mesto.
- Cenovnik sa nazivom, kategorijom i cenom.
- Dodavanje pića i količina na račun.
- Potvrda naplate upisuje prodaju u istoriju i prazni račun.
- Dnevni izveštaj: promet, broj računa, komadi, prodaja po artiklu.
- Izvoz i uvoz rezervne kopije JSON.

VAŽNO: KAKO DA RADI OFFLINE
Service worker i instalacija PWA zahtevaju HTTPS hosting (osim localhost).
Ne otvaraj index.html direktno iz Downloads kao file:// adresu i ne očekuj
da će tada instalacija/offline keš pouzdano raditi.

NAJLAKŠI PUT JE BESPLATNI HTTPS HOSTING
1. Na računaru otvori github.com i napravi besplatan nalog, ako ga nemaš.
2. Kreiraj novi javni repository, npr. moj-sank.
3. Raspakuj ovaj ZIP na računaru.
4. U repository uploaduj sve fajlove iz ZIP-a (ne samo ZIP).
5. U Settings > Pages izaberi deploy from branch, granu main i folder /(root),
   pa sačuvaj. Sačekaj da GitHub Pages prikaže HTTPS link.
   Meniji se mogu razlikovati zavisno od trenutnog GitHub interfejsa.
6. Na Android telefonu otvori HTTPS link u Chrome-u i sačekaj da se stranica
   potpuno učita dok si na internetu.
7. U Chrome meniju (⋮) izaberi "Install app" ili "Add to Home screen".
   Naziv opcije može da se razlikuje. Otvori aplikaciju sa nove ikonice.
8. Dok si još online, proveri da se aplikacija učitala. Zatim uključi airplane
   mode, ponovo otvori ikonicu i proveri da radi bez interneta.

NAPOMENA O PODACIMA
- IndexedDB čuva podatke u tom pregledaču/profilu na tom uređaju.
- Ne briši site data / podatke sajta i ne koristi režim Incognito.
- Redovno otvaraj karticu Kopija > Izvezi rezervnu kopiju i čuvaj JSON fajl.
- Ako ukloniš aplikaciju, obrišeš podatke sajta ili izgubiš telefon, lokalni
  podaci mogu biti izgubljeni. Rezervna kopija je zato obavezna.
- Ako aplikaciju koristiš sa drugog uređaja ili drugog pregledača, baze nisu
  automatski zajedničke.
- Ako promeniš fajlove aplikacije kasnije, potrebno je da se nova verzija
  osveži dok si online; zatim je opet dostupna offline.

OGRANIČENJA / PROVERA PRE STVARNE UPOTREBE
- Ovo je početna verzija, nije fiskalna kasa i ne izdaje fiskalne račune.
- Nema korisničkih naloga, sinhronizacije između uređaja, zaliha, poreza,
  popusta ili načina plaćanja.
- Pre prve stvarne upotrebe testiraj nekoliko probnih računa i izvoz/uvoz.
- Zadržava istoriju prodatih računa, ali otvoreni računi ostaju otvoreni dok
  ih ne naplatiš ili ručno isprazniš.
