[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 9](kap09.md)    
    
---
    

    

# 10. Auslesen neuer Parameter-Telegramme

In diesem Kapitel wird die Vorgehensweise des Auslesens neuer
Parameter-Telegramme beschrieben. Es ist dabei in eine ausführliche
Beschreibung für Einsteiger, eine kurzgefasste Beschreibung für
erfahrene Nutzer sowie eine Beschreibung des Implementierens neuer
Command IDs für Nutzer mit Programmierkenntnissen aufgegliedert.

Um das Nachfolgende nicht in jedem Abschnitt aufzuführen, sei es hier
einleitend erwähnt:

Sollte ein Parameter mehrere Einstellungsoptionen bieten, so wären
idealerweise alle Optionen durchzugehen und die einzelnen Telegramme mit
der eindeutigen Bezeichnung der jeweiligen Option zu notieren.
Erfahrungsgemäß muss hierfür jedoch jede Option einmal mittels „OK" der
Bedieneinheit bestätigt und somit eingestellt werden, nach Beendigung
sollte dann wieder die ursprüngliche Einstellung vorgenommen werden.
Solltest du dir bzgl. des Verstellens bestimmter Reglereinstellungen
hinsichtlich möglicher Folgen unsicher sein, belasse es bitte im
Zweifelsfall beim Auslesen der aktuell eingestellten Option.  
Für den Fall, dass mehrere Einstellungsoptionen verfügbar sind, ist es
jedoch wichtig, dass in jedem Fall die aufgezählte Reihenfolge der
Optionen mit der in der Bedieneinheit angezeigten Reihenfolge
übereinstimmt und die aktuelle Einstellung notiert wird!

Nachdem das Auslesen der neuen Telegramme abgeschlossen ist, kann bei
Bedarf (bspw. wenn Daten auf die microSD-Karte geloggt werden) der
Verbositäts-Modus wieder deaktiviert werden (`http://<IP-Adresse>/V0`).

Rufe nun bitte zusätzlich einmal /Q (`http://<IP-Adresse>/Q`) und /6220-6236 (`http://<IP-Adresse>/6220-6236`) im Webinterface
auf und füge sie zu deinen Notizen
hinzu, ebenso wie den Hersteller, die genaue Modellbezeichnung des
Heizungssystems sowie den von dir verwendeten Bustyp (BSB/LPB/PPS).

*Ein Beispiel für eine verwertbare Auflistung neuer Parameter und den
entsprechenden Zusatzangaben findest du im Kap. [10.4](kap10.md#104-beispiel-für-eine-meldedatei).*

Wenn du alles abgeschlossen hast, speichere deine Auflistung bitte als
einfache .txt-Datei. Schicke die Datei nun entweder an `bsb [ät]
code-it.de` oder melde dich [hier](https://forum.fhem.de/index.php/topic,29762.0.html) im FHEM-Forum.

Vielen Dank für deine Unterstützung!
    
---
    
## 10.1 Ausführliche Beschreibung des Auslesens neuer Telegramme (für Einsteiger)

***Achtung:***  
*Bitte beachte auch die einleitenden Hinweise am Anfang des Kapitels!*

Um die entsprechenden Telegramme neuer Parameter auszulesen, muss das
Hardware-Setup (Arduino, LAN-Shield, Adapter und die Verbindung mit dem
Heizungsregler) sowie die Installation der BSB-LAN-Software
abgeschlossen und verwendungsfähig sein. Der Zugriff auf das
Webinterface von BSB-LAN muss ebenfalls gegeben sein.

Zusätzlich zur bestehenden Verkabelung muss nun der Arduino mit deinem
Laptop/PC via USB verbunden werden.

Starte dann die Arduino IDE und wähle unter „Menü Werkzeuge → Port" den
korrekten USB-Anschluss aus.  
Überprüfe außerdem, ob unter „Menü Werkzeuge → Board → Arduino Mega
2560" und unter „Menü Werkzeuge → Prozessor → Atmega 2560" ausgewählt
ist.

Starte nun den seriellen Monitor unter „Menü Werkzeuge → Serieller
Monitor" und überprüfe, ob unten rechts in der Fußzeile „115200 Baud"
eingestellt ist.

Aktiviere dann den Verbositäts-Modus mit dem URL-Befehl
`http://<IP-Adresse>/V1` im Webinterface von BSB-LAN. Bereits jetzt
werden schon einige Informationen und Telegramme im seriellen Monitor
dargestellt.

Schalte als nächstes beim Heizungssystem über die integrierte
Bedieneinheit zu dem Parameter, den du analysieren möchtest (mittels des
Drehrades, der Pfeiltasten oder der spezifischen Eingabemöglichkeiten
deiner Heizungssteuerung).

Warte auf \'Ruhe\' auf dem Bus, dann schalte einen Parameter weiter vor
und gleich wieder zurück zu dem Parameter, den du analysieren möchtest.
Das Hin- und Herschalten soll nur sicherstellen, dass die letzte
Nachricht auf dem Bus wirklich der Parameter ist, den du suchst.  
Nun solltest du das spezifische Parameter-Telegramm in der Ausgabe des
seriellen Monitors sehen.  
Solange in der Bedieneinheit der aufgerufene Parameter angezeigt wird,
kommt in etwa zehnsekündigem Abstand regelmäßig das entsprechende
Telegramm über den Bus.  
Aber Achtung: Der Heizungsregler sendet zwischendurch automatisch auch
andere Status-Telegramme (die sogenannten ‚broadcasts') - sei daher
bitte aufmerksam beim Auslesen des gewünschten neuen
Parameter-Telegramms!

***Beispiel:***
    
```
DISP->HEIZ QUR 113D305F  
DC 8A 00 0B 06 3D 11 30 5F AB EC  
    
HEIZ->DISP ANS 113D305F 00 00  
DC 80 0A 0D 07 11 3D 30 5F 00 00 03 A1  
    
**DISP->HEIZ QUR 113D3063**  
**DC 8A 00 0B 06 3D 11 30 63 5C 33**  
    
**HEIZ->DISP ANS 113D3063 00 00 16**  
**DC 80 0A 0E 07 11 3D 30 63 00 00 16 AD 0B**  
```
    
Die ersten vier Zeilen in obigem Beispiel sind von dem Parameter, zu dem
hingeschaltet wurde. Die letzten vier Zeilen (hier im Beispiel mit zusätzlichen Sternchen `**` gekennzeichnet) stammen von dem Parameter, den du nun analysieren
möchtest.  
QUR bedeutet Anfrage, ANS die zugehörige Antwort. Anstelle von DISP wird
eventuell RGT1 oder RGT2 angezeigt, dies ist abhängig vom jeweiligen
Gerät, mit dem du die Eingaben am Heizungssystem tätigst (integrierte
Steuerung oder angeschlossenes Raumgerät/Fernbedienung) und nicht weiter
von Interesse.

Hast du nun also das betreffende Telegramm entdeckt, bietet es sich an,
in der Fußzeile des seriellen Monitors unten links den Haken bei
„Autoscroll" durch einen Klick auf denselben zu entfernen. Somit bleibt
die Auflistung des seriellen Monitors an dieser Stelle stehen und wird
nicht durch weitere eintreffende Telegramme immer wieder verschoben. Nun
ist es auch möglich, mit copy&paste zu arbeiten.

Markiere und kopiere nun also das entsprechende Frage- und
Antworttelegramm (also die genannten letzten vier Zeilen in obigem
Beispiel) und füge sie in eine Textdatei ein.  
    
***Hinweis:***    
*Copy&paste funktioniert im seriellen Monitor erfahrungsgemäß
nicht immer zuverlässig, also überprüfe bitte jedes Mal beim Einfügen in
die Textdatei, ob es sich auch wirklich um das gewünschte Telegramm
handelt.*

***WICHTIG:***  
*Schreibe nun **zusätzlich** zum Telegramm die entsprechende
Parameternummer, die genaue Parameterbezeichnung sowie ggf. die
jeweilige Werte-Einheit hinzu!*  

*Notiere bitte außerdem die jeweils angezeigte aktive Einstellung bzw.
den im Moment der Abfrage angezeigten Wert! Dies ist zwingend notwendig, da ohne die aufgezählten zusätzlichen
Informationen das reine Telegramm nutzlos ist! *  

Wenn du einen weiteren Parameter auslesen möchtest, wiederhole das
beschriebene Procedere entsprechend. Es bietet sich an, vorher wieder
den Haken bei „Autoscroll" zu setzen, bis du den nächsten zu notierenden
Parameter aufgerufen hast.

Wenn du sämtliche neuen Parameter (und/oder Einstellungsoptionen neuer
Parameter) samt Telegrammen und Beschreibungen etc. notiert und das
Auslesen somit beendet hast, kannst du den seriellen Monitor schließen.  
    
---
    

## 10.2 Kurze Beschreibung des Auslesens neuer Telegramme (für erfahrene Nutzer)

***Achtung:***  
*Bitte beachte auch die einleitenden Hinweise am Anfang des Kapitels!*

Bei angeschlossenem Adapter und eingeschaltetem Regler die Arduino IDE
und den seriellen Monitor starten, dann den Verbositäts-Modus des
Adapters aktivieren (/V1).  
Den betreffenden Parameter an der Regler-Bedieneinheit aufrufen und das
zugehörige Telegramm im seriellen Monitor mittels copy&paste in eine
Textdatei kopieren.

***WICHTIG:***  
*Schreibe nun **zusätzlich** zum Telegramm die entsprechende
Parameternummer, die genaue Parameterbezeichnung sowie ggf. die
jeweilige Werte-Einheit hinzu!*  

*Notiere bitte außerdem die jeweils angezeigte aktive Einstellung bzw.
den im Moment der Abfrage angezeigten Wert!  
Dies ist zwingend notwendig, da das reine Telegramm ohne die
aufgezählten zusätzlichen Informationen nutzlos ist!*

Fahre so für jeden weiteren Parameter fort.  
    
---
    

## 10.3 Implementieren neuer Command IDs (für Programmierer)

Das folgende Procedere sei nur Anwendern empfohlen, die
Programmierkenntnisse haben und die neuen Command IDs eigenständig in
die Datei *BSB\_lan\_defs.h* implementieren möchten.

*Einsteigern wird ausdrücklich die bereits ausführlich beschriebene
Vorgehensweise des Auslesens empfohlen, bei der die neuen Telegramme
letztlich nur ‚gemeldet' werden!*

Zum Auslesen der Telegramme ist prinzipiell die unter 10.2 Kurze
Beschreibung des Auslesens neuer Telegramme (für erfahrene Nutzer)
beschriebene Vorgehensweise zu empfehlen.

Erläuterung der Struktur der Datentelegramme anhand des folgenden
Beispiels:
    
```
HEIZ->DISP ANS 113D3063 00 00 16  
DC 80 0A 0E 07 **11 3D 30 63** 00 00 16 AD 0B  
```
    
Byte 1: Immer 0xDC (Startbyte, Beginn des Telegramms)  
Byte 2: Quellgerät plus 0x80  
(Quellgeräte: 0x00 = Heizungssystem, 0x06 = Raumgerät 1, 0x07 = Raumgerät 2, 0x0A = Display, 0x7F = Broadcast)  
Byte 3: Zielgerät (gleiche Adresswerte wie bei Quellgerät)  
Byte 4: Telegrammlänge (Startbyte des Telegramms wird nicht mitgezählt)  
Byte 5: Nachrichtentyp (0x02 = INF/Info, 0x03 = SET/setzen, 0x04 = ACK/akzeptiert, 0x05 = NACK/nicht akzeptiert, 0x06 = QUR/Abfrage, 0x07 = ANS/Antwort, 0x08 = ERR/Fehler)  
**Byte 6-9: Command ID (→ diese ist es, die wir brauchen!)**  
Byte 10-x: Payload data (optional)  
Letzte zwei Bytes: CRC-Checksumme  
    
1.  Das Datentelegramm im obigen Beispiel hat die Command ID
    **0x113D3063**.  
    Bitte beachte, dass die ersten beiden Bytes der Command ID beim
    Nachrichtentyp \"Abfragen\" (QUR / 0x06) vertauscht sind! Stelle
    daher bitte sicher, dass du stets auf das richtige Telegramm
    achtest: Typ \"Antwort\" (ANS / 0x07).

2.  Suche den Bereich \"*global command table*\" in der Datei
    *BSB\_lan\_defs.h* und überprüfe, ob für diesen Befehl bereits ein
    Eintrag existiert (suche nach STRxxxx , wobei xxxx die
    Parameternummer darstellt). Falls es ihn bereits gibt, fahre fort
    mit Schritt 4.

3.  Sollte der Parameter noch nicht in dem \"*global command table*\"
    gelistet sein, musst du einen Eintrag im Bereich \"*menu strings*\"
    wie folgt erstellen:

    `const char STRxxxx[] PROGMEM = "Parameter_Name_or_Function";`

    Nun kopiere eine Zeile des Bereichs vom \"*global command table*\",
    wo der neue Parameter numerisch passt. Fahre fort mit Schritt 4,
    aber anstatt CMD\_UNKNOWN zu ersetzen, müssen logischerweise die
    Command ID und der Wertetyp der kopierten Zeile ersetzt werden.

4.  Ersetze CMD\_UNKNOWN durch die Command ID, die du gerade
    herausgefunden hast.  
    Falls der zurückgegebene Wertetyp (column 3) VT\_UNKNOWN ist,
    versuche herauszufinden, welcher Parametertyp von der Liste am
    Anfang der Datei passt.

    ***Beispiel:***    
    *Wenn der Parameter einen Temperaturwert zurückgeben soll, kannst du
    VT\_TEMP, VT\_TEMP\_SHORT, VT\_TEMP\_SHORT5 oder VT\_TEMP\_WORD
    ausprobieren.\
    Für Parameter, die mehrere Optionen bereitstellen, musst du eine
    entsprechende Zeile im Abschnitt \"*ENUM tables\*\" hinzufügen.*

5.  Wenn der Adapter den gleichen Wert ausgibt wie auf dem Display der
    integrierten Heizungssteuerung dargestellt, hast du den richtigen
    Wert gefunden und der Parameter ist nun voll funktionsfähig (bspw.
    sollte das Abfragen und Setzen von Werten nun funktionieren).
    Herzlichen Glückwunsch!

6.  Wenn du fertig bist, überprüfe nochmals, ob die neue Command ID
    nicht bereits irgendwo anders in *BSB\_lan\_defs.h* verwendet wird
    (wenn du bspw. nach der Command ID suchst, sollte sie nur einmal
    gefunden werden).  
    Da das BSB-Protokoll anscheinend nicht standardisiert ist und die
    unterschiedlichen Hersteller (zumindest bei spezifischeren
    Parametern) keine Rücksicht darauf zu nehmen scheinen, wie andere
    Hersteller die Command IDs verwenden, ist es möglich, dass gleiche
    Command IDs für verschiedene Parameter bei verschiedenen
    Heizungssystemen existieren. Sollte es passieren, dass eine Command
    ID nun doppelt in der Datei *BSB\_lan\_defs.h* existiert, markiere
    diese bitte deutlich bevor du uns das Update schickst und teile uns
    bitte mit, welches Heizungssystem genau du verwendest (/Q).
    Wir werden dann bedingungsabhängige Compiler-Flags hinzufügen, so
    dass das Heizungssystem X anders kompiliert wird als Heizungssystem
    Y und somit letztlich beide Systeme die mehrdeutigen Command IDs für
    die korrekten Parameter nutzen können.

7.  Bitte sende die neuen bzw. aktualisierten Zeilen an `bsb [ät]
    code-it.de` oder poste sie [hier](https://forum.fhem.de/index.php/topic,29762.0.html) im FHEM-Forum.  

    Solltest du eine Diff-Datei nutzen, überprüfe bitte vor dem
    Erstellen nochmals, ob du wirklich die aktuelle *BSB\_lan\_defs.h*
    des GitHub-Repositoriums heruntergeladen hast, da manchmal die
    Dateien aktualisiert werden, ohne dass direkt eine neue Version
    veröffentlicht wird.  
    
---
    
    
## 10.4 Beispiel für eine ‚Meldedatei'

Hier ein Beispiel für eine erstellte ‚Meldedatei', die alle notwendigen
Informationen für eine weitere Verarbeitung und Implementierung der
neuen Parameter enthält (*Achtung: Dies ist noch ein altes Beispiel, aktuell rufe bitte /Q sowie /6220-6236 auf! Ein aktuelles Beispiel folgt!*):  
    
```
Brötje NovoCondens SOB 26 C (Öl)  
Anschluss: BSB  
    
6220 Konfiguration - Software- Version: 1.3  
6221 Konfiguration - Entwicklungs-Index: error 7 (parameter not supported)  
6222 Konfiguration - Gerätebetriebsstunden: 12345 h  
6223 Konfiguration - Bisher unbekannte Geräteabfrage: unknown type 000014  
6224 Konfiguration - Geräte-Identifikation: RVS43.222/100  
6225 Konfiguration - Gerätefamilie: 96  
6226 Konfiguration - Gerätevariante: 100  
6227 Konfiguration - Objektverzeichnis-Version: 1.0  
6228 Konfiguration - Bisher unbekannte Geräteabfrage: unknown type 000014  
    
Parameter 2270 Kessel -- Rücklaufsollwert Minimum °C  
→ wird vom Arduino/BSB bei Abfrage mit 60°C angezeigt,
angezeigter Ist-Wert laut RGT-Bedieneinheit: 8°C  
RGT1->HEIZ QUR 053D0908  
DC 86 00 0B 06 3D 05 09 08 B0 E7  
HEIZ->RGT1 ANS 053D0908 00 02 00  
DC 80 06 0E 07 05 3D 09 08 00 02 00 4B 02  
    
Parameter 5010 Trinkwasserspeicher -- Ladung  
Mögliche Parameteroptionen: [Einmal/Tag | Mehrmals/Tag]  
Ist: Mehrmals/Tag  
RGT1->HEIZ QUR 253D0737  
DC 86 00 0B 06 3D 25 07 37 D2 92  
HEIZ->RGT1 ANS 253D0737 00 FF  
DC 80 06 0D 07 25 3D 07 37 00 FF CE 62  
    
Parameter 5050 Trinkwasserspeicher -- Ladetemperatur Maximum °C  
Mögliche Einstelloptionen: [8°C - 90°C]  
Ist: 60°C  
RGT1->HEIZ QUR 253D08A3  
DC 86 00 0B 06 3D 25 08 A3 01 91  
HEIZ->RGT1 ANS 253D08A3 00 0F 00  
DC 80 06 0E 07 25 3D 08 A3 00 0F 00 0D 90  
```        
     
       
    
---
    

[Weiter zu Kapitel 11](kap11.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

