[Zurück zur Einleitung](index2.md)    
    
---
    
# Schnellstartanleitung für den [Arduino Due](kap01.md#12-arduino-due)
***Die folgende Kurzanleitung ersetzt nicht das Lesen des ausführlichen Handbuchs!  
Bitte lies ebenso die jeweiligen detaillierteren Ausführungen in den entsprechenden Kapiteln.*** 
   
Bereite das Setup vor, indem du das LAN-Shield und den BSB-LAN-Adapter auf den Arduino Due steckst. Schließe ein LAN-Kabel an und verbinde das Arduino-Setup mit einem USB-Kabel mit deinem Computer. Nutze dabei den 'Programming Port' des Due, das ist der 'mittlere' USB-Port, der neben der Netzteilbuchse platziert ist.  
Sollte dein Rechner den Due nicht automatisch erkennen, ist der entspr. Treiber für dein Betriebssystem zu installieren.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/HW-Setup.jpg">
    
*Das komplette Setup (Arduino Due + LAN-Shield + BSB-LAN-Adapter v3) inklusive der entsprechenden Kabel.*  
  
**Führe nun die folgenden Schritte aus:**  
  
1. Downloade und installiere die aktuelle Version der [Arduino IDE](https://www.arduino.cc/en/Main/Software).   
   
2. Downloade die [aktuelle Version von BSB-LAN](https://github.com/fredlcore/bsb_lan/archive/master.zip).  

3. Entpacke die heruntergeladene Datei "BSB_LAN-master.zip" und wechsle in den Ordner.  

4. Wechsle in den Ordner "BSB-LAN-master"/"BSB_LAN" und benenne die Dateien *BSB_LAN_custom_defs.h.default* in ***BSB_LAN_custom_defs.h*** sowie  *BSB_LAN_config.h.default* in ***BSB_LAN_config.h*** um!  

5. Starte die Arduino IDE mit einem Doppelklick auf die Datei "BSB_LAN.ino" im BSB_LAN-Ordner.  

   - Überprüfe den korrekten seriellen Port, an dem der Arduino Due am Rechner angeschlossen ist, unter "Werkzeuge/Port".  

   - Stelle die Übertragungsgeschwindigkeit/Baudrate auf 115200 ein.  
   
   | Hinweis |
   |:--------|
   | Sollten bis hier Probleme auftreten (bspw., dass das Board nicht erkannt wird), lies bitte die ausführliche Beschreibung in [Kapitel 2.1.1](kap02.md#211-installation-auf-dem-due)! |  
  
6. Passe die Einstellungen in der Datei "BSB_LAN_config.h" deinen Wünschen und Gegebenheiten entsprechend an.  
   Dies gilt insbesondere für Einstellungen hinsichtlich der Nutzung von DHCP, einer ggf. abweichenden IP-Adresse sowie der optionalen Sicherheitsfunktionen.  

   Wenn alle Einstellungen angepasst wurden, starte den Flashvorgang mittels Klick auf "Sketch/Upload" bzw. "Sketch/Hochladen".  

   | Hinweis |
   |:--------|
   | Zusätzlich zur Anpassung der Datei "BSB_LAN_config.h" kann die Anpassung der Konfiguration von BSB-LAN auch später per Webinterface erfolgen. | 
   | Weitere Hinweise sowie eine Beschreibung sämtlicher Konfigurationsmöglichkeiten findest du in [Kapitel 2.2 Konfiguration](kap02.md#22-konfiguration)! | 


7. Nach Beenden des Flashvorgangs starte den [Seriellen Monitor der Arduino IDE](kap12.md#122-serieller-monitor) und beobachte die Ausgaben, die beim Start des Arduino erfolgen.  
   Dort wird u.a. auch die IP ausgegeben, die dem Setup bei Verwendung von DHCP zugeteilt wird.  
   
   Nach Beenden des Startvorgangs kannst du die Stromversorgung des Arduino unterbrechen, also das Board vom USB-Port deines Rechners entfernen. Dies ist nicht zwingend nötig, aus Sicherheitsgründen jedoch zu empfehlen.  

8. Schalte deine Heizung aus, damit der Heizungsregler stromlos ist. 

   Schließe nun den Adapter des Arduino-Setups an den Regler an.  
   Verbinde dazu die reglerseitigen Anschlüsse "CL+" und "CL-" (bei BSB-Verwendung) bzw. "DB" und "MB" (bei LPB-Verwendung) mit den gleichnamigen Anschlüssen des Adapters.  
   Achte auf die korrekte Verbindung: Die verbundenen Anschlüsse müssen *namensgleich* sein, also bspw. "CL+" an "CL+" und "CL-" an "CL-"!    

   | Hinweis |
   |:--------|
   | Eine ausführliche Anweisung diesbzgl. sowie Hinweise zum Anschluss eines Reglers mit PPS-Anschlüssen und Abbildungen diverser Regler und den entspr. zu nutzenden Anschlüssen findest du in [Kapitel 3.1](kap03.md#31-anschluss-des-adapters)! |

9. Schalte die Heizung bzw. den Heizungsregler wieder ein. 

10. Stelle die Stromversorgung des Arduino-Setups her, idealerweise mit einem spezifischen Netzteil mit Anschluss an der Hohlsteckerbuchse.  
    Solltest du (noch) kein geeignetes Netzteil zur Hand haben, kannst du das Arduino-Setup auch über die USB-Buchse mit Strom versorgen. Dies kann entweder über ein entspr. leistungsstarkes USB-Netzeteil oder über deinen USB-Port am Rechner erfolgen.  
    Letztere Variante ist insofern von Vorteil, als dass du den [Seriellen Monitor der Arduino IDE](kap12.md#122-serieller-monitor) parallel zur Kontrolle des Startverhaltens des Setups nutzen kannst.  

11. Starte einen Internetbrowser und rufe die Seite des BSB-LAN-Webinterfaces auf.  
    Diese findest du unter der IP-Adresse, die du zuvor bei Schritt 6 eingestellt hast (voreingestellt ist "192.168.178.88").  
    Solltest du DHCP verwenden, so kann die vergebene IP während der Startsequenz des Arduino mittels des [Seriellen Monitors der Arduino IDE](kap12.md#122-serieller-monitor) ausgelesen werden.  

    Wenn alles fehlerfrei und korrekt installiert ist, hast du nun Zugriff auf deinen Heizungsregler.  
    
    | Hinweis |
    |:--------|
    | Sollten wider Erwarten Fehler oder Probleme auftauchen, so lies bitte *zusätzlich zu den bereits genannten Kapiteln* auch die Kapitel [13](kap13.md), [14](kap14.md) und [15](kap15.md)! |   
  
12. Bitte führe nun die [Überprüfung auf neue Parameter (URL-Befehl /Q)](kap03.md#33-überprüfen-auf-nicht-freigegebene-reglerspezifische-command-ids) (solltest du einen Regler via PPS angeschlossen haben, kann dieser Punkt übersprungen werden) aus und teile uns die Webausgabe unter Angabe des Herstellers und der genauen Modellbezeichnung deines Wärmeerzeugers mit.  

Viel Spaß mit BSB-LAN wünschen dir Frederik und Ulf! :)  
    

---
   
     
[Weiter zur Schnellstartanleitung für ESP32-Boards](SSA_ESP32.md)      
