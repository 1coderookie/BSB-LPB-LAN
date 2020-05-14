[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 14](kap14.md)  
    
---
    
    
# 15. FAQ
    
---
    

## 15.1 Kann ich Adapter & Software mit einem Raspberry Pi nutzen?

Ja und nein.  
Der Adapter kann mit einem Raspberry Pi verwendet werden, wenn andere
Pinheader genutzt werden (weibliche statt männliche). Siehe hierzu bitte die folgenden Kapitel: [Kap. 12.9](kap12.md#129-raspberry-pi) sowie [Anhang A2.2](anhang_a2.md#a22-teileliste).

**Die BSB-LAN-Software kann NICHT mit einem RPi verwendet werden, sie ist
ausschließlich auf dem hier vorgestellten Arduino-System lauffähig!**  
Zur Nutzung des Adapters mit einem RPi muss eine vollkommen andere
Software genutzt werden. Weitere Informationen diesbezüglich sind in [Kap. 12.9](kap12.md#129-raspberry-pi) zu finden.  
    
---
    

## 15.2 Kann ich einen Adapter gleichzeitig an zwei Regler anschließen?

Nein, das geht leider nicht.

Derzeit benötigt man für jeden Regler einen Adapter bzw. ein komplettes
Hardware-Setup (Arduino, Ethernet-Shield, Adapter), um die jeweiligen
reglerspezifischen Parameter via BSB abrufen zu können.  
Sollten jedoch mehrere Regler vorhanden und bereits miteinander via LPB
verbunden sein, beachte bitte die folgende FAQ.  
    
---
    

## 15.3 Kann ich einen Adapter via LPB anschließen und mehrere Regler abfragen?

Ja, wenn die vorhandenen Regler bereits korrekt via LPB miteinander
verbunden und entsprechend konfiguriert sind (korrekte
LPB-Adressvergabe).  
Die Möglichkeit, Abfragen fallweise an unterschiedliche Regler zu
senden, ist mittlerweile gegeben, jedoch ist diese Funktion noch nicht
ausgiebig getestet. Siehe hierzu den entsprechenden Punkt in Kapitel [8.1](kap08.md#81-auflistung-und-beschreibung-der-url-befehle).  
    
---
    

## 15.4 Ist ein multifunktionaler Eingang des Reglers direkt via Adapter schaltbar?

Nein!

Die multifunktionalen Eingänge der Regler (bspw. H1, H2, H3 etc.) sind
nicht direkt an den Adapter anzuschließen!

Soll bspw. eine Betriebsartumschaltung oder Erzeugersperre mittels H1
als Arbeitskontakt realisiert werden, so muss der jeweilige Eingang den
Herstellerangaben entsprechend parametriert und belegt werden. Eine
Steuerung dieser Art muss mittels eines anzuschließenden Relais
erfolgen, dessen reglerseitiger Ausgang unbedingt potentialfrei sein
muss, d.h. es darf keinerlei Fremdspannung anliegen! Das Relais hat in
dem Fall lediglich die Aufgabe, den Kontakt zu schließen (oder zu
öffnen).

Das Relais wiederum kann jedoch unter bestimmten Umständen vom Arduino
gesteuert werden (bspw. mittels eines Relaisboards). Siehe hierzu auch Kap. [12.4](kap12.md#124-relais-und-relaisboards).

Entsprechende Relais findest du im Internet, bei Unsicherheiten solltest
du deinen Elektriker und/oder Heizungsinstallateur zu Rate ziehen. Eine
falsche Belegung und/oder Parametrierung kann den Regler u.U. zerstören!  
    
---
    

## 15.5 Ist zusätzlich ein Relaisboard am Arduino anschließ- und steuerbar?

Ja. Siehe diesbezüglich den entsprechenden Punkt in Kap. [8.1](kap08.md#81-auflistung-und-beschreibung-der-url-befehle) sowie Kap. [12.4](kap12.md#124-relais-und-relaisboards).  
    
---
    

## 15.6 Kann ich bspw. den Zustand eines angeschlossenen Koppelrelais abfragen?

Ja. Siehe diesbezüglich den entsprechenden Punkt in Kap. [8.1](kap08.md#81-auflistung-und-beschreibung-der-url-befehle).  
    
---
    

## 15.7 Kann ich behilflich sein, um bisher nicht unterstützte Parameter hinzuzufügen?
Ja! Wenn dein Heizungssystem über Parameter verfügt, die von der
Software bisher nicht unterstützt werden, würden wir uns sehr freuen,
wenn du uns unterstützt! Genauere Informationen zur Vorgehensweise sind
in Kap. [10](kap10.md) zu finden.  
    
---
    

## 15.8 Warum erscheinen bei einer Komplettabfrage einige Parameter doppelt?

Wenn du eine Komplettabfrage aller Parameter via URL-Befehl machst  
(`http://<IP-Adresse>/0-10000`) kann es sein, dass sich einige Parameter
bzw. Programmnummern in der Auflistung wiederholen. Dies kommt daher,
dass es es zwar unterschiedliche Parameter sind, diese aber die gleiche
Command ID haben. Dies stellt nur einen ‚optischen Mangel' dar, der die
Funktionalität nicht negativ beeinflusst.  
    
---
    

## 15.9 Warum werden manchmal bestimmte Parameter nicht angezeigt?

Wenn der Regler nach erfolgtem Adapteranschluss angeschaltet wird und
der Arduino zu diesem Zeitpunkt bereits lief, funktioniert die
automatische Reglererkennung nicht. Der Arduino muss dann lediglich
resettet bzw. aus- und wieder angeschaltet werden.  
  
Sollten dann bestimmte Parameter noch immer nicht erscheinen, so sollte
bitte einmal /Q ausgeführt und die Webausgabe gemeldet werden.  
    
---
    

## 15.10 Warum ist kein Zugriff auf angeschlossene Sensoren möglich?

Wenn du DHT22- und/oder DS18B20-Sensoren korrekt am Arduino/Adapter
angeschlossen hast, die entsprechenden Menüs im Webinterface jedoch
nicht anwählbar sind, hast du vermutlich die betreffenden Einträge in
der Datei *BSB\_lan\_config.h* nicht entsprechend angepasst.  
Siehe hierzu auch die Kapitel [5](kap05.md) und [12.3](kap12.md#123-verwendung-optionaler-sensoren-dht22-und-ds18b20).  
    
---
    

## 15.11 Ich nutze ein W5500-LAN-Shield, was muss ich tun?

Darauf achten, dass die aktuelle Version der Ethernet Bibliothek 
(mindestens Version 2.0) in der Arduino IDE vorhanden ist.   
    
---
    

## 15.12 Können Stati oder Werte als Push-Mitteilungen abgesetzt werden?

Nein, nicht ohne weitere Software wie z.B. FHEM. Dafür müsste ansonsten
die Therme ständig abgefragt werden, was den Bus (und die Erreichbarkeit
des Arduino) stark belasten würde. Die sinnvollere Variante wäre,
bestimmte Werte z.B. alle 60 Sekunden abzurufen und dann anhand
bestimmter Kriterien weitere Aktionen auszulösen.  
Bei FHEM wäre das mit DOIF oder NOTIFY möglich.  
    
---
    

## 15.13 Kann bspw. FHEM auf bestimmte Broadcasts ‚lauschen'?

FHEM kann zwar lauschen, aber BSB-LAN kann bisher keine eigenständigen
Nachrichten absetzen. Dazu müsste ein Hintergrundprozess die
auflaufenden Broadcast-Meldungen anhand konfigurierbarer Schwellenwerte
auswerten und über einen HTTP-Client-Aufruf an eine definierbare
Zieladresse absetzen. Ob dies mit dem begrenzten Speicherplatz des
Arduino noch umsetzbar ist, wäre fraglich. Wer sich aber daran probieren
möchte, ist herzlich eingeladen, dies zu tun!  
    
---
    

## 15.14 Warum kommt es manchmal zu timeout-Problemen bei FHEM?

Das könnte an der Dauer des Sende-/Empfangsvorgangs liegen. Man sollte
den timeout-Wert in FHEM so bemessen, dass für jeden Parameter pro
Setzbefehl zwei und pro Abfragebefehl eine Sekunde angesetzt werden.

Sind mehrere einzelne (BSB-LAN-spezifische) HTTPMOD-Abfragen definiert
und werden diese zum gleichen Zeitpunkt ausgeführt, kann es außerdem
vorkommen, dass es zu Kollisionen kommt und sie sich somit gegenseitig
‚behindern', da der Bus bereits von einer Abfrage belegt ist. Als
Abhilfe können hier entweder unterschiedliche Abfrageintervalle gewählt
oder alle Abfragen in eine HTTPMOD-Abfrage gelegt werden.

FHEM-Forumsmitglied *„frank"* hat den [Tipp](https://forum.fhem.de/index.php/topic,29762.msg841039.html#msg841039) 
gegeben, bei der Einbindung in FHEM ‚attr alignTime' zu nutzen, 
um Kollisionen bei den Abfragen zu verhindern.   
    
---
    


## 15.15 Gibt es ein Modul für FHEM?

Jein. Ein Modul wird gerade vom FHEM-Forumsmitglied *„justme1968"*
entwickelt:
[https://forum.fhem.de/index.php/topic,84381.0.html](https://forum.fhem.de/index.php/topic,84381.0.html)  
Die Entwicklung ist jedoch noch nicht abgeschlossen, so dass ein
zuverlässiger und problemloser Einsatz bisher noch nicht garantiert
werden kann.  
    
---
    


## 15.16 Warum werden unter /B bei Stufe 2 keine Werte angezeigt?

Wenn du einen Gasbrenner hast, so wird dieser höchstwahrscheinlich
modulieren und generell nicht über ein zweistufiges Brennersystem
verfügen; zweistufige Brenner kommen meist nur bei Ölbrennern zum
Einsatz. Die Unterscheidung der Brennerstufen wird mittels spezifischer
Broadcasts vorgenommen, die jedoch nicht jeder Regler sendet. In dem
Fall werden die Brennerstarts und -laufzeiten kumuliert unter Stufe 1
dargestellt. Bitte beachte diesbezüglich auch den Hinweis unter „/B" in Kap. [8.1](kap08.md#81-auflistung-und-beschreibung-der-url-befehle).  
    
---
    


## 15.17 Ich habe den Eindruck, die angezeigten Werte bei /B sind nicht korrekt.

Das kann durchaus sein. Die jeweiligen Starts und Laufzeiten werden
anhand von Broadcasts ermittelt, die automatisch vom Regler gesendet
werden. Manchmal kann es vorkommen, dass einzelne BCs nicht ankommen,
bspw. wenn zeitgleich eine Abfrage gestartet wird oder der Arduino das
Logfile lädt.  
    
---
    


## 15.18 Was ist der genaue Unterschied zwischen /M1 und /V1?

Mit dem URL-Befehl /M1 aktivierst du den Monitor-Modus, mit /V1 den
Verbositäts-Modus.

Mit aktivierter Monitor-Funktion (/M1) werden alle Daten, die über den
Bus gehen und nicht von BSB-LAN aus initiiert wurden, „roh" auf dem
seriellen Monitor ausgegeben.  
Dies kann sinnvoll sein, um Fehlfunktionen in der Datenübertragung
ausfindig zu machen, da ansonsten nur Meldungen von BSB-LAN verarbeitet
werden, die von ihrem Aufbau her korrekt sind. Das schließt auch die
Verarbeitung von Broadcast-Nachrichten ein, d.h. mit aktivierter
Monitor-Funktion findet keine Auswertung dieser Nachrichten statt.

Die Monitor-Funktion erlaubt es z.B. bei Fehlermeldungen genauer zu
sehen, ob eine Nachricht schlichtweg nicht auf dem Bus angekommen ist
oder ob BSB-LAN sie wegen fehlerhafter Übertragung verworfen hat. Die
volle Kontrolle hätte man mit einem zweiten BSB-LAN-Adapter, der auf dem
Bus lauscht und dann alle ein- und ausgehenden Nachrichten
protokolliert.

Mit (seit v0.41 per default) aktiviertem Verbositäts-Modus (/V1) werden
zu jedem von BSB-LAN initiierten Aufruf und der entsprechenden Antwort
neben dem Klartext auch die entsprechenden Rohdaten auf dem seriellen
Monitor ausgegeben, wenn die Nachricht von ihrem Aufbau her korrekt sind
und fehlerfrei übertragen wurden.  
Eine Auswertung von (fehlerfreien) Broadcasts findet hier weiterhin
statt. Es werden hier beim Senden aber nur die Daten ausgegeben, die
BSB-LAN vorbereitet hat. Dies muss nicht bedeuten, dass diese Daten -
z.B. bei Hardwarefehlern - auch auf dem Bus ankommen. Umgekehrt werden
beim Auswerten der Rückmeldung auf einen Befehl zwar die Daten
ausgegeben, die auf dem Bus zurück gekommen sind, aber nur dann, wenn
die Nachricht auch korrekt aufgebaut war.

Eine Kombination aus beiden Parametern ist möglich und führt dazu, dass
im Monitor-Modus auch bei von BSB-LAN initiierten Nachrichten die
Rohdaten ausgegeben werden - mit den bereits erwähnten Einschränkungen
des Verbositäts-Modus bezüglich des Verwerfens von nicht korrekt
aufgebauten Nachrichten.  
    
---
    


## 15.19 Kann ich eigenen Code in BSB-LAN einbinden?

Ja, dafür gibt es die Datei *BSB\_lan\_custom.h*. Hier können eigene
Programmteile geschrieben werden, die bei jedem Schleifendurchlauf
(loop) aufgerufen werden. Damit kann man z.B. unabhängig von externen
Home-Automations-Systemen Sensoren auswerten und/oder Relais schalten.  
Die Beispieldatei wertet z.B. zwei DHT22-Feuchtigkeits-/Temperatursensoren 
aus und schaltet beim Unter- bzw. Überschreiten ein Relais, das an einem 
digitalen Ausgang angeschlossen ist.  
    
---
    


## 15.20 Kann ich MAX!-Thermostate einbinden?

Ja, das ist möglich. Dazu musst du das entsprechende Definement in der
Datei *BSB\_lan\_config.h* aktivieren und anpassen. Mittels
entsprechender Modifikationen in der Datei *BSB\_lan\_custom.h* können
weitere Funktionen realisiert werden, mit der derzeitigen Programmierung
ist eine eigenständige Raum-Ist-Wert-Übermittlung (ohne FHEM) möglich.
Siehe auch die jeweiligen Punkte in den Kapiteln [5](kap05.md), [8.1](kap08.md#81-auflistung-und-beschreibung-der-url-befehle) sowie [12.5](kap12.md#125-max-komponenten).  
    
---
    


## 15.21 Warum ist der Adapter nach einem Stromausfall nicht mehr erreichbar?

Dieses Verhalten wurde des Öfteren bei den günstigen LAN-Shield-Clones
beobachtet, mit einem originalen Arduino-LAN-Shield scheint dieses
Problem nicht aufzutreten.  
Nach Drücken des Reset-Knopfes am Arduino ist der Adapter wieder wie
gewohnt erreichbar. Abhilfe könnte eine kleine USV für den Arduino
schaffen, so dass der Arduino nicht stromlos wird. Andere Lösungen sind
bisher nicht bekannt.  
    
---
    


## 15.22 Warum ist der Adapter (ohne Stromausfall) manchmal nicht mehr erreichbar?

Dieses Problem ist bisher nur vereinzelt aufgetreten, eine eindeutige
Lösung oder Erklärung für dieses Verhalten gibt es bisher noch nicht.
Bei dem Nutzer, der davon berichtete, kam ebenfalls ein günstiger
LAN-Shield-Clone zum Einsatz. Laut Mitschnitt des Seriellen Monitors
lief der BSB-LAN-Sketch ohne Probleme weiter, lediglich das LAN-Shield
war nicht mehr erreichbar. Abhilfe schaffte nur ein Reset. Sollte dieses
Verhalten auftreten, ist das Testen eines weiteren LAN-Shields zu
empfehlen, da Hardwareprobleme des betroffenen LAN-Shields nicht
auszuschließen sind. Der Einsatz eines originalen Arduino-LAN-Shields
ist selbstverständlich eine weitere Option.  

Des Weiteren kann es bei Clones mit einem W5100-Chip aufgrund fehlerhafter Bauteilbestückung zu diffusen Problemen kommen. Siehe hierzu Kap. [12.2](kap12.md#122-das-lan-shield).  


---
    


## 15.23 Warum kommen beim Senden manchmal ‚query failed'-Meldungen?

Wenn Befehle, die in der Regel problemlos gesendet werden können,
plötzlich ‚query failed'-Fehlermeldungen auslösen, könnte dies in der
eingesetzten Hardware begründet sein. Es scheint, als wenn einige
günstige Arduino-Clones zeitweise unzuverlässig arbeiten und
diffuse Probleme verursachen. Abhilfe könnte ein Austausch des Arduino
schaffen, der Einsatz eines originalen Arduino ist selbstverständlich
eine weitere Option.

Ein Nutzer berichtete von erfolgreichen Änderungen an der
Adapter-Hardware selbst, die er zur Eingrenzung des Problems vornahm.

Dieses Problem wird aktuell verfolgt und es wird aktiv nach einer Lösung
gesucht. Sollte sich der Austausch von Hardwarekomponenten des Adapters
bei solchen ‚Problem-Clones' als dauerhaft erfolgreich zeigen, so wird
dies kommuniziert und im Platinenlayout berücksichtigt werden.  
    
---
    


## 15.24 Ich finde keinen LPB- oder BSB-Anschluss, nur L-BUS und R-BUS?!

In diesem Fall schließe bitte den Adapter *NICHT* an und beachte das Kap. [3.3](kap03.md#33-hinweis-neue-modellgeneration---nicht-unterstützter-regler-von-brötje).  
    
---
    
## 15.25 Gibt es eine (W)LAN-Option für den Adapter?

Ja, s. Kap. [12.7](kap12.md#127-lan-optionen-für-den-bsb-lpb-lan-adapter).  
  
---  
  
## 15.26 Ich nutze das veraltete Setup Adapter v2 + Arduino Mega 2560 - muss ich irgendetwas beachten?  
  
Ja!  
1.) Zuerst muss jedoch Folgendes klargestellt werden: Wenn du zufrieden mit dem veralteten Setup bist und der Funktionsumfang von BSB-LAN deinen Ansprüchen bisher genügte, dann kannst du das Setup natürlich weiterhin verwenden. Aber: **In diesem Fall ist [BSB-LAN-Version v0.44](https://github.com/fredlcore/bsb_lan/releases/tag/v0.44) die letzte stabile und getestete Version für dein Setup!**  
Nachfolgende Versionen können u.U. auch laufen, allerdings wird der Mega 2560 höchstwahrscheinlich nicht genügend Speicher aufweisen. Du könntest versuchen, gewisse Funktionen zu deaktivieren (bspw. das Loggen auf die microSD-Karte), aber es gibt keine Garantie, dass ein problemloser Betrieb möglich sein wird.  
2.) *Du kannst den Adapter v2 NICHT mit einem Arduino Due verwenden!* Möchtest du also auch in Zukunft von den neuen Funktionen von BSB-LAN profitieren, musst du dir einen Adapter v3 besorgen oder selbst herstellen und ihn mit einem Arduino Due verwenden. Das LAN-Shield kannst du in dem Fall weiterverwenden, so dass du da ein bisschen Geld sparen kannst.. ;) 
  
---

## 15.27 Ich habe weitere Fragen, an wen kann ich mich wenden?

Das Beste wäre, wenn du dich dafür im FHEM-Forum
([https://forum.fhem.de/](https://forum.fhem.de/))
anmelden würdest, da dort speziell für diesen Adapter ein eigener Thread
existiert und sich dort eine nette und hilfsbereite Community findet.
Hier findet ein reger Austausch über die Hard- und Software statt,
Fragen werden meist zügig beantwortet und auf Updates wird hingewiesen.

Hier findest du den entsprechenden Thread:
[https://forum.fhem.de/index.php/topic,29762.0.html](https://forum.fhem.de/index.php/topic,29762.0.html)

Wenn du dich mit deinen Fragen vorstellst, gib uns bitte zuerst genaue
Informationen bzgl. des von dir verwendeten Heizungstyps, des Reglers,
des verwendeten Bus-Typs etc.

Wenn du den Adapter bereits erfolgreich angeschlossen und in Verwendung
hast, rufe bitte einmal /Q (`http://<IP-Adresse>/Q`) auf und schreibe die Ausgabe
zusätzlich mit in deine Beschreibung.

Prinzipiell kann man sagen: Lieber erst einmal zu viele Informationen,
als zu wenige.

Fragen, deren Antworten sich aus dem gründlichen Lesen dieses Handbuchs
ergeben, werden ab einem gewissen Punkt lediglich mit einem Verweis
hierauf beantwortet. Bitte bedenke, dass dies für jeden von uns nur ein
Hobby-Projekt ist.  
    
---
         
     
[Weiter zu Kapitel 16](kap16.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

