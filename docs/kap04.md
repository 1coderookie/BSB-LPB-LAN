[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 3](kap03.md)    
    
---
        

# 4. Installation der Arduino IDE und Flashen des Arduino Due  
-   Downloade und installiere die aktuelle Version der Arduino IDE von
    [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)
    (Windows-, Mac- und Linux-Version verfügbar).

-   Schließe den Arduino Due (samt Ethernet-Shield und Adapter) via USB an
    deinem PC an. Achte darauf, dass du den ["Programming Port" des Due](kap12.md#121-der-arduino-due) verwendest!

-   Downloade die [aktuelle BSB-LAN-Version](https://github.com/fredlcore/bsb_lan/archive/master.zip)
    und entpacke die heruntergeladene Datei *bsb_lan-master.zip*.
  
-   Wechsle in den Ordner "bsb_lan-master"/"BSB_LAN" und benenne die Datei *BSB_LAN_config.h.default* in
    ***BSB_LAN_config.h*** um!  
    
-   Wenn du eigenen Code implementieren willst, benenne die Datei 
    *BSB_LAN_custom.h.default* in ***BSB_LAN_custom.h*** um!  

-   Öffne den BSB_LAN-Sketch mittels eines Doppelklicks auf die Datei
    *BSB_LAN.ino* im BSB_LAN-Ordner. Die dazugehörigen Dateien
    *BSB_LAN_config.h* und *BSB_LAN_defs.h* werden automatisch mit
    geladen.

-   Stelle sicher, dass du die aktuelle Ethernet-Bibliothek verwendest 
    (mindestens v2.0). Rufe dazu unter dem Menüpunkt „Sketch“ → 
    „Bibliothek einbinden“ → „Bibliotheken verwalten“ auf und überprüfe, 
    ob ein Update bzw. eine aktuellere Version der „Ethernet Bibliothek“ 
    verfügbar ist. Falls ja, führe ein Update aus bzw. installiere die Version.  
    
-   Wähle "Arduino Due (Programming Port)" unter Tools/Board bzw.
    Werkzeuge/Board.  
    Sollte das Board nicht aufgeführt sein, so muss der Atmel SAM Core hinzugefügt werden. Öffne dafür den Boardverwalter unter Werkzeuge/Board und suche nach "Arduino SAM Boards", wo der Due enthalten ist. Klicke auf den Eintrag und dann auf die Schaltfläche 'Installieren'. Danach solltest du den Due unter Werkzeuge/Boards finden.

-   Wähle den korrekten Seriellen Port unter Werkzeuge/Port aus.

-   Solltest du Windows benutzen, so ist evtl. noch eine zusätzliche Treiberinstallation nötig. Auf der Seite [https://www.arduino.cc/en/Guide/ArduinoDue](https://www.arduino.cc/en/Guide/ArduinoDue) findest du weitere Informationen.

-   ***WICHTIG:***  
*Springe nun zu [Kap. 5.2](kap05.md#52-konfiguration-durch-anpassen-der-datei-bsb_lan_configh), lies die dortigen Beschreibungen und passe die Datei BSB_LAN_config.h deinen Wünschen entsprechend an. Solltest du dir mit den einzelnen Einstellungen noch nicht sicher sein, so kannst du diese auch später noch anpassen.*  
***Entscheidend ist, falls du DHCP nicht verwenden möchtest, dass du zumindest die Netzwerkeinstellungen wunschgemäß anpasst, damit du im weiteren Verlauf Zugriff auf das Webinterface von BSB-LAN hast!***  

-   Starte den Flashvorgang und lade den Sketch mittels Klick auf "Sketch/Upload" bzw. "Sketch/Hochladen" auf den Arduino.

-   Verbinde den Arduino mittels LAN-Kabel mit deinem Router/Switch.
    Stelle dabei sicher, dass eine Stromversorgung für den Arduino via
    USB (Programming Port) oder externem Netzteil besteht!

-   Öffne die Seite `http://<IP-Adresse>/` (oder
    `http://<IP-Adresse>/<passkey>/` wenn die Passkey-Funktion (s. Beschreibung in [Kap. 5.2](kap05.md#52-konfiguration-durch-anpassen-der-datei-bsb_lan_configh)) genutzt wird - die Startseite des Webinterface der BSB-LAN-Software sollte erscheinen.  
    Sollte sie nicht erscheinen, drücke einmal kurz auf den Reset-Knopf
    des Arduino und rufe die Startseite erneut auf.  
    Unter `http://<IP-Adresse>/C` (bzw. Menüpunkt „Konfiguration" im
    Webinterface) kannst du deine Konfiguration überprüfen.  
    

***Hinweis: Wenn der Adapter an den Bus des Heizungsreglers angeschlossen ist, so kann er angeschlossen bleiben, wenn der Due erneut geflasht werden soll. Es besteht keine Notwendigkeit den Adapter vom Regler abzuklemmen, wenn man BSB-LAN updaten möchte.***    
       
    
---
    

     
[Weiter zu Kapitel 5](kap05.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    



