[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 13](kap13.md)  
    
---
    
# 14. Etwaige Probleme und deren mögliche Ursachen #  
    
---
    

## 14.1 Die rote LED des Adapters leuchtet nicht ##

- Regler ist ausgeschaltet
- Adapter ist nicht mit dem Regler via BSB oder LPB verbunden
- Adapter ist falsch mit dem Regler verbunden (CL+/CL- bzw. DB/MB vertauscht)
- Evtl. Hardwarefehler des Adapters (bspw. defektes Bauteil, Fehler im Aufbau)
- Evtl. Wackelkontakt beim Bus-Anschluss (Rx/Tx oder CL+/CL-)  
    
---
    
## 14.2 Die rote LED leuchtet, aber es ist keine Abfrage möglich ##  

- Evtl. Adapter falsch angeschlossen (an G+ statt an CL+)
- Evtl. Wackelkontakt beim Busanschluss (Rx/Tx oder CL+/CL-)
- Evtl. falsche Pinbelegung (Rx/Tx)
- Evtl. kalte Lötstellen
- *Arduino: Kontakt SJ1 nicht hergestellt*
- Siehe Punkt [„Keine Parameterabfrage möglich"](kap14.md#144-keine-parameterabfrage-möglich)  
    
---
    

## 14.3 Zugriff auf das Webinterface nicht möglich ##

- Adapter hat keine Stromversorgung
- Adapter ist nicht mit dem LAN verbunden
- IP- und/oder MAC-Adresse des Adapters ist nicht korrekt
- Sicherheitsfunktionen [`Passkey`](kap05.md), [`TRUSTED_IP`](kap05.md) und/oder [`USER_PASS_B64`](kap05.md)
aktiviert/deaktiviert → URL nicht angepasst, Zugriff von falscher IP etc.
- → Testweise Reset-Knopf des Arduino bzw. LAN-Shields drücken
- LAN-Shield mit W5100-Chip bestückt? Sollte ein W5500 zum Einsatz
kommen, sind die entspr. Punkte bei der Installation zu berücksichtigen (s. Kap. [5](kap05.md)
& [14.10](kap14.md#1410-einstellungen-des-reglers-können-nicht-via-adapter-verändert-werden))
- Adapter und/oder Arduino fehlerhaft (→ vereinzelt kam es zu diffusen
Problemen bei der Verwendung von günstigen ‚China'-Arduinos)  
    
---
    

## 14.4 Keine Parameterabfrage möglich ##

- Siehe Punkt [„Die rote LED des Adapters leuchtet nicht"](kap14.md#141-die-rote-led-des-adapters-leuchtet-nicht)
- Siehe Punkt [„Die rote LED leuchtet, aber es ist keine Abfrage möglich"](kap14.md#142-die-rote-led-leuchtet-aber-es-ist-keine-abfrage-möglich)
- Siehe Punkt [„Zugriff auf das Webinterface nicht möglich"](kap14.md#143-zugriff-auf-das-webinterface-nicht-möglich)
- Rx- und/oder Tx-Belegung nicht korrekt, Pinbelegung und/oder Adapteranschluss
stimmt nicht mit der Angabe in der Datei *BSB\_lan\_config.h* überein
- Falscher Bus-Typ (BSB/LPB)  
    
---
    

## 14.5 Regler wird nicht korrekt erkannt ##

- Regler ist ausgeschaltet
- Regler wurde erst nach dem Arduino angeschaltet (automatische Reglererkennung funktioniert dann nicht)
- Regler ist nicht oder falsch mit dem Adapter verbunden
- Gerätefamilie und -variante (`http://<IP-Adresse>/6225/6226`) des Reglers unbekannt  
    
---
    

## 14.6 HK1 kann nicht bedient werden ##

- Adapter ist evtl. als RGT2 konfiguriert  
    
---
    

## 14.7 Es kann keine Raumtemperatur an einen HK1 gesendet werden ##

- Adapter ist evtl. als RGT2 konfiguriert
- Zugriff des Adapters ist auf Lesen beschränkt (`FL_RONLY`)  
    
---
    

## 14.8 HK2 kann nicht bedient werden ##

- Adapter ist evtl. als RGT1 konfiguriert  
    
---
    

## 14.9 Es kann keine Raumtemperatur an einen HK2 gesendet werden ##

- Adapter ist evtl. als RGT1 konfiguriert
- Zugriff des Adapters ist auf Lesen beschränkt (`FL_RONLY`)  
    
---
    

## 14.10 Einstellungen des Reglers können nicht via Adapter verändert werden ##

- Zugriff des Adapters ist auf Lesen beschränkt (`FL_RONLY`)  
    
---
    

## 14.11 Der Adapter reagiert manchmal nicht auf Abfragen oder SET-Befehle ##

- Der Arduino ist nicht multitaskingfähig - warte, bis eine Abfrage
abgeschlossen ist (insbesondere umfangreichere Abfragen wie bspw. ganze Kategorien oder
auch die Darstellung des Logfiles dauern u.U. recht lange)  
    
---
    

## 14.12 Bei der Abfrage der Logdatei passiert ‚nichts' ##

- Es ist keine microSD-Karte eingelegt
- Das Loggen auf microSD-Karte war oder ist deaktiviert
- Die Logdatei ist sehr groß, die (graphische) Darstellung dauert entsprechend länger  
- Die grafische Darstellung (`http://<IP-Adresse>/DG`) der Logdatei kann aufgrund von javascript-Blockern nicht erfolgen  
    
---
    

## 14.13 Es werden keine 24h-Durchschnittswerte angezeigt ##

- Das entsprechende Definement ist nicht aktiviert
- Es sind keine zu berechnenden Parameter angegeben  
    
---
    

## 14.14 Bei der Abfrage der Daten von DS18B20-/DHT22-Sensoren passiert ‚nichts' ##  

- Es sind keine Sensoren angeschlossen
- Die entsprechenden Definements sind nicht aktiviert
- Die Pinbelegung ist nicht korrekt eingestellt
- Die Sensoren sind fehlerhaft installiert oder defekt  
    
---
    

## 14.15 Die DS18B20-Sensoren zeigen falsche Werte an ##

- Die Stromversorgung und Installation prüfen (Größe des PullUp-Widerstands prüfen,
Kondensatoren verbauen, Verkabelung prüfen, richtige Topologie verwenden etc.)  
    
---
    

## 14.16 Der ‚Serielle Monitor' der Arduino IDE liefert keine Daten

- Der Adapter ist nicht zusätzlich via USB angeschlossen
- Falscher Anschluss (COM-Port) oder falsches Board in der Arduino IDE ausgewählt
- Falsche Baudrate eingestellt → auf 115200 Baud einstellen
- Adapter nicht am Regler angeschlossen, Regler ist ausgeschaltet → siehe o.g. Punkte  
    
---
    
     
     
[Weiter zu Kapitel 15](kap15.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
