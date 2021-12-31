[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 11](kap11.md)    
    
---

# 12. Exkurs: Arduino IDE

Im Folgenden wird kurz auf die Verwendung der Arduino IDE sowie die Installation der benötigten Boardbibliotheken für den Arduino Due und den ESP32 eingegangen.  
Abschließend wird kurz die Verwendung des Seriellen Monitors (SerMo) der Arduino IDE vorgestellt, mit dem man u.a. das Startverhalten des Arduino Due/ESP32 beobachten und etwaige Fehler leichter identifizieren kann.  

---

## 12.1 Installation

**Installation der Arduino IDE**  
  
Downloade und installiere die aktuelle Version der Arduino IDE von [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software) für dein Betriebssystem (Windows-, Mac- und Linux-Version verfügbar).  

---

### 12.1.1 Arduino Due  
  
**Installation der spezifischen Boardbibliotheken**  
  
1. Starte die Arduino IDE und öffne den "Boardverwalter" unter "Werkzeuge/Board".  
2. In dem sich nun öffnenden Dialogfenster gib oben in der Suchzeile "Arduino SAM Boards" ein, wo der Due enthalten ist.  
3. Klicke auf den Eintrag "Arduino SAM Boards (32-bits ARM Cortex-M3) by Arduino" und dann auf die Schaltfläche "Installieren".  

   <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/boardverwalter_due-lib.png">  

   *Das korrekt installierte SAM-Framework (ARM Cortex-M3) für den Arduino Due im Boardverwalter.*  

Nun solltest du den Due in der Auflistung bei "Werkzeuge/Board" finden und auswählen können.
  
---  
  
### 12.2.2 ESP32  
  
**Installation der spezifischen Boardbibliotheken**    
  
1. Starte die Arduino IDE und klicke auf "Datei/Voreinstellungen" (Shortcut: Strg+Komma).  
2. Bei dem sich nun öffnenden Dialogfenster füge unten im Eingabefeld bei "Zusätzliche Boardverwalter-URLs:" folgenden Link ein: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`. Sollte in dem Feld bereits eine oder mehrere URLs stehen, so kann der zusätzliche Eintrag einfach durch ein Komma getrennt zu den bestehenden Einträgen hinzugefügt werden.  
3. Klicke dann auf "OK".  
   
   <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/boardverwalter_URL_202.png">  

   *Das Dialogfenster "Voreinstellungen" mit dem hinzugefügten Link in der Zeile "Zusätzliche Boardverwalter-URLs".*  

4. Als nächstes öffne den "Boardverwalter" unter "Werkzeuge/Board".  
5. In dem sich nun öffnenden Dialogfenster gib oben in der Suchzeile "ESP32" ein.  
6. Suche dann den Eintrag "esp32 by Espressif Systems".  
7. Klicke auf den Eintrag, *wähle Version 2.0.2 aus* (oder höher, falls verfügbar) und klicke dann auf die Schaltfläche "Installieren". **Sollte eine Version kleiner als 2.0.2 installiert sein, führe bitte ein Update auf 2.0.2 (oder höher) aus.**  

   <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/boardverwalter_esp32-lib_202.png">  

   *Das korrekt installierte ESP32-Framework im Boardverwalter.*  

Nun solltest du das ESP32-Board in der Auflistung bei "Werkzeuge/Board" finden und auswählen können.  



---

## 12.2 Serieller Monitor

**Verwenden des Seriellen Monitors**  

Der Serielle Monitor (kurz: SerMo) ist ein nützliches Tool, um bspw. das Startverhalten und den Datenverkehr des Mikrocontrollers zu beobachten. So lassen sich bspw. Fehler eingrenzen und finden oder auch unbekannte Telegramme mitschneiden.  

Zum Verwenden des SerMo gehe bitte wie folgt vor:  
- Verbinde dein BSB-LAN-Setup per USB mit deinem Rechner verbindest.  
- Starte die Arduino IDE per Doppelklick auf die Datei *BSB_LAN.ino*.  
- Wähle nun deinen Boardtyp, den Port etc. entsprechend aus. 
- Starte nun den "Seriellen Monitor". Dies kann entweder über "Werkzeuge/Serieller Monitor" (Shortcut: Strg+Umschalt+M) oder einfach durch einen Klick auf das Lupensymbol oben rechts in der Symbolleiste der Arduino IDE erfolgen.  

In dem Moment, in dem du den Seriellen Monitor startest, wird der angeschlossene Mikrocontroller (Due/ESP32) neu gestartet.  

Hast du alles korrekt konfiguriert, kannst du den Startvorgang und das Senden und Empfangen von Telegrammen beobachten (eine exemplarische Ausgabe findest du am Ende dieses Kapitels).  
Sollten jedoch nur unleserliche kryptische Zeichen auftauchen, so überprüfe die Einstellung der Übertragungsrate: Diese steht ganz unten rechts und sollte auf 115200 Baud eingestellt sein.  

Es bietet sich außerdem an, einen Haken bei "Zeitstempel" zu setzen und im Feld links von der Übertragungsrate "Sowohl NL als auch CR" einzustellen.  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/sermo_untere-zeile.png">  

*Die untere Zeile des SerMo mit den entspr. Einstellungen.*  

Wenn du nun bspw. via Webinterface URL-Befehle abschickst, so wirst du die entspr. Befehle bzw. Telegramme in der Ausgabe des SerMo sehen können. Regelmäßig eintreffende INF-Telegramme sind Broadcasts, die vom Heizungsregler bzw. von der angeschlossenen Bedieneinheit und ggf. auch von einem zusätzlichen Raumgerät geschickt weren. Von der Bedieneinheit wird etwa alle zehn Sekunden die Kesseltemperatur gesendet, von einem Raumgerät i.d.R. die Raumtemperatur.  

Wenn du nun bspw. an der Bedieneinheit einen bestimmten Parameter aufrufst, dann wird dieser samt zugehörigem Wert nicht nur im Display der Bedieneinheit angezeigt, sondern auch im SerMo. Auf diese Weise können bspw. auch unbekannte, neue Parameter eines Heizungsreglers und deren zugehörige Telegramme dekodiert werden (siehe hierzu [Kap. 09](kap09.md)). 

*Hinweis:*  
Wenn du dich mit Fragen oder Problemen an uns (Frederik und mich, Ulf) wendest, so wirst du sehr wahrscheinlich die Aufforderung zum Schicken eines "SerMo-Logs" erhalten. Damit ist gemeint, dass du einen Mitschnitt der Ausgabe des SerMo erstellen sollst.  
Dazu entfernst du den Haken unten links bei "Autoscroll" im Fenster des SerMo (damit sich die Ausgabe nicht regelmäßig verschiebt) und markierst dann mit der Maus die gewünschten Zeilen. Mittels copy&paste kannst du die Ausgabe dann in einen Texteditor einfügen und die Datei als txt-file speichern (oder bspw. im Forum in Codetags eingefügt posten).  

Nachfolgend ein exemplarischer Mitschnitt einer SerMo-Ausgabe eines erfolgreichen Starts eines BSB-LAN-Setups mit einem Arduino Due und einem angeschlossenem RVS43-Regler samt INF-Meldungen der angeschlossenen Bedieneinheit, die die Kesseltemperatur ca. alle zehn Sekunden als Broadcast sendet:  
```
12:25:46.361 -> READY
12:25:46.388 -> Reading EEPROM
12:25:47.084 -> Reading done.
12:25:47.084 -> EEPROM schema v.5 Program schema v.5
12:25:47.084 -> Address EEPROM option 0: 0
12:25:47.084 -> Address EEPROM option 1: 1
12:25:47.084 -> Address EEPROM option 2: 2
12:25:47.084 -> Address EEPROM option 3: 6
12:25:47.084 -> Address EEPROM option 4: 226
12:25:47.084 -> Address EEPROM option 5: 306
12:25:47.084 -> Address EEPROM option 6: 490
12:25:47.118 -> Address EEPROM option 7: 491
12:25:47.118 -> Address EEPROM option 8: 492
12:25:47.118 -> Address EEPROM option 9: 493
12:25:47.118 -> Address EEPROM option 10: 494
12:25:47.118 -> Address EEPROM option 11: 495
12:25:47.118 -> Address EEPROM option 12: 499
12:25:47.118 -> Address EEPROM option 13: 500
12:25:47.118 -> Address EEPROM option 14: 660
12:25:47.118 -> Address EEPROM option 15: 661
12:25:47.118 -> Address EEPROM option 16: 665
12:25:47.118 -> Address EEPROM option 17: 825
12:25:47.118 -> Address EEPROM option 18: 831
12:25:47.118 -> Address EEPROM option 19: 832
12:25:47.118 -> Address EEPROM option 20: 836
12:25:47.151 -> Address EEPROM option 21: 840
12:25:47.151 -> Address EEPROM option 22: 844
12:25:47.151 -> Address EEPROM option 23: 848
12:25:47.151 -> Address EEPROM option 24: 850
12:25:47.151 -> Address EEPROM option 25: 854
12:25:47.151 -> Address EEPROM option 26: 858
12:25:47.151 -> Address EEPROM option 27: 922
12:25:47.151 -> Address EEPROM option 28: 986
12:25:47.151 -> Address EEPROM option 29: 987
12:25:47.151 -> Address EEPROM option 30: 988
12:25:47.151 -> Address EEPROM option 31: 998
12:25:47.151 -> Address EEPROM option 32: 999
12:25:47.239 -> Address EEPROM option 33: 1159
12:25:47.239 -> Address EEPROM option 34: 1160
12:25:47.239 -> Address EEPROM option 35: 1164
12:25:47.239 -> Address EEPROM option 36: 1165
12:25:47.239 -> Address EEPROM option 37: 1166
12:25:47.239 -> Address EEPROM option 38: 1167
12:25:47.239 -> Address EEPROM option 39: 1171
12:25:47.239 -> Address EEPROM option 40: 1203
12:25:47.239 -> Address EEPROM option 41: 1235
12:25:47.239 -> Address EEPROM option 42: 1267
12:25:47.239 -> Address EEPROM option 43: 1299
12:25:47.239 -> Address EEPROM option 44: 1301
12:25:47.239 -> Address EEPROM option 45: 1302
12:25:47.239 -> Address EEPROM option 46: 1303
12:25:47.239 -> Address EEPROM option 47: 1304
12:25:47.239 -> Address EEPROM option 48: 1336
12:25:47.239 -> Address EEPROM option 49: 1400
12:25:47.239 -> Address EEPROM option 50: 1420
12:25:47.239 -> Address EEPROM option 51: 1440
12:25:47.239 -> Address EEPROM option 52: 1460
12:25:47.239 -> Address EEPROM option 53: 1461
12:25:47.239 -> Address EEPROM option 54: 1462
12:25:47.239 -> Address EEPROM option 55: 1463
12:25:47.239 -> Size of cmdtbl1: 29568
12:25:47.239 -> Size of cmdtbl2: 38616
12:25:47.239 -> Size of cmdtbl3: 26496
12:25:47.239 -> free RAM: 81703
12:25:47.239 -> Init One Wire bus...
12:25:47.239 -> numSensors: 0
12:25:47.239 -> PPS settings:
12:25:47.239 -> Starting SD..failed
12:25:52.197 -> 192.168.178.37
12:25:52.197 -> 255.255.255.0
12:25:52.197 -> 192.168.178.1
12:25:52.197 -> Waiting 3 seconds to give Ethernet shield time to get ready...
12:25:52.197 -> Calculating free space on SD...0 MB free
12:25:55.387 -> Start network services
12:25:55.751 -> LAN->HEIZ QUR 6225 Konfiguration - Gerätefamilie: 
12:25:55.751 -> DC C2 00 0B 06 3D 05 00 02 52 88 
12:25:55.751 -> HEIZ->LAN ANS 6225 Konfiguration - Gerätefamilie: 96
12:25:55.784 -> DC 80 42 0E 07 05 3D 00 02 00 00 60 5E 3E 
12:25:55.784 -> #6225: 96
12:25:55.950 -> LAN->HEIZ QUR 6226 Konfiguration - Gerätevariante: 
12:25:55.950 -> DC C2 00 0B 06 3D 05 00 03 42 A9 
12:25:55.983 -> HEIZ->LAN ANS 6226 Konfiguration - Gerätevariante: 100
12:25:55.983 -> DC 80 42 0E 07 05 3D 00 03 00 00 64 68 0E 
12:25:55.983 -> #6226: 100
12:25:55.983 -> Device family: 96
12:25:55.983 -> Device variant: 100
12:25:55.983 -> 
12:25:55.983 -> Setup complete
12:26:00.698 -> DSP1->HEIZ QUR 8310 Diagnose Erzeuger - Kesseltemperatur: 
12:26:00.698 -> DC 8A 00 0B 06 3D 0D 05 19 4F 8C 
12:26:00.764 -> HEIZ->DSP1 ANS 8310 Diagnose Erzeuger - Kesseltemperatur: 41.0 &deg;C
12:26:00.797 -> DC 80 0A 0E 07 0D 3D 05 19 00 0A 41 08 A5 
12:26:10.889 -> DSP1->HEIZ QUR 8310 Diagnose Erzeuger - Kesseltemperatur: 
12:26:10.889 -> DC 8A 00 0B 06 3D 0D 05 19 4F 8C 
12:26:10.989 -> HEIZ->DSP1 ANS 8310 Diagnose Erzeuger - Kesseltemperatur: 41.0 &deg;C
12:26:10.989 -> DC 80 0A 0E 07 0D 3D 05 19 00 0A 41 08 A5 
12:26:21.116 -> DSP1->HEIZ QUR 8310 Diagnose Erzeuger - Kesseltemperatur: 
12:26:21.116 -> DC 8A 00 0B 06 3D 0D 05 19 4F 8C 
12:26:21.182 -> HEIZ->DSP1 ANS 8310 Diagnose Erzeuger - Kesseltemperatur: 41.0 &deg;C
12:26:21.215 -> DC 80 0A 0E 07 0D 3D 05 19 00 0A 41 08 A5
```

---
         
[Weiter zu Kapitel 13](kap13.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
