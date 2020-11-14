[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 5](kap05.md)    
    
---
    

# 6. Funktionsüberprüfung und erste Nutzung des Adapters
Um zu überprüfen, ob der angeschlossene Regler korrekt erkannt wird,
sollte bei der Ersteinrichtung eine Funktionsüberprüfung vorgenommen
werden.  
Dazu bietet sich folgende Vorgehensweise an:

1.  Den Regler ausschalten und *polrichtig* mit dem Adapter via BSB
    verbinden.  
    
    ***Hinweis:***  
    *Wenn (später) der LPB genutzt werden soll, muss sowohl der Bus-Typ
    in der Datei BSB\_lan\_config.h als auch der Anschluss am Regler
    geändert werden!*

2.  Den Regler einschalten und überprüfen, ob die rote LED auf dem
    Adapter leuchtet.  
    Sollte die LED in unregelmäßigen Abständen flackern, ist dies keine
    Fehlfunktion, sondern zeigt Aktivität auf dem Bus an.

3.  Den Arduino Due nun via USB (nutze den "Programming Port" in der Boardmitte) mit dem PC und via LAN mit dem Netzwerk
    verbinden.

4.  Nun die Arduino IDE starten, den korrekten Anschluss des Arduino
    Due auswählen (COM-Port) und dann unter ‚Werkzeuge' den
    ‚Seriellen Monitor' starten.

5.  Wird der angeschlossene Regler automatisch korrekt erkannt, steht am
    Anfang der Ausgabe des seriellen Monitors bei „Device family" und
    „Device variant" jeweils ein Wert, der nicht „0" ist.  
    
    ***Beispiel:***  
    ```
    \[...\]  
    Device family: 96  
    Device variant: 100  
    \[...\]  
    ```
    
    Die folgende Abbildung zeigt exemplarisch eine solche Ausgabe des 'Seriellen 
    Monitors' der Arduino IDE direkt nach dem Start. Der Adapter ist im folgenden Beispiel als 
    "RGT2" konfiguriert und fragt zur automatischen Erkennung beim 
    Startvorgang einmalig die Parameter 6225 und 6226 des Heizungsreglers ab (in der Standardeinstellung lautet die Kennung des Adapters "LAN"). 
    Die darauf folgenden Zeilen sind bereits empfangene Telegramme. 
    Die Anzeige des kesselseitigen Steuerungsdisplays (hier: 
    Kesseltemperatur) erscheint regelmäßig als sog. Broadcast (BC) vom Heizungsregler (Kennung "HEIZ").  
    
    <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/arduino-ide_serieller-monitor.png">
        
    Nun sollte die Verwendung von BSB-LAN möglich sein.

    ***Hinweise:***  
    
    *Sollten in der Ausgabe nur kryptische Zeichenfolgen erscheinen, so ist 
    die eingestellte Baudrate zu überprüfen (unten rechts). Diese sollte auf
    115200 Baud eingestellt sein.*  
    
    *Sollte ein bisher nicht in Kap. [3](kap03.md) aufgeführter Regler zum Einsatz kommen, bitte  
    die entsprechenden Daten wie beschrieben auslesen und melden.*  
    
    
    Wird der angeschlossene Regler *nicht* automatisch korrekt erkannt,
    steht bei „Device family" und „Device variant" jeweils eine „0",
    zusätzlich stehen vor „Device family" sechs Zeilen „query failed".  
    
    ***Beispiel:***  
    ```
    \[...\]  
    query failed  
    query failed  
    query failed  
    query failed  
    query failed  
    query failed  
    Device family: 0  
    Device variant: 0  
    \[...\]
    ```

    Meist liegt der Grund hierfür dann in einem Problem des
    Hardware-Setups oder der Verkabelung, da die Parameter 
    6225 und 6226 nicht erfolgreich abgerufen werden konnten 
    ([Fehlermeldung "query failed"](kap13.md#133-fehlermeldung-query-failed)"). 
    Weitere Hinweise zur Fehlersuche finden sich im Kapitel [14](kap14.md).  

    
---
    
     
[Weiter zu Kapitel 7](kap07.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   


