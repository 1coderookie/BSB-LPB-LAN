[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Anhang A1](anhang_a1.md)    
    
---
    

    
# Anhang A2: Anmerkungen zum Schaltplan
    

**Hinweis: Der Schaltplan für die ESP32-Variante des Adapters ist prinzipiell identisch, lediglich das EEPROM entfällt!**  
    
---

## A2.1 Kurze Legende zum Schaltplan

D1 = Leuchtdiode  
D2 = Diode  
EEPROM = EEPROM  
OK(x) = Optokoppler  
Q(x) = Transistor  
R(x) = Widerstand  
 
ARD = Arduino  
RPI = Raspberry Pi  

CL+/- = BSB-Anschluss  
DB/MB = LPB-Anschluss  

TXD = Digitalpin Senden  
RXD = Digitalpin Empfangen    
    
---
    
## A2.2 Teileliste

| Anzahl | Komponente | Bezeichnung | Abbildung | Anmerkung | 
|:-----------:|:-------------:|:----------:|:-----------:|:------:|  
| 1 | LED (rot) | D1 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/led_small.jpg"> | Betriebsspannung max. 2,8V, Sperrspannung 5V <br> *Einbaueinrichtung beachten!* |  
| 1 | Diode 1N4148 | D2 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/1n4148_small.jpg"> | <br> *Einbaueinrichtung beachten!* |  
| 1 | EEPROM 24LC32A-I/P | EEPROM | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/eeprom_small.jpg"> | nicht benötigt für die ESP32-Boardvariante <br> *Einbaueinrichtung beachten!* |  
| 2 | Optokoppler 4N25 | OK1, OK2 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/4n25_small.jpg"> | <br> *Einbaueinrichtung beachten!* |    
| 1 | Transistor BC547 | Q1 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bc547_small.jpg"> | <br> *Einbaueinrichtung beachten!* |  
| 1 | Transistor BC557 | Q2 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bc557_small.jpg"> | <br> *Einbaueinrichtung beachten!* |  
| 3 | Widerstand 330kΩ | R1, R4, R7 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/330k_small.png"> | orange, orange, schwarz, orange, braun | 
| 1 | Widerstand 1.5kΩ | R2 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/1k5_small.png"> | braun, grün, schwarz, braun, braun | 
| 1 | Widerstand 300Ω | R3 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/330_small.png"> | orange, orange, schwarz, schwarz, braun | 
| 2 | Widerstand 4.7kΩ | R5, R6 | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/4k7_small.png"> | gelb, violett, schwarz, braun, braun |  
| 1 | Anschlussklemme | CL+/CL | <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/klemme_small.jpg"> | RM 5,08mm |
    

***Arduino Due:***  
*Pinleisten (RM 2,54mm)*, ggf. IC-Sockel für Optokoppler und/oder EEPROM etc.  
  
Für den Einsatz des Adapters v4 an einem *Arduino Due* werden letztlich lediglich die Pins RX1, TX1, SDA, SCL, GND sowie Pin 53 benötigt und müssen daher zwingend mit entspr. Pinleisten bestückt werden. Die anderen Pins können optional zur Verbesserung der Stabilität bestückt und/oder anderweitig genutzt werden.  
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v4-unbestueckt_pins.jpg">  
  
*Zwingend zu bestückende Pins für die Verwendung mit dem Arduino Due.*  
  
***Raspberry Pi:***  
*Buchsenleiste / weibliche Pinheader (doppelreihig, RM 2,54mm)*, ggf. IC-Sockel für Optokoppler und/oder EEPROM etc.  
  
Für den Einsatz des Adapters v4 an einem *Raspberry Pi* sind andere Dinge zu beachten, die im [Kapitel 1.4](kap01.md#14-raspberry-pi) gesammelt aufgeführt sind.    
        
***ESP32:***  
*Buchsenleiste / weibliche Pinheader (RM 2,54mm; ESP32: einreihig; Olimex: doppelreihig 2x5)*, ggf. IC-Sockel für Optokoppler etc.  
  
Für den Einsatz des ESP32-spezifischen Adapters v4 an dem empfohlenen *ESP32 NodeMCU von Joy-It* werden letztlich lediglich die Pins RX2, TX2,  GND sowie 3,3V benötigt und müssen daher zwingend mit entspr. Pinheadern bestückt werden. Aus Stabilitätsgründen ist es jedoch empfehlenswert, beide Seiten komplett mit je einer Reihe Pinheadern zu bestücken.   
  
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ESP32-PCB.jpeg">  
  
*Die unbestückte ESP32-spezifische Adapterplatine.*  
        
    
---
    

## A2.3 Generelle Hinweise

***Vor dem Löten gilt: Bitte den Schaltplan aufmerksam studieren!***
  
Die folgenden Hinweise ersetzen kein grundsätzliches
Elektronik-Vorwissen, könnten aber vielleicht dem einen oder
anderen Elektronik-Anfänger eine kleine Hilfe sein.

Generell ist es hilfreich, die Bauteile erst einmal zu
positionieren und die 'Beine' der Komponenten leicht umzubiegen, so dass sie nicht herausfallen können. Dabei empfiehlt es sich, mit den kleinsten Bauteilen zu beginnen. Wenn du die Platine fertig bestückt hast, prüfe den Aufbau erneut. Insbesondere die korrekte Ausrichtung von Bauteilen wie Dioden, Transistoren und der ICs solltest du nochmals überprüfen. Sieht soweit alles gut aus, kannst du die Platine umdrehen und mit dem Verlöten beginnen. Benutze dabei nicht zu viel Lötzinn für die einzelnen Lötstellen und achte darauf, dass du nicht versehentlich Kurzschlüsse produzierst, indem du Lötstellen ungewollt mit einander verbindest.  
Ein vorheriger Breadboard-Testaufbau ist natürlich eine Option, aber
aufgrund nicht auszuschließender Problemquellen (Nutzung einer falschen
Steckreihe, eventuelle Wackelkontakte o.ä.) nicht unbedingt
empfehlenswert.

Bitte achte darauf, dass die Bauteile beim Löten nicht zu heiß werden,
da sie u. U. Schaden nehmen können. Für den Einsatz der Optokoppler-ICs
OK1 und OK2 sowie des EEPROMs bietet es sich daher an, einen entsprechenden IC-Sockel zu
verwenden und die Optokoppler und das EEPROM erst nach Fertigstellung der Lötarbeiten
in die Sockel zu stecken. Achte dabei auf die korrekte Ausrichtung der
Sockel und Optokoppler/EEPROM; ebenso ist auf die korrekte Ausrichtung von bspw.
Dioden und Transistoren zu achten!

Vor der Inbetriebnahme des Adapters ist es ratsam, die komplette
Bestückung nochmals gründlich zu überprüfen und (falls möglich)
durchzumessen. Kalte Lötstellen, versehentlich überbrückte Kontakte etc.
können ein unerklärliches und schwer zu diagnostizierendes Fehlverhalten
des Adpaters bis hin zu einem eventuellen Reglerdefekt nach sich ziehen!

Viel Erfolg!  
    
---
         
     
[Weiter zu Anhang B](anhang_b.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
