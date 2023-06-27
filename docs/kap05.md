[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 4](kap04.md)    
    
---
  
# 5. BSB-LAN: Abfragen und Steuern

Da das Webinterface prinzipiell nur ‚aufgesetzt' ist, um eine Bedienung
ohne weitere Programme wie bspw. FHEM zu ermöglichen, ist ein direkter
Zugriff auf die einzelnen Funktionen und Parameter mittels anderer
Programme grundsätzlich möglich.  
      
---
    
## 5.1 URL-Befehle
  
| Hinweis |
|:--------|
| Bei der folgenden Aufzählung der URL-Befehle muss der jeweilige Wert oder Parameter ohne Klammern geschrieben werden. <br> Beispiel: URL-Befehl `/<x>` für die einfache Abfrage von Parameter 8700 = `/8700`. |  
   

| URL-Befehl           | Auswirkung                                                                    |
|:----------------------|:------------------------------------------------------------------------------|
|  `/<x>`               | `Alle Werte von Parameter <x> abfragen`  
|  `/<x>!<adr>`         | `Alle Werte von Parameter <x> für Zieladresse <adr> abfragen`  
|  `/<x>/<y>/<z>`     | `Alle Werte der Parameter <x>, <y> und <z> abfragen` <br /> `Hinweis: Mehrere Abfragen können miteinander verkettet werden, z.B.: http://<IP-Adresse>/K11/8000/8003/8005/8300/8301/8730-8732/8820`    
|  `/<x>-<y>`         | `Alle Werte eines Parameterbereichs von <x> bis <y> abfragen`  
|  `/<x>!<adr>-<y>`   | `Alle Werte eines Parameterbereichs von <x> bis <y> für Zieladresse <adr> abfragen`  
|  `/A=<x>,<y>,<z>`       | `24h-Durchschnittswertberechnung für Parameter <x>, <y>, <z> einstellen` <br /> `Während der Laufzeit kann /A=[parameter1],...,[parameter20] verwendet werden, um (bis zu 20) neue Parameter zu definieren.`  
|  `/A=0`                 | `24h-Durchschnittswertberechnung temporär deaktivieren.` <br /> `Deaktiviert die 24-h Durchschnittswertberechnung vorübergehend bis zum nächsten Reset/Neustart des Arduino. Für eine komplette und dauerhafte Deaktivierung müssen alle als zu berechnend aufgeführten Parameter in der Datei BSB_LAN_config.h auskommentiert werden.`  
|  `/B0`                  | `Zurücksetzen des Zählers der akkumulierten Brennerlaufzeiten und -zyklen`  
|  `/C`                   | `Konfigurationsseite (aka Webkonfig) von BSB-LAN`  
|  `/CO`                  | `Anzeige der Konfiguration von BSB-LAN`  
|  `/D oder /DD`                   | `Anzeige der Logdatei` <br /> `Zeigt den Inhalt der Datei datalog.txt an, die sich auf der microSD-Karte im Slot des Ethernet-Shields befindet.`  
|  `/D<n>`                | `Anzeige der neuesten <n> Kalendertage aus der Logdatei` |
|  `/D<a>,<b>`            | `Anzeige der Daten aus der Logdatei, die im Zeitbereich <a>,<b> liegen` <br /> `<a> und <b> sind dabei im Format jjjj-mm-tt anzugeben, z.B. /D2023-04-01,2023-04-30` |
|  `/DK<n>`               | `Löschen der Daten in der Logdatei, mit Ausnahme von Daten der letzten <n> Kalendertage (K wie keep=behalten)` |
|  `/DG`                  | `Grafische Anzeige der Logdatei` <br /> `Wer Parameter auf SD-Karte loggt, hat neben der reinen Textform auch die Möglichkeit, einen Graphen angezeigt zu bekommen.` <br /> `Hinweis: Für /DG müssen bei Javascript-Blockern die Domains cdn.jsdelivr.net und d3js.org freigegeben werden, da der Arduino weiterhin nur die CSV-Datei in den Browser lädt und diese dann mit dem C3/D3-Framework grafisch aufbereitet wird. P.s.: Alternativ können diese Frameworks jetzt auch lokal gespeichert und verwendet werden; Hinweise dazu finden sich in der Datei BSB_LAN_config.h.` <br /> `Wird die Log-Datei via Webinterface mittels Klick auf „Anzeige Logdatei" aufgerufen, erfolgt standardmäßig zuerst die grafische Darstellung der Logdaten der jüngsten n Kalendertage (n=DEFAULT_DAYS_TO_PLOT, konfigurierbar in BSB_LAN_config.h). Anschließend lässt sich über Steuerelemente auf der Webseite ein davon abweichender Bereich auswählen, abhängig von den in der Logdatei enthaltenen Daten.` <br /> `Mouseover-, Klick- und Mausradaktionen innerhalb der grafischen Darstellung bieten diverse Steuerungsmöglichkeiten:` <br /> `- verbesserte Lesbarkeit von Wertzahlen bei nahe beieinander liegenden Plotlinien (mouseover auf Plot)` <br /> `- interaktives Hervorheben von Plotlinien zur besseren Übersicht (Mouseover auf Legendeneinträge)` <br /> `- interaktives Ausschalten von Plotlinien zur besseren Übersicht und vertikalen Skalierung (Klick auf Legendeneinträge bzw. Alt-Klick um ausschließlich die jeweilige Plotlinie anzuzeigen)` <br /> `- zusätzliche Zoom- (Mausrad/Pinch auf Plot) und Pan-Funktionen (Ziehen des gezoomten Plots)` <br />   
|  `/DJ`                  | `Anzeige des Logfiles von Telegrammen` <br /> `Dieser Befehl zeigt das Logfile *journal.txt* an, das den Inhalt der empfangenen und gesendeten Telegramme anzeigt. Dieses Logging ist nützlich bei der Fehlersuche und bei der Suche nach unbekannten Parametern. Um die Funktion nutzen zu können, muss das Modul LOGGER in der Datei BSB_LAN_config.h aktiviert und das erste Element des Arrays log_parameters auf 30000 gesetzt werden.`   
|  `/D0`                  | `Logfiles löschen und neuen CSV-header erstellen` <br /> `Dieser Befehl löscht die Dateien datalog.txt und journal.txt und erstellt einen neuen CSV-header für datalog.txt. Dieser Befehl sollte vor dem ersten Logging ausgeführt werden.`  
|  `/DD0`               | `Logfile datalog.txt löschen`  
|  `/DJ0`               | `Logfile journal.txt löschen`  
|  `/E<x>`              | `Alle ENUM-Werte für Parameter <x> auflisten` <br /> `Bei diesem Befehl kommuniziert der Adapter nicht mit dem Heizungssystem. Es ist eine softwareseitige, interne Funktion. Dieser Befehl ist nur für Parameter des Typs VT_ENUM, VT_CUSTOM_ENUM, VT_BITS und VT_CUSTOM_BITS verfügbar.`  
|  `/G<x>`              | `GPIO: Abfragen des GPIO-Pins <x> (GPIO wird als OUTPUT genutzt)` <br /> `Gibt den momentanen Status von GPIO Pin <x> an, wobei <y>=0 LOW und <y>=1 HIGH ist.`  
|  `/G<x>=<y>`        | `GPIO: Abfragen des GPIO-Pins <x> und Setzen auf <y> (GPIO wird als OUTPUT genutzt)` <br /> `Setzt GPIO Pin <x> auf LOW (<y>=0) oder HIGH (<y>=1).` <br /> `Reservierte Pins, die nicht gesetzt werden dürfen, können in der BSB_LAN_config.h unter dem Parameter GPIO_exclude gesperrt werden.` 
|  `/G<x>,I`            | `GPIO: Abfragen des GPIO-Pins <x> (GPIO wird als INPUT genutzt)` <br /> `Für die reine Abfrage eines externes Gerätes, das an einen GPIO angeschlossen ist (z.B. ein einfaches Koppelrelais), da die Pins per default auf ‚output' gesetzt sind. Der Pin bleibt nach diesem Befehl so lange auf ‚input', bis das nächste Mal mit /G<xx>=<y> ein Wert geschrieben wird - ab da ist er dann bis zum nächsten „I" wieder auf ‚output'.`  
|  `/I<x>=<y>`        | `Sende eine INF-Nachricht für den Parameter <x> mit dem Wert <y>` <br /> `Einige Werte können nicht direkt gesetzt werden. Das Heizungssystem wird mit einer TYPE_INF-Nachricht informiert, bspw. bei der Raumtemperatur: http://<ip-address>/I10000=19.5 → Raumtemperatur beträgt 19.5°C`  
|  `/JB`                   | `JSON: Backup aller schreibbaren Parameter des Heizungsreglers`  
|  `/JC=<x>,<y>,<z>`         	| `JSON: Abfrage der möglichen Werte der Parameter <x>,<y>,<z> für Parameter des Typs ENUM` <br /> `Das Format der zurückgegeben Daten ist das gleiche wie bei dem Befehl /JK=<x>. Im Gegensatz zum Befehl /JQ werden die aktuellen Parameterwerte nicht zurückgemeldet.`   
|  `/JI`                   | `JSON: Konfiguration von BSB-LAN anzeigen lassen`  
|  `/JK=<x>`         	| `JSON: Abfrage der verfügbaren Parameter der Kategorie <x>`  
|  `/JK=ALL`          	   | `JSON: Auflistung aller Kategorien samt zugehöriger Parameternummern`  
|  `/JL`                | `JSON: Erstellt eine Liste der Konfiguration im JSON-Format`  
|  `/JQ=<x>,<y>,<z>`      | `JSON: Abfrage von Parameter <x>, <y> und <z>`  
|  `/JQ`                  | `JSON: Abfrage von Parametern`  
|  `/JR<x>`                | `JSON: Fragt den Reset-Wert für Parameter <x> ab` <br /> `Im Display der integrierten Heizungssteuerung gibt es für einige Parameter eine Reset-Option. Ein Reset wird vorgenommen, indem das System nach dem Reset-Wert gefragt wird und dieser anschließend gesetzt wird.`  
|  `/JS`                  | `JSON: Setzen von Parametern`  
|  `/JV`                | `JSON: Abfrage der JSON-API-Version. Payload: {"api_version": "major.minor"}`  
|  `/JW`                   | `JSON: Liest die per /JL erstellte Konfigurationsliste aus und passt die Einstellungen entsprechend an.`  
|  `/K`                   | `Alle Kategorien auflisten` <br /> `Bei diesem Befehl kommuniziert der Adapter nicht mit dem Heizungssystem. Es ist eine softwareseitige, interne Funktion.`  
|  `/K<x>`              | `Alle Parameter von Kategorie <x> abfragen` <br /> `Bei diesem Befehl kommuniziert der Adapter nicht mit dem Heizungssystem. Es ist eine softwareseitige, interne Funktion.`  
|  `/L=0,0`               | `Vorübergehendes Deaktivieren des Loggens auf die microSD-Karte` <br /> `Prinzipiell erfolgt das Aktivieren/Deaktivieren der Log-Funktion durch das entsprechende Definement in der Datei BSB_lan_config.h vor dem Flashen. Während des Betriebes kann das Loggen jedoch mit diesem Befehl deaktiviert werden. Zum Aktivieren werden dann wieder das Intervall und die gewünschten Parameter eingetragen. Bei einem Reset/Neustart des Arduino werden die Einstellungen aus der Datei BSB_lan_config.h verwendet - eine dauerhafte Umstellung der Logging-Parameter sollte also dort erfolgen.`  
|  `/L=<x>,<y1>,<y2>,<y3>`       | `Setzen des Logging-Intervals auf <x> Sekunden mit (optional) zu loggenden Parametern <y1>,<y2>,<y3>` <br /> `Setzt während der Laufzeit das Logging-Intervall auf <x> Sekunden und (optional) die Logging-Parameter auf <y1>, <y2>, <y3> etc.` <br /> `Dabei sind stets alle zu loggenden Parameter anzugeben - also auch (falls gewünscht) diejenigen, die evtl. bereits in der Datei BSB_lan_config.h definiert wurden. Nach einem Neustart werden dann wieder nur die Parameter geloggt, die in der Datei BSB_lan_config.h definiert wurden.` <br /> `Hinweis: Das Logging muss durch das Definement #define LOGGING in der Datei BSB_lan_config.h aktiviert werden und kann initial anhand der Variablen log_parameters und log_interval konfiguriert werden.`  
|  `/LB=<x>`            | `Konfiguration des Loggens von Bus-Telegrammen: Nur Broadcasts (<x>=1) oder alle Telegramme (<x>=0)` <br /> `Wenn Bus-Telegramme geloggt werden (Parameter 30000 als einzigen Parameter loggen), logge nur die Broadcasts (<x>=1) oder alle (<x>=0) Telegramme.`  
|  `/LD`                | `Deaktivieren des Loggens von Bus-Telegrammen`  
|  `/LE`                | `Aktivieren des Loggens von Bus-Telegrammen`  
|  `/LN`                | `Löst ein sofortiges Logging aus und startet das konfigurierte Logintervall zu diesem Zeitpunkt neu.`  
|  `/LU=<x>`            | `Konfiguration des Loggens von Bus-Telegrammen: Nur unbekannte (<x>=1) oder alle (<x>=0) Telegramme loggen` <br /> `Wenn Bus-Telegramme geloggt werden (Parameter 30000 als einzigen Parameter loggen), logge nur die unbekannten Command IDs (<x>=1) oder alle (<x>=0) Telegramme.`  
|  `/M<x>`              | `Aktivieren (<x> = 1) oder Deaktivieren (<x> = 0) des Bus-Monitormodus` <br /> `Standardmäßig ist der Monitor-Modus deaktiviert (<x>=0).` <br /> `Wenn <x> auf 1 gesetzt wird, werden alle Bytes auf dem Bus überwacht. Telegramme werden durch Umbruchzeichen als solche erkannt. Jedes Telegramm wird im Hex-Format auf der seriellen Konsole mit einem Zeitstempel in Millisekunden dargestellt. Die Ausgabe der Überwachung betrifft nur die serielle Konsole des Arduino, die html-Ausgabe bleibt unverändert.` <br /> `Zum Deaktivieren des Monitor-Modus ist <x> wieder auf 0 zu setzen (URL-Befehl: /M0).`  
|  `/N`                   | `Reset & Neustart des Arduino (Dauer: ca. 15 Sekunden)` <br /> `Hinweis: Die Funktion muss zuvor in der Datei BSB_lan_config.h aktiviert werden: #define RESET`  
|  `/NE`                  | `Reset & Neustart des Arduino (Dauer: ca. 15 Sekunden) und löschen des EEPROMs` <br /> `Hinweis: Die Funktion muss zuvor in der Datei BSB_lan_config.h aktiviert werden: #define RESET`  
|  `/P<x>`              | `Bus-Typ (BSB, LPB oder PPS) vorübergehend ändern: <x> = 0 → BSB / 1 → LPB / 2 → PPS` <br /> `Wechselt zwischen BSB (<x>=0), LPB (<x>=1) und PPS (<x>=2). Nach einem Reset/Neustart des Arduino wird die Einstellung aus der Datei BSB_lan_config.h verwendet. Um den Bus-Typ dauerhaft festzulegen, sollte die Option setBusType config in der Datei BSB_lan_config.h entsprechend angepasst werden.`     
|  `/P<x>,<y>,<z>`  | `Bus-Typ und zusätzlich die eigene oder die Zieladresse mittels URL-Befehl wechseln` <br /> `<x> = Bus (0 = BSB, 1 = LPB, 2 = PPS),` <br /> `<y> = eigene Adresse und` <br /> `<z> = Zieladresse` <br /> `Leerwerte bei den Adressen belassen den bisherigen Wert (= voreingestellte Adresse).`    
|  `/Q`                   | `Überprüfen auf nicht-freigegebene reglerspezifische Parameter`  
|  `/R<x>`              | `Frage den Reset-Wert für Parameter <x> ab` <br /> `Im Display der integrierten Heizungssteuerung gibt es für einige Parameter eine Reset-Option. Ein Reset wird vorgenommen, indem das System nach dem Reset-Wert gefragt wird und dieser anschließend gesetzt wird.`  
|  `/S<x>=<y!z>`        | `Setze Wert <y> für den Parameter <x> mit optionaler Zieladresse <z>` <br /> `Die gewünschte Gerätezieladresse ist als <z> einzufügen, wenn <!z> nicht eingegeben wird, wird die Standardzieladresse verwendet. Um einen Parameter auf 'abgeschaltet/deaktiviert' zu setzen, muss lediglich ein leerer Wert eingefügt werden: http://<ip-address>/S<x>=`  
|  `/U`                   | `Anzeige der in der Datei BSB_lan_custom.h benutzerdefinierten Variablen (falls verwendet)` <br /> `Für die Erstellung eigener Unterprogramme in der BSB_lan_custom.h stehen zwei globale Arrays, custom_floats[] und custom_longs[], zur Verfügung, die jeweils 20 Byte groß sind. Diese können nach Bedarf verwendet werden und über das URL-Kommando /U angezeigt werden. Dies kann nützlich sein, um z.B. eigene Sensoren anzubinden, die man dann in der BSB_lan_custom.h abfragen bzw. berechnen kann und dann über /U über die Weboberfläche abfragen kann.`   
|  `/V<x>`              | `Aktivieren (<x> = 1) oder Deaktivieren (<x> = 0) des Verbositätsmodus` <br /> `Der voreingestellte Verbositäts-Level ist 1. Somit wird standardmäßig der Bus überwacht und alle Daten werden zusätzlich im Raw-Hex-Format dargestellt.` <br /> `Soll der Modus deaktivert werden, so ist <x> auf 0 zu setzen (URL-Befehl: /V0).` <br /> `Der Verbositäts-Level betrifft sowohl die serielle Konsole des Arduino als auch (optional) das Loggen der Bus-Daten auf die microSD-Karte, so dass die Speicherkarte u.U. sehr schnell voll wird! Im Fall des Loggens auf die interne microSD-Karte ist es daher empfehlenswert, den Verbostitätsmodus bereits in der Datei BSB_lan_config.h zu deaktivieren (byte verbose = 0).` <br /> `Die html-Ausgabe bleibt mit /V1 unverändert.`  
|  `/W`                   | `Mit vorangehendem /W liefern die URL-Befehle C, S und Q Daten ohne HTML-header und -footer zurück (bspw. /WC oder /WS<x>=<y!z>); Modul WEBSERVER muss kompiliert sein!`  
|  `/X`                   | `Abfragen optionaler MAX!-Thermostate` <br /> `Abfragen und Anzeigen der Temperaturen von optionalen MAX!-Thermostaten.` <br /> `Hinweis: MAX!-Komponenten müssen zuvor in der Datei BSB_lan_config.h definiert werden!`  
  
---
    
## 5.2 MQTT
  
BSB-LAN unterstützt das MQTT-Protokoll, d.h. die Werte und Einstellungen des Heizungsreglers sind per MQTT empfangbar.  
Um MQTT bei BSB-LAN zu nutzen, muss zwingend das Definement "#define LOGGER" in der Datei *BSB_LAN_config.h* aktiviert sein. Dies ist in der Voreinstellung bereits der Fall.  
  
Die zu sendenden (von BSB-LAN abgefragten) Parameter, das Sendeintervall (nur eines für alle Parameter möglich!) sowie die weiteren MQTT-spezifischen Einstellungen (Broker, Topic etc.) sind entweder via Webkonfiguration oder direkt in der Datei *BSB_LAN_config.h* einzustellen. Beachte hierzu bitte die Erklärungen in den entspr. Unterkapiteln von [Kap. 5](kap05.md).  
  
Beispiele für eine Einbindung von BSB-LAN findest du in den entspr. Unterkapiteln von [Kap. 11](kap11.md). 

| Hinweis |
|:--------|
| Wenn du die MQTT-Funktion per fest eingestellter Loggingparameter und -intervall nutzt, achte darauf, dass du das Logintervall (= MQTT-Sendeintervall) anpasst! <br> Per default ist hier 3600 eingestellt, was bedeutet, dass die Parameter alle 3600 *Sekunden*, also alle 60 *Minuten* und somit *stündlich* gesendet werden! Wenn du also deinen MQTT-Broker konfiguriert hast und dich wundern solltest, warum keine Werte ankommen, überprüfe zuerst das Logintervall! |    
  
BSB-LAN sendet über den Subtopic "status" unter dem definierten "MQTTTopicPrefix" jederzeit seinen Online-Status. Dies ist in der Voreinstellung also "BSB-LAN/status". Über diesen Topic kann so jederzeit festgestellt werden, ob der BSB-LAN derzeit Werte sendet und Kommandos empfangen kann.  
Ist BSB-LAN verfügbar, ist im Topic die Nachricht "online" zu sehen, ansonsten wird "offline" gesetzt. Die Nachricht ist per Retain-Flag dauerhaft verfügbar, der Subscriber muss also nicht zum Zeitpunkt des BSB-LAN Starts bereits den Topic abonniert haben.  
Ein Neustart über die Software (z.B. per URL-Befehl /N) setzt den Topic sofort auf "offline". Fällt BSB-LAN unkontrolliert aus (z.B. durch Stromausfall oder Flashen der Firmware) verschickt der Broker nach einem Timeout (dieser ist m.W. abhängig vom Broker) ebenfalls die Offline-Nachricht.   
  
Neben dem (brokerseitigen) reinen Empfangen ist es auch möglich, via MQTT vom Broker aus sowohl Abfragen als auch Steuerbefehle (URL-Befehle /S und /I) an BSB-LAN zu senden. Selbstverständlich muss BSB-LAN für das Umsetzen von Steuerbefehlen Schreibzugriff auf den Regler gewährt werden.  
  
Die Befehlssyntax lautet:
  
`set <MQTT-Server> publish <Topic> <Befehl>`  

- `<MQTT-Server>` = Name des MQTT-Servers  

- `<Topic>` = In der Voreinstellung "BSB-LAN", ansonsten das in der Datei *BSB_LAN_config.h* entspr. definierte "MQTTTopicPrefix". Sollte kein Topic definiert sein (nicht ratsam), so muss als Topic "FromBroker" genommen werden.  

- `<Befehl>` = Die abzufragende Parameternummer oder der entspr. parameterspezifische URL-Befehl `S` oder `I`.  

  | Achtung |
  |:--------|
  | Es ist jeweils nur eine Abfrage bzw. nur ein Setzen möglich, es können also keine Parameterbereiche o.ä. abgefragt werden! |    
  
Nachfolgend schickt BSB-LAN eine Empfangsbestätigung zurück ("ACK_\<Befehl\>").  
  
| Beispiel |
|:---------|
| Der Befehl `set mqtt2Server publish BSB-LAN S700=1` sendet vom MQTT-Broker namens "mqtt2Server" den Befehl "S700=1" mit dem Topic "BSB-LAN" und bewirkt eine Betriebsartumschaltung in den Automatikmodus. |
| Der Befehl `set mqtt2Server publish BSB-LAN 700` sendet vom MQTT-Broker namens "mqtt2Server" den Befehl "700" mit dem Topic "BSB-LAN" und bewirkt eine Abfrage von Parameter 700. | 
   
| Beispiel für *Mosquitto* |
|:-------------------------|
| Befehl zum Abrufen von Parameter 1010 (inkl. Username & Passwort): `mosquitto_pub -h 192.168.178.35 -u USER -P PASSWORD -m "1010" -t BSB-LAN -d` |
| Befehl zum Setzen von Parmeter 1610 auf 41° (inkl. Username & Passwort): `mosquitto_pub -h 192.168.178.35 -u USER -P PASSWORD -m "S1610=41" -t BSB-LAN -d ` |  
   
---
    
## 5.3 JSON
  
-   **Abfrage von Kategorien:**

    `http://<IP-Adresse>/JK=<xx>`  
    Abfrage einer spezifischen Kategorie (\<xx\> = Kategorienummer)

    `http://<IP-Adresse>/JK=ALL`  
    Abfrage aller Kategorien (samt Min. und Max.)

-   **Abfragen und Setzen von Parametern per HTTP POST:**

    Hierbei ist der Aufruf der URL  
    `http://<IP-Adresse>/JQ` für eine Abfrage und   
    `http://<IP-Adresse>/JS` für das Setzen von Parametern zu verwenden.

    Folgende Parameter sind dabei möglich:
    
    ```
    http://<IP-Adresse>/JQ
    Senden: "Parameter"
    Empfangen: "Parameter", "Value", "Unit", "DataType" (0 = Zahl, 1 = ENUM, 2 = Bit-Wert (Dezimalwert gefolgt von Bitmaske gefolgt von ausgewählter Option), 3 = Wochentag, 4 = Stunde/Minute, 5 = Datum/Uhrzeit, 6 = Tag/Monat, 7 = String, 8 = PPS-Uhrzeit (Wochentag, Stunde:Minute)), "readonly" (0 = read/write, 1 = read only parameter), "error" (0 - ok, 7 - parameter not supported, 1-255 - LPB/BSB bus errors, 256 - decoding error, 257 - unknown command, 258 - not found, 259 - no enum str, 260 - unknown type, 261 - query failed), "isswitch" (1 = it VT_ONOFF or VT_YESNO data type (subtype of ENUM), 0 = all other cases)  
    
    http://<IP-Adresse>/JS  
    Senden: "Parameter", "Value", "Type" (0 = INF, 1 = SET)  
    Empfangen: "Parameter", "Status" (0 = Fehler, 1 = OK, 2 = Parameter read-only)  
    ```   
      
- Die Abfrage mehrerer Parameter mit einem Befehl ist ebenfalls möglich:  
  Der Befehl `http://<IP-Adresse>/JQ=<x>,<y>,<z>` fragt die Parameter \<x\>, \<y\> und \<z\> ab.  
       
- Beispiel zum Setzen von Parametern per *Linux-Kommandozeile* oder *„[Curl for Windows](https://curl.haxx.se/windows/)"*, exemplarisch am Parameter 700 (Betriebsart HK1) → Setzen auf 1 (automatisch):
    
    Linux-Kommandozeile:   
    ```
    curl -v -H "Content-Type: application/json" -X POST -d '{"Parameter":"700", "Value":"1", "Type":"1"}' http://<IP-Adresse>/JS
    ```

    Curl for Windows:   
    ```
    curl -v -H "Content-Type: application/json" -X POST -d "{\"Parameter\":\"700\", \"Value\":\"1\", \"Type\":\"1\"}" http://<IP-Adresse>/JS
    ```
  

---       
  
***User "hacki11" hat eine ausführliche und interaktive [API-Dokumentation zum Abfragen und Steuern via JSON](https://editor.swagger.io/?url=https://raw.githubusercontent.com/fredlcore/bsb_lan/master/openapi.yaml) erstellt.      
Vielen Dank!***  

| Hinweis für Entwickler |
|:-----------------------|
| Die API lässt sich mittels [Postman](https://www.postman.com) am eigenen System testen. Dazu muss man die URL https://raw.githubusercontent.com/fredlcore/bsb_lan/master/openapi.yaml in File/Import/Link hinzufügen und ggf. die spezifischen Angaben wie bspw. Adresse und Zugangsdaten anpassen. |   

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/swagger_api-docu.png">  
    

Neben den Beschreibungen samt Beispielen zu den einzelnen Befehlen sind ebenfalls sämtliche Informationen zu den Typen, Formaten, möglichen Werten etc. aufgeführt. 

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/swagger_api-docu_schemes.png">  
    
    

| Hinweise |
|:---------|
| JSON-Befehle lassen sich auch per Linux-Kommandozeile oder „[Curl for Windows](https://curl.haxx.se/windows/)“ nutzen. Bei der o.g. interaktiven API-Dokumentation können die entspr. Curl-Befehle generiert und danach zur weiteren Nutzung kopiert werden (die IP ist bei der weiteren Verwendung stets anzupassen). Dazu ist wie folgt vorzugehen: <br> 1. Klicke auf die gewünschte Operation, bspw. "/JQ={parameterIds}". <br> 2. Bei dem aufklappenden Fenster klicke rechts auf "Try it out". <br> 3. Trage den/die gewünschten Parameter ein (im unten gezeigten Beispiel: 700,8300). <br> 4. Klicke auf "Execute". <br>  Im Feld "Responses" werden dann die URL- und Curl-Befehle angezeigt, die man kopieren kann. | 
| Achtung: Die Zeichenkombination `%2C` bei der Auflistung mehrerer Parameter wird von Swagger anstelle des Kommas eingefügt. Solltest du die URL-/Curl-Befehle kopieren und nutzen wollen, so ersetze bitte jedes `%2C` durch ein `,` (Komma)! |  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/curl-beispiel.png"> 
    
*Die Ausgabe des URL-/Curl-Befehls.*  
  


<!--  Die nachfolgende Auflistung und Beschreibung der JSON-Befehle 

<!-- -   **Abfrage der möglichen Werte von Parametern:**  

    `http://<IP-Adresse>/JC=<x>,<y>,<z>`  
    Abfrage der möglichen Werte der Parameter `<x>,<y>,<z>` für Parameter des Typs ENUM. Das Format der zurückgegeben Daten ist das gleiche wie bei dem Befehl `/JK=<x>`. Im Gegensatz zum Befehl `/JQ` werden die aktuellen Parameterwerte nicht zurückgemeldet.  
    
<!-- -   **Abfrage der Konfiguration von BSB-LAN:**  

    `http://<IP-Adresse>/JI`  
    Konfiguration von BSB-LAN in JSON-Format anzeigen lassen.  


       

<!-- -   **Abfrage des Reset-Werts eines Parameters:**  
    `http://<IP-Adresse>/JR<x>` → Fragt den Reset-Wert für Parameter <x> ab. Im Display der integrierten Heizungssteuerung gibt es für einige Parameter eine Reset-Option. Ein Reset wird vorgenommen, indem das System nach dem Reset-Wert gefragt wird und dieser anschließend gesetzt wird (JSON: Mittels /JS).  
  
<!-- -   **Backup und Restore der Konfiguration von BSB-LAN:**  
    
    `http://<IP-Adresse>/JL` → Erstellt eine Liste der Konfiguration im JSON-Format.  
    
    `http://<IP-Adresse>/JW` → Liest die per /JL erstellte Konfigurationsliste aus und passt die Einstellungen entsprechend an.  
      
    *Achtung:* Zur Nutzung dieser Funktion muss das Modul "JSONCONFIG" (s. Datei *BSB_lan_config.h*) kompiliert sein!  -->
    
---
   
## 5.4 Spezialparameter & Nummernbereiche  
  
**Spezialparameter**  
  
Ab BSB-LAN-Version 3.x mussten bestimmte Funktionen als Spezialparameter mit den Nummern 10000 aufwärst implementiert werden. Die folgende Auflistung zeigt diese Spezialparameter samt Parameternummer und Funktion. Abhängig vom Typ muss das Schreiben entweder per SET- oder der INF-Befehl erfolgen (Schreibzugriff muss gewährt sein). Für weitere Informationen zu den einzelnen Befehlen lies bitte die entspr. Kapitel.   
  
| Parameternummer | Funktion | Befehlstyp |
|:-----------------|:---------|:-------------|
| 10000 | Raumtemperatur HK1 | INF - [s. Kap. 6.3](kap06.md#63-raumtemperatur-übermitteln) |
| 10001 | Raumtemperatur HK2 | INF - [s. Kap. 6.3](kap06.md#63-raumtemperatur-übermitteln) |
| 10002 | Raumtemperatur HK3 | INF - [s. Kap. 6.3](kap06.md#63-raumtemperatur-übermitteln) |
| 10019 | Manueller TWW-Push | SET - [s. Kap. 6.5](kap06.md#65-manuellen-tww-push-ausführen) |
| 10110 | Präsenztaste HK1 (temporärer Heizbetriebswechsel) | SET - [s. Kap. 6.4](kap06.md#64-präsenztaste-simulieren)  |
| 10111 | Präsenztaste HK2 (temporärer Heizbetriebswechsel) | SET - [s. Kap. 6.4](kap06.md#64-präsenztaste-simulieren) |  
| 10112 | Präsenztaste HK3 (temporärer Heizbetriebswechsel) | SET - [s. Kap. 6.4](kap06.md#64-präsenztaste-simulieren) |  
  
---

**Nummernbereiche**  
  
Die folgende Übersicht zeigt, wie die Nummernbereiche aufgeteilt bzw. vergeben sind.   
  
| Nummernbereich | Verwendung |
|:---------------|:-----------|
| 0-9999 | Parameter des Reglers |
| 10000-10019 | Raumgerätefunktionen (Raumtemperatur & TWW-Push) |
| 10020-10099 | Ursprünglich nummernlose Parameter des Reglers |
| 10100-10109 | Broadcast-Parameter |
| 10110-10129 | Präsenztaste (temporärer Heizbetriebswechsel) |
| 10200-10999 | Bereich für manuell hinzugefügte Parameter |
| 20100-20199 | Sensoren: DHT22 |
| 20200-20299 | Sensoren: BME280 |
| 20300-20499 | Sensoren: DS18B20 |
| 20500-20699 | MAX!-Sensoren/Komponenten |
   
---   
     
[Weiter zu Kapitel 6](kap06.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

