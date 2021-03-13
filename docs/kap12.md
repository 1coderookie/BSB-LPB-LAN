[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 11](kap11.md)    
    
---

# 12. Exkurs: Arduino IDE

Im Folgenden wird kurz auf die Verwendung der Ardunio IDE sowie die Installation der benötigten Boardbibliotheken für den Arduino Due und den ESP32 eingegangen.  
Abschließend wird kurz die Verwendung des Seriellen Monitors (SerMo) der Arduino IDE vorgestellt, mit dem man u.a. das Startverhalten des Arduino Due/ESP32 beobachten und etwaige Fehler leichter identifizieren kann.  


(Screenshots zur Veranschaulichung folgen in Kürze.)  

---

**Installation der Arduino IDE**  
  
Downloade und installiere die aktuelle Version der Arduino IDE von [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software) für dein Betriebssystem (Windows-, Mac- und Linux-Version verfügbar).  

---

**Installation der spezifischen Boardbibliotheken**  
  
***Arduino Due***  
1. Starte die Arduino IDE und öffne den "Boardverwalter" unter "Werkzeuge/Board".  
2. In dem sich nun öffnenden Dialogfenster gib oben in der Suchzeile "Arduino SAM Boards" ein, wo der Due enthalten ist.  
3. Klicke auf den Eintrag und dann auf die Schaltfläche "Installieren".  
Nun solltest du den Due in der Auflistung bei "Werkzeuge/Board" finden und auswählen können.  

***ESP32***  
1. Starte die Arduino IDE und klicke auf "Datei/Voreinstellungen" (Shortcut: Strg+Komma).  
2. Bei dem sich nun öffnenden Dialogfenster füge unten im Eingabefeld bei "Zusätzliche Boardverwalter-URLs:" folgenden Link ein: `https://dl.espressif.com/dl/package_esp32_index.json`. Sollte in dem Feld bereits eine oder mehrere URLs stehen, so kann der zusätzliche Eintrag einfach durch ein Komma getrennt zu den bestehenden Einträgen hinzugefügt werden.  
3. Klicke dann auf "OK".  
4. Als nächstes öffne den "Boardverwalter" unter "Werkzeuge/Board".  
5. In dem sich nun öffnenden Dialogfenster gib oben in der Suchzeile "ESP32" ein.  
6. Suche dann den Eintrag "esp32 by Espressif Systems".  
7. Klicke auf den Eintrag und dann auf die Schaltfläche "Installieren".  
Nun solltest du das ESP32-Board in der Auflistung bei "Werkzeuge/Board" finden und auswählen können.  

---

**Verwenden des Seriellen Monitors**  

Der Serielle Monitor (kurz: SerMo) ist ein nützliches Tool, um bspw. das Startverhalten und den Datenverkehr des Mikrocontrollers zu beobachten. So lassen sich bspw. Fehler eingrenzen und finden oder auch unbekannte Telegramme mitschneiden. Wenn du dich mit Fragen oder Problemen an uns (Frederik und mich, Ulf) wendest, so wirst du sehr wahrscheinlich die Aufforderung zum Schicken eines "SerMo-Logs" erhalten. Damit ist gemeint, dass du dein BSB-LAN-Setup per USB mit deinem Rechner verbindest, die Arduino IDE startest, dein Board, den Port etc. entspr. auswählst und dann den "Seriellen Monitor" startest. Dies kann entweder über "Werkzeuge/Serieller Monitor" (Shortcut: Strg+Umschalt+M) oder einfach durch einen Klick auf das Lupensymbol oben rechts in der Symbolleiste der Arduino IDE erfolgen.  
In dem Moment, in dem du den Seriellen Monitor startest, wird der angeschlossene Mikrocontroller (Due/ESP32) neu gestartet. Hast du alles korrekt konfiguriert, kannst du den Startvorgang und das Senden und Empfangen von Telegrammen beobachten. Sollten jedoch nur unleserliche kryptische Zeichen auftauchen, so überprüfe die Einstellung der Übertragungsrate: Dies steht ganz unten rechts und sollte auf 115200 Baud eingestellt sein.  
 
Wenn du nun bspw. via Webinterface URL-Befehle abschickst, so wirst du die entspr. Befehle bzw. Telegramme auf dem Seriellen Monitor sehen können. 

(2DO: Genauere und ausführlichere Beschreibung plus Bebilderung! -> Folgt in Kürze.)


---
         
[Weiter zu Kapitel 13](kap13.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
