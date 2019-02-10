[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 11](kap11.md)  
    
---
    

# 12. Hardware in Verbindung mit dem BSB-LPB-LAN-Adapter #  
    
    
---
    
## 12.1 Der Arduino Mega 2560 ## 
*Grundsätzlich ist die Verwendung eines originalen Arduino Mega 2560 (Rev3) zu empfehlen.*  

Es wird empfohlen, den Arduino mit einem externen Netzteil an der Hohlsteckerbuchse zu betreiben.  
Laut den technischen Daten von Arduino liegt dabei die empfohlene Versorgungsspannung in einem Bereich von 7-12V (Limit: 6-20V). Die Versorgung mit einem 9V-Steckernetzteil (ca. 500-1000mA) stellte sich bisher als zuverlässige Lösung dar.
    
***Hinweise:***  
Es können auch günstige Nachbauten des Arduino Mega 2560 verwendet werden, der Einsatz dieser Clones ist normalerweise problemlos möglich. Bei diesen sollte beim Kauf darauf geachtet werden, ob in den Produktbeschreibungen auf ein verändertes Platinenlayout, geänderte Pinbelegungen o.ä. hingewiesen wird. Sollte dies der Fall sein, so sind ggf. in der Datei *BSB_lan_config.h* diesbezügliche Anpassungen vorzunehmen.  
    
---
    
## 12.2 Das LAN-Shield ## 
*Grundsätzlich ist die Verwendung eines originalen Arduino Ethernet-Shields zu empfehlen, das direkt auf den Arduino Mega 2560 aufgesteckt werden kann.*  

Die LAN-Shields gibt (bzw. gab) es in zwei verschiedenen Ausführungen. Zum einen mit einem W5100-Chip (v1), zum anderen mit einem W5500-Chip (v2).  
Die Verwendung des aktuellen v2-Shields (W5500) wird empfohlen, es ist u.a. im offiziellen [Arduino-Store](https://store.arduino.cc/arduino-ethernet-shield-2) und bei [Reichelt](https://www.reichelt.de/arduino-shield-ethernet-shield-2-ohne-poe-arduino-shd-eth2-p159410.html) erhältlich.  

Bei der Installation der Arduino IDE sollte darauf geachtet werden, dass die aktuelle Version der Ethernet-Bibliothek (v2.0 oder höher) verwendet wird.  
Als LAN-Label sollte möglichst eine geschirmte Ausführung mit einer Mindestlänge von 1m verwendet werden.
    
***Hinweise:***  
Es können auch günstige Nachbauten dieser Shields verwendet werden, der Einsatz dieser Clones ist normalerweise problemlos möglich. Allerdings sollte beim Kauf darauf geachtet werden, ob in den Produktbeschreibungen auf ein verändertes Platinenlayout, geänderte Pinbelegungen o.ä. hingewiesen wird. Sollte dies der Fall sein, so sind ggf. in der Datei *BSB_lan_config.h* diesbezügliche Anpassungen vorzunehmen.  
        
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
   
## 12.3 Verwendung optionaler Sensoren: DHT22 und DS18B20 ##

Es besteht die Möglichkeit, zusätzliche Sensoren des Typs DS18B20
(OneWire-Temperatursensor) und DHT22 (Temperatur- und
Feuchtigkeitssensor) direkt an bestimmte Pins des Adapters bzw. Arduino
anzuschließen. Die entsprechenden Bibliotheken für die Arduino IDE sind
bereits im Softwarepaket des Adapters integriert.

Der Anschluss der Sensoren kann i.d.R. an GND und +5V des Adapters
(unter zusätzlicher Verwendung der fühlerspezifischen
PullUp-Widerstände) stattfinden.

Zur Nutzung dieser Sensoren muss lediglich die Konfiguration in der
Datei *BSB\_lan\_config.h* entsprechend angepasst werden: Es sind die
jeweiligen Definements zu aktivieren und die für DATA genutzten
Digitaleingänge bzw. Pins festzulegen. (s. hierzu auch Kap. [5](kap05.md)).

Auf die Daten der Sensoren kann nach erfolgter Installation über das
Webinterface (jeweilige Links im oberen Bereich) oder mittels der
URL-Befehle /T (für DS18B20) und /H (für DHT22) zugegriffen werden.

Sollen die gemessenen Werte geloggt werden oder sind
24h-Mittelwertsberechnungen gewünscht, so kann dies mit den jeweiligen
Anpassungen in der Datei *BSB\_lan\_config.h* ganz einfach realisiert
werden.

***Tipp:***  
*Werden DS18B20- und/oder DHT22-Sensoren verwendet, werden diese unter
`http://<IP-Adresse>/ipwe.cgi`
standardmäßig mit angezeigt.  
Dabei wird neben den gemessenen Werten auch die jeweils spezifische
Hardwarekennung der Sensoren aufgeführt. Dies ist besonders bei einer
Ersteinrichtung für eine eindeutige Unterscheidung der einzelnen
Sensoren hilfreich.  
Voraussetzung ist, dass das ipwe-Definement in der Datei
BSB\_lan\_config.h aktiviert ist (s. Kap. [5](kap05.md)).*

Auf die näheren Spezifikationen und die elektrische Installation dieser
beliebten Messkomponenten wird an dieser Stelle nicht weiter
eingegangen, es wird hiermit lediglich auf die üblichen
Informationsquellen verwiesen. Dennoch seien im Folgenden ein paar
hilfreiche Tipps erwähnt, die den Einsatz und Betrieb zuverlässiger
gestalten.  
    
    
---
    

### 12.3.1 Hinweise zu DHT22-Temperatur-/Feuchtigkeitssensoren ###

DHT22-Sensoren werden häufig als „1 wire“ beworben, jedoch handelt es 
sich hierbei NICHT um den OneWire-Bus von Maxim oder eine andere Form 
eines ‚echten‘ Bussystems, bei dem jeder Sensor eine spezifische Adresse aufweist! 
Die DHT22-Sensoren sind demzufolge auch nicht mit den ‚echten‘ 
Maxim-OneWire-Sensoren/-Komponenten kompatibel.   
   
***Bitte beachte:***    
*Kommen mehrere DHT22-Sensoren zum Einsatz, so muss für jeden 
DATA-Anschluss ein eigener Pin am Arduino genutzt und in der Datei
BSB\_lan\_config.h definiert werden.*  
        
---
    
### 12.3.2 Hinweise zu DS18B20-Temperatursensoren ###

DS18B20-Sensoren sind (neben der üblichen Bauart) auch in wasserdicht
gekapselten Ausführungen mit verschiedenen Kabellängen erhältlich. Diese
Ausführung macht den Einsatz gerade im Bereich der Heizungssteuerung
sehr interessant, da hiermit schnell und kostengünstig eine individuelle
Installation für diverse Temperaturmessungen realisiert werden kann.

***Tipps für die elektrische Installation:***

Kommen mehrere DS18B20-Sensoren und/oder größere Leitungslängen zum
Einsatz, hat es sich bewährt, je einen 100nF-Keramikkondensator (und
ggf. noch einen 10µF-Tantalkondensator zusätzlich) möglichst nah am
Sensor in die Leitung zwischen GND und VCC (+5V) zu positionieren, um
einen Spannungsabfall bei der Abfrage zu kompensieren.

Der Wert des PullUp-Widerstandes am Adapterausgang zwischen DATA und VCC
(+5V) ist für einen problemlosen Betrieb u.U. kleiner als die
üblicherweise empfohlenen 4,7kΩ zu wählen.

Von der Verwendung des sogenannten ‚parasitären Modus' ist abzuraten.  
Die Verwendung einer geschirmten Steuerleitung ist zu empfehlen.  
Um etwaige von der Versorgungsspannung des Arduino-Netzteils ausgehende
Störeinflüsse zu minimieren, kann die Zuleitung der Stromversorgung
arduinoseitig etwa vier bis fünfmal durch einen Ferritring geführt
werden.

***Tipps für die Verwendung im Bereich der Heizungsinstallation:***

Sollen die Sensoren für Temperaturmessungen an Rohren zum Einsatz kommen
(bspw. HK-VL/-RL), so ist es empfehlenswert, ein Bett aus Wärmeleitpaste
für den Kontaktbereich zu verwenden.  
Darüber hinaus haben Tests gezeigt, dass die Positionierung nach einem
Knick an der Außenseite eines Rohres ideal zu sein scheint, da hier die
Kerntemperatur des Strömungsmediums aufgrund der auftretenden
Verwirbelungen nah an die Rohrwand gelangt.  
Die Metallhülse der gekapselten Bauform sollte möglichst mit einer
metallenen Rohrschelle am Rohr fixiert werden. Das Kabel selbst sollte
zusätzlich mit einem Kabelbinder fixiert werden, um Zugkräfte an der
Fühlerhülse sowie ein Verrutschen des Fühlers zu vermeiden.  
Die Rohrdämmung sollte nach Anbringen des Fühlers (unter der Dämmung)
wieder gewissenhaft verschlossen werden. Löcher, Einschnitte o.ä. in
Fühlernähe sind zu vermeiden. Werden Fühler an bisher ungedämmten Rohren
montiert, so ist zumindest für den Bereich des Fühlers eine zusätzliche
Rohrisolierung empfehlenswert, um Messwertverfälschungen durch bspw.
Raum- oder Zugluft zu vermeiden.

Kommen die Fühler in Tauchhülsen oder Klemmschienen zum Einsatz, ist
ggf. auch hier die Verwendung von zusätzlicher Wärmeleitpaste zu
empfehlen.

Im Allgemeinen sollten die Fühler etwa ein bis zwei Meter von einer
zusätzlichen Wärmequelle (wie bspw. Heizkessel, Pufferspeicher o.ä.)
entfernt montiert werden.

***Bitte beachte:***  
*Bereits installierte Fühler (bspw. in Tauchülsen von Mischern, 
Pufferspeichern etc.), die an einen Heizungs- oder
Solarregler angeschlossen sind, haben immer Vorrang! Keinesfalls sollte
deren Installation oder der Kontakt mit dem zu messenden Element durch
eine zusätzliche Montage von DS18B20-Sensoren leiden!*  
        
---
    
## 12.4 Relais und Relaisboards ##  
Prinzipiell ist es möglich und in der BSB-LAN-Software als Funktion mit speziellen URL-Befehlen auch bereits vorgesehen, dass am Arduino zusätzliche Relais oder Relaisboards angeschlossen werden können. Auf diese Weise können nicht nur Verbraucher geschaltet, sondern auch Zustände angeschlossener Verbraucher abgefragt werden.  
    
Die oftmals günstig erhältlichen Relaisboards sind dabei bereits mit Relais bestückt, die 230V-Verbraucher direkt schalten können. Leider kann es aufgrund mangelhafter Qualität oder Überlastung zu diversen Schäden und damit einhergehenden größeren Risiken wie bspw. Bränden kommen. Daher ist die zusätzliche Verwendung von entsprechend dimensionierten Koppelrelais oder Solid-State-Relais überlegenswert. Sollten diese jedoch ausschließlich zum Einsatz kommen und mit ihnen Schaltvorgänge ausgelöst werden, so ist ggf. darauf zu achten, dass Strom- und Spannungsstärke des Arduino ausreichend sind, um den Schaltvorgang des Relais auszulösen.  

Mittels eines parallel zur Umwälzpumpe einer Solarthermieanlage angeschlossenen Koppelrelais (sofern deren Regelung nicht mit dem Heizungsregler verbunden oder bei diesem integriert ist), wäre es bspw. möglich, den Zustand des arduinoseitigen Kontaktes (offen/geschlossen) und somit den Betriebsstatus der Pumpe abzufragen.  
    
***ACHTUNG:***  
***Es sollte beachtet werden, dass jegliche Installationen und Arbeiten am 230V-Netz nur von zugelassenen Elektrikern vorgenommen werden dürfen! 230V können tödlich sein!***  
*Es ist empfehlenswert, den Elektriker bereits bei der Planung des Vorhabens mit einzubeziehen.*  

---
     
## 12.5 MAX!-Komponenten ##

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
    
## 12.6 Eigene Hardwarelösungen ##

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
    
### 12.6.1 Raumgeräteersatz (Arduino Uno, LAN-Shield, DHT22, Display, Taster) ###

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
   
Andreas29 hat den Funktionsumfang um Push-Benachrichtigung im Fehlerfall (Errechbarkeit der Heizung, MAX!-Fehler) erweitert, die entspr. Beschreibung swoie die Software sind [hier](https://forum.fhem.de/index.php/topic,29762.msg878214.html#msg878214) zu finden.
    
---
    
    
### 12.6.2 Raumtemperaturfühler (Wemos D1 mini, DHT22, Display) ###

FHEM-Forumsmitglied *„Gizmo\_the\_great"* hat basierend auf einem Wemos D1
mini und einem DHT22-Fühler einen Raumfühler realisiert. Die aktuellen
Temperaturen von HK1 und HK2 werden dabei auf einem OLED-Display
angezeigt. Auf dem Wemos D1 läuft ESPeasy.

Eine genauere Beschreibung des Projekts „Raumfühler mit OLED" ist [hier](https://github.com/DaddySun/Smart_Home_DIY) zu finden.
     
---
    
## 12.7 LAN-Optionen für den BSB-LPB-LAN-Adapter ##  
Obwohl für die Netzwerkanbindung des Adapters definitv die kabelgebundene Variante zu empfehlen ist, kann es in Einzelfällen jedoch nötig sein, eine alternative LAN-Anbindung für den Adapter zu schaffen, da eine Kabelinstallation (LAN oder Busleitung) bis zum Wärmeerzeuger nicht realisierbar ist. Dafür gibt es mehrere Möglichkeiten, die im Folgenden kurz vorgestellt werden.  
    
---
    
### 12.7.1 Nutzung eines PowerLANs / dLANs ###  
Die Nutzung von Powerline-Adaptern, bei denen das 230V-Netz als LAN 'missbraucht' wird, ist eine Option, die im Idealfall zuverlässiger arbeitet als eine WLAN-Lösung.  

Probleme können hierbei jedoch von Steckernetzteilen ausgelöst werden, bei denen bestimmte Frequenzen auf die Stromleitung übertragen werden.  
Außerdem müssen sich die Powerline-Adapter bzw. die verwendeten Steckdosen an der gleichen Phase des Stromnetzes befinden. Bei Elektroinstallationen, die bspw. über mehrere Stockwerke gehen und jeweils an einen eigenständigen Sicherungskasten angeschlossen sind, kann es daher zu Problemen kommen. Abhilfe können hier sog. Phasenkoppler schaffen, die jedoch zusätzlich angeschafft und vom Elektriker installiert werden müssen.  
    
---
    
### 12.7.2 WLAN: Nutzung eines extra Routers ###  
Eine Möglichkeit für eine WLAN-Anbindung ist, den Adapter via LAN an einen ausgemusterten Router (bspw. eine alte Fritz!Box) anzuschließen, welcher sich wiederum als Client im bestehenden WLAN-Netz anmeldet. Die Übertragungsraten und Latenzen sind normalerweise für die Nutzung von BSB-LAN absolut ausreichend. Sollte das WLAN-Signal am Aufstellort grenzwertig sein, so könnte der Router mit stärkeren Antennen ausgerüstet werden.  

Neben dem Einsatz eines 'normalen' Routers können auch kleine 'Minirouter' verwendet werden, wenn sie denn den Client-Modus unterstützen. Als Beispiel sei hier der "Phicomm M1" genannt, der mittlerweile (meist gebraucht) für unter zehn Euro in Online-Auktionshäusern oder diversen Kleinanzeigen zu finden ist. Geräte dieser Art sind aber auch neu und mit höheren Übertragungsgeschwindigkeiten bei diversen Anbietern für ca. 15-20€ (neu) zu finden.  

In jedem Fall sollte eine möglichst stabile WLAN-Verbindung angestrebt werden - insbesondere dann, wenn via FHEM o.ä. Logdateien erstellt oder mit zusätzlicher Hardware (HK-Thermostate o.ä.) der Wärmeerzeuger gesteuert oder dessen Verhalten beeinflusst werden soll.  
    
---
    
### 12.7.3 WLAN: Nutzung eines zusätzlichen ESP oder eines 'WLAN-Arduino' ###  
Eine weitere Möglichkeit für eine WLAN-Anbindung stellt der Anschluss eines ESP-WLAN-Moduls anstelle des LAN-Shields dar. Hierbei ist jedoch ein gewisser Konfigurations- und Bastelaufwand (zusätzlicher Levelshifter etc.) nötig. Der ESP muss dabei mit der ursprünglichen AT-Firmware von Espressif geflasht sein (weitere Infos s.u.). Durch den Wegfall des LAN-Shields kann dann jedoch die microSD-Karten-Loggingfunktion nicht mehr genutzt werden.  

Darüber hinaus werden Boards angeboten, die bereits mit einem ATmega2560 und einem ESP8266 gemeinsam bestückt sind. Durch die gleiche Größe und das gleiche Pin-Layout des Boards wie bei einem 'normalen' Arduino Mega 2560 kann der Adapter weiterhin problemlos aufgesteckt werden. Bei diesen Boards können mittels DIP-Schaltern verschiedene Konfigurationen eingestellt werden (bspw. Arduino<->USB, Arduino<->ESP, ESP<->USB), was bei der Installation und der Verwendung berücksichtigt werden muss.  
Anzumerken ist auch hier, dass durch den Wegfall des LAN-Shields das microSD-Karten-Logging nicht mehr verwendet werden kann.  Außerdem sinken sowohl die Übertragungsrate als auch die Latenzzeit deutlich im Vergleich zum Aufbau mit dem regulären kabelgebundenen LAN-Shield, da die Daten seitens des ATmega zum ESP lediglich mit 115200 Baud über die serielle Schnittstelle übertragen werden.  
Im Folgenden als (nicht gekennzeichnetes) Zitat die Installationsbeschreibung von FHEM-Forumsmitglied "freetz" (original FHEM-Forumsbeitrag [hier](https://forum.fhem.de/index.php/topic,29762.msg867911.html#msg867911)):  

**Installation der AT-Firmware**

- Download der Firmware von Espressif:  
(https://www.espressif.com/en/support/download/at)  
Die weiteren Installationshinweise beziehen sich auf die Version 1.7.

- Flashen der Firmware  
Ich zeige das hier unter der Verwendung von esptool.py, da dieses für alle Systeme verfügbar sein sollte. Lediglich der COM-Port (hier: /dev/tty.wchusbserial1420) muss entsprechend angepasst werden.  
Zuerst müssen die DIP-Schalter von links nach rechts auf die Positionen  
OFF OFF OFF OFF ON ON ON (ON)  
gesetzt werden.  

- Dann wechseln in das entpackte Firmwareverzeichnis und dort  
`esptool.py -p /dev/tty.wchusbserial1420 erase_flash`  
und dann  
```
esptool.py -p /dev/tty.wchusbserial1420 --chip esp8266 write_flash -fm dio -ff 26m --flash_size 2MB-c1 0x00000 ./bin/boot_v1.7.bin 0x01000 ./bin/at/1024+1024/user1.2048.new.5.bin 0x1fc000 ./bin/esp_init_data_default_v08.bin 0xfe000 ./bin/blank.bin 0x1fe000 ./bin/blank.bin 0x1fb000 ./bin/blank.bin
```  
eingeben.  

**Testen der Firmware**  

- Hierzu zuerst die DIP-Schalter auf  
OFF OFF OFF OFF ON ON OFF (ON)  
stellen.  

- Dann mit einem Terminalprogramm (115200,8N1) auf den Port zugreifen und z.B. ATI eingeben. Wenn man dann eine lesbare Fehlermeldung erhält, ist die Firmware korrekt eingestellt.  

- Wer experimentierfreudig ist, kann hier über das Kommando AT+UART_CUR=230400,8,1,0,1 die Übertragungsrate verdoppeln und könnte dann die 230400 Baud auch in der .ino in der setup()-Funktion eintragen. Ich würde das aber erst machen, wenn klar ist, dass die 115200 sicher und zuverlässig laufen.  

**Flashen der BSB-LAN Software**  

- Jetzt, wo der ESP entsprechend geflasht und konfiguriert ist, stellt man die DIP-Schalter auf  
ON ON ON ON OFF OFF OFF (ON)  
und den zweiten Schalter rechts untenterhalb davon auf "RXD3/TXD3".  

- Nun sieht der Wemos Mega nach außen hin aus wie ein klassischer ATMega2560 und kommuniziert intern und von außen nicht sichtbar mit dem ESP8266 über seine Serial3-Schnittstelle.  

**Konfiguration von BSB-LAN**  

- In der BSB_lan_config.h muss nun das Definement WIFI mit `#define WIFI` gesetzt werden. Darüber hinaus müssen in den Variablen `ssid` und `pass` die Zugangsdaten für das WLAN eingetragen werden. Wenn die Variable `IPAddr` gesetzt ist, wird diese als statische IP verwendet. Im Gegensatz zur LAN-Anbindung kann man diese Variable aber auch auskommentieren, dann bekommt man vom Router per DHCP eine IP-Adresse zugewiesen. Die Angabe eines Gateways wird von der WiFiEsp-Library nicht unterstützt und dieses wird dann entsprechend ignoriert.  
    
---
         
[Weiter zu Kapitel 13](kap13.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    
###### *&copy; Ulf Dieckmann*

