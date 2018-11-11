[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 6](kap06.md)    
    
---
    

    

# 7. BSB-LAN Web - das Webinterface des Adapters #

Die Startseite des Webinterface wird angezeigt, wenn ohne weitere
Parameter auf die URL des Servers zugegriffen wird:  
`http://<IP-Adresse>`

Bei Verwendung eines Passkeys oder weiterer optionaler
Sicherheitsfunktionen muss die URL entsprechend erweitert werden, bei
Passkey-Verwendung bspw.:  
`http://<IP-Adresse>/<passkey>/`

*Bitte den Slash hinter dem Passkey nicht vergessen!*
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_home.png">
    
    
Prinzipiell sind alle Parameter in Kategorien zusammengefasst, die den
im Display dargestellten Untermenükategorien entsprechen, wenn auf den
Regler des Heizungssystems vom integrierten Bedienteil aus zugegriffen
wird.

Ein Klick auf den Menüpunkt „Heizungsfunktionen" zeigt eine vollständige
Übersicht der Kategorien, die wiederum ebenfalls anwählbar sind.
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_funktionen.png">
    
Ein Klick auf eine der gezeigten Kategorien (bspw. Heizkreis 1) startet
eine Komplettabfrage der jeweiligen Kategorie, also aller Parameter, die
in dieser Kategorie verfügbar sind.
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_kategorie-hk1.png">
    
Unter der URL  
`http://<IP-Adresse>/C`  
wird eine Übersicht der Konfiguration dargestellt. Dort sind u.a. der
Monitor-Modus, der Verbositäts-Level, die definierten Pins für optional
angeschlossene Sensoren, die zu loggenden Parameter und Parameter, von
denen 24h-Mittelwerte berechnet werden sollen, auf einen Blick
überprüfbar.

Eine schwarze Schrift bei den Schaltflächen für DS18B20- und
DHT22-Sensoren zeigt an, dass diese nicht definiert sind.

Bei dem folgenden abgebildeten Beispiel sind lediglich DS18B20-Sensoren
definiert. Es werden keinerlei 24h-Mittelwerte berechnet und keinerlei 
Parameter oder Werte auf die interne microSD-Karte geloggt.  
Darüber hinaus ist zu sehen, dass als Bus-System für den Adapteranschluss 
der BSB und der Adapter selbst als RGT2 definiert ist ("Bus-System: BSB (7, 0)").
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_konfiguration.png">
    
Der Menüpunkt „URL-Befehle" zeigt eine Auflistung und kurze Erklärung
der URL-Befehle.

Grau hinterlegte Zeilen zeigen an, dass der Befehl nicht verfügbar ist.
Im nachfolgend gezeigten Beispiel betrifft dies die nicht-installierten
DHT22-Sensoren, die fehlenden MAX!-Komponenten sowie die Befehle für die 
hier deaktivierte Loggingfunktion auf eine microSD-Karte.
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_url-befehle.png">
    
Zusätzlich zum Webinterface kann somit auf alle Funktionen mittels
Eingabe des entsprechenden Befehls direkt zugegriffen werden. Dies ist
nützlich, wenn der Adapter in Verbindung mit Heimautomationssystemen wie
bspw. FHEM genutzt wird.

Eine Übersicht und ausführlichere Beschreibung der URL-Befehle findet
sich im Kap. [8](kap08.md).

Generell werden alle Heizungsparameter anhand ihrer Zeilennummern
abgefragt. Eine nahezu vollständige Übersicht findet sich bspw. im
Systemhandbuch des Brötje ISR Plus.

Einige Zeilen sind \'virtuell\' und wurden hinzugefügt, um bspw. den
Zugang zu komplexen Einstellungen wie den Tagesprogrammen zu
erleichtern.

Eine grafische Darstellung des optional erstellbaren Logfiles auf einer 
mSD-Karte erfolgt bei Klick auf „Anzeige Logdatei".
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_log.jpg">
    
    

***Hinweis:*** 
    
*Für die grafische Anzeige der Logdatei wie im obigen Beispiel dürfen 
keine JavaScript-Blocker aktiv sein und es muss eine aktive Internetverbindung 
bestehen, da das JavaScript-Framework zur Darstellung von d3js.org geladen wird.*  

*Bitte beachte, dass der Arduino nicht multitaskingfähig ist. Eine neue
Abfrage kann erst erfolgen, nachdem die vorhergehende Abfrage komplett
beendet ist. Speziell die Abfrage mehrerer Parameter, ganzer Kategorien
oder auch des SD-Logfiles kann u.U. eine längere Zeit in Anspruch
nehmen, während dieser der Adapter nicht ‚ansprechbar' ist.*

       
    
---
    

     
[Weiter zu Kapitel 8](kap08.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
