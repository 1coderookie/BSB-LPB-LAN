[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 3](kap03.md)    
    
---
        

# 4. Installation der Arduino IDE und Konfiguration des Adapters
-   Downloade und installiere die aktuelle Version der Arduino IDE von
    [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)
    (Windows-, Mac- und Linux-Version verfügbar).

-   Schließe den Arduino (samt Ethernet-Shield und Adapter) via USB an
    deinem PC an.

-   Downloade die [aktuelle BSB-LAN-Version](https://github.com/fredlcore/bsb_lan/archive/master.zip)
    und entpacke die heruntergeladene Datei *bsb\_lan-master.zip*.

-   Benenne den nun erstellten Ordner *bsb\_lan-master* in
    ***BSB\_lan*** um!

-   Benenne die Datei *BSB\_lan\_config.h.default* in
    ***BSB\_lan\_config.h*** um!  
    
-   Wenn du eigenen Code implementieren willst, benenne die Datei 
    *BSB_lan_custom.h.default* in ***BSB_lan_custom.h*** um!  

-   Öffne den BSB\_lan-Sketch mittels eines Doppelklicks auf die Datei
    *BSB\_lan.ino* im BSB\_lan-Ordner. Die dazugehörigen Dateien
    *BSB\_lan\_config.h* und *BSB\_land\_defs.h* werden automatisch mit
    geladen.

-   Konfiguriere die IP-Adresse in *BSB\_lan\_config.h* deinem Netzwerk
    entsprechend.  
    Die voreingestellte IP 192.168.178.88 funktioniert mit den meisten
    Standard-Routern wie bspw. Fritz!Box, aber prüfe, ob die IP bereits
    anderweitig vergeben ist, damit es nicht zu einer Adresskollision
    kommt.

-   ***Wichtig:***  
    *Passe nun die weiteren Einstellungen in der Datei
    BSB\_lan\_config.h deinen Wünschen und Hardwaregegebenheiten
    (Pinbelegungen, angeschlossene DS18B20- und/oder DHT22-Sensoren, zu
    loggende Parameter etc.) entsprechend an!*
    
-   Stelle sicher, dass du die aktuelle Ethernet-Bibliothek verwendest 
    (mindestens v2.0). Rufe dazu unter dem Menüpunkt „Sketch“ → 
    „Bibliothek einbinden“ → „Bibliotheken verwalten“ auf und überprüfe, 
    ob ein Update bzw. eine aktuellere Version der „Ethernet Bibliothek“ 
    verfügbar ist. Falls ja, führe ein Update aus bzw. installiere die Version.  
    
-   Wähle \"Arduino/Genuino Mega or Mega 2560\" unter Tools/Board bzw.
    Werkzeuge/Board.

-   Wähle \"ATmega 2560\" unter Tools/Processor bzw.
    Werkzeuge/Prozessor.

-   Wähle \"AVRISP mkII\" unter Tools/Programmer bzw.
    Werkzeuge/Programmer.

-   Passe die Datei *BSB\_lan\_config.h* deinen Wünschen entsprechend an
    (s. Kap. [5](kap05.md)) und lade den Sketch mittels Sketch/Upload
    bzw. Sketch/Hochladen auf den Arduino.

-   Verbinde den Arduino mittels LAN-Kabel mit deinem Router/Switch.
    Stelle dabei sicher, dass eine Stromversorgung für den Arduino via
    USB oder externem Netzteil besteht!

-   Öffne die Seite `http://<IP-Adresse>/` (oder
    `http://<IP-Adresse>/<passkey>/` wenn die Passkey-Funktion (s.u.)
    genutzt wird) um zu sehen, ob alles korrekt kompiliert und
    hochgeladen wurde.  
    Die Startseite des Webinterface des Adapters sollte erscheinen.  
    Sollte sie nicht erscheinen, drücke einmal kurz auf den Reset-Knopf
    des Arduino und rufe die Startseite erneut auf.  
    Unter `http://<IP-Adresse>/C` (bzw. Menüpunkt „Konfiguration" im
    Webinterface) kannst du deine Konfiguration überprüfen.  
    
    *Wenn alle einstellungsrelevanten Parameter in der Datei
    BSB\_lan\_config.h angepasst sind (s. Kap. [5](kap05.md)) und der
    Zugriff auf das Webinterface möglich ist, fahre mit der
    Funktionsüberprüfung des Adapters fort.*

       
    
---
    

     
[Weiter zu Kapitel 5](kap05.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    



