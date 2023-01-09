[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 13](kap13.md)  
    
---
    
# 14. Etwaige Fehlermeldungen und deren mögliche Ursachen
    
---
    

## 14.1 Fehlermeldung "unknown type \<xxxxxxxx\>"

Dieser Fehler sagt aus, dass für diesen Parameter keine
Umrechnungsanweisung vorliegt, um die Rohdaten in eine entsprechende
Einheit (Zeit, Temperatur, Prozent, Druck etc.) umzuwandeln.

Um den Fehler zu beheben, sollte das jeweilige Telegramm / die Command
ID des betreffenden Parameters sowie der zugehörige Wert ausgelesen und
gemeldet werden. Sollten mehrere Einstellungsoptionen für einen
Parameter verfügbar sein, muss zusätzlich jede Option ausgelesen werden,
damit eine eindeutige Zuordnung stattfinden kann. Siehe hierzu auch das [Kap. 9](kap09.md).   
    
---
    

## 14.2 Fehlermeldung "error 7 (parameter not supported)"

Die zugehörige Command ID wird nicht erkannt oder der entsprechende
Parameter wird vom Regler nicht unterstützt (bspw. spezifische
Parameter, die eine Gasheizung betreffen und bei einer Ölheizung
dementsprechend nicht verfügbar sind).

Fehlermeldungen dieses Typs werden seit v0.41 der Übersichtlichkeit
halber per default ausgeblendet (die entsprechenden Parameter bspw. bei
einer Komplettabfrage aber dennoch abgefragt). Möchtest du sie dennoch
angezeigt bekommen, so ist das entsprechende Definement `#define
HIDE_UNKNOWN` in der Datei *BSB\_lan\_config.h* auszukommentieren
(`//#define HIDE_UNKNOWN`).

Zur Überprüfung, ob die CommandID vom Regler prinzipiell unterstützt
wird, jedoch für diese Gerätefamilie nicht freigegeben ist, führe bitte den URL-Befehl /Q aus (s. hierzu auch Kap. [8.2.5](kap08.md#825-überprüfen-auf-nicht-freigegebene-reglerspezifische-command-ids)). Sollten bei dieser Abfrage 'error 7'-Meldungen angezeigt werden, melde sie bitte unter Angabe des kompletten Outputs von /Q.  
    
Sollte ein Parameter an der heizungsseitigen Bedieneinheit jedoch definitiv verfügbar sein und dennoch bei der /Q-Abfrage nicht als 'error 7'-Parameter aufgelistet werden, so sollte der entspr. Parameter gemäß der Beschreibung in [Kap. 9](kap09.md) decodiert und gemeldet werden.  
  
---
    

## 14.3 Fehlermeldung "query failed"

Diese Meldung erscheint, wenn auf die Anfrage des Adapters keine
(sinnvolle) Antwort des Reglers kommt.

Mögliche Ursachen sind meist hardwareseitig zu suchen (bspw. fehlerhafte
RX- und/oder TX-Verbindung, falsch verbaute Komponenten oder auch ein
timeout aufgrund eines ausgeschalteten oder nicht angeschlossenen
Reglers).  
    
---
    

## 14.4 Fehlermeldung "FEHLER: Setzen fehlgeschlagen! - Parameter ist nur lesbar"

Diese Meldung erscheint bei dem Versuch, Werte zu schreiben bzw. zu
übermitteln (bspw. die Raumtemperatur) oder Parameter zu verändern,
während der Zugriff des Adapters nur auf Lesen beschränkt ist.  
Sollte es sich nicht um einen Parameter handeln, der per se nur lesbar ist, muss BSB-LAN Schreibzugriff gewährt werden.
     
    
---
        
## 14.5 Fehlermeldung "decoding error"  
  
Die Fehlermeldung "decoding error" bedeutet, dass der Parameter und die Command ID bekannt sind bzw. passen, aber dass das Datenpaket nicht der bisher bekannten Dekodierung entspricht. Das kann eine andere Länge oder eine andere Einheit als Grund haben.  
  
Um das für die entsprechende Heizung zu aktualisieren, wird das zu dem Fehler ausgegebene Datenpaket und der exakt zu diesem Moment angezeigte Wert an der Therme und die Einheit benötigt. Siehe hierzu auch das [Kap. 9](kap09.md).  
  
---
     
[Weiter zu Kapitel 15](kap15.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    


