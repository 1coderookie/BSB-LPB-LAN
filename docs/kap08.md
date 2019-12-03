[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 7](kap07.md)    
    
---
    
# 8. URL-Befehle und Spezialfunktionen
Da das Webinterface prinzipiell nur ‚aufgesetzt' ist, um eine Bedienung
ohne weitere Programme wie bspw. FHEM zu ermöglichen, ist ein direkter
Zugriff auf die einzelnen Funktionen und Parameter mittels anderer
Programme grundsätzlich möglich.  
  
*Eine kurze und druckerfreundliche Übersicht der URL-Befehle ist [hier](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Cheatsheet_URL-Befehle.pdf) als Download verfügbar.*

    
---
    
## 8.1 Auflistung und Beschreibung der URL-Befehle
*Hinweis:*  
Bei der folgenden Aufzählung der URL-Befehle muss der jeweilige Wert oder Parameter ohne Klammern geschrieben werden. Beispiel: URL-Befehl `/<x>` für die einfache Abfrage von Parameter 8700 = `/8700`.  
   

| URL-Befehl           | Auswirkung                                                                    |
|:----------------------|:------------------------------------------------------------------------------|
|  **/\<x\>**               | **Alle Werte von Parameter \<x\> abfragen**  
|  **/\<x\>/<y\>/<z\>**     | **Alle Werte der Parameter \<x\>, \<y\> und \<z\> abfragen** <br /> *Hinweis:* Mehrere Abfragen können miteinander verkettet werden, z.B.: `http://<IP-Adresse>/K11/8000/8003/8005/8300/8301/8730-8732/8820`    
|  **/\<x\>-\<y\>**         | **Alle Werte eines Parameterbereichs von \<x\> bis \<y\> abfragen**  
|  **/A**                   | **24h-Durchschnittswerte von ausgewählten Parametern anzeigen** <br /> Zeigt rollierende 24h-Durchschnittswerte ausgewählter Parameter an. Die Initiale Festlegung dieser Parameter erfolgt in der Datei *BSB\_lan\_config.h* in der Variable `avg_parameters`.  
|  **/A=\<x\>,\<y\>,\<z\>**       | **24h-Durchschnittswertberechnung für Parameter \<x\>, \<y\>, \<z\> einstellen** <br /> Während der Laufzeit kann `/A=[parameter1],...,[parameter20]` verwendet werden, um (bis zu 20) neue Parameter zu definieren.  
|  **/B**                   | **Akkumulierte Brennerlaufzeit (in Sekunden) und -zyklen (inkl. TWW) anzeigen** <br /> Fragt sowohl die akkumulierte Brennerlaufzeit (in Sekunden) und die Brennerstarts/-takte als auch die Anzahl und die Dauer der Ladungen (in Sekunden) des Trinkwasserspeichers ab, die anhand von Broadcast-Nachrichten ermittelt wurden. <br /> Bei bestimmten zweistufigen Ölbrennern wird zudem zwischen Stufe 1 und 2 differenziert und die jeweiligen Starts und Laufzeiten werden angezeigt.  
|  **/B0**                  | **Zurücksetzen des Zählers der Brennerlaufzeiten und -zyklen**  
|  **/C**                   | **Konfiguration von BSB-LAN anzeigen lassen**  
|  **/D**                   | **Anzeige der Logdatei** <br /> Zeigt den Inhalt der Datei *datalog.txt* an, die sich auf der microSD-Karte im Slot des Ethernet-Shields befindet. 
|  **/DG**                  | **Grafische Anzeige der Logdatei** <br /> Wer Parameter auf SD-Karte loggt, hat neben der reinen Textform auch die Möglichkeit, einen Graphen angezeigt zu bekommen. <br /> *Hinweis:* Für `/DG` muss bei Javascript-Blockern die Domain d3js.org freigegeben werden, da der Arduino weiterhin nur die CSV-Datei in den Browser lädt und diese dann mit dem D3-Framework grafisch aufbereitet wird. <br /> Wird die Log-Datei via Webinterface mittels Klick auf „Anzeige Logdatei" aufgerufen, erfolgt standardmäßig zuerst die grafische Darstellung.    
|  **/D0**                  | **Logfile löschen und neuen CSV-header erstellen**  
|  **/E\<x\>**              | **Alle ENUM-Werte für Parameter \<x\> auflisten** <br /> Bei diesem Befehl kommuniziert der Adapter nicht mit dem Heizungssystem. Es ist eine softwareseitige, interne Funktion. Dieser Befehl ist nur für Parameter des Typs VT\_ENUM verfügbar.  
|  **/G\<x\>**              | **GPIO: Abfragen des GPIO-Pins \<x\> (GPIO wird als OUTPUT genutzt)** <br /> Gibt den momentanen Status von GPIO Pin \<x\> an, wobei \<y\>=0 *LOW* und \<y\>=1 *HIGH* ist.  
|  **/G\<x\>,\<y\>**        | **GPIO: Abfragen des GPIO-Pins \<x\> und Setzen auf \<y\> (GPIO wird als OUTPUT genutzt)** <br /> Setzt GPIO Pin \<x\> auf LOW (\<y\>=0) oder HIGH (\<y\>=1). <br /> Reservierte Pins, die nicht gesetzt werden dürfen, können in der *BSB\_lan\_config.h* unter dem Parameter GPIO\_exclude gesperrt werden. 
|  **/G\<x\>,I**            | **GPIO: Abfragen des GPIO-Pins \<x\> (GPIO wird als INPUT genutzt)** <br /> Für die reine Abfrage eines externes Gerätes, das an einen GPIO angeschlossen ist (z.B. ein einfaches Koppelrelais), da die Pins per default auf ‚output' gesetzt sind. Der Pin bleibt nach diesem Befehl so lange auf ‚input', bis das nächste Mal mit `/G<xx>=<y>` ein Wert geschrieben wird - ab da ist er dann bis zum nächsten „I" wieder auf ‚output'.  
|  **/I\<x\>=\<y\>**        | **Sende eine INF-Nachricht für den Parameter \<x\> mit dem Wert \<y\>** <br />  Einige Werte können nicht direkt gesetzt werden. Das Heizungssystem wird mit einer TYPE\_INF-Nachricht informiert, bspw. bei der Raumtemperatur: `http://<ip-address>/I10000=19.5` → Raumtemperatur beträgt 19.5°C  
|  **/JK=\<x\>**         	| **JSON: Abfrage der verfügbaren Parameter der Kategorie \<x\>**  
|  **/JK=ALL**          	   | **JSON: Auflistung aller Kategorien samt zugehörigen Parameternummern**  
|  **/JQ=\<x\>,\<y\>,\<z\>**      | **JSON: Abfrage von Parameter \<x\>, \<y\> und \<z\>**  
|  **/JQ**                  | ***→ mit JSON-Struktur (s. [Kap. 8.2.4](kap08.md#824-abrufen-und-steuern-mittels-json)) via HTTP-POST Request:* Abfrage von Parametern**
|  **/JS**                  | ***→ mit JSON-Struktur (s. [Kap. 8.2.4](kap08.md#824-abrufen-und-steuern-mittels-json)) via HTTP-POST Request:* Setzen von Parametern**
|  **/K**                   | **Alle Kategorien auflisten** <br /> Bei diesem Befehl kommuniziert der Adapter nicht mit dem Heizungssystem. Es ist eine softwareseitige, interne Funktion.  
|  **/K\<x\>**              | **Alle Parameter von Kategorie \<x\> abfragen** <br /> Bei diesem Befehl kommuniziert der Adapter nicht mit dem Heizungssystem. Es ist eine softwareseitige, interne Funktion.  
|  **/L=0,0**               | **Vorübergehendes Deaktivieren des Loggens auf die microSD-Karte** <br /> Prinzipiell erfolgt das Aktivieren/Deaktivieren der Log-Funktion durch das entsprechende Definement in der Datei *BSB\_lan\_config.h* vor dem Flashen. Während des Betriebes kann das Loggen jedoch mit diesem Befehl deaktiviert werden. Zum Aktivieren werden dann wieder das Intervall und die gewünschten Parameter eingetragen. Bei einem Reset/Neustart des Arduino werden die Einstellungen aus der Datei *BSB\_lan\_config.h* verwendet - eine dauerhafte Umstellung der Logging-Parameter sollte also dort erfolgen.  
|  **/L=\<x\>,\<y1\>,\<y2\>,\<y3\>**       | **Setzen des Logging-Intervals auf \<x\> Sekunden mit (optional) zu loggenden Parametern \<y1\>,\<y2\>,\<y3\>** <br /> Setzt während der Laufzeit das Logging-Intervall auf \<x\> Sekunden und (optional) die Logging-Parameter auf \<y1\>, \<y2\>, \<y3\> etc. <br /> Dabei sind stets alle zu loggenden Parameter anzugeben - also auch (falls gewünscht) diejenigen, die evtl. bereits in der Datei *BSB_lan_config.h* definiert wurden. Nach einem Neustart werden dann wieder nur die Parameter geloggt, die in der Datei *BSB_lan_config.h* definiert wurden. <br /> *Hinweis:* Das Logging muss durch das Definement `#define LOGGING` in der Datei *BSB\_lan\_config.h* aktiviert werden und kann initial anhand der Variablen `log_parameters` und `log_interval` konfiguriert werden.  
|  **/LB=\<x\>**            | **Konfiguration des Loggens von Bus-Telegrammen: Nur Broadcasts (\<x\>=1) oder alle Telegramme (\<x\>=0)** <br /> Wenn Bus-Telegramme geloggt werden (Parameter 30000 als einzigen Parameter loggen), logge nur die Broadcasts (\<x\>=1) oder alle (\<x\>=0) Telegramme.  
|  **/LU=\<x\>**            | **Konfiguration des Loggens von Bus-Telegrammen: Nur unbekannte (\<x\>=1) oder alle (\<x\>=0) Telegramme loggen** <br /> Wenn Bus-Telegramme geloggt werden (Parameter 30000 als einzigen Parameter loggen), logge nur die unbekannten Command IDs (\<x\>=1) oder alle (\<x\>=0) Telegramme.  
|  **/M\<x\>**              | **Aktivieren (\<x\> = 1) oder Deaktivieren (\<x\> = 0) des Bus-Monitormodus** <br /> Standardmäßig ist der Monitor-Modus deaktiviert (\<x\>=0). <br /> Wenn \<x\> auf 1 gesetzt wird, werden alle Bytes auf dem Bus überwacht. Telegramme werden durch Umbruchzeichen als solche erkannt. Jedes Telegramm wird im Hex-Format auf der seriellen Konsole mit einem Zeitstempel in Millisekunden dargestellt. Die Ausgabe der Überwachung betrifft nur die serielle Konsole des Arduino, die html-Ausgabe bleibt unverändert. <br /> Zum Deaktivieren des Monitor-Modus ist \<x\> wieder auf 0 zu setzen (URL-Befehl: `/M0`).  
|  **/N**                   | **Reset & Neustart des Arduino (Dauer: ca. 15 Sekunden)** <br /> *Hinweis:* Die Funktion muss zuvor in der Datei *BSB\_lan\_config.h* aktiviert werden: `#define RESET`!  
|  **/NE**                  | **Reset & Neustart des Arduino (Dauer: ca. 15 Sekunden) und löschen des EEPROMs** <br /> *Hinweis:* Die Funktion muss zuvor in der Datei *BSB\_lan\_config.h* aktiviert werden: `#define RESET`!  
|  **/P\<x\>**              | **Bus-Typ (BSB, LPB oder PPS) vorübergehend ändern: \<x\> = 0 → BSB \| 1 → LPB \| 2 → PPS** <br />    Wechselt zwischen BSB (\<x\>=0), LPB (\<x\>=1) und PPS (\<x\>=2). Nach einem Reset/Neustart des Arduino wird die Einstellung aus der Datei *BSB\_lan\_config.h* verwendet. Um den Bus-Typ dauerhaft festzulegen, sollte die Option `setBusType config` in der Datei *BSB\_lan\_config.h* entsprechend angepasst werden.     
|  **/P\<x\>,\<y\>,\<z\>**  | **Bus-Typ und zusätzlich die eigene oder die Zieladresse mittels URL-Befehl wechseln** <br /> \<x\> = Bus (0 = BSB, 1 = LPB, 2 = PPS), <br /> \<y\> = eigene Adresse und <br /> \<z\> = Zieladresse <br /> Leerwerte bei den Adressen belassen den bisherigen Wert (= voreingestellte Adresse).    
|  **/Q**                   | **Überprüfen auf nicht-freigegebene reglerspezifische Parameter**  
|  **/R\<x\>**              | **Frage den Reset-Wert für Parameter \<x\> ab** <br /> Im Display der integrierten Heizungssteuerung gibt es für einige Parameter eine Reset-Option. Ein Reset wird vorgenommen, indem das System nach dem Reset-Wert gefragt wird und dieser anschließend gesetzt wird.  
|  **/S\<x\>=\<y!z\>**        | **Setze Wert \<y\> für den Parameter \<x\> mit optionaler Zieladresse \<z\>** <br /> Die gewünschte Gerätezieladresse ist als \<z\> einzufügen, wenn \<!z\> nicht eingegeben wird, wird die Standardzieladresse verwendet. Um einen Parameter auf \'abgeschaltet/deaktiviert\' zu setzen, muss lediglich ein leerer Wert eingefügt werden: `http://<ip-address>/S<x>=`.  
|  **/T**                   | **Abfragen zusätzlich angeschlossener Sensoren (DS18B20/DHT22)** <br /> Gibt die jeweiligen Werte von optional angeschlossenen Sensoren aus. Bei DS18B20-Sensoren wird die spezifische SensorID und die Temperatur angezeigt, bei DHT22-Sensoren die Temperatur sowie die relative und absolute Luftfeuchtigkeit.  
|  **/V\<x\>**              | **Aktivieren (\<x\> = 1) oder Deaktivieren (\<x\> = 0) des Verbositätsmodus** <br /> Der voreingestellte Verbositäts-Level ist 1. Somit wird standardmäßig der Bus überwacht und alle Daten werden zusätzlich im Raw-Hex-Format dargestellt. <br /> Soll der Modus deaktivert werden, so ist \<x\> auf 0 zu setzen (URL-Befehl: `/V0`). <br /> Der Verbositäts-Level betrifft sowohl die serielle Konsole des Arduino als auch (optional) das Loggen der Bus-Daten auf die microSD-Karte, so dass die Speicherkarte u.U. sehr schnell voll wird! Im Fall des Loggens auf die interne microSD-Karte ist es daher empfehlenswert, den Verbostitätsmodus bereits in der Datei *BSB\_lan\_config.h* zu deaktivieren (byte verbose = 0). <br /> Die html-Ausgabe bleibt mit /V1 unverändert.  
|  **/X**                   | **Abfragen optionaler MAX!-Thermostate** <br /> Abfragen und Anzeigen der Temperaturen von optionalen MAX!-Thermostaten. <br /> *Hinweis:* MAX!-Komponenten müssen zuvor in der Datei *BSB\_lan\_config.h* definiert werden!  
   

    
---
    
## 8.2 Spezialfunktionen  
    
---
    
### 8.2.1 Raumtemperatur übermitteln
Mittels einer INF-Nachricht kann eine Raumtemperatur an den Regler
gesendet werden, um einen Raumeinfluss bei der Berechnung der
VL-Temperatur geltend zu machen.  
Um die Funktion zu nutzen, muss BSB-LAN Schreibzugriff gewährt werden (s. [Kap. 5](https://github.com/1coderookie/BSB-LPB-LAN/blob/master/docs/kap05.md)).  
   
Für die Raumtemperatur HK1 ist der Spezialparameter 10000, für den
HK2 der Parameter 10001 zu nutzen.

***Beispiel:***  
*Der URL-Befehl für den HK1, um eine Raumtemperatur von
19.5°C zu übermitteln, lautet: `http://<IP-Adresse>/I10000=19.5`*

***Hinweis:***  
*Um diese Funktion zu nutzen, muss die Funktion ‚Raumeinfluss' vorher im
Regler aktiviert und der Einflussfaktor prozentual festgelegt werden
(Parameter 750 für HK1, Parameter 1050 für HK2).  
Wird nur ein Temperaturwert als Einflussfaktor gemessen und übermittelt,
ist die Temperaturmessung in einem Führungs- / Referenzraum zu
empfehlen, in dem sich keinerlei weitere Wärmequelle (bspw. Kaminofen,
große Fenster in Südlage etc.) befindet.*  
    
***Hinweis zum „Raumeinfluss“ bei Berücksichtigung der Raumtemperatur***    
*FHEM-Forumsuser „freetz“ hat die Funktionsweise bzw. das Modell hinter dem „Raumeinfluss“ (Parameter 750) entschlüsselt, so dass die Auswirkungen auf die Vorlauftemperatur verständlicher geworden sind. Vielen Dank dafür!*  
Sein Beitrag sowie eine Excel-Tabelle zur Berechnung findet sich [hier](https://forum.fhem.de/index.php/topic,29762.msg754102.html#msg754102).  
  
Im Folgenden ein Auszug aus seinem Beitrag:  
  
dTV = dTRw * (1 + s)
wobei:
dTV = resultierende Vorlauftemperaturabweichung
dTRw = Raumsollwertkorrektur
s = Heizkurvensteilheit (Parameter 720)  
  
Die Raumsollwertkorrektur dTRw berechnet sich wie folgt:
dTRw = dTR * Raumeinfluss (Parameter 750) / 10
wobei:
dTR = Differenz Raumtemperatur-Ist - Raumtemperatur-Soll  
  
Zusammengeführt lautet die Formel dann:
dTV = dTR * Raumeinfluss / 10 * (1 + s)  
  
Bei einer Heizkurve von 1,5 und einer Raumtemperaturabweichung Ist/Soll von 2 Grad und einem Raumtemperatureinfluss von 25% bedeutet das:  
  
dTV = 2 * 25 / 10 * (1 + 1,5) = 12,5 °C Vorlauftemperaturveränderung
  
Bei 4 °C Abweichung (z.B. nach Ende der Nachtabsenkung) wäre man dann schon bei 25 Grad höherer VL-Temperatur, was vermutlich mehr ist, als das, was man bei Schnellaufheizung (Parameter 770) hinterlegen würde. Die Therme schaltet darüber hinaus bei Erreichen der Raumtemperaturbegrenzung (Parameter 760) auch bei einem RT-Einfluss von nur 1% ab. Für mich hat das die Konsequenz, dass ich den Einfluss auf max. 20% ansetzen werde. Vielleicht reicht sogar 1%, wenn die Heizkurve als solches gut eingestellt ist und der Einfluss dann nur dafür verwendet wird, bei Erreichen der RT-Begrenzung abzuschalten.  
   
---
    
### 8.2.2 Präsenztaste simulieren
Die Funktion der Präsenztaste ist mit dem Spezialparameter 701 (für HK1)
und 1001 (für HK2) implementiert und als SET-Befehl auszuführen. Die
genannten Parameter müssen schreibbar sein (s. Kap. [5](kap05.md)). Der Parameter (701) ist NICHT abrufbar.

Bei aktivem Automatikprogramm ist dabei `http://<IP-Adresse>/S701=1` für
den Wechsel auf ‚Betriebsart Reduziert' und `http://<IP-Adresse>/S701=0`
für den Wechsel auf ‚Betriebsart Komfort' zu setzen.  
Der jeweilige Wechsel ist bis zur nächsten Betriebsart-Umschaltung laut
Zeitprogramm gültig. ***Die Präsenztaste ist nur im Automatikbetrieb wirksam!***

    
---
    
### 8.2.3 Manuellen TWW-Push ausführen
Bei einigen Reglern ist die (nahezu undokumentierte) Funktion eines
manuellen Trinkwasser-Pushs verfügbar. Um einen manuellen TWW-Push
auszulösen, muss dazu die TWW-Taste an der ISR-Bedieneinheit gedrückt
und für etwa drei Sekunden gehalten werden, bis im Display eine
entsprechende Meldung erscheint.

Bei einigen Reglern kann diese Funktion mittels eines SET-Befehls
erfolgen. Dieser lautet `http://<IP-Adresse>/S1601=1` - der
Spezialparameter 1601 muss dazu schreibbar sein (s. Kap. [5](kap05.md)).
    
---
    
### 8.2.4 Abrufen und Steuern mittels JSON
***Hinweis:***    
*Diese Funktion ist derzeit noch in der (Weiter-)Entwicklung,
es kann also noch Veränderungen hinsichtlich der Befehle und/oder
Funktionen geben!*

Parameterabfragen sowie das Setzen von Werten kann ebenfalls mittels
JSON erfolgen.

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
    Empfangen: "Parameter", "Value", "Unit", "DataType" (0 = Zahl, 1 = ENUM, 2 = Bit-Wert (Dezimalwert gefolgt von Bitmaske gefolgt von ausgewählter Option), 3 = Wochentag, 4 = Stunde/Minute, 5 = Datum/Uhrzeit, 6 = Tag/Monat, 7 = String, 8 = PPS-Uhrzeit (Wochentag, Stunde:Minute))  
    
    http://<IP-Adresse>/JS  
    Senden: "Parameter", "Value" (nur numerisch), "Type" (0 = INF, 1 = SET)  
    Empfangen: "Parameter", "Status" (0 = Fehler, 1 = OK, 2 = Parameter read-only)  
    ```   
      
    Die Abfrage mehrerer Parameter mit einem Befehl ist ebenfalls möglich:  
    Der Befehl `http://<IP-Adresse>/JQ=<x>,<y>,<z>` fragt die Parameter \<x\>, \<y\> und \<z\> ab.  
       
       
-   **Setzen von Parametern per Linux-Kommandozeile oder „[Curl for Windows](https://curl.haxx.se/windows/)“**   
    Exemplarisch am Parameter 700 (Betriebsart HK1) → Setzen auf 1 (automatisch):
    
    Linux-Kommandozeile:   
    ```
    curl -v -H "Content-Type: application/json" -X POST -d '{"Parameter":"700", "Value":"1", "Type":"1"}' http://<IP-Adresse>/JS
    ```

    Curl for Windows:   
    ```
    curl -v -H "Content-Type: application/json" -X POST -d "{\"Parameter\":\"700\", \"Value\":\"1\", \"Type\":\"1\"}" http://<IP-Adresse>/JS
    ```
    
---
    
### 8.2.5 Überprüfen auf nicht-freigegebene reglerspezifische Command IDs
*Hinweis: Es ist empfehlenswert, diese Abfrage einmalig auszuführen.*

`http://<IP-Adresse>/Q`  

Diese Funktion geht alle Command IDs durch, die in der Datei
*BSB\_lan\_defs.h* hinterlegt sind und schickt diejenigen, die nicht für
den eigenen Reglertyp hinterlegt sind, als Anfrage-Parameter (Typ QUR,
0x06) an den Regler.  
Das passiert bei Parametern, bei denen bisher nur eine Command ID
bekannt ist, ständig und erzeugt die bekannten „error 7 (parameter not
supported)"-Fehlermeldungen.

Sobald aber mehr als eine Command ID bekannt ist, bleibt die bisherige
Command ID i.d.R. auf \"DEV\_ALL\", ist also für alle Regler der
Standard, und die neue Command ID wird erst einmal nur für die Therme
freigeschaltet, die diese Command ID gemeldet hat.

Da es aber auch genauso gut umgekehrt sein kann, dass die \"neue\"
Command ID der Standard ist, und die \"alte\" Command ID der Sonderfall,
geht /Q nun die Command IDs durch, die nicht dem eigenen Regler
zugewiesen sind. Häufig können dort noch eine Reihe \"neuer\" Parameter
freigeschaltet werden.

***Zur Info:***  
*Es wird hierbei immer nur eine Anfrage mit einer Command ID an den
Regler geschickt!  
Der Regler beantwortet diese entweder mit einer Fehlermeldung (Typ ERR,
0x08) oder einer Antwort mit einem Datenpaket (Typ ANS, 0x07).  
In keinem Fall werden dabei Werte gesetzt oder Reglereinstellungen
verändert! Dafür müsste ein ganz anderer Telegramm-Typ gesetzt werden
(entweder Typ SET, 0x03 oder Typ INF, 0x02) - das macht /Q explizit
nicht!*  

Wenn bereits alle Parameter für den Reglertyp bekannt und freigegeben
sind, sieht die auf `http://<IP-Adresse>/Q`
folgende Webausgabe exemplarisch so aus (*Anmerkung: Hier handelt es sich noch um die Ausgabe mit einer veralteten BSB-LAN-Version, eine Beispielausgabe mit der aktuellen BSB-LAN-Version folgt!*):
    
```
Gerätefamilie: 90  
Gerätevariante: 100  
Start Test...  
Test Ende.  
```
    
Eine entsprechende Webausgabe bei bisher nicht-freigegebenen Parametern
für den spezifischen Regler hingegen sieht exemplarisch so aus (*Anmerkung: Hier handelt es sich noch um die Ausgabe mit einer veralteten BSB-LAN-Version, eine Beispielausgabe mit der aktuellen BSB-LAN-Version folgt!*):
    
```
Gerätefamilie: 90  
Gerätevariante: 100  
Start Test...  
2214  
DC 86 00 0B 06 3D 0D 08 EB E7 3A  
DC 80 06 0E 07 0D 3D 08 EB 00 0F 00 1B 94 5024  
5024 Trinkwasserspeicher - TWW Schaltdifferenz 1 ein: error 7 (parameter not supported)  
DC 86 00 0B 06 3D 31 07 1D C8 19  
DC 80 06 0E 07 31 3D 07 1D 00 01 40 A6 94 6031  
6031 Konfiguration - Relaisausgang QX22 Modul 1: error 7 (parameter not supported)  
DC 86 00 0B 06 3D 05 07 86 E3 AE  
DC 80 06 0D 07 05 3D 07 86 00 00 2C 55 8314  
8314 Diagnose Erzeuger - Kesselrücklauftemperatur Ist: error 7 (parameter not supported)  
DC 86 00 0B 06 3D 11 05 1A 58 5A  
DC 80 06 0E 07 11 3D 05 1A 01 00 00 91 09  
Test Ende.  
```  
    
In diesem Fall sollte die Webausgabe bitte kopiert und im [FHEM-Forum](http://forum.fhem.de/index.php/topic,29762.0.html) oder via Email an Frederik oder mich (Ulf) gemeldet werden,
damit eine entsprechende Anpassung vorgenommen werden kann.  
        
---
    
### 8.2.6 Gasthermen: Interne Gasenergiezählung (falls vorhanden) aktivieren    
Bei einigen Gasthermen-Modellen (vermutlich nur mit Reglertyp LMS14 und LMS15) ist eine interne (überschlägige) Gasenergiezählung unter den Parametern 8378-8383 verfügbar. Diese ist jedoch i.d.R. ab Werk nicht aktiviert.  
Eine Aktivierung muss bei *Parameter 2550* (Menü "Kessel", Fachmann-Ebene) vorgenommen werden. (Wie immer bei Parametern in der Fachmann-Ebene sollte dies nur von einem Heizungsfachmann durchgeführt werden.)  
      
Des Weiteren kann die interne Gasenergiezählung mit einem Korrekturfaktor an die Messung des Gaszählers angepasst werden. Dieser Faktor steht ab Werk auf 1,0 ist unter *Parameter 2551* einzustellen. 
Der Faktor ist wie folgt (in etwa) zu errechnen:  

*Angezeigter Verbrauch des internen Zählers zu hoch*  
Angezeigter Verbrauch des Gaszählers (a): 5000kWh  
Angezeigter Verbrauch der internen Zählung (b): 5500kWh  
Berechnung: `a/b = Korrekturfaktor`  
Diesem Beispiel folgend: 5000kWh/5500kWh=0,90909. Einzustellen ist also 0,9 oder 0,91.  

*Angezeigter Verbrauch des internen Zählers zu niedrig*  
Angezeigter Verbrauch des Gaszählers (a): 1300kWh  
Angezeigter Verbrauch der internen Zählung (b): 1000kWh  
Berechnung: `b/a = Korrekturfaktor`  
Diesem Beispiel folgend: 1300kWh/1000kWh=1,3. Einzustellen ist also 1,3.  
    
Im Zuge der Aktivierung von 2550 sollte der *Parameter 1630* "TWW-Ladevorrang" auf 'absolut' eingestellt werden, da ansonsten bei einer TWW-Ladung mit gleichzeitiger Heizbetriebsanforderung der Verbrauch nur für den Zähler des Heizbetriebs berücksichtigt wird.  
    
***Hinweise:***  
    
*Bei der heizungsseitigen, internen Gasenergiezählung handelt es sich um eine überschlägige Berechnung, sie ist also nich so genau wie der angezeigte Verbrauch auf dem Gaszähler. Für einen Vergleich der beiden Verbrauchswerte und die daraus resultierende Einstellung des Korrekturfaktors sollte der Messzeitraum mindestens vier Wochen betragen. Auch danach sollten die Werte immer mal wieder verglichen und der Korrekturfaktor ggf. angepasst werden.*  
    
*Der Verbrauch des Gaszählers wird üblicherweise in Kubikmetern (m³) angezeigt, nicht in Kilowattstunden (kWh). Zur Berechnung der kWh aus den verbrauchten m³ muss folgende Formel angewendet werden:*  
`kWh = m³ x Brennwert x Zustandszahl`  
*Die m³ werden vom Gaszähler abgelesen, der Brennwert sowie die Zustandszahl sind i.d.R. auf der Gasrechnung vermerkt oder beim Energieversorger zu erfragen.*  
    
    
--- 
    
### 8.2.7 Datum, Uhrzeit und Zeitprogramme verändern   
Das Verändern der Uhrzeit und der Zeitprogramme ist nur über einen speziellen URL-Befehl möglich, es ist *nicht* über das Webinterface möglich.  
Um die Funktion zu nutzen, muss BSB-LAN Schreibzugriff gewährt werden (s. Kap. [5](kap05.md)).  
  
*Datum und Uhrzeit verändern*  
Der folgende Befehl stellt das Datum auf den 04.01.2019 und die Uhrzeit auf 20:15 Uhr:  
`/S0=04.01.2019_20:15:00`  
Mit dieser Funktion ist es möglich, die Uhrzeit- und Datumseinstellungen bspw. mit einem NTP Zeitserver abzugleichen. 
   
*Zeitprogramme verändern*  
Der folgende Befehl setzt das Zeitprogramm für *Mittwoch* beim Heizkreis 1 (Parameter 502) auf 05:00-22:00 Uhr:  
`/S502=05:00-22:00_xx:xx-xx:xx_xx:xx-xx:xx`  
     
---  
   
### 8.2.8 Übermitteln einer alternativen Außentemperatur   
Bei bestimmten Reglermodellen ist es möglich, diverse Funkkomponenten anzuschließen, u.a. auch einen Funk-Außentemperaturfühler. Mittels BSB-LAN ist es bei diesen kompatiblen Reglern möglich, dem Heizungsregler eine anderweitig ermittelte Außentemperatur (AT) zu übermitteln. Dies ist insbesondere für Nutzer komplexerer Hausautomationsinstallationen interessant, die bspw. eine Wetterstation an einem günstigeren Standort als dem des heizungsseitigen Außentemperaturfühlers installiert haben.  
   
Als kompatible Regler sind bisher einige Reglermodelle der Reihen [LMS](kap03.md#3212-lms-regler) und [RVS](kap03.md#3222-rvs-regler) gemeldet worden (Stand Oktober 2019). Ältere Reglergenerationen wie bspw. [LMU](kap03.md#3211-lmu-regler) oder [RVA](kap03.md#3221-rva--und-rvp-regler) sind anscheinend nicht kompatibel.  
   
Um zu testen, ob der eigene Regler kompatibel ist, kann -zusätzlich neben der Überprüfung des Reglertyps- im Vorfeld `<ip>/Q` oder gezielt ein Abruf der Parameter `<ip>/10003/10004` ausgeführt werden.  
Wenn als Rückmeldung bei Parameter 10003 die Außentemperatur (oder "---") angezeigt wird, so ist die Funktion nach bisherigem Kenntnisstand verfügbar.  
Wenn hingegen ein "error 7" gemeldet wird, so ist die Funktion leider nicht verfügbar.  
   
Im Zweifelsfall sollte einfach versucht werden, eine alternative AT wie nachfolgend beschrieben zu senden. Ein nachfolgender Abruf des Parameters 8700 gibt Aufschluss darüber, ob der zuvor gesendete Wert übernommen wurde.   
      
Für die Verwendung der Funktion der alternativen Außentemperaturübermittlung mittels BSB-LAN muss der kabelgebundene Außentemperaturfühler der Heizung zwingend vom Regler getrennt werden (da der Regler die alternative AT ansonsten scheinbar nicht annimmt). Die darauf folgende Fehlermeldung des Heizungsreglers "Fehler 10: Aussenfühler" scheint den Betrieb zwar nicht zu stören, kann/sollte aber abgeschaltet werden. Dazu führt man den Parameter 6200 "Fühler speichern" einmal aus (auf JA stellen und bestätigen). Soll der kabelgebundene Fühler irgendwann wieder zum Einsatz kommen, so sollte nach erfolgtem Anschluss erneut Parameter 6200 "Fühler speichern" (-> JA -> bestätigen) ausgeführt werden. Somit ist der kabelgebundene AT-Fühler wieder im Heizungsregler registriert.  
    
Der Funk-Außentemperaturfühler scheint die gemessene AT ca. minütlich zu übermitteln. Bleibt diese Meldung aus, so scheint der Regler nach etwa 10-11 Minuten auf einen intern hinterlegten Wert zurückzugreifen. Zusätzlich erscheint die o.g. Fehlermeldung erneut. Es ist also empfehlenswert, die alternative AT via BSB-LAN etwa alle ein bis zwei Minuten zu übertragen.  
   
Um die Funktion zu nutzen, muss BSB-LAN Schreibzugriff gewährt (s. Kap. [5](kap05.md)) und die AT mit dem Befehl  
`<ip>/I10003=xx`  
übermittelt werden, wobei xx die betreffende AT in °C ist. Nachkommawerte sind möglich, als Komma ist ein Punkt einzufügen.  
   
*Beispiel:*  
Mit `<ip>/I10003=16.4` wird dem Heizungsregler die AT von 16.4°C mitgeteilt; `<ip>/I10003=9` übermittelt 9°C AT.  
   
*Hinweis:*  
Wird nur bei Parameter 10004 die Außentemperatur angezeigt, so ist die Funktion nach bisherigem Kenntnisstand nicht verfügbar. Das Übermitteln der alternativen AT kann in diesem Fall aber trotzdem wie beschrieben getestet werden, allerdings muss dann der Parameter 10004 anstelle von 10003 verwendet werden: `<ip>/10004=xx`.  
   
---
   
     
[Weiter zu Kapitel 9](kap09.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

