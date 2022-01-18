[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 2](kap02.md)    
    
---
    
# 3. BSB-LAN Setup: Anschluss und Inbetriebnahme

----  
  
## 3.1 Anschluss des Adapters  
  
**Prinzipiell erfolgt der Anschluss des Adapters analog zu dem Anschluss optionaler Raumgeräte. Die jeweiligen Kontakte sind den herstellerspezifischen Unterlagen zum Heizungssystem zu entnehmen.**  
  
Ist nur ein BSB-Anschluss verfügbar (bspw. bei Wärmepumpen mit einem RVS21-Regler) und/oder bereits ein Raumgerät vorhanden, so kann der Adapter parallel zu einem bereits installierten Raumgerät an die gleichen Anschlüsse angeschlossen werden.  
  
| Hinweise |
|:--------|
| Da es sich bei BSB um ein Bussystem handelt, kann der Adapter auch bei einem bereits im Wohnraum installierten kabelgebundenen Raumgerät angeschlossen werden! <br> Sollte kein Raumgerät vorhanden sein, so sollte man überprüfen, ob es nicht einfacher ist, ein langes dünnes zweiadriges Buskabel in die Wohnung zu verlegen als ein langes LAN-Kabel. <br> Es ist also nicht zwingend nötig, den Adapter unmittelbar am Aufstellort der Heizung anzuschließen! |
| Beim Anschließen des Adapters sollte der betreffende Regler sicherheitshalber stets ausgeschaltet sein, ebenso bei einem Entfernen des Adapters. |
| Es ist unbedingt darauf zu achten, dass der Regler polrichtig angeschlossen wird! <br> Ein verkehrter Anschluss kann eine Beschädigung des Reglers und/oder Adapters zur Folge haben! |   

Im Folgenden wird der Anschluss des BSB-LAN-Adapters an die möglichen Anschlüsse der verschiedenen Heizungsregler ausführlich beschrieben.   
Sollte man bereits die entspr. Anschlüsse ausfindig gemacht haben, so lässt sich das Procedere auf drei Schritte verkürzt beschreiben:  
 
1. Schalte deine Heizung aus, damit der Heizungsregler stromlos ist.  

2. Schließe nun den BSB-LAN-Adapter an den Regler an. Verbinde dazu die reglerseitigen Anschlüsse "CL+" und "CL-" (bei BSB-Verwendung) bzw. "DB" und "MB" (bei LPB-Verwendung) mit den gleichnamigen Anschlüssen des Adapters. Achte auf die korrekte Verbindung: Die verbundenen Anschlüsse müssen *namensgleich* sein, also bspw. "CL+" an "CL+" und "CL-" an "CL-"!   

3. Schalte die Heizung bzw. den Heizungsregler wieder ein. 

  
---  
  
**Adapterplatine:**  
Bei der Adapterplatine sind die Anschlüsse mit CL+/DB und CL-/MB gekennzeichnet. Bei einem Nachbau ist der Schaltplan zu beachten.  
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-unbestueckt_anschluss.jpeg">
  
*Die unbestückte Platine.*  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-bestueckt_anschluss.jpeg">
  
*Die bestückte Platine.*    
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/HW-Setup.jpg">
    
*Das komplette Setup (Arduino Due + LAN-Shield + BSB-LPB-LAN-Adapter v3) inklusive der entsprechenden Kabel.*  
  
---  
  
**BSB:**  
Der Anschluss des Adapters erfolgt an den beschriebenen Pins des BSB mit 'Plus an Plus' und 'Minus an Minus':  
Adapter-"CL+" an Regler-"CL+" sowie  
Adapter-"CL-" an Regler-"CL-".  
  
Der zusätzliche Anschluss „G+“ beim BSB führt konstante 12V und ist für die Hintergrundbeleuchtung der entsprechenden Raumgeräte vorgesehen. Dieser ist für den Anschluss des Adapters NICHT zu verwenden!  
(Sollte der Adapter irrtümlicherweise an G+ statt an CL+ angeschlossen werden, so leuchtet zwar die LED, allerdings ist keinerlei Funktion gegeben.)  
  
---  
  
**LPB:**  
Der Anschluss des Adapters erfolgt an den beschriebenen Pins des LPB, meist mit DB und MB gekennzeichnet:  
Adapter-"DB" an Regler-"DB" sowie  
Adapter-"MB" an Regler-"MB".  
  
---  
  
**PPS:**  
Hier sind es häufig die die Anschlüsse A6 und M oder MD, wobei dann  
"A6" an "CL+" und  
"M"/"MD" an "CL-"  
des Adapters anzuschließen ist.  
  

---  

***Kennzeichnung der Anschlüsse:***  
   
-   Der **BSB** ist hersteller- und reglerübergreifend leider nicht einheitlich gekennzeichnet. Mögliche Bezeichnungen sind u.a.:  
    - „CL+ & CL-"   
    - „FB" (Fernbedienung = Raumgerät)  
    - „BSB" (bei FB und BSB manchmal zusätzlich mit Nennung der Pole „CL+ & CL-")  
    - „BSB & M" (bei der Kennzeichnung „BSB & M" entspricht BSB → CL+ und M → CL-)
    - "X86" bei einem RVS21-Regler (s. Abb. weiter unten)  
    
    Ist bei den jeweiligen Anschlüssen lediglich eine Nummerierung zu erkennen (häufig bei "FB": 1,2,3), so ist in der spezifischen Bedienungsanleitung nachzusehen, welche dieser Pins mit CL+ und CL- belegt sind.  
    Bitte den Anschluss G+ *nicht* benutzen, dies ist kein Buspin!  
    Der Anschluss des Adapters an den BSB erfolgt wie erwähnt analog zu dem Anschluss von Raumgeräten. In der gerätespezifischen  Bedienungsanleitung finden sich diesbzgl. die reglerspezifischen Angaben. Am Regler selbst sind manchmal auch kleine Abbildungen angebracht, die ein Raumgerät darstellen sollen - auch dies kann zum Auffinden des benötigten Anschlusses hilfreich sein.  
  
-   Der **LPB** ist bei einigen Reglern als solcher gekennzeichnet, manchmal aber auch nur mit den Bezeichnungen „DB"(+) und „MB"(-) versehen.  
   
---   
   
**Die folgenden Abbildungen zeigen exemplarisch die Anschlüsse bei verschiedenen Reglermodellen:**    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-lpb-anschluss.jpg">

*BSB (FB mit CL+ & CL-) und LPB (DB & MB) bei einem Brötje ISR-RVS43.222-Regler.*  
    
---    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-lpb-anschluss-2.jpg">
    
*Anschlüsse b = BSB (CL+ & CL-) und a = LPB (DB & MB) bei einem Siemens RVS63.283-Regler.*  
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BSB-LMS.jpg">  

*BSB am "FB"-Anschluss bei einem LMS1x-Regler.*  
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/BSB-X86-RVS21.jpg">      

*BSB am "X86"-Anschluss eines RVS21-Reglers.* 
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/Baxi_Luna_BSB.png">      

*BSB am "M2"-Anschlussblock (hinter der Kunststoffabdeckung links im Bild) einer Baxi Luna Platinum.*  
*User "olympia" hat freundlicherweise eine Anleitung für das Anschließen für die Baxi Luna Platinum geschrieben und auf [seinem GitHub-Account](https://github.com/olympia/BaxiPlatinum_BSB_LAN/blob/main/LunaPlatinum-BSBLAN.pdf) zur Verfügung gestellt. Vielen Dank dafür!* 
   
---   
   
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-servicebuchse.jpg">
    
*BSB (CL+ & CL-) an der vierpoligen Servicebuchse vorne in der Bedieneinheit eines ISR Plus. Die (dauerhafte) Verwendung dieses Anschlusses ist aufgrund einer mangelnden Zugentlastung jedoch nicht zu empfehlen.*  
   
---
  
| **Hinweise zum Anschlussstecker** |
|:------------------------------|
| Der Anschluss der Leitungen an die jeweiligen Kontakte sollte prinzipiell immer mit den spezifischen Steckern erfolgen, sofern diese vorhanden sind. Eine umfassende Nennung der entsprechenden Stecker kann hier leider nicht erfolgen, da die Stecker kodiert und teilweise unterschiedlich belegt sind. Meist findet man aber in den Bedienungsanleitungen Teilenummern der passenden Stecker, um ein Raumgerät an den Regler anzuschließen. <br> Beispielhaft sei hier der Stecker für den dreipoligen FB-Anschluss genannt, der bei den meisten Reglern zu passen scheint: [Brötje Stecker Raumgerät ISR, Rast 5- 3pol. = 627528](https://polo.broetje.de/mobile/mobile_view.php?type=1&pid=5316&w=1680&h=1050) | 
| **BSB / LPB / PPS:** Sollten die originalen Stecker nicht unmittelbar erhältlich oder verfügbar sein, können auch (möglichst isolierte) 6,3mm-Kabelschuhe verwendet werden. |
| **Vierpoliger Servicestecker:** Für den (vorübergehenden) Anschluss am vierpoligen Servicestecker vorne am Bedienteil können 2,54mm DuPont-Stecker (weiblich) genutzt werden. Diese finden sich bspw. bei den typischen Breadboard-Verbindungskabeln und bei diversen Kabeln im Desktop-PC-Bereich (bspw. interner Lüfteranschluss, interner Lautsprecher). |   
   
     
| **Hinweise zum Kabel** | 
|:-----------------------|
| **LPB:** Um vor Störeinflüssen möglichst geschützt zu sein, sollten die Anschlusskabel für den LPB-Anschluss gemäß LPB-Projektierungsgrundlagen1 einen Querschnitt von 1,5mm² aufweisen, zweiadrig verdrillt und geschirmt sein (Leitungslänge max. 250m pro Busteilnehmer, max. Gesamtlänge 1000m). |
| **BSB:** Für den BSB-Anschluss sind Cu-Leitungen mit mindestens 0,8mm² (bis 20m) Querschnitt zu wählen, bspw. LIYY oder LiYCY 2 x 0,8. Bei Leitungslängen bis 80m sollte 1mm², bis 120m sollten 1,5mm² Querschnitt gewählt werden. | 
| Generell ist eine parallele Verlegung mit Netzleitungen zu vermeiden (Störsignale), geschirmte Leitungen sind ungeschirmten Leitungen immer vorzuziehen. |  
| Entgegen der offiziellen Empfehlungen berichteten verschiedene Nutzer von positiven Ergebnissen mit Telefon-Verlegekabeln, 0.5-0.75mm Lautsprecherkabeln etc. Bevor also ein Kauf neuer Kabel getätigt wird, kann auch bereits vorhandenes Kabel getestet werden. | 
   
---
    
## 3.2 Funktionsüberprüfung und erste Nutzung

Um zu überprüfen, ob der angeschlossene Regler korrekt erkannt wird, sollte bei der Ersteinrichtung eine Funktionsüberprüfung vorgenommen werden.  
Dazu bietet sich folgende Vorgehensweise an:  

1.  Den Regler ausschalten und *polrichtig* mit dem Adapter via BSB verbinden.  
    
    | Hinweis |
    |:--------|
    | Wenn (später) der LPB genutzt werden soll, muss sowohl der Bus-Typ in der Datei BSB_LAN_config.h als auch der Anschluss am Regler geändert werden! |

2.  Den Regler einschalten und überprüfen, ob die rote LED auf dem Adapter leuchtet.  
    Sollte die LED in unregelmäßigen Abständen flackern, ist dies keine Fehlfunktion, sondern zeigt Aktivität auf dem Bus an.  

3.  Den Arduino Due nun via USB (nutze den "Programming Port" in der Boardmitte) bzw. das ESP32-Board via USB mit dem PC und via LAN/WLAN mit dem Netzwerk     verbinden.

4.  Nun die Arduino IDE starten, den korrekten Anschluss des Arduino Due bzw. ESP32-Boards auswählen (COM-Port) und dann unter ‚Werkzeuge' den ‚Seriellen Monitor' starten. Achte darauf, dass unten rechts die Übertragungsgeschwindigkeit auf 115200 Baud eingestellt ist.  

5.  Wird der angeschlossene Regler automatisch korrekt erkannt, steht am Anfang der Ausgabe des seriellen Monitors bei „Device family" und „Device variant" jeweils ein Wert, der nicht „0" ist.  
    
    Die Ausgabe eines korrekt erkannten Reglers sieht bspw. so aus:    
    
    ```
    \[...\]  
    Device family: 96  
    Device variant: 100  
    \[...\]  
    ```
    
Die folgende Abbildung zeigt exemplarisch den Auszug einer solchen Ausgabe des 'Seriellen Monitors' der Arduino IDE nach erfolgreichem Start.  
Der Adapter ist im folgenden Beispiel mit der Standardeinstellung als "LAN" konfiguriert und fragt zur automatischen Erkennung beim Startvorgang einmalig die Parameter 6225 und 6226 des Heizungsreglers ab.  
Die darauf folgenden Zeilen sind bereits empfangene Telegramme.  
Die Anzeige des kesselseitigen Steuerungsdisplays (hier: Kesseltemperatur) erscheint regelmäßig als sog. Broadcast (BC) vom Heizungsregler (Kennung "HEIZ").  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/SerMo_start_DE.png">
        
| Hinweis |
|:--------|
| Sollten in der Ausgabe des SerMo nur kryptische Zeichen erscheinen, so stelle bitte die Übertragungsrate rechts unten im Fenster auf 115200 Baud. |
   
  
**Überprüfen, ob der BSB-LAN-Server erreichbar ist**  

Als ersten Funktionstest, ob der BSB-LAN-Server erreichbar ist, gib nun die spezifische URL deines Setups ein (bei der Verwendung von DHCP erscheint die IP beim Startvorgang im SerMo). Du solltest nun auf die Startseite des BSB-LAN-Servers gelangen:  

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/webinterface_startseite.png">

Zur weiteren Funktionsüberprüfung fahre nun mit dem Schritt im nächsten Kapitel fort. Sollte wider Erwarten bereits jetzt klar sein, dass eine Fehlfunktion vorliegt (was bspw. dadurch zu erkennen ist, dass bei der o.g. Ausgabe von "Device family" und "Device variant" jeweils eine "0" steht), fahre mit [Kap. 3.4](kap03.md#34-debugging-und-fehlersuche) fort.   

   
---

## 3.3 Überprüfen auf nicht-freigegebene reglerspezifische Command IDs

| Hinweis |
|:--------|
| Das nachfolgend beschriebene Procedere betrifft Regler, die per BSB oder LPB an das BSB-LAN-Setup angeschlossen sind. Solltest du einen Regler per PPS angeschlossen haben, so erübrigt sich das nachfolgend Geschriebene, da die Funktion `/Q` bei PPS-Reglern nicht verfügbar ist. Dort erscheint lediglich folgende Ausgabe: <br> 
`Scanne nach Geräten...` <br> `Complete dump:` <br> `Not supported by this device. No problem.` <br> `Fertig.` |   
| Einschränkungen gibt es ebenfalls bei Reglern, die über einen LPB angeschlossen sind, der durch die Nachrüstung mittels OCI420 verfügbar geworden ist (also LMU54/64 Regler). Hier sollten anfangs zwar die entspr. Gerätedaten aufgeführt werden, der "complete dump" ist jedoch ebenfall nicht verfügbar. |   
  
Als ersten Funktionstest und als Überprüfung ob für den spezfischen Reglertyp (bei erfolgreicher Erkennung), der via BSB oder LPB angeschlossen ist, alle verfügbaren Parameter freigegeben sind, klicke nun auf den Button "Prüfe auf neue Parameter" oder führe folgenden URL-Befehl aus:  

`http://<IP-Adresse>/Q`  

*Achtung: Diese Abfrage dauert eine Weile - bitte warte, bis der ganze 'complete dump' abgeschlossen ist!*  
  
Diese Funktion geht alle Command IDs durch, die in der Datei *BSB_LAN_defs.h* hinterlegt sind und schickt diejenigen, die nicht für den eigenen Reglertyp hinterlegt sind, als Anfrage-Parameter (Typ QUR, 0x06) an den Regler.  
Das passiert bei Parametern, bei denen bisher nur eine Command ID bekannt ist, ständig und erzeugt die bekannten „error 7 (parameter not supported)"-Fehlermeldungen.  

Sobald aber mehr als eine Command ID bekannt ist, bleibt die bisherige Command ID i.d.R. auf "DEV_ALL", ist also für alle Regler der Standard, und die neue Command ID wird erst einmal nur für die Therme freigeschaltet, die diese Command ID gemeldet hat.  

Da es aber auch genauso gut umgekehrt sein kann, dass die "neue" Command ID der Standard ist, und die "alte" Command ID der Sonderfall, geht /Q nun die Command IDs durch, die nicht dem eigenen Regler zugewiesen sind. Häufig können dort noch eine Reihe "neuer" Parameter freigeschaltet werden.  

| Hinweis |
|:--------|
| Es wird hierbei immer nur eine Anfrage mit einer Command ID an den Regler geschickt! <br> Der Regler beantwortet diese entweder mit einer Fehlermeldung (Typ ERR, 0x08) oder einer Antwort mit einem Datenpaket (Typ ANS, 0x07). <br> *In keinem Fall werden dabei Werte gesetzt oder Reglereinstellungen verändert! Dafür müsste ein ganz anderer Telegramm-Typ gesetzt werden (entweder Typ SET, 0x03 oder Typ INF, 0x02) - das macht /Q explizit nicht!* | 

Wenn bereits alle Parameter für den Reglertyp bekannt und freigegeben sind, sieht die auf `http://<IP-Adresse>/Q` folgende Webausgabe exemplarisch so aus:
    
```
Version: 2.0.108-20211114123620
Scanne nach Geräten...
Geräteadresse gefunden: 0
Geräteadresse gefunden: 3
Teste Geräteadresse 0...
Gerätefamilie: 134
Gerätevariante: 146
Geräte-Identifikation: RVS43.345/146
Software-Version: 4.1
Entwicklungs-Index:  000002 - decoding error
Objektverzeichnis-Version: 301.1
Bootloader-Version:  (parameter not supported)
EEPROM-Version: ---
Konfiguration - Info 2 OEM:  (parameter not supported)
Parameterversion:  000001 - unknown type
Parametersatznummer:  000001 - unknown type
Kesseltypnummer OEM:  (parameter not supported)
Parametersatzgruppe OEM:  (parameter not supported)
Bisher unbekannte Geräteabfrage: 20
Parametersatznummer OEM:  (parameter not supported)
Info 3 OEM:  (parameter not supported)
Info 4 OEM:  (parameter not supported)
Bisher unbekannte Geräteabfrage:  04016301F4 - unknown type
Hersteller-ID (letzten vier Bytes): 34979
Außentemperatur (10003): 3.9 °C
Außentemperatur (10004): 3.9 °C
6225;6226;6224;6220;6221;6227;6229;6231;6232;6233;6234;6235;6223;6236;6258;6259;6343;6344;
134;146;RVS43.345/146;4.1;;301.1;---;;000001;000001;;;20;;;;04016301F4;34979;

Starte Test...

Test beendet.  

Complete dump:
DC 80 42 17 13 00 01 11 05 0A 8C 01 F5 11 03 08 8A 00 99 19 03 BD 9B
DC 80 42 15 13 00 02 01 05 05 B2 02 04 11 00 0D 4F 00 7A 2A D4
DC 80 42 17 13 00 03 11 06 0A 8C 02 09 11 03 08 8A 00 99 19 03 2F 51
DC 80 42 15 13 00 04 01 06 05 B2 02 18 11 00 0D 4F 00 7A B8 55
[...]
Fertig.
```
    
Eine entsprechende Webausgabe bei bisher nicht-freigegebenen Parametern (siehe die aufgeführten Parameter mit dem Hinweis "error 7 (parameter not supported)" zwischen "Starte Test..." und "Test beendet.") für den spezifischen Regler hingegen sieht exemplarisch so aus:
    
```
Version: 2.0.108-20211114123620
Scanne nach Geräten...
Geräteadresse gefunden: 0
Geräteadresse gefunden: 3
Teste Geräteadresse 0...
Gerätefamilie: 134
Gerätevariante: 146
Geräte-Identifikation: RVS43.345/146
Software-Version: 4.1
Entwicklungs-Index:  000002 - decoding error
Objektverzeichnis-Version: 301.1
Bootloader-Version:  (parameter not supported)
EEPROM-Version: ---
Konfiguration - Info 2 OEM:  (parameter not supported)
Parameterversion:  000001 - unknown type
Parametersatznummer:  000001 - unknown type
Kesseltypnummer OEM:  (parameter not supported)
Parametersatzgruppe OEM:  (parameter not supported)
Bisher unbekannte Geräteabfrage: 20
Parametersatznummer OEM:  (parameter not supported)
Info 3 OEM:  (parameter not supported)
Info 4 OEM:  (parameter not supported)
Bisher unbekannte Geräteabfrage:  04016301F4 - unknown type
Hersteller-ID (letzten vier Bytes): 34979
Außentemperatur (10003): 3.9 °C
Außentemperatur (10004): 3.9 °C
6225;6226;6224;6220;6221;6227;6229;6231;6232;6233;6234;6235;6223;6236;6258;6259;6343;6344;
134;146;RVS43.345/146;4.1;;301.1;---;;000001;000001;;;20;;;;04016301F4;34979;

Starte Test...

5450 - Trinkwasser Durchlauferhitzer - Schwelle zum Beenden einer BW-Zapfung bei DLH
0x313D10B5
DC C2 00 0B 06 3D 31 10 B5 9F A2
DC 80 42 0D 07 31 3D 10 B5 00 10 02 00

5451 - Trinkwasser Durchlauferhitzer - Schwelle für Bw-Zapfung bei DLH in Komfort
0x313D10B6
DC C2 00 0B 06 3D 31 10 B6 AF C1
DC 80 42 0D 07 31 3D 10 B6 00 C0 90 2D

5452 - Trinkwasser Durchlauferhitzer - Schwelle für Bw-Zapfung bei Dlh in Heizbetrieb
0x313D10B7
DC C2 00 0B 06 3D 31 10 B7 BF E0
DC 80 42 0D 07 31 3D 10 B7 00 C0 A7 1D

5455 - Trinkwasser Durchlauferhitzer - Sollwertkorrektur bei Auslaufregelung mit 40°C (°K)
0x313D10B8
DC C2 00 0B 06 3D 31 10 B8 4E 0F
DC 80 42 0D 07 31 3D 10 B8 00 00 52 60

5456 - Trinkwasser Durchlauferhitzer - Sollwertkorrektur bei Auslaufregelung mit 60°C (°K)
0x313D10B9
DC C2 00 0B 06 3D 31 10 B9 5E 2E
DC 80 42 0D 07 31 3D 10 B9 00 00 65 50 

Test beendet.

Fertig.  

Complete dump:
DC 80 42 17 13 00 01 11 05 0A 8C 01 F5 11 03 08 8A 00 99 19 03 BD 9B
DC 80 42 15 13 00 02 01 05 05 B2 02 04 11 00 0D 4F 00 7A 2A D4
DC 80 42 17 13 00 03 11 06 0A 8C 02 09 11 03 08 8A 00 99 19 03 2F 51
DC 80 42 15 13 00 04 01 06 05 B2 02 18 11 00 0D 4F 00 7A B8 55
[...]
Fertig.
```  
    
In diesem Fall sollte die Webausgabe bitte kopiert und im [FHEM-Forum](http://forum.fhem.de/index.php/topic,29762.0.html) oder via Email an Frederik (bsb (ät) code-it.de) gemeldet werden, damit eine entsprechende Anpassung vorgenommen werden kann.  
        
Wenn die Q-Abfrage erfolgreich beendet wurde, ist das BSB-LAN-Setup korrekt installiert und verwendungsfähig.  

---

## 3.4 Debugging und Fehlersuche

Sollten wider Erwarten Probleme auftauchen und das BSB-LAN-Setup nicht verwendungsfähig sein, so kann dies mehrere Ursachen haben.  

Als erste Maßnahme bietet sich immer an, die Verkabelung zu überprüfen und nachzusehen, ob die rote LED auf dem BSB-LAN-Adapter leuchtet.  

Als weiterer Schritt ist es immer sinnvoll, den Mikrocontroller zusätzlich an den PC anzuschließen und den Seriellen Monitor (SerMo) der Arduino IDE zu starten. Dort kann der Startvorgang überprüft werden. Sollten in der Ausgabe nur kryptische Zeichenfolgen erscheinen, so ist die eingestellte Baudrate zu überprüfen (unten rechts). Diese sollte auf 115200 Baud eingestellt sein.   
    
Wird der angeschlossene Regler *nicht* automatisch korrekt erkannt, steht bei „Device family" und „Device variant" jeweils eine „0", zusätzlich stehen vor „Device family" sechs Zeilen „query failed".  
  
*Beispiel:*  
```
[...]  
query failed  
query failed  
query failed  
query failed  
query failed  
query failed  
Device family: 0  
Device variant: 0  
[...]
```
Meist liegt der Grund hierfür dann in einem Problem des Hardware-Setups oder der Verkabelung, da die Parameter 6225 und 6226 nicht erfolgreich abgerufen werden konnten ([Fehlermeldung "query failed"](kap13.md#133-fehlermeldung-query-failed)").  

Weitere Gründe für Fehlfunktionen sind in den Kapiteln [13](kap13.md), [14](kap14.md) und [15](kap15.md) aufgeführt.  



---

     
[Weiter zu Kapitel 4](kap04.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

