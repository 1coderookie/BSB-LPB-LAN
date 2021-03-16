[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 6](kap06.md)  
    
---
    

# 7. BSB-LAN Setup: Optionale Hardware
   
Das BSB-LAN Setup kann durch optionale Hardware in seinem Funktionsumfang erweitert werden. Im Folgenden werden die standardmäßigen, adapterseitig unterstützten Komponenten wie Sensoren und Relais sowie weitere Hardwarelösungen vorgestellt.  
  
Solltest du ein eigenes, interessantes Projekt umgesetzt haben, was mit dem BSB-LAN Setup zusammenarbeitet und den Funktionsumfang erweitert und möchtest du es gerne auch anderen Usern zur Verfügung stellen, so kontaktiere mich gerne per Email (adapter (ät) quantentunnel.de)!  
     
---
      
## 7.1 Verwendung optionaler Sensoren: DHT22, DS18B20, BME280
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
    
Es besteht die Möglichkeit, zusätzliche Sensoren des Typs 
- DHT22 (Temperatur, Luftfeuchtigkeit; Parameternummern 20100-20199),  
- DS18B20 (OneWire-Sensor: Temperatur; Parameternummern 20300-20399) sowie 
- BME280 (Temperatur, Luftfeuchtigkeit, Luftdruck; Parameternummern 20200-20299) direkt an bestimmte Pins des Adapters bzw. Arduino
anzuschließen. Die entsprechenden Bibliotheken für die Arduino IDE sind bereits im Softwarepaket des Adapters integriert.

Der Anschluss der Sensoren kann i.d.R. an GND und +3,3V des Adapters / Arduino (ggf. unter zusätzlicher Verwendung der fühlerspezifischen PullUp-Widerstände!) stattfinden.

Zur Nutzung dieser Sensoren muss lediglich die *Konfiguration in der Datei BSB_LAN_config.h entsprechend angepasst werden*: Es sind die jeweiligen Definements zu aktivieren und die für DATA genutzten Digitaleingänge bzw. Pins festzulegen (s. hierzu auch Kap. [2.2](kap02.md#22-konfiguration)).

Auf die Daten der Sensoren kann nach erfolgter Installation über das Webinterface (Button "Sensoren" im oberen Bereich oder Kategorie "One Wire, DHT & MAX! Sensors"), mittels des URL-Befehls mit der entspr. Kategorienummer zugegriffen werden oder auch via direkter sensorspezifischer Parameternummern.  
   
Darüber hinaus werden sie unter `<URL>/ipwe.cgi` standardmäßig mit angezeigt. Voraussetzung hierfür ist jedoch, dass die IPWE-Erweiterung in der Datei *BSB_LAN_config.h* durch das entspr. Definement aktiviert wurde (s. Kap. [2.2](kap02.md#22-konfiguration)).
   
Sollen die gemessenen Werte geloggt werden oder sind 24h-Mittelwertsberechnungen gewünscht, so kann dies mit den jeweiligen Anpassungen in der Datei *BSB_LAN_config.h* (s. Kap. [2.2](kap02.md#22-konfiguration)) ganz einfach realisiert werden.

---
    
### 7.1.1 Hinweise zu DHT22-Temperatur-/Feuchtigkeitssensoren
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
  
DHT22-Sensoren werden häufig als „1 wire“ beworben, jedoch handelt es 
sich hierbei NICHT um den OneWire-Bus von Maxim Integrated oder eine andere Form 
eines ‚echten‘ Bussystems, bei dem jeder Sensor eine spezifische Adresse aufweist! 
Die DHT22-Sensoren sind demzufolge auch nicht mit den ‚echten‘ 
Maxim-OneWire-Sensoren/-Komponenten kompatibel.   
   
Die einzelnen DHT22-Sensoren weisen i.d.R. vier Anschlusspins auf, von denen jedoch der dritte Pin von links (bei Ansicht auf die Vorderseite des Sensors) meistens nicht belegt ist. Im Zweifelsfall sollte dies jedoch nochmal nachgemessen werden! Die Belegung der Pins ist üblicherweise wie folgt:  
Pin 1 = VCC (+)  
Pin 2 = DATA  
Pin 3 = i.d.R. nicht belegt  
Pin 4 = GND (-)  

Bei Anschluss des Sensors sollte ein PullUp-Widerstand zwischen VCC (Pin 1) und DATA (Pin 2) in der Größe von etwa 4,7kΩ bis 10kΩ hinzugefügt werden. Meist werden 10kΩ empfohlen, die richtige Größe muss im Zweifelsfall ermittelt werden.  
   
***Bitte beachte:***    
*Kommen mehrere DHT22-Sensoren zum Einsatz, so muss für jeden 
DATA-Anschluss ein eigener Pin am Arduino genutzt und in der Datei
BSB\_LAN\_config.h definiert werden!*  
        
Neben den 'nackten' Sensoren gibt es auch noch Ausführungen, die bereits auf einer kleinen Platine angebracht und bei der die drei notwendigen Anschlusspins abgeführt und beschriftet sind. Die folgende Abbildung zeigt ein solches Modell des baugleichen Sensors AM2302.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AM2302.jpg">  
   
Die Abfrage der Sensoren/Messwerte kann entweder via direktem Parameteraufruf (`URL/20100-20199`) oder durch den Aufruf der entspr. Kategorie erfolgen. Der folgende Screenshot zeigt die Webausgabe eines angeschlossenen DHT22-Sensors.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/DHT22_web.png">  
  
*Darstellung der Messwerte eines DHT22 im Webinterface (Kategorie "One Wire, DHT & MAX! Sensors").*  
   
*Tipp:*  
*Im Internet finden sich zahlreiche Tutorials, Leitfäden und Anwendungsbeispiele für die Anwendung von DHT22-Sensoren.*
        
---
    
### 7.1.2 Hinweise zu DS18B20-Temperatursensoren
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
  
DS18B20-Sensoren sind 'echte' 1-Wire-/OneWire-Komponenten der Firma Maxim Integrated (ursprünglich Dallas Semiconductor).  
Jeder Sensor weist eine spezifische interne SensorID auf, die es insbesondere bei größeren Installationen deutlich einfacher macht, einzelne Sensoren zu identifizieren, sofern man vor der finalen Installation die ID ausgelesen und gut sichtbar auf/an den Sensoren angebracht hat (siehe Tipp in Kap. [12.3](kap12.md#123-verwendung-optionaler-sensoren-dht22-und-ds18b20)).  
Neben der üblichen Bauart TO-92 sind die Sensoren auch in wasserdicht
gekapselten Ausführungen mit verschiedenen Kabellängen erhältlich.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/DS18B20.jpg">  

Die gekapselte Ausführung macht den Einsatz gerade im Bereich der Heizungssteuerung
sehr interessant, da hiermit schnell und kostengünstig eine individuelle
Installation für diverse Temperaturmessungen realisiert werden kann.  
      
Die Abfrage der Sensoren/Messwerte kann entweder via direktem Parameteraufruf (`URL/20300-20399`) oder durch den Aufruf der entspr. Kategorie erfolgen. Der folgende Screenshot zeigt die Webausgabe von vier an Pin 7 angeschlossenen DS18B20-Sensoren.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/DS18B20_web.png">  
  
*Darstellung der Messwerte von vier DS18B20 im Webinterface (Kategorie "One Wire, DHT & MAX! Sensors").*
  
***Tipp:***  
*Werden DS18B20-Sensoren verwendet, so werden in der Kategorie "One Wire, DHT & MAX! Sensors" (und -falls aktiviert- ebenfalls unter `<URL>/ipwe.cgi`) die jeweils **spezifischen internen Hardwarekennungen (SensorID) der DS18B20-Sensoren** aufgeführt. Diese SensorID ist für eine spätere eindeutige Unterscheidung der einzelnen Sensoren notwendig und sollte bspw. bei der weitergehenden Verwendung mit externen Programmen wie FHEM berücksichtigt werden (Stichwort RegEx).*  
*Es ist empfehlenswert, die jeweilige SensorID zu notieren und den entspr. Sensor zu beschriften. Dazu kann ein einzelner Sensor kurz erwärmt oder abgekühlt und durch einen erneuten Aufruf der Sensor-Kategorie anhand der Temperaturschwankung identifiziert werden.  
Werden Sensoren ausgetauscht, hinzugefügt oder entfernt, so ändert sich meist auch die Reihenfolge, in der sie in der enstpr. Kategorie angezeit werden (da diese auf der SensorID basiert). Wird das Reading also nicht auf die individuelle SensorID ausgelegt, sondern lediglich auf die Bezeichnung "temp\[x\]" wie sie in der entspr. Kategorie angezeigt werden, so kommt es früher oder später dazu, dass die entsprechend gemachten Zuordnungen (bspw. VL, RL, Puffer) nicht mehr übereinstimmen.*  
*Hinweis:*  
*Werden Änderungen an der Sensorinstallation vorgenommen (Austausch, Hinzufügen, Entfernen), so muss der Arduino neu gestartet werden, damit die Sensoren initial neu eingelesen werden.*    
   
***Tipps für die elektrische Installation:***  
Die einzelnen Sensoren weisen i.d.R. drei Pins auf: VCC, DATA und GND.  
Bei den gekapselten Versionen ist die Farbwahl der bereits angeschlossenen Kabel meist wie folgt:  
Rot = VCC (+3,3V)  
Gelb = DATA  
Schwarz = GND (-)  
   
Kommen mehrere DS18B20-Sensoren und/oder größere Leitungslängen zum
Einsatz, hat es sich bewährt, pro Sensor je einen 100nF-Keramikkondensator (und
ggf. noch einen 10µF-Tantalkondensator zusätzlich) möglichst nah am
Sensor in die Leitung zwischen GND und VCC zu positionieren, um
einen Spannungsabfall bei der Abfrage zu kompensieren.  
   
*Anmerkungen:*  
- *Kommen die üblichen gekapselten und bereits verkabelten Sensoren zum Einsatz, so reicht es i.d.R. aus, den Kondensator dort anzuschließen, wo auch die Kabel angeschlossen werden - ein Auftrennen des Kabels nahe des Sensors ist -zumindest bei den Versionen mit 1m und 3m Kabellängen- erfahrungsgemäß nicht nötig.*  
- *Im Gegensatz zu Keramikkondensatoren ist bei der (zusätzlichen) Verwendung von Tantalkondensatoren auf die Polarität zu achten!*  

Der Wert des PullUp-Widerstandes am Adapterausgang zwischen DATA und VCC (+3,3V) ist (insbesondere bei großen Leitungslängen und/oder mehreren Sensoren) für einen problemlosen Betrieb u.U. kleiner als die üblicherweise empfohlenen 4,7kΩ zu wählen.  
  
Darüber hinaus scheint es bei komplexeren bzw. größeren Installationen in Einzelfällen so zu sein, dass die Spannungsversorgung mit den 3,3V des Due nicht immer einen problemlosen Betrieb der Sensoren ermöglicht. Da diese OneWire-Sensoren "open drain" sind, können sie auch mit 5V des Due betrieben werden, was einen stabileren Betrieb zur Folge zu haben scheint. Es muss dann allerdings darauf geachtet werden, dass die 5V *nie* an dem GPIO des Due anliegen!  
*Für die Installation heißt das konkret, dass VCC der Sensoren am 5V-Pin des Due angeschlossen wird, der zu verwendende PullUp-Widerstand dann jedoch zwischen DATA und einem 3,3V-Pin des Due platziert werden muss!*  

Von der Verwendung des sogenannten ‚parasitären Modus' ist abzuraten.  
Die Verwendung einer geschirmten Steuerleitung ist zu empfehlen. Die Schirmung sollte dabei einseitig an Masse (GND) angeschlossen werden.  
Um etwaige von der Versorgungsspannung des Arduino-Netzteils ausgehende
Störeinflüsse zu minimieren, kann die Zuleitung der Stromversorgung
arduinoseitig etwa vier bis fünfmal durch einen Ferritring geführt
werden.
   
Kommen *große* Kabellängen zum Einsatz, so ist insbesondere auf eine korrekte Netzwerktopologie zu achten. Hier ist die Lektüre des vom Hersteller herausgegebenen Tutorials "[Guidelines for Reliable Long Line 1-Wire Networks](https://www.maximintegrated.com/en/design/technical-documents/tutorials/1/148.html)" zu empfehlen.  
In diesem Fall sind außerdem weitere Dinge zu beachten, wie bspw. eine empfehlenswerte Hin- und Rückleitung für den Datenkanal, der möglicherweise notwendige Einsatz von zusätzlichen Spannungsquellen, die Verwendung eines dedizidierten Busmasters etc.  
Als vereinfachte Faustregel kann man sagen, je größer die Leitungslängen und je komplexer die DS18B20-Installationen ausfallen, desto kritischer ist die vorhergehende Planung zu betrachten. 
   
*Tipp:*  
*Im Internet finden sich zahlreiche Tutorials, Leitfäden und Anwendungsbeispiele zum Thema 1-Wire/OneWire/DS18B20.*  
   
***Zusammenfassung benötigter Bauteile für eine Installation:***  
- Dreiadriges Kabel, idealerweise geschirmt (Schirmung ist dann einseitig an GND anzuschließen)  
- PullUp-Widerstand 4,7kΩ oder ggf. kleiner, nur einer notwendig, adapter-/arduinoseitig zwischen VCC und DATA positionieren   
- Keramikkondensator 100nF, pro Sensor einer, zwischen VCC und GND nahe am Sensor positionieren  
- optional: Tantalkondensator 10µF, pro Sensor einer (zusätzlich zum Keramikkondensator!), zwischen VCC und GND nahe am Sensor positionieren (bei Tantalkondensatoren bitte die Polarität beachten!)  
- optional: Schraublemmen o.ä., Streifen-/Lochrasterplatine, Gehäuse, ...   
   
***Tipps für die Verwendung im Bereich der Heizungsinstallation:***  
- Werden die gekapselten und bereits mit einem Kabel versehenen Sensoren eingesetzt, so kann es sich bei größeren und verzweigteren Heizungsanlagen lohnen, die Versionen mit 3m anstatt 1m Kabellänge zu nehmen. Sie kosten zwar etwas mehr, bieten jedoch deutlich mehr Spielraum und Bewegungsfreiheit bei der Platzierung der Sensoren.  
   
- Sollen die Sensoren für Temperaturmessungen an Rohren zum Einsatz kommen
(bspw. HK-VL/-RL), so ist es empfehlenswert, ein Bett aus Wärmeleitpaste
für den Kontaktbereich zu verwenden.  
   
- Darüber hinaus haben Tests gezeigt, dass die Positionierung nach einer Rohrbiegung oder eines 90°-"Knicks" (in Strömungsrichtung) an der 'Außenseite' des "Knicks" ideal zu sein scheint, da hier die
Kerntemperatur des Strömungsmediums aufgrund der auftretenden
Verwirbelungen nah an die Rohrwand gelangt.  
   
- Die Metallhülse der gekapselten Bauform sollte möglichst mit einer
metallenen Rohrschelle am Rohr fixiert werden.  
    
- Das Kabel selbst sollte
zusätzlich mit einem Kabelbinder fixiert werden, um Zugkräfte an der
Fühlerhülse sowie ein Verrutschen des Fühlers zu vermeiden.  
   
- Die Rohrdämmung sollte nach Anbringen des Fühlers (unter der Dämmung)
wieder gewissenhaft verschlossen werden. Löcher, Einschnitte o.ä. in
Fühlernähe sind zu vermeiden. Werden Fühler an bisher ungedämmten Rohren
montiert, so ist zumindest für den Bereich des Fühlers eine zusätzliche
Rohrisolierung empfehlenswert, um Messwertverfälschungen durch bspw.
Raum- oder Zugluft zu vermeiden.

- Kommen die Fühler in Tauchhülsen oder Klemmschienen zum Einsatz, ist
ggf. auch hier die Verwendung von zusätzlicher Wärmeleitpaste zu
empfehlen.

- Im Allgemeinen sollten die Fühler etwa ein bis zwei Meter von einer
zusätzlichen Wärmequelle (wie bspw. Heizkessel, Pufferspeicher o.ä.)
entfernt montiert werden.

***Bitte beachte:***  
***Bereits installierte Fühler (bspw. in Tauchülsen von Mischern, 
Pufferspeichern etc.), die an einen Heizungs- oder
Solarregler angeschlossen sind, haben immer Vorrang! Keinesfalls sollte
deren Installation oder der Kontakt mit dem zu messenden Element durch
eine zusätzliche Montage von DS18B20-Sensoren leiden!***  
        
***Bauvorschlag:***  
Bei kleineren DS18B20-Installationen im Heizungsbereich mit übersichtlichen Kabellängen kann man sich einen kleinen 'Verteilerkasten' bauen. Dazu kann man die gekapselten Sensoren nacheinander samt vorgeschalteter Kondensatoren auf einer Streifenplatine anschließen. Lötet man die Kabel der Sensoren nicht an, sondern verwendet statt dessen kleine Schraubklemmen, so kann man im Bedarfsfall problemlos einzelne Sensoren austauschen oder auch das System erweitern. Am Anfang dieser Verteilerplatine wird das Kabel angeschlossen, was zum BSB-LAN-Adapter bzw. zum Arduino geführt wird. Wenn die Optik nicht stört, kann das gesamte Konstrukt kostengünstig in einer Feuchtraum-AP-Verteilerdose untergebracht werden.   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Verteiler_klein.jpg">  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Verteiler_groß.jpg">  

---
  
### 7.1.3 Hinweise zu BME280-Sensoren
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
  
Sensoren des Typs BME280 bieten drei (bzw. fünf) Messgrößen: Temperatur, Luftfeuchtigkeit (zzgl. der errechneten absoluten Luftfeuchtigkeit) sowie Luftdruck (zzgl. der errechneten Höhe). Sie sind klein, i.d.R. unkompliziert anzuschließen und bieten (ausreichend) exakte Messergebnisse.  
**Am I2C-Bus des Arduino Due (ebenfalls am Mega 2560) können bis zu zwei Sensoren des Typs BME280 angeschlossen werden.** Zur Verwendung muss das entspr. Definement in der Datei *BSB_lan_config.h* aktiviert und die Anzahl der angeschlossenen Sensoren festgelegt werden ([s. Kap. 5.2](kap05.md#52-konfiguration-durch-anpassen-der-datei-bsb_lan_configh).  
*Hinweis: Prinzipiell können BME280 auch an einem SPI angeschlossen werden, jedoch* ***nicht*** *am Arduino unseres BSB-LAN-Setups!*  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BME280_double.jpg">  
    
*Ein BME280-Sensor auf einem typischen Breakout-Board (Clone); links = Vorderseite, rechts = Rückseite.*  
  
Folgende Punkte sind dabei zu beachten:  
- Stelle sicher, dass es sich um einen Sensor des Typs BME280 handelt (und nicht um bspw. einen BMP280, BMP180 o.ä.).  
- Stelle sicher, dass du möglichst eine Variante verwendest, die auf dem Breakout-Board bereits PullUp-Widerstände verbaut hat (wie auf dem oben gezeigten Bild). Sollte deine Variante *keine* PullUp-Widerstände verbaut haben, so musst du diese beim Anschluss an den Arduino noch hinzufügen (ca. 10kOhm, zwischen SDA und 3,3V sowie zwischen SCL und 3,3V anschließen)!  
- Stelle sicher, dass der erste Sensor die I2C-Adresse 0x76 hat! Dies ist bei dem oben gezeigten Modul üblicherweise der Fall.  
- Der zweite Sensor muss die Adresse 0x77 erhalten. Wie dies bei dem oben gezeigten Modul zu erreichen ist, wird nachfolgend beschrieben.  
- Stelle sicher, dass du den Sensor an den 3,3V-Pin des Arduino anschließt! Das oben gezeigte Modul hat zwar einen Spannungsregler und Levelshifter verbaut, so dass in dem Fall prinzipiell auch ein Anschluss an 5V erfolgen *könnte* - um aber sicherzustellen, dass keinesfalls 5V an SDA/SCL anliegen, solltest du stets den Anschluss an 3,3V vorziehen.  
  
**Anschluss**  
  
Der Sensor bzw. das Breakout-Board ist i.d.R. bereits eindeutig beschriftet, so dass die Anschlüsse hier klar identifiziert werden können.  
Je nach verwendetem Arduino muss ein anderer I2C-Anschluss verwendet werden:  
- Der **Due** weist zwei I2C-Busanschlüsse auf: SDA/SCL an den Pins 20/21 sowie SDA1/SCL1. Es ist darauf zu achten, dass die Anschlüsse **SDA1 & SCL1** verwendet werden, da der BSB-LAN-Adapter bereits die Anschlüsse SDA/SCL verwendet. SDA1/SCL1 befinden sich neben dem "AREF"-Pin. Sie werden i.d.R. vom LAN-Shield verdeckt und sind nicht nach oben zum/durchs LAN-Shield durchgeführt. Sie sind jedoch unterhalb des LAN-Shields direkt auf dem Due zugänglich. Für eine genaue Positionsbestimmung von SDA1/SCL1 sieh dir bitte das [Pinoutdiagramm in Anhang B](anhang_b.md) an.  
- Der **Mega 2560** weist hingegen nur einen I2C-Busanschluss auf: SDA/SCL an den Pins 20/21. Dieser wird vom alten Adapter v2 nicht belegt, der Anschluss kann für den BME280 verwendet werden.  

Die Verkabelung ist wie folgt vorzunehmen:  

| BME280 | DUE | Mega2560 |
|:------:|:---:|:--------:|
| VIN | 3,3V | 3,3V |
| GND | GND | GND |
| SDA | SDA1 | SDA 20 |
| SCL | SCL1 | SCL 21 |
  
**Adressierung**  
  
Die üblichen Breakout-Boards wie das oben gezeigte BME280-Modul weisen auf der Vorderseite unterhalb des eigentlichen Sensors drei Lötpunkte (oder Lötfelder) auf, bei denen üblicherweise der *linke* und der mittlere Lötpunkt durch eine Leiterbahn miteinander verbunden sind. Dies entspricht i.d.R. der Adresse 0x76. Das nachfolgende Bild zeigt gelb eingekreist diese Verbindung.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BME280_address76.jpg">  
    
*Adresse 0x76: Leiterbahn zwischen dem linken und dem mittleren Lötpunkt.*  

Soll nun ein zweiter Sensor parallel dazu angeschlossen werden, so ist bei dem zweiten Modul diese Leiterbahn vorsichtig(!) und gewissenhaft mit einem feinen scharfen Gegenstand (bspw. Cutter, Skalpell) zu durchtrennen. Danach müssen der *rechte* und der mittlere Pin durch etwas Lötzinn miteinander verbunden werden. Das nachfolgende Bild zeigt skizzenhaft die notwendigen Schritte: Die rote Linie links kennzeichnet den notwendigen 'Schnitt' auf der Platine, die grüne Linie rechts kennzeichnet die danach vorzunehmende Verbindung mittels Lötzinn.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BME280_address77.jpg">  
    
*Adresse 0x77: Die rote Linie markiert die durchgetrennte Leiterbahn, die grüne Linie markiert die neu herzustellende Verbindung.*  
  
**Auslesen**  
  
Die Messwerte des/der angeschlossenen BME280 können wie üblich ausgelesen werden, bspw. durch Aufrufen der Kategorie "One Wire, DHT & MAX! Sensors" unter "Heizungsfunktionen", durch einen direkten Klick auf den Button "Sensoren" oder auch durch die Eingabe der spezifischen Parameternummern (`URL/20200-20299`). Soll ein Loggen, eine Anzeige innerhalb der IPWE-Erweiterung etc. erfolgen, sind die spezifischen Parameternummern der gewünschten Messwerte des jeweiligen Sensors anzugeben.  
Der nachfolgende Screenshot zeigt die entspr. Darstellung eines BME280 innerhalb der Kategorie "One Wire, DHT & MAX! Sensors".  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BME280_screenshot.png">  
    
*Darstellung der Messwerte eines BME280 im Webinterface (Kategorie "One Wire, DHT & MAX! Sensors").*  
    
---
    
## 7.2 Relais und Relaisboards  
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***      
   
Prinzipiell ist es möglich und in der BSB-LAN-Software als Funktion mit speziellen URL-Befehlen auch bereits vorgesehen, dass am Arduino zusätzliche Relais oder Relaisboards angeschlossen werden können. Auf diese Weise können nicht nur Verbraucher geschaltet, sondern auch Zustände angeschlossener Verbraucher abgefragt werden.  
***Es ist NICHT möglich, den Arduino direkt an die multifunktionalen Eingänge des Heizungsreglers anzuschließen!***
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/relaisboards.jpg">  

*Ein einzelnes und ein 4-Kanal Relaismodul für den Einsatz an einem Arduino.*  
       
Die oftmals günstig erhältlichen Relaisboards sind dabei bereits mit Relais bestückt, die 230V-Verbraucher direkt schalten können. Leider kann es aufgrund mangelhafter Qualität oder Überlastung zu diversen Schäden und damit einhergehenden größeren Risiken wie bspw. Bränden kommen. Daher ist die zusätzliche Verwendung von entsprechend dimensionierten Koppelrelais oder Solid-State-Relais überlegenswert. Sollten diese jedoch ausschließlich zum Einsatz kommen und mit ihnen Schaltvorgänge ausgelöst werden, so ist ggf. darauf zu achten, dass Strom- und Spannungsstärke des Arduino ausreichend sind, um den Schaltvorgang des Relais auszulösen.  
   
***ACHTUNG:***  
***Es sollte beachtet werden, dass jegliche Installationen und Arbeiten am 230V-Netz nur von zugelassenen Elektrikern vorgenommen werden dürfen! 230V können tödlich sein!*** *Es ist empfehlenswert, einen Elektriker bereits bei der Planung des Vorhabens mit einzubeziehen.*  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/koppelrelais.jpg">  
   
*Ein übliches Koppelrelais. Die entsprechenden Pins am Arduino werden bei diesem Modell an "14" und "13" angeschlossen.*  
   
*Beispiel:*  
Mittels eines parallel zur Umwälzpumpe einer Solarthermieanlage angeschlossenen Koppelrelais (sofern deren Regelung nicht mit dem Heizungsregler verbunden oder bei diesem integriert ist), wäre es bspw. möglich, den Zustand des arduinoseitigen Kontaktes (offen/geschlossen) und somit den Betriebsstatus der Pumpe abzufragen.  
    

---
     
## 7.3 MAX!-Komponenten

BSB-LAN ist bereits für die Einbindung und Nutzung von MAX!-Komponenten
vorbereitet. MAX-Thermostate, die von BSB-LAN verwendet werden sollen,
müssen anhand der aufgedruckten Seriennummer in der Datei
*BSB\_lan\_config.h* in das Array `max_device_list[]` eingetragen
werden. Nach dem Start von BSB-LAN muss dann an diesen Thermostaten die
Pairing-Taste gedrückt werden, um die Verbindung zwischen BSB-LAN und
den Thermostaten herzustellen.

In der Datei *BSB\_lan\_custom.h* werden für die MAX!-Einbindung
folgende Variablen bereit gestellt:

- `custom_timer`  
Diese Variable wird bei jedem Durchlauf der loop Funktion des
Hauptprogramms auf den Wert von millis() gesetzt.

- `custom_timer_compare`  
Diese Variable kann verwendet werden, um im Zusammenhang mit
`custom_timer` zeitabhängige Ausführungen zu realisieren, z.B., um eine
Aufgabe (Werte abrufen, vergleichen etc.) periodisch auszuführen.

Darüber hinaus stehen alle globalen Variablen aus der Datei
*BSB\_lan.ino* zur Verfügung. Hinsichtlich der MAX!-Funktionalität sind
das insbesondere:

- `max_devices[]`  
Dieses Array enthält die DeviceID des jeweiligen MAX!-Gerätes, das sich
angemeldet hat. Hiermit kann man ggf. bei Bereichnunngen bestimmte
Thermostate ausblenden.

- `max_cur_temp[]`  
Dieses Array enthält die aktuell gemessene Temperatur des Thermostats.
Sinnvoll für Berechnungen sind bei MAX!-Geräten nur die Wandthermostate,
weil diese kontinuierlich die Temperatur übermitteln.
Heizkörperthermostate tun dies nur bei Ventiländerungen oder
Schaltzeitwechseln.

- `max_dst_temp[]`  
Dieses Array enthält die Soll-Temperatur des Thermostats.

- `max_valve[]`  
Dieses Array enthält die momentane Ventilöffnung des
Heizkörperthermostats (bei Wandthermostaten nur verfügbar, wenn diese
entsprechend mit einem Heizkörperthermostat gekoppelt sind).  
    
Die Reihenfolge zwischen den Arrays ist immer gleich, d.h., wenn
`max_devices[3]` der Wandthermostat im Wohnzimmer mit ID xyz ist, dann
ist `max_cur_temp[3]` die momentane Temperatur im Wohnzimmer und
`max_dst_temp[3]` die entsprechende Solltemperatur usw.  
    
Die Reihenfolge innerhalb `max_devices[]` richtet sich danach, wie
sich diese angemeldet haben, bleibt dann aber auch über Neustarts hinweg
konstant, da diese im EEPROM abgespeichert werden (bis diese mit `http://<IP-Adresse>/N`
gelöscht werden). Dennoch sollte man sich nicht darauf verlassen,
sondern im Zweifelsfall, z.B. beim Ausklammern von bestimmten
Thermostaten, immer mit der in `max_device[]` hinterlegten ID
vergleichen (diese kann man der zweiten Spalte der Auflistung unter `http://<IP-Adresse>/X`
entnehmen und ist nicht identisch mit der auf den Geräten aufgedruckten
ID).

Wichtiger Hinweis für diejenigen, die die MAX!-Thermostate über einen
zum CUL/CUNO geflashten Max!Cube (Informationen diesbzgl. s. [hier](https://forum.fhem.de/index.php/topic,38404.0.html)) verwenden:  
Wenn bei der Einrichtung des CUNO BSB-LAN nicht lief (oder anderweitig
beschäftigt war), muss an den betreffenden Geräten nochmals die
Pairing-Taste gedrückt werden. Denn nur bei *diesem* Pairing-Prozess
wird die auf den Geräten aufgedruckte Seriennummer zusammen mit der
sonst intern verwendeten ID (die auch u.a. auch FHEM verwendet)
übermittelt und BSB-LAN kann die entsprechende Zuordnung vornehmen.
Ansonsten weiß BSB-LAN bei den anderen Telegrammen des Cube nämlich
nicht, um welche MAX!-Geräte es geht.  
    
Wird im weiteren Verlauf bspw. mittels FHEM (Hinweise zur Konfiguration 
des MAX-Moduls unter FHEM siehe [hier](https://wiki.fhem.de/wiki/MAX)) die jeweilige
Temperatur mehrerer Wand- und Heizkörperthermostate erfasst, so lässt
sich daraus eine gemittelte Ist- und Soll-Temperatur bilden. Diese kann
dann dem Heizungsregler übermittelt werden, um den Wärmeerzeuger
bedarfsgerechter zu steuern. Eine solche Lösung lässt sich [hier](https://forum.fhem.de/index.php/topic,60900.0.html)
nachlesen.  
FHEM-Forumsmitglied *„Andreas29"* hat dieses Anwendungsbeispiel ohne FHEM
umgesetzt. Eine ausführliche Beschreibung samt der benötigten
angepassten Datei *BSB_LAN_custom.h* findet sich [hier](https://forum.fhem.de/index.php/topic,29762.msg851382.html#msg851382).  
Das in dem Zusammenhang dort erwähnte und verwendete „Arduino-Raumgerät light"
ist in Kap. [7.4.2](kap07.md#742-raumtemperaturfühler-wemos-d1-mini-dht22-display) vorgestellt.  
    
---
    
## 7.4 Eigene Hardwarelösungen

Im Folgenden werden Lösungen von Nutzern vorgestellt, die nicht nur zum
Nachbau anregen, sondern weitere Nutzungsmöglichkeiten von BSB-LAN
aufzeigen und als Inspiration für eigene Projekte dienen sollen.

Wenn du ein eigenes interessantes Projekt erfolgreich umgesetzt hast,
was auch für andere Nutzer hilfreich sein könnte, so würde ich mich
freuen, wenn du dich mit mir in Verbindung setzt. Eventuell kann
auch dein Beispiel an dieser Stelle mit aufgeführt werden. Schicke mir
dazu gerne eine Email an `adapter [ät] quantentunnel.de`.  
Vielen Dank!  
    
---
    
### 7.4.1 Raumgeräteersatz (Arduino Uno, LAN-Shield, DHT22, Display, Taster)

FHEM-Forumsmitglied *„Andreas29"* hat basierend auf einem Arduino Uno
einen Raumgeräteersatz realisiert. Der jeweilige Betriebs- und
Fehlerstatus des Wärmeerzeugers sowie die aktuellen Daten eines
DHT22-Sensors werden auf einem 4x20-LCD dargestellt. Mittels eines
Tasters wird die Funktion der Präsenztaste eines echten Raumgerätes
nachgebildet.
    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Raumgerät_light_innen.jpg">
    
*Das Innenleben des Raumgeräteersatzes.*  
    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Raumgerät_light_Display.jpg">
    
*Das Display des Raumgeräteersatzes.*  
    

Eine ausführliche Beschreibung samt Schaltplan und Software ist [hier](https://forum.fhem.de/index.php/topic,91867.0.html) zu
finden.  
   
Andreas29 hat den Funktionsumfang um Push-Benachrichtigung im Fehlerfall (Errechbarkeit der Heizung, MAX!-Fehler) erweitert, die entspr. Beschreibung sowie die Software sind [hier](https://forum.fhem.de/index.php/topic,29762.msg878214.html#msg878214) zu finden.
    
---
    
    
### 7.4.2 Raumtemperaturfühler (Wemos D1 mini, DHT22, Display)

FHEM-Forumsmitglied *„Gizmo\_the\_great"* hat basierend auf einem Wemos D1
mini und einem DHT22-Fühler einen Raumfühler realisiert. Die aktuellen
Temperaturen von HK1 und HK2 werden dabei auf einem OLED-Display
angezeigt. Auf dem Wemos D1 läuft ESPeasy.

Eine genauere Beschreibung des Projekts „Raumfühler mit OLED" ist [hier](https://github.com/DaddySun/Smart_Home_DIY) zu finden.  
  
---  
  
### 7.4.3 Raumgeräteersatz mit UDP-Kommunikation (LAN-Anbindung)
  
FHEM-Forumsmitglied *"fabulous"* hat in Anlehnung auf die oben genannte Variante von User "Andreas29" einen Raumgeräteersatz realisiert, der mit dem BSB-LAN-Adapter via UDP kommuniziert. Zur Verwendung kommen dabei ein Arduino Uno samt LAN-Shield, ein 20x4 LCD sowie ein Taster. Eine genaue Beschreibung sowie der entspr. Code ist [hier](https://forum.fhem.de/index.php/topic,110599.0.html) zu finden.  

     
---
    
## 7.5 LAN-Optionen für das BSB-LAN-Setup
Obwohl für die Netzwerkanbindung des Adapters definitv die kabelgebundene Variante zu empfehlen ist, kann es in Einzelfällen jedoch nötig sein, eine alternative LAN-Anbindung für den Adapter zu schaffen, da eine Kabelinstallation (LAN oder Busleitung) bis zum Wärmeerzeuger nicht realisierbar ist. Dafür gibt es mehrere Möglichkeiten, die im Folgenden kurz vorgestellt werden.  
*An dieser Stelle sei aber nochmals darauf hingewiesen, dass der Adapter (nur bei Anbindung via BSB!) auch an ein bereits vorhandenes Raumgerät mittels zusätzlicher Busleitung angeschlossen werden kann.* 
    
---
    
### 7.5.1 Nutzung eines PowerLANs / dLANs
Die Nutzung von Powerline-Adaptern, bei denen das 230V-Netz als LAN 'missbraucht' wird, ist eine Option, um eine LAN-Anbindung im Heizungskeller zu realisieren.   

Probleme können hierbei jedoch von Steckernetzteilen ausgelöst werden, bei denen bestimmte Frequenzen auf die Stromleitung übertragen werden.  
Außerdem müssen sich die Powerline-Adapter bzw. die verwendeten Steckdosen an der gleichen Phase des Stromnetzes befinden. Bei Elektroinstallationen, die bspw. über mehrere Stockwerke gehen und jeweils an einen eigenständigen Sicherungskasten angeschlossen sind, kann es daher zu Problemen kommen. Abhilfe können hier sog. Phasenkoppler schaffen, die jedoch zusätzlich angeschafft und vom Elektriker installiert werden müssen.  
    
---
    
### 7.5.2 WLAN: Nutzung eines extra Routers
Eine Möglichkeit für eine WLAN-Anbindung ist, den Adapter via LAN an einen ausgemusterten Router (bspw. eine alte FritzBox) anzuschließen, welcher sich wiederum als Client im bestehenden WLAN-Netz anmeldet. Die Übertragungsraten und Latenzen sind normalerweise für die Nutzung von BSB-LAN absolut ausreichend. Sollte das WLAN-Signal am Aufstellort grenzwertig sein, so könnte der Router mit stärkeren Antennen ausgerüstet werden.  

Neben dem Einsatz eines 'normalen' Routers können auch kleine Geräte genutzt werden, die einen WLAN-Client- bzw. einen WLAN-Client-Bridge-Modus anbieten. Diese Geräte stellen (wie die zuvor beschriebene FritzBox-Lösung) per WLAN eine Verbindung zum Netzwerk her und bieten mit einem zusätzlich verbauten LAN-Port die Möglichkeit, den Arduino per LAN-Kabel anzuschließen. Geräte dieser Art sind häufig sehr klein und wie ein Steckernetzteil eine Steckdose, so dass die Installation der Hardware i.d.R. recht unkompliziert stattfinden kann.    

In jedem Fall sollte eine möglichst stabile WLAN-Verbindung angestrebt werden - insbesondere dann, wenn via FHEM o.ä. Logdateien erstellt oder mit zusätzlicher Hardware (HK-Thermostate o.ä.) der Wärmeerzeuger gesteuert oder dessen Verhalten beeinflusst werden soll.  
    
   
---
         
[Weiter zu Kapitel 8](kap08.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

