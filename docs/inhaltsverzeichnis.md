[1. Der BSB-LPB-LAN-Adapter und die BSB-LAN-Software](Kap1.md)  
2. Grundsätzliches zum BSB, LPB und zur PPS-Schnittstelle  
2.1 BSB und LPB  
2.2 PPS-Schnittstelle
3. Unterstützte Heizungssysteme und Regler  
3.1 Erfolgreich getestete Heizungssysteme  
3.1.1 Brötje  
3.1.2 Elco  
3.1.3 Weitere Hersteller  
3.2 Detailliertere Auflistung und Beschreibung der unterstützten Regler
3.2.1 LMx-Regler  
3.2.2 RVx-Regler  
3.2.2.1 RVA- und RVP-Regler  
3.2.2.1 RVS-Regler  
3.3 Hinweis: Neue Modellgeneration - NICHT unterstützter Regler von Brötje  
4. Installation der Arduino IDE und Konfiguration des Adapters
5. Einstellungsrelevante Parameter der BSB-LAN-Software
6. Funktionsüberprüfung und erste Nutzung des Adapters
7. BSB-LAN Web - das Webinterface des Adapters
8. URL-Befehle und Spezialfunktionen  
8.1 Auflistung und Beschreibung der URL-Befehle  
8.2 Spezialfunktionen  
8.2.1 Raumtemperatur übermitteln  
8.2.2 Präsenztaste simulieren  
8.2.3 Manuellen TWW-Push ausführen  
8.2.4 Abrufen und Steuern mittels JSON  
8.2.5 Überprüfen auf nicht-freigegebene reglerspezifische Command IDs  
9. Loggen von Daten  
9.1 Verwendung des Adapters als Standalone-Logger mittels BSB-LAN  
9.2 Verwendung des Adapters als Remote-Logger  
10. Auslesen neuer Parameter-Telegramme  
10.1 Ausführliche Beschreibung des Auslesens neuer Telegramme (für Einsteiger)  
10.2 Kurze Beschreibung des Auslesens neuer Telegramme (für erfahrene Nutzer)  
10.3 Implementieren neuer Command IDs (für Programmierer)  
10.4 Beispiel für eine ‚Meldedatei‘  
11. Nutzung von externen Programmen  
11.1 FHEM  
11.1.1 Einbindung mittels BSB-LAN-Modul  
11.1.2 Einbindung mittels HTTPMOD-Modul  
11.2 openHAB  
11.3 HomeMatic (EQ3)  
11.4 ioBroker  
12. Zusätzliche Hardware in Verbindung mit dem BSB-LAN-Adapter  
12.1 Verwendung optionaler Sensoren: DHT22 und DS18B20  
12.1.1 Hinweise zu DHT22-Temperatur-/Feuchtigkeitssensoren  
12.1.2 Hinweise zu DS18B20-Temperatursensoren  
12.2 MAX!-Komponenten  
12.3 Eigene Hardwarelösungen  
12.3.1 Raumgeräteersatz (Arduino Uno, LAN-Shield, DHT22, Display, Taster)  
12.3.2 Raumtemperaturfühler (Wemos D1 mini, DHT22, Display)  
13. Etwaige Fehlermeldungen und deren mögliche Ursachen  
13.1 Fehlermeldung „unknown type <xxxxxxxx>“  
13.2 Fehlermeldung „error 7 (parameter not supported)“  
13.3 Fehlermeldung „query failed“  
13.4 Fehlermeldung „FEHLER: Setzen fehlgeschlagen! - Parameter ist nur lesbar“  
14. Etwaige Probleme und deren mögliche Ursachen  
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
15. FAQ  
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
16. Offene Punkte  
17. Weiterführende Informationen und Quellen  
Anhang A1: Schaltplan BSB-LPB-LAN-Adapter v2  
Anhang A2: Anmerkungen zum Schaltplan  
A2.1 Kurze Legende zum Schaltplan  
A2.2 Teileliste  
A2.3 Generelle Hinweise  
Anhang B: Cheatsheet URL-Befehle  
Anhang C: Changelog BSB-LAN-Software  
