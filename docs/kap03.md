[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 2](kap02.md)    
    
---
    

    

# 3. Unterstützte Heizungssysteme und Regler #

Prinzipiell unterstützt BSB-LAN von der Firma SIEMENS hergestellte
(Heizungs-)Regler, die einen BSB und/oder LPB aufweisen. Diese werden
von verschiedenen Heizungsherstellern ‚gebrandet' und verbaut.

***ACHTUNG:  
Aus aktuellem Anlass sei bereits hier darauf hingewiesen, dass die
Heizungshersteller offensichtlich eine neue Heizungs- und
Reglergeneration auf den Markt gebracht haben, die nach bisherigem
Wissensstand NICHT kompatibel mit BSB-LAN ist (s. Kap. [3.3](kap03.md#33-hinweis-neue-modellgeneration---nicht-unterstützter-regler-von-brötje))!***
    
---
    
## 3.1 Erfolgreich getestete Heizungssysteme ##

Im Folgenden findest du eine Auflistung derjenigen Heizungssysteme und
Regler, bei denen von einem erfolgreichen Einsatz des Adapters berichtet
wurde. Da jedoch nicht jeder sein Heizungssystem, den verbauten Regler
und die Ausgabe der Parameterabfrage `http://<IP-Adresse>/6220-6235`
meldet, ist davon auszugehen, dass in der Praxis noch weitere Systeme
erfolgreich mit dem BSB-LPB-LAN-Adapter und der BSB-LAN-Software
betrieben werden (können).

Bei den (aktuelleren) Reglern kann i.d.R. grundsätzlich zwischen zwei
Reglertypen unterschieden werden: Regler des Typs RVS und LMx. Diese
zwei Typen unterscheiden sich u.a. in der Anschlussvielfalt und einigen
verfügbaren Parametern. Weitere Angaben sind im entsprechenden Kapitel
zu finden.
    
***Hinweis und Bitte:***  
*Um die Liste vervollständigen zu können und anderen möglichen Nutzern
den Einstieg zu erleichtern, sei hier nochmals ausdrücklich auf die
Bitte hingewiesen, ein noch nicht aufgeführtes Heizungssystem und/oder
einen noch nicht aufgeführten Regler unter Angabe der genauen
Herstellerbezeichnung sowie der Ausgabe der Parameterabfrage
`http://<IP-Adresse>/6220-6235` (via Adapter!) und der verwendeten
Anschlussart (BSB/LPB/PPS) zu melden.  
Danke!*

Beispielausgabe einer solchen Abfrage bei einer „Brötje NovoCondens SOB
26C" (hier nur die Darstellung der Abfrage /6220-6228, bitte aber /6220-6235 abfragen und rückmelden!):
    
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
    
### 3.1.1 Brötje ###

-   Brötje BBK 22E \[LMS14\] (Gasbrenner)

-   Brötje BBK 22F \[LMS14\] (Gasbrenner)

-   Brötje BBS Pro Evo 15C \[LMU74\] (Gasbrenner)

-   Brötje BSK 20 \[LMS14\] (Gasbrenner)

-   Brötje EcoCondens BBS 15E \[LMS14\] (Gasbrenner)

-   Brötje EcoCondens BBS 20E \[LMS14\] (Gasbrenner)

-   Brötje EcoCondens BBS 28C \[LMU7\] (Gasbrenner)

-   Brötje EcoCondens BBS EVO 20G \[LMS15\] (Gasbrenner)

-   Brötje EcoTherm Kompakt WMS 12 \[LMS 15\] (Gasbrenner)

-   Brötje EcoTherm Kompakt WMS 24 \[LMS 15\] (Gasbrenner)
-   Brötje EcoTherm Plus BBS2N.28 \[LMU 64\] (Gasbrenner) (mittels OCI420 via LPB!)
-   Brötje EcoTherm Plus WGB2N.20 \[LMU 64\] (Gasbrenner) (mittels OCI420 via LPB!)

-   Brötje ISR-SSR \[RVS63.283\] (Solarsystemregler)

-   Brötje ISR-ZR1, ZR2 \[RVS46.530\] (Zonenregler)

-   Brötje LogoBloc Unit L-UB 25C \[RVS43.122\] (Ölbrenner)

-   Brötje NovoCondens BOB 20 \[RVS43.325\] (Ölbrenner)

-   Brötje NovoCondens SOB 26 \[RVA63.242\] (Ölbrenner)

-   Brötje NovoCondens SOB 22C \[RVS43.222\] (Ölbrenner)

-   Brötje NovoCondens SOB 26C \[RVS43.222\] (Ölbrenner) + EWM
    \[RVS75.390\]

-   Brötje NovoCondens WOB 20D \[RVS43.325\] (Ölbrenner)

-   Brötje SensoTherm BLW 12B \[RVS21.825\] (Wärmepumpe)

-   Brötje SensoTherm BLW 15B \[RVS21.825\] (Wärmepumpe)

-   Brötje SensoTherm BSW-K \[RVS61.843\] (Wärmepumpe)

-   Brötje TrioCondens BGB 20E \[LMS14\] (Gasbrenner)

-   Brötje WBS 14D \[LMU74\] (Gasbrenner)

-   Brötje WBS 14F \[LMS14\] (Gasbrenner)

-   Brötje WBS 22E \[LMS14\] (Gasbrenner)

-   Brötje WGB 15E \[LMS14\] (Gasbrenner)

-   Brötje WGB 20C \[LMU74\] (Gasbrenner)

-   Brötje WGB-C 20/24H \[LMS14\] (Gasbrenner)

-   Brötje WGB EVO 20H \[LMS15\] (Gasbrenner)
-   Brötje WGB EVO 15I \[LMS15\] (Gasbrenner)

-   Brötje WGB Pro EVO 20C \[LMU75\] (Gasbrenner)

-   Brötje WGB S 17/20E EcoTherm Plus \[LMS14\] (Gasbrenner)

-   Brötje WGB-U 15H \[LMS14\] (Gasbrenner)

***ACHTUNG:  
Die neuen Modellreihen Brötje WLS/WLC und
BOK sind NICHT mit BSB-LAN kompatibel!***
    
---
    
### 3.1.2 Elco ###

-   Elco Aerotop G07-14 \[RVS61.843\] (Wärmepumpe)
-   Elco Aerotop T07-16 \[RVS61.843\] (Wärmepumpe)

-   Elco Aerotop T10C \[RVS61.843\] (Wärmepumpe)

-   Elco Aquatop 8es \[RVS51.843\] (entspricht CTA Optihead OH1-8es)
    (Wärmepumpe)

-   Elco Straton 21 \[RVS63.283\] (Ölbrenner)

-   Elco Thision S Plus 13 \[LMS14\] (Gasbrenner)

-   Elco Thision S13.1 E \[LMU7x\] (Gasbrenner)

-   Elco Thision S17.1 \[LMU74\] (Gasbrenner)

-   Elco Thision S17.1 \[RVS63.283\] (Gasbrenner)

-   Elco Thision S25.1 \[RSV63.283\] (Gasbrenner) + MM \[AVS75.390\]
    
---
    
### 3.1.3 Weitere Hersteller ###

-   Atlantic Alféa Extensa + \[RVS21.831\] (Wärmepumpe)
-   Austria Email LWPK 8 \[RVS21.831\] (Wärmepumpe)

-   Baxi Luna Platinum+ \[LMS15\] (Gasbrenner)

-   CTC 380 IC \[RVS43.143\] (Ölbrenner)

-   Fujitsu Waterstage Comfort 10 \[RVS21.827\] (Wärmepumpe)
-   Fujitsu Waterstage WSHA 050 DA \[RVS41.813\] (Wärmepumpe)
-   Fujitsu Waterstage WSYK 160 DC 9 \[RVS21.827\] (Wärmepumpe)

-   Fujitsu Waterstage WSYP 100 DG 6 \[RVS21.831\] (Wärmepumpe)

-   MHG Procon E 25 HS \[LMS14\] (Gasbrenner)

-   Sieger TG11 \[RVP54.100\] (Ölbrenner)

-   Weishaupt WTU-25 G mit WRS-CPU B2/E \[RVS23.220\] (Ölbrenner)
    
---
    
## 3.2 Detailliertere Auflistung und Beschreibung der unterstützten Regler ##

Die folgende Reglerauflistung und -beschreibung soll u.a. einen kurzen
Überblick über die bereits von BSB-LAN unterstützten Geräte und deren
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

    
***Hinweis:  
Im Folgenden nicht aufgeführte Regler bitte wie in Kap. [10](kap10.md) beschrieben auslesen und melden.
Danke!***
    
---
    
### 3.2.1 LMx-Regler ###

Im Folgenden werden die Regler des Typs LMS und LMU aufgeführt. Diese
sind erfahrungsgemäß bei Gasheizungen/-thermen verbaut.

Regler der Serie LMS scheinen die Nachfolger der LMU-Serie und somit die
aktuelle Reglergeneration zu sein.  
Der (Funktions-)Unterschied zwischen dem LMS14 und dem LMS15
scheint in der „Sitherm Pro"-Anwendung zur Optimierung des gesamten
Verbrennungsprozesses zu liegen, die anscheinend nur die LMS15-Regler
aufweisen.

Der LMx-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden.  
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).

*Tabelle 2: LMS- und LMU-Regler*

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
| LMU74   (Brötje)               | 97                      | 100                      | 2.5                        | 11.0                     | &#10003;   | \-  | \-  |
| LMU74   (Brötje)               | 97                      | 100                      | 2.9                        | 11.0                     | &#10003;   | \-  | \-  |
| LMU74   (Elco)                 | 97                      | 136                      | 0.2                        | 11.1                     | &#10003;   | \-  | \-  |
| LMU74.100A136 (Elco)           | 97                      | 136                      | 0.4                        | 11.2                     | &#10003;   | \-  | \-  |
| LMU75   (Brötje)               | 98                      | ?                        | ?                          | ?                       | &#10003;   | \-  | \-  |
    
---
    
### 3.2.2 RVx-Regler ###

Im Folgenden werden die Regler des Typs RVA, RVP und RVS (aktueller
Reglertyp) aufgeführt. Diese scheinen i.d.R. bei Ölheizungen,
Wärmepumpen und verschiedenen ‚alleinstehenden' Reglern (Zonenregler,
Solarsystemregler) zum Einsatz zu kommen.
    
---
    
#### 3.2.2.1 RVA- und RVP-Regler ####

Regler des Typs RVA gehören anscheinend zur vorherigen Reglergeneration
und weisen je nach Modell nur einen LPB- und/oder PPS-Anschluss auf
(keinen BSB).  
Als Bedieneinheit ist meist eine Variante der Eurocontrol-Steuerung
(Brötje) verbaut.  
Eine Bedienung mittels BSB-LAN ist nur in deutlich geringerem Umfang als
bei der aktuellen Reglergeneration RVS möglich.

Regler des Typs RVP scheinen noch älter als RVA-Regler zu sein und
weisen lediglich eine PPS-Schnittstelle auf.  
Der Bedienungsumfang mittels BSB-LAN ist bei diesem Reglertyp nur in
sehr eingeschränktem Umfang möglich.

*Tabelle 3: RVA- und RVP-Regler (alte Reglergenerationen)*

| Geräte-Identifikation \[6224\] | Geräte-Familie \[6225\] | Geräte-Variante \[6226\] | Obj.Verz.-Version \[6227\] | Software-Version \[6220\] | BSB | LPB | PPS |
|:------------------------------:|:-----------------------:|:------------------------:|:--------------------------:|:------------------------:|:---:|:---:|:---:|
| RVA63.242/? (Brötje)           | 28                      | 100                      | 302.0                      | 2.5                     | &#10003;   | \-  | \-  |
| RVA63.242/? (Brötje)           | 28                      | 109                      | 302.0                      | 3.6                     | &#10003;   | \-  | \-  |
| RVP54.100/? (Sieger)           | ?                       | ?                         | ?                          | ?                       | &#10003;   | \-  | \-  |

    
---
    
#### 3.2.2.2 RVS-Regler ####

Regler des Typs RVS scheinen die ‚aktuelle' Reglergeneration
darzustellen und werden i.d.R. von BSB-LAN vollständig unterstützt.
Sie weisen häufig sowohl einen LPB-, als auch mehrere BSB-Anschlüsse
auf.  
Eine Ausnahme scheinen die Regler der Reihe RVS21 zu sein, die bei
Fujitsu-Wärmepumpen zum Einsatz kommen: Diese scheinen nur einen BSB
aufzuweisen.  
Bei Gasgeräten kommen RVS-Regler anscheinend nur zum Einsatz, wenn bspw.
ein Solarthermie-Paket mitinstalliert wurde (Beispiel bei einer „Elco
Thision S17.1": LMU74-Regler bei Installation ohne Solarthermie,
RVS63.283-Regler bei Installation mit Solarthermie).  
Als Bedieneinheit kommt dabei i.d.R. eine Variante des Siemens AVS37.294
zum Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).

*Tabelle 4: RVS-Regler (aktuelle Reglergeneration)*  

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
| RVS46.530/100 (Brötje)           | 107                     | 100                      | 100.5                      | 3.4                     | \-  | &#10003;   | \-  |
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
    
## 3.3 Hinweis: Neue Modellgeneration - NICHT unterstützter Regler von Brötje ##

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
    
*Anschlüsse des neuen Reglertyps einer Brötje WLC24 - inkompatibel mit BSB-LAN!*     
    
    
Neben einer Servicebuchse (vermutlich IWR CAN) sind dort ein nicht
weiter dokumentierter ‚L-Bus' und ein ‚R-Bus' zugänglich.  
Am ‚R-Bus' (Raumgeräte-Bus) kann bei Bedarf entweder ein Raumthermostat
(On/Off), ein entsprechendes QAA-Raumgerät oder das neue ‚smarte'
Raumgerät „Brötje IDA" angeschlossen werden.

***ACHTUNG: An keinem dieser Anschlüsse ist der BSB-LPB-LAN-Adapter anschließbar!***

       
    
---
    

     
[Weiter zu Kapitel 4](kap04.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    
###### *&copy; Ulf Dieckmann*

