[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 2](kap02.md)    
    
---
        

# 3. Unterstützte Heizungssysteme und Regler
Prinzipiell unterstützt BSB-LAN von der Firma SIEMENS hergestellte
(Heizungs-)Regler, die einen BSB und/oder LPB aufweisen. Diese werden
von verschiedenen Heizungsherstellern ‚gebrandet' und verbaut.
   
*Klarstellung:*  
*Wann immer ich von "Regler" spreche, dann meine ich die sog. "BMU" (boiler management unit). Das ist das Gerät im Inneren des Gehäuses des Wärmeerzeugers, das die Funktion des Wärmeerzeugers steuert und an dem die Sensoren, Pumpen, die Bedieneinheit und die Raumgeräte angeschlossen sind.  
Die 'Bedieneinheit' und die Raumgeräte hingegen sind die Komponenten, die außerhalb des Gehäuses angebracht sind und mit einem Display und Knöpfen zur Bedienung des Wärmeerzeugers ausgesattet sind.*  
   
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
- der Ausgabe der Parameterabfragen `http://<IP-Adresse>/Q` sowie `http://<IP-Adresse>/6220-6236` (via Adapter!) zu melden.  
Dazu kann entweder der entspr. [Thread im FHEM-Forum](https://forum.fhem.de/index.php/topic,29762.0.html) genutzt oder eine Email an Frederik oder mich (Ulf) geschickt werden.  
Danke!

Beispielausgabe einer solchen Abfrage bei einer „Brötje NovoCondens SOB
26C" (hier nur die Darstellung der Abfrage /6220-6228, bitte aber /Q und /6220-6236 abfragen und rückmelden!):
    
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

-   Brötje BSK 20 \[LMS14\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS 15E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS 20E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS 28C \[LMU7\] (Gasbrenner) {BSB}

-   Brötje EcoCondens BBS EVO 20G \[LMS15\] (Gasbrennerd) {BSB}  

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

-   Brötje LogoBloc Unit L-UB 25C \[RVS43.122\] (Ölbrenner) {BSB}

-   Brötje NovoCondens BOB 20 \[RVS43.325\] (Ölbrenner) {BSB}

-   Brötje NovoCondens BOB 20B \[RVS43\] (Ölbrenner) {BSB}  

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

-   Brötje TrioCondens BGB 20E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WBS 14D \[LMU74\] (Gasbrenner) {BSB}

-   Brötje WBS 14F \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WBS 22E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB 15E \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB 20C \[LMU74\] (Gasbrenner) {BSB}  

-   Brötje WGB 20E \[LMS14\] (Gasbrenner) {BSB}  

-   Brötje WGB 28E \[LMS14\] (Gasbrenner) {BSB}  

-   Brötje WGB-C 20/24H \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB EVO 20 \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 20H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 28H \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB EVO 15I \[LMS15\] (Gasbrenner) {BSB}

-   Brötje WGB-M EVO 20I \[LMS15\] (Gasbrenner) {BSB}  

-   Brötje WGB Pro EVO 20C \[LMU75\] (Gasbrenner) {BSB}

-   Brötje WGB S 17/20E EcoTherm Plus \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WGB-U 15H \[LMS14\] (Gasbrenner) {BSB}

-   Brötje WMC \[LMS15\] (Gasbrenner) {BSB}  

***ACHTUNG:***  
***Die neuen Modellreihen Brötje WLS/WLC und
BOK sind NICHT mit BSB-LAN kompatibel!***  
***The new models WLS/WLC and BOK by Brötje are NOT compatible with BSB-LAN!***
    
---
    
### 3.1.2 Elco
-   Elco Aerotop G07-14 \[RVS61.843\] (Wärmepumpe) {BSB}  
   
-   Elco Aerotop T07-16 \[RVS61.843\] (Wärmepumpe) {BSB}

-   Elco Aerotop T10C \[RVS61.843\] (Wärmepumpe) {BSB}

-   Elco Aquatop 8es \[RVS51.843\] (Wärmepumpe) {BSB}

-   Elco Straton 17 \[RVS63\] (Ölbrenner) {BSB}  

-   Elco Straton 21 \[RVS63.283\] (Ölbrenner) {BSB}

-   Elco Straton S \[RVS63\] (Ölbrenner) {BSB}  

-   Elco Thision 25S \[RVS63\] \] (Gasbrenner) {BSB}  

-   Elco Thision S Plus 13 \[LMS14\] (Gasbrenner) {BSB}

-   Elco Thision S Plus 19 \[LMS14\] (Gasbrenner) {BSB}  

-   Elco Thision S Plus 24 Compact \[?\] {BSB}  

-   Elco Thision S13.1 E \[LMU7x\] (Gasbrenner) {BSB}

-   Elco Thision S17.1 \[LMU74\] (Gasbrenner) {BSB}

-   Elco Thision S17.1 \[RVS63.283\] (Gasbrenner) {BSB}

-   Elco Thision S25.1 \[RSV63.283\] (Gasbrenner) + MM \[AVS75.390\] {BSB}
    
---
    
### 3.1.3 Weitere Hersteller
-   Atlantic Alféa Excellia A.I.TRI 16 \[RVS21\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Excellia Duo \[RVS21\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Extensa + \[RVS21.831\] (Wärmepumpe) {BSB}  

-   Atlantic Alféa Extensa AOYA 18 LALL / AOYA 30 LBTL \[RVS21\] (Wärmepumpe) {BSB}  

-   Austria Email LWPK 8 \[RVS21.831\] (Wärmepumpe) {BSB}

-   Baxi Luna Platinum+ \[LMS15\] (Gasbrenner) {BSB}

-   Baxi Luna Platinum+ 1.126A \[LMS15\] (Gasbrenner) {BSB}  

-   Bösch (unbekanntes Modell / unknown model) \[RVS63\] (Wärmepumpe] {BSB}  

-   CTA Optiheat 1-5es \[RVS61\] (Wäärmepumpe) {BSB}  

-   CTC 380 IC \[RVS43.143\] (Ölbrenner) {BSB}  

-   Deville 9942 \[RVA53\] (?) (PPS)  

-   Deville 9981 \[RVA53.140\] (Ölbrenner) {PPS}

-   Fröling Rendagas Plus \[RVA63.244\] (Gasbrenner) {LPB}

-   Fujitsu Waterstage Comfort 10 \[RVS21.827\] (Wärmepumpe) {BSB}  

-   Fujitsu Waterstage WSHA 050 DA \[RVS41.813\] (Wärmepumpe) {BSB}  

-   Fujitsu Waterstage WSYK 160 DC 9 \[RVS21.827\] (Wärmepumpe) {BSB}  

-   Fujitsu Waterstage WSYP 100 DG 6 \[RVS21.831\] (Wärmepumpe) {BSB}

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

Die folgende Übersicht beinhaltet Angaben der Konfigurationsparameter
6220-6228.  
Diese Parameter können i.d.R. nur via Adapter abgefragt werden!

Eine Ausnahme bei der nachfolgenden Auflistung der Reglertypen stellt
das Modell AVS75.390 dar. Hierbei handelt es sich um ein
Erweiterungsmodul (EWM) für den RVS-Reglertyp, an dem sich weitere
Fühler und Verbraucher anschließen und somit im System integrieren
lassen. Pro RVS-Regler können bis zu zwei EWM angeschlossen werden.  
Die Parametrierung und Einbindung erfolgt über den eigentlichen
RVS-Regler bzw. die eigentliche Bedieneinheit des RVS-Reglers.

Die Verbindung zwischen RVS-Regler und EWM erfolgt über den Anschluss
‚Bus EM', das EWM selbst hat keinen zusätzlichen LPB- oder
BSB-Anschluss.

Der Zugriff auf ein EWM ist somit nur indirekt über die jeweils
spezifischen Parameter möglich, die die Einstellungen und Funktionen des
EWMs definieren und beschreiben.

*Tabelle 1: Erweiterungsmodul AVS75.390*

| Geräte-Identifikation \[6224\] | Geräte-Familie \[6225\] | Geräte-Variante \[6226\] | Obj.Verz.-Version \[6227\] | Software-Version \[6220\] | BSB | LPB | PPS |
|:------------------------------:|:-----------------------:|:------------------------:|:--------------------------:|:-------------------------:|:---:|:---:|:---:|
| AVS75.390/100 (Brötje)         | \-                      | \-                       | \-                         | \-                        | \-  | \-  | \-  |
| AVS75.390/109 (Siemens)        | \-                      | \-                       | \-                         | \-                        | \-  | \-  | \-  |
| AVS75.390/260 (Elco)           | \-                      | \-                       | \-                         | \-                        | \-  | \-  | \-  |

    
    
---
    
### 3.2.1 LMx-Regler
Im Folgenden werden die Regler des Typs LMU und LMS aufgeführt. Diese
sind erfahrungsgemäß bei Gasheizungen/-thermen verbaut.
   
---
   
#### 3.2.1.1 LMU-Regler  
Regler der Serie *LMU54/LMU64* sind in älteren Systemen verbaut, sie sind nicht mehr aktuell. Diese Regler weisen erfahrungsgemäß weder einen BSB, noch einen LPB auf, lediglich eine PPS-Schnittstelle ist hier verfügbar. LPB kann (manchmal) mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden.  
Eine Nutzung von BSB-LAN mit diesen Reglermodellen ist erfahrungsgemäß nur in eingeschränktem Maße möglich. Genauere Hinweise diesbezüglich sind in [Kap. 3.4](kap03.md#34-hinweis-spezialfall-lmu54lmu64-regler) zu finden.  
   
Regler der Serie *LMU74/LMU75* scheinen die Nachfolger der LMU54/LMU64-Reglerserie zu sein und werden ebenfalls nicht mehr verbaut. Sie weisen einen BSB auf, an dem der Adapter angeschlossen wird und mittels BSB-LAN nachfolgend nahezu der komplette Funktionsumfang verfügbar ist. Lediglich vereinzelte (Spezial-)Funktionen scheinen nicht verfügbar zu sein, wie bspw. das Übermitteln einer alternativen Außentemperatur.  
   
Der LMU7x-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).  
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).  
   
*Tabelle 2: LMU-Regler*

| Geräte-Identifikation \[6224\] | Geräte-Familie \[6225\] | Geräte-Variante \[6226\] | Obj.Verz.-Version \[6227\] | Software-Version \[6220\] | BSB | LPB | PPS |
|:------------------------------:|:-----------------------:|:------------------------:|:--------------------------:|:------------------------:|:---:|:---:|:---:|
| LMU54   (?)               | ?                      | ?                      | ?                        | ?                     | \-   | \-  | &#10003;  |
| LMU64   (?)               | ?                      | ?                      | ?                        | ?                     | \-   | \-  | &#10003;  |
| LMU74   (Brötje)               | 97                      | 100                      | 2.5                        | 11.0                     | &#10003;   | \-  | \-  |
| LMU74   (Brötje)               | 97                      | 100                      | 2.9                        | 11.0                     | &#10003;   | \-  | \-  |
| LMU74   (Elco)                 | 97                      | 136                      | 0.2                        | 11.1                     | &#10003;   | \-  | \-  |
| LMU74.100A136 (Elco)           | 97                      | 136                      | 0.4                        | 11.2                     | &#10003;   | \-  | \-  |
| LMU75   (Brötje)               | 98                      | ?                        | ?                          | ?                       | &#10003;   | \-  | \-  |
   
---  
   
#### 3.2.1.2 LMS-Regler   
Regler der Serie *LMS* scheinen die Nachfolger der LMU-Serie und somit die
aktuelle Reglergeneration zu sein. Bei diesem Reglertyp ist mittels BSB-LAN erfahrungsgemäß der komplette Funktionsumfang nutzbar.  
   
Der (Funktions-)Unterschied zwischen dem LMS14 und dem LMS15
scheint in der „Sitherm Pro"-Anwendung zur Optimierung des gesamten
Verbrennungsprozesses zu liegen, die anscheinend nur die LMS15-Regler
aufweisen.

Der LMS-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).  
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).

*Tabelle 3: LMS-Regler (aktuelle Reglergeneration)*

| Geräte-Identifikation \[6224\] | Geräte-Familie \[6225\] | Geräte-Variante \[6226\] | Obj.Verz.-Version \[6227\] | Software-Version \[6220\] | BSB | LPB | PPS |
|:------------------------------:|:-----------------------:|:------------------------:|:--------------------------:|:------------------------:|:---:|:---:|:---:|
| LMS14.001A100 (Brötje)         | 162                     | 14                       | 0.1                        | 2.3                     | &#10003;   | \-  | \-  |
| LMS14.001A100 (Brötje)         | 162                     | 16                       | 0.2                        | 2.3                     | &#10003;   | \-  | \-  |
| LMS14.001A100 (Brötje)         | 162                     | 16                       | 0.3                        | 2.3                     | &#10003;   | \-  | \-  |
| LMS14.001A100 (Brötje)         | 162                     | 17                       | 0.2                        | 2.3                     | &#10003;   | \-  | \-  |
| LMS14.001B100 (Brötje)         | 162                     | 15                       | 1.4                        | 4.2                     | &#10003;   | \-  | \-  |
| LMS14.002A100 (Brötje)         | 162                     | 5                        | 1.7                        | 3.5                     | &#10003;   | \-  | \-  |
| LMS14.167B109 (MHG)            | 195                     | 1                        | 0.9                        | 4.3                     | &#10003;   | \-  | \-  |
| LMS14.002A167 (Elco)           | 203                     | ?                        | ?                          | ?                       | &#10003;   | \-  | \-  |
| LMS15.000A349 (Brötje)         | 123                     | 1                        | 0.1                        | 4.2                     | &#10003;   | \-  | \-  |
| LMS15.000A349 (Baxi)           | 163                     | ?                        | ?                          | ?                       | &#10003;   | \-  | \-  |
| LMS15.001A100 (Brötje)         | 163                     | 16                       | 0.6                        | 3.8                     | &#10003;   | \-  | \-  |

    
---
    
### 3.2.2 RVx-Regler
Im Folgenden werden die Regler des Typs RVA, RVP und RVS (aktueller
Reglertyp) aufgeführt. Diese scheinen i.d.R. bei Ölheizungen,
Wärmepumpen und verschiedenen ‚alleinstehenden' Reglern (Zonenregler,
Solarsystemregler) zum Einsatz zu kommen.
    
---
    
#### 3.2.2.1 RVA- und RVP-Regler
Regler des Typs *RVA* gehören anscheinend zur vorherigen Reglergeneration
und weisen je nach Modell nur einen PPS oder einen PPS- und LPB-Anschluss auf
(keinen BSB).  
Als Bedieneinheit ist meist eine Variante der Eurocontrol-Steuerung
(Brötje) verbaut.  
Eine Bedienung mittels BSB-LAN ist nur in deutlich geringerem Umfang als
bei der aktuellen Reglergeneration RVS möglich.

Regler des Typs *RVP* scheinen noch älter als RVA-Regler zu sein und
weisen lediglich eine PPS-Schnittstelle auf.  
Der Bedienungsumfang mittels BSB-LAN ist bei diesem Reglertyp nur in
eingeschränktem Umfang möglich.

*Tabelle 4: RVA- und RVP-Regler (alte Reglergenerationen)*

| Geräte-Identifikation \[6224\] | Geräte-Familie \[6225\] | Geräte-Variante \[6226\] | Obj.Verz.-Version \[6227\] | Software-Version \[6220\] | BSB | LPB | PPS |
|:------------------------------:|:-----------------------:|:------------------------:|:--------------------------:|:------------------------:|:---:|:---:|:---:|
| RVA53.140/100 (Brötje)           | ?                      | ?                      | ?                      | ?                     | \-   | \-  | &#10003;  |
| RVA63.242/? (Brötje)           | 28                      | 100                      | 302.0                      | 2.5                     | \-   | &#10003;  | &#10003;  |
| RVA63.242/? (Brötje)           | 28                      | 109                      | 302.0                      | 3.6                     | \-   | &#10003;  | &#10003;  |
| RVP54.100/? (Sieger)           | ?                       | ?                         | ?                          | ?                       | \-   | \-  | &#10003;  |

    
---
    
#### 3.2.2.2 RVS-Regler
Regler des Typs *RVS* scheinen die ‚aktuelle' Reglergeneration
darzustellen und werden i.d.R. von BSB-LAN vollständig unterstützt.
Sie weisen meist sowohl einen LPB-, als auch mehrere BSB-Anschlüsse
auf.  
Ausnahmen scheinen die Regler der Reihen RVS21, RVS51, RVS61 und RVS23 zu sein.  
RVSx1-Regler kommen bei Wärmepumpen zum Einsatz und scheinen nur einen BSB aufzuweisen.  
RVS23-Regler kommen bei einer bestimmten Weishaupt-Modellreihe (WTU) zum Einsatz und scheinen nur einen LPB aufzuweisen. Bei Weishaupt scheinen diese Regler als "WRS-CPU-Bx" bezeichnet zu werden. Weitere Hinweise zu diesem Reglermodell finden sich in [Kap. 3.5](kap03.md#35-hinweis-spezialfall-weishaupt-geräte).  
     
Als Bedieneinheit kommt hier i.d.R. eine Variante des Siemens AVS37.294
zum Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).

*Tabelle 5: RVS-Regler (aktuelle Reglergeneration)*  

| Geräte-Identifikation \[6224\] | Geräte-Familie \[6225\] | Geräte-Variante \[6226\] | Obj.Verz.-Version \[6227\] | Software-Version \[6220\] | BSB | LPB | PPS |
|:------------------------------:|:-----------------------:|:------------------------:|:--------------------------:|:------------------------:|:---:|:---:|:---:|
| RVS21.825E/100 (Brötje)          | 205                     | 100                      | 301.2                      | 7.2                     | &#10003;   | \-  | \-  |
| RVS21.827/127 (Fujitsu)          | 170                     | ?                        | ?                          | ?                       | &#10003;   | \-  | \-  |
| RVS21.831F/127 (Fujitsu)         | 211                     | 127                      | 402.1                      | 8.3                     | &#10003;   | \-  | \-  |
| RVS21.831F/127 (Atlantic Fujitsu)| 211                     | 127                      | 402.4                      | 8.5                     | &#10003;   | \-  | \-  |
| RVS23.220/320 (Weishaupt)        | 50                      | ?                        | ?                          | ?                       | \-  | &#10003;   | \-  |
| RVS43.122/? (Brötje)             | 95                      | ?                        | ?                          | ?                       | &#10003;   | &#10003;   | \-  |
| RVS43.143/110 (CTC)              | 103                     | 110                      | 100.5                      | 3.4                     | &#10003;   | &#10003;   | \-  |
| RVS43.222/100 (Brötje)           | 96                      | 100                      | 1.0                        | 1.3                     | &#10003;   | &#10003;   | \-  |
| RVS43.325/100 (Brötje)           | 138                     | 100                      | 100.0                      | 2.3                     | &#10003;   | &#10003;   | \-  |
| RVS46.530/100 (Brötje)           | 107                     | 100                      | 100.5                      | 3.4                     | &#10003;   | &#10003;   | \-  |
| RVS51.843/169 (Elco)             | 85                      | ?                        | ?                          | ?                       | &#10003;   | &#10003;   | \-  |
| RVS61.843E/100 (Brötje)          | 108                     | 100                      | 301.0                       | 11.0                     | &#10003;   | &#10003;   | \-  |
| RVS61.843E/160 (Elco)            | 108                     | 160                      | 2.5                        | 11.0                     | &#10003;   | &#10003;   | \-  |
| RVS61.843E/560 (Elco)            | 108                     | 217                      | 301.2                      | 11.1                     | &#10003;   | &#10003;   | \-  |
| RVS63.283/100 (Brötje)           | 90                      | ?                        | ?                          | ?                       | &#10003;   | &#10003;   | \-  |
| RVS63.283/109 (Siemens)          | 90                      | 109                      | 101.4                      | 3.4                     | &#10003;   | &#10003;   | \-  |
| RVS63.283/160 (Elco)             | 90                      | 160                      | 101.6                      | 3.5                     | &#10003;   | &#10003;   | \-  |
| RVS63.283/200 (Brötje)           | 90                      | 239                      | 101.4                      | 3.4                     | &#10003;   | &#10003;   | \-  |
| RVS63.283/360 (Elco)             | 90                      | 234                      | 101.6                      | 3.5                     | &#10003;   | &#10003;   | \-  |
| RVS63.283/460 (Elco)             | 90                      | ?                        | ?                          | ?                       | &#10003;   | &#10003;   | \-  |
| RVS65.583/200 (Brötje)           | 116                     | 239                      | 101.4                      | 3.3                     | &#10003;   | &#10003;   | \-  |
    
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
Das QAA75 ist das ‚große‘ ISR-Raumgerät. Es weist neben dem integrierten Temperaturfühler den vollen Funktionsumfang der kesselseitigen Bedieneinheit auf. Zusätzlich ist eine Präsenztaste vorhanden, ein manueller TWW-Push kann bei Bedarf i.d.R. durch längeres Drücken der TWW-Betriebsarttaste ausgelöst werden.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA75.jpg">  
   
*Das QAA75.61x Raumgerät.*  
   
Das QAA75.61x heißt bei Brötje „Raumgerät RGT“, manchmal ist es auch als „Raumgerät RGT B Top“, „ISR RGT“ o.ä. zu finden.  
Es wird ebenfalls per Kabel am BSB angeschlossen, wobei ein dritter Anschluss für die optional nutzbare Hintergrundbeleuchtung vorhanden ist (Klemme „G+“ am Regler).  
  
Das QAA78.61x ist die Funkvariante des QAA75.61x. Es ist batteriebetrieben, der Funkempfänger AVS71.390 (Frequenz 868 MHz) muss wiederum per Kabel am Anschluss X60 des Kesselreglers angeschlossen werden. Die oben genannte Bezeichnung „RGT“ wird bei Brötje um ein „F“ erweitert, also „RGTF“.  
   
An dieser Stelle muss zusätzlich erwähnt werden, dass es offenbar zwei verschiedene Ausführungen des QAA75 gibt: Das QAA75.61x als bisher gängiges Raumgerät und ein optisch nicht identisches QAA75.91x. Das QAA75.91x scheint im Bedienungsumfang identisch zum QAA75.61x zu sein, jedoch nur bei bestimmten Modellreihen einiger Hersteller (bspw. Brötje WMS/WMC C, BMK B, BMR B und Baxi Luna Platinum+) zum Einsatz zu kommen. Es scheint die 'heizungsseitige' Bedieneinheit zu sein, die jedoch mittels eines Adapters (Brötje: "ISR RGA") zusätzlich als Raumgerät genutzt werden kann. Die Bedienung der Heizung erfolgt in dem Fall weiterhin über diese Komponente, nur mit dem Vorteil, dass man sie im Wohnbereich installieren und sich ein zusätzliches Raumgerät sparen kann.     
   
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
    

