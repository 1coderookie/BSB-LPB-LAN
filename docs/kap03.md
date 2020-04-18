[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 2](kap02.md)    
    
---
        

# 3. Unterstützte Heizungssysteme und Regler
Prinzipiell unterstützt BSB-LAN von der Firma SIEMENS hergestellte
(Heizungs-)Regler, die einen BSB und/oder LPB aufweisen. Diese werden
von verschiedenen Heizungsherstellern ‚gebrandet' und verbaut.
   
*Klarstellung:*  
*Wann immer ich von "Regler" spreche, dann meine ich die sog. "BMU" (boiler management unit). Das ist das Gerät im Inneren des Gehäuses des Wärmeerzeugers, das die Funktionsweise des Wärmeerzeugers steuert und an dem die Sensoren, Pumpen, die Bedieneinheit und die Raumgeräte angeschlossen sind.  
Die 'Bedieneinheit' und die Raumgeräte hingegen sind die Komponenten, die außerhalb des Gehäuses angebracht sind und mit einem Display und Knöpfen zur Bedienung des Wärmeerzeugers ausgestattet sind.*  
   
Hinweise:  
Die folgende Aufzählung der verschiedenen Reglertypen mag im ersten Moment ein wenig verwirrend erscheinen, doch im Grunde kann man sich eine vereinfachte Regel merken:   
Wenn die Reglerbezeichnung mit einem "S" endet (RVS und LMS), dann ist der Reglertyp grundsätzlich mit BSB-LAN kompatibel.  
Grundsätzlich ist die Gerätefamilie LMS die Modellreihe für Gasgeräte, alle anderen Systeme nutzen RVS-Regler.    
Je größer die darauffolgende Nummer in der Reglerbezeichnung ist, desto 'größer' vom Funktionsumfang her und meist auch hinsichtlich der Anzahl der Anschlüsse ist das jeweilige Modell.  
Je nach 'Größe', Typ und vorgesehenem Verwendungsumfang sind somit auch unterschiedliche Parameter verfügbar.   
      
***ACHTUNG:  
Aus aktuellem Anlass sei bereits hier darauf hingewiesen, dass die
Heizungshersteller offensichtlich eine neue Heizungs- und
Reglergeneration auf den Markt gebracht haben, die nach bisherigem
Wissensstand NICHT kompatibel mit BSB-LAN ist (s. Kap. [3.3](kap03.md#33-hinweis-neue-modellgeneration---nicht-unterstützter-regler-von-brötje))!***
    
---
    
## 3.1 Erfolgreich getestete Heizungssysteme

Im Folgenden findest du eine Auflistung derjenigen Heizungssysteme und
Regler, bei denen von einem erfolgreichen Einsatz des Adapters berichtet
wurde. Da jedoch nicht jeder sein Heizungssystem, den verbauten Regler
und die Ausgabe der Parameterabfrage `http://<IP-Adresse>/Q`
meldet, ist davon auszugehen, dass in der Praxis noch weitere Systeme
erfolgreich mit dem BSB-LPB-LAN-Adapter und der BSB-LAN-Software
betrieben werden (können).

Bei den (aktuelleren) Reglern kann i.d.R. grundsätzlich zwischen zwei
Reglertypen unterschieden werden: Regler des Typs RVS und LMx. Diese
zwei Typen unterscheiden sich u.a. in der Anschlussvielfalt und einigen
verfügbaren Parametern. Weitere Angaben sind im entsprechenden Kapitel
zu finden.
    
***Hinweis und Bitte:***  
Um die Liste vervollständigen zu können und anderen möglichen Nutzern
den Einstieg zu erleichtern, sei hier nochmals ausdrücklich auf die
Bitte hingewiesen, ein noch nicht aufgeführtes Heizungssystem und/oder
einen noch nicht aufgeführten Regler unter Angabe  
- der genauen Hersteller- und Modellbezeichnung,  
- des jeweiligen Energie-Typs (Gas/Öl/Wärmepumpe),  
- der verwendetenen Anschlussart (BSB/LPB/PPS) sowie  
- der Ausgabe der Parameterabfragen `http://<IP-Adresse>/Q` (via Adapter!) zu melden.  
Dazu kann entweder der entspr. [Thread im FHEM-Forum](https://forum.fhem.de/index.php/topic,29762.0.html) genutzt oder eine Email an Frederik oder mich (Ulf) geschickt werden.  
Danke!

Beispielausgabe einer solchen Abfrage bei einer „Brötje NovoCondens SOB
26C" (hier nur die Darstellung der Abfrage /6220-6228, bitte aber /Q abfragen und rückmelden!):
    
```
6220 Konfiguration - Software- Version: 1.3  
6221 Konfiguration - Entwicklungs-Index: error 7 (parameter not supported)  
6222 Konfiguration - Gerätebetriebsstunden: 12345 h  
6223 Konfiguration - Bisher unbekannte Geräteabfrage: unknown type 000014  
6224 Konfiguration - Geräte-Identifikation: RVS43.222/100  
6225 Konfiguration - Gerätefamilie: 96  
6226 Konfiguration - Gerätevariante: 100  
6227 Konfiguration - Objektverzeichnis-Version: 1.0  
6228 Konfiguration - Bisher unbekannte Geräteabfrage: unknown type 000014
```
    
---
    
### 3.1.1 Brötje
-   Brötje BBK 22E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje BBK 22F \[LMS14\] (Gasbrenner) {BSB}

-   Brötje BBS Pro Evo 15C \[LMU74\] (Gasbrenner) {BSB}

-   Brötje BGB EVO 20I \[LMS15\] (Gasbrenner) {BSB}

-   Brötje BMR 20/24 \[LMS14\] (Gasbrenner) {BSB}

-   Brötje BSK 20 \[LMS14\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS 15E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS 20E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS 28C \[LMU7\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS EVO 20G \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje EcoCondens BBS EVO 20H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje EcoCondens Kompakt BBK 22D \[LMU7\] (Gasbrenner) {BSB}

-   Brötje EcoCondens Kompakt BMK 20/24 RSP 160 \[LMS15\] (Gasbrenner) {BSB}

-   Brötje EcoSolar Kompakt BMR 20/24 \[LMS15] (Gasbrenner + Solar) {BSB}  

-   Brötje EcoTherm Kompakt WMS 12 \[LMS 15\] (Gasbrenner) {BSB}

-   Brötje EcoTherm Kompakt WMS 24 \[LMS 15\] (Gasbrenner) {BSB}  

-   Brötje EcoTherm Plus BBS2N.28 \[LMU 64\] (Gasbrenner) {+ OCI420 via LPB}  

-   Brötje EcoTherm Plus WGB2N.20 \[LMU 64\] (Gasbrenner) {+ OCI420 via LPB}

-   Brötje EcoTherm Plus WGB 15-38H \[LMS14\] (Gasbrenner) {BSB}  

-   Brötje EcoTherm Plus WGB-M EVO 20H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje EuroCondens BBS EVO 15H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje ISR-SSR \[RVS63.283\] (Solarsystemregler) {BSB}

-   Brötje ISR-ZR1, ZR2 \[RVS46.530\] (Zonenregler) {BSB}

-   Brötje LogoBloc Unit L-UB 17C \[RVS43.122\] (Ölbrenner) {BSB} 

-   Brötje LogoBloc Unit L-UB 25C \[RVS43.122\] (Ölbrenner) {BSB}

-   Brötje NovoCondens BOB 20 \[RVS43.325\] (Ölbrenner) {BSB}

-   Brötje NovoCondens BOB 20B \[RVS43\] (Ölbrenner) {BSB}  

-   Brötje NovoCondens BOB 25 \[RVS43\] (Ölbrenner) {BSB}

-   Brötje NovoCondens SOB 26 \[RVA63.242\] (Ölbrenner) {BSB}

-   Brötje NovoCondens SOB 22C \[RVS43.222\] (Ölbrenner) {BSB}

-   Brötje NovoCondens SOB 26C \[RVS43.222\] (Ölbrenner) + EWM
    \[RVS75.390\] {BSB}

-   Brötje NovoCondens WOB 20D \[RVS43.325\] (Ölbrenner) {BSB}

-   Brötje SensoTherm BLW Split B \[RVS21\] (Wärmepumpe) {BSB}  

-   Brötje SensoTherm BLW 12B \[RVS21.825\] (Wärmepumpe) {BSB}

-   Brötje SensoTherm BLW 15B \[RVS21.825\] (Wärmepumpe) {BSB}

-   Brötje SensoTherm BSW-K \[RVS61.843\] (Wärmepumpe) {BSB}

-   Brötje SensoTherm BSW-8K \[RVS61\] (Wärmepumpe) {BSB}  

-   Brötje SGB 260H \[LMS14\] (Gasbrenner) {BSB}

-   Brötje TrioCondens BGB 20E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WBS 14D \[LMU74\] (Gasbrenner) {BSB}

-   Brötje WBS 14F \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WBS 22E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB 15E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB 20C \[LMU74\] (Gasbrenner) {BSB}  

-   Brötje WGB 20E \[LMS14\] (Gasbrenner) {BSB}  

-   Brötje WGB 28E \[LMS14\] (Gasbrenner) {BSB}  

-   Brötje WGB-C 20/24H \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB 20 Eco \[LMS15\] (Gasbrenner) {BSB}

-   Brötje WGB EVO 20 \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 20H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 20I \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 28H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 15I \[LMS15\] (Gasbrenner) {BSB}

-   Brötje WGB-M EVO 20H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB-M EVO 20I \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB Pro EVO 20C \[LMU75\] (Gasbrenner) {BSB}

-   Brötje WGB S 17/20E EcoTherm Plus \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB-U 15H \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WMC \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WMS 12B \[LMS15\] (Gasbrenner) {BSB}

***ACHTUNG:***  
***Die neuen Modellreihen Brötje WLS/WLC und
BOK sind NICHT mit BSB-LAN kompatibel!***  
***The new models WLS/WLC and BOK by Brötje are NOT compatible with BSB-LAN!***
    
---
    
### 3.1.2 Elco
-   Elco Aerotop G07-14 \[RVS61.843\] (Wärmepumpe) {BSB}  

-   Elco Aerotop S \[RVS61\] (Wärmepumpe) {BSB}
   
-   Elco Aerotop T07-16 \[RVS61.843\] (Wärmepumpe) {BSB}

-   Elco Aerotop T10C \[RVS61.843\] (Wärmepumpe) {BSB}

-   Elco Aquatop 8es \[RVS51.843\] (Wärmepumpe) {BSB}

-   Elco Straton 17 \[RVS63\] (Ölbrenner) {BSB}  

-   Elco Straton 21 \[RVS63.283\] (Ölbrenner) {BSB}

-   Elco Straton S \[RVS63\] (Ölbrenner) {BSB}  

-   Elco Thision 25S \[RVS63\] \] (Gasbrenner) {BSB}  

-   Elco Thision S Plus 13 \[LMS14\] (Gasbrenner) {BSB}

-   Elco Thision S Plus 19 \[LMS14\] (Gasbrenner) {BSB}  

-   Elco Thision S Plus 24 \[LMS14\] (Gasbrenner) {BSB}

-   Elco Thision S Plus 24 Compact \[?\] (Gasbrenner) {BSB}  

-   Elco Thision S9.1 \[LMU7\] (Gasbrenner) {BSB}

-   Elco Thision S13.1 E \[LMU7x\] (Gasbrenner) {BSB}

-   Elco Thision S17.1 \[LMU74\] (Gasbrenner) {BSB}

-   Elco Thision S17.1 \[RVS63.283\] (Gasbrenner) {BSB}

-   Elco Thision S25.1 \[RSV63.283\] (Gasbrenner) + MM \[AVS75.390\] {BSB}
    
---
    
### 3.1.3 Weitere Hersteller
-   Atlantic Alféa Evolution 2 \[RVS21\] (Wärmepumpe) {BSB}

-   Atlantic Alféa Excellia A.I.TRI 16 \[RVS21\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Excellia Duo \[RVS21\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Extensa + \[RVS21.831\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Extensa AOYA 18 LALL / AOYA 30 LBTL \[RVS21\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Extensa Duo \[RVS21\] (Wärmepumpe) {BSB}  

-   Austria Email LWPK 8 \[RVS21.831\] (Wärmepumpe) {BSB}

-   Baxi Luna Platinum 1.18 \[LMS15\] (Gasbrenner) {BSB}

-   Baxi Luna Platinum+ \[LMS15\] (Gasbrenner) {BSB}

-   Baxi Luna Platinum+ 1.126A \[LMS15\] (Gasbrenner) {BSB}  

-   Bösch (unbekanntes Modell) \[RVS63\] (Wärmepumpe] {BSB}  

-   CTA Optiheat 1-5es \[RVS61\] (Wärmepumpe) {BSB}  

-   CTA Optiheat 1-18es \[RVS61\] (Wärmepumpe) {BSB}  

-   CTC 380 IC \[RVS43.143\] (Ölbrenner) {BSB}  

-   Deville 9942 \[RVA53\] (?) (PPS)  

-   Deville 9981 \[RVA53.140\] (Ölbrenner) {PPS}

-   Fröling Rendagas Plus \[RVA63.244\] (Gasbrenner) {LPB}

-   Fujitsu Waterstage Comfort 10 \[RVS21.827\] (Wärmepumpe) {BSB}  

-   Fujitsu Waterstage WSHA 050 DA \[RVS41.813\] (Wärmepumpe) {BSB}  

-   Fujitsu Waterstage WSYK 160 DC 9 \[RVS21.827\] (Wärmepumpe) {BSB}  

-   Fujitsu Waterstage WSYP 100 DG 6 \[RVS21.831\] (Wärmepumpe) {BSB}

-   Geminox Thrs 19 \[LMS14\] (Gasbrenner) {BSB}

-   Grünenwald GREENHEAT GH10 ZP 41 E \[RVA63\] (Wärmepumpe) \[+ RVA46\] {PPS/LPB}  

-   MHG Procon E25 \[LMS14\] (Gasbrenner) {BSB}  

-   MHG Procon E 25 HS \[LMS14\] (Gasbrenner) {BSB}  

-   Olymp SHS 730 \[RVS63\] (Ölbrenner / oil fired) {BSB}  

-   Olymp WHS 500 \[RVS61\] (Wärmepumpe) {BSB}  

-   Sieger TG11 \[RVP54.100\] (Ölbrenner) {PPS}  

-   Sixmadun TG11 BE \[RVA63\] (?) {PPS/LPB}  

-   Thermital TBox Clima TOP \[RVS63\] (Basbrenner + Solar + Pelletofen) {BSB/LPB}  

-   Weishaupt WTU 25 G \[WRS-CPU B2/E = RVS23\] (Ölbrenner) {LPB}  
    
-   Weishaupt WTU 25 G \[WRS-CPU-B3 = RVS23\] (Ölbrenner) {LPB}  
    
-   Weishaupt WTU 15 S \[WRS-CPU-B1 = RVS23\] (Ölbrenner) {LPB}  
    
-   Weishaupt WTU 30 S \[WRS-CPU-B1 = RVS23\] (Ölbrenner) {LPB}  
    
---
    
## 3.2 Detailliertere Auflistung und Beschreibung der unterstützten Regler
Die folgende Reglerauflistung und -beschreibung soll u.a. einen kurzen
Überblick über eine Auswahl der bereits von BSB-LAN unterstützten Geräte und deren
rudimentären Unterschiede geben. Auf die unterschiedliche
reglerspezifische Verfügbarkeit von speziellen Parametern wird nicht
weiter eingegangen. Es sei jedoch darauf hingewiesen, dass mittels
BSB-LAN grundsätzlich etliche Parameter verfügbar sind, die mittels
integrierter Bedieneinheit nicht verfügbar sind.
   
---
    
### 3.2.1 LMx-Regler
Im Folgenden werden die Regler des Typs LMU und LMS aufgeführt. Diese
sind erfahrungsgemäß bei Gasheizungen/-thermen verbaut.
   
---
   
#### 3.2.1.1 LMU-Regler  
Regler der Serie **LMU54/LMU64** sind in älteren Systemen verbaut, sie sind nicht mehr aktuell. Diese Regler weisen erfahrungsgemäß weder einen BSB, noch einen LPB auf, lediglich eine PPS-Schnittstelle ist hier verfügbar. LPB kann (manchmal) mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden.  

         
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMU64.jpg">  
   
*Ein Regler des Typs LMU64 samt installiertem OCI420 ClipIn-Modul.*  
  
Eine Nutzung von BSB-LAN mit diesen Reglermodellen ist erfahrungsgemäß nur in eingeschränktem Maße möglich. Genauere Hinweise diesbezüglich sind in [Kap. 3.4](kap03.md#34-hinweis-spezialfall-lmu54lmu64-regler) zu finden.  
   
---
   
Regler der Serie **LMU74/LMU75** scheinen die Nachfolger der LMU54/LMU64-Reglerserie zu sein und werden ebenfalls nicht mehr verbaut. Sie weisen einen BSB auf, an dem der Adapter angeschlossen wird und mittels BSB-LAN nachfolgend nahezu der komplette Funktionsumfang verfügbar ist. Lediglich vereinzelte (Spezial-)Funktionen scheinen nicht verfügbar zu sein, wie bspw. das Übermitteln einer alternativen Außentemperatur.  
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMU7.jpg">  
   
*Ein Regler des Typs LMU7x.*  
      
Der LMU7x-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).  
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).  
    
---  
   
#### 3.2.1.2 LMS-Regler   
Regler der Serie **LMS** scheinen die Nachfolger der LMU-Serie und somit die
aktuelle Reglergeneration zu sein. Bei diesem Reglertyp ist mittels BSB-LAN erfahrungsgemäß der komplette Funktionsumfang nutzbar.  
   
Der (Funktions-)Unterschied zwischen dem LMS14 und dem LMS15
scheint in der „Sitherm Pro"-Anwendung zur Optimierung des gesamten
Verbrennungsprozesses zu liegen, die anscheinend nur die LMS15-Regler
aufweisen.

Der LMS-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMS15.jpeg">  
   
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).
       
---
    
### 3.2.2 RVx-Regler
Im Folgenden werden die Regler des Typs RVA, RVP und *RVS (aktueller
Reglertyp)* aufgeführt. Diese scheinen i.d.R. bei Ölheizungen,
Wärmepumpen und verschiedenen ‚alleinstehenden' Reglern (Zonenregler,
Solarsystemregler) zum Einsatz zu kommen.
    
---
    
#### 3.2.2.1 RVA- und RVP-Regler
Regler des Typs **RVA** gehören anscheinend zur vorherigen Reglergeneration
und weisen je nach Modell nur einen PPS oder einen PPS- und LPB-Anschluss auf
(keinen BSB).  
Als (integrierte) Bedieneinheit ist meist eine Variante der "Eurocontrol" 
(Brötje) verbaut.  
Eine Bedienung mittels BSB-LAN ist nur in deutlich geringerem Umfang als
bei der aktuellen Reglergeneration RVS möglich.  
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVA53_back.jpg">  
   
*Ein Regler des Typs RVA53.*  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVA53_front.jpg">  
   
*Vorderansicht: Bedieneinheit eines Reglers des Typs RVA53.*  
   
Regler des Typs **RVP** scheinen noch älter als RVA-Regler zu sein und
weisen lediglich eine PPS-Schnittstelle auf.  
Der Bedienungsumfang mittels BSB-LAN ist bei diesem Reglertyp nur in
eingeschränktem Umfang möglich.  
    
---
    
#### 3.2.2.2 RVS-Regler
Regler des Typs **RVS** scheinen die ‚aktuelle' Reglergeneration
darzustellen und werden i.d.R. von BSB-LAN vollständig unterstützt.
Sie weisen meist sowohl einen LPB-, als auch mehrere BSB-Anschlüsse
auf.  
     
Ausnahmen scheinen die Regler der Reihen RVS21, RVS41, RVS51, RVS61 und RVS23 zu sein:  
- RVSx1-Regler kommen bei Wärmepumpen zum Einsatz, der RVS21 scheint nur einen BSB aufzuweisen.      
- RVS23-Regler kommen bei einer bestimmten Weishaupt-Modellreihe (WTU) zum Einsatz und scheinen nur einen LPB aufzuweisen. Bei Weishaupt scheinen diese Regler als "WRS-CPU-Bx" bezeichnet zu werden. Weitere Hinweise zu diesem Reglermodell finden sich in [Kap. 3.5](kap03.md#35-hinweis-spezialfall-weishaupt-geräte).  
     
Als Bedieneinheit kommt hier i.d.R. eine Variante des Siemens AVS37.294
zum Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).
  
Die folgende grobe Darstellung der Gerätefamilie zeigt wesentliche Unterschiede auf.  
    
---    
    
**RVS21.xxx**  
Der RVS21 ist der Reglertyp, der in Wärmepumpen Verwendung findet. Er bietet einen BSB und Anschlüsse für ein optionales Raumgerät.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVS21.jpeg">  
   
*Ein RVS21 Regler.*  
   
---    
    
**RVS41.xxx**  
Der RVS41 ist ebenfalls ein Reglertyp, der in Wärmepumpen Verwendung findet. Er bietet BSB und LPB und scheint (zumindest äußerlich betrachtet) dem RVS43 recht ähnlich zu sein.    
   
---
    
**RVS43.xxx**  
Der RVS43 ist die Variante, die bspw. in Ölbrennwertanlagen zum Einsatz kommt. Die Anzahl der Anschlüsse und Funktionen kann mit einem Erweiterungsmodul AVS75.xxx vergrößert werden.  
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVS43.jpg">  
   
*Ein Regler des Typs RVS43.*  
   
---   
   
**RVS46.xxx**  
Der RVS46 ist ein kleiner Zonenregler, der je nach Ausführung (ZR1 / ZR2) Anschlüsse für ein oder zwei Pumpen- / Mischerkreise hat. Er kann einzelne Zonen eigenständig oder auch als Erweiterung eines vorhandenen Reglers im LPB-Verbund eingesetzt zu werden. Er bietet sowohl eine BSB- als auch einen LPB-Anschluss.  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVS46_zr1.jpeg">
    
*Der kleine Zonenregler ZR1.*     
    
Der ZR1 ist nicht dafür gedacht oder geeignet, bspw. den Verbrennungsprozess eines Ölbrenners zu steuern.  
   
---    
    
**RVS51.xxx**  
Der RVS51 ist der 'große' Reglertyp, der in Wärmepumpen Verwendung findet. Er bietet BSB und LPB und scheint (zumindest äußerlich betrachtet) dem RVS63 recht ähnlich zu sein.    
            
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVS51843.jpeg">  
   
*Ein Regler des Typs RVS51.843.*  
   
---    
    
**RVS61.xxx**  
Der RVS61 ist der 'große' Reglertyp, der in Wärmepumpen Verwendung findet. Er bietet BSB und LPB und scheint (zumindest äußerlich betrachtet) dem RVS63 recht ähnlich zu sein.    
   
---   
   
**RVS63.xxx**  
Der RVS63 ist der größte Regler mit den meisten Anschlüssen und kann aufgrund seines Funktionsumfanges vielfältig eingesetzt werden. Er ist in erster Linie dafür vorgesehen, komplexere Anlagen mit einer zusätzlichen Solarthermieanlage zu steuern. Bei Brötje wird er daher auch als "Solar System Regler" bezeichnet. Er ist sowohl als optionaler Nachrüstregler in einem Wandgehäuse erhältlich, wird aber auch als bereits in den Wärmerzeuger eingebauter interner Regler verwendet.  
         
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVS63.jpg">  
   
*Ein Regler des Typs RVS63.*  
    
---
    
Der **RVS65.xxx** scheint relativ identisch zum RVS63 zu sein und wurde bisher lediglich einmal von einem User gemeldet, bei dem der Regler als SSR von Brötje in einem Wandgehäuse zum Einsatz kam.       
   
---  
   
### 3.2.3 Erweiterungs- und ClipIn-Module    
Sollten die Anschlussmöglichkeiten und der Funktionsumfang der genannten Regler im Einzelfall nicht ausreichen, bspw. weil ein zusätzlicher Pumpenkreis nachträglich installiert wird, so lassen sich jeweils spezielle Erweiterungs-/ClipIn-Module (im Folgenden EWM) verbauen. Die EWM bieten Anschlussmöglichkeiten für einen Pumpen- bzw. Mischerkreis samt zugehöriger Sensoren.  
Diese EWM werden am Regler mittels eines speziellen Bus-Kabels an einem dedizitieren Anschluss angeschlossen und kommunizieren intern über den BSB (eine Ausnahme scheint Weishaupt zu sein, worauf in diesem Kapitel jedoch nicht weiter eingegangen wird). Die EWM selbst weisen keinen eigenen BSB- oder LPB-Anschluss auf. Die Parametrierung erfolgt über die Bedieneinheit des Reglers.  
Der Zugriff auf ein EWM ist somit nur indirekt über die jeweils spezifischen Parameter im eigentlichen Regler möglich, die die Einstellungen und Funktionen des EWMs definieren und beschreiben. Da sie jedoch bspw. beim Aufruf von `ip/Q` mit aufgelistet werden, stelle ich sie im Folgenden kurz vor.  
  
*Hinweis:*  
*Soll ein Erweiterungs-/ClipIn-Modul nachgerüstet werden, so sollte selbstverständlich das anlagenspezifische Handbuch berücksichtigt sowie ein Heizungsinstallateur beauftragt werden.*    
  
---  
   
Erweiterungsmodule des Typs **AVS75.xxx** kommen bei den Reglerserien des Typs RVS zum Einsatz. Die Busanbindung erfolgt i.d.R. über den Anschluss "Bus-EM".     
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AVS75.jpg">  
   
*Erweiterungsmodul des Typs AVS75.390.*  
   
---  
   
Erweiterungsmodule für LMx-Regler werden als "ClipIn-Module" bezeichnet. Je nach Verwendungszweck scheint es unterschiedliche Ausführungen zu geben (bspw. Relaismodul, Solarmodul). Generell scheinen sie jedoch die Typenbezeichnung **AGU2.5x** zu tragen (das "x" scheint dann die jeweilige Ausführung zu kennzeichnen), die Busanbindung erfolgt i.d.R. über den Anschluss "X50".   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AGU255.JPG">  
   
*ClipIn-Modul des Typs AGU2.55.*  
   
---   
   
### 3.2.4 Bedieneinheiten  
   
Die Bedieneinheit (am Wärmeerzeuger selbst) der Systeme der letzten Jahre (mit den Reglertypen LMU7x, LMS1x, RVS) sind üblicherweise Modelle des Typs **AVS37.xxx**. Sie sehen herstellerübergreifend recht identisch aus, können aber bei bestimmten Systeme (bspw. Wärmepumpen) zusätzliche Bedienelemente oder Funktionen aufweisen.   
Wenn man das Aussehen dieser AVS37-Bedieneinheiten und der QAA75.61x-Raumgeräte vergleicht, so kann man feststellen, dass sich die beiden Geräte sehr ähneln. Die Art der Bedienung ist in dem meisten Fällen ebenso identisch. Die heizungsseitigen Bedieneinheiten stellen i.d.R. die Temperatur des Wärmeerzeugers (bspw. Kesseltemperatur) dauerhaft dar, die Raumgeräte hingegen üblicherweise die Raumtemperatur. Beide Geräte senden den jeweiligen Wert regelmäßig (etwa alle zehn Sekunden) als Broadcast (INF-Nachricht) über den BSB.   
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AVS37.jpg">  
   
*Eine Bedieneinheit des Typs AVS37.xxx.*  
   
In jüngerer Zeit wird von einigen Herstellern bei bestimmten Geräteserien ein neuer Typ von Bedieneinheit verbaut, die Modellbezeichnung lautet **QAA75.91x**. Die Bedieneinheit scheint (zumindest bei bestimmten Herstellern) abnehmbar und mithilfe eines Adapters (Brötje: "ISR RGA") im Wohnraum installiert und zusätzlich als Raumgerät genutzt werden kann. Die Bedienung des Wärmeerzeugers erfolgt in dem Fall weiterhin über diese Komponente.     
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA75911_kessel.jpg">  
   
*Eine Bedieneinheit des Typs QAA75.91x.*  
   
---
    
## 3.3 Hinweis: Neue Modellgeneration - NICHT unterstützter Regler von Brötje
Aus aktuellem Anlass sei an dieser Stelle darauf hingewiesen, dass die
genannten Heizungshersteller neue Gerätemodelle auf den Markt gebracht
haben, deren Regler nach bisherigem Wissensstand NICHT mit BSB-LAN
kompatibel sind.

Bei Brötje handelt es sich hierbei um die Modellreihe WLS/WLC und BOK.  
Bei diesen Modellen sind scheinbar ‚IWR CAN'-basierte Regler verbaut,
die weder einen LPB noch einen BSB aufweisen.

Das folgende Bild einer WLC24-Platine zeigt die dort vorhandenen
Anschlüsse.  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/regler-wlc24.jpg">
    
*Anschlüsse des neuen Reglertyps einer Brötje WLC24 - dieser Regler ist inkompatibel mit BSB-LAN!*     
    
    
Neben einer Servicebuchse (vermutlich IWR CAN) sind dort ein nicht
weiter dokumentierter ‚L-Bus' und ein ‚R-Bus' zugänglich.  
Am ‚R-Bus' (Raumgeräte-Bus) kann bei Bedarf entweder ein Raumthermostat
(On/Off), ein entsprechendes QAA-Raumgerät oder das neue ‚smarte'
Raumgerät „Brötje IDA" angeschlossen werden.

***ACHTUNG: An keinem dieser Anschlüsse ist der BSB-LPB-LAN-Adapter anschließbar!***

---  
  
## 3.4 Hinweis: Spezialfall LMU54/LMU64-Regler  
Regler des Typs LMU54/LMU64 basieren auf OpenTherm, das andere Bus-Spezifikationen und auch ein anderes Kommunikationsprotokoll aufweist. Daher ist OpenTherm nicht kompatibel mit BSB-LAN.  
Es gibt jedoch eine Möglichkeit, diesen Reglertyp trotzdem anzubinden: Wie auch bei den BSB-Reglern LMU7x und LMS1x kann man mittels eines sog. ClipIn-Moduls (OCI420) einen LPB nachrüsten. An diesen wiederum ist der Adapter anschließbar.  
            
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMU64.jpg">  
   
*Ein Regler des Typs LMU64 samt installiertem OCI420 ClipIn-Modul.*  
  
Der Funktionsumfang ist bei diesem Regler (auch bei der Nutzung von BSB-LAN) jedoch relativ eingeschränkt und außerdem in gewissem Ausmaß von der Softwareversion des Reglers abhängig (getestet mit LMU64, SW v2.08 vs. SW v3.0): Regler mit SW ab v3.0 scheinen mehr (via BSB-LAN steuerbare) Funktionen aufzuweisen als Regler mit SW <v3.0. Insbesondere seien hier die beiden Sollwert-Temperaturparameter 709 und 711 genannt, anhand derer das Brennerverhalten in gewissem Umfang bestimmt werden könnte – diese können nur mit SW ab v3.0 genutzt bzw. verändert werden. (Hinweis: Derzeit läuft noch ein Versuch, ob das Brennerverhalten zufriedenstellend via Relais an einem anderen Kontakt beeinflusst werden kann.)  
  
Auf Parameter wie Außentemperatur, Kesseltemperatur, TWW-Temperatur, Vorlauftemperatur etc. kann jedoch nach bisherigem Kenntnisstand bei beiden erwähnten Softwareversionen zugegriffen werden.  
  
Fairerweise muss man an dieser Stelle sagen, dass sich der finanzielle Aufwand, der für den Kauf eines LPB-ClipIn-Moduls des Typs OCI420 zusätzlich geleistet werden muss, u.U. nicht ‚lohnt‘. Dies ist jedoch abhängig vom verfolgten Ziel. Will man nur Temperaturen loggen um einen groben Überblick über den Ist-Zustand des Heizungssystems zu erhalten, so ist u.U. eine günstigere Lösung mit einer entsprechenden DS18B20-Temperatursensoren-Installation ausreichend.  
  
Hinweise zum Anschluss und der Konfiguration des OCI420-ClipIns sind im [Kap. 3.8](kap03.md#38-lpb-nachr%C3%BCsten-mittels-oci420-clipin-modul) zu finden.  
  
---  
  
## 3.5 Hinweis: Spezialfall Weishaupt-Geräte  
Einige Weishaupt-Geräte (s. Auflistung der erfolgreich getesteten Systeme: Weishaupt WTU mit Bedieneinheit WRS-CPU) haben einen Regler des Typs RVS23 verbaut. Dieser Reglertyp weist einen LPB auf, auf dem bereits die bestehende Installation dieser Weishaupt-Anlagen basiert: Raumgeräte, Bedieneinheiten und Erweiterungsmodule sind bereits miteinander via LPB verbunden.  
An diesem LPB ist ebenfalls der Adapter anschließbar, er muss jedoch korrekt in die bestehende Installation eingebunden werden. In der Regel stellt dies mit der voreingestellten LPB-Adresse des Adapters (Segment 4, Adresse 3) kein Problem dar, sollte aber bei etwaigen Kommunikationsproblemen ggf. nochmal überprüft werden.  

Auch bei den Weishaupt-Geräten scheint es neben der kesselseitigen Bedieneinheit eine Servicebuchse zu geben, bei der von den vier vorgesehenen Pins zwei belegt und herausgeführt sind. Laut der Aussage eines Weishaupt-Nutzers (*Danke an BSB-LAN-User Philippe!*) scheint hier der obere der beiden Pins MB und der untere der beiden Pins DB zu sein.  
  
---  
  
## 3.6 Konventionelle Raumgeräte für die aufgeführten Reglertypen  
Im Folgenden wird kurz auf die unterschiedlichen Raumgeräte eingegangen. Auch diese werden prinzipiell von SIEMENS hergestellt und von den verschiedenen Heizungsherstellern gebrandet. Somit sind sie herstellerübergreifend einsetzbar, d.h. ein entsprechendes QAA-Raumgerät von bspw. Elco kann prinzipiell an einer Brötje-Heizung eingesetzt werden (natürlich immer vorausgesetzt, dass es sich um das richtige Modell handelt). Ob dabei in Einzelfällen gewisse Einschränkungen bestehen, ist bisher nicht bekannt bzw. bei Tests nicht aufgefallen.  
  
Die nachfolgende Beschreibung beginnt dabei mit den Raumgeräten für die aktuellen Heizungsregler (RVS und LMS), die auch von BSB-LAN voll unterstützt werden (sog. "Broetje ISR").  

Anmerkung: Es scheint, als wenn das Produktportfolio um neue Raumgeräte und weiteres Zubehör ergänzt wurde. Bei Gelegenheit werde ich die m.E. relevanten Produkte hier hinzufügen.
  
---  
  
### 3.6.1 QAA55 / QAA58  
Das QAA55 ist das ‚kleinste‘ und günstigste ISR-Raumgerätemodell. Bei Brötje wird es als „RGB B“ geführt, manchmal ist es auch als „Raumgerät Basic“, „ISR RGB“ o.ä. zu finden. Es ist im Funktionsumfang recht eingeschränkt und ist im Grunde mehr als Raumtemperaturfühler mit einigen wenigen zusätzlichen Bedienoptionen anzusehen.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA55.jpg">  
   
*Das QAA 55 Raumgerät.*
   
Neben der optionalen Messung der Raumtemperatur bietet es eine Präsenztaste und die Möglichkeiten zur Umschaltung der Betriebsart sowie zur Veränderung der Raumsolltemperatur. Es verfügt lediglich über ein kleines LCD-Display, das die aktuelle Raumtemperatur anzeigt. Angeschlossen wird es über ein zweipoliges Kabel am BSB.  
   
Das QAA58 ist die Funkvariante des QAA55. Es ist batteriebetrieben, der Funkempfänger AVS71.390 (Frequenz 868 MHz) muss wiederum per Kabel am Anschluss X60 des Kesselreglers angeschlossen werden.
  
---  
  
### 3.6.2 QAA75 / QAA78  
Das QAA75.61x ist das ‚große‘ ISR-Raumgerät. Es weist neben dem integrierten Temperaturfühler den vollen Funktionsumfang der kesselseitigen Bedieneinheit auf. Zusätzlich ist eine Präsenztaste vorhanden, ein manueller TWW-Push kann bei Bedarf i.d.R. durch längeres Drücken der TWW-Betriebsarttaste ausgelöst werden.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA75.jpg">  
   
*Das QAA75.61x Raumgerät.*  
   
Das QAA75.61x heißt bei Brötje „Raumgerät RGT“, manchmal ist es auch als „Raumgerät RGT B Top“, „ISR RGT“ o.ä. zu finden.  
Es wird ebenfalls per Kabel am BSB angeschlossen, wobei ein dritter Anschluss für die optional nutzbare Hintergrundbeleuchtung vorhanden ist (Klemme „G+“ am Regler).  
  
Das QAA78.61x ist die Funkvariante des QAA75.61x. Es ist batteriebetrieben, der Funkempfänger AVS71.390 (Frequenz 868 MHz) muss wiederum per Kabel am Anschluss X60 des Kesselreglers angeschlossen werden. Die oben genannte Bezeichnung „RGT“ wird bei Brötje um ein „F“ erweitert, also „RGTF“.  
   
*Hinweis:*  
An dieser Stelle muss zusätzlich erwähnt werden, dass es offenbar zwei verschiedene Ausführungen des QAA75 gibt: Das bereits erwähnte Raumgerät QAA75.61x und ein optisch nicht identisches QAA75.91x.  
Wann immer ich in diesem Handbuch das "QAA75" erwähne, so beziehe ich mich dabei auf das bereits vorgestellte Modell QAA75.61x.  
   
Das QAA75.91x scheint im Bedienungsumfang identisch zum QAA75.61x zu sein, jedoch nur bei bestimmten Modellreihen einiger Hersteller (bspw. Brötje WMS/WMC C, BMK B, BMR B und Baxi Luna Platinum+) zum Einsatz zu kommen. Es scheint die 'heizungsseitige' Bedieneinheit zu sein, die jedoch mittels eines Adapters (Brötje: "ISR RGA") zusätzlich als Raumgerät genutzt werden kann. Die Bedienung des Wärmeerzeugers erfolgt in dem Fall weiterhin über diese Komponente, nur mit dem Vorteil, dass man sie im Wohnbereich installieren und sich ein zusätzliches Raumgerät sparen kann.     
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/qaa75911.jpg">  
   
*Eine QAA75.91x Bedieneinheit, mit Zubehör optional nutzbar als Raumgerät.*  
   
---  
   
### 3.6.3 QAA74  
Das QAA74 ist ein relativ neues Raumgerät, welches das QAA75 ablösen soll/wird. Bei Brötje heißt es "ISR RGP" ("Raumgerät Premium"), bei Siemens "UI400". Es ist mit einem 3,8" LCD-Display und einem Dreh-/Drückknopf ausgestattet, mit dem sämtliche Einstellungen vorgenommen werden. Es kommt bei einigen Modellen ebenfalls als heizungsseitige Bedieneinheit unter der Bezeichnung AVS74 zum Einsatz. 
   
---
  
### 3.6.4 Brötje IDA  
Die „Brötje IDA“ ist eine Raumeinheit, die neben einem integrierten Temperaturfühler und einigen Funktionen zusätzlich einen gewissen Funktionsumfang für die Steuerung via App mit Smartphone bietet. Eine Präsenztaste ist nicht vorhanden.  
  
IDA wird ins heimische WLAN integriert und benötigt Internetzugriff, falls man die Steuerung per App nutzen möchte. Bei einer rein lokalen Nutzung des Raumgerätes (ohne Fernzugriff via App) ist kein WLAN-Zugang erforderlich. Über den WLAN-Zugang erfolgt im Übrigen auch die Aktualisierung der IDA-Firmware.  
Eine interessante Analyse des Datenverkehrs wurde [hier](https://forum.fhem.de/index.php/topic,29762.msg833831.html#msg833831) von FHEM-Forumsmitglied „freetz“ vorgenommen.  
  
Für den Anschluss am BSB des Kesselreglers muss ein BSB-Interface (GTW17) angeschlossen werden. Interessenten müssen in diesem Fall nach „ISR IDA“ Ausschau halten, damit das GTW17 im Paket enthalten ist.  
Bei Reglern mit dem Kommunikationsprotokoll OpenTherm (bspw. die ältere Reglergeneration Brötje LMU6x) muss das OT-Interface (GTW16) verwendet werden.  
IWR-CAN-basierte Regler (s. [Kap. 3.3](kap03.md#33-hinweis-neue-modellgeneration---nicht-unterstützter-regler-von-bröje)) werden direkt an das Service Dongle GW05 (WLAN-Gateway) angeschlossen.  
  
Der genaue Funktionsumfang und die Installationsschritte von IDA sind bitte den entsprechenden Anleitungen des Herstellers zu entnehmen. Eine Übersicht ist bspw. unter der URL https://www.broetje.de/de/produkte/regelung-und-vernetzte-heizung/isr/raumgeraet-isr-ida verfügbar.  
  
Der gleichzeitige Einsatz von IDA und BSB-LAN ist prinzipiell möglich, jedoch sind aufgrund des Erfahrungsberichtes eines Nutzers (*Danke an FHEM-Foumsmitglied „mifh“!*) ein paar Einschränkungen hinsichtlich des Funktionsumfangs von BSB-LAN bekannt:  
Ist IDA am BSB angeschlossen, so ist es der Master für die Einstellungen bzw. Werte von 
- Uhrzeit und Datum,
- Heiz- bzw. Schaltprogrammen sowie der
- Raumtemperatur.
Werden diese Einstellungen / Werte via BSB-LAN geändert, so werden sie nach kurzer Zeit wieder mit den Einstellungen / Werten aus IDA überschrieben. 
Es ist somit also nicht mehr möglich, bspw. die Raumtemperaturen aus verschiedenen Räumen zu erfassen und mittels BSB-LAN an den Regler zu übermitteln, da IDA dies überschreibt.  
  
Die Funktion der Präsenztaste ist via BSB-LAN i.d.R. nach wie vor gegeben.  
  
---  
  
### 3.6.5 QAA53 / QAA73  
Die Raumgeräte QAA 53 und QAA 73 unterscheiden sich ebenfalls im Funktionsumfang. Zum Einsatz kommen sie bei den OpenTherm-basierten Reglern des Typs LMU6x. Sollte dieser Raumgerätetyp angeschlossen oder anschließbar sein, so ist der Regler nicht ohne Weiteres kompatibel mit dem BSB-LPB-LAN-Adapter! Für weitere Informationen diesbzgl. beachte bitte das [Kapitel 3.4](kap03.md#34-hinweis-spezialfall-lmu54lmu64-regler). 
Weitere Informationen zu diesen Raumgeräten sind bitte den entsprechenden Anleitungen zu entnehmen.  
  
---  
  
### 3.6.6 QAA50 / QAA70  
Auch beim QAA50 und QAA70 besteht prinzipiell der Unterschied im Funktionsumfang. Diese Raumgeräte kommen bei den alten Reglergenrationen zum Einsatz, die lediglich eine PPS-Schnittstelle aufweisen und somit prinzipiell kompatibel mit dem BSB-LPB-LAN-Adapter sind. Der Einsatz von BSB-LAN parallel zu einem vorhandenen Raumgerät ist in diesem Fall nur lesend möglich, Werte und Einstellungen des Heizungsreglers können also nicht via BSB-LAN verändert werden.  
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA70.jpg">  
   
*Ein QAA70 Raumgerät.*  
   
Weitere Informationen zu diesen Raumgeräten sind bitte den entsprechenden Anleitungen zu entnehmen.  
  
---  
  
## 3.7 Sonderzubehör: Webserver OZW672 und Servicetool OCI700  
An dieser Stelle seien der Vollständigkeit halber noch zwei kommerzielle Lösungen erwähnt, mittels derer man Zugriff auf den Heizungsregler via Computer bekommen kann.  
Dies ist zum einen der Webserver OZW672 und zum anderen das Servicetool OCI700.  
   
Der Webserver OZW672 (Brötje: "ISR OZW") wird per Busleitung an den Regler angeschlossen und mit einem Netzwerkanschluss mit dem heimischen Netzwerk und ggf. dem Internet verbunden. Er stellt bei Bedarf eine Verbindung zum (kostenpflichtigen) 'Brötje Datenportal' her und bietet dann mittels Fernzugriff (via PC, Tablet oder Smartphone+App) Möglichkeiten wie Ferndiagnose oder auch Benachrichtigungen im Störungsfall.  
   
Das OCI700 ist das Servicetool, das überwiegend vom Fachhandwerker eingesetzt wird. Es wird lokal mit einem Rechner verbunden, auf dem eine spezielle Software installiert ist und ermöglicht einen Überblick über die Einstellungen des Reglers.  
   
---  
  
## 3.8 LPB nachrüsten mittels OCI420 ClipIn-Modul  
Soll ein OCI420 an einem LMx-Regler angeschlossen und verwendet werden, so ist die Installation und der Anschluss prinzipiell gemäß den jeweiligen Bedienungsanleitungen vorzunehmen.   
  
Es gibt jedoch ein paar wichtige Punkte, die i.d.R. nicht in den jeweiligen Anleitungen zu finden sind, obwohl sie für einen erfolgreichen Betrieb entscheidend sind. Dies betrifft vor allem die Einstellungen, die für die LPB-Spannungsversorgung vorzunehmen sind. Des Weiteren ist die LPB-Geräteadresse 1 mit Segmentadresse 0 einzustellen und die Einstellung als Uhrzeit-Master vorzunehmen.  
  
*Die folgenden Angaben sind wie immer ohne Gewähr – darauf sei an dieser Stelle nochmal explizit hingewiesen.*  
  
Schließt man das OCI420 den Anleitungen folgend an, so wird höchstwahrscheinlich der Fehler 81 auftreten, welcher „Kurzschluss im LPB Bus oder fehlende Speisung“ bedeutet. Sofern man das OCI420 korrekt angeschlossen hat, muss in dem Fall die LPB-Busspeisung aktiviert werden. Der Parameter dazu ist „LPBKonfig0“.  
  
Die folgenden Einstellungen sind für Regler des Typs LMU64 beschrieben, bis auf die Parameternummer sind die Einstellungen der Bits bei anderen LMx-Reglern identisch.  
Bei der LMU64 hat der betreffende Parameter die Nummer 604 (bei LMU74: Parameternummer 6006). Hier sind acht Bits (604.0 bis 604.7) verfügbar, die wie folgt einzustellen sind (dabei bedeutet „0“=AUS und „1“=EIN):  
  
604.0 = 0 → Uhrzeitmaster  
604.1 = 1 → Uhrzeitmaster  
**604.2 = 1 → Verteilte Busspeisung AUTOMATIK**  
604.3 = 1 → Status LPB-Busspeisung: 1 = aktiv  
604.4 = 1 → Ereignisverhalten erlaubt  
604.5 = 0 → Brauchwasserzuordnung lokal  
604.6 = 0 → Brauchwasserzuordnung lokal  
604.7 = 0 → Kein Vorrang LMU-Anforderung vor externer Leistungsvorgabe  
  
Ruft man die ‚Übersicht‘ der LPBKonfig0-Einstellungen auf, so wird dort jedoch die Bit-Reihenfolge von hinten nach vorne (also von Bit 7 bis Bit 0!) dargestellt und sollte nach erfolgreicher Einstellung folgendermaßen lauten: 00011110.
Des Weiteren sind folgende Einstellungen vorzunehmen:  
  
605 LPB-Geräteadresse = 1  
606 LPB-Segmentadresse = 0  
  
Nach erfolgreicher Einstellung sollte kein Fehlercode mehr auftreten und die grüne LED am OCI420 in regelmäßigen Abständen blinken.  
      
---
    

     
[Weiter zu Kapitel 4](kap04.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

