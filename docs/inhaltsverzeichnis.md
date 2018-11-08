[1. Der BSB-LPB-LAN-Adapter und die BSB-LAN-Software](kap01.md)  
[2. Grundsätzliches zum BSB, LPB und zur PPS-Schnittstelle](kap02.md)  
[2.1 BSB und LPB](kap02.md#21-bsb-und-lpb)  
[2.2 PPS-Schnittstelle](kap02.md#22-pps-schnittstelle)  
[3. Unterstützte Heizungssysteme und Regler](kap03.md)  
[3.1 Erfolgreich getestete Heizungssysteme](kap03.md#31-erfolgreich-getestete-heizungssysteme)  
[3.1.1 Brötje](kap03.md#311-brötje)  
[3.1.2 Elco](kap03.md#312-elco)  
[3.1.3 Weitere Hersteller](kap03.md#313-weitere-hersteller)  
[3.2 Detailliertere Auflistung und Beschreibung der unterstützten Regler](kap03.md#32-detailliertere-auflistung-und-beschreibung-der-unterstützten-regler)  
[3.2.1 LMx-Regler](kap03.md#321-lmx-regler)  
[3.2.2 RVx-Regler](kap03.md#322-rvx-regler)  
[3.2.2.1 RVA- und RVP-Regler](kap03.md#3221-rva--und-rvp-regler)  
[3.2.2.2 RVS-Regler](kap03.md#3222-rvs-regler)  
[3.3 Hinweis: Neue Modellgeneration - NICHT unterstützter Regler von Brötje](kap03.md#33-hinweis-neue-modellgeneration---nicht-unterstützter-regler-von-brötje)  
[4. Installation der Arduino IDE und Konfiguration des Adapters](kap04.md)  
[5. Einstellungsrelevante Parameter der BSB-LAN-Software](kap05.md)  
[6. Funktionsüberprüfung und erste Nutzung des Adapters](kap06.md)  
[7. BSB-LAN Web - das Webinterface des Adapters](kap07.md)  
[8. URL-Befehle und Spezialfunktionen](kap08.md)  
[8.1 Auflistung und Beschreibung der URL-Befehle](kap08.md#81-auflistung-und-beschreibung-der-url-befehle)  
[8.2 Spezialfunktionen](kap08.md#82-spezialfunktionen)  
[8.2.1 Raumtemperatur übermitteln](kap08m.d#821-raumtemperatur-übermitteln)  
[8.2.2 Präsenztaste simulieren](kap08.md#822-präsenztaste-simulieren)  
[8.2.3 Manuellen TWW-Push ausführen](kap08.md#823-manuellen-tww-push-ausführen)  
[8.2.4 Abrufen und Steuern mittels JSON](kap08.md#824-abrufen-und-steuer-mittels-json)  
[8.2.5 Überprüfen auf nicht-freigegebene reglerspezifische Command IDs](kap08.md#825-überprüfen-auf-nicht-freigegebene-reglerspezifische-command-ids)  
[9. Loggen von Daten](kap09.md)  
[9.1 Verwendung des Adapters als Standalone-Logger mittels BSB-LAN](kap09.md#91-verwendung-des-adapters-als-standalone-logger-mittels-bsb-lan)  
[9.2 Verwendung des Adapters als Remote-Logger](kap09.md#92-verwendung-des-adapters-als-remote-logger)  
[10. Auslesen neuer Parameter-Telegramme](kap10.md)  
[10.1 Ausführliche Beschreibung des Auslesens neuer Telegramme (für Einsteiger)](kap10.md#101-ausführliche-beschreibung-des-auslesens-neuer-telegramme-für-einsteiger)    
[10.2 Kurze Beschreibung des Auslesens neuer Telegramme (für erfahrene Nutzer)](kap10.md#102-kurze-beschreibung-des-auslesens-neuer-telegramme-für-erfahrene-nutzer)  
[10.3 Implementieren neuer Command IDs (für Programmierer)](kap10.md#103-implementieren-neuer-command-ids-für-programmierer)  
[10.4 Beispiel für eine ‚Meldedatei‘](kap10.md#104-beispiel-für-eine-meldedatei)  
[11. Nutzung von externen Programmen](kap11.md)  
[11.1 FHEM](kap11.md#111-fhem)  
[11.1.1 Einbindung mittels BSB-LAN-Modul](kap11.md#1111-einbindung-mittels-bsb-lan-modul)  
[11.1.2 Einbindung mittels HTTPMOD-Modul](kap11.md#1112-einbindung-mittels-httpmod-modul)  
[11.2 openHAB](kap11.md#112-openhab)  
[11.3 HomeMatic (EQ3)](kap11.md#113-homematic-eq3)  
[11.4 ioBroker](kap11.md#114-iobroker)  
[12. Zusätzliche Hardware in Verbindung mit dem BSB-LAN-Adapter](kap12.md)  
[12.1 Verwendung optionaler Sensoren: DHT22 und DS18B20](kap12.md#121-verwendung-optionaler-sensoren-dht22-und-ds18b20)  
[12.1.1 Hinweise zu DHT22-Temperatur-/Feuchtigkeitssensoren](kap12.md#1211-hinweise-zu-dht22-temperatur-feuchtigkeitssensoren)  
[12.1.2 Hinweise zu DS18B20-Temperatursensoren](kap12.md#1212-hinweise-zu-ds18b20-temperatursensoren)  
[12.2 MAX!-Komponenten](kap12.md#122-max-komponenten)  
[12.3 Eigene Hardwarelösungen](kap12.md#123-eigene-hardwarelösungen)  
[12.3.1 Raumgeräteersatz (Arduino Uno, LAN-Shield, DHT22, Display, Taster)](kap12.md#1231-raumgeräteersatz-arduino-uno-lan-shield-dht22-display-taster)  
[12.3.2 Raumtemperaturfühler (Wemos D1 mini, DHT22, Display)](kap12.md#1232-raumtemperaturfühler-wemos-d1-mini-dht22-display)  
[13. Etwaige Fehlermeldungen und deren mögliche Ursachen](kap13.md)  
[13.1 Fehlermeldung "unknown type xxxxxxxx"](kap13.md#131-fehlermeldung-unknown-type-xxxxxxxx)  
[13.2 Fehlermeldung "error 7 (parameter not supported)"](kap13.md#132-fehlermeldung-error-7-parameter-not-supported)  
[13.3 Fehlermeldung "query failed"](kap13.md#133-fehlermeldung-query-failed)  
[13.4 Fehlermeldung "FEHLER: Setzen fehlgeschlagen! - Parameter ist nur lesbar"](kap13.md#134-fehlermeldung-fehler-setzen-fehlgeschlagen-parameter-ist-nur-lesbar)  
[14. Etwaige Probleme und deren mögliche Ursachen](kap14.md)  
14.1 Die rote LED des Adapters leuchtet nicht  
14.2 Die rote LED leuchtet, aber es ist keine Abfrage möglich  
14.3 Zugriff auf das Webinterface nicht möglich  
14.4 Keine Parameterabfrage möglich  
14.5 Regler wird nicht korrekt erkannt  
14.6 HK1 kann nicht bedient werden  
14.7 Es kann keine Raumtemperatur an einen HK1 gesendet werden  
14.8 HK2 kann nicht bedient werden  
14.9 Es kann keine Raumtemperatur an einen HK2 gesendet werden  
14.10 Einstellungen des Reglers können nicht via Adapter verändert werden  
14.11 Der Adapter reagiert manchmal nicht auf Abfragen oder SET-Befehle  
14.12 Bei der Abfrage der Logdatei passiert ‚nichts‘  
14.13 Es werden keine 24h-Durchschnittswerte angezeigt  
14.14 Bei der Abfrage der Daten von DS18B20-/DHT22-Sensoren passiert ‚nichts‘  
14.15 Die DS18B20-Sensoren zeigen falsche Werte an  
14.16 Der ‚Serielle Monitor‘ der Arduino IDE liefert keine Daten  
[15. FAQ](kap15.md)  
15.1 Kann ich Adapter & Software mit einem Raspberry Pi nutzen?  
15.2 Kann ich einen Adapter gleichzeitig an zwei Regler anschließen?  
15.3 Kann ich einen Adapter via LPB anschließen und mehrere Regler abfragen?  
15.4 Ist ein multifunktionaler Eingang des Reglers direkt via Adapter schaltbar?  
15.5 Ist zusätzlich ein Relaisboard am Arduino anschließ- und steuerbar?  
15.6 Kann ich bspw. den Zustand eines angeschlossenen Koppelrelais abfragen?  
15.7 Kann ich behilflich sein, um bisher nicht unterstützte Parameter hinzuzufügen?  
15.8 Warum erscheinen bei einer Komplettabfrage einige Parameter doppelt?  
15.9 Warum werden manchmal bestimmte Parameter nicht angezeigt?  
15.10 Warum ist kein Zugriff auf angeschlossene Sensoren möglich?  
15.11 Ich nutze ein W5500-LAN-Shield, was muss ich tun?  
15.12 Können Stati oder Werte als Push-Mitteilungen abgesetzt werden?  
15.13 Kann bspw. FHEM auf bestimmte Broadcasts ‚lauschen‘?  
15.14 Warum kommt es manchmal zu timeout-Problemen bei FHEM?  
15.15 Gibt es ein Modul für FHEM?  
15.16 Warum werden unter /B bei Stufe 2 keine Werte angezeigt?  
15.17 Ich habe den Eindruck, die angezeigten Werte bei /B sind nicht korrekt.  
15.18 Was ist der genaue Unterschied zwischen /M1 und /V1?  
15.19 Kann ich eigenen Code in BSB-LAN einbinden?  
15.20 Kann ich MAX!-Thermostate einbinden?  
15.21 Warum ist der Adapter nach einem Stromausfall nicht mehr erreichbar?  
15.22 Warum ist der Adapter (ohne Stromausfall) manchmal nicht mehr erreichbar?  
15.23 Warum kommen beim Senden manchmal ‚query failed‘-Meldungen?  
15.24 Ich finde keinen LPB- oder BSB-Anschluss, nur L-BUS und R-BUS?!  
15.24 Ich habe weitere Fragen, an wen kann ich mich wenden?  
[16. Offene Punkte](kap16.md)  
[17. Weiterführende Informationen und Quellen](kap17.md)  
[Anhang A1: Schaltplan BSB-LPB-LAN-Adapter v2](anhang_a1.md)  
[Anhang A2: Anmerkungen zum Schaltplan](anhang_a2.md)  
[A2.1 Kurze Legende zum Schaltplan](anhang_a2.md#a21-kurze-legende-zum-schaltplan)  
[A2.2 Teileliste](anhang_a2.md#a22-teileliste)  
[A2.3 Generelle Hinweise](anhang_a2.md#a23-generelle-hinweise)  
[Anhang B: Cheatsheet URL-Befehle](anhang_b.md)  
[Anhang C: Changelog BSB-LAN-Software](anhang_c.md)  
