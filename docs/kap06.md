[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 5](kap05.md)  
    

# 6. Funktionsüberprüfung und erste Nutzung des Adapters #

Um zu überprüfen, ob der angeschlossene Regler korrekt erkannt wird,
sollte bei der Ersteinrichtung eine Funktionsüberprüfung vorgenommen
werden.  
Dazu bietet sich folgende Vorgehensweise an:

1.  Den Regler ausschalten und *polrichtig* mit dem Adapter via BSB
    verbinden.  
    
    ***Hinweis:***  
    *Wenn (später) der LPB genutzt werden soll, muss sowohl der Bus-Typ
    in der Datei *BSB\_lan\_config.h* als auch der Anschluss am Regler
    geändert werden!*

2.  Den Regler einschalten und überprüfen, ob die rote LED auf dem
    Adapter leuchtet.  
    Sollte die LED in unregelmäßigen Abständen flackern, ist dies keine
    Fehlfunktion, sondern zeigt Aktivität auf dem Bus an.

3.  Den Adapter nun via USB mit dem PC und via LAN mit dem Netzwerk
    verbinden.

4.  Nun die Arduino IDE starten, den korrekten Anschluss des Arduino
    Mega 2560 auswählen (COM-Port) und dann unter ‚Werkzeuge' den
    ‚Seriellen Monitor' starten.

5.  a\) Wird der angeschlossene Regler automatisch korrekt erkannt, steht am
    Anfang der Ausgabe des seriellen Monitors bei „Device family" und
    „Device variant" jeweils ein Wert, der nicht „0" ist.  
    ***Beispiel:***  
    ```
    \[...\]  
    Device family: 96  
    Device variant: 100  
    \[...\]  
    ```

    Nun sollte die Verwendung von BSB-LAN möglich sein.

    ***Hinweis:***  
    *Sollte ein bisher nicht in Kap. [3](kap03.md) aufgeführter Regler zum Einsatz kommen, bitte  
    die entsprechenden Daten wie beschrieben auslesen und melden.*

    b\) Wird der angeschlossene Regler nicht automatisch korrekt erkannt,
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
    Hardware-Setups oder der Verkabelung. Weitere Hinweise zur
    Fehlersuche finden sich im Kapitel [14](kap14.md).

     
     
[Weiter zu Kapitel 7](kap07.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
