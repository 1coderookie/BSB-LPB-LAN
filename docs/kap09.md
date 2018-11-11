[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 8](kap08.md)    
    
---
    

    
# 9. Loggen von Daten #  
    
---
    
## 9.1 Verwendung des Adapters als Standalone-Logger mittels BSB-LAN ##

Stecke eine FAT32-formatierte microSD-Karte in den
Speicherkartenplatz des Ethernet-Shields, bevor du den Arduino
einschaltest.  
    
***Hinweis:***  
*Vereinzelt kann es vorkommen, dass bestimmte mSD-Karten nicht 
problemlos vom LAN-Shield erkannt werden. Sollte dieses 
Problem auftreten, so ist die Verwendung von Karten mit Speichergrößen 
von 1GB, 2GB bis max. 4GB zu empfehlen. Sollten auch diese Probleme 
bereiten, versuche es mit einer Formatierung als FAT16.*  
    
Aktiviere vor dem Flashen das Definement `#define LOGGER` in der Datei
*BSB\_lan\_config.h*, füge die zu loggenden Parameter zur Variable
`log_parameters` hinzu und bestimme das Logintervall mit der Variable
`log_interval`. Bitte beachte auch die entsprechenden Punkte in Kap. [8.1](kap08.md#81-auflistung-und-beschreibung-der-url-befehle).
Später können während der Laufzeit sowohl das Intervall als auch die
Logging-Parameter mittels des Befehls
`"/L=[Intervall],[Parameter1],...,[Parameter20]"` geändert
werden.

Sämtliche Daten werden auf der Karte in der Datei *datalog.txt* im
CSV-Format gespeichert und können somit leicht in Excel oder OpenOffice
Calc importiert werden.  

Der Dateiinhalt kann mit dem URL-Befehl `/D` eingesehen werden, eine
graphische Darstellung der Logdateien erfolgt mittels `/DG`.  

Um die Datei *datalog.txt* zu löschen und neu zu erstellen, benutze den
Befehl `/D0`.  
    
***Hinweise:***
*Die Ausführung des URL-Befehls `/D0` sollte ebenfalls bei der ersten Benutzung erfolgen,
da hierdurch die Datei mit dem passenden CSV-Header initiiert wird.*

*Bitte beachte, dass der Arduino keine exakte Uhr ist. Auch wenn du bspw.
das Intervall auf 60 Sekunden eingestellt hast, weicht die in der Datei
dargestellte Zeit (welche von der Heizungssteuerung empfangen wird)
möglicherweise davon ab - dies kann bis zu einer Sekunde pro Minute
betragen.  
Sollte eine exakte Logzeit unbedingt erforderlich sein, kannst du die
durchschnittliche Zeitabweichung zwischen der Arduino-Zeit und der
wirklichen Zeit ermitteln, das Log-Intervall entsprechend anpassen und
bspw. 59 Sekunden anstatt 60 Sekunden einstellen.*  
    
---
    
## 9.2 Verwendung des Adapters als Remote-Logger ##

Neben dem Einsatz komplexer Systeme wie bspw. FHEM und den spezifischen
Log-Lösungen kann bspw. folgender Befehl[^24] periodisch ausgeführt
werden (z.B. per cron job):
    
```
DATE=`date +%Y%m%d%H%M%S`; wget -qO- http://192.168.178.88/8310/720/710 | egrep "(8310|720|710)" | sed "s/^/$DATE /" >> log.txt  
```
    
Das aus diesem Beispiel resultierende Logfile \'*log.txt*\' enthält die
aufgezeichneten Werte der Parameter 8310, 720 und 710.\
Später kannst du das Logfile basierend auf den Parameternummern
sortieren, nutze hierfür den Befehl \'sort\':

`sort -k2 log.txt`  
    
***Hinweis:***  
*Die IP, ggf. aktivierte optionale Sicherheitsfunktionen, die gewünschten 
Parameter etc. sind im obigen Beispiel anzupassen.*  
    
       
    
---
    

[Weiter zu Kapitel 10](kap10.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    
###### *&copy; Ulf Dieckmann*



