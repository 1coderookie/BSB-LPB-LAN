[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 9](kap09.md)    
    
---

# 10. Exkurs: Heizungsregler und Zubehör

In den folgenden Kapiteln werden die verschiedenen Heizungsregler sowie deren Bussysteme und Zubehör vorgestellt. Es ist empfehlenswert, zumindest die Kapitel über die Bussysteme und den spezifischen Regler des Wärmeerzeugers zu lesen, an den das BSB-LAN Setup angeschlossen werden soll. 

Prinzipiell unterstützt BSB-LAN von der Firma SIEMENS hergestellte
(Heizungs-)Regler, die einen BSB und/oder LPB aufweisen. Diese werden
von verschiedenen Heizungsherstellern ‚gebrandet' und verbaut.
   
*Klarstellung:*  
*Wann immer ich von "Regler" spreche, dann meine ich die sog. "BMU" (boiler management unit). Das ist das Gerät im Inneren des Gehäuses des Wärmeerzeugers, das die Funktionsweise des Wärmeerzeugers steuert und an dem die Sensoren, Pumpen, die Bedieneinheit und die Raumgeräte angeschlossen sind.  
Die 'Bedieneinheit' und die Raumgeräte hingegen sind die Komponenten, die außerhalb des Gehäuses angebracht und mit einem Display und Knöpfen zur Bedienung des Wärmeerzeugers ausgestattet sind.*  
   
Hinweise:  
Die folgende Aufzählung der verschiedenen Reglertypen mag im ersten Moment ein wenig verwirrend erscheinen, doch im Grunde kann man sich eine vereinfachte Regel merken:   
Wenn die Reglerbezeichnung mit einem "S" endet (RVS und LMS), dann gehört der Regler zur 'aktuellen' Generation.  
Die Gerätefamilie LMS ist dabei die Modellreihe für Gasgeräte, alle anderen Systeme nutzen RVS-Regler.    
Je größer die darauffolgende Nummer in der Reglerbezeichnung ist, desto 'größer' vom (internen) Funktionsumfang her und meist auch hinsichtlich der Anzahl der Anschlüsse ist das jeweilige Modell.  
Je nach 'Größe', Typ und vorgesehenem Verwendungsumfang sind somit auch unterschiedliche Parameter verfügbar.   
      
***ACHTUNG:  
Aus aktuellem Anlass sei bereits hier darauf hingewiesen, dass die
Heizungshersteller offensichtlich eine neue Heizungs- und
Reglergeneration auf den Markt gebracht haben, die nach bisherigem
Wissensstand NICHT kompatibel mit BSB-LAN ist (s. Kap. [10.2.3](kap10.md#1023-hinweis-inkompatible-systeme-von-brötje-und-elco))!***
    
---

## 10.1 Bussysteme der Heizungsregler: BSB, LPB, PPS

Bei BSB (Boiler System Bus), LPB (Local Process Bus) und PPS (Point-to-Point Schnittstelle) handelt es sich um jeweils verschiedene und untereinander nicht kompatible Bussysteme bzw. Schnittstellen. Es können also jeweils nur Geräte angeschlossen werden, die den gleichen Bus- bzw. Schnittstellen-Typ aufweisen.  
  
**BSB (Boiler System Bus)** und **LPB (Local Process Bus)** sind zwei
verschiedene "echte" Bussysteme, die sich vereinfacht in zwei Nutzungsklassen
unterscheiden lassen:
- Der BSB ist im Grunde ein 'Regler-lokaler' Bus, er kommt bei einem Regler und 'direktem' Zubehör wie bspw. Bedieneinheit, Raumgerät, Erweiterungsmodul zum Einsatz.
- Der LPB ist im Grunde ein 'Regler-übergreifender' Bus, er kommt zum Einsatz, wenn mehrere Regler mit einander verbunden werden sollen (bspw. bei einer Koppelung vo mehreren Wärmeerzeugern, um eine Kaskadenschaltung zu realisieren).

*Beispiel:*  
Vorhanden sind eine Öl- oder Gasheizung, ein nachgerüsteter
wasserführender Kamin und eine thermische Solaranlage zur Unterstützung
des Heizkreises oder der Warmwasserbereitung.
Alle drei Wärmeerzeuger sind hydraulisch an einem Pufferspeicher
angeschlossen.
Die Wärme für den Heizkreis soll vom Pufferspeicher bezogen werden.
Die Regelung der Solaranlage und des Feststoffkessels übernimmt ein
Solarsystemregler (SSR), die Kesselsteuerung der Heizung übernimmt in
diesem Beispiel der interne Heizungsregler. Alle Sensoren, Pumpen,
Mischer etc. sind am SSR angeschlossen, welcher jedoch via LPB mit dem
Heizungsregler verbunden ist. Durch diese Verbindung der beiden Regler
kann somit bspw. eine Pufferspeicherladung geregelt werden, bei der die
Heizung nur aktiv wird, wenn weder Solar noch Feststoffkessel den Puffer
laden / geladen haben.

*Wenn das BSB-LAN Setup via BSB an einem der beiden Regler aus oben genanntem
Beispiel angeschlossen ist, kann er nur auf den jeweiligen
Regler 'lokal' zugreifen, an dem er angeschlossen ist (also bspw.
Heizungsregler oder SSR). Pro Regler muss in dem Fall ein BSB-LAN Setup am jeweiligen BSB angeschlossen werden, wenn Zugriff auf beide Regler gewünscht ist.  
  
*Wenn ein Adapter via LPB an einem der beiden Regler aus oben genanntem
Beispiel angeschlossen ist, müssen*  
*1. die Geräte- und Segmentadressen entsprechend der
LPB-Konfigurationsanforderungen eingestellt werden, und*  
*2. beim Adapter eine Zieladresse eingestellt werden, an die die
jeweiligen Anfragen des Adapters geschickt werden.*   

**PPS (Point-to-Point-Schnittstelle)** hingegen ist kein "echter" Bus, es können also nicht mehrere Teilnehmer mit spezifischen Adressen angeschlossen werden. PPS ist eher (wie der Name schon sagt) eine Schnittstelle, um ein weiteres Gerät (i.d.R. ein Raumgerät) anzuschließen.  

Bei allen in diesem Handbuch aufgezählten (aktuellen) Reglern des Typs RVS, LMS1x und LMU7x ist ein BSB-Anschluss am Regler zu finden. 
Ein LPB ist standardmäßig nur bei Reglern des Typs RVS (nur Modellreihen 4x und 6x, Ölheizungen und SolarSystemRegler) vorhanden. Bei Reglern des Typs RVS21 (Wärmepumpen), LMS14/15 sowie LMU74/75 (Gasheizungen) ist ein LPB i.d.R. mittels eines ClipIn-Moduls nachrüstbar (s. [Kap. 10.2.6](kap10.md#1026-lpb-nachrüsten-mittels-oci420-clipin-modul)).  
PPS ist nur bei alten Reglern vorzufinden und wird heutzutage nicht mehr verbaut.  
  
    
---
    
### 10.1.1 BSB 

Der BSB (Boiler System Bus) ist im Grunde ein ‚lokaler' Bus. Mit 'lokal' meine ich in diesem Fall den spezifischen Regler, der im Wärmeerzeuger zum Einsatz kommt.  
  
An den BSB werden bspw. die Bedieneinheit, Raumgeräte und Erweiterungsmodule angeschlossen. Diese Geräte haben dann 'lokal' Zugriff auf den Regler. Schließt man das BSB-LAN Setup an den BSB an, so hat man aufgrund der eindeutigen Adressierung Zugriff auf alle Busteilnehmer dieses Reglers.  
  
Der BSB ist bei den im Folgenden vorgestellten Reglern des Typs RVS, LMS1x sowie LMU7x vorhanden. Sollte dein Regler einen BSB- *und* einen LPB-Anschluss aufweisen und kein weiterer Regler via LPB (bspw. eines weiteren Wärmeerzeugers bei einer Kaskadenschaltung, ein Solaranlagenregler o.ä.) und möchtest du nur Zugriff auf diesen einen Regler, dann ist der Anschluss des BSB-LAN Setups an den BSB-Anschluss empfehlenswert.  
  
**Adressierung beim BSB**  
Beim BSB wird aufgrund des Bussystems jedem Teilnehmer eine spezifische Adresse zugeteilt. Folgende Adressen sind bereits festgelegt:  
   
| Bus-Adresse | Geräteadresse | Gerät (Bezeichnung im Seriellen Monitor) |
|:-----------:|:-------------:|:------------------------:|
| 0x00 | 0 | Heizungsregler („HEIZ“) |  
| 0x03 | 3 | Erweiterungsmodul 1 („EM1“) / Mischer-ClipIn AGU |  
| 0x04 | 4 | Erweiterungsmodul 2 („EM2“) / Mischer-ClipIn AGU | 
| 0x06 | 6 | Raumgerät 1 („RGT1“: QAA55, QAA75, IDA) | 
| 0x07 | 7 | Raumgerät 2 („RGT2“: QAA55, QAA75) | 
| 0x08 | 8 | Raumgerät 3/P und/oder OCI700 Servicetool („RGT3“) | 
| 0x0A | 10 | reglerseitige Bedieneinheit / Display 1 („DSP1“) | 
| 0x0B | 11 | Servicegerät (QAA75 als Servicegerät parametriert) („SRVC“) | 
| 0x0C | 12 | reglerseitige Bedieneinheit / Display 2 („DSP2“) | 
| 0x0D | 13 | reglerseitige Bedieneinheit / Display 3 („DSP3“) | 
| 0x31 | 49 | OZW672 Webserver | 
| 0x32 | 50 | (vermutlich) Funkempfänger („FUNK“) | 
| 0x36 | 54 | Remocon Net B („REMO") |  
| **0x42** |  **66** | **BSB-LPB-LAN-Adapter („LAN“)** |  
| 0x7F | 127 | Broadcast („INF“-Meldungen) |   
   
Dem BSB-LAN Adapter wird in der Voreinstellung die Busadresse `0x42` zugeteilt, was der BSB-Adresse 66 entspricht. Die Adresse wird in der Datei `BSB_LAN_config.h` festgelegt.  

---

### 10.1.2 LPB

Der LPB (Local Process Bus) ist ein ‚übergreifender' Bus zur Nutzung mehrerer angeschlossener
Regler in einem komunikationsfähigen Verbund.  
   
Über den LPB können mehrere Regler miteinander verbunden werden und bei
korrekter Parametrierung gewisse Werte miteinander teilen bzw. sich gegenseitig
beeinflussen.  
Auf diese Weise kann bspw. eine Kaskadenschaltung von mehreren Brennern
realisiert werden oder eine Gas- oder Öl-Heizung mit einer Solaranlage
und einem Feststoffkessel regelungstechnisch 'verbunden' werden.  
Der korrekte Anschluss der einzelnen Komponenten sowie die korrekte
Parametrierung der jeweiligen Regler sollte im Normalfall bereits bei
der Installation der Anlage durch den Heizungsinstallateur erfolgt
sein.  
  
Eine übergreifende Abfrage von Werten oder Parametern zweier oder mehrerer Regler im LPB-Verbund via BSB-LAN Setup kann durch Hinzufügen der spezifischen Adresse des Busteilnehmers erfolgen.  
   
Die spezifischen technischen Daten, Leistungsmerkmale und Anforderungen
an entsprechende Installationen und Parametrierungen hinsichtlich der
Geräte- und Segmentadressen sind den jeweiligen technischen
Dokumentationen der Hersteller zu entnehmen. 
Da die teilweise doch recht komplexe Installation i.d.R. bereits bei der Installation vom jeweiligen Monteur vorgenommen wird, wird an dieser Stelle nicht auf weitere Besonderheiten eingegangen.  
Dem interessierten Anwender seinen an dieser Stelle insbesondere zwei Dokumente von „Siemens Building Technologies - Landis & Staefa Division“ empfohlen:  
- CE1N2030D Local Process Bus LPB Systemgrundlagen  
- CE1N2032D Local Process Bus LPB Projektierungsgrundlagen   
  
**Adressierung beim LPB**  
Beim LPB ist die Adressierung anders als beim BSB. Prinzipiell gibt es verschiedene Segmente (bzw. Segmentadressen) und Geräteadressen. Den Segmentadressen kommt eine andere Bedeutung zu, als den Geräteadressen.  
In diesem Zusammenhang sei lediglich darauf hingewiesen, dass zusätzlich zu diesem Unterschied auch die jeweiligen Adressvergaben selbst beim LPB anders gestaltet sind. Bei der Busadresse `0x00` beispielsweise ist die erste Ziffer hinter dem x die Segmentadresse 0 (also 0=0, 1=1 etc.), die zweite 0 hingegen ist Busadresse des Gerätes plus eins (also 0=1, 1=2 etc.).   
   
Beispiel:  
Das Gerät im obigen Beispiel `0x00` befindet sich im Segment 0 mit der Adresse 1.  
Die bei BSB-LAN in der Datei `BSB_LAN_config.h` voreingestellte Adresse `0x42` bedeutet somit, dass der Adapter im Segment 4 mit der Adresse 3 angemeldet wird.  
    
---  
    
### 10.1.3 PPS-Schnittstelle

Die PPS-Schnittstelle findet sich bei *älteren* Reglern und stellt eine
Punkt-zu-Punkt-Schnittstelle dar, mittels derer digitale 
Bedieneinheiten/Raumgeräte wie das [QAA70](kap10.md#1056-qaa50--qaa70) angeschlossen werden
können. An demjenigen Anschluss wird analog zum QAA auch der Adapter
angeschlossen. Die Anschlüsse sind dem jeweiligen Handbuch zu entnehmen, 
häufig sind dies jedoch die Pins "A6" und "MD" (oder auch "M") (in dem Fall dann "A6" → CL+ und "M"/"MD" → CL-).  
       
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVA53_back.jpg">
    
*Die Anschlüsse "A6" und "MD" bei einem Siemens RVA53 Regler.*  

PPS scheint bei folgenden Reglern zum Einsatz gekommen zu sein (siehe 
„Siemens Raumgerät QAA70 Basisdokumentation“, CE1P1638D): RVP
digital Serie D, RVP54..., ALBATROS RVA..., LGM11...; bzw. u.a. bei
folgenden Heizungen: Brötje BBS/WGB 2N, Weishaupt WRD 0.2 / 1.1,
Sieger TG11 (mit Siegermatic S42DB), Olymp THR 5-25C, Schäfer Interdomo
(mit DomoCommand DC 225).  
Bei den ‚Bedieneinheiten‘/Reglern handelt es sich (bei Brötje) vermutlich 
meist um Eurocontrol-Varianten, manchmal auch um Eurotronic-Varianten 
(anscheinend NICHT Eurotronic A, nur Eurotronic D aufwärts). *Als Hinweis 
kann die Anschlussmöglichkeit einer [QAA70](kap10.md#1056-qaa50--qaa70)-Raumeinheit überprüft werden - 
ist diese anschließbar, so sollte auch der Anschluss des Adapters möglich sein.*

Die beiden Geräte (Raumgerät und Regler) kommunizieren nur bedingt
miteinander. Der Regler sendet Infos, schickt dann später mit einem
einzigen Byte (0x17) eine Anforderung an das Raumgerät, das dann
teilweise auf vorhergehende Regler-Infos reagiert, andererseits aber
auch nach eigenem Rhythmus seine Infos sendet. Und das teilweise in
unterschiedlicher Häufigkeit.
Der Bus kommt so kaum zur Ruhe, i.d.R. werden bis zu zwei Telegramme pro
Sekunde ausgetauscht, entsprechend schnell muss die Software dann auch
antworten. Kommt auf bestimmte Anfragen des Reglers keine oder nicht die
richtige Antwort, wird angenommen, dass es kein Raumgerät mehr gibt und
der Regler verfällt wieder in einen Suchmodus.

Der Funktionsumfang ist hierbei nur rudimentär und beschränkt sich
derzeit mittels BSB-LAN derzeit auf etwa ein Dutzend Parameter, die man
lesen/schreiben kann (*Anm.: Die folgende Auflistung ist u.U. nicht komplett - ausschlaggebend ist Kategorie "PPS-Bus" im Webinterface und die von Regler unterstützten Parameter!*):

- Raumtemperatur Ist  
- Raumtemperatur Soll  
- Außentemperatur (read-only)  
- Außentemperatur gemischt (read-only)  
- Position Drehknopf  
- Kesselvorlauftemperatur (read-only) 
- Mischervorlauftemperatur (read-only)  
- Status Trinkwasserbetrieb (read-only)  
- Trinkwassertemperatur Ist (read-only)  
- Trinkwassertemperatur Soll  
- Betriebsart  
- Anwesenheit
  
***Im Webinterface von BSB-LAN ist die einzig verfügbare Kategorie bei der Verwendung von PPS die Kategorie "PPS-Bus"!*** 
***Aus den anderen Kategorien sind keinerlei Parameter abrufbar!***  
*Somit entfällt auch die Abfrage von `URL/Q` zur Kontrolle auf nicht-freigegebene Parameter!*

Immerhin lassen sich damit aber die wichtigsten Funktionen einer
intelligenten Heizungssteuerung umsetzen, indem man z.B. gewichtete
Raumtemperaturen sendet und die Solltemperaturen nach vielfältigeren
Kriterien steuern kann.

***Hinweise:***  
Sollte bereits ein QAA70 angeschlossen sein, so ist der Zugriff mittels BSB-LAN nur lesend möglich! Soll BSB-LAN schreibend einwirken, also aktiv Werte und Einstellungen verändern, so muss ein vorhandenes QAA70 dauerhaft deinstalliert werden, da es ansonsten mit den eigenen Werten alles wieder überschreibt!  
   
Bzgl. der spezifischen Bus-Einstellungen in der Datei *BSB_LAN_config.h* beachte die dortigen Hinweise in [Kap. 2.2](kap02.md#22-konfiguration).   
   
Über PPS tauschen Heizung und Raumgerät bzw. BSB-LAN permanent Daten aus. Das Protokoll ist sehr zeitkritisch. Das Aufrufen von längeren Webseiten führt dazu, dass der Arduino nicht rechtzeitig auf entsprechende Anfragen der Heizung reagieren kann, weswegen die Heizung dann denkt, dass die Gegenseite ausgefallen ist. Das ist an sich kein Problem, nach ca. 10-20 Sekunden, nachdem der Arduino wieder „ansprechbar“ ist, haben sich beide wieder verständigt. Bis dann aber wieder alle Werte ausgetauscht bzw. aktualisiert sind, kann es noch mal 1-2 Minuten dauern, so dass sich Änderungen dann erst entsprechend verzögert zeigen. Von zu vielen Anfragen auf den Arduino sollte daher bei PPS abgesehen werden und etwaige Sensoren etc. dann ggf. auf einen zweiten Arduino ausgelagert werden.   
  
Bei der ersten Verwendung bzw. nach einem Reboot des Arduino muss man (anders als bspw. beim BSB) einige Zeit abwarten, bis die Parameter abrufbar/verfügbar sind.  
  
***Wichtiger Hinweis für Nutzer des (veralteten) Setups Adapter v2 + Arduino Mega 2560:***   
Aufgrund der zeitkritischen Kommunikation bei PPS ist es sinnvoll, das Setup auf die Nutzung der Hardware-Serial umzustellen. Dazu sind folgende Änerungen vorzunehmen: 
- Die Adapterplatine v2 muss *komplett* bestückt sein. 
- Es darf nur die Lötbrücke SJ1 gesetzt sein.  
- Die Platine muss um eine Pin-Reihe versetzt in Richtung Mitte des Arduinos eingesetzt werden. 
- Die Konfiguration muss entsprechend geändert werden, indem die BSB-bus-Variable auf die Pins 19 (RX) und 18 (TX) gesetzt wird.  
   
---    
    
## 10.2 Detaillierte Beschreibung der kompatiblen Regler
Die folgende Reglerauflistung und -beschreibung soll einen kurzen
Überblick über eine Auswahl der bereits von BSB-LAN unterstützten Geräte und deren
rudimentären Unterschiede geben. Auf die unterschiedliche
reglerspezifische Verfügbarkeit von speziellen Parametern wird nicht
weiter eingegangen.  
  
Mittels BSB-LAN steht i.d.R. der gesamte Funktionsumfang der jeweiligen Reglertypen zur Verfügung. Dieser ist jedoch hinsichtlich der verfügbaren Parameter naturgemäß unterschiedlich: Ein Regler der neusten Generation weist mehr Parameter und Einstelloptionen als ein Regler der ältesten Generation auf. Die Heizungsanlage wird dadurch jedoch nicht zwingend ineffizienter oder ist per se 'veraltet' und unbrauchbar! Dank BSB-LAN können auch die ältesten unterstützten Regler noch etwas 'smarter' gemacht und in die Hausautomatisierung mit eingebunden werden.  
  
*Hinweis:*  
Bei besonders 'neuen' (Software-)Versionen der aktuellen Reglerserien (Typ LMS&RVS) kann es u.U. vorkommen, dass vom Hersteller neu hinzugefügte Reglerparameter mangels entsprechender Regler-Hardware bei BSB-LAN noch nicht implementiert sind. Sollte ein solcher Regler in deinem Heizungssystem verbaut sein, so kannst du das Projekt durch Dekodieren dieser neuen Parameter unterstützen (s. hierzu [Kapitel 9](kap09.md)).

   
---
    
### 10.2.1 LMx-Regler
Im Folgenden werden die Regler des Typs LMU und LMS aufgeführt. Diese
sind erfahrungsgemäß bei Gasheizungen/-thermen verbaut.
   
---
   
#### 10.2.1.1 LMU-Regler  
Regler der Serie **LMU54/LMU64** sind in älteren Heizungssystemen vorzufinden, in aktuellen Modellen werden sie nicht mehr verbaut. Diese Regler weisen erfahrungsgemäß weder einen BSB, noch einen LPB auf, lediglich eine PPS-Schnittstelle ist hier verfügbar. LPB kann (manchmal) mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden.  

         
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMU64.jpg">  
   
*Ein Regler des Typs LMU64 samt installiertem OCI420 ClipIn-Modul.*  
  
Genauere Hinweise diesbezüglich sind in [Kap. 10.2.4](kap10.md#1024-hinweis-spezialfall-lmu54lmu64-regler) zu finden.  
   
---
   
Regler der Serie **LMU74/LMU75** scheinen die Nachfolger der LMU54/LMU64-Reglerserie zu sein und werden ebenfalls nicht mehr verbaut.     
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMU7.jpg">  
   
*Ein Regler des Typs LMU7x.*  
      
Der LMU7x-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, an dem der Adapter angeschlossen wird. LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI420) nachgerüstet werden (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).  
  
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje). 
  
Als Fühler kommen i.d.R. NTC10k (QAD36, QAZ36) und NTC1k (QAC34 = Außentemperaturfühler) zum Einsatz.  
    
---  
   
#### 10.2.1.2 LMS-Regler   
Regler der Serie **LMS** scheinen die Nachfolger der LMU-Serie und somit die
aktuelle Reglergeneration zu sein.   
   
Der (Funktions-)Unterschied zwischen dem LMS14 und dem LMS15
scheint in der „Sitherm Pro"-Anwendung zur Optimierung des gesamten
Verbrennungsprozesses zu liegen, die anscheinend nur die LMS15-Regler
aufweisen.

Der LMS-Reglertyp weist i.d.R. nur einen BSB-Anschluss auf, an dem der Adapter angeschlossen wird. LPB muss bei
Bedarf mittels eines ClipIn-Moduls (OCI345) nachgerüstet werden (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMS15.jpeg">  
   
Als Bedieneinheit kommt i.d.R. eine Variante des Siemens AVS37.294 zum
Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).  
  
Als Fühler kommen i.d.R. NTC10k (QAD36, QAZ36) und NTC1k (QAC34 = Außentemperaturfühler) zum Einsatz.  
       
---
    
### 10.2.2 RVx-Regler
Im Folgenden werden die Regler des Typs RVA, RVP und *RVS (aktueller
Reglertyp)* aufgeführt. Diese scheinen i.d.R. bei Ölheizungen,
Wärmepumpen und verschiedenen ‚alleinstehenden' Reglern (Zonenregler,
Solarsystemregler) zum Einsatz zu kommen.
    
---
    
#### 10.2.2.1 RVA- und RVP-Regler
Regler des Typs **RVA** sind in älteren Heizungssystemen vorzufinden, in aktuellen Modellen werden sie nicht mehr verbaut. Je nach Modell weisen sie nur einen PPS oder einen PPS- und LPB-Anschluss auf, jedoch keinen BSB.  
Als (integrierte) Bedieneinheit ist meist eine Variante der "Eurocontrol" 
(Brötje) verbaut.  
  
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVA53_back.jpg">  
   
*Ein Regler des Typs RVA53.*  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVA53_front.jpg">  
   
*Vorderansicht: Bedieneinheit eines Reglers des Typs RVA53.*  
   
Regler des Typs **RVP** scheinen noch älter als RVA-Regler zu sein und
weisen lediglich eine PPS-Schnittstelle auf.  
  
    
---
    
#### 10.2.2.2 RVS-Regler
Regler des Typs **RVS** scheinen die ‚aktuelle' Reglergeneration
darzustellen. Sie weisen meist sowohl einen LPB-, als auch mehrere BSB-Anschlüsse
auf.  
     
Ausnahmen scheinen die Regler der Reihen RVS21, RVS41, RVS51, RVS61 und RVS23 zu sein:  
- RVSx1-Regler kommen bei Wärmepumpen zum Einsatz, der RVS21 scheint nur einen BSB aufzuweisen.       
- RVS23-Regler kommen bei einer bestimmten Weishaupt-Modellreihe (WTU) zum Einsatz und scheinen nur einen LPB aufzuweisen. Bei Weishaupt scheinen diese Regler als "WRS-CPU-Bx" bezeichnet zu werden. Weitere Hinweise zu diesem Reglermodell finden sich in [Kap. 10.2.5](kap10.md#1025-hinweis-spezialfall-weishaupt-geräte).  
     
Als Bedieneinheit kommt hier i.d.R. eine Variante des Siemens AVS37.294
zum Einsatz (Bezeichnung bspw. „ISR Plus" bei Brötje).  
  
Als Fühler kommen i.d.R. NTC10k (QAD36, QAZ36) und NTC1k (QAC34 = Außentemperaturfühler) zum Einsatz.  
  
Die folgende grobe Darstellung der Gerätefamilie zeigt wesentliche Unterschiede auf.  
    
---    
    
**RVS21.xxx**  
Der RVS21 ist der Reglertyp, der in Wärmepumpen Verwendung findet. Er bietet einen BSB und Anschlüsse für ein optionales Raumgerät.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/RVS21.jpeg">  
   
*Ein RVS21 Regler.*  
   
LPB ist bei einem RVS21 im Bedarfsfall via OCI345 nachzurüsten (für die Nutzung von BSB-LAN ist dies jedoch nicht notwendig).
   
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
    
### 10.2.3 Hinweis: Inkompatible Systeme von Brötje und Elco
Aus aktuellem Anlass sei an dieser Stelle darauf hingewiesen, dass die
genannten Heizungshersteller neue Gerätemodelle auf den Markt gebracht
haben, deren Regler NICHT mit BSB-LAN
kompatibel sind.

Bei Brötje scheint es sich hierbei um die Modellreihen 
- WLS/WLC (Gas), 
- BOK (Öl) sowie 
- BLW Split-P, BLW Split C und BLW Split-K C (Wärmepumpen) zu handeln.  

Bei Elco scheint es sich um die Modellreihe "Thision Mini" zu handeln.  

Bei diesen Modellen sind scheinbar ‚IWR CAN'-basierte Regler verbaut (geräteseitig "IWR Alpha", kompatibles Raumgerät "IWR IDA"), die weder einen LPB noch einen BSB aufweisen.

Das folgende Bild einer WLC24-Platine zeigt die dort vorhandenen
Anschlüsse.  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/regler-wlc24.jpg">
    
*Anschlüsse des neuen Reglertyps einer Brötje WLC24 - dieser Regler ist inkompatibel mit BSB-LAN!*     
    
    
Neben einer Servicebuchse (vermutlich IWR CAN) sind dort ein nicht
weiter dokumentierter ‚L-Bus' und ein ‚R-Bus' zugänglich.  
Am ‚R-Bus' (Raumgeräte-Bus) kann bei Bedarf entweder ein Raumthermostat
(On/Off) oder das neue ‚smarte' Raumgerät „Brötje IDA" angeschlossen werden.

***ACHTUNG: An keinem dieser Anschlüsse ist der BSB-LPB-LAN-Adapter anschließbar!***

---  
  
### 10.2.4 Hinweis: Spezialfall LMU54/LMU64-Regler  
Regler des Typs LMU54/LMU64 basieren auf OpenTherm, das andere Bus-Spezifikationen und auch ein anderes Kommunikationsprotokoll aufweist. Daher ist OpenTherm nicht kompatibel mit BSB-LAN.  
Es gibt jedoch eine Möglichkeit, diesen Reglertyp trotzdem anzubinden: Wie auch bei den BSB-Reglern LMU7x und LMS1x kann man mittels eines sog. ClipIn-Moduls (Typ OCI420) einen LPB nachrüsten. An diesem wiederum ist der Adapter anschließbar.  
            
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/LMU64.jpg">  
   
*Ein Regler des Typs LMU64 samt installiertem OCI420 ClipIn-Modul.*  
  
Der Funktionsumfang ist bei diesem Regler (auch bei der Nutzung von BSB-LAN) jedoch relativ eingeschränkt und außerdem in gewissem Ausmaß von der Softwareversion des Reglers abhängig (getestet mit LMU64, SW v2.08 vs. SW v3.0 vs. SW v3.03): Regler mit SW ab v3.0 scheinen mehr (via BSB-LAN steuerbare) Funktionen aufzuweisen als Regler mit SW <v3.0. Insbesondere seien hier die beiden Sollwert-Temperaturparameter 709 und 711 genannt, anhand derer das Brennerverhalten in gewissem Umfang bestimmt werden könnte – diese können nur mit SW ab v3.0 genutzt bzw. verändert werden. (Hinweis: Derzeit läuft noch ein Versuch, ob das Brennerverhalten zufriedenstellend via Relais an einem anderen Kontakt beeinflusst werden kann.)  
  
Auf Parameter wie Außentemperatur, Kesseltemperatur, TWW-Temperatur, Vorlauftemperatur etc. kann jedoch nach bisherigem Kenntnisstand bei allen erwähnten Softwareversionen zugegriffen werden.  
  
Fairerweise muss man an dieser Stelle sagen, dass sich der finanzielle Aufwand, der für den Kauf eines LPB-ClipIn-Moduls des Typs OCI420 zusätzlich geleistet werden muss, u.U. nicht ‚lohnt‘. Dies ist jedoch abhängig vom verfolgten Ziel. Will man nur Temperaturen loggen um einen groben Überblick über den Ist-Zustand des Heizungssystems zu erhalten, so ist u.U. eine günstigere Lösung mit einer entsprechenden DS18B20-Temperatursensoren-Installation ausreichend. Will man hingegen auch bspw. Fehlereinträge aus der Ferne abrufen können, so lässt sich dies nur über die Lösung OCI420+BSB-LAN-Setup erreichen.  
Es sei an dieser Stelle aber nochmals ausdrücklich darauf hingewiesen, dass eine Beeinflussung des Brennerverhaltens (wenn überhaupt) nur in sehr eingeschränktem Umfang möglich ist! 
  
Hinweise zum Anschluss und der Konfiguration des OCI420-ClipIns sind im [Kap. 10.2.6](kap10.md#1026-lpb-nachr%C3%BCsten-mittels-oci420-clipin-modul) zu finden.  
  
Im Folgenden wird exemplarisch eine Komplettabfrage einer LMU64 mit SW v3.03 (also der 'aktuellsten' Version, bei der am meisten Parameter verfügbar sind) dargestellt - so bekommt man einen Eindruck, was bestenfalls via BSB-LAN abrufbar ist.  
  
```
1 Uhrzeit und Datum - Uhrzeit: 12:30:55	
2 Uhrzeit und Datum - Tag/Monat: 24.01.	
3 Uhrzeit und Datum - Jahr: 2022	
70 Bedieneinheit - Geräte-Version Bedienteil: 30.3	
701 Heizkreis 1 - Präsenztaste (temporäre Abwesenheit):	---
709 Heizkreis 1 - Komfortsollwert Minimum: 10.0 °C	
711 Heizkreis 1 - Komfortsollwert Maximum: 30.0 °C	
720 Heizkreis 1 - Kennlinie Steilheit: 18	
721 Heizkreis 1 - Kennlinie Verschiebung: 0.0 °C	
730 Heizkreis 1 - Sommer-/ Winterheizgrenze: 21 °C	
734 Heizkreis 1 - Raumsollabsenkung mit Schaltuhr: 10.0 °C	
781 Heizkreis 1 - Schnellabsenkung Faktor: 4	
850 Heizkreis 1 - Estrichfunktion: 0 - Aus	
884 Heizkreis 1 - Drehzahlstufe Auslegungspunkt: 17	
885 Heizkreis 1 - Pumpe-PWM Minimum: 41 %	
886 Heizkreis 1 - Norm Außentemperatur: -20 °C	
887 Heizkreis 1 - Vorlaufsoll Norm Außentemperatur: 72.0 °C	
888 Heizkreis 1 - dt Überhöhungsfaktor: 25.0 %	
889 Heizkreis 1 - Filterzeitkonstant Drehzahlregler: 99 %	
891 Heizkreis 1 - dT Vorhaltezeit Tv: 0 s	
892 Heizkreis 1 - dT Nachstellzeit Tv: 50 s	
893 Heizkreis 1 - dT Abtastfaktor: 10	
894 Heizkreis 1 - dT Spreizung Norm Außentemperatur: 20.0 °C	
895 Heizkreis 1 - dT Spreizung Maximum: 20.0 °C	
1001 Heizkreis 2 - Präsenztaste (temporäre Abwesenheit): ---
1020 Heizkreis 2 - Kennlinie Steilheit: 14	
1021 Heizkreis 2 - Kennlinie Verschiebung: 0.0 °C	
1130 Heizkreis 2 - Mischerüberhöhung: 10.0 °C	
1134 Heizkreis 2 - Antrieb Laufzeit: 150 s	
1150 Heizkreis 2 - Estrichfunktion: 0 - Aus	
1301 Heizkreis 3/P - Präsenztaste (temporäre Abwesenheit: ---
1603 Trinkwasser - Manueller TWW-Push: Aus
1614 Trinkwasser - TWW Nennsollwert Maximum: 2.2 °C	
1615 Trinkwasser - TWW Reduziertsollwert Minimum: 0.3 °C	
2210 Kessel - Sollwert Minimum: 20.0 °C	
2212 Kessel - Sollwert Maximum: °C 000084 - decoding error	
2215 Kessel - Max. Regeldifferenz ohne Abbruch der Mindestpause (°K): 60.0 °C	
2250 Kessel - Pumpennachlaufzeit: 10 min	
2440 Kessel - Gebläse-PWM Hz Maximum: 70 %	
2441 Kessel - Gebläsedrehzahl Hz Maximum: 5400 U/min	
2442 Kessel - Gebläse-PWM Reglerverzögerung: 19 %	
2443 Kessel - Gebläse-PWM Startwert DLH: 40 %	
2444 Kessel - Leistung Minimum: 4.0 kW	
2445 Kessel - Nennleistung Kessel: 15.0 kW	
2451 Kessel - Brennerpausenzeit Minimum: 120 s	
2452 Kessel - Schaltdifferenz Brennerpause: 30.0 °C	
2453 Kessel - Reglerverzögerung Dauer: 60 s	
2454 Kessel - Schaltdifferenz ein HK: 4.0 °C	
2455 Kessel - Schaltdifferenz aus Min HK: 5.0 °C	
2456 Kessel - Schaltdifferenz aus Max HK: 7.0 °C	
2458 Kessel - Einschwingzeit TWW Max: 3 min	
2459 Kessel - Sperrzeit dynamische Schaltdifferenz: 0 s	
2471 Kessel - Pumpennachlaufzeit HK: 10 min	
2472 Kessel - Pumpennachlauftemperatur TWW: 72.0 °C	
2473 Kessel - Abgastemperatur Leistungsreduktion: 80 °C	
2521 Kessel - Frostschutz Einschalttemperatur: 5.0 °C	
2522 Kessel - Frostschutz Ausschalttemperatur: 10.0 °C	
2547 Kessel - Abtastintervall DLH: 0.2 s	
2730 Sitherm Pro - Ionisationsstrom: 131.80 µA	
2792 Wärmepumpe - Pumpendrehzahl Minimum: 41 %	
3810 Solar - Temperaturdifferenz ein: 8.0 °C	
3811 Solar - Temperaturdifferenz aus: 4.0 °C	
3812 Solar - Ladetemperatur Min TWW-Speicher: 30.0 °C	
3831 Solar - Mindestlaufzeit Kollektorpumpe: 60 s	
3840 Solar - Kollektortemperatur Frostschutz: 0.0 °C	
3850 Solar - Kollektorüberhitzschutz: 120.0 °C	
5019 Trinkwasserspeicher - TWW Nachladeüberhöhung Schichtenspeicher: 5.0 °C	
5020 Trinkwasserspeicher - TWW Vorlaufsollwertüberhöhung: 18.0 °C	
5050 Trinkwasserspeicher - TWW Ladetemperatur Maximum: 80.0 °C	
5055 Trinkwasserspeicher - TWW Rückkühltemperatur: 80.0 °C	
5100 Trinkwasserspeicher - TWW Pumpe-PWM Durchladung: 18 %	
5126 Trinkwasserspeicher - Mischer Nachstellzeit Tn: 100 s	
5400 Trinkwasser Durchlauferhitzer - Komfortsollwert: 45.0 °C	
5420 Trinkwasser Durchlauferhitzer - Vorlauf-Sollwertüberhöhung: °C 0024 - decoding error	
5430 Trinkwasser Durchlauferhitzer - Einschaltdifferenz im BW-Betrieb (Fühler 1): 4.0 °C	
5431 Trinkwasser Durchlauferhitzer - Min. Ausschaltdifferenz im BW-Betrieb (Fühler 1): 2.0 °C	
5450 Trinkwasser Durchlauferhitzer - Schwelle zum Beenden einer BW-Zapfung bei DLH: 0.20313 K/s	
5451 Trinkwasser Durchlauferhitzer - Schwelle für Bw-Zapfung bei DLH in Komfort: -0.20313 K/s	
5452 Trinkwasser Durchlauferhitzer - Schwelle für Bw-Zapfung bei Dlh in Heizbetrieb: -0.29688 K/s	
5453 Trinkwasser Durchlauferhitzer - Sollwertkorrektur bei Komfortregelung mit 40°C (°K): 0.0 °C	
5454 Trinkwasser Durchlauferhitzer - Sollwertkorrektur bei Komfortregelung mit 60°C (°K): 0.0 °C	
5455 Trinkwasser Durchlauferhitzer - Sollwertkorrektur bei Auslaufregelung mit 40°C (°K): 0.0 °C	
5456 Trinkwasser Durchlauferhitzer - Sollwertkorrektur bei Auslaufregelung mit 60°C (°K): 0.0 °C	
5480 Trinkwasser Durchlauferhitzer - Komfortzeit ohne Hz-Anforderung: min 000000 - unknown type	
5481 Trinkwasser Durchlauferhitzer - Komfortzeit mit Hz-Anforderung: 0 min	
5482 Trinkwasser Durchlauferhitzer - Zeit TWW-FlowSwitch geschlossen: 0 s	
5483 Trinkwasser Durchlauferhitzer - Zeit TWW-Komfort FlowSwitch geschlossen: 0 s	
5486 Trinkwasser Durchlauferhitzer - Reglerverzögerung bei Takten in DLH Auslaufbetrieb: 0 s	
5487 Trinkwasser Durchlauferhitzer - Pumpennachlauf Komfort in Minuten: 255 min	
5488 Trinkwasser Durchlauferhitzer - Pumpennachlauf Komfort in Sekunden: s 0000000000 - decoding error	
5701 Konfiguration - Hydraulisches Schema: 58	
5732 Konfiguration - TWW Pumpenpause Umsch UV: 4 s	
5733 Konfiguration - TWW Pumpenpause Verzögerung: 1 s	
5761 Konfiguration - Zubringerpumpe Q8 Bit 0-3: 00000000	Zonen mit ZubringerpumpeHK1 mit ZubringerpumpeHK2 mit ZubringerpumpeTWW mit Zubringerpumpe	
5920 Konfiguration - Programmierbarer Ausgang K2: 0 - Default, Keine Funktion	
5922 Konfiguration - Relaisausgang 1 RelCl: 0 - Default, Keine Funktion	
5923 Konfiguration - Relaisausgang 2 RelCl: 0 - Default, Keine Funktion	
5924 Konfiguration - Relaisausgang 3 RelCl: 0 - Default, Keine Funktion	
5926 Konfiguration - Relaisausgang 1 SolCl: 0 - Default, Keine Funktion	
5927 Konfiguration - Relaisausgang 2 SolCl: 0 - Default, Keine Funktion	
5928 Konfiguration - Relaisausgang 3 SolCl: 0 - Default, Keine Funktion	
5950 Konfiguration - Funktion Eingang H1: 0 - Default	
5973 Konfiguration - Funktion Eingang RelCl: 0 - Keine Funktion	
5975 Konfiguration - Externer Vorlaufsollwert Maximum: 100.0 °C	
5976 Konfiguration - Externe Leistungsvorgabe Schwelle: 5 %	
5978 Konfiguration - Funktion Eingang SolCl: 0 - kein	
6089 Konfiguration - Mod Pumpe Drehzahlstufen: 30	
6092 Konfiguration - Mod Pumpe PWM: 3 %	
6093 Konfiguration - Mod Pumpe PWM Max: 85 %	
6127 Konfiguration - Pumpen/Ventilkick Dauer: 5 s	
6140 Konfiguration - Wasserdruck Maximum: 2.5 bar	
6141 Konfiguration - Wasserdruck Minimum: 0.7 bar	
6143 Konfiguration - Wasserdruckschwelle für Kessel und Pumpe aus: 0.5 bar	
6144 Konfiguration - Schaltdifferenz Wasserdruck: 0.3 bar	
6146 Konfiguration - Druckwert 3.5V: 0.0 bar	
6220 Konfiguration - Software-Version: 30.3	
6222 Konfiguration - Gerätebetriebsstunden: 19042 h	
6223 Konfiguration - Bisher unbekannte Geräteabfrage: 003A - decoding error	
6224 Konfiguration - Geräte-Identifikation: LMU54/64	
6225 Konfiguration - Gerätefamilie: 64	
6226 Konfiguration - Gerätevariante: 100	
6227 Konfiguration - Objektverzeichnis-Version: 202.0	
6229 Konfiguration - EEPROM-Version: 15.0	
6230 Konfiguration - KonfigRg0 Bit 0-7: 00100011	Fühlerunterbruch Rücklauffühler unterdrückenFühlerunterbruch Rücklauffühler ausgebenFühlerunterbruch Trinkwasserfühler unterdrückenFühlerunterbruch Trinkwasserfühler ausgebenFühlerunterbruch Abgastemperaturfühler unterdrückenFühlerunterbruch Abgastemperaturfühler ausgebenFühlerunterbruch Außentemperaturfühler unterdrückenFühlerunterbruch Außentemperaturfühler ausgebenFühlerunterbruch Wasserdruckfühler unterdrückenFühlerunterbruch Wasserdruckfühler ausgebenFühlerunterbruch Vorlauffühler unterdrückenFühlerunterbruch Vorlauffühler ausgebenFühlerunterbruch Fühler am ClipIn unterdrückenFühlerunterbruch Fühler am ClipIn ausgeben	
6240 Konfiguration - KonfigRg1 Bit 0-7: 00110100	Vorrang Trinkwasser: absolutVorrang Trinkwasser: gleitendVorrang Trinkwasser: keinKlemmenbelegung X10-02: RTKlemmenbelegung X10-02: SchaltuhrKlemmenbelegung X10-01: RTKlemmenbelegung X10-01: SchaltuhrAnlagenfrostschutz ausAnlagenfrostschutz einWirkung Schaltuhr an X10-01: HeizkreisWirkung Schaltuhr an X10-01: TWWBetriebsart des Heizkreises bei Modemfunktion: StandbyBetriebsart des Heizkreises bei Modemfunktion: Reduziert	
6250 Konfiguration - KonfigRg2 Bit 0-7: 10000000	Pumpennachlauf TWW in den HeizkreisPumpennachlauf TWW in den TWW-WärmetauscherKomforttemperaturniveau wie AuslauftemperaturKomforttemperaturniveau wie BereitschaftstemperaturKomfort PID Regelungsfühler: KesselvorlaufKomfort PID Regelungsfühler: TWW-FühlerKomfort PID Regelungsfühler: KesselrücklaufFühleranordnung Schichtenspeicher SSP: KVFFühleranordnung Schichtenspeicher SSP: KRF, nicht bei SSPFühleranordnung Schichtenspeicher SSP: KRF, nur SSP	
6270 Konfiguration - KonfigRg4 Bit 0-7: 01000000	Zubringerfunktion Q8: ausZubringerfunktion Q8: einGebäudebauweise: leichtGebäudebauweise: schwerAnschlussklemme TW-Thermostat: Fühler an X10/TWFAnschlussklemme TW-Thermostat: Thermostat an X10/TWFKonfiguration 3-Wege-Ventil: keinKonfiguration 3-Wege-Ventil: MagnetventilKonfiguration 3-Wege-Ventil: MotorventilKonfiguration 3-Wege-Ventil: Motorventil invers	
6280 Konfiguration - KonfigRg5 Bit 0-7: 00000111	Wassermangelsicherung Strömungswächter->StörstellungWassermangelsicherung Strömungswächter->StartverhinderungWassermangelsicherung Wasserdruckwächter->StörstellungWassermangelsicherung Wasserdruckwächter->StartverhinderungWassermangelsicherung Drehzahlbegrenzung ausWassermangelsicherung Drehzahlbegrenzung einBits 3-7: Grundeinstellung; nicht verändern!	
6290 Konfiguration - KonfigRg6 Bit 0-7: 11100000	Initialisierung ISR: Sofortige Übernahme der Stellgröße nach FreigabeInitialisierung ISR: Stoßfreier Übergang nach FreigabeVerriegelung Fremd-Room Units: ausVerriegelung Fremd-Room Units: einQuelle BW-Sollwert: RUQuelle BW-Sollwert: HMISperrsignalberechnung deaktiviertSperrsignalberechnung aktiviertSchnelle Wechsel der Drehzahlgrenzen: Normale AbarbeitungSchnelle Wechsel der Drehzahlgrenzen: BeschleunigtInitialisierung ISR: Nur bei BetriebsartwechselInitialisierung ISR: Immer bei BrennerstartPWM-Gebläserampen: ausPWM-Gebläserampen: ein	
6300 Konfiguration - KonfigRg7 Bit 0-7: 00001111	Heizkreispumpe: stufigHeizkreispumpe: modulierendDelta-T-Begrenzung: ausDelta-T-Begrenzung: einDelta-T-Überwachung: ausDelta-T-Überwachung: einAnlagenvolumen: kleinAnlagenvolumen: mittelAnlagenvolumen: großDelta-T-Überwachung im Reduziert-Betrieb: ausDelta-T-Überwachung im Reduziert-Betrieb: einReglerverzögerung: nur im Heizbetrieb aktivReglerverzögerung: in allen Betriebsarten aktivPumpe Q1 Modulation in Systemen 51,54,55,67,70,71: ausPumpe Q1 Modulation in Systemen 51,54,55,67,70,71: ein	
6310 Konfiguration - KonfigRg8 Bit 0-7: 00000000	Sekundärtauscher: PlattenwärmetauscherSekundärtauscher: Wendelwärmetauscher primärseitigSekundärtauscher: Wendelwärmetauscher sekundärseitig1. Maximum Durchlauferhitzer-Regelung: auswerten1. Maximum Durchlauferhitzer-Regelung: ignorierenDurchlauferhitzer Anfrage über DLH1 Sensor oder Flow-SwitchDurchlauferhitzer Anfrage nur über Flow-SwitchPosition von Verteilventil nach Durchlauferhitzer: LetztePosition von Verteilventil nach Durchlauferhitzer: Heizposition	
6330 Konfiguration - KonfigRg10 Bit 0-7: 00000000	Kesselpumpe bei Brennersperre: keine AbschaltungKesselpumpe bei Brennersperre: AbschaltungBrennersperre nur bei HeizanforderungBrennersperre nur bei Heiz- und TWW-AnforderungDurchlauferhitzertaktschutz durch Temperaturerhöhung: ausDurchlauferhitzertaktschutz durch Temperaturerhöhung: einPosition des TWW-Speichers: vor hydraulischer WeichePosition des TWW-Speichers: nach hydraulischer WeicheZubringerpumpe bei Brennersperre: keine AbschaltungZubringerpumpe bei Brennersperre: AbschaltungGebläseabschaltung bei Heizanforderung: FreigabeGebläseabschaltung bei Heizanforderung: keine FreigabePumpennachlauf TWW bei weiteren Wärmeanforderungen: UnterdrückenPumpennachlauf TWW bei weiteren Wärmeanforderungen: Durchführen	
6343 Konfiguration - Bisher unbekannte Geräteabfrage: 0001260096 - unknown type	
6344 Konfiguration - Hersteller-ID (letzten vier Bytes): 1012140155	
1012140155
6600 LPB-System - Geräteadresse: 00.01	
6604 LPB-System - Busspeisung Funktion: 1 - Automatisch	
6605 LPB-System - Busspeisung Status: 255 - Ein	
6610 LPB-System - Anzeige Systemmeldungen: 255 - Ja	
6625 LPB-System - Trinkwasserzuordnung: 0 - Lokale Heizkreise	
6640 LPB-System - Uhrbetrieb: 2 - Slave mit Fernverstellung	
6650 LPB-System - Außentemperatur Lieferant: 00.01	
6699 LPB-System - Software Version Einschub: 0.7	
6701 Fehler - Unknown command: 0000 - unknown type	
6705 Fehler - SW Diagnosecode: 0 - not found	
6800 Fehler - Historie 1: 5	
6803 Fehler - Historie 1 Fehlermeldung: 153 - Entriegelungstaste wurde betätigt	
6805 Fehler - SW Diagnosecode 1: 259	
6806 Fehler - FA Phase 1: 0 - Standby	
6810 Fehler - Historie 2: 4	
6813 Fehler - Historie 2: 133 - Keine Flammenbildung nach Ablauf der Sicherheitszeit	
6815 Fehler - SW Diagnosecode 2: 102 - Uhrzeitmaster ohne Gangreserve (LPB)	
6816 Fehler - FA Phase 2: 14 - not found	
6820 Fehler - Historie 3: 0	
6823 Fehler - Historie 3 Fehlermeldung: 0 - kein Fehler	
6825 Fehler - SW Diagnosecode 3: 0 - not found	
6826 Fehler - FA Phase 3: 0 - Standby	
6830 Fehler - Historie 4: 0	
6833 Fehler - Historie 4 Fehlermeldung: 0 - kein Fehler	
6835 Fehler - SW Diagnosecode 4: 0 - not found	
6836 Fehler - FA Phase 4: 0 - Standby	
6840 Fehler - Historie 5: 0	
6843 Fehler - Historie 5 Fehlermeldung: 0 - kein Fehler	
6845 Fehler - SW Diagnosecode 5: 0 - not found	
6846 Fehler - FA Phase 5: 0 - Standby	
7001 Wartung/Sonderbetrieb - Meldung: 0	
7010 Wartung/Sonderbetrieb - Quittierung Meldung: 1 - Ein	
7011 Wartung/Sonderbetrieb - Repetitionszeit Meldung: 14 Tage	
7040 Wartung/Sonderbetrieb - Repetitionszeit Meldung: h 0001499700 - decoding error	
7041 Wartung/Sonderbetrieb - Brennerstunden seit Wartung: h 0002255100 - decoding error	
7042 Wartung/Sonderbetrieb - Brennerstarts Intervall: 0	
7043 Wartung/Sonderbetrieb - Brennerstarts seit Wartung: 400	
7044 Wartung/Sonderbetrieb - Wartungsintervall: 6000 h	
7045 Wartung/Sonderbetrieb - Zeit seit Wartung: 0 Monate	
7050 Wartung/Sonderbetrieb - Gebläsedrehzahl Ion Strom: 4000 U/min	
7051 Wartung/Sonderbetrieb - Meldung Ion Strom: 0	
7700 Ein-/Ausgangstest - Relaistest: 0 - Kein Test	
8310 Diagnose Erzeuger - Kesseltemperatur: 76.0 °C	
8311 Diagnose Erzeuger - Kesselsollwert: 2.3 °C	
8314 Diagnose Erzeuger - Kesselrücklauftemperatur Ist: 57.5 °C	
8321 Diagnose Erzeuger - Aktuelle Regeldifferenz: 4.4 °C	
8324 Diagnose Erzeuger - Brennergebläsesollwert: 0 U/min	
8325 Diagnose Erzeuger - PWM Drehzahlregler (Proz): 0 %	
8326 Diagnose Erzeuger - Brennermodulation: 0 %	
8329 Diagnose Erzeuger - Ionisationsstrom: 0.00 µA	
8336 Diagnose Erzeuger - Betriebsstunden Brenner: 19042 h	
8337 Diagnose Erzeuger - Startzähler Brenner: 3467	
8338 Diagnose Erzeuger - Betriebsstunden Heizbetrieb: 57508 h	
8339 Diagnose Erzeuger - Betriebsstunden TWW: 2680 h	
8340 Diagnose Erzeuger - Betriebsstunden externe Wärmeanforderung: 0 h	
8530 Diagnose Erzeuger - Betriebsstunden Solarertrag: 0 h	
8700 Diagnose Verbraucher - Außentemperatur: 6.5 °C	
8705 Diagnose Verbraucher - Außentemperatur LPB: --- °C	
8741 Diagnose Verbraucher - Raumsollwert 1: 30.0 °C	
8750 Diagnose Verbraucher - Mod Pumpe Sollwert: 60 %	
8773 Diagnose Verbraucher - Vorlauftemperatur 2: 36.0 °C	
8830 Diagnose Verbraucher - Trinkwassertemperatur 1: --- °C	
8831 Diagnose Verbraucher - Trinkwassersollwert: 55.0 °C	
8832 Diagnose Verbraucher - Trinkwassertemperatur 2: 52.0 °C	
8950 Diagnose Verbraucher - Schienenvorlauftemperatur: 77.5 °C	
8952 Diagnose Verbraucher - Schienenrücklauftemperatur: 58.0 °C	
9500 Feuerungsautomat - Vorlüftzeit: 3.0 s	
9502 Feuerungsautomat - Gebläseansteuerung Vorlüftung: 40 %	
9504 Feuerungsautomat - Solldrehzahl Vorlüftung: 3500 U/min	
9510 Feuerungsautomat - Gebläseansteuerung Zündung: 40 %	
9512 Feuerungsautomat - Solldrehzahl Zündung: 3500 U/min	
9520 Feuerungsautomat - Gebläseansteuerung Betrieb. Min: 14 %	
9522 Feuerungsautomat - Gebläseansteuerung Betrieb. Max: 70 %	
9524 Feuerungsautomat - Solldrehzahl Betrieb Min: 1450 U/min	
9527 Feuerungsautomat - Solldrehzahl Betrieb Max: 5400 U/min	
9540 Feuerungsautomat - Nachlüftzeit: 2.0 s	
9560 Feuerungsautomat - Gebläseansteuerung Durchladung: 24.0 %	
9563 Feuerungsautomat - Solldrehzahl Durchladung: 3950 U/min	
```
  
---  
  
### 10.2.5 Hinweis: Spezialfall Weishaupt-Geräte  
Einige Weishaupt-Geräte (s. Auflistung der erfolgreich getesteten Systeme: Weishaupt WTU mit Bedieneinheit WRS-CPU) haben einen Regler des Typs RVS23 verbaut. Dieser Reglertyp weist einen LPB auf, auf dem bereits die bestehende Installation dieser Weishaupt-Anlagen basiert: Raumgeräte, Bedieneinheiten und Erweiterungsmodule sind bereits miteinander via LPB verbunden.  
An diesem LPB ist ebenfalls der Adapter anschließbar, er muss jedoch korrekt in die bestehende Installation eingebunden werden. In der Regel stellt dies mit der voreingestellten LPB-Adresse des Adapters (Segment 4, Adresse 3) kein Problem dar, sollte aber bei etwaigen Kommunikationsproblemen ggf. nochmal überprüft werden.  

Auch bei den Weishaupt-Geräten scheint es neben der kesselseitigen Bedieneinheit eine Servicebuchse zu geben, bei der von den vier vorgesehenen Pins zwei belegt und herausgeführt sind. Laut der Aussage eines Weishaupt-Nutzers (*Danke an BSB-LAN-User Philippe!*) scheint hier der obere der beiden Pins MB und der untere der beiden Pins DB zu sein.  
  
---  
  
### 10.2.6 Hinweis: LPB nachrüsten mittels OCI420 ClipIn-Modul  
Soll ein OCI420 an einem LMU-Regler (LMU64/LMU7x) angeschlossen und verwendet werden, so ist die Installation und der Anschluss prinzipiell gemäß den jeweiligen Bedienungsanleitungen vorzunehmen.   
  
Es gibt jedoch ein paar wichtige Punkte, die i.d.R. nicht in den jeweiligen Anleitungen zu finden sind, obwohl sie für einen erfolgreichen Betrieb entscheidend sind. Dies betrifft vor allem die Einstellungen, die für die LPB-Spannungsversorgung vorzunehmen sind. Des Weiteren ist die LPB-Geräteadresse 1 mit Segmentadresse 0 einzustellen und die Einstellung als Uhrzeit-Master vorzunehmen.  
  
*Die folgenden Angaben sind wie immer ohne Gewähr – darauf sei an dieser Stelle nochmal explizit hingewiesen.*  
  
Schließt man das OCI420 den Anleitungen folgend an, so wird höchstwahrscheinlich der Fehler 81 auftreten, welcher „Kurzschluss im LPB Bus oder *fehlende LPB-Busspeisung*“ bedeutet. Sofern man das OCI420 korrekt angeschlossen hat, muss in dem Fall die LPB-Busspeisung aktiviert werden. Der Parameter dazu ist „LPBKonfig0“.  
  
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
  
Nach erfolgreicher Einstellung sollte kein Fehlercode mehr auftreten und die rote LED am OCI420 in regelmäßigen Abständen blinken.  
Sollte hingegen Fehler 82 angezeigt werden, so müssen die LPB-Adressen überprüft werden, da in dem Fall eine LPB-Adresskollision vorliegt (was aber bei den o.g. Einstellungen und der Standardadresse von BSB-LAN nicht auftreten sollte).  
      
---  
   
## 10.3 Erweiterungs- und ClipIn-Module    
Sollten die Anschlussmöglichkeiten und der Funktionsumfang der genannten Regler im Einzelfall nicht ausreichen, bspw. weil ein zusätzlicher Pumpenkreis nachträglich installiert wird, so lassen sich jeweils spezielle Erweiterungs-/ClipIn-Module (im Folgenden EWM) verbauen. Die EWM bieten Anschlussmöglichkeiten für einen Pumpen- bzw. Mischerkreis samt zugehöriger Sensoren.  
Diese EWM werden am Regler mittels eines speziellen Bus-Kabels an einem dedizierten Anschluss angeschlossen und kommunizieren intern über den BSB (eine Ausnahme scheint Weishaupt zu sein, worauf in diesem Kapitel jedoch nicht weiter eingegangen wird). Die EWM selbst weisen keinen eigenen BSB- oder LPB-Anschluss auf. Die Parametrierung erfolgt über die Bedieneinheit des Reglers.  
Der Zugriff auf ein EWM ist somit nur indirekt über die jeweils spezifischen Parameter im eigentlichen Regler möglich, die die Einstellungen und Funktionen des EWMs definieren und beschreiben. Da sie jedoch bspw. beim Aufruf von `ip/Q` mit aufgelistet werden, stelle ich sie im Folgenden kurz vor.  
  
*Hinweis:*  
*Soll ein Erweiterungs-/ClipIn-Modul nachgerüstet werden, so sollte selbstverständlich das anlagenspezifische Handbuch berücksichtigt sowie ein Heizungsinstallateur beauftragt werden.*    
  
---  
   
Erweiterungsmodule des Typs **AVS75.xxx** kommen bei den Reglerserien des Typs RVS und LMS zum Einsatz. Die Busanbindung erfolgt i.d.R. über den Anschluss "Bus-EM".     
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AVS75.jpg">  
   
*Erweiterungsmodul des Typs AVS75.390.*  
   
---  
   
Erweiterungsmodule für LMU-Regler werden als "ClipIn-Module" bezeichnet. Je nach Verwendungszweck scheint es unterschiedliche Ausführungen zu geben (bspw. Relaismodul, Solarmodul). Generell scheinen sie jedoch die Typenbezeichnung **AGU2.5x** zu tragen (das "x" scheint dann die jeweilige Ausführung zu kennzeichnen), die Busanbindung erfolgt i.d.R. über den Anschluss "X50".   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AGU255.JPG">  
   
*ClipIn-Modul des Typs AGU2.55.*  
   
---   
   
## 10.4 Bedieneinheiten  
   
Die Bedieneinheit (am Wärmeerzeuger selbst) der Systeme der letzten Jahre (mit den Reglertypen LMU7x, LMS1x, RVS) sind üblicherweise Modelle des Typs **AVS37.xxx**. Sie sehen herstellerübergreifend recht identisch aus, können aber bei bestimmten Systeme (bspw. Wärmepumpen) zusätzliche Bedienelemente oder Funktionen aufweisen.   
Wenn man das Aussehen dieser AVS37-Bedieneinheiten und der QAA75.61x-Raumgeräte vergleicht, so kann man feststellen, dass sich die beiden Geräte sehr ähneln. Die Art der Bedienung ist in dem meisten Fällen ebenso identisch. Die heizungsseitigen Bedieneinheiten stellen i.d.R. die Temperatur des Wärmeerzeugers (bspw. Kesseltemperatur) dauerhaft dar, die Raumgeräte hingegen üblicherweise die Raumtemperatur. Beide Geräte senden den jeweiligen Wert regelmäßig (etwa alle zehn Sekunden) als Broadcast (INF-Nachricht) über den BSB.   
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AVS37.jpg">  
   
*Eine Bedieneinheit des Typs AVS37.xxx.*  
   
---   
   
Als Nachfolger des Modells AVS37 gilt das **AVS74.xxx**. Es ist mit einem 3,8" LCD-Display und einem Dreh-/Drückknopf ausgestattet, mit dem sämtliche Einstellungen vorgenommen werden. Es kommt ebenfalls als Raumgerät unter der Bezeichnung [QAA74](kap10.md#1053-qaa74) zum Einsatz.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA74.jpg">  
  
*Eine AVS74.xxx Bedieneinheit.*    
   
---   
   
In jüngerer Zeit wird von einigen Herstellern bei bestimmten Geräteserien ein neuer Typ von Bedieneinheit verbaut, die Modellbezeichnung lautet **QAA75.91x**. Die Bedieneinheit scheint (zumindest bei bestimmten Herstellern) abnehmbar und mithilfe eines Adapters (Brötje: "ISR RGA") im Wohnraum installiert und zusätzlich als Raumgerät genutzt werden kann. Die Bedienung des Wärmeerzeugers erfolgt in dem Fall weiterhin über diese Komponente.     
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA75911_kessel.jpg">  
   
*Eine Bedieneinheit des Typs QAA75.91x.*  
  
  
---  
  
Darüber hinaus gibt es ein weiteres Modell, das **AVS77.xxx**. Diese Bedieneinheit ist uns bisher nur bei einem Baxi-Modell (Baxi Luna Duo Tec MP) gemeldet worden. Dieses Modell weist u.a. Knöpfe für die gradweise Veränderung des TWW- und HK-Sollwertes auf, verfügt jedoch nicht mehr über einen Drehknopf.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AVS77.png">  
   
*Eine Bedieneinheit des Typs AVS77.xxx.*  
    
| Hinweis |
|:--------|
| Es scheint, als ob eine Änderung der Betriebsart mittels der TWW-/HK-Taste (in der Mitte der Bedieneinheit) bei bestimmten Einstellungen zur Folge hat, dass eine Änderung der Betriebsart mittels BSB-LAN und den 'regulären' Parametern 1600 (TWW) und 7xx (HK) nicht mehr möglich ist, wenn eine andere Einstellung als "beide" mittels erwähnter Taste ausgewählt wurde. Die Funktion dieser neuen Taste ist in BSB-LAN (bisher) nicht hinterlegt. Soll eine Änderung der Betriebsarten via BSB-LAN gewünscht sein, so ist darauf zu achten, dass die Betriebsart mittels erwähnter Taste auf "beide" eingestellt ist. |     
    
---  
  
## 10.5 Konventionelle Raumgeräte für die aufgeführten Reglertypen  

Im Folgenden wird kurz auf die unterschiedlichen Raumgeräte eingegangen. Auch diese werden prinzipiell von SIEMENS hergestellt und von den verschiedenen Heizungsherstellern gebrandet. Somit sind sie herstellerübergreifend einsetzbar, d.h. ein entsprechendes QAA-Raumgerät von bspw. Elco kann prinzipiell an einer Brötje-Heizung eingesetzt werden (natürlich immer vorausgesetzt, dass es sich um das richtige Modell handelt). Ob dabei in Einzelfällen gewisse Einschränkungen bestehen, ist bisher nicht bekannt bzw. bei Tests nicht aufgefallen.  
  
Die nachfolgende Beschreibung beginnt dabei mit den Raumgeräten für die aktuellen Heizungsregler (RVS und LMS), die auch von BSB-LAN voll unterstützt werden (sog. "Broetje ISR").  

Anmerkung: Es scheint, als wenn das Produktportfolio um neue Raumgeräte und weiteres Zubehör ergänzt wurde. Bei Gelegenheit werde ich die m.E. relevanten Produkte hier hinzufügen.
  
---  
  
### 10.5.1 QAA55 / QAA58  
Das QAA55 ist das ‚kleinste‘ und günstigste ISR-Raumgerätemodell. Bei Brötje wird es als „RGB B“ geführt, manchmal ist es auch als „Raumgerät Basic“, „ISR RGB“ o.ä. zu finden. Es ist im Funktionsumfang recht eingeschränkt und ist im Grunde mehr als Raumtemperaturfühler mit einigen wenigen zusätzlichen Bedienoptionen anzusehen.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA55.jpg">  
   
*Das QAA55 Raumgerät.*
   
Neben der optionalen Messung der Raumtemperatur bietet es eine Präsenztaste und die Möglichkeiten zur Umschaltung der Betriebsart sowie zur Veränderung der Raumsolltemperatur. Es verfügt lediglich über ein kleines LCD-Display, das die aktuelle Raumtemperatur anzeigt. Angeschlossen wird es über ein zweipoliges Kabel am BSB.  
   
Das QAA58 ist die Funkvariante des QAA55. Es ist batteriebetrieben, der Funkempfänger AVS71.390 (Frequenz 868 MHz) muss wiederum per Kabel am Anschluss X60 des Kesselreglers angeschlossen werden.
  
---  
  
### 10.5.2 QAA75 / QAA78  
Das QAA75.61x ist das ‚große‘ ISR-Raumgerät. Es weist neben dem integrierten Temperaturfühler den vollen Funktionsumfang der kesselseitigen Bedieneinheit auf. Zusätzlich ist eine Präsenztaste vorhanden, ein manueller TWW-Push kann bei Bedarf i.d.R. durch längeres Drücken der TWW-Betriebsarttaste ausgelöst werden.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA75.jpg">  
   
*Das QAA75.61x Raumgerät.*  
   
Das QAA75.61x heißt bei Brötje „Raumgerät RGT“, manchmal ist es auch als „Raumgerät RGT B Top“, „ISR RGT“ o.ä. zu finden.  
Es wird ebenfalls per Kabel am BSB angeschlossen, wobei ein dritter Anschluss für die optional nutzbare Hintergrundbeleuchtung vorhanden ist (Klemme „G+“ am Regler).  
  
Das QAA78.61x ist die Funkvariante des QAA75.61x. Es ist batteriebetrieben, der Funkempfänger AVS71.390 (Frequenz 868 MHz) muss wiederum per Kabel am Anschluss X60 des Kesselreglers angeschlossen werden. Die oben genannte Bezeichnung „RGT“ wird bei Brötje um ein „F“ erweitert, also „RGTF“.  
   
| Hinweis |  
|:--------|
| An dieser Stelle muss zusätzlich erwähnt werden, dass es offenbar zwei verschiedene Ausführungen des QAA75 gibt: Das bereits erwähnte Raumgerät QAA75.61x und ein optisch nicht identisches QAA75.91x. Wann immer ich in diesem Handbuch das "QAA75" erwähne, so beziehe ich mich dabei auf das bereits vorgestellte Modell QAA75.61x. | 
   
Das QAA75.91x scheint im Bedienungsumfang identisch zum QAA75.61x zu sein, jedoch nur bei bestimmten Modellreihen einiger Hersteller (bspw. Brötje WMS/WMC C, BMK B, BMR B und Baxi Luna Platinum+) zum Einsatz zu kommen. Es scheint die 'heizungsseitige' Bedieneinheit zu sein, die jedoch mittels eines Adapters (Brötje: "ISR RGA") zusätzlich als Raumgerät genutzt werden kann. Die Bedienung des Wärmeerzeugers erfolgt in dem Fall weiterhin über diese Komponente, nur mit dem Vorteil, dass man sie im Wohnbereich installieren und sich ein zusätzliches Raumgerät sparen kann.     
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/qaa75911.jpg">  
   
*Eine QAA75.91x Bedieneinheit, mit Zubehör optional nutzbar als Raumgerät.*  
   
---  
   
### 10.5.3 QAA74  
Das QAA74 ist ein relativ neues Raumgerät, welches das QAA75 ablösen soll/wird. Bei Brötje heißt es "ISR RGP" ("Raumgerät Premium"), bei Siemens "UI400". Es ist mit einem 3,8" LCD-Display und einem Dreh-/Drückknopf ausgestattet, mit dem sämtliche Einstellungen vorgenommen werden. Es kommt bei einigen Modellen ebenfalls als heizungsseitige Bedieneinheit unter der Bezeichnung AVS74 zum Einsatz. 
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA74.jpg">  
  
*Das QAA74 Raumgerät.*  

   
---
  
### 10.5.4 Brötje IDA  
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
  
### 10.5.5 QAA53 / QAA73  
Die Raumgeräte QAA 53 und QAA 73 unterscheiden sich ebenfalls im Funktionsumfang. Zum Einsatz kommen sie bei den OpenTherm-basierten Reglern des Typs LMU6x. Sollte dieser Raumgerätetyp angeschlossen oder anschließbar sein, so ist der Regler nicht ohne Weiteres kompatibel mit dem BSB-LPB-LAN-Adapter! Für weitere Informationen diesbzgl. beachte bitte das [Kapitel 10.2.4](kap10.md#1024-hinweis-spezialfall-lmu54lmu64-regler). 
Weitere Informationen zu diesen Raumgeräten sind bitte den entsprechenden Anleitungen zu entnehmen.  
  
---  
  
### 10.5.6 QAA50 / QAA70  
Auch beim QAA50 und QAA70 besteht prinzipiell der Unterschied im Funktionsumfang. Diese Raumgeräte kommen bei den alten Reglergenrationen zum Einsatz, die lediglich eine PPS-Schnittstelle aufweisen und somit prinzipiell kompatibel mit dem BSB-LPB-LAN-Adapter sind. Der Einsatz von BSB-LAN parallel zu einem vorhandenen Raumgerät ist in diesem Fall nur lesend möglich, Werte und Einstellungen des Heizungsreglers können also nicht via BSB-LAN verändert werden.  
      
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAA70.jpg">  
   
*Ein QAA70 Raumgerät.*  
   
Weitere Informationen zu diesen Raumgeräten sind bitte den entsprechenden Anleitungen zu entnehmen.  
  
---  
  
## 10.6 Sonderzubehör: Webserver OZW672 und Servicetool OCI700  
An dieser Stelle seien der Vollständigkeit halber noch zwei kommerzielle Lösungen erwähnt, mittels derer man Zugriff auf den Heizungsregler via Computer bekommen kann.  
Dies ist zum einen der Webserver OZW672 und zum anderen das Servicetool OCI700.  
   
Der Webserver OZW672 (Brötje: "ISR OZW") wird per Busleitung an den Regler angeschlossen und mit einem Netzwerkanschluss mit dem heimischen Netzwerk und ggf. dem Internet verbunden. Er stellt bei Bedarf eine Verbindung zum (kostenpflichtigen) 'Brötje Datenportal' her und bietet dann mittels Fernzugriff (via PC, Tablet oder Smartphone+App) Möglichkeiten wie Ferndiagnose oder auch Benachrichtigungen im Störungsfall.  
   
Das OCI700 ist das Servicetool, das überwiegend vom Fachhandwerker eingesetzt wird. Es wird lokal mit einem Rechner verbunden, auf dem eine spezielle Software installiert ist und ermöglicht einen Überblick über die Einstellungen des Reglers.  
   
---

## 10.7 Fühlertypen
  
| Hinweis |
|:--------|
| Die nachfolgende Auflistung ersetzt *nicht* die spezifische Beschreibung der verwendeten anlagenspezifischen Fühlertypen! Sie dient lediglich der Veranschaulichung und soll aufzeigen, dass u.U. bspw. auch die Verwendung von kostengünstigeren, universellen Anlegesensoren als Vor- oder Rücklauffühler möglich ist! <br> Bei einem Austausch von Fühlern oder einer Erweiterung des Systems mit zusätzlichen Fühlern muss daher *immer* in der spezifischen Anlagendokumentation nachgesehen werden, welche Fühler anlagenspezifisch zum Einsatz kommen! |  
  
Bei den aktuellen Reglerserien kommen (gelabelte) Siemens-Fühler zum Einsatz, die man wie folgt grob in zwei unterschiedliche Fühlertypen unterscheiden kann:  
- der Außentemperaturfühler **QAC34** ist ein Fühler des Typs **NTC 1k Ohm** (NTC 1000 Ohm Widerstand bei 25°C, Widerstandskennlinie sinkend mit ca. 4%/K bei steigender Temperatur, Messbereich -50...70°C, Toleranz +/- 1K),
- die anderen Fühler **QAD36, QAL36, QAK36, QAR34, QAZ36** sind Fühler des Typs **NTC 10k Ohm** (NTC 10k Ohm Widerstand bei 25°C; Widerstandskennlinie sinkend bei steigender Temperatur).  
Diese Fühler unterscheiden sich jedoch u.a. in ihrer Bauform und dem Messbereich des eingesetzten Fühlerelements, sogar innerhalb einer Produktkategorie (bspw. QAD36 in der Ausführung als BMU- oder Kollektorfühler), so dass ein Ersatz durch universelle und kostengünstigere Standardfühler des Typs NTC 10k Ohm (bei 25°C) nicht immer möglich ist. Speziell bei zwei bzw. drei Fühlertypen/Einsatzbereichen ist jedoch grundsätzlich der Einsatz von kostengünstigeren Standardfühlern des Typs NTC 10k Ohm (bei 25°C) möglich, daher werden diese im Folgenden kurz dargestellt.    

**Siemens QAD36 / Brötje UAF6C**  
Der QAD36 ist ein sogenannter "Anlegefühler" (Brötje: "Universalanlegefühler UAF6C") und kann zur nachträglichen Erweiterung als Vor- und Rücklauffühler eingesetzt werden. Der Fühler ist in einem Gehäuse untergebracht, das auf das entspr. Rohr (bspw. Vorlauf) montiert wird und die Temperatur des Mediums indirekt über die Temperatur der Rohrwand misst. Als Messelement kommt ein NTC 10k Ohm (bei 25°C) mit einem Messbereich von -30...125°C, einer Toleranz von +/- 0,5K und einer Zeitkonstante von 6s zum Einsatz.    
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAD36.png">
  
*Der Siemens QAD36-Anlegefühler, bei Brötje "Universalanlegefühler UAF6C" genannt.*    
  
Als kostengünstige Alternative zu diesem Fühler kann ein universeller NTC 10k Ohm (bei 25°C) Rohranlegefühler verwendet werden. Diese Standardfühler gibt es in verschiedenen Ausführungen, die alle eine einseitige konkave Wölbung der Metallhülse aufweisen, wodurch das Anbringen des Fühlers an einem Rohr erleichtert und die wärmeübertragende Fläche vergrößert wird. Empfehlenswert ist hier m.E. die Variante mit Messinghülse und einem zusätzlichen, leicht gebogenen Messingstreifen, da diese Ausführung aufgrund der schlanken Bauform gut unter eine Rohrisolierung geschoben, der Biegeradius des Messingstreifens etwas an das Rohr angepasst werden kann und das Messing die Wärme gut leitet.  
Es ist empfehlenswert, für die Kontaktfläche eine entspr. Wärmeleitpaste zu verwenden. Zur Sicherung gegen ein Verrutschen ist eine Fixierung mittels Kabelbinder oder Schlauchschelle anzuraten.    
  
**Siemens QAZ36 / Brötje KF ISR**  
Der QAZ36 in der Ausführung als Sonnenkollektorfühler (Brötje: "ISR Kollektorfühler / KF ISR") ist ein Tauchfühler mit einem ca. 1,5m langen *Silikonkabel*. Als Fühlerelement kommt ein NTC 10k Ohm (bei 25°C) mit einem Messbereich von -30...200°C, einer Toleranz von +/- 0,5K und einer Zeitkonstante von ca. 30s zum Einsatz. Der Durchmesser der Hülse beträgt 6mm, die Länge 40,5mm. 
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QAZ36.jpg">  
  
*Ein Siemens QAZ36-Kollektorfühler, bei Brötje "ISR Kollektorfühler / KF ISR" genannt.*  
  
Aufgrund der höheren Umgebungstemperaturen ist bei der Verwendung eines kostengünstigeren NTC 10k Ohm (bei 25°C) Standardfühlers unbedingt auf den höheren Messbereich und das *Silikonkabel* zu achten - PVC-Kabeltypen sind nicht geeignet! 
  
**Siemens QAZ36 / Brötje UF6C**  
Der QAZ36 in der Ausführung als Tauchfühler mit *PVC-Kabel* (Brötje: "Universaltauchfühler UF6C" mit 6m langem PVC-Kabel) kommt bspw. bei Puffer- oder Brauchwasserspeichern zum Einsatz. Als Fühlerelement kommt ein NTC 10k Ohm (bei 25°C) mit einem Messbereich von 0...95°C, einer Toleranz von +/- 0,5K und einer Zeitkonstante von ca. 30s zum Einsatz. Der Durchmesser der Hülse beträgt 6mm, die Länge 40,5mm.  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/UF6C.jpg">  
  
*Ein Siemens QAZ36-Tauchfühler, bei Brötje "Universaltauchfühler UF6C" genannt.*  
  
Dieser Fühler kann ebenfalls durch einen entspr. kostengünstigeren Standardfühler des Typs NTC 10kOhm (bei 25°C) ersetzt werden.  
  
  
| Achtung |
|:--------|
| Die o.g. 'Tauchfühler' sind *nicht* für das direkte Eintauchen in flüssige Medien geeignet! Der Name bezieht sich auf den Einsatz in sog. 'Tauchhülsen', wie sie bspw. bei Puffer- oder Brauchwasserspeichern vorzufinden sind. | 
| *Bei älteren Reglertypen kommen u.U. andere Fühlertypen zum Einsatz, erkennbar an der Produktbezeichnung (bei den Außentemperaturfühlern lauten diese bspw. "QAC**21**" und "QAC**31**") - diese Fühler weisen andere Widerstandswerte und -kennlinien auf und dürfen nicht mit den o.g. Fühlertypen verwechselt werden! <br> Informationen zu den verwendeten Fühlertypen finden sich in der spezifischen Anlangendokumentation.* |    
  
      
---
         
[Weiter zu Kapitel 11](kap11.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

