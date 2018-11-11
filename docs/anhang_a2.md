[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Anhang A1](anhang_a1.md)    
    
---
    

    
# Anhang A2: Anmerkungen zum Schaltplan #  
    
---
    


## A2.1 Kurze Legende zum Schaltplan ##

D1 = Leuchtdiode  
D2 = Diode  
Q(x) = Transistor  
R(x) = Widerstand  
U(x) = Optokoppler  
ARD = Arduino  
RPI = Raspberry Pi  
CL+/- = BSB-Anschluss  
DB/MB = LPB-Anschluss  
TXD = Digitalpin Senden  
RXD = Digitalpin Empfangen    
    
---
    

    
    
## A2.2 Teileliste ##

Für den Einsatz des Adapters an einem ***Arduino***:  
1x LED (rot) (Betriebsspannung max. 2,8V, Sperrspannung 5V) (→ D1)  
1x Diode 1N4148 (→ D2)  
1x Transistor BC547A (→ Q1)  
je 1x Widerstand 560kΩ (→ R1), 1,5kΩ (→ R2), 300Ω (→ R3), 4,7kΩ (→ R4)  
2x Optokoppler 4N25 (→ U1, U2) (plus optional 2x Sockel)
    
Für den Einsatz des Adapters an einem ***Raspberry*** *zusätzlich*:  
1x Widerstand 4,7kΩ (→ R11)  
2x Widerstand 10kΩ (→ R12, R13)  
1x Transistor BC557A (→ Q11)  
1x Transistor BC547A (→ Q12)  
    
Optional:  
Anschlussklemmen, Pinheader etc. für die Leitungen.  
    
---
    


## A2.3 Generelle Hinweise ##

***Vor dem Löten gilt: Bitte den Schaltplan aufmerksam studieren!***

***Wichtig:***  

*Bei Verwendung der vorgefertigten Platine ist für den Einsatz an einem*
***Arduino*** *zwingend die Verbindung SJ1 herzustellen!*  
*Die Bestückung von R11-13 sowie Q11&12 ist nicht nötig!*

*Für den Einsatz an einem* ***Raspberry*** *sind jedoch SJ2 und SJ3 zu
setzen!*  
*Ebenso sind in diesem Verwendungsfall die Komponenten R11-13 und Q11&12
zwingend erforderlich!*  
    
Die folgenden Hinweise ersetzen kein grundsätzliches
Elektronik-Vorwissen, könnten aber vielleicht doch dem einen oder
anderen Elektronik-Anfänger eine kleine Hilfe sein.

Generell ist es u.U. hilfreich, die Bauteile erst einmal zu
positionieren und erst am Schluss zu verlöten, so dass ein Vertauschen
der Komponenten verhindert wird.  
Ein vorheriger Breadboard-Testaufbau ist natürlich eine Option, aber
aufgrund nicht auszuschließender Problemquellen (Nutzung einer falschen
Steckreihe, eventuelle Wackelkontakte o.ä.) nicht unbedingt
empfehlenswert.

Bitte achte darauf, dass die Bauteile beim Löten nicht zu heiß werden,
da sie u.U. Schaden nehmen können. Für den Einsatz der Optokoppler-ICs
U1 und U2 bietet es sich daher an, einen entsprechenden IC-Sockel zu
verwenden und die Optokoppler erst nach Fertigstellung der Lötarbeiten
in die Sockel zu stecken. Achte dabei auf die korrekte Ausrichtung der
Sockel/Optokoppler; ebenso ist auf die korrekte Ausrichtung von bspw.
Dioden und Transistoren zu achten!

Vor der Inbetriebnahme des Adapters ist es ratsam, die komplette
Bestückung nochmals gründlich zu überprüfen und (falls möglich)
durchzumessen. Kalte Lötstellen, versehentlich überbrückte Kontakte,
nicht-gesetzte Lötverbindungen („SJ" bei der fertigen Platine) etc.
können ein unerklärliches und schwer zu diagnostizierendes Fehlverhalten
des Adpaters bis hin zu einem eventuellen Reglerdefekt nach sich ziehen!

Viel Erfolg!  
    
---
    


     
     
[Weiter zu Anhang B](anhang_b.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
