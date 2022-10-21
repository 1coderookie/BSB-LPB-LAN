[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 3](kap03.md)    
    
---

# 4. BSB-LAN: Das Webinterface
Die Startseite des Webinterface wird angezeigt, wenn ohne weitere
Parameter auf die URL des Servers zugegriffen wird:  
`http://<IP-Adresse>`

Bei Verwendung eines Passkeys oder weiterer optionaler
Sicherheitsfunktionen muss die URL entsprechend erweitert werden, bei
Passkey-Verwendung bspw.:  
`http://<IP-Adresse>/<passkey>/`

*Bitte den Slash hinter dem Passkey nicht vergessen!*
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_startseite_neu.png">
    
Im oberen Bereich des Webinterface sind einige Buttons angeordnet, die einen einfachen und schnellen Zugriff auf bestimmte Funktionen bieten:  
- Heizungsfunktionen  
- Sensoren  
- Ausgabe Logdatei  
- Reglerspezifische Parameterliste  
- Einstellungen  
- URL-Befehle  
- Handbuch  
- FAQ  
   
Der Button "Ausgabe Logdatei" wird in schwarzer Schrift dargestellt, wenn die Loggingfunktion nicht aktiviert ist (wie im obigen Screenshot zu sehen). Ist die Logging-Funktion aktiviert, so heißt die Bezeichnung des Buttons "Zeichne Logdatei".
  
Unter dem Headerbereich wird die BSB-LAN-Version angezeigt, die derzeit verwendet wird.  
BSB-LAN kann prüfen, ob eine neuere Version verfügbar ist und zeigt dieses im unteren Bereich der Seite an. Im Falle eines verfügbaren Updates führt der Link zum ZIP-File des Repos, so dass man direkt vom Webinterface heraus die Datei speichern kann:  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/neue_version.png">  

| Hinweis |
|:--------|
| Diese Funktion muss aktiviert werden, siehe dazu bitte [Kap. 2.2](kap02.md#22-konfiguration). |  

---  
   
**Heizungsfunktionen (URL-Befehl: /K):**  
Prinzipiell sind alle Parameter in Kategorien zusammengefasst, die den im Display der dargestellten Untermenükategorien entsprechen, wenn auf den Regler des Heizungssystems vom integrierten Bedienteil aus zugegriffen wird.

Ein Klick auf den Menüpunkt „Heizungsfunktionen" zeigt eine vollständige Übersicht der Kategorien, die wiederum ebenfalls anwählbar sind:
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_kategorien.png">
    
Ein Klick auf eine der gezeigten Kategorien (bspw. Heizkreis 1) startet eine Komplettabfrage der jeweiligen Kategorie, also aller Parameter, die
in dieser Kategorie verfügbar sind. Nicht verfügbare Parameter (also Parameter, die vom spezifischen Reglermodell nicht unterstützt werden), werden in grauer Schrift mit dem Hinweis "(parameter not supported)" angezeigt:  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_kategorie-HK1.png">
    
| Hinweis |
|:--------|
| Man kann die nicht verfügbaren Parameter ausblenden lassen, bei einer Kategorie- oder Komplettabfrage werden sie dennoch mit abgefragt. Siehe hierzu bitte [Kap. 2.2](kap02.md#22-konfiguration). |    
    
---  
   
**Sensoren:**  
Wenn [optionale Sensoren](kap07.md#71-verwendung-optionaler-sensoren-dht22-ds18b20-bme280) angeschlossen und korrekt konfiguriert sind, dann werden diese hier angezeigt.  

<!-- <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_sensoren.png"> -->

---  
   
**Ausgabe/Zeichne Logdatei (URL-Befehle /D und /DG):**  

Ist die Funktion des [Loggens auf microSD-Karte](kap06.md#61-loggen-von-daten) aktiviert, erfolgt eine grafische Darstellung des Logfiles (Datei *datalog.txt*) bei Klick auf den Button "Zeichne Logdatei".  
Ist die Funktion deaktiviert, so wird der deaktivierte Button in schwarzer Schrift angezeigt und die Bezeichnung lautet "Ausgabe Logdatei".
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_log_graph_de.png">  
    
Mouseover-, Klick- und Mausradaktionen innerhalb der grafischen Darstellung bieten diverse Steuerungsmöglichkeiten:    
- verbesserte Lesbarkeit von Wertzahlen bei nahe beieinander liegenden Plotlinien (mouseover auf Plot)
- interaktives Hervorheben von Plotlinien zur besseren Übersicht (Mouseover auf Legendeneinträge)
- interaktives Ausschalten von Plotlinien zur besseren Übersicht und vertikalen Skalierung (Klick auf Legendeneinträge)
- zusätzliche Zoom- (Mausrad/Pinch auf Plot) und Pan-Funktionen (Ziehen des gezoomten Plots)
  
  
| Hinweise |
|:---------|
| Für die grafische Anzeige der Logdatei wie im obigen Beispiel dürfen keine JavaScript-Blocker aktiv sein und es muss eine aktive Internetverbindung bestehen, da das JavaScript-Framework zur Darstellung von cdn.jsdelivr.net und d3js.org geladen wird. |
| Bitte beachte, dass der Arduino nicht multitaskingfähig ist. Eine neue Abfrage kann erst erfolgen, nachdem die vorhergehende Abfrage komplett beendet ist. Speziell die Abfrage mehrerer Parameter, ganzer Kategorien oder auch des Logfiles der microSD-Karte kann u.U. eine längere Zeit in Anspruch nehmen, während dieser der Adapter nicht ‚ansprechbar' ist. |

---  
   
**Reglerspezifische Parameterliste (URL-Befehl /Q):**  
Nach einem Klick auf "Download" am Ende des angezeigten Textes fragt diese Funktion alle Parameter des angeschlossenen Reglers ab und erzeugt die dazugehörige Textdatei mit der spezifischen Ausgabe. Diese Datei muss an Frederik (bsb(ät)code-it.de) geschickt werden, um die entsprechende Datei `BSB_LAN_custom_defs.h` für dieses Reglermodell erstellen zu lassen. Nachdem du diese Datei von Frederik erhalten hast, muss du die bestehende Datei durch diese Version ersetzen und BSB-LAN neu flashen, um vollen Zugriff auf deinen Regler zu erhalten. Für weitere Informationen siehe [Kap. 3.3](kap03.md#33-reglerspezifische-parameterliste-erstellen).  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/QD_de.png">  
   
---  
   
**Einstellungen (URL-Befehl: /C):**  
Hier wird eine Übersicht der Konfiguration dargestellt.  
Im oberen Bereich ist das [Webinterface zur Konfiguration](kap02.md#221-konfiguration-mittels-webinterface) verfügbar, im unteren Bereich werden nochmals bestimmte Einstellungen (u.a. die genutzte Version von BSB-LAN, die Uptime, der Bustyp, möglicher Schreib- oder Lesezugriff, die definierten Pins für optional angeschlossene Sensoren, die zu loggenden Parameter etc.) aufgelistet.
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webconfig_settings_screenshot_de.png">

   

---  
   
**URL-Befehle:**  
Der Button ist mit diesem Handbuch verknüpft und führt zum Kapitel [URL-Befehle](kap05.md#51-url-befehle), in dem die möglichen Befehle übersichtlich und kurz aufgeführt sind. Internetzugriff wird benötigt.  
   
---  
   
**Handbuch:**  
Der Button ist mit dem [Inhaltsverzeichnis](inhaltsverzeichnis.md) dieses Handbuchs verlinkt. Internetzugriff wird benötigt.  
   
---  
   
**FAQ:**  
Der Button ist mit dem Kapitel [FAQ](kap15.md) dieses Handbuchs verlinkt. Internetzugriff wird benötigt.
    
---
    

     
[Weiter zu Kapitel 5](kap05.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

