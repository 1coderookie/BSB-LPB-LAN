**IM AUFBAU**  

## Onlineversion des Handbuchs für den BSB-LPB-LAN-Adapter v2 (Arduino-Version) und die BSB-LAN-Software ##  

Dieses Handbuch wurde geschrieben, um den Einstieg in die Benutzung des
BSB-LPB-LAN-Adapters und der dazugehörigen Software zu vereinfachen und
um als Nachschlagewerk zu dienen.  

***Es wird empfohlen, dieses Handbuch vor einer initialen
Verwendung des BSB-LPB-LAN-Adapters komplett zu lesen.***  

### Hier geht es direkt zum [Inhaltsverzeichnis](inhaltsverzeichnis.md) ###  
    
### Zum Ausdrucken besser geeignet: [Die PDF-Version als Download](https://github.com/1coderookie/BSB-LPB-LAN/blob/master/Handbuch_BSB-LPB-LAN-Adapter.pdf). ###
---  

***ACHTUNG:  
Es gibt KEINE GARANTIE oder Gewährleistung jeglicher Art, dass dieser Adapter dein Heizungssystem NICHT beschädigt!  
Jegliche Umsetzung der hier beschriebenen Schritte, jeder Nachbau des Adapters sowie jede Verwendung der beschriebenen Hard- und Software erfolgt auf eigene Verantwortung und eigenes Risiko!  
Keiner der Mitwirkenden oder Autoren kann für etwaige Schäden jeglicher Art haftbar gemacht werden!***   

---
  
### BSB-LPB-LAN - ein kurzer Überblick ###  

Mittels eines eigenbaufähigen Adapters, eines Arduino Mega 2560 und eines LAN-Shields kann ein entsprechender Wärmeerzeuger mit einem Boiler-System-Bus (BSB), einem Local-Process-Bus (LPB) oder einer Punkt-zu-Punkt-Schnittstelle (PPS) ins heimische Netzwerk eingebunden werden. Dies sind i.d.R. Systeme, bei denen ein (gebrandeter) Siemens-Regler zum Einsatz kommt.

Mit Hilfe des Adapters und der BSB-LAN-Software können verschiedene Funktionen, Werte und Parameter beobachtet, geloggt und bei Bedarf web-basiert gesteuert und geändert werden.
Eine Einbindung in bestehende Smart-Home-Systeme wie bspw. FHEM, openHab oder HomeMatic kann mittels HTTPMOD oder JSON erfolgen. 
Darüber hinaus ist der Einsatz des Adapters als Standalone-Logger ohne LAN- oder Internetanbindung bei Verwendung einer microSD-Karte ebenfalls möglich.  

Folgende Systeme in Kombination mit dem Adapter und der Software wurden bisher als lauffähig gemeldet:
- Atlantic Alféa Extensa + [RVS21.831F] (Wärmepumpe) {BSB}
- Baxi Luna Platinum + [LMS15] (Gasbrenner) {BSB}
- Brötje BBK 22E [LMS14] (Gasbrenner) {BSB}
- Brötje BBS Pro Evo 15C [LMU74] (Gasbrenner) {BSB}
- Brötje EcoCondens BBS 15E [LMS14] (Gasbrenner) {BSB}
- Brötje EcoCondens BBS 20E [LMS14] (Gasbrenner) {BSB}
- Brötje EcoCondens BBS EVO 20 G [LMS15] (Gasbrenner) {BSB}
- Brötje EcoTherm Kompakt WMS 12 [LMS 15] (Gasbrenner) {BSB}
- Brötje EcoTherm Kompakt WMS 24 [LMS 15] (Gasbrenner) {BSB}
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
- Brötje SensoTherm BSW-K [RVS61.843] (Wärmepumpe) {BSB}
- Brötje TrioCondens BGB 20E [LMS14] (Gasbrenner) {BSB}
- Brötje WBS 14D [LMU74] (Gasbrenner) {BSB}
- Brötje WBS 22E [LMS14] (Gasbrenner) {BSB}
- Brötje WGB 15 E [LMS14] (Gasbrenner) {BSB}
- Brötje WGB 20C [LMU74] (Gasbrenner) {BSB}
- Brötje WGB-C 20/24H [LMS14] (Gasbrenner) {BSB}
- Brötje WGB EVO 20H [LMS15] (Gasbrenner) {BSB}
- Brötje WGB Pro EVO 20C [LMU75] (Gasbrenner) {BSB}
- Brötje WGB S 17/20 E EcoTherm Plus [LMS14] (Gasbrenner) {BSB}
- Brötje WGB-U 15H [LMS14] (Gasbrenner) {BSB}
- CTC 380 IC [RVS43.143] (Ölbrenner) {BSB}
- Elco Aerotop G07-14 [RVS61.843] (Wärmepumpe) {BSB}
- Elco Aerotop T10C [RVS61.843] (Wärmepumpe) {BSB}
- Elco Aquatop 8es [RVS51.843] (entspricht CTA Optihead OH1-8es) (Wärmepumpe) {BSB}
- Elco Straton 21 [RVS63.283] (Ölbrenner) {BSB}
- Elco Thision S Plus 13 [LMS14] (Gasbrenner) {BSB}
- Elco Thision S 13.1 [LMU7] (Gasbrenner) {BSB}
- Elco Thision S 17.1 [LMU74] & [RVS63.283] (Gasbrenner) {BSB}
- Elco Thision S 25.1 [RSV63.283] (Gasbrenner) + MM [AVS75.390] {BSB}
- Fujitsu Waterstage WSYK 160 DC 9 [RVS21.827] (Wärmepumpe) {BSB}
- Fujitsu Waterstage WSYP 100 DG 6 [RVS21.831] (Wärmepumpe) {BSB}
- MHG Procon E 25 HS [LMS14] (Gasbrenner) {BSB}
- Sieger TG11 [RVP54.100] (Ölbrenner) {PPS mit eingeschränkter Funktionalität}
- Weishaupt WTU-25 G mit WRS-CPU B2/E [RVS23.220] (Ölbrenner) {LPB}

### Die Software ist [hier](https://github.com/fredlcore/bsb_lan) zu finden. ###  

---  

### Autoren: ###  

-   Software, Schaltplan v1, Dokumentationen EN, Ideenfindung, Support 
    bis v0.16:  
    *Gero Schumacher (gero.schumacher \[ät\] gmail.com)*

-   Software, Platinenlayout v1 & v2, Dokumentationen EN, Ideenfindung,
    Support ab v0.17:  
    *Frederik Holst (bsb \[ät\] code-it.de)*

-   Debugging, Handbuch, Übersetzung EN-DE, Ideenfindung, Support
    ab v0.17:  
    *Ulf Dieckmann (adapter \[ät\] quantentunnel.de)*

*Basierend auf dem Code und der Mitarbeit von vielen anderen
Entwicklern! Vielen Dank!*
