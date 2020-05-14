[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Anhang A2](anhang_a2.md)    
    
---
        

# Anhang B: Cheatsheet URL-Befehle
  
***HINWEIS:***  
***Dies ist nur eine kurze Übersicht der verfügbaren URL-Befehle. Eine ausführlichere Erläuterung der einzelnen Befehle sowie weitere Spezialfunktionen von BSB-LAN findest du in [Kapitel 8](kap08.md)!***  
   

| URL-Befehl            | Auswirkung                                                                    |
|:----------------------|:------------------------------------------------------------------------------|
|  `/<x>`               | `Wert/Einstellung von Parameter <x> anzeigen`
|  `/<x>/<y>/<z>`   | `Werte/Einstellungen der Parameter <x>, <y> und <z> anzeigen`  
|  `/<x>-<y>`         | `Werte/Einstellungen der Parameter <x> bis <y> anzeigen`  
|  `/A`                   | `Anzeigen der 24h-Durchschnittswerte`  
|  `/A=<x>,<y>`       | `Ändern der 24h-Durchschnittswertberechnung in Parameter <x>, <y>`  
|  `/A=0`                  | `24h-Durchschnittswertberechnung temporär deaktivieren`  
|  `/B`                   | `Anzeige akkumulierter Brennerlaufzeiten (in Sek.) und -takte (inkl. TWW)`  
|  `/B0`                  | `Zurücksetzen des Zählers Brennerlaufzeiten und -takte`  
|  `/C`                   | `Anzeige der Konfiguration von BSB-LAN`  
|  `/D`                   | `Anzeige der Logdatei der microSD-Karte`  
|  `/DG`                  | `Grafische Anzeige der Logdatei der microSD-Karte`  
|  `/D0`                  | `Zurücksetzen der Logdatei & neue Generierung des Headers`  
|  `/E<x>`              | `ENUM-Werte für Parameter <x> anzeigen`  
|  `/G<x>`              | `GPIO: Abfragen des Pins <x>`  
|  `/G<x>=<y>`        | `GPIO: Setzen des Pins <x> auf HIGH (<y> = 1) oder LOW (<y> = 0)`  
|  `/G<x>,I`            | `GPIO: Abfragen des Pins <x> mit gleichzeitigem Setzen auf INPUT`  
|  `/I<x>=<y>`        | `INF-Nachricht an Parameter <x> mit Wert <y> senden`  
|  `/JC=<x>,<y>,<z>`   | `JSON: Abfrage der möglichen Werte der Parameter <x>,<y>,<z> für Parameter des Typs ENUM. Das Format der zurückgegeben Daten ist das gleiche wie bei dem Befehl /JK=<x>`  
|  `/JK=<x>`        	| `JSON: Abfrage der verfügbaren Parameter der Kategorie <x>`  
|  `/JK=ALL`          	| `JSON: Auflistung aller Kategorien samt zugehörigen Parameternummern`  
|  `/JQ=<x>,<y>,<z>`      | `JSON: Abfrage von Parameter <x>, <y> und <z>`  
|  `/JQ`                  | `→ mit JSON-Struktur (s. Kap. 8.2.4) via HTTP-POST Request: Abfrage von Parametern`
|  `/JS`                  | `→ mit JSON-Struktur (s. Kap. 8.2.4) via HTTP-POST Request: Setzen von Parametern`
|  `/K`                   | `Alle Regler-Kategorien auflisten`  
|  `/K<x>`              | `Alle Parameter und Werte von Regler-Kategorie <x> abfragen`  
|  `/L=0,0`               | `Loggen auf microSD-Karte temporär deaktivieren`  
|  `/L=<x>,<y1>,<y2>,<y3>`       | `Log-Intervall auf <x> Sekunden setzen, mit (optional) Log-Parameter <y1>,<y2>,<y3>`  
|  `/LB=<x>`            | `Loggen von Bus-Telegrammen: Nur Broadcasts (<x>=1) oder alle (<x>=0)`  
|  `/LU=<x>`            | `Loggen von Bus-Telegrammen: Nur unbekannte (<x>=1) oder alle (<x>=0)`  
|  `/M<x>`              | `Monitor-Modus aktivieren (<x> = 1) oder deaktivieren (<x> = 0)`  
|  `/N`                   | `Reset und Neustart des Arduino (Dauer ca. 15Sek)`  
|  `/NE`                  | `Reset und Neustart des Arduino (Dauer ca. 15Sek) und lösche EEPROM`  
|  `/P<x>`              | `Busprotokoll / Bustyp setzen: <x> = 0 → BSB / 1 → LPB / 2 → PPS`  
|  `/P<x>,<s>,<d>`  | `Busprotokoll/-typ <x>, eigene Adresse <s>, Zieladresse <d> setzen`  
|  `/Q`                   | `Test auf nicht-freigegebene reglerspezifische Parameter`  
|  `/R<x>`              | `Abfrage des Reset-Werts für Parameter <x>`  
|  `/S<x>=<y>`        | `Wert <y> für Parameter <x> setzen`  
|  `/T`                   | `Abfrage optional angeschlossener Sensoren (DS18B20/DHT22)`  
|  `/U`                   | `Zeigt die benutzerdefinierten Variablen an, falls diese in BSB_lan_custom.h verwendet werden`  
|  `/V<x>`              | `Verbositäts-Modus aktivieren (<x> = 1) oder deaktivieren (<x> = 0)`  
|  `/X`                   | `Abfrage optional eingebundener MAX!-Thermostate`  
|  `/W`                   | `Mit vorangehendem /W liefern die URL-Befehle C, S, T und Q Daten ohne HTML-header und -footer zurück (bspw. /WC oder /WS<x>=<y!z>)`
       
[Cheatsheet als PDF](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Cheatsheet_URL-Befehle.pdf)
    
---
    
     
[Weiter zu Anhang C](anhang_c.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  

