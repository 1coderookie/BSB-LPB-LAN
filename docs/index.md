## Handbuch zum BSB-LPB-LAN-Adapter   

Dieses Handbuch wurde geschrieben, um den Einstieg in die Benutzung des
BSB-LPB-LAN-Adapters (Platinenlayout v2, Arduino-Version) und der dazugehörigen BSB-LAN-Software 
zu vereinfachen und um als Nachschlagewerk zu dienen.  

***Es wird empfohlen, dieses Handbuch vor einer initialen
Verwendung des BSB-LPB-LAN-Adapters komplett zu lesen.***    
    
---  
  
Das Copyright des Handbuchs liegt bei dem Autor Ulf Dieckmann.
  
---  
    
### Hier geht es direkt zum [Inhaltsverzeichnis](inhaltsverzeichnis.md). ###  
    
### Zum Ausdrucken besser geeignet: [Die PDF-Version als Download](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Handbuch_BSB-LPB-LAN-Adapter.pdf). ###  
  
### Eine druckerfreundliche Übersicht aller URL-Befehle gibt es hier: [Cheatsheet URL-Befehle](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Cheatsheet%20URL-Befehle.pdf). ###  
### The cheatsheet of the URL-commands is also available as an [english version](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Cheatsheet%20URL-commands_EN.pdf). ### 

---  

***ACHTUNG:  
Es gibt KEINE GARANTIE oder Gewährleistung jeglicher Art, dass dieser Adapter dein Heizungssystem NICHT beschädigt!  
Jegliche Umsetzung der hier beschriebenen Schritte, jeder Nachbau des Adapters sowie jede Verwendung der beschriebenen Hard- und Software erfolgt auf eigene Verantwortung und eigenes Risiko!  
Keiner der Mitwirkenden oder Autoren kann für etwaige Schäden jeglicher Art haftbar gemacht werden!***   

---
  
### BSB-LPB-LAN - ein kurzer Überblick ###  

"BSB-LPB-LAN" ist ein gemeinschaftliches Hard- und Softwareprojekt, welches ursprünglich zum Ziel hatte, mittels PC/Laptop/Tablet/Smartphone Zugriff auf die Steuerungen bzw. Regler von verschiedenen Wärmeerzeugern (Öl- und Gasheizungen, Wärmepumpen, Solarthermie etc.) bestimmter Hersteller (initial hauptsächlich Brötje und Elco) zu erlangen.  
Im weiteren Verlauf sollte es dann möglich sein, Daten auszulesen, sie weiter zu verarbeiten (z.B. loggen und grafisch darstellen) oder gar Einfluss auf die Steuerung/Regelung nehmen zu können und das System in bestehende SmartHome-Systeme einzubinden.  
    
All dies ist mittlerweile umgesetzt worden:  
Mittels eines eigenbaufähigen Adapters, eines Arduino Mega 2560 und eines LAN-Shields kann nun ein entsprechender Wärmeerzeuger kostengünstig ins heimische Netzwerk eingebunden werden.  
Die interne Steuerung bzw. der Regler des Wärmeerzeugers muss dafür mit einem "Boiler System Bus" (BSB), einem "Local Process Bus" (LPB) oder einer "Punkt-zu-Punkt-Schnittstelle" (PPS) ausgestattet sein. Dies sind i.d.R. Systeme, bei denen ein SIEMENS-Regler zum Einsatz kommt (bzw. je nach Heizungshersteller meist eine gebrandete OEM-Version).

Mit Hilfe des Adapters und der BSB-LAN-Software können nun unkompliziert verschiedene Funktionen, Werte und Parameter beobachtet, geloggt und bei Bedarf web-basiert gesteuert und geändert werden.
Eine optionale Einbindung in bestehende SmartHome-Systeme wie bspw. FHEM, openHab, HomeMatic oder Loxone kann mittels HTTPMOD oder JSON erfolgen. 
Darüber hinaus ist der Einsatz des Adapters als Standalone-Logger ohne LAN- oder Internetanbindung bei Verwendung einer microSD-Karte ebenfalls möglich.  
Zusätzlich können Temperatur- und Feuchtigkeitssensoren angeschlossen und deren Daten ebenso geloggt und ausgewertet werden. Durch die Verwendung eines Arduino und die Möglichkeit, eigenen Code in die BSB-LAN-Software zu integrieren, bietet sich darüber hinaus ein weites Spektrum an Erweiterungsmöglichkeiten. 

Folgende Systeme in Kombination mit dem Adapter und der Software wurden bisher als lauffähig gemeldet:
- Atlantic Alféa Extensa + [RVS21.831F] (Wärmepumpe) {BSB}
- Austria Email LWPK 8 [RVS21.831] (Wärmepumpe) {BSB}
- Baxi Luna Platinum + [LMS15] (Gasbrenner) {BSB}
- Brötje BBK 22E [LMS14] (Gasbrenner) {BSB}
- Brötje BBK 22F [LMS14] (Gasbrenner) {BSB}  
- Brötje BBS Pro Evo 15C [LMU74] (Gasbrenner) {BSB}
- Brötje BSK 20 [LMS14] (Gasbrenner)  
- Brötje EcoCondens BBS 15E [LMS14] (Gasbrenner) {BSB}
- Brötje EcoCondens BBS 20E [LMS14] (Gasbrenner) {BSB}  
- Brötje EcoCondens BBS 28C [LMU7] (Gasbrenner) {BSB}  
- Brötje EcoCondens BBS EVO 20 G [LMS15] (Gasbrenner) {BSB}  
- Brötje EcoSolar Kompakt BMR 20/24 [LMS15] (Gasbrenner + Solar) {BSB}  
- Brötje EcoTherm Kompakt WMS 12 [LMS 15] (Gasbrenner) {BSB}
- Brötje EcoTherm Kompakt WMS 24 [LMS 15] (Gasbrenner) {BSB}
- Brötje EcoTherm Plus BBS2N.28 [LMU 64] (Gasbrenner) {mittels OCI420 via LPB!}
- Brötje EcoTherm Plus WGB2N.20 [LMU 64] (Gasbrenner) {mittels OCI420 via LPB!}
- Brötje ISR-SSR [RVS63.283] (Solar-System-Regler) {BSB}
- Brötje ISR-ZR1 [RVS46.530] (Zonen-Regler) {BSB}
- Brötje LogoBloc Unit L-UB 25C [RVS43.122] (Ölbrenner) {BSB}
- Brötje NovoCondens BOB 20 [RVS43.325] (Ölbrenner) {BSB}
- Brötje NovoCondens SOB 26 [RVA63.242] (Ölbrenner) {LPB}
- Brötje NovoCondens SOB 22C [RVS43.222] (Ölbrenner) {BSB}
- Brötje NovoCondens SOB 26C [RVS43.222] (Ölbrenner) + EWM [RVS75.390] {BSB}
- Brötje NovoCondens WOB 20D [RVS43.325] (Ölbrenner) {BSB}
- Brötje SensoTherm BLW 12 B [RVS21.825] (Wärmepumpe) {BSB}
- Brötje SensoTherm BLW 15 B [RVS21.825] (Wärmepumpe) {BSB}
- Brötje SensoTherm BSW 10E [RVS61.843] (Wärmepumpe) {BSB}  
- Brötje SensoTherm BSW-K [RVS61.843] (Wärmepumpe) {BSB}
- Brötje TrioCondens BGB 20E [LMS14] (Gasbrenner) {BSB}
- Brötje WBS 14D [LMU74] (Gasbrenner) {BSB}
- Brötje WBS 14F [LMS14] (Gasbrenner) {BSB}
- Brötje WBS 22E [LMS14] (Gasbrenner) {BSB}
- Brötje WGB 15E [LMS14] (Gasbrenner) {BSB}
- Brötje WGB 20C [LMU74] (Gasbrenner) {BSB}
- Brötje WGB-C 20/24H [LMS14] (Gasbrenner) {BSB}
- Brötje WGB EVO 20H [LMS15] (Gasbrenner) {BSB}
- Brötje WGB EVO 15I [LMS15] (Gasbrenner) {BSB}
- Brötje WGB Pro EVO 20C [LMU75] (Gasbrenner) {BSB}
- Brötje WGB S 17/20 E EcoTherm Plus [LMS14] (Gasbrenner) {BSB}
- Brötje WGB-U 15H [LMS14] (Gasbrenner) {BSB}
- CTC 380 IC [RVS43.143] (Ölbrenner) {BSB}
- Deville 9981 [RVA53.140] (Ölbrenner) {PPS}
- Elco Aerotop G07-14 [RVS61.843] (Wärmepumpe) {BSB}
- Elco Aerotop T07-16 [RVS61.843] (Wärmepumpe) {BSB}
- Elco Aerotop T10C [RVS61.843] (Wärmepumpe) {BSB}
- Elco Aquatop 8es [RVS51.843] (entspricht CTA Optihead OH1-8es) (Wärmepumpe) {BSB}
- Elco Straton 21 [RVS63.283] (Ölbrenner) {BSB}
- Elco Thision S Plus 13 [LMS14] (Gasbrenner) {BSB}
- Elco Thision S 13.1 [LMU7] (Gasbrenner) {BSB}
- Elco Thision S 17.1 [LMU74] & [RVS63.283] (Gasbrenner) {BSB}
- Elco Thision S 25.1 [RSV63.283] (Gasbrenner) + MM [AVS75.390] {BSB}
- Fröling Rendagas Plus [RVA63.244] (Gasbrenner) {LPB}
- Fujitsu Waterstage Comfort 10 [RVS21.827] (Wärmepumpe) {BSB}
- Fujitsu Waterstage WSHA 050 DA [RVS41.813] (Wärmepumpe) {BSB}
- Fujitsu Waterstage WSYK 160 DC 9 [RVS21.827] (Wärmepumpe) {BSB}
- Fujitsu Waterstage WSYP 100 DG 6 [RVS21.831] (Wärmepumpe) {BSB}
- MHG Procon E 25 HS [LMS14] (Gasbrenner) {BSB}
- Sieger TG11 [RVP54.100] (Ölbrenner) {PPS}
- Weishaupt WTU-25 G mit WRS-CPU B2/E [RVS23.220] (Ölbrenner) {LPB}

### Die Software ist [hier](https://github.com/fredlcore/bsb_lan) zu finden. ###  

---  

### Autoren: ###  

-   Software, Schaltplan v1, Dokumentationen EN, Ideenfindung, Support  
    bis v0.16:  
    *Gero Schumacher (gero.schumacher \[ät\] gmail.com)*

-   Software, Platinenlayout v1 & v2, Dokumentationen EN, Ideenfindung, Support  
    ab v0.17:  
    *Frederik Holst (bsb \[ät\] code-it.de)*

-   Debugging, Handbuch, Übersetzung EN-DE, Ideenfindung, Support  
    ab v0.17:  
    *Ulf Dieckmann (adapter \[ät\] quantentunnel.de)*

*Basierend auf dem Code und der Mitarbeit von vielen anderen
Entwicklern! Vielen Dank!*  
      
    
---
    
[Weiter zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  


