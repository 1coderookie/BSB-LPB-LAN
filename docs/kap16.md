[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 15](kap15.md)    
    
---
    
# 16. Schnellinstallationsanleitung
***Die folgende Kurzanleitung ersetzt nicht das Lesen des ausführlichen Handbuchs!  
Bitte lies ebenso die jeweiligen detaillierteren Ausführungen in den entsprechenden Kapiteln.*** 
   
1. Downloade und installiere die aktuelle Version der [ArduinoIDE](https://www.arduino.cc/en/Main/Software)   
2. Stecke das LAN-Shield und den Adapter auf den Arduino Mega 2560 und verbinde das Arduino-Setup mit einem USB-Kabel mit deinem Computer.  
3. Downloade die aktuelle Version von [BSB-LAN](https://github.com/fredlcore/bsb_lan)  
4. Entpacke die heruntergeladene Datei "BSB-lan-master.zip" und benenne den Ordner in "BSB_lan" um.  
5. Bennene die Datei "BSB_lan_config.h.default" in "BSB_lan_config.h" um.  
6. Starte die ArduinoIDE mit einem Doppelklick auf die Datei "BSB_lan.ino" im BSB_lan-Ordner. Die ArduinoIDE sollte den angeschlossenen Arduino Mega 2560 automatisch samt verwendetem COM-Port erkennen.  
*Für die Schritte 1-6 beachte die ausführlichere Beschreibung in [Kapitel 4](kap04.md)!*  
7. Passe die Einstellungen in der Datei "BSB_lan_config.h" deinen Wünschen und Gegebenheiten entsprechend an.  
*Beachte hierfür das [Kapitel 5](kap05.md)!*  
Wenn alle Einstellungen angepasst wurden, flashe den Arduino mit der BSB-LAN-Software.  
8. Entferne nach Beenden des Flashvorgangs das USB-Kabel, um den Arduino stromlos zu machen. Schließe das LAN-Kabel an und halte die Stromversorgung für den Arduino bereit.  
9. Schalte deine Heizung aus, damit der Heizungsregler stromlos ist. Schließe nun den Adapter des Arduino-Setups an den Regler an. Verbinde dazu die reglerseitigen Anschlüsse "CL+" und "CL-" (bei BSB-Verwendung) bzw. "DB" und "MB" (bei LPB-Verwendung) mit den gleichnamigen Anschlüssen des Adapters. Achte auf die korrekte Verbindung: Die verbundenen Anschlüsse müssen *namensgleich* sein, also bspw. "CL+" an "CL+" und "CL-" an "CL-"!   
*Beachte hierzu auch die ausführliche Beschreibung in [Kapitel 2.3](kap02.md#23-anschluss-des-adapters)!*
10. Schalte die Heizung bzw. den Heizungsregler wieder ein. 
11. Stelle die Stromversorgung des Arduino-Setups her, idealerweise mit einem spezifischen Netzteil mit Anschluss an der Hohlsteckerbuchse. Solltest du (noch) kein geeignetes Netzteil zur Hand haben, kannst du das Arduino-Setup auch über die USB-Buchse mit Strom versorgen.  
12. Starte einen Internetbrowser und rufe die Seite des BSB-LAN-Webinterfaces auf. Diese findest du unter der IP-Adresse, die du zuvor bei Schritt 6 eingestellt hast (voreingestellt ist "192.168.178.88").  
Wenn alles fehlerfrei und korrekt installiert ist, hast du nun Zugriff auf deinen Heizungsregler.  

Viel Spaß mit BSB-LAN wünschen dir Frederik und Ulf! :)  
    

<!---    
# 16. Offene Punkte
-   Mehr Befehle (Command IDs) hinzufügen.  
    Nur die bekannten Befehle aus der genannten FHEM-Forendiskussion und
    den getesteten Heizungssystemen sind Bestandteil des Programms.
    Jeder Nutzer eines anderen Heizungssystems kann fehlende Parameter
    dekodieren und zur Weiterentwicklung der Software beitragen (s. Kap. [15.7](kap15.md#157-kann-ich-behilflich-sein-um-bisher-nicht-unterstützte-parameter-hinzuzufügen)).  
    Unser Ziel ist es, ein generell lauffähiges System zu entwickeln,
    das herstellerübergreifend mit allen Heizungssystemen verwendet
    werden kann, die einen BSB/LPB aufweisen.  
    Jede Hilfe und jede Rückmeldung ist willkommen!
    ***Aufruf:***  
    *Aktuell sind speziell bei dem Regler des Typs RVS43.325 etliche
    Parameter noch nicht dekodiert und werden somit von BSB-LAN auch
    noch nicht unterstützt. Da es anscheinend der aktuellste
    RVS-Reglertyp ist, gibt es dort etliche neue Parameter und
    erweiterte Funktionsoptionen.  
    Jeder Benutzer eines solchen Reglertyps (bisher bekannte
    Heizungsmodelle: Brötje BOB und z.T. umgerüstete WOBs) kann hier
    also aktiv dazu beitragen, BSB-LAN weiter zu vervollständigen!*
-   Testen und Vervollständigen der Funktionalität.  
    Mit der gegenwärtigen Implementierung können bereits viele Werte gesetzt werden.  
    Jedoch sind noch immer Tests nötig und einige Parameter müssen hinzugefügt werden.
-   Dekodieren der DE-Telegramme.  
    Möglicherweise beinhalten sie Statusinformationen, die ohne Abfragen genutzt werden können.
-   Unterstützung für heizungsseitige Fehlermeldungen hinzufügen.
-   Weitere Beispiele für die Einbindung in verschiedene SmartHome-Systeme erstellen.  
--->
---
    

     
     
[Weiter zu Kapitel 17](kap17.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
