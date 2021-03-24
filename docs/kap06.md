[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 5](kap05.md)    
    
---
        
# 6. BSB-LAN: Spezialfunktionen  

---

## 6.1 Loggen von Daten
    
**Verwendung des Adapters als Standalone-Logger mittels BSB-LAN**

Stecke eine (möglichst aktuelle) FAT32-formatierte microSD-Karte in den Speicherkartenplatz des Ethernet-Shields, bevor du den Arduino einschaltest.  
        
Aktiviere vor dem Flashen das Definement `#define LOGGER` in der Datei *BSB_LAN_config.h*, füge die zu loggenden Parameter zur Variable `log_parameters` hinzu und bestimme das Logintervall mit der Variable `log_interval`. Bitte beachte auch die entsprechenden Punkte in Kap. [2.2](kap02.md#22-konfiguration).  
Später können während der Laufzeit sowohl das Intervall als auch die Logging-Parameter mittels des Befehls `"/L=[Intervall],[Parameter1],...,[Parameter20]"` geändert werden.  

Sämtliche Daten werden auf der Karte in der Datei *datalog.txt* im CSV-Format gespeichert und können somit leicht in Excel oder OpenOffice Calc importiert werden.  

Der Dateiinhalt kann mit dem URL-Befehl `/D` eingesehen werden, eine
graphische Darstellung der Logdateien erfolgt mittels `/DG`.  

Um die Datei *datalog.txt* zu löschen und neu zu erstellen, benutze den Befehl `/D0`.  
    
*Die Ausführung des URL-Befehls `/D0` sollte außerdem bei der ersten Benutzung erfolgen, da hierdurch die Datei mit dem passenden CSV-Header initiiert wird.*  
    
| Hinweise |
|:---------|
| • Vereinzelt kann es vorkommen, dass bestimmte microSD-Karten nicht problemlos vom LAN-Shield erkannt werden. In diesem Fall wird eine entspr. Fehlermeldung von BSB-LAN ausgegeben. Sollte bei dir dieser Fall eintreten, so probiere es mit einer anderen, möglichst aktuellen microSD-Karte. |  
| • Bitte beachte, dass der Arduino keine exakte Uhr ist. Auch wenn du bspw. das Intervall auf 60 Sekunden eingestellt hast, weicht die in der Datei dargestellte Zeit (welche von der Heizungssteuerung empfangen wird) möglicherweise davon ab - dies kann bis zu einer Sekunde pro Minute betragen. Sollte eine exakte Logzeit unbedingt erforderlich sein, kannst du die durchschnittliche Zeitabweichung zwischen der Arduino-Zeit und der wirklichen Zeit ermitteln, das Log-Intervall entsprechend anpassen und bspw. 59 Sekunden anstatt 60 Sekunden einstellen. |  
     
**Verwendung des Adapters als Remote-Logger**

Neben dem Einsatz komplexer Systeme wie bspw. FHEM und den spezifischen Log-Lösungen kann bspw. folgender Befehl periodisch ausgeführt werden (z.B. per cron job):  
    
```
DATE=`date +%Y%m%d%H%M%S`; wget -qO- http://192.168.178.88/8310/720/710 | egrep "(8310|720|710)" | sed "s/^/$DATE /" >> log.txt  
```
    
Das aus diesem Beispiel resultierende Logfile \'*log.txt*\' enthält die aufgezeichneten Werte der Parameter 8310, 720 und 710.  
Später kannst du das Logfile basierend auf den Parameternummern sortieren, nutze hierfür den Befehl \'sort\':  

`sort -k2 log.txt`  
    
| Hinweis |
|:--------|
| Die IP, ggf. aktivierte optionale Sicherheitsfunktionen, die gewünschten Parameter etc. sind im obigen Beispiel anzupassen. | 
    
---
    
## 6.2 IPWE-Erweiterung  
Die IPWE-Erweiterung (IPWE = IP-Wetterdaten-Empfänger) stellt eine Möglichkeit dar, zuvor festgelegte Parameter durch den Aufruf einer kurzen URL darzustellen. Um diese tabellarische Übersicht aufzurufen, muss die folgende URL genutzt werden:  

`<IP-Adresse>/ipwe.cgi`  

| Hinweis |
|:--------|
| Sollte die optionale Sicherheitsfunktion des Passkeys verwendet werden, so ist der Passkey in diesem Fall ausnahmsweise NICHT der URL hinzuzufügen!|  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/IPWE_example.png">  
  
*Beispiel einer IPWE-Ausgabe.*   
   
Um die Funktion der IPWE-Erweiterung zu nutzen, müssen vor dem Flashen des Arduino zwei Einstellungen in der Datei `BSB_lan_config.h` vorgenommen werden:  
- Das Definement `#define IPWE` muss aktiviert werden.  
- Die gewünschten Parameter die dargestellt werden sollen, müssen aufgelistet werden.  
  
Zusätzlich zu den aufgeführten Parametern werden automatisch die Werte optional angeschlossener Sensoren (DHT22 / DS18B20) dargestellt.  
Wenn DS18B20-Sensoren zum Einsatz kommen, werden außerdem die spezifischen Sensor IDs dargestellt. Dies kann man in der letzten Zeile im obigen Beispiel erkennen, dort lautet die spezifische Sensor ID des einzigen angeschlossenen DS18B20-Sensors "284c453d07000082". Auf diese Weise lassen sich mehrere Sensoren eindeutig identifizieren.   
  
| Hinweise |
|:---------|
| • Sollten aus Versehen Parameter zur Anzeige definiert werden, die das spezifische Heizungssystem nicht aufweist, so wird als jeweiliger Wert "0.00" dargestellt. Das heißt aber nicht, dass der Wert des nicht-unterstützen Parameters "0.00" ist! Es ist daher sinnvoll, vor der Definition der anzuzeigenden Parameter zu überprüfen, ob diese auch wirklich vom Heizungssystem bereit gestellt werden. |  
| • Da die IPWE-Erweiterung ursprünglich entworfen wurde, um die Messwerte einer spezifischen Funk-Wetterstation darzustellen, machen nicht alle Spalten der Tabelle Sinn, wie bspw. "Windgeschwindigkeit" oder "Regenmenge". Diese können einfach ignoriert werden. Im Grunde sind bei den normalen Parametern lediglich die beiden Spalten "Beschreibung" und "Temperatur" relevant, da hier die Parameterbezeichnung und der jeweilige Wert dargestellt werden. | 
| • Die Darstellungen der jeweiligen Parameterwerte/-einstellungen erfolgen nicht im Klartext, sondern numerisch. Bei dem oben abgebildeten Beispiel ist dies u.a. beim Parameter "1. Brennerstufe T1" gut zu erkennen: Dort steht nicht "Ein", sondern "255", was wiederum "Ein" bedeutet. | 
    
    
---
    
## 6.3 Raumtemperatur übermitteln
Mittels einer INF-Nachricht kann eine Raumtemperatur an den Regler gesendet werden, um einen Raumeinfluss bei der Berechnung der VL-Temperatur geltend zu machen. Um diese Funktion zu nutzen, muss die Funktion ‚Raumeinfluss' vorher im Regler aktiviert und der Einflussfaktor prozentual festgelegt werden
(bspw. Parameter 750 für HK1, Parameter 1050 für HK2).  
BSB-LAN muss Schreibzugriff gewährt werden (s. [Kap. 2.2](kap02.md#22-konfiguration)).  
Die Raumtemperatur muss regelmäßig in relativ kurzen Intervallen übermittelt werden, bspw. alle ein oder zwei Minuten.  

| Hinweis |
|:--------|
| Dieser Parameter ist nicht abrufbar. |  
      
Die folgenden Parameter müssen dafür genutzt werden:  
- 10000 = Heizkreis 1 
- 10001 = Heizkreis 2
- 10003 = Heizkreis 3/P
  
| Beispiel |
|:---------|
| Der URL-Befehl für den HK1, um eine Raumtemperatur von 19.5°C zu übermitteln, lautet: `http://<IP-Adresse>/I10000=19.5` |

| Tipp |
|:--------|
| Wird nur ein Temperaturwert als Einflussfaktor gemessen und übermittelt, ist die Temperaturmessung in einem Führungs- / Referenzraum zu empfehlen, in dem sich keinerlei weitere Wärmequelle (bspw. Kaminofen, große Fenster in Südlage etc.) befindet. |  
    
**Exkurs: Erklärung zum „Raumeinfluss“ bei Berücksichtigung der Raumtemperatur**    
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
    
## 6.4 Präsenztaste simulieren
Die Funktion der Präsenztaste ist mit den Spezialparametern 
- 701 = Heizkreis 1, 
- 1001 = Heizkreis 2 sowie 
- 1301 = Heizkreis 3/P 
implementiert und als SET-Befehl auszuführen.  
Die genannten Parameter müssen schreibbar sein (s. Kap. [2.2](kap02.md#22-konfiguration)).  
Diese Spezialparameter (701, 1001, 1301) sind NICHT abrufbar.

Bei *aktivem Automatikbetrieb* ist dabei  
`http://<IP-Adresse>/S<Parameter>=1` für den Wechsel auf ‚Betriebsart Reduziert' und  
`http://<IP-Adresse>/S<Parameter>=2` für den Wechsel auf ‚Betriebsart Komfort' zu setzen.  
  
| Beispiel |
|:---------|
| Der Befehl `<URL>/S701=2` schaltet innerhalb des Automatikbetriebs den HK1 in den Komfortmodus. | 

Der jeweilige Wechsel ist bis zur nächsten Betriebsart-Umschaltung laut Zeitprogramm gültig.

| Hinweis |
|:--------|
| Die Präsenztaste ist nur im Automatikbetrieb wirksam! |

    
---
    
## 6.5 Manuellen TWW-Push ausführen
Bei einigen Reglern ist die (nahezu undokumentierte) Funktion eines
manuellen Trinkwasser-Pushs verfügbar. Um einen manuellen TWW-Push
auszulösen, muss dazu die TWW-Taste an der ISR-Bedieneinheit gedrückt
und für etwa drei Sekunden gehalten werden, bis im Display eine
entsprechende Meldung erscheint.

Bei einigen Reglern kann diese Funktion mittels eines SET-Befehls
erfolgen. Dieser lautet `http://<IP-Adresse>/S1603=1` - der
Spezialparameter 1603 muss dazu schreibbar sein (s. Kap. [2.2](kap02.md#22-konfiguration)).
    
--- 
    
## 6.6 Datum, Uhrzeit und Zeitprogramme verändern   
Das Verändern der Uhrzeit und der Zeitprogramme ist nur über einen speziellen URL-Befehl möglich, es ist *nicht* über das Webinterface möglich.  
Um die Funktion zu nutzen, muss BSB-LAN Schreibzugriff gewährt werden (s. Kap. [2.2](kap02.md#22-konfiguration)).  
  
**Datum und Uhrzeit verändern**  
Der folgende Befehl stellt das Datum auf den 04.01.2019 und die Uhrzeit auf 20:15 Uhr:  
`/S0=04.01.2019_20:15:00`  
Mit dieser Funktion ist es möglich, die Uhrzeit- und Datumseinstellungen bspw. mit einem NTP Zeitserver abzugleichen. 
   
**Zeitprogramme verändern**  
Der folgende Befehl setzt das Zeitprogramm für *Mittwoch* beim Heizkreis 1 (Parameter 502) auf 05:00-22:00 Uhr:  
`/S502=05:00-22:00_xx:xx-xx:xx_xx:xx-xx:xx`  
     
---  
   
## 6.7 Übermitteln einer alternativen Außentemperatur   
Bei bestimmten Reglermodellen ist es möglich, diverse Funkkomponenten anzuschließen, u.a. auch einen Funk-Außentemperaturfühler. Mittels BSB-LAN ist es bei diesen kompatiblen Reglern möglich, dem Heizungsregler eine anderweitig ermittelte Außentemperatur (AT) zu übermitteln. Dies ist insbesondere für Nutzer komplexerer Hausautomationsinstallationen interessant, die bspw. eine Wetterstation an einem günstigeren Standort als dem des heizungsseitigen Außentemperaturfühlers installiert haben.  
   
Als kompatible Regler sind bisher einige Reglermodelle der Reihen [LMS](kap03.md#3212-lms-regler) und [RVS](kap03.md#3222-rvs-regler) gemeldet worden (Stand Oktober 2019). Ältere Reglergenerationen wie bspw. [LMU](kap03.md#3211-lmu-regler) oder [RVA](kap03.md#3221-rva--und-rvp-regler) sind anscheinend nicht kompatibel.  
   
Um zu testen, ob der eigene Regler kompatibel ist, kann -zusätzlich neben der Überprüfung des Reglertyps- im Vorfeld `<ip>/Q` oder gezielt ein Abruf der Parameter `<ip>/10003/10004` ausgeführt werden.  
Wenn als Rückmeldung bei Parameter 10003 die Außentemperatur (oder "---") angezeigt wird, so ist die Funktion nach bisherigem Kenntnisstand verfügbar.  
Wenn hingegen ein "error 7" gemeldet wird, so ist die Funktion leider nicht verfügbar.  
   
Im Zweifelsfall sollte einfach versucht werden, eine alternative AT wie nachfolgend beschrieben zu senden. Ein nachfolgender Abruf des Parameters 8700 gibt Aufschluss darüber, ob der zuvor gesendete Wert übernommen wurde.   
      
Für die Verwendung der Funktion der alternativen Außentemperaturübermittlung mittels BSB-LAN muss der kabelgebundene Außentemperaturfühler der Heizung zwingend vom Regler getrennt werden (da der Regler die alternative AT ansonsten scheinbar nicht annimmt). Die darauf folgende Fehlermeldung des Heizungsreglers "Fehler 10: Aussenfühler" scheint den Betrieb zwar nicht zu stören, kann/sollte aber abgeschaltet werden. Dazu führt man den Parameter 6200 "Fühler speichern" einmal aus (auf JA stellen und bestätigen). Soll der kabelgebundene Fühler irgendwann wieder zum Einsatz kommen, so sollte nach erfolgtem Anschluss erneut Parameter 6200 "Fühler speichern" (-> JA -> bestätigen) ausgeführt werden. Somit ist der kabelgebundene AT-Fühler wieder im Heizungsregler registriert.  
    
Der Funk-Außentemperaturfühler scheint die gemessene AT ca. minütlich zu übermitteln. Bleibt diese Meldung aus, so scheint der Regler nach etwa 10-11 Minuten auf einen intern hinterlegten Wert zurückzugreifen. Zusätzlich erscheint die o.g. Fehlermeldung erneut. Es ist also empfehlenswert, die alternative AT via BSB-LAN etwa alle ein bis zwei Minuten zu übertragen.  
   
Um die Funktion zu nutzen, muss BSB-LAN Schreibzugriff gewährt (s. Kap. [2.2](kap02.md#22-konfiguration)) und die AT mit dem Befehl  
`<ip>/I10003=xx`  
übermittelt werden, wobei xx die betreffende AT in °C ist. Nachkommawerte sind möglich, als Komma ist ein Punkt einzufügen.  
   
| Beispiel |
|:---------|
| Mit `<ip>/I10003=16.4` wird dem Heizungsregler die AT von 16.4°C mitgeteilt; `<ip>/I10003=9` übermittelt 9°C AT. | 
   
| Hinweis |
|:--------|
| Wird nur bei Parameter 10004 die Außentemperatur angezeigt, so ist die Funktion nach bisherigem Kenntnisstand nicht verfügbar. Das Übermitteln der alternativen AT kann in diesem Fall aber trotzdem wie beschrieben getestet werden, allerdings muss dann der Parameter 10004 anstelle von 10003 verwendet werden: `<ip>/10004=xx`. | 
   
---  
  
## 6.8 Eigenen Code in BSB-LAN einbinden
  
BSB-LAN bietet die Möglichkeit, eigenen Code einzubinden. Dazu muss das entspr. Definement in der Datei `BSB_LAN_config.h` aktiviert und der Code entspr. in den Dateien `BSB_LAN_custom.h.default`, `BSB_LAN_custom_global.h` sowie `BSB_LAN_custom_setup.h` hinzugefügt werden. Die Datei `BSB_LAN_custom.h.default` muss zur Verwendung in `BSB_LAN_custom.h` umbenannt werden.  
Ein Beispiel und entspr. Hinweise sind in den jeweiligen Dateien zu finden.  
  
*FHEM-Forumuser "Scherheinz" hat ein anderes Verwendungsbeispiel zur Verfügung gestellt (siehe [Forumsbeitrag](https://forum.fhem.de/index.php/topic,29762.msg1046673.html#msg1046673)).*  
*Vielen Dank dafür!*  
  
Nachfolgend das erwähnte Beispiel:  
Beschreibung:  
"Alle 20 Sekunden wird über einen Spannungsteiler die Akku Spannung eingelesen. Dann wird aus den letzten 10 Werten ein gleitender Mittelwert ermittelt und per MQTT an FHEM weitergeleitet" (Zitat aus dem oben verlinkten Beitrag).  
  
Einbindung:  
Der folgende Code muss in die Datei `BSB_LAN_custom_global.h` eingefügt werden:  
```
const int akkuPin = A0;
int akkuWert = 0;
float akkuSpg = 12.00;
char tempBuffer[100];
int j;

void Filtern(float &FiltVal, int NewVal, int FF){ //gleitender Mittelwert bilden aus den 10 letzten Werten
  FiltVal= ((FiltVal * FF) + NewVal) / (FF +1);
}
```
Der folgende Code muss in die Datei `BSB_LAN_custom.h` eingefügt werden:  
```
if (custom_timer > custom_timer_compare + 20000) {    // alle 20 Sekunden 
  custom_timer_compare = millis();

akkuWert = analogRead(akkuPin); // Spannung messen         

akkuWert = map(akkuWert, 500, 1023, 0, 150); // umwandeln auf 0 - 15V
akkuWert = akkuWert / 10.00;

Filtern(akkuSpg, akkuWert, 9); //gleitender Mittelwert bilden aus den 10 letzten Werten
if (j++ > 10) akkuWert=1;  // nach 10 Werten Sprung auf 1
 
if (!MQTTClient.connected()) {
      MQTTClient.setServer(MQTTBroker, 1883);
      int retries = 0;
      while (!MQTTClient.connected() && retries < 3) {
        MQTTClient.connect("BSB-LAN", MQTTUser, MQTTPass);
        retries++;
        if (!MQTTClient.connected()) {
          delay(1000);
          DebugOutput.println(F("Failed to connect to MQTT broker, retrying..."));
        }
        MQTTClient.publish("AkkuSpannung",dtostrf(akkuSpg, 6, 1, tempBuffer));
        MQTTClient.disconnect();
      }
    }
}
```  

  
---  
  
## 6.9 Verwenden der Webserver-Funktion
  
***Die Webserver-Funktion wurde von User ["dukess"](https://github.com/dukess) entwickelt, der ebenfalls die nachfolgenden Informationen hinsichtlich der Benutzung zur Verfügung stellte.***  
***Vielen Dank!***  
  
Wenn das zugehörige Definement '#define webserver' in *BSB_LAN_config.h* aktiviert wurde, kann BSB-LAN als Webserver fungieren, der außerdem statische Komprimierung unterstützt. Um diese Funktion zu verwenden müssen folgende Punkte berücksichtigt werden:
- Alle Dateien werden / müssen auf der microSD-Karte gespeichert sein, können allerdings in verschiedenen Unterverzeichnissen abgelegt werden. Beispiel: `http://<IP-Adresse>/foo/bar.html` liest die Datei `bar.html` aus dem Verzeichnis `foo` von der microSD-Karte.   
- Nur statische Inhalte werden unterstützt.  
- Unterstützte Dateiformate sind: html, htm, css, js, xml, txt, jpg, gif, svg, png, ico, gz.  
- Der Webserver unterstützt die folgenden header: ETag, Last-Modified, Content-Length, Cache-Control.  
- Wie bereits erwähnt unterstützt der Webserver statische Komprimierung. Wenn möglich (falls der Browser des Clients gzip unterstützt), werden immer gzip-Inhalte generiert (bspw. /d3d.js.gz für die URL /d3d.js).  
  
Die folgenden Beispiele verdeutlichen die Benutzung:  
- Wenn keine Datei namens `index.html` im Stammverzeichnis der microSD-Karte vorliegt, wird das reguläre Webinterface bei Aufruf von `http://IP-Adresse` dargestellt.  
- Wenn eine Datei namens `index.html` im Stammverzeichnis der microSD-Karte vorliegt, wird diese Datei anstelle des regulären Webinterface bei Aufruf von `http://IP-Adresse` dargestellt.  
- Wenn die Datei `index.html` in einem Unterverzeichnis auf der mcroSD-Karte liegt, wird diese nur dann dargestellt, wenn die komplette URL eingegeben und abgerufen wird: `http://<IP-Adresse>/foo/bar/index.html`. Sollte in diesem Fall lediglich `http://<ip-address>/foo/bar/` abgerufen werden, so wird trotzdem das reguläre Webinterface von BSB-LAN dargestellt, da weder eine Verzeichnisauflistung, noch eine URL-Umschreibung in der Webserverfunktion implememtiert ist.  
  
| Hinweis |
|:--------|
| Wenn die optionale PASSKEY-Funktion verwendet wird, muss der PASSKEY wie immer der URL hinzugefügt werden. |  
  
---  
  
## 6.10 Benutzen des alternativen AJAX Webinterface  
  
***Die AJAX Webserverfunktion wurde ebenfalls von User ["dukess"](https://github.com/dukess) entwickelt.***  
***Bitte sieh dir die entspr. Beschreibung hinsichtlich der Benutzung in seinem [AJAX repo](https://github.com/dukess/bsb_lan_ajax) an.***  
***Vielen Dank!***  
  
---  

## 6.11 Raumgerät-Emulation
  
Mit dem BSB-LAN-Setup lässt sich ein Raumgerät emulieren, dazu ist zusätzliche Hardware erforderlich. 
  
Im Code implementiert sind folgende Funktionen:  

- Einbindung angeschlossener Sensoren zur Messung und Übermittlung der Raumtemperatur an den/die gewünschten Heizkreis/e, 

- TWW-Push mittels Taster auslösen sowie
  
- Präsenztastenfunktion für HK1-3 mittels Taster (automatische Erkennung des Ist-Zustandes mit entspr. Umschaltung zwischen Komfort und Reduziert im Automatikmodus).  
  
Um die Funktionen zu nutzen sind die entspr. Einträge in der Konfiguration vorzunehmen, dies kann entweder durch Änderungen in der Datei *BSB_lan_config.h* oder über das Webinterface (Menüpunkt "Einstellungen") erfolgen.  

Nachfolgend einige Hinweise für die jeweiligen Funktionen.  

  
**Raumtemperatur**  
- Es können bis zu fünf angeschlossene Sensoren für die Raumtemperaturmessungen angegeben werden.  
- Kommen mehre Sensoren zum Einsatz, so wird automatisch ein Mittelwert der Messwerte gebildet und an den Heizungsregler übertragen.  
- Um die jeweiligen Sensoren den gewünschten Heizkreisen zuzuordnen, müssen die spezifischen Parameternummern der jeweiligen Sensoren eingetragen werden. Einen Überblick über die angeschlossenen Sensoren samt zugehöriger Parameternummer gibt die Kategorie "One Wire, DHT & MAX! Sensors" (Menüpunkt "Heizungsfunktionen" bzw. direkt per Klick auf den Menüpunkt "Sensoren"). 
- Bei Eingabe mehrerer Sensoren für einen HK sind die Parameternummern lediglich durch ein Komma von einander zu trennen, es darf kein Leerzeichen nach dem Komma verwendet werden.  

  
**Taster für TWW-Push und Präsenztastenfunktion**  
- Die verwendeten GPIO-Pins für den Anschluss der Taster (pro Taster ein Pin) sind in der Konfiguration einzustellen.  
- Es müssen DIGITALpins genutzt werden!  
- Bitte achte darauf, dass du keine anderweitig verwendeten Pins nutzt (bspw. die von angeschlossenen Sensoren)! Für Due-User gilt: explizit *nicht* verwendet werden dürfen die Pins 12, 16-21, 31, 33, 53!  
- Die Taster sind arduino-typisch für HIGH anzuschließen, d.h. du musst zusätzlich zum Taster noch einen PullDown-Widerstand (ca. 100kOhm) für den jeweiligen Pin anschließen.  
- Ein Pinout-Diagramm des Due findest du in [Anhang B](anhang_b.md).  
- Solltest du dir nicht sicher sein, wie ein Taster generell bei einem Arduino für HIGH angeschlossen wird, so sieh bitte zusätzlich im Internet nach, dort finden sich unzählige Beispiele.  
    Trotzdem sei an dieser Stelle kurz erwähnt, wie vorzugehen ist:  
    - Der Taster mit den beiden Anschlüssen A und B wird an einem Anschluss (A) mit dem gewünschten GPIO-Digitalpin des Due verbunden.  
    - Zusätzlich wird am selben Anschluss des Tasters (A) der PullDown-Widerstand angeschlossen, welcher wiederum mit GND des Due verbunden wird.   
    *Dies ist wichtig, auf den Einsatz des Widerstands darf nicht verzichtet werden!* Durch den PullDown-Widerstand liegt ein definiertes Potential bei nicht-betätigtem Taster am GPIO an und das sog. 'Floaten' des Eingangs wird verhindert. Würde man auf den PullDown verzichten und der Eingang würde 'floaten', so könnten ungewollte Leveländerungen am Pin entstehen, die wiederum zur Folge hätten, dass die jeweilige Funktion (also TWW-Push oder BA-Umschaltung) ungewollt ausgelöst wird.  
    - Der andere Anschluss des Tasters (B) wird an einen **3,3V**-Anschluss des Due angeschlossen.  
    **Achtung: Die Eingänge des Due sind nur 3,3V tolerant, verbinde also** ***keinesfalls*** **den Taster mit einem 5V-Anschlusspin des Due!**  
    Wird der Taster nun betätigt, wird der Stromkreis geschlossen - das Signal wird als HIGH erkannt und der jeweilige Befehl (TWW-Push/Präsenztaste) wird ausgelöst.  
- Zusätzlicher Hinweis: Solltest du die Taster entfernen (bspw. weil du die Funktion nicht mehr benutzen willst), so stelle den entspr. Pin in der Konfiguration bitte auf "0" und speichere die neue Einstellung, so dass der zuvor eingestellte Pin nicht 'floaten' kann!  

---  
  
## 6.12 EEPROM-Löschung mittels Pinkontakten  
  
Grundsätzlich kann das EEPROM via Webinterface mit dem Befehl /NE gelöscht werden. Es kann aber in bestimmten Situationen (bspw. wenn kein Zugriff auf das Webinterface möglich ist) nötig sein, das EEPROM auch ohne Nutzung des URL-Befehls zu löschen.   
  
Hierfür müssen  
- beim Due die Pins 31 und 33 und 
- beim ESP32 die Pins 18 und GND  

beim Start oder Reboot kurzzeitig miteinander verbunden werden.    
Nach erfolgreichem Löschen blinkt die Arduino-/ESP32-LED vier Sekunden lang.  
Beim erneuten Start werden dann die (Vor-)Einstellungen aus der Datei *BSB_LAN_config.h* übernommen, eine Anpassung kann danach wie gewohnt bspw. via Webinterface erfolgen.  


---
     
[Weiter zu Kapitel 7](kap07.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

