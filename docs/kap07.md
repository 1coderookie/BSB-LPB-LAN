[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 6](kap06.md)    
    
---

# 7. BSB-LAN Web - das Webinterface des Adapters
Die Startseite des Webinterface wird angezeigt, wenn ohne weitere
Parameter auf die URL des Servers zugegriffen wird:  
`http://<IP-Adresse>`

Bei Verwendung eines Passkeys oder weiterer optionaler
Sicherheitsfunktionen muss die URL entsprechend erweitert werden, bei
Passkey-Verwendung bspw.:  
`http://<IP-Adresse>/<passkey>/`

*Bitte den Slash hinter dem Passkey nicht vergessen!*
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_startseite.png">
    
Im oberen Bereich des Webinterface sind einige Buttons angeordnet, die einen einfachen und schnellen Zugriff auf bestimmte Funktionen bieten:  
- Heizungsfunktionen  
- Sensoren  
- Ausgabe Logdatei  
- Prüfe auf neue Parameter  
- Einstellungen  
- URL-Befehle  
- Handbuch  
- FAQ  
   
Die zwei Buttons "Sensoren" und "Ausgabe Logdatei" sind in schwarzer Schrift dargestellt, wenn die jeweilige Funktion nicht aktiviert ist (s. Datei *BSB_lan_config.h*). Bei dem gezeigten Beispiel ist dies der Button "Ausgabe Logdatei", da keinerlei zu loggende Parameter definiert wurden.  
  
Unter dem Headerbereich wird die BSB-LAN-Version angezeigt, die derzeit verwendet wird.  
BSB-LAN prüft standardmäßig, ob eine neuere Version verfügbar ist und zeigt dieses im unteren Bereich der Seite an. Im Falle eines verfügbaren Updates führt der Link zum ZIP-File des Repos, so dass man direkt vom Webinterface heraus die Datei speichern kann.  
*Hinweis: Sollte diese Funktion nicht gewünscht sein, da BSB-LAN nicht eigenständig eine Verbindung ins Internet herstellen soll, so kann dies durch Auskommentieren des entspr. Definements (`//#define VERSION_CHECK 1`) in der Datei BSB_lan_config.h deaktiviert werden.*   

---  
   
**Heizungsfunktionen (URL-Befehl: /K):**  
Prinzipiell sind alle Parameter in Kategorien zusammengefasst, die den
im Display der dargestellten Untermenükategorien entsprechen, wenn auf den Regler des Heizungssystems vom integrierten Bedienteil aus zugegriffen wird.

Ein Klick auf den Menüpunkt „Heizungsfunktionen" zeigt eine vollständige
Übersicht der Kategorien, die wiederum ebenfalls anwählbar sind.
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_kategorien.png">
    
Ein Klick auf eine der gezeigten Kategorien (bspw. Heizkreis 1) startet
eine Komplettabfrage der jeweiligen Kategorie, also aller Parameter, die
in dieser Kategorie verfügbar sind.
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_kategorie-HK1.png">
    
---  
   
**Sensoren (URL-Befehl: /T):**  
Wenn optionale DS18B20-/DHT22-Sensoren angeschlossen und korrekt konfiguriert sind, dann werden diese hier angezeigt.  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_sensoren.png">

DS18B20-Sensoren sind mit "1w_temp[x]" benannt, bei jedem Sensor wird zusätzlich die spezifische Sensor ID mit angezeigt.  
DHT22-Sensoren zeigen die Temperatur, die relative und die absolute Feuchtigkeit an.  
   
---  
   
**Ausgabe Logdatei (URL-Befehle /D und /DG):**  

Eine grafische Darstellung des optional erstellbaren Logfiles auf einer 
microSD-Karte erfolgt bei Klick auf „Anzeige Logdatei".
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_log.jpg">  
    
***Hinweis:*** 
    
*Für die grafische Anzeige der Logdatei wie im obigen Beispiel dürfen 
keine JavaScript-Blocker aktiv sein und es muss eine aktive Internetverbindung 
bestehen, da das JavaScript-Framework zur Darstellung von d3js.org geladen wird.*  

*Bitte beachte, dass der Arduino nicht multitaskingfähig ist. Eine neue
Abfrage kann erst erfolgen, nachdem die vorhergehende Abfrage komplett
beendet ist. Speziell die Abfrage mehrerer Parameter, ganzer Kategorien
oder auch des Logfiles der microSD-Karte kann u.U. eine längere Zeit in Anspruch
nehmen, während dieser der Adapter nicht ‚ansprechbar' ist.*

---  
   
**Prüfe auf neue Parameter (URL-Befehl /Q):**  
Mit dieser Funktion werden sämtliche bekannten Parameter abgefragt und überprüft, ob für den angeschlossenen Regler noch etwaige Parameter freizugeben sind.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_Q_de.png">  
   
---  
   
**Einstellungen (URL-Befehl: /C):**  
Hier wird eine Übersicht der Konfiguration dargestellt. Dort sind u.a. der Bustyp, möglicher Schreib- oder Lesezugriff, die definierten Pins für optional
angeschlossene Sensoren, die zu loggenden Parameter etc. auf einen Blick
überprüfbar.
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_konfig.png">  
   
---  
   
**URL-Befehle:**  
Dieser Button ist mit dem Handbuch verknüpft und führt zum Kapitel "Cheatsheet URL-Befehle", in dem die möglichen Befehle übersichtlich und kurz aufgeführt sind.  
   
   
   
   
Eine Übersicht und ausführlichere Beschreibung der URL-Befehle findet
sich im Kap. [8](kap08.md).
   
---  
   
**Handbuch:**  
Dieser Button ist mit dem Handbuch verlinkt.  
   
---  
   
**FAQ:**  
Dieser Button ist mit dem Kapitel "FAQ" des Handbuchs verlinkt.
    
---
    

     
[Weiter zu Kapitel 8](kap08.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

