Documentație Proiect Cloud

I.	Introducere. Noțiuni teoretice despre RESTful API 

Un API RESTful este o interfață de program de aplicație (API) care folosește solicitări HTTP pentru următoarele operații cu diferite date: GET, PUT, POST și DELETE.

Un API pentru un site web este codul care permite două programe software să comunice între ele. API precizează modul corect pentru un dezvoltator de a scrie un program care solicită servicii de la un sistem de operare sau o altă aplicație.

Un API RESTful - denumit, de asemenea, un serviciu web RESTful sau API REST - se bazează pe transferul reprezentativ de stat (REST), un stil arhitectural și o abordare a comunicațiilor utilizate deseori în dezvoltarea serviciilor web.

Tehnologia REST este de regulă preferată în favoarea tehnologiei SOAP (Simple Object Access Protocol), deoarece REST folosește mai puțin lățime de bandă, ceea ce o face mai potrivită pentru utilizarea eficientă a internetului.

REST-ul folosit de browsere poate fi gândit ca limbajul internetului. Odată cu utilizarea cloud în creștere, API-urile sunt utilizate de utilizatorii cloud pentru a expune și organiza accesul la servicii web. REST este o alegere logică pentru construirea API-urilor care permit utilizatorilor să se conecteze, să gestioneze și să interacționeze cu serviciile cloud într-un mediu distribuit. API-urile RESTful sunt utilizate de site-uri precum Amazon, Google, LinkedIn și Twitter.

II.	Descriere problemă. 

Pentru implementarea cerințelor proiectului am decis să implementez o pagină web în care să implementez API-uri disponibile prin intermediul Google Developers. Așadar, am implementat opțiunea de conectare prin intermediul contului de Gmail, folosind un API oferit de cei de la Google. De asemenea, pentru aceasta opțiune, am creat separat și un buton de „Sign Out” pentru a permite utilizatorilor sa se deconecteze de la contul curent și să se poata loga ulterior cu altul, sau doar pentru a rămâne deconectați din contul de Gmail.
Ulterior, folosind un an alt API oferit de cei de la Google, pentru Maps, am implementat un Search Box în care utilizatorul introduce o locație, fie o țară, fie un oraș, fie o adresă exactă, prin intermediul căreia programul va furniza pe aceeași pagina web latitudinea și longitudinea pentru locația oferită. 

În final, folosind de asemenea un API pentru Maps de la Google, am implementat în pagina web harta Google Maps, implementând, de asemenea un SearchBox pentru a găsi locația dorită, magazinul dorit, etc. Locația default a hărții a fost setată ca fiind orașul București, fiind setate coordonatele acestuia în momentul în care am inițializat harta în cod.
Din nefericire, pagina web prezintă o mică problemă. În momentul în care pagina se încarcă complet, SearchBox-ul pentru latitudine și longitudine nu funcționează corect, restul funcționalităților paginii mergând ok. Dacă încarc pagina web fără ultima parte(implementarea hărții), funcționează corect și partea amintită anterior de calcul pentru cele două coordonate. 

III.	Descriere API-uri folosite.

Un prim API folosit de la Google a fost cel pentru a implementa butonul de Sign-In în pagina web. Conectarea prin intermediul Google gestionează fluxul OAuth 2.0 și ciclul de viață al tokenilor, simplificând integrarea cu API-urile Google. Un utilizator are întotdeauna opțiunea de a revoca accesul la o aplicație în orice moment. Pentru a putea folosi acest API, a fost nevoie să îmi configurez un proiect pe Google Developers, de unde am folosit Client ID-ul generat de către proiect, pentru a avea acces la script-urile integrate în program. 

Mai departe, pentru integrarea celor 2 părți: de calculare a longitudinii și latitudinii, precum și implementarea hărții pe pagina web, am avut nevoie de un API pentru Maps, din librăria Places, pentru a avea apoi acces la locurile de pe harta, pentru a putea implementa opțiunile de SearchBox, precum și pentru a configura harta și naviga prin aceasta. Pentru a avea acces la aceste lucruri, a fost nevoie, de asemena de un Client ID, precum și o cheie generată. Pe larg, conform documentației de pe site, prin intermediul acestui API, se va permite să căutați informații despre loc folosind o varietate de categorii, inclusiv unități, puncte de interes proeminente și locații geografice. Se pot căuta locuri fie prin apropiere, fie printr-un șir de text. O căutare de loc returnează o listă de locuri împreună cu informații sumare despre fiecare loc.

IV.	Flux de date.

1.	Un exemplu de request/response din aplicație ar fi momentul în care accesez adresa: http://18.191.231.75.xip.io:8080/proiect și se primește un răspuns pozitiv de genul {"proiect":"cloud"}.
De asemenea, un alt exemplu poate fi accesarea http://18.191.231.75.xip.io:8080/, răspunsul fiind accesarea paginii web.
2.	Dintre metodele HTTP am folosit get. Metoda get folosită are un endpoint /proiect care dacă va fi găsit va afișa {"proiect":"cloud"}. 
            
V.          Capturi de ecran.

![GitHub Logo](map2.JPG)
Fig 5. Captură de ecran cu opțiunea de View din Google Maps implementată pe pagina web. În captura de ecran fiind Parcul Cișmigiu.


VI.	Referințe.

https://developers.google.com/places/web-service/search

https://searchapparchitecture.techtarget.com/definition/RESTful-API 

https://developers.google.com/identity/sign-in/web/sign-in 








