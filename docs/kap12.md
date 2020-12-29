[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 11](kap11.md)  
    
---
    

# 12. Hardware in Verbindung mit dem BSB-LPB-LAN-Adapter
    
    
---
    
## 12.1 Der Arduino Due
*Grundsätzlich ist die Verwendung eines [originalen Arduino Due](https://store.arduino.cc/arduino-due) zu empfehlen.*  
Erfahrungsgemäß können jedoch auch günstige Nachbauten des Arduino Due verwendet werden, der Einsatz dieser Clones ist normalerweise problemlos möglich. Bei diesen sollte beim Kauf allerdings darauf geachtet werden, ob in den Produktbeschreibungen auf ein verändertes Platinenlayout, geänderte Pinbelegungen o.ä. hingewiesen wird. Sollte dies der Fall sein, so sind ggf. in der Datei *BSB_lan_config.h* diesbezügliche Anpassungen vorzunehmen.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/due_clone_pp.jpg">  
   
*Ein kompatibler Clone des Arduino Due.*  

   
***Hinweise:***  
Es wird empfohlen, den Arduino mit einem externen Netzteil an der Hohlsteckerbuchse zu betreiben.  
Laut den technischen Daten von Arduino liegt dabei die empfohlene Versorgungsspannung in einem Bereich von 7-12V (Limit: 6-20V). Die Versorgung mit einem 9V-Steckernetzteil (ca. 500-1000mA) stellte sich bisher als zuverlässige Lösung dar.  
Soll die Stromversorgung trotzdem über die USB Buchse des Due erfolgen, so ist möglichst der 'Programming Port', also der mittlere USB Port (neben der Hohlsteckerbuchse gelegen) zu nutzen.  
    
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***      
  

---
    
## 12.2 Das LAN-Shield
*Grundsätzlich ist die Verwendung eines [originalen Arduino Ethernet-Shields](https://store.arduino.cc/arduino-ethernet-shield-2) zu empfehlen, das direkt auf den Arduino Due aufgesteckt werden kann.*  

Die LAN-Shields gibt (bzw. gab) es in zwei verschiedenen Ausführungen. Zum einen mit einem WIZnet W5100-Chip (v1), zum anderen mit einem W5500-Chip (v2).  
Die Verwendung des aktuellen v2-Shields (W5500) wird empfohlen, es ist u.a. im offiziellen [Arduino-Store](https://store.arduino.cc/arduino-ethernet-shield-2) und bei [Reichelt](https://www.reichelt.de/arduino-shield-ethernet-shield-2-ohne-poe-arduino-shd-eth2-p159410.html) erhältlich.  
Erfahrungsgemäß können jedoch auch günstige Nachbauten dieser Shields verwendet werden, der Einsatz dieser Clones ist normalerweise problemlos möglich. Allerdings sollte beim Kauf darauf geachtet werden, ob in den Produktbeschreibungen auf ein verändertes Platinenlayout, geänderte Pinbelegungen o.ä. hingewiesen wird. Sollte dies der Fall sein, so sind ggf. in der Datei *BSB_lan_config.h* diesbezügliche Anpassungen vorzunehmen.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/lanshield_clone.jpg">  
   
*Ein kompatibler Clone eines LAN-Shields mit einem W5100-Chip.*  
       
***Hinweise:***     
Bei der Installation der Arduino IDE sollte darauf geachtet werden, dass die aktuelle Version der Ethernet-Bibliothek (v2.0 oder höher) verwendet wird.  
Als LAN-Kabel sollte möglichst eine geschirmte Ausführung mit einer Mindestlänge von 1m verwendet werden.
            
Bei einigen Clones des Typs W5100 scheinen die LEDs des RJ45-Anschlusses nicht korrekt angeschlossen zu sein. So kann es bspw. vorkommen, dass die Traffic-LED (häufig gelb) keinerlei Aktivität anzeigt. Dies stellt jedoch normalerweise kein weitergehendes Problem dar, da es die Funktion nicht negativ zu beeinflussen scheint.  

Hin und wieder berichten User von Problemen der Nicht-Erreichbarkeit des Shields (Symptom 'frozen-shield'). Diesbzgl. gibt es verschiedene Berichte über Lösungen für dieses Problem. FHEM-Forumsuser "frank" hat [hier](https://forum.fhem.de/index.php/topic,29762.msg873073.html#msg873073) eine Lösung beschrieben, die bei ihm Abhilfe schaffte und für Stabilität sorgt. Dafür hat er eine RC-Reihenschaltung bestehend aus einem 100µF-Kondensator und einem 2,7kOhm-Widerstand zwischen RESET und GND hinzugefügt.  
   
Des Weiteren scheint es bei LAN-Shield-Clones des Typs W5100 häufig der Fall zu sein, dass auch andere Bauteile anders dimensioniert sind, als im original Arduino-Schaltplan spezifiziert. Konkret handelt es sich dabei u.a. um ein SMD-Widerstandsnetzwerk nahe der RJ45-Buchse.  
Die folgenden Bilder zeigen zuerst ein original Arduino-Shield mit dem korrekten achtpoligen 49.9 Ohm Widerstandsnetzwerk (gekennzeichnet mit "49R9"), dann ein Clone-Shield mit einem 51 Ohm Widerstandsnetzwerk (gekennzeichnet mit "510") und nachfolgend ein Clone-Shield mit einem 510 Ohm Widerstandsnetzwerk (gekennzeichnet mit "511").  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Widerstandsreihe_original.png">
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Widerstandsreihe_510.jpg">
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Widerstandsreihe_511.jpg">

Diversen Internetquellen zufolge scheint es in Einzelfällen bei den Clone-Shields mit dem 510 Ohm Widerstandsnetzwerk (gekennzeichnet mit "511") zu Problemen wie einer instabilen Verbindung, unzuverlässigen Erreichbarkeit, verringerten Netzwerkgeschwindigkeit bis hin zur kompletten Nicht-Erreichbarkeit kommen. Inwiefern die beschriebenen Probleme letztlich wirklich der geänderten Widerstandsgruppe oder anderen Faktoren wie einer mangelhaften Stromversorgung des Arduino oder einer fehlerbehafteten Netzwerkinfrastruktur (Kabel, Switches etc.) geschuldet sind, ist allerdings nicht immer nachvollziehbar.  
Es wird jedoch berichtet, dass das zusätzliche Bestücken mit zwei 100 Ohm Widerständen (1/4 W) Abhilfe schaffen soll. Diese seien auf der Unterseite des Shields an den Pins 1+2 (Tx+/Tx-) sowie 3+6 (Rx+/Rx-) der RJ45-Buchse anzulöten.  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Pins_RJ45.png">
    
Wer die Diskussion dazu im FHEM-Forum nachlesen möchte, kann das [hier](https://forum.fhem.de/index.php/topic,29762.msg865768.html#msg865768) tun.  

    
---
   
## 12.3 Verwendung optionaler Sensoren: DHT22 und DS18B20
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
*Die nachfolgend beschriebenen Lösungen berücksichtigen dies noch nicht, es wird aber so schnell wie möglich auch hier die entspr. Umsetzung beschrieben werden.*      
  
Es besteht die Möglichkeit, zusätzliche Sensoren des Typs DS18B20
(OneWire-Temperatursensor) und DHT22 (Temperatur- und
Feuchtigkeitssensor) direkt an bestimmte Pins des Adapters bzw. Arduino
anzuschließen. Die entsprechenden Bibliotheken für die Arduino IDE sind
bereits im Softwarepaket des Adapters integriert.

Der Anschluss der Sensoren kann i.d.R. an GND und +5V des Adapters / Arduino
(unter zusätzlicher Verwendung der fühlerspezifischen
PullUp-Widerstände!) stattfinden.

Zur Nutzung dieser Sensoren muss lediglich die *Konfiguration in der
Datei BSB\_lan\_config.h entsprechend angepasst werden*: Es sind die
jeweiligen Definements zu aktivieren und die für DATA genutzten
Digitaleingänge bzw. Pins festzulegen (s. hierzu auch Kap. [5](kap05.md)).

Auf die Daten der Sensoren kann nach erfolgter Installation über das
Webinterface (jeweilige Links im oberen Bereich) oder mittels des
URL-Befehls /T zugegriffen werden.  
   
Darüber hinaus werden sie unter `<URL>/ipwe.cgi` standardmäßig mit angezeigt. Voraussetzung hierfür ist jedoch, dass die IPWE-Erweiterung in der Datei *BSB\_lan\_config.h* durch das entspr. Definement aktiviert wurde (s. Kap. [5](kap05.md)).
   
Sollen die gemessenen Werte geloggt werden oder sind
24h-Mittelwertsberechnungen gewünscht, so kann dies mit den jeweiligen
Anpassungen in der Datei *BSB\_lan\_config.h* (s. Kap. [5](kap05.md)) ganz einfach realisiert
werden.

***Tipp:***  
*Werden DS18B20-Sensoren verwendet, so werden unter /T (und -falls aktiviert- ebenfalls unter `<URL>/ipwe.cgi`) die jeweils **spezifischen internen Hardwarekennungen (SensorID) der DS18B20-Sensoren** aufgeführt. Diese SensorID ist für eine spätere eindeutige Unterscheidung der einzelnen Sensoren notwendig und sollte bspw. bei der weitergehenden Verwendung mit externen Programmen wie FHEM berücksichtigt werden (Stichwort RegEx).  
Es ist empfehlenswert, die jeweilige SensorID zu notieren und den entspr. Sensor zu beschriften. Dazu kann ein einzelner Sensor kurz erwärmt oder abgekühlt und durch einen erneuten Aufruf von /T anhand der Temperaturschwankung identifiziert werden.  
Werden Sensoren ausgetauscht, hinzugefügt oder entfernt, so ändert sich meist auch die Reihenfolge, in der sie unter /T angezeit werden (da diese auf der SensorID basiert). Wird das Reading also nicht auf die individuelle SensorID ausgelegt, sondern lediglich auf die Bezeichnung "temp\[x\]" wie sie bei /T angezeigt werden, so kommt es früher oder später dazu, dass die entsprechend gemachten Zuordnungen (bspw. VL, RL, Puffer) nicht mehr übereinstimmen.  
Die folgenden Screenshots verdeutlichen das Geschilderte.*  

*Ausgabe von /T mit zwei installierten Sensoren:*  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/DS18B20_2sensoren_T.jpg">  
   
*Nach dem Hinzufügen eines dritten Sensors und erfolgtem Neustart des Arduino ändert sich die dargestellte Reihenfolge:*     
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/DS18B20_3sensoren_T.jpg">  
   
*Hinweis:  
Werden Änderungen an der Sensorinstallation vorgenommen (Austausch, Hinzufügen, Entfernen), so muss der Arduino neu gestartet werden, damit die Sensoren initial neu eingelesen werden.*  


    
---
    

### 12.3.1 Hinweise zu DHT22-Temperatur-/Feuchtigkeitssensoren
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
*Die nachfolgend beschriebenen Lösungen berücksichtigen dies noch nicht, es wird aber so schnell wie möglich auch hier die entspr. Umsetzung beschrieben werden.*      
  
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
BSB\_lan\_config.h definiert werden!*  
        
Neben den 'nackten' Sensoren gibt es auch noch Ausführungen, die bereits auf einer kleinen Platine angebracht und bei der die drei notwendigen Anschlusspins abgeführt und beschriftet sind. Die folgende Abbildung zeigt ein solches Modell des baugleichen Sensors AM2302.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/AM2302.jpg">  
   
Die Ausgabe der Werte im Webinterface mittels URL-Befehl /T ist wie folgt strukturiert (exemplarisch mit einem Sensor):  
```
temp[0]: 17.80 °C
hum[0]: 55.90 %
abs_hum[0]: 8.47 g/m3
```
Die Ausgabe im Seriellen Monitor mittels /T ist hingegen so strukturiert (exemplarisch mit einem Sensor):  
```
DHT22 sensors: 1
OK,	temp[0]: 18.80, hum[0]: 53.90
```
   
*Tipp:*  
*Im Internet finden sich zahlreiche Tutorials, Leitfäden und Anwendungsbeispiele für die Anwendung von DHT22-Sensoren.*
        
---
    
### 12.3.2 Hinweise zu DS18B20-Temperatursensoren
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
*Die nachfolgend beschriebenen Lösungen berücksichtigen dies noch nicht, es wird aber so schnell wie möglich auch hier die entspr. Umsetzung beschrieben werden.*      
  
DS18B20-Sensoren sind 'echte' 1-Wire-/OneWire-Komponenten der Firma Maxim Integrated (ursprünglich Dallas Semiconductor).  
Jeder Sensor weist eine spezifische interne SensorID auf, die es insbesondere bei größeren Installationen deutlich einfacher macht, einzelne Sensoren zu identifizieren, sofern man vor der finalen Installation die ID ausgelesen und gut sichtbar auf/an den Sensoren angebracht hat (siehe Tipp in Kap. [12.3](kap12.md#123-verwendung-optionaler-sensoren-dht22-und-ds18b20)).  
Neben der üblichen Bauart TO-92 sind die Sensoren auch in wasserdicht
gekapselten Ausführungen mit verschiedenen Kabellängen erhältlich.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/DS18B20.jpg">  

Die gekapselte Ausführung macht den Einsatz gerade im Bereich der Heizungssteuerung
sehr interessant, da hiermit schnell und kostengünstig eine individuelle
Installation für diverse Temperaturmessungen realisiert werden kann.  
   
Die Ausgabe der Werte im Webinterface mittels URL-Befehl /T ist wie folgt strukturiert (exemplarisch mit zwei Sensoren):  
```
1w_temp[0] <16_stellige_ID>: 21.75 °C
1w_temp[1] <16_stellige_ID>: 21.63 °C 
```
Die Ausgabe im Seriellen Monitor mittels /T ist hingegen so strukturiert (exemplarisch mit zwei Sensoren):  
```
1w_temp[0]: 21.75
1w_temp[1]: 21.63
```
Im Logfile der SD-Karte werden die Sensoren anhand der virtuellen Parameter 20020+ aufgeführt, unter denen sie auch in der Datei *BSB_lan_config.h* als zu loggende Parameter aufzuführen sind:  
```
20020;Temperature 0;21.75
20021;Temperature 1;21.63
```  
   
   
***Tipps für die elektrische Installation:***  
Die einzelnen Sensoren weisen i.d.R. drei Pins auf: VCC, DATA und GND.  
Bei den gekapselten Versionen ist die Farbwahl der bereits angeschlossenen Kabel meist wie folgt:  
Rot = VCC (+5V)  
Gelb = DATA  
Schwarz = GND (-)  
   
Kommen mehrere DS18B20-Sensoren und/oder größere Leitungslängen zum
Einsatz, hat es sich bewährt, pro Sensor je einen 100nF-Keramikkondensator (und
ggf. noch einen 10µF-Tantalkondensator zusätzlich) möglichst nah am
Sensor in die Leitung zwischen GND und VCC (+5V) zu positionieren, um
einen Spannungsabfall bei der Abfrage zu kompensieren.  
   
*Anmerkungen:*  
- *Kommen die üblichen gekapselten und bereits verkabelten Sensoren zum Einsatz, so reicht es i.d.R. aus, den Kondensator dort anzuschließen, wo auch die Kabel angeschlossen werden - ein Auftrennen des Kabels nahe des Sensors ist -zumindest bei den Versionen mit 1m und 3m Kabellängen- erfahrungsgemäß nicht nötig.*  
- *Im Gegensatz zu Keramikkondensatoren ist bei der (zusätzlichen) Verwendung von Tantalkondensatoren auf die Polarität zu achten!*  

Der Wert des PullUp-Widerstandes am Adapterausgang zwischen DATA und VCC
(+5V) ist für einen problemlosen Betrieb u.U. kleiner als die
üblicherweise empfohlenen 4,7kΩ zu wählen. 

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
    
## 12.4 Relais und Relaisboards  
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***  
*Die nachfolgend beschriebenen Lösungen berücksichtigen dies noch nicht, es wird aber so schnell wie möglich auch hier die entspr. Umsetzung beschrieben werden.*      
  
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
     
## 12.5 MAX!-Komponenten

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
angepassten Datei *BSB\_lan\_custom.h* findet sich [hier](https://forum.fhem.de/index.php/topic,29762.msg851382.html#msg851382).  
Das in dem Zusammenhang dort erwähnte und verwendete „Arduino-Raumgerät light"
ist in Kap. [12.6.2](kap12.md#1262-raumtemperaturfühler-wemos-d1-mini-dht22-display) vorgestellt.  
    
---
    
## 12.6 Eigene Hardwarelösungen

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
    
### 12.6.1 Raumgeräteersatz (Arduino Uno, LAN-Shield, DHT22, Display, Taster)

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
    
    
### 12.6.2 Raumtemperaturfühler (Wemos D1 mini, DHT22, Display)

FHEM-Forumsmitglied *„Gizmo\_the\_great"* hat basierend auf einem Wemos D1
mini und einem DHT22-Fühler einen Raumfühler realisiert. Die aktuellen
Temperaturen von HK1 und HK2 werden dabei auf einem OLED-Display
angezeigt. Auf dem Wemos D1 läuft ESPeasy.

Eine genauere Beschreibung des Projekts „Raumfühler mit OLED" ist [hier](https://github.com/DaddySun/Smart_Home_DIY) zu finden.  
  
---  
  
### 12.6.3 Raumgeräteersatz mit UDP-Kommunikation (LAN-Anbindung)
  
FHEM-Forumsmitglied *"fabulous"* hat in Anlehnung auf die oben genannte Variante von User "Andreas29" einen Raumgeräteersatz realisiert, der mit dem BSB-LAN-Adapter via UDP kommuniziert. Zur Verwendung kommen dabei ein Arduino Uno samt LAN-Shield, ein 20x4 LCD sowie ein Taster. Eine genaue Beschreibung sowie der entspr. Code ist [hier](https://forum.fhem.de/index.php/topic,110599.0.html) zu finden.  

     
---
    
## 12.7 LAN-Optionen für den BSB-LPB-LAN-Adapter
Obwohl für die Netzwerkanbindung des Adapters definitv die kabelgebundene Variante zu empfehlen ist, kann es in Einzelfällen jedoch nötig sein, eine alternative LAN-Anbindung für den Adapter zu schaffen, da eine Kabelinstallation (LAN oder Busleitung) bis zum Wärmeerzeuger nicht realisierbar ist. Dafür gibt es mehrere Möglichkeiten, die im Folgenden kurz vorgestellt werden.  
*An dieser Stelle sei aber nochmals darauf hingewiesen, dass der Adapter (nur bei Anbindung via BSB!) auch an ein bereits vorhandenes Raumgerät mittels zusätzlicher Busleitung angeschlossen werden kann.* 
    
---
    
### 12.7.1 Nutzung eines PowerLANs / dLANs
Die Nutzung von Powerline-Adaptern, bei denen das 230V-Netz als LAN 'missbraucht' wird, ist eine Option, um eine LAN-Anbindung im Heizungskeller zu realisieren.   

Probleme können hierbei jedoch von Steckernetzteilen ausgelöst werden, bei denen bestimmte Frequenzen auf die Stromleitung übertragen werden.  
Außerdem müssen sich die Powerline-Adapter bzw. die verwendeten Steckdosen an der gleichen Phase des Stromnetzes befinden. Bei Elektroinstallationen, die bspw. über mehrere Stockwerke gehen und jeweils an einen eigenständigen Sicherungskasten angeschlossen sind, kann es daher zu Problemen kommen. Abhilfe können hier sog. Phasenkoppler schaffen, die jedoch zusätzlich angeschafft und vom Elektriker installiert werden müssen.  
    
---
    
### 12.7.2 WLAN: Nutzung eines extra Routers
Eine Möglichkeit für eine WLAN-Anbindung ist, den Adapter via LAN an einen ausgemusterten Router (bspw. eine alte FritzBox) anzuschließen, welcher sich wiederum als Client im bestehenden WLAN-Netz anmeldet. Die Übertragungsraten und Latenzen sind normalerweise für die Nutzung von BSB-LAN absolut ausreichend. Sollte das WLAN-Signal am Aufstellort grenzwertig sein, so könnte der Router mit stärkeren Antennen ausgerüstet werden.  

Neben dem Einsatz eines 'normalen' Routers können auch kleine Geräte genutzt werden, die einen WLAN-Client- bzw. einen WLAN-Client-Bridge-Modus anbieten. Diese Geräte stellen (wie die zuvor beschriebene FritzBox-Lösung) per WLAN eine Verbindung zum Netzwerk her und bieten mit einem zusätzlich verbauten LAN-Port die Möglichkeit, den Arduino per LAN-Kabel anzuschließen. Geräte dieser Art sind häufig sehr klein und wie ein Steckernetzteil eine Steckdose, so dass die Installation der Hardware i.d.R. recht unkompliziert stattfinden kann.    

In jedem Fall sollte eine möglichst stabile WLAN-Verbindung angestrebt werden - insbesondere dann, wenn via FHEM o.ä. Logdateien erstellt oder mit zusätzlicher Hardware (HK-Thermostate o.ä.) der Wärmeerzeuger gesteuert oder dessen Verhalten beeinflusst werden soll.  
    
---
   
### 12.7.3 WLAN: Verwendung eines zusätzlichen ESP8266  
  
Eine weitere Möglichkeit für eine WLAN-Anbindung liegt darin, einen ESP8266 (NodeMCU oder Wemos D1) mit dem sechspoligen SPI-Anschluss des Arduino Due zu verbinden.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/due_clone_SPI.jpg">  
  
*Der zu verwendende sechspolige SPI-Anschluss des Arduino Due.*  
   
Die Anschlüsse sind wie folgt zu verbinden:  
  
| Pin DUE | Funktion | Pin ESP8266 |  
|:-----------:|:-------------:|:----------:|  
|SPI 1 | MISO | D06 |  
|SPI 2 | VCC | +5V |  
|SPI 3 | SCK | D05 |  
|SPI 4 | MOSI | D07 |  
|SPI 6 | GND | G |  
|Pin 13 | SS | D08 |  
   
Kommt keine weitere per SPI angeschlossene Komponente (bspw. LAN-Shield, Kartenleser) zum Einsatz, so kann auf den Anschluss von "SS" (SlaveSelect, Pin 13 = D08) verzichtet werden.  
Im Falle der Verwendung von SS kann der Anschluss auch an einem anderen Pin als Pin 13 angeschlossen werden, der entspr. Pin muss in der Datei *BSB_lan_config.h* entspr. definiert werden. In diesem Fall ist jedoch darauf zu achten, dass der zu verwendende Pin nicht zu den geschützten Pins zählt und nicht anderweitig verwendet wird. Es wird daher empfohlen, es bei der Voreinstellung (Pin 13) zu belassen.     
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Wemos_SPI.jpg">  
  
*Die korrespondierenden Anschlüsse beim Wemos D1.*  
     
Es bietet sich an, das LAN-Shield zu entfernen, eine unbestückte Lochrasterplatine passend auf dem Due zu platzieren und mit den entspr. Anschlüssen zu versehen. So kann der Wemos D1 / NodeMCU stabil auf dem Due platziert werden. Je nach Gehäuse ist hier u.U. auf die Bauhöhe zu achten. Empfohlen sei hier ausdrücklich die Verwendung eines Wemos D1, da er einerseits deutlich kleiner ist und andererseits problemlos mit den 5V des sechspoligen SPI-Anschlusses versorgt werden kann (NodeMCUs scheinen diesbezüglich nicht immer problemlos zu funktionieren). 
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Due_WiFi.jpg">  
  
*Wemos D1 auf einer Lochrasterplatine auf dem Arduino Due.*
   
*Achtung:*  
Bei dieser Lösung entfällt jedoch die Möglichkeit, Daten auf eine microSD-Karte zu loggen. Soll dies trotz WiFi-Anbindung weiterhin möglich sein, so muss entweder ein entspr. Kartenmodul zusätzlich oder der ESP parallel zum bestehenden LAN-Shield angeschlossen werden. In beiden Fällen muss der SS-Pin *zwingend* angeschlossen werden (s. Pinbelegung/Anschluss). Ob ein paralleler Betrieb von LAN-Shield und ESP8266 problemlos möglich ist, wurde bisher jedoch noch nicht getestet.   
   
**Flashen des ESP8266:**  
Der ESP8266 muss mit einer speziellen Firmware geflasht werden. Für die Verwendung der Arduino IDE muss darauf geachtet werden, dass zuvor die entspr. ESP8266-Bibliotheken mittels des Boardverwalters installiert wurden.  
Die benötigte Firmware [WiFiSpiESP](https://github.com/JiriBilek/WiFiSpiESP) liegt bereits als zip-file im BSB-LAN-Repository. Das zip-file *muss in einem anderen Ordner als BSB_lan* entpackt werden! Der ESP8266 ist dann mit der Datei *WiFiSPIESP.ino* zu flashen.  
  
**Konfiguration von BSB-LAN:**  
Zur Verwendung muss das Definement `#define WIFI` in der Datei *BSB_lan_config.h* aktiviert werden. Des Weiteren müssen die beiden Variablen `wifi_ssid` und `wifi_pass` entsprechend angepasst und die SSID des WLAN sowie das Passwort eingetragen werden. Diese Angaben können auch im Nachhinein via Webinterface geändert werden.   
  
*Hinweis:*  
Bei Verwendung von DHCP kann die vom Router vergebene IP-Adresse im Seriellen Monitor der Arduino IDE beim Start des DUE ausgelesen werden.
 
  
---  
   
## 12.8 Gehäuse
      
Das Angebot an verfügbaren Gehäusen für einen Arduino Due samt LAN-Shield ist leider recht begrenzt, nur bei einzelnen Anbietern finden sich Kunststoff-, Plexiglas- oder Metallgehäuse. Noch knapper wird die Auswahl, wenn ein zusätzlich aufgestecktes Relaisboard mit untergebracht werden soll. Solltest du gezielt nach Gehäusen für den Due suchen, so wirst du u.U. nicht fündig. In dem Fall suche nach Gehäusen, die für den Arduino Mega 2560 konzipiert sind, denn er weist den gleichen Formfaktor wie der Due auf. Achte jedoch darauf, dass du möglichst ein Gehäuse wählst, das den Due samt aufgesteckten LAN-Shield aufnehmen kann. Gehäuse, die nur den Arduino aufnehmen und im Deckel Schlitze haben, so dass Shields aufgesteckt werden können, sind nicht zu empfehlen, da in dem Fall sowohl das LAN-Shield als auch der Adapter ungeschützt sind.     
   
Neben kommerziellen Produkten und kreativen Selbstbau- und Bastellösungen bietet sich für Besitzer eines 3D-Druckers noch die Möglichkeit, ein entsprechendes Gehäuse selbst herzustellen.  
**FHEM-Forumsmitglied "EPo" war so freundlich, entsprechende STL-Dateien zu erstellen und zur Verfügung zu stellen.**  
**Vielen Dank!**  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BSB-Gehaeuse.jpg">  
  
*3D-Druckmodell des Gehäuses für den Arduino Due inkl. LAN-Shield und Adapter v3.*  
  
Die STL-Dateien sind bereits im GitHub-Repo von BSB-LAN enthalten.  
   
---  
   
## 12.9 Raspberry Pi
Der aktuelle Adapter (v3) kann auch an einem Raspberry Pi genutzt
werden. Es sind dabei jedoch ein folgende Punkte zu beachten:  
- **Eine Verwendung der BSB-LAN-Software ist NICHT möglich (s. unten stehende Hinweise)!**  
- Es muss nur eine doppelreihige Buchsenleiste (anstelle der Pinleisten wie für die Arduino-Verwendung nötig) verwendet werden. 
- Bei kompletter Buchsenlänge des Adapterpinouts (6 Pins 'lang', insgesamt also 12 Pins) darf das erste Pinpaar des Adapters NICHT auf das erste Pinpaar (1/2) des RPi gesteckt werden, sondern muss um einen Pin 'nach hinten versetzt' werden. Man fängt also bei dem Pinpaar 3/4 an.  
Anders formuliert: Man muss beachten, dass der auf der Adapterplatine gekennzeichnete TX1-Pin auf dem RPi-Pin 8 (= GPIO 14, UART0_TXD) liegt, der RX1-Pin dann auf dem RPi-Pin 10 (= GPIO 15, UART0_RXD) etc.  
*Achtung:* Diese Zählweise bezieht sich auf das offizielle RPi-Pin-Layout und die dortige Bezeichnung.  
Die Abbildung unten zeigt für ein besseres Verständnis den unbestückten Adapter *neben* den entspr. RPi-Pins, damit soll lediglich die versetzte Positionierung verdeutlicht werden. 
- Bei dem Betriebssystem des RPi muss der Pin 7 (GPIO 4) vor der Verwendung  
a) als Output-Pin definiert und dann  
b) auf "HIGH" gesetzt werden, da hierüber die Stromversorgung des Adapters erfolgt.  
Dafür sind folgende zwei Befehle im Terminal auszuführen (ggf. mit vorangehendem 'sudo'):   
`gpio -1 mode 7 output`  
`gpio -1 write 7 1`  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/rpi_v3_ausrichtung.jpg">  
  
*Exemplarische Ausrichtung des Adapters entlang der Längsachse der RPi-Pins.*  
   
   
***WICHTIGE HINWEISE:***  
- ***Für die Verwendung des Adapters an einem RPi muss eine gänzlich andere Software genutzt werden: ["bsb_gateway"](https://github.com/loehnertj/bsbgateway) von J. Loehnert!***  
- *Für jeglichen Support in Zusammenhang mit der bsb_gateway-Software kontaktiere bitte direkt den Autor von bsb_gateway!*  
- *Es kann und wird von uns keinerlei Support bzgl. einer RPi-Nutzung erfolgen!*  
- *Von unserer Seite her wurde die Verwendung des Adapters mit der zuvor genannten Software lediglich auf einem RPi 2 getestet. Ob eine einwandfreie Funktion mit aktuelleren RPi-Versionen gegeben ist, können wir nicht beurteilen!*   
- *Für die Nutzung des Adapters mit einem RPi an der PPS-Schnittstelle kann das Python-Script [PPS-monitor](https://github.com/dspinellis/PPS-monitor) von D. Spinellis genutzt werden.*  
  
***Dieses Handbuch bezieht sich nur auf BSB-LAN!***  
   
---
         
[Weiter zu Kapitel 13](kap13.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

