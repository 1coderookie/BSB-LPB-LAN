[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zur Einleitung](index2.md)  
    
---

# 1. BSB-LAN: Die Hardware

In den folgenden Kapiteln wird die Hardware des BSB-LAN Setups vorgestellt. Dabei handelt es sich zum einen um den jeweiligen BSB-LAN Adapter und zum anderen um den jeweiligen Mikrocontroller, auf den die BSB-LAN Software geflasht wird.  
BSB-LAN kann sowohl mit einem Arduino Due samt spezifischem Adapter als auch auf einem ESP32 samt spezifischem Adapter betrieben werden.  
  
---

## 1.1 Adapter

Der BSB-LAN Adapter ist in zwei verschiednen Versionen verfügbar. Zum einen als Arduino Due-spezifische Version mit einem EEPROM, zum anderen als eine ESP32-spezifische Version ohne EEPROM.   Abhängig davon, welchen Mikrocontroller du einsetzen möchtest, solltest du die spezifische Version auswählen, da sich der Adapter dann mit dem jeweiligen System komfortabel und sicher durch ein Aufstecken verbinden lässt.  
  
*Hinweis:*  
Es sei bereits an dieser Stelle angemerkt, dass die ESP32-spezifische Adapterversion aufgrund des fehlenden EEPROMs *nur* mit einem ESP32 genutzt werden kann - die Due-spezifische Version hingegen kann (wenn auch nicht komfortabel aufsteckbar) auch mit einem ESP32 genutzt werden.  

---

### 1.1.1 Due-Version  
  
Die Due-spezifische Version des BSB-LAN-Adapters weist ein EEPROM auf, in dem die Einstellungen der BSB-LAN-Software (ab v2.0) gespeichert werden. Der Adapter lässt sich komfortabel und sicher auf den Due aufstecken. 

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-unbestueckt-front.jpeg">

*Die BSB-LAN-Adapterplatine v3, Oberseite, unbestückt.*  
    
*Hinweis:*  
Die Verwendung des Due-spezifischen Adapters an einem ESP32 ist trotz des EEPROMs prinzipiell möglich, der Adapter kann jedoch nicht wie bei einem Due problemlos auf ein ESP32-Board aufgesteckt werden. Sollte der Adapter trotzdem mit einem ESP32-Board genutzt werden, so ist darauf zu achten, dass die Verbindungen zwischen Adapter und ESP32 korrekt und zuverlässig hergestellt werden.  

---

### 1.1.2 ESP32-Version

Für eine bestimmte ESP32-Boardvariante gibt es eine eigene BSB-LAN-Adapterplatine: "BSB-LAN ESP32".  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ESP32-PCB.jpeg">  

*Die "BSB-LAN ESP32"-Adapterplatine, unbestückt.*  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ESP32-PCB_assembled.jpeg">  

*Die "BSB-LAN ESP32"-Adapterplatine, bestückt.*    
  
Diese BSB-LAN-Adapterplatine ist auf das *30 polige* [ESP32-NodeMCU-Board von Joy-It](https://joy-it.net/de/products/SBC-NodeMCU-ESP32) (WROOM32-Chip) ausgelegt.    
Darüber hinaus kann der Adapter außerdem mit einem [Olimex ESP32-EVB](https://www.olimex.com/Products/IoT/ESP32/ESP32-EVB/open-source-hardware) genutzt und durch Hinzufügen einer doppelreihigen fünfpoligen Pinbuchse (2x5 polig, RM 2,54mm) auf der Platinenunterseite direkt auf den zehnpoligen UEXT-Stecker von Olimex-Boards aufgesteckt werden. 

Die ESP32-spezifische Version des BSB-LAN-Adapters weist kein EEPROM auf, Einstellungen werden im Flashspeicher des ESP32 gespeichert. 

*Hinweis:*  
Die Verwendung des ESP32-spezifischen Adapters an einem Due ist aufgrund des fehlenden EEPROMs *nicht* möglich!   

---

## 1.2 Arduino Due
*Grundsätzlich ist die Verwendung eines [originalen Arduino Due](https://store.arduino.cc/arduino-due) zu empfehlen.*  
Erfahrungsgemäß können jedoch auch günstige Nachbauten des Arduino Due verwendet werden, der Einsatz dieser Clones ist normalerweise problemlos möglich. Bei diesen sollte beim Kauf allerdings darauf geachtet werden, ob in den Produktbeschreibungen auf ein verändertes Platinenlayout, geänderte Pinbelegungen o.ä. hingewiesen wird. Sollte dies der Fall sein, so sind ggf. in der Datei *BSB_lan_config.h* diesbezügliche Anpassungen vorzunehmen.  
  
*Ein Pinout-Schema des Arduino Due ist im [Anhang B](anhang_b.md) abgebildet.*     
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/due_clone_pp.jpg">  
   
*Ein kompatibler Clone des Arduino Due.*  

   
***Hinweise:***  
- Es wird empfohlen, den Arduino mit einem externen Netzteil an der Hohlsteckerbuchse zu betreiben.  
Laut den technischen Daten von Arduino liegt dabei die empfohlene Versorgungsspannung in einem Bereich von 7-12V (Limit: 6-16V). Die Versorgung mit einem 9V-Steckernetzteil (mind. 1000mA) stellte sich bisher als zuverlässige Lösung dar.  
- Soll die Stromversorgung trotzdem über die USB Buchse des Due erfolgen, so ist möglichst der 'Programming Port', also der mittlere USB Port (neben der Hohlsteckerbuchse gelegen) zu nutzen.  
- Der Due kann via Netzteil an der Hohlsteckerbuchse mit Strom versorgt und gleichzeitig via USB am Programming Port mit dem Computer verbunden werden.  
- Der Adapter kann am Bus des Heizungsreglers beim Flashen des Due angeschlossen bleiben.  
- *Achte darauf, dass du ein qualitativ hochwertiges USB-Kabel verwendest!* Dies gilt sowohl für den Fall, dass du den Due via USB mit Strom versorgen willst, als auch für den Fall, dass du den Due zum Flashen an deinen PC anschließen möchtest. Insbesondere günstige und dünne Kabel (bspw. Zubehör von Smartphones) können Probleme bei der Stromversorgung und somit der Stabilität des Due verursachen und/oder sind nicht immer voll beschaltet, so dass eine Nutzung für die Datenübertragung nicht möglich ist.   
- Bei einigen Due-Modellen/-Clones kann es vorkommen, dass sie nach einem initialen Start (bspw. nach einem Stromausfall) nicht richtig zu funktionieren scheinen und erst nach einem Betätigen des Reset-Buttons korrekt arbeiten. Hier kann anscheinend das [Hinzufügen eines Kondensators](https://forum.arduino.cc/index.php?topic=256771.msg2512504#msg2512504) Abhilfe schaffen.  
      
  
***ACHTUNG: Die GPIOs des Arduino Due sind nur 3.3V kompatibel!***      
  

---
    
### 1.2.1 Due + LAN: Das LAN-Shield
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
   
### 1.2.2 Due + WLAN: Die ESP8266-WiFi-Lösung  
  
Das Due-Setup lässt sich mittels eines ESP8266 (NodeMCU oder Wemos D1) anstelle des LAN-Shields auch in WLAN-Netzwerke integrieren.  
Hierfür ist der ESP8266 mit dem sechspoligen SPI-Anschluss des Arduino Due zu verbinden und wird dabei vom Due mit Strom versorgt (+5V). Der ESP8266 muss dafür mit einer speziellen Firmware geflasht werden, Näheres dazu erfährst du weiter unten in diesem Kapitel. Die BSB-LAN-Software wird weiterhin auf dem Due installiert.    
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/due_clone_SPI.jpg">  
  
*Der zu verwendende sechspolige SPI-Anschluss des Arduino Due.*  
   
Die Anschlüsse sind wie folgt zu verbinden:  
  
| Pin DUE | Funktion | Pin ESP8266 |  
|:-----------:|:-------------:|:----------:|  
|SPI 1 | MISO (Master Innput Slave Output) | D06 |  
|SPI 2 | VCC (Stromversorgung ESP) | +5V / Vin |  
|SPI 3 | SCK (Serial Clock) | D05 |  
|SPI 4 | MOSI (Master Output Slave Input) | D07 |  
|SPI 6 | GND (Stromversorgung ESP) | GND |  
|Pin 12 | SS (Slave Select) | D08 |  
   
Kommt keine weitere per SPI angeschlossene Komponente (bspw. LAN-Shield, Kartenleser) zum Einsatz, so kann auf den Anschluss von "SS" (SlaveSelect, DUE Pin 12 = D08 beim ESP8266) verzichtet werden.  
Im Falle der Verwendung von SS kann der Anschluss auch an einem anderen Pin als Pin 12 erfolgen, der entspr. Pin muss in der Datei *BSB_lan_config.h* entspr. definiert werden. In diesem Fall ist jedoch darauf zu achten, dass der zu verwendende Pin nicht zu den geschützten Pins zählt und nicht anderweitig verwendet wird. Es wird daher empfohlen, es bei der Voreinstellung (Pin 12) zu belassen.     
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Wemos_SPI.jpg">  
  
*Die korrespondierenden Anschlüsse beim Wemos D1.*  
     
Es bietet sich an, das LAN-Shield zu entfernen, eine unbestückte Lochrasterplatine passend auf dem Due zu platzieren und mit den entspr. Anschlüssen zu versehen. So kann der Wemos D1 / NodeMCU stabil auf dem Due platziert werden. Je nach Gehäuse ist hier u.U. auf die Bauhöhe zu achten.   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Due_WiFi.jpg">  
  
*Wemos D1 auf einer Lochrasterplatine auf dem Arduino Due.*
   
*Achtung:*  
Bei dieser Lösung entfällt jedoch die Möglichkeit, Daten auf eine microSD-Karte zu loggen. Soll dies trotz WiFi-Anbindung weiterhin möglich sein, so muss entweder ein entspr. Kartenmodul zusätzlich oder der ESP parallel zum bestehenden LAN-Shield angeschlossen werden. In beiden Fällen muss der SS-Pin *zwingend* angeschlossen werden (s. Pinbelegung/Anschluss). Ob ein paralleler Betrieb von LAN-Shield und ESP8266 problemlos möglich ist, wurde bisher jedoch noch nicht getestet.   
   
**Flashen des ESP8266:**  
Der ESP8266 muss mit einer speziellen Firmware geflasht werden. Für die Verwendung der Arduino IDE muss darauf geachtet werden, dass zuvor die entspr. ESP8266-Bibliotheken mittels des Boardverwalters installiert wurden.  
Die benötigte Firmware [WiFiSpiESP](https://github.com/JiriBilek/WiFiSpiESP) liegt bereits als zip-file im BSB-LAN-Repository. Das zip-file *muss in einem anderen Ordner als BSB_lan* entpackt werden! Der ESP8266 ist dann mit der Datei *WiFiSPIESP.ino* zu flashen.  
  
**Konfiguration von BSB-LAN:**  
Zur Verwendung muss das Definement `#define WIFI` in der Datei *BSB_lan_config.h* aktiviert werden. Des Weiteren müssen die beiden Variablen `wifi_ssid` und `wifi_pass` entsprechend angepasst und die SSID des WLAN sowie das Passwort eingetragen werden. Diese Angaben können auch im Nachhinein via Webinterface geändert werden.   
  
*Hinweise:*  
- Bei Verwendung von DHCP kann die vom Router vergebene IP-Adresse im Seriellen Monitor der Arduino IDE beim Start des DUE ausgelesen werden.
- Bei der Verwendung der ESP-WiFi-Lösung lautet der Hostname *nicht* WIZnetXYZXYZ, sondern i.d.R. ESP-XYZXYZ, wobei sich die Ziffern-Buchstabenkombination "XYZXYZ" nach "ESP-" aus den letzten drei Bytes (also den letzten sechs Zeichen) der MAC-Adresse des ESP zusammensetzt.  
- Bei Verwendung der ESP-WiFi-Lösung lässt sich die MAC-Adresse des ESP *nicht* selbst festlegen.  
  
---  
    
## 1.3 ESP32
  
***Achtung: Wir haben zwar viel getestet, aber ALLE Funktionen etc. haben wir nicht testen können. Sollten Probleme, Inkompatibilitäten, Funktionseinschränkungen oder generelle Bugs bzgl der ESP32-Verwendung auftreten, meldet es bitte (idealerweise auf Englisch als Issue im Repo)!***   
  
Die BSB-LAN-Software ist auch auf einem ESP32 lauffähig. Es sind allerdings zwingend bestimmte Anpassungen vorzunehmen, die im [Kap. 2.1.2](kap02.md#212-installation-auf-dem-esp32) beschrieben sind.  

Im Grunde kann jeder ESP32 verwendet werden, aufgrund des spezifischen Platinendesigns wird jedoch die Verwendung des [ESP32-NodeMCU-Board von Joy-It](https://joy-it.net/de/products/SBC-NodeMCU-ESP32) oder des [Olimex ESP32-OVB](https://www.olimex.com/Products/IoT/ESP32/ESP32-EVB/open-source-hardware) empfohlen.  
  
  
---

### 1.3.1 ESP32 mit spezifischem "BSB-LAN ESP32"-Adapter  
  
***Achtung: Wir haben zwar viel getestet, aber ALLE Funktionen etc. haben wir nicht testen können. Sollten Probleme, Inkompatibilitäten, Funktionseinschränkungen oder generelle Bugs bzgl der ESP32-Verwendung auftreten, meldet es bitte (idealerweise auf Englisch als Issue im Repo)!***   

Für eine bestimmte ESP32-Boardvariante gibt es eine eigene BSB-LAN-Adapterplatine: "BSB-LAN ESP32".  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ESP32-PCB.jpeg">  

*Die "BSB-LAN ESP32"-Adapterplatine, unbestückt.*  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ESP32-PCB_assembled.jpeg">  

*Die "BSB-LAN ESP32"-Adapterplatine, bestückt.*    
  
Diese BSB-LAN-Adapterplatine ist auf das *30 polige* [ESP32-NodeMCU-Board von Joy-It](https://joy-it.net/de/products/SBC-NodeMCU-ESP32) (WROOM32-Chip) ausgelegt.    
Darüber hinaus kann der Adapter außerdem mit einem [Olimex ESP32-OVB](https://www.olimex.com/Products/IoT/ESP32/ESP32-EVB/open-source-hardware) genutzt und durch Hinzufügen einer doppelreihigen fünfpoligen Pinbuchse (2x5 polig, RM 2,54mm) auf der Platinenunterseite direkt auf den zehnpoligen UEXT-Stecker von Olimex-Boards aufgesteckt werden. 

---
  
#### 1.3.1.1 ESP32: NodeMCU "Joy-It"  
  
Die ESP32-Variante der BSB-LAN-Adapterplatine ist auf das *30 polige* [ESP32-NodeMCU-Board von Joy-It](https://joy-it.net/de/products/SBC-NodeMCU-ESP32) (WROOM32-Chip) ausgelegt. Es ist in Deutschland u.a. bei [Reichelt](https://www.reichelt.de/nodemcu-esp32-wifi-und-bluetooth-modul-debo-jt-esp32-p219897.html) erhältlich.  
Für das Board ist beim Hersteller eine [Bedienungsanleitung](https://joy-it.net/files/files/Produkte/SBC-NodeMCU-ESP32/SBC-NodeMCU-ESP32-Anleitung-20200320.pdf) verfügbar. Dort sind sowohl das boardspezifische Pinoutschema als auch eine generelle Anleitung zur Verwendung von ESP32-Boards mit der Arduino IDE enthalten!  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ESP32+Adapter.jpeg">  
  
*Der Joy-It ESP32-NodeMCU auf dem "BSB-LAN ESP32"-Adapter.*  
  
Sollte das Joy-It-Board nicht erhältlich sein und ein anderes NodeMCU-ESP32-Board zum Einsatz kommen, so muss in jedem Fall auf zwei Dinge geachtet werden, damit der ESP32-spezifische BSB-LAN-Adapter passt:  
1. Das Board *muss* ein **30 poliger** ESP32-NodeMCU sein! Es gibt auch 38 polige NodeMCUs - diese passen *nicht*!  
2. Das Pinout-Schema *muss identisch* mit dem des Joy-It-Boards sein.  
  

---
  
#### 1.3.1.2 ESP32: Olimex ESP32-EVB
  
***ACHTUNG: Die volle Funktiosfähigkeit wird derzeit noch geprüft, eine Verwendung ist daher noch nicht zu empfehlen.***

<!--
Die ESP32-Adapterversion kann außerdem mit einem [Olimex ESP32-EVB](https://www.olimex.com/Products/IoT/ESP32/ESP32-EVB/open-source-hardware) genutzt und durch Hinzufügen einer doppelreihigen fünfpoligen Pinbuchse (2x5 polig, RM 2,54mm) auf der Platinenunterseite direkt auf den zehnpoligen UEXT-Stecker von Olimex-Boards aufgesteckt werden.  
Diese Olimex-Boardvariante bietet neben der ESP32-basierten WLAN-Funktionalität u.a. einen LAN-Anschluss, einen microSD-Kartenleser sowie zwei Relais und ist daher sehr empfehlenswert.  -->
  
<!-- <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/OlimexESP32EVB_small.jpg">  -->
  
<!-- *Das Olimex ESP32-EVB samt aufgestecktem "BSB-LAN ESP32"-Adapter.*    -->

--- 

### 1.3.2 ESP32 mit Due-kompatiblem BSB-LAN-Adapter ab V3  
  
***Achtung: Wir haben zwar viel getestet, aber ALLE Funktionen etc. haben wir nicht testen können. Sollten Probleme, Inkompatibilitäten, Funktionseinschränkungen oder generelle Bugs bzgl der ESP32-Verwendung auftreten, meldet es bitte (idealerweise auf Englisch als Issue im Repo)!***   
  
Der bisherige Due-kompatible Adapter (ab v3) lässt sich ebenfalls mit einem ESP32 verwenden. Das EEPROM des Adapters wird hierbei nicht benötigt/verwendet und ist dementsprechend auch bei der Verkabelung nicht zu berücksichtigen.  
Bei der Wahl eines ESP32 ist hier keine zwingende Einschränkung auf die zuvor genannte Joy-It-boardkompatible NodeMCU-Variante gegeben, da ohnehin eine 'lose' Verkabelung oder der Eigenbau einer kleinen Adapterplatine zur stabileren Aufnahme des BSB-LAN-Adapters und des ESP32 nötig ist. Es sollte jedoch darauf geachtet werden, dass die unten angegebenen Pinnummern/-belegungen mit denen des gewählten ESP32 übereinstimmen.  
  
Die Verbindungen sind wie folgt vorzunehmen:  
  
| BSB-LAN-Adapter ab v3 | Funktion | ESP32-Board |
|:---------------:|:-----------:|:---------:|
| Pin 53 | VCC (Stromversorgung Adapter) | 3,3V |
| GND | GND (Stromversorgung Adapter) | GND |
| TX1 | TX (Senden) | Pin 17 (TX2) |
| RX1 | RX (Empfangen) | Pin 16 (RX2) | 
  
Beispielhaft wird im Folgenden ein "ESP32 D1 R32 Entwicklerboard" (WROOM32-Chip) in der Größe eines Arduino Uno mit einer selbstgebastelten Adapterplatine (Uno-kompatible Prototyping-Platine) für die Aufnahme des BSB-LAN-Adapters v3 (Due-Version) gezeigt. Selbstverständlich sind auch andere Varianten, wie bspw. mit einem ESP32-NodeMCU und einer entsprechend angepassten Lochrasterplatine möglich!  

| Hinweis |
|:--------|
|Das nachfolgend abgebildete ESP32 "D1 R32 Entwicklerboard" kann ich persönlich ausdrücklich NICHT empfehlen, da es offenbar deutlich schlechtere Empfangseigenschaften aufweist als andere ESP32-Boards. Obwohl der Router nur wenige Meter entfernt stand, war es mir nicht möglich, eine stabile WLAN-Verbindung aufzubauen. Auf Nachfrage beim Anbieter wurde mir dieser Eindruck bestätigt, die "Ursache dafür ist in der Bauform begründet".|  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/D1R32-Due_adapter.jpg">  
  
*Links das "ESP32 D1 R32"-Board, rechts die entsprechende aufsteckbare Platine zur Aufnahme des BSB-LAN-Adapters v3 (Due-Version).*  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/D1R32+Due-adapter.jpg">  
  
*Der komplette Aufbau.*  
  


---  
  
### 1.3.3 ESP32 mit Due-kompatiblem BSB-LAN-Adapter V2  
  
***Achtung: Wir haben zwar viel getestet, aber ALLE Funktionen etc. haben wir nicht testen können. Sollten Probleme, Inkompatibilitäten, Funktionseinschränkungen oder generelle Bugs bzgl der ESP32-Verwendung auftreten, meldet es bitte (idealerweise auf Englisch als Issue im Repo)!***   
    
Der BSB-LAN-Adapter v2 kann ebenfalls an einem ESP32 betrieben werden. So kann von der Weiterentwicklung und den neuen Funktionen der BSB-LAN-Software ab v2.x profitiert werden, ohne dass ein neuer Adapter angeschafft werden muss. Dazu müssen am Adapter selbst einige Änderungen vorgenommen werden, die im Folgenden beschrieben werden.  
| Achtung |
|:--------|
| Die nachfolgend beschriebenen Schritte zur 'Umrüstung' des Adapters auf 3,3V gelten nur für den Einsatz an einem ESP32 - an einem Due kann der Adapter v2 aufgrund des fehlenden EEPROMs nicht genutzt werden! |       
    
Um den Adapter v2 erfolgreich an einem ESP32 betreiben zu können, muss der Adapter auf den Betrieb mit 3,3V 'umgerüstet' werden. Dies ist für die Nutzung mit einem Raspberry Pi bereits vorgesehen. Nachfolgende Schritte müssen vorgenommen werden:  
- Der Adapter ist *komplett* zu bestücken. Wenn der Adapter bisher nur für die Nutzung mit dem Arduino Mega 2560 bestückt ist, so müssen folgende Komponenten nachgerüstet werden:  
    - 1x Widerstand 4,7kΩ (→ R11)
    - 2x Widerstand 10kΩ (→ R12, R13)
    - 1x Transistor BC557A (→ Q11)
    - 1x Transistor BC547A (→ Q12)
- Die Lötbrücken *SJ2* und *SJ3* sind durch einen Lötpunkt zu *schließen*.  
- Die Lötbrücke *SJ1* ist zu *entfernen*.  

Nun ist der Adapter für den Betrieb an einem 3,3V-System vorbereitet.  
Zum Anschluss an den ESP muss nun die "RasPi"-Kontaktreihe genutzt und wie folgt mit dem ESP32 verbunden werden:    
  
| BSB-LAN-Adapter v2 | Funktion | ESP32-Board |
|:---------------:|:-----------:|:---------:|
| Pin 06 | GND (Stromversorgung Adapter) | GND |
| Pin 08 | TX (Senden) | Pin 17 (TX2) |
| Pin 10 | RX (Empfangen) | Pin 16 (RX2) |
| Pin 12 | 3,3V (Stromversorgung Adapter) | 3,3V |     

Die folgende Abbildung zeigt einen entspr. bestückten Adapter v2. Das gelbe "X" bei SJ1 markiert die *entfernte* Lötbrücke (den nicht-geschlossenen Kontakt), die beiden gelben Umrandungen bei SJ2 und SJ3 markieren die *zu schließenden* Lötbrücken.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/adapter_v2-ESP.jpeg">  
  
*Der umgerüstete Adapter v2 für die Nutzung mit einem ESP32.*  
  
Es ist empfehlenswert, die vier Kontakte auf dem Adapter mit einer Pinleiste zu bestücken und sich eine kleine Adapterplatine aus einer Lochrasterplatine und Pinheadern aufzubauen, auf der der Adapter und das ESP32-Board aufgesteckt werden könnnen, um einen stabilen Aufbau und eine sichere Verbindung zu gewährleisten.     
    
---  
   
## 1.4 Raspberry Pi
Der aktuelle Due-spezifische Adapter (v4) kann auch an einem Raspberry Pi genutzt
werden. Es sind dabei jedoch folgende Punkte zu beachten:  
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
  
***Dieses Handbuch bezieht sich nur auf die BSB-LAN Hard- & Software!***  
  
---
   
## 1.5 Gehäuse
      
Das Angebot an verfügbaren Gehäusen für einen Arduino Due samt LAN-Shield oder auch einen NodeMCU samt Aufsteckplatine ist leider recht begrenzt, nur bei einzelnen Anbietern finden sich Kunststoff-, Plexiglas- oder Metallgehäuse. Noch knapper wird die Auswahl, wenn bspw. bei einem Due-Setup ein zusätzlich aufgestecktes Relaisboard mit untergebracht werden soll. Solltest du gezielt nach Gehäusen für den Due suchen, so wirst du u.U. nicht fündig. In dem Fall suche nach Gehäusen, die für den Arduino Mega 2560 konzipiert sind, denn er weist den gleichen Formfaktor wie der Due auf. Achte jedoch darauf, dass du möglichst ein Gehäuse wählst, das den Due samt aufgesteckten LAN-Shield aufnehmen kann. Gehäuse, die nur den Arduino aufnehmen und im Deckel Schlitze haben, so dass Shields aufgesteckt werden können, sind nicht zu empfehlen, da in dem Fall sowohl das LAN-Shield als auch der Adapter ungeschützt sind.     
   
Neben kommerziellen Produkten und kreativen Selbstbau- und Bastellösungen bietet sich für Besitzer eines 3D-Druckers noch die Möglichkeit, ein entsprechendes Gehäuse selbst herzustellen.  
**FHEM-Forumsmitglied "EPo" war so freundlich, entsprechende STL-Dateien zu erstellen und zur Verfügung zu stellen.**  
**Vielen Dank!**  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BSB-Gehaeuse.jpg">  
  
*3D-Druckmodell des Gehäuses für den Arduino Due inkl. LAN-Shield und Adapter.*  
  
Die STL-Dateien für den Arduino Due und den ESP32-NodeMCU sind bereits im GitHub-Repo von BSB-LAN enthalten.  

---

[Weiter zu Kapitel 2](kap02.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    
