[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Anhang A1](anhang_a1.md)    
    
---
    

    
# Anhang A2: Anmerkungen zum Schaltplan
    
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

- 1x LED (rot) (Betriebsspannung max. 2,8V, Sperrspannung 5V) (→ D1)  
- 1x Diode 1N4148 (→ D2)  
- 1x EEPROM 24LC32A-I/P (→ EEPROM)  
- 2x Optokoppler 4N25 (→ OK1, OK2)    
- 1x Transistor BC547 (→ Q1)  
- 1x Transistor BC557 (→ Q2)  
- 3x Widerstand 330kΩ (→ R1, R4, R7) 
- 1x Widerstand 1.5kΩ (→ R2) 
- 1x Widerstand 300Ω (→ R3) 
- 2x Widerstand 4.7kΩ (→ R5, R6)  
    

Optional:  
Anschlussklemmen, Pinleisten 2.54mm (→ Einsatz am Arduino) bzw. zusätzlich Buchsenleiste 2.54mm (→ zusätzlich zu Pinleisten für den Einsatz am RaspberryPi), IC-Sockel für Optokoppler und/oder EEPROM etc.  
    
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
