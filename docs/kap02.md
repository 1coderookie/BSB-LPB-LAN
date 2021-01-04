[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 1](kap01.md)    
    
---
    
# 2. Grundsätzliches zum BSB, LPB und zur PPS-Schnittstelle    
Bei BSB (Boiler System Bus), LPB (Local Process Bus) und PPS (Point-to-Point Schnittstelle) handelt es sich um jeweils verschiedene und untereinander nicht kompatible Bus-Systeme bzw. Schnittstellen. Es können also jeweils nur Geräte angeschlossen werden, die den gleichen Bus- bzw. Schnittstellen-Typ aufweisen.  
  
Bei allen in diesem Handbuch aufgezählten (aktuellen) Reglern des Typs RVS, LMS1x und LMU7x ist ein BSB-Anschluss am Regler zu finden. 
Ein LPB ist standardmäßig nur bei Reglern des Typs RVS (nur Modellreihen 4x und 6x, Ölheizungen und SolarSystemRegler) vorhanden. Bei Reglern des Typs RVS21 (Wärmepumpen), LMS14/15 sowie LMU74/75 (Gasheizungen) ist ein LPB i.d.R. mittels eines ClipIn-Moduls nachrüstbar (s. [Kap. 3.8](kap03.md#38-lpb-nachr%C3%BCsten-mittels-oci420-clipin-modul)).  
PPS ist nur bei alten Reglern vorzufinden und wird heutzutage nicht mehr verbaut.  
  
Im folgenden Kapitel wird etwas näher auf die Unterschiede der beiden Bustypen BSB und LPB eingegangen. Die PPS-Schnittstelle wird in einem eigenen Kapitel kurz vorgestellt, da sie bei aktuellen Geräten nicht mehr vorhanden ist.  
    
---
    
## 2.1 BSB und LPB

BSB (Boiler System Bus) und LPB (Local Process Bus) sind zwei
verschiedene Bus-Typen, die sich vereinfacht in zwei Nutzungsklassen
unterscheiden lassen:

1. Der BSB (Boiler System Bus) ist ein ‚lokaler' Bus zur Nutzung des lokal angeschlossenen
Reglers.  
Angeschlossene Geräte wie bspw. die Bedieneinheit, ein
Raumgerät / Fernbedienung oder auch der (via BSB) angeschlossene Adapter
können nur auf den Regler zugreifen, an dem sie angeschlossen sind.

2. Der LPB (Local Process Bus) ist ein ‚übergreifender' Bus zur Nutzung mehrerer angeschlossener
Regler in einem komunikationsfähigen Verbund.  
Über den LPB können mehrere Regler miteinander verbunden werden und bei
korrekter Parametrierung gewisse Werte miteinander teilen bzw. sich gegenseitig
beeinflussen.  
Auf diese Weise kann bspw. eine Kaskadenschaltung von mehreren Brennern
realisiert werden oder eine Gas- oder Öl-Heizung mit einer Solaranlage
und einem Feststoffkessel regelungstechnisch \'verbunden\' werden.  
Der korrekte Anschluss der einzelnen Komponenten sowie die korrekte
Parametrierung der jeweiligen Regler sollte im Normalfall bereits bei
der Installation der Anlage durch den Heizungsinstallateur erfolgt
sein.

***Beispiel:***  
*Vorhanden sind eine Öl- oder Gasheizung, ein nachgerüsteter
wasserführender Kamin und eine thermische Solaranlage zur Unterstützung
des Heizkreises oder der Warmwasserbereitung.
Alle drei Wärmeerzeuger sind hydraulisch an einem Pufferspeicher
angeschlossen.
Die Wärme für den Heizkreis soll vom Pufferspeicher bezogen werden.*

*Die Regelung der Solaranlage und des Feststoffkessels übernimmt ein
Solarsystemregler (SSR), die Kesselsteuerung der Heizung übernimmt in
diesem Beispiel der interne Heizungsregler. Alle Sensoren, Pumpen,
Mischer etc. sind am SSR angeschlossen, welcher jedoch via LPB mit dem
Heizungsregler verbunden ist. Durch diese Verbindung der beiden Regler
kann somit bspw. eine Pufferspeicherladung geregelt werden, bei der die
Heizung nur aktiv wird, wenn weder Solar noch Feststoffkessel den Puffer
laden / geladen haben.*

*Wenn ein Adapter via BSB an einem der beiden Regler aus oben genanntem
Beispiel angeschlossen ist, kann er folglich nur auf den jeweiligen
Regler 'lokal' zugreifen, an dem er angeschlossen ist (also bspw.
Heizungsregler oder SSR). Pro Regler muss in dem Fall ein Adapter am jeweiligen BSB angeschlossen werden, wenn Zugriff gewünscht ist.*  
  
*Wenn ein Adapter via LPB an einem der beiden Regler aus oben genanntem
Beispiel angeschlossen ist, müssen*  
*1. die Geräte- und Segmentadressen entsprechend der
LPB-Konfigurationsanforderungen eingestellt werden, und*  
*2. beim Adapter eine Zieladresse eingestellt werden, an die die
jeweiligen Anfragen des Adapters geschickt werden (s. [Kap 2.1.2](kap02.md#212-adressierung-beim-lpb) und [Kap. 8](kap08.md)).*   
  
Eine übergreifende Abfrage von Werten oder Parametern zweier oder mehrerer Regler im LPB-Verbund via Adapter kann zwar erfolgen, doch ist diese Funktion noch nicht ausgiebig getestet worden.  
Die spezifischen technischen Daten, Leistungsmerkmale und Anforderungen
an entsprechende Installationen und Parametrierungen hinsichtlich der
Geräte- und Segmentadressen sind den jeweiligen technischen
Dokumentationen der Hersteller zu entnehmen. Hinsichtlich des LPB seien
insbesondere die Dokumentationen „LPB Systemgrundlagen" (Siemens Building 
Technologies - Landis & Staefa Division: CE1N2030D) und „LPB Projektierungsgrundlagen" 
(Siemens Building Technologies - Landis & Staefa Division: CE1N2032D) empfohlen.
   

    
*Bezüglich des Anschlusses des Adapters s. [Kap. 2.3](kap02.md#23-anschluss-des-adapters).*
    
---  
  
### 2.1.1 Adressierung beim BSB  
Beim BSB wird aufgrund des Bussystems jedem Teilnehmer eine spezifische Adresse zugeteilt. Folgende Adressen sind bereits festgelegt:  
   
| Bus-Adresse | Geräteadresse | Gerät (Bezeichnung im Seriellen Monitor) |
|:-----------:|:-------------:|:------------------------:|
| 0x00 | 0 | Heizungsregler („HEIZ“) |  
| 0x03 | 3 | Erweiterungsmodul 1 („EM1“) / Mischer-ClipIn AGU |  
| 0x04 | 4 | Erweiterungsmodul 2 („EM2“) / Mischer-ClipIn AGU | 
| 0x06 | 6 | Raumgerät 1 („RGT1“) | 
| 0x07 | 7 | Raumgerät 2 („RGT2“) | 
| 0x08 | 8 | OCI700 Servicetool („CNTR“) | 
| 0x0A | 10 | reglerseitige Bedieneinheit / Display („DISP“) | 
| 0x0B | 11 | Servicegerät (QAA75 als Servicegerät parametriert) („SRVC“) | 
| 0x31 | 49 | OZW672 Webserver | 
| 0x32 | 50 | (vermutlich) Funkempfänger („FE“) | 
| 0x36 | 54 | Remocon Net B („REMO") |  
| **0x42** |  **66** | **BSB-LPB-LAN-Adapter („LAN“)** |  
| 0x7F | 127 | Broadcast („INF“-Meldungen) |   
   
Dem BSB-LPB-LAN-Adapter wird in der Voreinstellung die Busadresse `0x42` zugeteilt, was der BSB-Adresse 66 entspricht. Die Adresse wird in der Datei `BSB_lan_config.h` festgelegt.  
   
---  
  
### 2.1.2 Adressierung beim LPB  
Beim LPB ist die Adressierung anders als beim BSB. Prinzipiell gibt es verschiedene Segmente (bzw. Segmentadressen) und Geräteadressen. Den Segmentadressen kommt eine andere Bedeutung zu, als den Geräteadressen.  
In diesem Zusammenhang sei lediglich darauf hingewiesen, dass zusätzlich zu diesem Unterschied auch die jeweiligen Adressvergaben selbst beim LPB anders gestaltet sind. Bei der Busadresse `0x00` beispielsweise ist die erste Ziffer hinter dem x die Segmentadresse 0 (also 0=0, 1=1 etc.), die zweite 0 hingegen ist Busadresse des Gerätes plus eins (also 0=1, 1=2 etc.).   
   
Beispiel:  
Das Gerät im obigen Beispiel `0x00` befindet sich im Segment 0 mit der Adresse 1. Die bei BSB-LAN in der Datei `BSB_lan_config.h` voreingestellte Adresse `0x42` bedeutet somit, dass der Adapter im Segment 4 mit der Adresse 3 angemeldet wird.  
   
Da die doch recht komplexe Installation i.d.R. bereits bei der Installation vom jeweiligen Monteur vorgenommen wird, wird an dieser Stelle nicht auf weitere Besonderheiten eingegangen.  
Dem interessierten Anwender seinen an dieser Stelle insbesondere zwei Dokumente von „Siemens Building Technologies - Landis & Staefa Division“ empfohlen:  
- CE1N2030D Local Process Bus LPB Systemgrundlagen  
- CE1N2032D Local Process Bus LPB Projektierungsgrundlagen   
  
*Hinweis:*  
*Die voreingestellte Adresse 0x42 des BSB-LPB-LAN-Adapters entspricht der Segmentadresse 4 mit der Geräteadresse 3.*  
  
---  
    
## 2.2 PPS-Schnittstelle
Die PPS-Schnittstelle findet sich bei *älteren* Reglern und stellt eine
Punkt-zu-Punkt-Schnittstelle dar, mittels derer digitale 
Bedieneinheiten/Raumgeräte wie das [QAA70](kap03.md#366-qaa50--qaa70) angeschlossen werden
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
kann die Anschlussmöglichkeit einer [QAA70](kap03.md#366-qaa50--qaa70)-Raumeinheit überprüft werden - 
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
  
***Im Webinterface von BSB-LAN ist die einzig verfügbare Kategorie bei der Verwendung von PPS die Kategorie 42 "PPS-Bus"!*** 
***Aus den anderen Kategorien sind keinerlei Parameter abrufbar!***  
*Somit entfällt auch die Abfrage von `URL/Q` zur Kontrolle auf nicht-freigegebene Parameter!*

Immerhin lassen sich damit aber die wichtigsten Funktionen einer
intelligenten Heizungssteuerung umsetzen, indem man z.B. gewichtete
Raumtemperaturen sendet und die Solltemperaturen nach vielfältigeren
Kriterien steuern kann.

***Hinweise:***  
Sollte bereits ein QAA70 angeschlossen sein, so ist der Zugriff mittels BSB-LAN nur lesend möglich! Soll BSB-LAN schreibend einwirken, also aktiv Werte und Einstellungen verändern, so muss ein vorhandenes QAA70 dauerhaft deinstalliert werden, da es ansonsten mit den eigenen Werten alles wieder überschreibt!  
   
Bzgl. der spezifischen Bus-Einstellungen in der Datei *BSB_lan_config.h* beachte die dortigen Hinweise in [Kap. 5](kap05.md#5-einstellungsrelevante-parameter-der-bsb-lan-software).   
   
Über PPS tauschen Heizung und Raumgerät bzw. BSB-LAN permanent Daten aus. Das Protokoll ist sehr zeitkritisch. Das Aufrufen von längeren Webseiten führt dazu, dass der Arduino nicht rechtzeitig auf entsprechende Anfragen der Heizung reagieren kann, weswegen die Heizung dann denkt, dass die Gegenseite ausgefallen ist. Das ist an sich kein Problem, nach ca. 10-20 Sekunden, nachdem der Arduino wieder „ansprechbar“ ist, haben sich beide wieder verständigt. Bis dann aber wieder alle Werte ausgetauscht bzw. aktualisiert sind, kann es noch mal 1-2 Minuten dauern, so dass sich Änderungen dann erst entsprechend verzögert zeigen. Von zu vielen Anfragen auf den Arduino sollte daher bei PPS abgesehen werden und etwaige Sensoren etc. dann ggf. auf einen zweiten Arduino ausgelagert werden.   
  
Bei der ersten Verwendung bzw. nach einem Reboot des Arduino muss man (anders als bspw. beim BSB) einige Zeit abwarten, bis die Parameter abrufbar/verfügbar sind.  
  
***Wichtiger Hinweis für Nutzer des (veralteten) Setups Adapter v2 + Arduino Mega 2560:***   
Aufgrund der zeitkritischen Kommunikation bei PPS ist es sinnvoll, das Setup auf die Nutzung der Hardware-Serial umzustellen. Dazu sind folgende Änerungen vorzunehmen: 
- Die Adapterplatine v2 muss *komplett* bestückt sein. 
- Es darf nur die Lötbrücke SJ1 gesetzt sein.  
- Die Platine muss um eine Pin-Reihe versetzt in Richtung Mitte des Arduinos eingesetzt werden. 
- Die Konfiguration muss entsprechend geändert werden, indem die BSB-bus-Variable auf die Pins 19 (RX) und 18 (TX) gesetzt wird.  
   
----  
  
## 2.3 Anschluss des Adapters  
  
**Prinzipiell erfolgt der Anschluss des Adapters analog zu dem Anschluss optionaler Raumgeräte. Die jeweiligen Kontakte sind den herstellerspezifischen Unterlagen zum Heizungssystem zu entnehmen.**  
  
Ist nur ein BSB-Anschluss verfügbar (bspw. bei Wärmepumpen mit einem RVS21-Regler) und/oder bereits ein Raumgerät vorhanden, so kann der Adapter parallel zu einem bereits installierten Raumgerät an die gleichen Anschlüsse angeschlossen werden.  
  
*Hinweis:*  
Da es sich bei BSB um ein Bussystem handelt, kann der Adapter auch bei einem bereits im Wohnraum installierten kabelgebundenen Raumgerät angeschlossen werden!  
Sollte kein Raumgerät vorhanden sein, so sollte man überprüfen, ob es nicht einfacher ist, ein langes dünnes zweiadriges Buskabel in die Wohnung zu verlegen als ein langes LAN-Kabel.
Es ist also nicht zwingend nötig, den Adapter unmittelbar am Aufstellort der Heizung anzuschließen!
  
*Beim Anschließen des Adapters sollte der betreffende Regler stets ausgeschaltet sein, ebenso bei einem Entfernen des Adapters.*  

*Es ist unbedingt darauf zu achten, dass der Regler polrichtig angeschlossen wird!* 
*Ein verkehrter Anschluss kann eine Beschädigung des Reglers und/oder Adapters zur Folge haben!*  
  
---  
  
**Adapterplatine:**  
Bei der Adapterplatine sind die Anschlüsse mit CL+/DB und CL-/MB gekennzeichnet. Bei einem Nachbau ist der Schaltplan zu beachten.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-unbestueckt_anschluss.jpeg">
  
*Die unbestückte Platine.*  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-bestueckt_anschluss.jpeg">
  
*Die bestückte Platine.*    
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/HW-Setup.jpg">
    
*Das komplette Setup (Arduino Due + LAN-Shield + BSB-LPB-LAN-Adapter v3) inklusive der entsprechenden Kabel.*  
  
---  
  
**BSB:**  
Der Anschluss des Adapters erfolgt an den beschriebenen Pins des BSB mit 'Plus an Plus' und 'Minus an Minus':  
Adapter-"CL+" an Regler-"CL+" sowie  
Adapter-"CL-" an Regler-"CL-".  
  
Der zusätzliche Anschluss „G+“ beim BSB führt 12V und ist für die Hintergrundbeleuchtung der entsprechenden Raumgeräte vorgesehen. Dieser ist für den Anschluss des Adapters NICHT zu verwenden!  
(Sollte der Adapter irrtümlicherweise an G+ statt an CL+ angeschlossen werden, so leuchtet zwar die LED, allerdings ist keinerlei Funktion gegeben.)  
  
---  
  
**LPB:**  
Der Anschluss des Adapters erfolgt an den beschriebenen Pins des LPB, meist mit DB und MB gekennzeichnet:  
Adapter-"DB" an Regler-"DB" sowie  
Adapter-"MB" an Regler-"MB".  
  
---  
  
**PPS:**  
Hier sind es häufig die die Anschlüsse A6 und M oder MD, wobei dann  
"A6" an "CL+" und  
"M"/"MD" an "CL-"  
des Adapters anzuschließen ist.  
  

---  

***Kennzeichnung der Anschlüsse:***  
   
-   Der **BSB** ist hersteller- und reglerübergreifend leider nicht einheitlich gekennzeichnet. Mögliche Bezeichnungen sind u.a.:  
    - „CL+ & CL-"   
    - „FB" (Fernbedienung = Raumgerät)  
    - „BSB" (bei FB und BSB manchmal zusätzlich mit Nennung der Pole „CL+ & CL-")  
    - „BSB & M" (bei der Kennzeichnung „BSB & M" entspricht BSB → CL+ und M → CL-)
    - "X86" bei einem RVS21-Regler (s. Abb. weiter unten)  
    
    Ist bei den jeweiligen Anschlüssen lediglich eine Nummerierung zu erkennen (häufig bei "FB": 1,2,3), so ist in der spezifischen Bedienungsanleitung nachzusehen, welche dieser Pins mit CL+ und CL- belegt sind.  
    Bitte den Anschluss G+ *nicht* benutzen, dies ist kein Buspin!  
    Der Anschluss des Adapters an den BSB erfolgt wie erwähnt analog zu dem Anschluss von Raumgeräten. In der gerätespezifischen  Bedienungsanleitung finden sich diesbzgl. die reglerspezifischen Angaben. Am Regler selbst sind manchmal auch kleine Abbildungen angebracht, die ein Raumgerät darstellen sollen - auch dies kann zum Auffinden des benötigten Anschlusses hilfreich sein.  
  
-   Der **LPB** ist bei einigen Reglern als solcher gekennzeichnet, manchmal aber auch nur mit den Bezeichnungen „DB"(+) und „MB"(-) versehen.  
   
---   
   
**Die folgenden Abbildungen zeigen exemplarisch die Anschlüsse bei verschiedenen Reglermodellen:**    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-lpb-anschluss.jpg">

*BSB (FB mit CL+ & CL-) und LPB (DB & MB) bei einem Brötje ISR-RVS43.222-Regler.*  
    
---    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-lpb-anschluss-2.jpg">
    
*Anschlüsse b = BSB (CL+ & CL-) und a = LPB (DB & MB) bei einem Siemens RVS63.283-Regler.*  
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BSB-LMS.jpg">  

*BSB am "FB"-Anschluss bei einem LMS1x-Regler.*  
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BSB-X86-RVS21.jpg">      

*BSB am "X86"-Anschluss eines RVS21-Reglers (Achtung, nur bestimmte Pins!).* 
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-servicebuchse.jpg">
    
*BSB (CL+ & CL-) an der vierpoligen Servicebuchse vorne in der Bedieneinheit eines ISR Plus. Die (dauerhafte) Verwendung dieses Anschlusses ist aufgrund einer mangelnden Zugentlastung jedoch nicht zu empfehlen.*  
   
---  
  
***Hinweise zum Anschlussstecker:***  
   
Der Anschluss der Leitungen an die jeweiligen Kontakte sollte prinzipiell immer mit den spezifischen Steckern erfolgen, sofern diese vorhanden sind. Eine umfassende Nennung der entsprechenden Stecker kann hier leider nicht erfolgen, da die Stecker kodiert und teilweise unterschiedlich belegt sind. Meist findet man aber in den Bedienungsanleitungen Teilenummern der passenden Stecker, um ein Raumgerät an den Regler anzuschließen. 
Beispielhaft sei hier der Stecker für den dreipoligen FB-Anschluss genannt, der bei den meisten Reglern zu passen scheint: [Brötje Stecker Raumgerät ISR, Rast 5- 3pol. = 627528](https://polo.broetje.de/mobile/mobile_view.php?type=1&pid=5316&w=1680&h=1050)  
   
***BSB / LPB / PPS:*** Sollten die originalen Stecker nicht unmittelbar erhältlich oder verfügbar sein, können auch (möglichst isolierte) 6,3mm-Kabelschuhe verwendet werden.  
   
***Vierpoliger Servicestecker:*** Für den (vorübergehenden) Anschluss am vierpoligen Servicestecker vorne am Bedienteil können 2,54mm DuPont-Stecker (weiblich) genutzt werden. Diese finden sich bspw. bei den typischen Breadboard-Verbindungskabeln und bei diversen Kabeln im Desktop-PC-Bereich (bspw. interner Lüfteranschluss, interner Lautsprecher).   
   
---
   
***Hinweise zum Kabel:***  
   
***LPB:*** Um vor Störeinflüssen möglichst geschützt zu sein, sollten die Anschlusskabel für den LPB-Anschluss gemäß LPB-Projektierungsgrundlagen1 einen Querschnitt von 1,5mm² aufweisen, zweiadrig verdrillt und geschirmt sein (Leitungslänge max. 250m pro Busteilnehmer, max. Gesamtlänge 1000m).  
  
***BSB:*** Für den BSB-Anschluss sind Cu-Leitungen mit mindestens 0,8mm² (bis 20m) Querschnitt zu wählen, bspw. LIYY oder LiYCY 2 x 0,8. Bei Leitungslängen bis 80m sollte 1mm², bis 120m sollten 1,5mm² Querschnitt gewählt werden2. 
Generell ist eine parallele Verlegung mit Netzleitungen zu vermeiden (Störsignale), geschirmte Leitungen sind ungeschirmten Leitungen immer vorzuziehen.  
   
Entgegen der offiziellen Empfehlungen berichteten verschiedene Nutzer von positiven Ergebnissen mit Telefon-Verlegekabeln, 0.5-0.75mm Lautsprecherkabeln etc. Bevor also ein Kauf neuer Kabel getätigt wird, kann auch bereits vorhandenes Kabel getestet werden.  
   
---
    

     
[Weiter zu Kapitel 3](kap03.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

