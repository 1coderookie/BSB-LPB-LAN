[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 1](kap01.md)    
    
---
    
# 2. BSB-LAN: Die Software

In den folgenden Kapiteln wird auf die Installation und die Konfiguration der BSB-LAN-Software eingegangen. Eine Beschreibung des Webinterface findest du hingegen in [Kap. 4](kap04.md), eine Beschreibung der Abfrage- und Steuermöglichkeiten in [Kap 5](kap05.md) und eine Beschreibung der Spezialfunktionen in [Kap. 6](kap06.md).  

--- 

## 2.1 Installation

Die BSB-LAN-Software muss zur Installation auf den jeweils verwendeten Mikrocontroller (Arduino Due oder ESP32) geflasht werden. Dies kann bspw. mittels der "Arduino IDE" erfolgen, selbstverständlich können aber auch andere Programme wie bspw. "PlatformIO" oder "Visual Studio Code" genutzt werden.  

| Hinweis |
|:--------|
| In diesem Handbuch wird davon ausgegangen, dass die Arduino IDE genutzt wird. Sämtliche Beschreibungen und Bezeichnungen beziehen sich daher auf die Arduino IDE. <br> Solltest du Anfänger und mit der Arduino IDE noch nicht vertraut sein, so findest du eine Beschreibung zur Installation und Konfiguration der Arduino IDE in [Kap. 12](kap12.md). |  

Je nach verwendeter Plattform (Arduino Due oder ESP32) unterscheiden sich die notwendigen Einstellungen der Arduino IDE. So müssen die entsprechenden Boardtypen installiert und ausgewählt sein, die Einstellungen plattformspezifisch angepasst werden etc. Auf diese Einstellungen wird im Folgenden eingegangen. Dabei wird davon ausgegangen, dass die nötigen Bibliotheken für die jeweilge Plattform bereits installiert sind. Sollte dies nicht der Fall sein, so findest du Informationen hierzu in [Kap. 12](kap12.md).  
Darüber hinaus gibt es bei der Installation auf dem ESP32 noch weitere Dinge zu beachten, die im entspr. Kapitel ebenfalls behandelt werden.  

---

### 2.1.1 Installation auf dem Due

Im Folgenden wird die Installation der BSB-LAN-Software auf einem Arduino Due beschrieben. Die Beschreibung bezieht sich dabei auf die Verwendung der Arduino IDE. Mit den Voreinstellungen der BSB-LAN-Software wird für die IP-Adressvergabe DHCP genutzt. Solltest du dies nicht wünschen und eine feste IP vergeben wollen, so lies bitte [Kap. 2.2.2](kap02.md#222-konfiguration-durch-anpassen-der-datei-bsb_lan_configh) und passe die Datei *BSB_LAN_config.h* vor dem Flashen an!  

| Hinweis |
|:--------|
| Solltest du Windows benutzen, so ist evtl. noch eine zusätzliche Treiberinstallation nötig. Auf der Seite [https://www.arduino.cc/en/Guide/ArduinoDue](https://www.arduino.cc/en/Guide/ArduinoDue) findest du weitere Informationen. | 

Führe die folgenden Schritte aus:  

1. Verbinde das Arduino-Setup mit einem USB-Kabel mit deinem Computer. Nutze dabei den 'Programming Port' des Due, das ist der 'mittlere' USB-Port, der neben der Netzteilbuchse platziert ist. Sowohl das LAN-Shield als auch der BSB-LAN-Adapter sollte zuvor bereits auf den Due gesteckt sein, dies ist jedoch nicht zwingend nötig.  
  
   <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/HW-Setup.jpg">
    
   *Das komplette Setup (Arduino Due + LAN-Shield + BSB-LPB-LAN-Adapter v3) inklusive der entsprechenden Kabel.*  

2. Downloade die [aktuelle BSB-LAN-Version](https://github.com/fredlcore/BSB-LAN/archive/master.zip) und entpacke die heruntergeladene Datei *BSB-LAN-master.zip*.  
  
3. Wechsle in den Ordner "BSB-LAN-master"/"BSB_LAN" und benenne die Datei *BSB_LAN_config.h.default* in ***BSB_LAN_config.h*** um!  
    
4. Wenn du eigenen Code implementieren willst, benenne die Datei *BSB_LAN_custom.h.default* in ***BSB_LAN_custom.h*** um!  

5. Öffne den BSB_LAN-Sketch mittels eines Doppelklicks auf die Datei *BSB_LAN.ino* im BSB_LAN-Ordner. Die dazugehörigen Dateien *BSB_LAN_config.h* und *BSB_LAN_defs.h* werden automatisch mit geladen.  

6. Wähle "Arduino Due (Programming Port)" unter Tools/Board bzw. Werkzeuge/Board.  

   | Hinweis |
   |:--------|
   | Sollte das Board nicht aufgeführt sein, so muss der Atmel SAM Core hinzugefügt werden. Informationen hierzu findest du in [Kap. 12.1.1](kap12.md#1211-arduino-due). |  
  
  
7. Wähle den korrekten Seriellen Port, an dem der Due am Rechner angeschlossen ist, unter Werkzeuge/Port aus.  
   
   <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/IDE_Due.png">  
   
   *Die Einstellungen für den Due in der Arduino IDE.*  

8. Solltest du BSB-LAN mittels Anpassung der Datei *BSB_LAN_config.h* konfigurieren wollen (s. [Kap. 2.2.2](kap02.md#222-konfiguration-durch-anpassen-der-datei-bsb_lan_configh)), so tue dies bitte jetzt.   

9. Starte den Flashvorgang und lade den Sketch mittels Klick auf "Sketch/Upload" bzw. "Sketch/Hochladen" auf den Arduino Due.  

10. Nach Beenden des Flashvorgangs starte den Seriellen Monitor der Arduino IDE und beobachte die Ausgaben, die beim Start des Arduino Due erfolgen. Dort wird u.a. auch die IP ausgegeben, die dem Setup bei Verwendung von DHCP zugeteilt wird.    

***Herzlichen Glückwunsch - du hast BSB-LAN installiert!***  
Fahre nun mit [dem Anschluss und der Inbetriebnahme des Setups](kap03.md) und/oder der [Konfiguration der BSB-LAN-Software](kap02.md#22-konfiguration) fort.  

---

### 2.1.2 Installation auf dem ESP32

Im Folgenden wird die Installation der BSB-LAN-Software auf einem ESP32 beschrieben. Die Beschreibung bezieht sich dabei auf die Verwendung der Arduino IDE. Mit den Voreinstellungen der BSB-LAN-Software wird für die IP-Adressvergabe DHCP genutzt. Solltest du dies nicht wünschen und eine feste IP vergeben wollen, so lies bitte [Kap. 2.2.2](kap02.md#222-konfiguration-durch-anpassen-der-datei-bsb_lan_configh) und passe die Datei *BSB_LAN_config.h* vor dem Flashen an!  

| Hinweis |
|:--------|
| Sollte das ESP32-Board nicht von deinem Betriebssystem erkannt werden, so ist evtl. noch eine zusätzliche Treiberinstallation für den vom Board verwendeten USB-Chip nötig. |  
  
Führe die folgenden Schritte aus:    
  
1. Verbinde dein ESP32-Board mit mit einem USB-Kabel mit deinem Computer. Den BSB-LAN-Adapter kannst du vorher bereits auf bzw. unter dein ESP32-Board gesteckt haben, dies ist jedoch nicht zwingend nötig.  

2. Downloade die [aktuelle BSB-LAN-Version](https://github.com/fredlcore/BSB-LAN/archive/master.zip) und entpacke die heruntergeladene Datei *BSB-LAN-master.zip*.  
  
3. Wechsle in den Ordner "BSB-LAN-master"/"BSB_LAN" und benenne die Datei *BSB_LAN_config.h.default* in ***BSB_LAN_config.h*** um!  
    
4. Wenn du eigenen Code implementieren willst, benenne die Datei *BSB_LAN_custom.h.default* in ***BSB_LAN_custom.h*** um!  

5. Entferne (oder verschiebe) die beiden Ordner "*ArduinoMDNS*" und "*WiFiSpi*" aus dem BSB-LAN-Unterordner "*src*" - diese dürfen *nicht* im "BSB-LAN"- bzw. "src"-Ordner vorhanden sein!  

6. Öffne den BSB_LAN-Sketch mittels eines Doppelklicks auf die Datei *BSB_LAN.ino* im BSB_LAN-Ordner. Die dazugehörigen Dateien *BSB_LAN_config.h* und *BSB_LAN_defs.h* werden automatisch mit geladen.  

7. Wähle den entspr. ESP32-Boardtyp unter Tools/Board bzw. Werkzeuge/Board aus:  

    - Für den in diesem Handbuch empfohlenen **[Joy-It ESP32-NodeMCU](kap01.md#1311-esp32-nodemcu-joy-it)** (oder identische Clones mit einem "ESP32-WROOM"-Chip) lautet der passende Boardtyp "ESP32 Dev Module".  
    
    - Für das empfohlene **[Olimex ESP32-EVB](kap01.md#1312-esp32-olimex-esp32-evb)** wähle bitte den gleichnamigen Eintrag aus der Liste aus.     
    
    | Achtung, wichtiger Hinweis |
    |:---------|
    | Falls das ESP32-Framework bereits installiert ist und dir die verschiedenen ESP32-Boardvarianten angezeigt werden, überprüfe bitte im "Boardverwalter" unter "Werkzeuge/Boards", dass die **Version 2.0.2** (oder höher, falls verfügbar) installiert ist. <br> Sollte das Board *nicht* aufgeführt sein, so muss die ESP32-Plattform in der Arduino IDE hinzugefügt werden. Informationen hierzu findest du in [Kap. 12.1.2](kap12.md#1212-esp32). |  
  
  
8. Wähle den korrekten Seriellen Port, an dem das ESP32-Board am Rechner angeschlossen ist, unter Werkzeuge/Port aus.  

9. Stelle die Übertragungsgeschwindigkeit/Baudrate auf 115200 ein (Achtung: In der Arduino IDE ist bei ESP32-Boards i.d.R. 921600 voreingestellt!).  

10. Wähle bei "Partition Scheme"  
    
    - für den empfohlenen **ESP32-NodeMCU** bitte die Variante "Default 4MB with spiffs (1.2BM APP/1.5MB SPIFFS)",  
     
    - für das empfohlene **Olimex-Board** die Variante "Minimal SPIFFS (Large APPS with OTA)" aus.  

   
      <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/IDE_ESP32.png">  
   
      *Die Einstellungen für den ESP32-NodeMCU in der Arduino IDE.*   
   
  
11. Klicke nun auf den Reiter für die Datei *BSB_LAN_config.h* und passe *zwingend* die folgenden Einstellungen an:  

    - Aktiviere das Definement `#define WIFI` in der Datei *BSB_LAN_config.h*!  

    - Trage die Zugangsdaten für dein WLAN ein (SSID und Passwort)!  
  
12. Solltest du BSB-LAN mittels Anpassung der Datei *BSB_LAN_config.h* konfigurieren wollen (s. [Kap. 2.2.2](kap02.md#222-konfiguration-durch-anpassen-der-datei-bsb_lan_configh)), so tue dies bitte jetzt.   

13. Starte den Flashvorgang mittels Klick auf "Sketch/Upload" bzw. "Sketch/Hochladen".  

14. Nach Beenden des Flashvorgangs starte den Seriellen Monitor der Arduino IDE und beobachte die Ausgaben, die beim Start des ESP32 erfolgen. Dort wird u.a. auch die IP ausgegeben, die dem Setup bei Verwendung von DHCP zugeteilt wird.    

| Hinweise |
|:---------|
| Wenn der ESP32 sich nicht mit dem konfigurierten WLAN verbinden kann, richtet er seinen eigenen Accesspoint "BSB-LAN" mit dem Passwort "BSB-LPB-PPS-LAN" für 30 Minuten ein. Danach wird er neu starten und erneut versuchen, eine Verbindung zum eingerichteten WLAN-Netzwerk herzustellen. |
| Obwohl die Logging-Funktion auch mit dem ESP32 funktioniert, ist es nicht empfehlenswert, diese Funktion aufgrund des Verschleißes des Flash-Speichers übermäßig zu nutzen. Sollte das **Olimex-Board** zum Einsatz kommen, so kann anstelle des SPIFF-Flashspeichers eine microSD-Karte genutzt werden. Die Verwendung ist in der Datei *BSB_LAN_config.h* zu aktivieren (Definement `#define ESP32_USE_SD`). |    
  
***Herzlichen Glückwunsch - du hast BSB-LAN installiert!***  
Fahre nun mit [dem Anschluss und der Inbetriebnahme des Setups](kap03.md) und/oder der [Konfiguration der BSB-LAN-Software](kap02.md#22-konfiguration) fort.  
  
---

### 2.1.3 Updates

Ein Updaten der BSB-LAN-Software erfolgt durch das gewohnte Flashen der neuen Version ([Download als ZIP-File](https://github.com/fredlcore/BSB-LAN/archive/master.zip), per git o.ä.), wie es in den vorherigen Installationskapiteln beschrieben ist. Bitte beachte die folgenden Hinweise!  
  
Für ESP32-basierte Boards (Olimex, NodeMCU) kann alternativ auch ein OTA-Update ("OverTheAir"-Update) erfolgen (diese Funktion ist NICHT mit dem Arduino DUE nutzbar!). Hierzu muss in der Webkonfig oder der Datei *BSB_LAN_config.h* die entspr. OTA-Funktion aktiviert werden. Eine fertige Firmware-Datei kann man in der Arduino IDE unter "Sketch / Kompilierte Binärdatei exportieren…" erstellen lassen. Der Upload der Datei erfolgt dann auf Port 8080 der BSB-LAN-IP.    
  
| Hinweise |
|:---------|
| Solltest du in der Datei *BSB_LAN_config.h* bestimmte Änderungen bei der neu zu flashenden Version vorgenommen haben, wie bspw. die Zugangsdaten für dein WLAN oder eine fest vergebene IP, die dann nach dem Flashen offenbar nicht übernommen wurden, so liegt dies i.d.R. daran, dass die alten Einstellungen aus dem EEPROM gelesen wurden. <br> Um die neuen Einstellungen wirksam werden zu lassen, stelle in der [Webkonfiguration](kap02.md#221-konfiguration-mittels-webinterface) die Einstellung "Konfiguration aus EEPROM lesen" einmal auf "Aus", speichere die Änderung und flashe nochmal neu. <br> Danach sollten die neuen Einstellungen wirksam geworden sein, weil BSB-LAN diese nun aus der Datei *BSB_LAN_config.h* und nicht aus dem EEPROM eingelesen hat. <br> Nach erfolgreicher Überprüfung stelle "Konfiguration aus EEPROM lesen" wieder auf "Ein". | 
| Die bestehende und ggf. angepasste Datei *BSB_LAN_config.h* kann in der Regel bei einem Update auf eine neuere Version zwar übernommen werden, es jedoch ratsam, auch hier die jeweils aktuelle Datei *BSB_LAN_config.h.default* anstelle der bestehenden Datei *BSB_LAN_config.h* zu verwenden. Dazu muss die .default-Datei wie gehabt umbenannt und ggf. den vorherigen Einstellungen entspr. angepasst werden. So kann man sicher gehen, dass man ein komplettes Update der BSB-LAN-Software vorgenommen hat. | 
| Wenn der Adapter an den Bus des Heizungsreglers angeschlossen ist, so kann er angeschlossen bleiben, wenn der Due/ESP32 erneut geflasht werden soll. Es besteht keine Notwendigkeit den Adapter vom Regler abzuklemmen, wenn man BSB-LAN updaten möchte. |    

 

---

## 2.2 Konfiguration  
  
Die BSB-LAN-Software kann den individuellen Ansprüchen entsprechend konfiguriert werden.  
Die Konfiguration kann dabei auf zwei Arten erfolgen: Mittels Anpassen der Datei *BSB_LAN_config.h* sowie mittels Webinterface (aufrufbar mittels Klick auf "Einstellungen" auf der BSB-LAN-Seite oder per direktem URL-Befehl `/C`).  
Im Folgenden werden die Konfigurationsmöglichkeiten eingehender erklärt. Die Beschreibungen in Kap. 2.2.2 sind i.d.R. ausführlicher, daher ist es sinnvoll, beide Kapitel eingehend zu studieren.  
  
Eine Übersicht der BSB-LAN-Einstellungen kann mit dem URL-Befehl `/CO` aufgerufen werden.  
     
---
    
### 2.2.1 Konfiguration mittels Webinterface  

Die Seite der Webkonfiguration ist mittels Klick auf "Einstellungen" auf der BSB-LAN-Seite oder per direktem URL-Befehl `/C` aufrufbar. Die einzelnen Einstellungsmöglichkeiten sind zwar im Prinzip selbsterklärend, trotzdem seien die einzelnen Punkte hier nochmals mit einer kurzen Erklärung aufgeführt.  
Für eine u.U. ausführlichere Erklärung zu den einzelnen Funktionen sieh bitte im [Kap. 2.2.2](kap02.md#222-konfiguration-durch-anpassen-der-datei-bsb_lan_configh) nach.  
  
Eine reine Übersicht der Einstellungen kann mittels des URL-Befehls `/CO` angezeigt werden.    
  
Die Übersicht der Webkonfiguration gliedert sich in drei Spalten:  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webconfig_settings_screenshot_de.png">

- In der linken Spalte wird der Übersichtlichkeit halber eine grobe Kategorie angezeigt (bspw. "Generell", "Bus" etc.), so dass bereits auf den ersten Blick die Zuordnung des jeweiligen Eintrages ersichtlich ist.
- In der mittleren Spalte wird die Funktion genannt.
- In der rechten Spalte befindet sich das zugehörige Feld, das den derzeitigen Eintrag bzw. die Einstellung zeigt. Dabei werden die Einträge aus der Datei *BSB_LAN_config.h* übernommen, d.h. auch bei deaktivierten Funktionen sind die Voreinstellungen sichtbar, so dass deutlich wird, wie bspw. Parameter einzutragen sind. Je nach Art der Einstellung wird entweder ein PullDown-Menü mit den verfügbaren Einstellungen oder lediglich ein Feld angezeigt.  
  
| Wichtig |
|:--------|
| Zum Übernehmen geänderter Einstellungen muss schließlich unten auf den Button "Parameter speichern" geklickt werden! |  
  
Im Folgenden nun die tabellarische Übersicht der Funktionen mit den (Vor-)Einstellungen und den entspr. Erklärungen (auf die Nennung der linken Spalte "Kategorie" muss an dieser Stelle aus Platz- und Darstellungsgründen leider verzichtet werden):  

| Funktion | (Vor-)Einstellung | Erklärung |
|:-------------:|:-------------:|:-------------------------------------------:|
| Erweiterte Einstellungen anzeigen | Aus | Anzeige der erweiterten Einstellungen von BSB-LAN (Aus/Ein). Für Zugriff auf sämtliche Einstellungsmöglichkeiten von BSB-LAN muss "Ein" ausgewählt (und anschließend unten auf "Parameter speichern" geklickt) werden. |
| Konfiguration aus EEPROM lesen | Ein | Liest die gespeicherte Konfiguration aus dem EEPROM beim Start des Due aus (Aus/Ein). <br> Diese Einstellungen können von den Voreinstellungen abweichen, die in der Datei *BSB_LAN_config.h* hinterglegt wurden. <br> *Sollen die im EEPROM gespeicherten Einstellungen bspw. bei einem Update überschrieben werden, so ist vor dem Flashen auf "Aus" zu stellen und die Einstellung zu speichern!* <br> Wenn die Einstellung auf „Aus“ ist, werden Änderungen nur bis zum Neustart des Due aktiv bleiben. |
| Schreibzugriff (Ebene) | Aus | Schreibzugriff des Adapters auf den Heizungsregler (Aus/Standard/Komplett). <br> **Soll Schreibzugriff auf den Heizungsregler gewährt werden, so ist es empfehlenswert, die Einstellung 'Standard' zu wählen, hierbei sind nahezu alle verfügbaren Parameter schreibbar.** Im Unterschied zu 'Komplett' sind jedoch einige funktionskritische Parameter nicht veränderbar, die reglerintern nochmals geschützt vorliegen. <br> *Die Einstellung 'Komplett' sollte daher nur in Ausnahmefällen und mit Bedacht sowie einem sehr guten Kenntnisstand über die Reglerfunktionalität gewählt werden!* |
| Auf Updates überprüfen | Aus | Automatisches Überprüfen auf Updates von BSB-LAN (Aus/Ein) |
| OTA Update | Aus | OTA-Updatefunktion für ESP32-basierte Boards (OTA = Over The Air) deaktiviert (Aus) / aktiviert (Ein). <br> Zur weiteren Vorgehensweise für OTA-Updates lies bitte [Kap. 2.1.3 Updates](kap02.md#213-updates). |
| RX Pin Nummer | 0 | 0 = Autoselect. Falls ein anderer Pin als der voreingestellte RX-Pin (s. Datei *BSB_LAN_config.h*) genutzt wird, ist dieser hier einzutragen.  |
| TX Pin Nummer | 0 | 0 = Autoselect. Falls ein anderer Pin als der voreingestellte TX-Pin (s. Datei *BSB_LAN_config.h*) genutzt wird, ist dieser hier einzutragen.  |
| Typ | BSB | Verwendeter Bustyp (BSB/LPB/PPS) |
| Eigene Adresse | 66 | Eigene Adresse des Adapters |
| Zieladresse | 0 | Zieladresse für die Abfragen |	
| PPS: PPS-Modus | Passiv | Nur PPS: Benutzer, die den Adapter an der PPS-Schnittstelle verwenden, müssen zwei Einstellungen vornehmen: Zum einen muss der Modus ausgewählt werden, in dem auf den Bus zugegriffen werden soll (Passiv/Als Raumgerät). Bei Verwendung eines QAA-Raumgerätes muss hier „passiv“ ausgewählt werden. Dann werden nur die Werte, die über den Bus gehen, in der Weboberfläche angezeigt, ein Schreiben von Werten ist dann nicht möglich. <br> Wenn hier „als Raumgerät“ ausgewählt wird, können über die Weboberfläche auch Werte an die Heizung gesendet werden. Zum anderen ist dann noch der Typ des zu emulierenden Raumgerätes auszuwählen (s.u.). *Es sollte dann kein weiteres Raumgerät am Bus hängen, da sonst beide Sender ihre jeweils eigenen Werte an den Heizungsregler schicken, so dass kein konsistenter Betrieb möglich ist.* |
| PPS: QAA Modell | QAA70 | Nur PPS: Modell des zu imitierenden Raumgerätes (QAA50/QAA70). |
| Gerätefamilie | 0 | 0 = automatische Reglererkennung aktiv (empfohlene Einstellung). Bei einer fehlerhaften Erkennung kann die Gerätefamilie (Ausgabe von `/6225`) des angeschlossenen Reglers fest eingetragen werden. |
| Gerätevariante | 0 | 0 = automatische Reglererkennung aktiv (empfohlene Einstellung). Bei einer fehlerhaften Erkennung kann die Gerätevariante (Ausgabe von `/6226`) des angeschlossenen Reglers fest eingetragen werden. |
| URL Passkey | -keine Voreinstellung- | Optionale Sicherheitsfunktion: "URL Passkey" | 
| HTTP-Authentifizierung | -keine Voreinstellung- | Optionale Sicherheitsfunktion: "User-Pass" (Basic HTTP Auth) |	
| DHCP verwenden | Ein | DHCP verwenden (= automatische IP-Adressvergabe durch Router) (Aus/Ein) |	
| Statische IP-Adresse | 192.168.178.88 | Manuelle Netzwerkkonfiguration: Feste IP-Adresse |
| Subnetzmaske | 255.255.255.0 | Manuelle Netzwerkkonfiguration: Subnetz |
| Gateway | 192.168.178.1 | Manuelle Netzwerkkonfiguration: IP-Adresse des Gateways |	
| DNS Server | 192.168.178.1 | Manuelle Netzwerkkonfiguration: IP-Adresse des DNS-Servers | 
| TCP Port | 80 | TCP-Port des Setups | 
| MAC-Adresse | 00:80:41:19:69:90 | (Voreingestellte) MAC-Adresse des LAN-Shields oder MAC-Adresse des ESP |
| Vertrauenswürdige IP-Adresse | 0.0.0.0 | Optionale Sicherheitsfunktion: "Trusted IP", Zugriff nur von dieser IP möglich | 
| Vertrauenswürdige IP-Adresse | 0.0.0.0 | Optionale Sicherheitsfunktion: "Trusted IP", Zugriff nur von dieser IP möglich | 
| WLAN SSID | -keine Voreinstellung- | SSID des WLAN |	
| WLAN Passwort | -keine Voreinstellung- | Passwort des WLAN |
| Verwenden | Aus | MQTT-Funktion verwenden (Aus/Ein) |	
| IP-Adresse Broker | 192.168.178.20 | IP-Adresse des MQTT-Brokers |	
| Username | User | MQTT: Username bei Verwendung von Username/Passwort |	
| Passwort | Pass | MQTT: Passwort bei Verwendung von Username/Passwort |
| Geräte ID | MyHeater | Gerätename (Header in JSON-Payload) |
| Topic prefix |	BSB-LAN | Topic prefix der MQTT-Nachrichten |
| Berechnung | Aus | Berechnung von 24h-Durchschnittswerten ausgewählter Parameter (Aus/Ein) |	
| Parameter | 8700,8326 | Parameter für die 24h-Durchschnittswertberechnung |	
| Logging aktiv | Aus | Logging aktiviert (auch nötig für MQTT!) und zu loggende Werte ggf. auf der microSD-Karte speichern (Aus/Ein) |	
| Logintervall (Sekunden) | 3600 | Logintervall in Sekunden | 
| Parameter | 8700,8743,8314 | Zu loggende Parameter | 
| Bustelegramme | Aus | Loggen von Bustelegrammen aktivieren (Aus/-diverse Optionen-), die gewünschte Einstellung ist der jeweiligen Optionsbeschreibung entspr. vorzunehmen. |	
| Pins | 0 | Verwendete(r) Pin(s) für OneWire-Sensoren (DS18B20) (0 = deaktiviert) |	
| Pins | 0 | Verwendete(r) Pin(s) für DHT22-Sensoren (0 = deaktiviert) |
| Sensoren | 0 | Anzahl der angeschlossenen BME280-Sensoren (0 = deaktiviert) |
| TWW-Push Taste: Pin | 0 | Raumgerät-Emulation: Verwendeter Pin für den TWW-Push Taster. |
| RGT1 Temperatursensor Parameter | -keine Voreinstellung- | Raumgerät 1 Emulation: Trage hier die spezifische(n) Parameternummer(n) für den (die) Raumtemperatur-Sensor(en) ein. Bis zu fünf Sensoren können verwendet werden, die Aufzählung der Parameternummern ist lediglich durch ein Komma zu separieren. Wenn mehr als ein Sensor verwendet werden, wird automatisch der Mittelwert gebildet. |
| RGT1 Präsenztaste: Pin | 0 | Raumgerät 1 Emulation: Verwendeter Pin für die HK1-Präsenztaste. |
| RGT2 Temperatursensor Parameter | -keine Voreinstellung- | Raumgerät 2 Emulation: Trage hier die spezifische(n) Parameternummer(n) für den (die) Raumtemperatur-Sensor(en) ein. Bis zu fünf Sensoren können verwendet werden, die Aufzählung der Parameternummern ist lediglich durch ein Komma zu separieren. Wenn mehr als ein Sensor verwendet werden, wird automatisch der Mittelwert gebildet. |
| RGT2 Präsenztaste: Pin | 0 | Raumgerät 2 Emulation: Verwendeter Pin für die HK2-Präsenztaste. |
| RGT3 Temperatursensor Parameter | -keine Voreinstellung- | Raumgerät 3 Emulation: Trage hier die spezifische(n) Parameternummer(n) für den (die) Raumtemperatur-Sensor(en) ein. Bis zu fünf Sensoren können verwendet werden, die Aufzählung der Parameternummern ist lediglich durch ein Komma zu separieren. Wenn mehr als ein Sensor verwendet werden, wird automatisch der Mittelwert gebildet. |
| RGT3 Präsenztaste: Pin | 0 | Raumgerät 3 Emulation: Verwendeter Pin für die HK3-Präsenztaste. |
| Verwenden | Aus | MAX!-Geräte verwenden (Aus/Ein) |	
| IP-Adresse Cube | 192.168.178.5 | IP-Adresse des CUNO/CUNX/modifizierten MAX!Cube |	
| Geräte | KEQ0502326,KEQ0505080 | Seriennummern der zu verwendenden MAX!-Geräte |	
| Verwenden | Aus | IPWE-Erweiterung verwenden (URL/ipwe.cgi) (Aus/Ein) |	
| Parameter | 8700,8743,8314 | Darzustellende Parameter in der IPWE-Erweiterung |
| Verwenden | Serial | Debugging-Funktion verwenden (Aus/Serial/Telnet) |
| Verbositätsmodus | Ein | Verbositätsmodus aktiviert (Aus/Ein) |
| Monitor Modus | Aus | Monitor Modus aktiviert (Aus/Ein) |
| Unbekannte Parameter anzeigen | Ein | Unbekannte bzw. nicht verfügbare Parameter ("error 7 - parameter not supportet") anzeigen (Ein/Aus). |


---  
  
### 2.2.2 Konfiguration durch Anpassen der Datei *BSB_LAN_config.h*  
  
Die Konfiguration der BSB-LAN-Software kann außerdem erfolgen, indem die Einstellungen in der Datei *BSB_LAN_config.h* angepasst werden. Hierzu werden nachfolgend sämtliche Einstellmöglichkeiten analog zu der Reihenfolge in der Datei *BSB_LAN_config.h* aufgeführt. Es ist daher ratsam, die Einstellungen Punkt für Punkt abzuarbeiten.  

  
| Hinweis |
|:--------|
| Wenn ein Definement deaktiviert ist oder werden soll, dann sind vor dem Hashtag zwei Slashes hinzuzufügen ("auskommentieren"): <br> `//#define XYZ` = Definement XYZ ist deaktiviert. |     
| Wenn ein Definement aktiviert werden soll, dann sind die beiden Slashes vor dem Hashtag zu entfernen: <br> `#define XYZ` = Definement XYZ ist aktiv. |  

---

-   Die **Sprache der Benutzeroberfläche** des Webinterface des Adapters sowie der Kategorie- und Parameterbezeichnungen muss
    *zwingend* ausgewählt bzw. definiert werden. Für "Deutsch" ist dabei das folgende Definement zu wählen:  
    `#define LANG DE`  
    Ab BSB-LAN v.042 ist es möglich, BSB-LAN auch in anderen Sprachen zu nutzen, wobei prinzipiell jede Sprache unterstützt werden kann (es müssen dann 'nur' die entspr. Übersetzungen erstellt werden).  
Vorhanden sind momentan: Tschechisch (CZ), Deutsch (DE), Dänisch (DK), Englisch (EN), Spanisch (ES), Finnisch (FI), Französisch (FR), Griechisch (GR), Ungarisch (HU), Italienisch (IT), Niederländisch (NL), Polnisch (PL), Russisch (RU), Schwedisch (SE), Slovenisch (SI) und Türkisch (TR). Wenn gewisse Ausdrücke nicht in der spezifischen Sprache vorliegen, wird automatisch der englische Ausdruck angezeigt. Sollte auch dieser nicht vorhanden sein, wird schließlich der deutsche Ausdruck dargestellt. 
  
---

-   **Konfigurationseinstellungen aus EEPROM oder der Datei *BSB_LAN_config.h* laden:**  
    
    `byte UseEEPROM = 1;`  
    
    Gemäß Voreinstellung werden die Konfigurationseinstellungen beim Start von BSB-LAN aus dem EEPROM gelesen. Als Fallback kann die Variable auf '0' gesetzt werden, dann werden die Einstellungen aus der Datei *BSB_LAN_config.h* gelesen.  
    
---    

***Netzwerkeinstellungen:***  
    
-   **MAC-Adresse des Ethernet-Shields:**  
    
    `byte mac[] = { 0x00, 0x80, 0x41, 0x19, 0x69, 0x90 };`
    
    Die voreingestellte MAC-Adresse kann beibehalten werden. Eine Änderung ist i.d.R. nur nötig, wenn mehr als ein Adapter verwendet wird (es sollte in jedem Fall darauf geachtet werden, dass jede MAC-Adresse im Netzwerk nur *einmal* vorkommt!). Änderungen sollten in dem Fall möglichst nur bei dem letzten Byte erfolgen (also bspw. 0x91, wenn ein zweiter Adapter zum Einsatz kommt).  
    
    | Hinweis | 
    |:--------|
    | Die hier einstellbare MAC-Adresse bezieht sich nur auf das LAN-Shield. Sie beeinflusst nicht die MAC-Adresse des ESP bei der WiFi-ESP-Lösung, dort ist die MAC-Adresse nicht einstellbar. |
    | Die hier vergebene MAC-Adresse beeinflusst auch den Hostnamen (bzw. ist ein Bestandteil davon), der bei der Verwendung von DHCP (s.u.) vom Router vergeben wird: Der Hostname setzt sich aus der Kennung "WIZnet" und den drei letzten Bytes der MAC-Adresse zusammen. <br> Für die o.g. voreingestellte MAC-Adresse lautet der Hostname somit "WIZnet196990". Dieser wird i.d.R. auch als solcher im Router angezeigt. Das Webinterface von BSB-LAN ist in dem Fall im Browser unter `http://wiznet196990` erreichbar. <br> Wird die MAC-Adresse bei einem zweiten Adapter nun also bspw. in <br> `byte mac[] = { 0x00, 0x80, 0x41, 0x19, 0x69, 0x91 };` <br> geändert, so lautet der Hostname entsprechend "WIZnet196991" bzw. `http://wiznet196991`. |  
    
    
-   **Ethernet-Port:**  
    
    `uint16_t HTTPPort = 80;`  
    
    Port 80 für HTTP voreingestellt.   
    
    
-   **DHCP:**  
    
    `bool useDHCP = true;`  
    
    Per default wird DHCP verwendet. Sollte dies jedoch nicht gewünscht sein, sondern soll selber eine feste IP vergeben werden, so ist *false* einzustellen.  
    
    | Hinweis |
    |:--------|
    | Bei der Nutzung von DHCP setzt sich der automatisch vergebene Hostname aus der Kennung "WIZnet" und den drei letzten Bytes der MAC-Adresse zusammen. <br> Für die o.g. voreingestellte MAC-Adresse lautet der Hostname somit "WIZnet196990". Dieser wird i.d.R. auch als solcher im Router angezeigt. Das Webinterface von BSB-LAN ist in dem Fall im Browser unter `http://wiznet196990` erreichbar. <br> Wird die MAC-Adresse bei einem zweiten Adapter nun also bspw. in <br> `byte mac[] = { 0x00, 0x80, 0x41, 0x19, 0x69, 0x91 };` <br> geändert, so lautet der Hostname entsprechend "WIZnet196991" bzw. `http://wiznet196991`. <br>  Die IP, die bei der DHCP-Nutzung vom Router automatisch vergeben wird, wird beim Start des Due/ESP32 im Seriellen Monitor der Arduino IDE angezeigt. |  
   
   
-   **IP-Adresse:**  
    
    `byte ip_addr[4] = {192,168,178,88};`  
    
    IP-Adresse des Adapters, wenn DHCP nicht verwendet wird - *bitte beachte die Kommata anstelle von Punkten!*  
    
    | Achtung |
    |:--------| 
    | Falls du die IP selbst fest vergeben willst, so vergewissere dich, dass die IP-Adresse nur einmal im Netzwerk vorkommt! |  
   
  
-   **Gateway-Adresse:**  
    
    `byte gateway_addr[4] = {192,168,178,1};` 
    
    IP-Adresse des Gateways (i.d.R. die des Routers) - *bitte beachte die Kommata anstelle von Punkten!*  
          
        
-   **DNS-Server:**  
    
    `byte dns_addr[4] = {192,168,178,1};`  
    
    IP-Adresse des DNS - *bitte beachte die Kommata anstelle von Punkten!*  
  
  
-   **Subnet:**  
    
    `byte subnet_addr[4] = {255,255,255,0};`  
    
    Subnetz-Adresse - *bitte beachte die Kommata anstelle von Punkten!*  
    
---    
   
-   **WiFi per zusätzlichem ESP8266:**  
    
    `//#define WIFI`  
    
    Dieses Definement ist zu aktivieren, wenn die WiFi-Funktion mittels der [ESP8266-WiFi-Lösung](kap1.md#122-due--wlan-die-esp8266-wifi-lösung) oder mittels eines [ESP32](kap1.md#13-der-esp32) genutzt werden soll.  
    
    `char wifi_ssid[32] = "YourWiFiNetwork";` 
    
    Bei Verwendung von WiFi, *YourWiFiNetwork* durch die SSID des WLAN-Netzwerkes ersetzen.  
    
    `char wifi_pass[64] = "YourWiFiPassword";`  
    
    Bei Verwendung von WiFi, *YourWiFiPassword* durch das Passwort des WLAN-Netzwerkes ersetzen.  
    
    `#define WIFI_SPI_SS_PIN 12`  
    
    Hier wird der beim DUE zu verwendende SS-Pin für die [ESP8266-WiFi-Lösung](kap1.md#122-due--wlan-die-esp8266-wifi-lösung) definiert. Es ist ratsam, die Voreinstellung zu belassen. Soll dennoch ein anderer Pin genutzt werden, so ist zwingend darauf zu achten, dass der gewünschte Pin weder anderweitig genutzt wird, noch in der Liste der geschützten Pins aufgeführt ist.  
    
    | Hinweis |
    |:--------|
    | Die MAC-Adresse des ESP8266 lässt sich nicht einstellen! |
   
---   
   
-   **Nutzung von Multicast DNS:**  
    
    `#define MDNS_SUPPORT`
    `char mDNS_hostname[32] = "BSB-LAN";`
    
    Per default ist die Nutzung von Multicast DNS mit dem Hostnamen "BSB-LAN" aktiviert, so dass das Adaptersetup im Netzwerk unter diesem Namen zu finden ist.  
    
    | Hinweis | 
    |:--------|
    | mDNS ist nur bei einer LAN-Anbindung verfügbar, bei der [WiFi-Lösung mittels ESP8266](kap1.md#122-wlan-verwendung-eines-zusätzlichen-esp8266) hingegen nicht! |
   
---    
    
-   **Debugging und entspr. Einstellungen:**  
    
    - `#define DEBUG` → Debug-Modus aktivieren (s. nachfolgende Optionen)  
    
    - `byte debug_mode = 1;`  
      
      Folgende Debug-Optionen sind verfügbar:  
      
      0 - Debugging deaktiviert  
      
      1 - Debug-Nachrichten an das serielle Interface senden (einzustellen bei der Verwendung von bspw. dem Seriellen Monitor der Arduino IDE)  
      
      2 - Debug-Nachrichten an einen TelNet-Client anstelle des seriellen Interface senden  
    
    - `byte verbose = 1;`  
    
      Per default ist der Verbose Modus aktiviert (= 1), so dass neben den Rohdaten auch der jeweilige Klartext (falls vorhanden) von Parametern und Werten dargestellt wird. Es ist ratsam, diese Einstellung so zu belassen, da es eine etwaige  Fehlersuche erleichtert. Darüber hinaus ist diese Einstellung nötig, falls Telegramme und CommandIDs neuer Parameter dekodiert werden sollen. zum Deaktivieren ist '0' anstelle der '1' einzutragen.    
    
    - `byte monitor = 0;`  
       
       Bus-Monitor-Modus, per default deaktivert (= 0); zum Aktivieren auf '1' stellen.  
    
    - `bool show_unknown = true;`  
      
      Alle Parameter mitsamt der *unbekannten Parameter* (Fehlermeldung „error 7 (parameter not supportet)") werden bei einer Abfrage via Webinterface (bspw. bei einer Abfrage einer kompletten Kategorie) angezeigt (Voreinstellung).  
      Sollen der Übersichtlichkeit halber die vom Heizungsregler nicht unterstützten (also 'unbekannten') Parameter bei einer Abfrage ausgeblendet werden (bspw. bei der Abfrage einer kompletten Kategorie), so ist 'false' einzustellen (`bool show_unknown = false;`). *Die Parameter werden jedoch bei einer solchen Abfrage (bspw. einer komplette Kategorie) trotzdem mit abgefragt.*  
   
---   

    
***Sicherheitsfunktionen:***  

-   **Passkey:**  
    
    Um das System vor einem ungewollten Zugriff von außen zu schützen, kann die **Funktion des Sicherheitsschlüssels (PASSKEY)** genutzt werden (sehr einfach und nicht wirklich sicher!):  
    
    `char PASSKEY[64] = "";`

    Für die Verwendung ist eine Zahlenfolge einzugeben, bspw. `char PASSKEY[64] = "1234";` → in diesem Beispiel lautet der Passkey 1234. Wird keine Zahlenfolge eingegeben (also die Voreinstellung nicht geändert), so ist die Funktion deaktiviert.   
    
    | Achtung |
    |:--------|
    | Falls die PASSKEY-Funktion genutzt wird, muss die URL bei einem Aufruf des Webinterfaces den definierten Schlüssel als erstes Element enthalten, bspw. `http://<IP-Adresse>/<passkey>/` um die Startseite zu sehen. <br> *Nur* bei der URL der optionalen [IPWE-Erweiterung](kap06.md#62-ipwe-erweiterung) darf der Passkey *nicht* zusätzlich eingegeben werden! |
    | Bitte nicht den Slash hinter dem Passkey vergessen! |


-   **Trusted IP:**  
    `byte trusted_ip_addr[4] = {0,0,0,0};`  
    `byte trusted_ip_addr2[4] = {0,0,0,0};`  

    Bei den Variablen `trusted_ip_addr` (und `trusted_ip_addr2` für eine weitere IP) kann man eine  vertrauenswürdige IP eintragen (z.B. des
    FHEM-Servers), dann ist der Zugriff nur über diese IP. Lautet die vertrauenswürdige IP des Clients bspw. `192.168.178.20`, so ist `byte trusted_ip_addr[4] = {192,168,178,20};` einzustellen.  
    Wird die Voreinstellung `{0,0,0,0}` nicht geändert und/oder die erste Zahl ist eine 0, ist diese Funktion deaktiviert.  

-   **User-Pass:**  
    `char USER_PASS[64] = "";`  
    
    Mit `USER_PASS[64]` kann eine Zugangssperre nach dem Muster *Username:Passwort* gesetzt werden:  
    `//char USER_PASS[64] = "User:Password";`  
    Ist kein String eingegeben (Voreinstellung), so ist die Funktion deaktiviert.  
      
      
---   

***Einstellungen für optionale Sensoren:***  
      
-   **OneWire-Temperatursensoren (DS18B20):**  
    
    `#define ONE_WIRE_BUS`  
    `byte One_Wire_Pin = 0;`  
    
    Sollen OneWire-Temperatursensoren (DS18B20) verwendet werden, muss das Definement aktiviert sein sowie die entsprechende GPIO-Pinbelegung definiert werden.  
    Voreingestellt ist das Modul aktiviert und Pin 0 eingestellt (0 = OneWire-Verwendung deaktiviert).  
              
-   **DHT22-Sensoren:**  
    
    `#define DHT_BUS`  
    `uint8_t DHT_Pins[10] = {0};`  
    
    Sollen DHT22-Sensoren (Temperatur & Feuchtigkeit; max. Anzahl: 10) verwendet werden, muss das entsprechende Definement aktiviert sein und die entsprechende GPIO-Pinbelegung definiert werden.  
    Voreingestellt ist das Modul aktiviert und Pin 0 eingestellt (0 = DHT-Verwendung deaktiviert).  
   
  
-  **BME280 Sensoren:**  
   
   `#define BME280`
   `byte BME_Sensors = 0;`
      
   Wenn BME280 Sensoren zur Anwendung kommen sollen, so muss das Definement aktiviert und die Anzahl der angeschlossenen Sensoren angegeben werden (Voreinstellung 0 = deaktiviert, maximal 2). Die Sensoren müssen am I2C-Bus angeschlossen werden. Die Adresse des ersten Sensors muss 0x76 lauten, die des zweiten Sensors 0x77.  
    
---

-   **24h-Durchschnittswerte:**  
    
    `#define AVERAGES`  
    
    Sollen 24h-Durchschnittswerte von bestimmten Parametern berechnet werden, so ist das Definement zu aktivieren (Voreinstellung).  
    
    `bool logAverageValues = false;`  
    
    Sollen diese Durchschnittswerte zusätzlich in der Datei *averages.txt* auf einer microSD-Karte geloggt werden, so ist die Variable auf `true` einzustellen.  
    Ist ein Loggen dieser Werte nicht gewünscht, muss die Variable auf `false` belassen werden (Voreinstellung).  
    
    Des Weiteren müssen die gewünschten Parameter (max. 40) bei der entsprechenden Variable eingetragen
    werden, bspw.:  
    
    ```
    int avg_parameters[40] = {  
    8700, // Außentemperatur  
    8740 // Raumtemperatur-Ist  
    };
    ```  
      

---

-   **Logging (auch auf microSD-Karte) und/oder Verwendung von MQTT:**  
    
    `#define LOGGER` → Das Logging-Modul wird kompiliert.  
    
    | Achtung |
    |:--------|
    | Das genannte *aktivierte* Definement ist sowohl Voraussetzung für das Loggen auf eine microSD-Karte als auch für die Verwendung von MQTT (s.u.)! |     
      
    Nachfolgend können/sollten verschiedene Einstellungen vorgenommen werden:  
    
    - Wenn ein microSD-Kartenadapter an einem ESP32-basierten Board verwendet wird und das Loggen auf Karte (empfohlen!) anstatt des SPIFF-Flashspeichers erfolgen soll, so ist das folgende Definement zu aktivieren:  
    
      `//#define ESP32_USE_SD`  
    
    - Sollen 'rohe' *Bus-Datentelegramme* geloggt werden, kann die Auswahl spezifiziert werden. Die Speicherung der Telegramme erfolgt in der Datei *journal.txt* auf der microSD-Karte. In der Voreinstellung ist das Loggen von Bustelegrammen deaktiviert:  
    
      `int logTelegram = LOGTELEGRAM_OFF;`  
    
      Folgende Einstelloptionen sind hier verfügbar:  
      
      `LOGTELEGRAM_OFF` → Bus-Telegramme werden nicht geloggt (Voreinstellung)  
      
      `LOGTELEGRAM_ON` → alle Bus-Telegramme werden geloggt  
      
      `LOGTELEGRAM_ON + LOGTELEGRAM_UNKNOWN_ONLY` → nur unbekannte Bus-Telegramme werden geloggt  
      
      `LOGTELEGRAM_ON + LOGTELEGRAM_BROADCAST_ONLY` → nur Broadcast-Telegramme werden geloggt  
      
      `LOGTELEGRAM_ON + LOGTELEGRAM_UNKNOWNBROADCAST_ONLY` → nur unbekannte Broadcast-Telegramme werden geloggt  

    - `bool logCurrentValues = false;`  
      
      Die Daten der zu loggenden Parameter werden bei Bedarf in der Datei 'datalog.txt' auf der microSD-Karte gespeichert. Dazu ist die Variable auf `true` zu setzen.  
      
    - `unsigned long log_interval = 3600;`  
       
       Das gewünschte Logintervall in *Sekunden*.  
    
      | Achtung |
      |:--------|
      | Dieses Intervall ist auch für die Nutzung von MQTT (s.u.) einzustellen, selbst wenn kein Loggen stattfinden soll! |  
  
    - Die zu loggenden Parameter (max. 40) müssen dann bei der entsprechenden Variable eingetragen werden, bspw.:
      ```
      int log_parameters[40] = {  
      8700, // Außentemperatur  
      8740 // Raumtemperatur-Ist  
      };
      ```
        
      Wenn bspw. die Messwerte mehrerer DS18B20- oder DHT22-Sensoren geloggt werden sollen, müssen die enstpr. spezifischen Parameternummern bei den Log-Parametern entsprechend einzeln untereinander aufgeführt werden, bspw.:  
      ```
      20301, // Spezialparameter 20300-20499: DS18B20-Sensoren 1-100   
      20303,  
      20305, 
      ```
      loggt die Messwerte der DS18B20-Sensoren 1-3.

      Zum Loggen der Brennerstarts und -laufzeiten müssen die Spezialparameter 20000 und 20001 aufgeführt werden (siehe auch die Beschreibung in der Datei BSB_LAN_config.h). Bei einem zweistufiger Ölbrenner, dessen Regler die entsprechenden Broadcasts schickt und bei dem eine Differenzierung der Brennerstufen möglich ist (derzeit nur RVS43.325), müssen hier zusätzlich 20002 und 20003 mit aufgeführt werden.  
    
      Weitere gängige Spezialparameter lauten:   
      * TWW-Laufzeit und TWW-Takte: 20004 und 20005,  
      * 24h-Durchschnittswerte: 20050-20099,  
      * DHT22-Sensoren: 20100-20299,    
      * BME280 Sensoren: 20200-20299,    
      * DS18B20-Sensoren: 20300-20499,   
      * MAX!-Sensoren: 20500-20699.    
      Für eine genauere Aufschlüsselung der Nummernbereiche einzelner optionaler Sensoren sieh bitte im entspr. Kapitel nach.  
        
---        
        
-   **MQTT:**  
    
    Soll MQTT zum Einsatz kommen, so sind *neben den obigen Logging-Parametern* die entspr. Variablen und Einstellungen anzupassen:    

    - `#define MQTT` → Das MQTT-Modul wird kompiliert (Voreinstellung)  
    
    - `byte mqtt_mode = 0;` → MQTT ist deaktiviert (Voreinstellung); folgende Optionen sind verfügbar:  
      
      1 = die Nachrichten werden im einfachen Textformat gesendet  
      
      2 = die Nachrichten werden im JSON-Format gesendet 
          Struktur der JSON-Payload: 
          `{"MQTTDeviceID": {"status":{"log_param1":"value1","log_param2":"value2"}, ...}})`
          
      3 = die Nachrichten werden im rich JSON-Format gesendet 
          Struktur der rich JSON-Payload: 
          `{"MQTTDeviceID": {"id": one_of_logvalues, "name": "program_name_from_logvalues", "value": "query_result", "desc": "enum value description", "unit": "unit of measurement", "error", error_code}})`  
    
    - `byte mqtt_broker_ip_addr[4] = {192,168,1,20};` → IP des MQTT-Brokers.  
        *Bitte beachte die Kommata anstelle von Punkten!*  
        Der Standardport ist 1883 und muss nicht extra definiert werden.  
        
    - `char MQTTUsername[32] = "User";` → Username; wird Username/Passwort beim MQTT-Broker nicht verwendet, ist das *User* zu entfernen.   
    
    - `char MQTTPassword[32] = "Pass";` → Passwort; wird Username/Passwort beim MQTT-Broker nicht verwendet, ist das *Pass* zu entfernen.   
    
    - `char MQTTTopicPrefix[32] = "BSB-LAN";` → Optional: Die MQTT-Nachrichten haben das Topic-Format ('Thema') `BSB-LAN/<Parametername>` und den entsprechenden Wert dann in der Payload. Wenn nichts angegeben wird (`char MQTTTopicPrefix[32] = "";`), wird der Standard-Themenname verwendet.     
    
    - `char MQTTDeviceID[32] = "MyHeater";` → Optional: Device-Name, der als Header in der JSON-Payload genutzt wird. Wenn nichts angegeben wird (`char MQTTDeviceID[32] = "";`), wird "BSB-LAN" verwendet.  
    
    | Hinweis |
    |:--------|
    | Die zu übertragenden Parameter sowie das Übertragungsintervall für MQTT werden oben bei den zu loggenden Parametern und dem Logintervall für das Loggen auf microSD-Karte eingegeben! |  
   
---   
   
-   **IPWE:**  
    
    `#define IPWE` → Das IPWE-Modul wird kompiliert.    
    `bool enable_ipwe = false;`  
    
    Soll die IPWE-Erweiterung (URL/ipwe.cgi) verwendet werden, ist die Variable auf 'true' zu setzen.     
  
    Die gewünschten Parameter (max. 40) sind ebenfalls einzutragen:  
    ```  
    int ipwe_parameters[40] = {  
    8700,                   // Außentemperatur  
    8830                   // Warmwassertemperatur  
    };  
    ```
  
---  
  
-   **MAX! (CUNO/CUNX/modifizierter MAX!Cube):**  
    
    Sollen optionale MAX!-Thermostate zum Einsatz kommen, müssen folgende Einstellungen angepasst werden:  
    
     - `//#define MAX_CUL` → Definement aktivieren (= `#define MAX_CUL`) (deaktiviert by default)  
     
     - `bool enable_max_cul = false;` → Variable auf 'true' setzen  
     
     - `byte max_cul_ip_addr[4] = {192,168,178,5};` → IP-Adresse des CUNO/CUNX/modifizierten MAX!Cubes - *bitte beachte die Kommata anstelle von Punkten!*  
     
    - Liste der abzufragenden MAX!-Thermostate (max. 20):
    ```
    char max_device_list[20][11] = {   
    "KEQ0502326",  
    "KEQ0505080"
    };
    ```  
    Hier bitte die entspr. 10-stellige Seriennummer / MAX!-ID eintragen.  
      
    Für weitere Informationen bzgl. der Einbindung von MAX!-Komponenten s. [Kap. 7.3](kap7.md#73-max-komponenten).  
  
---  
  
-   **Anzahl der maximalen Wiederholungsversuche bei einer Abfrage:**    
    
    `#define QUERY_RETRIES  3`  
    
    Hier kann bei Bedarf eingestellt werden, wieviele maximale Wiederholungsversuche ausgeführt werden, wenn bei einer Abfrage keine entsprechende Antwort vom Heizungsregler kommt. In der Regel kann die Voreinstellung (max. 3 Versuche) beibehalten werden.  
    
---    
  
***Buseinstellungen (Pins und Typ):*** 
  
-   **RX-/TX-Pinkonfiguration:**  
    
    `byte bus_pins[2] = {0,0};` → automatische Erkennung und Einstellung der RX-/TX-Pinbelegung (Voreinstellung); ansonsten gilt:  
    
    - Hardware-Serial (ab Adapter v3) Arduino Due: RX-Pin = 19, TX-Pin = 18 (`{19,18}`); NodeMCU: 16,17; Olimex EVB 36,17.  
    - Software-Serial (bis einschließlich Adapter v2 & Arduino Mega 2560): RX-Pin = 68, TX-Pin = 69 (`{68,69}`)  
    
-   **Bus-Typ/-Protokoll:**  
    
    `uint8_t bus_type = 0;`  
    
    Je nach Anschluss des Adapters an einen BSB/LPB/PPS-Anschluss muss der entspr. Bus-Typ definiert werden (bereits nach Booten des Arduino wirksam).     
    Voreingestellt ist 0 für BSB, für LPB ist 1 einzustellen, für PPS hingegen 2:    
    
    - 0 = BSB  
    - 1 = LPB  
    - 2 = PPS
  
-   **Buseinstellungen:**  
    
    Abhängig vom Bus-Typ müssen unterschiedliche Einstellungen vorgenommen werden.  
    
    → **BSB:**  
    - `byte own_address = 0x42;` → entspricht der eigenen Geräteadresse 66 des BSB-LAN-Adapters  
    - `byte dest_address = 0x00;` → entspricht der Zieladresse 0 (i.d.R. der Regler des Wärmeerzeugers)  
    
    → **LPB:**  
    - `byte own_address = 0x42;` → eigene Adresse (BSB-LAN-Adapter), entspricht der Segmentadresse 4 mit Geräteadresse 3   
    - `byte dest_address = 0x00;` → Zieladresse (Heizungsregler), entspricht der Segmentadresse 0 mit Geräteadresse 1  
    
    → **PPS:**  
    - `bool pps_write = 0;` → in der Standardeinstellung ist nur ein lesender Zugriff auf den via PPS angeschlossenen Heizungsregler möglich.  
      Soll Schreibzugriff ermöglicht werden, so ist eine `1` einzutragen (`bool pps_write = 1;`).  
      
      | Achtung |
      |:--------|
      | Schreibzugriff NUR einstellen, wenn KEIN originales QAA50/QAA70-Raumgerät vorhanden ist! |
      
    - `byte QAA_TYPE = 0x53;` → Typ des zu imitierenden Raumgerätes:  
    0x53 = QAA70 (Voreinstellung) 
    0x52 = QAA50  
    0x37 = QAA95  
    0x66 = BMU  
    0xEA = MCBA/DC225
   
---   
    
    
-   **Erkennung bzw. Festlegung des Heizungsreglertyps:**  
    
    `static const int fixed_device_family = 0;`  
    `static const int fixed_device_variant = 0;`
    
    Wenn die Werte auf 0 gesetzt sind, ist die automatische Erkennung des angeschlossenen Reglers beim Starten des Arduino aktiviert (Voreinstellung). Dies kann i.d.R. so belassen werden.    
    Alternativ kann hier die Ausgabe von `http://<IP-Adresse>/6225/6226` eingetragen werden (6225 = Gerätefamilie / device family & 6226 = Gerätevariante / device variant).  
    Ein fest eingestellter Wert (laut Ausgabe von 6225&6226) stellt sicher, dass BSB-LAN auch dann noch korrekt arbeitet, wenn die Heizung bzw. der Regler erst nach dem Starten des Arduino/ESP eingeschaltet wird (da in dem Fall die automatische Erkennung des angeschlossenen Reglers nicht funktionieren kann, da ja keine Rückmeldung vom Regler kommt).  
    
---    
    
-   **Schreib-/Lesezugriff auf den Heizungsregler:**  
    
    `#define DEFAULT_FLAG FL_SW_CTL_RONLY`  
    
    In der Voreinstellung ist der Zugriff des Adapters auf den Heizungsregler auf Lesen beschränkt, d.h. ein Setzen bzw. Verändern von Parametern der Heizungssteuerung per Adapter ist in der Voreinstellung nicht möglich. Eine Änderung des Status auf *generellen* Schreibzugriff kann via Webinterface (Menüpunkt "Einstellungen") erfolgen.  
    
    | Hinweis für Mega-Nutzer |
    |:------------------------|
    | Die Möglichkeit der Konfiguration via Webinterface bietet sich für Nutzer des Mega 2560 nicht, da das Modul WEBCONFIG mangels Speicher nicht kompiliert und nicht genutzt werden kann. <br> In diesem Fall muss der Schreibzugriff nach wie vor durch das Flag '0' gewährt werden: <br> `#define DEFAULT_FLAG 0` |
      
    Ist der Schreibzugriff aus Sicherheitsgründen hingegen nur bei *ausgewählten* Parametern (z.B. 10000 oder 710) gewünscht, muss bei dem genannten Definement nach wie vor das genannte Flag auf `FL_SW_CTL_RONLY` (*Hinweis für Mega-Nutzer mit deaktiviertem WEBCONFIG-Modul: Hier bitte `FL_RONLY` setzen!*) gesetzt sein und dann in der Datei *BSB_LAN_defs.h* das `DEFAULT_FLAG` des gewünschten Parameters durch 0 (Null) ersetzt werden.  
    *Beachte hierbei jedoch bitte, dass es im Falle eines Updates von BSB-LAN nötig sein kann/wird, diese Änderungen erneut vorzunehmen!* 
    
    Im folgenden Beispiel wird Parameter 700 auf diese Weise schreibbar
    gemacht:  
    ```
    {0x2D3D0574, CAT_HK1, VT_ENUM, 700, STR700, sizeof(ENUM700), ENUM700, DEFAULT_FLAG, DEV_ALL}, // [-] - Heizkreis 1 - Betriebsart ***(virtuelle Zeile)***
    ```
    → aufgrund des „DEFAULT_FLAG" ist der Parameter momentan nur lesbar

    ```
    {0x2D3D0574, CAT_HK1, VT_ENUM, 700, STR700, sizeof(ENUM700), ENUM700, 0, DEV_ALL}, // [-] - Heizkreis 1 - Betriebsart ***(virtuelle Zeile)***
    ```
    → das „DEFAULT_FLAG" wurde durch „0" (Null, ohne Anführungszeichen)
    ersetzt
    
---    
    
-   **Eigenen Code** aus der Datei *BSB_LAN_custom.h* einfügen:  
    
    `//#define CUSTOM_COMMANDS`  
    
    Fügt die Befehle aus der Datei `BSB_LAN_custom.h` hizu, die am Ende jedes 'main loops' ausgeführt werden (per default deaktiviert).  
   
---   
   
-   **Überprüfen der BSB-LAN-Version:**  
    
    `#define VERSION_CHECK`  
    `bool enable_version_check = false;`    
    
    Diese Funktion überprüft bei jedem Aufruf der Startseite des Webinterface, ob eine neuere Version von BSB-LAN verfügbar ist; Internetzugriff nötig (deaktiviert by default). Zum Aktivieren ist die Variable auf 'true' zu setzen.  
    
    | Hinweis |
    |:--------|
    | Hierbei ist es unvermeidlich, dass die IP-Adresse an den Server übertragen wird. Wir erwähnen dies hier dennoch, da es sich hierbei um "persönliche Daten" handelt und diese Funktion daher standardmäßig deaktiviert ist. Mit der Aktivierung dieser Funktion erklärst Du Dich damit einverstanden, dass Deine IP-Adresse an den BSB-LAN-Server übermittelt wird, wo sie bis zu zwei Wochen in den Log-Dateien des Servers gespeichert wird, um sowohl technische als auch Missbrauchsanalysen zu ermöglichen. Wie Du dem Quellcode entnehmen kannst, werden bei diesem Vorgang keine weiteren Daten (z.B. alles, was mit Deiner Heizungsanlage zu tun hat) übertragen. |  
   
---    
   
-   **OTA-Updatefunktion (nur ESP32):**  
    
    `#define ENABLE_ESP32_OTA`  
    `boolean enable_ota_update = false;`    
    
    OTA-Updatefunktion (OTA = OverTheAir) für ESP32-basierte Boards (Voreinstellung: deaktiviert). Zum Aktivieren der Funktion muss `boolean enable_ota_update = true;` eingestellt werden. Eine fertige Firmware-Datei kann man in der Arduino IDE unter "Sketch / Kompilierte Binärdatei exportieren…" erstellen lassen. Der Upload der Datei erfolgt dann auf Port 8080 der BSB-LAN-IP.  
  
---
       
-   **"Externer" Webserver:**  
    
    `//#define WEBSERVER`    
    
    Wenn dieses Definement aktiviert ist, kann BSB-LAN als Webserver für statische Inhalte fungieren. Für weitere Informationen siehe bitte [Kapitel 6.9](kap06.html#69-verwenden-der-webserver-funktion).  
    
---    
    
-   **Speichern der Konfiguration im EEPROM (nur Arduino Due und ESP32):**  
    
    `#define CONFIG_IN_EEPROM`  
    
    Soll die Konfiguration nicht im EEPROM des Adapters (Due-Version) bzw. im Flashspeicher des ESP32 gespeichert werden, so ist das Definement zu deaktivieren.  
    
---    
    
-   **Konfiguration via Webinterface:**  
    
    `#define WEBCONFIG`  
    
    Ermöglicht die Konfiguration via Webinterface (bei Speicherung der Einstellungen im EEPROM des Adapters (Due-Version) bzw. im Flashspeicher des ESP32). Falls nicht gewünscht, dann ist dieses Definement zu deaktivieren.   
    
---  
  
-   **Compile JSON-based configuration and EEPROM config store module extension.**  
   
   `#define JSONCONFIG`  
   
---
  
-   **Variablen für eine zukünftige Verwendung, derzeit noch ohne Funktion:**  
    
    `#define ROOM_UNIT` → Raumgeräteersatz  
    `byte UdpIP[4] = {0,0,0,0};` → Ziel-IP-Adresse für UDP   
    `uint16_t UdpDelay = 15;` → Sendeintervall in Sekunden für UDP  

    `#define OFF_SITE_LOGGER` → Off-Site-Logger Erweiterung  
    `byte destinationServer[128] = "";` → IP des Off-Site-Loggers  
    `uint16_t destinationPort = 80;` → Port des Off-Site-Loggers  
    `uint32_t destinationDelay = 84600;` → Sendeintervall in Sekunden  
    
---    
***Für Nutzer des veralteten Setups auf Basis des Arduino Mega 2560:***  
*Nachfolgende Einstellmöglichkeiten dienen der Möglichkeit, Speicher einzusparen, so dass auch auf einen Mega 2560 geflasht werden kann.*    

-   **Deaktivieren bestimmter Funktionen:**  
  
    If you use CONFIG_IN_EEPROM and WEBCONFIG modules then you can enable I_DO_NOT_WANT_URL_CONFIG for saving flash memory (~1.2Kb). This will disable configuration through URL commands (/A, /L, /P).  
    `#define I_DO_NOT_WANT_URL_CONFIG`
  
    Enable I_WILL_USE_EXTERNAL_INTERFACE for saving flash memory (~6,8Kb). /DG command will be disabled.  
    `#define I_WILL_USE_EXTERNAL_INTERFACE`  
   
    Enabling I_DO_NOT_NEED_NATIVE_WEB_INTERFACE will eliminate native web interface and save up to 13 Kb of flash memory.  /N[E] and /Q command still work. You can use this if you are using third-party software for BSB-LAN management. Do not forget to enable other required modules (JSONCONFIG, MQTT, WEBSERVER).  
    `#define I_DO_NOT_NEED_NATIVE_WEB_INTERFACE`  
      
-   **Deaktivieren bestimmter Module:**  
       
    Wird anstelle des Due/ESP32 noch das veraltete Setup mit dem Arduino Mega 2560 genutzt (*Bitte beachte in diesem Fall auch den [Anhang D](#anhang_d.md)!*), so können hier die aufgeführten Module zentral deaktiviert und vom Kompilieren ausgeschlossen werden. Das Deaktivieren einiger Module ist aufgrund des geringeren Speichers des Mega 2560 nötig. Welche Module individuell zu nutzen und zu deaktivieren sind, muss selbst getestet werden, da das Mega-Setup in dieser Hinsicht 'veraltet' ist und eine problemlose Lauffähigkeit von BSB-LAN nicht in jedem Konfigurationsfall garantiert werden kann.  
    Die Einstellungen an dieser Stelle überschreiben die entsprechenden, zuvor aufgeführten und getätigten Einstellungen.      
    
    ```
    #if defined(__AVR__)
    //#undef CONFIG_IN_EEPROM
    //#undef WEBCONFIG
    #undef JSONCONFIG
    //#undef WEBSERVER
    #undef AVERAGES
    #undef DEBUG
    #undef IPWE
    #undef MQTT
    #undef MDNS_HOSTNAME
    #undef OFF_SITE_LOGGER
    #undef ROOM_UNIT
    #undef VERSION_CHECK
    #undef MAX_CUL
    #undef BME280
    #endif
    ```  
   
---  

     
[Weiter zu Kapitel 3](kap03.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

