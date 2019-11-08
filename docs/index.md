## Handbuch zum BSB-LPB-LAN-Adapter   

Dieses Handbuch wurde geschrieben, um den Einstieg in die Benutzung des
BSB-LPB-LAN-Adapters (Platinenlayout v2, Arduino-Version) und der dazugehörigen BSB-LAN-Software 
zu vereinfachen und um als Nachschlagewerk zu dienen.  

***Es wird empfohlen, dieses Handbuch vor einer initialen
Verwendung des BSB-LPB-LAN-Adapters komplett zu lesen.***    
    
---  
  
Das Copyright des Handbuchs liegt bei dem Autor Ulf Dieckmann.
  
---  
    
### Hier geht es direkt zum [Inhaltsverzeichnis](inhaltsverzeichnis.md). ###  
    
### Zum Ausdrucken besser geeignet: [Die PDF-Version als Download](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Handbuch_BSB-LPB-LAN-Adapter.pdf). ###  
  
### Eine druckerfreundliche Übersicht aller URL-Befehle gibt es hier: [Cheatsheet URL-Befehle](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Cheatsheet_URL-Befehle.pdf). ###  
### The cheatsheet of the URL-commands is also available as an [english version](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/commandref/Cheatsheet_URL-commands_EN.pdf). ### 

---  

***ACHTUNG:  
Es gibt KEINE GARANTIE oder Gewährleistung jeglicher Art, dass dieser Adapter dein Heizungssystem NICHT beschädigt!  
Jegliche Umsetzung der hier beschriebenen Schritte, jeder Nachbau des Adapters sowie jede Verwendung der beschriebenen Hard- und Software erfolgt auf eigene Verantwortung und eigenes Risiko!  
Keiner der Mitwirkenden oder Autoren kann für etwaige Schäden jeglicher Art haftbar gemacht werden!***   

---
  
### BSB-LPB-LAN - ein kurzer Überblick ###  

"BSB-LPB-LAN" ist ein gemeinschaftliches Hard- und Softwareprojekt, welches ursprünglich zum Ziel hatte, mittels PC/Laptop/Tablet/Smartphone Zugriff auf die Steuerungen bzw. Regler von verschiedenen Wärmeerzeugern (Öl- und Gasheizungen, Wärmepumpen, Solarthermie etc.) bestimmter Hersteller (initial hauptsächlich Brötje und Elco) zu erlangen.  
Im weiteren Verlauf sollte es dann möglich sein, Daten auszulesen, sie weiter zu verarbeiten (z.B. loggen und grafisch darstellen) oder gar Einfluss auf die Steuerung/Regelung nehmen zu können und das System in bestehende SmartHome-Systeme einzubinden.  
    
All dies ist mittlerweile umgesetzt worden:  
Mittels eines eigenbaufähigen Adapters, eines Arduino Mega 2560 und eines LAN-Shields kann nun ein entsprechender Wärmeerzeuger kostengünstig ins heimische Netzwerk eingebunden werden.  
Die interne Steuerung bzw. der Regler des Wärmeerzeugers muss dafür mit einem "Boiler System Bus" (BSB), einem "Local Process Bus" (LPB) oder einer "Punkt-zu-Punkt-Schnittstelle" (PPS) ausgestattet sein. Dies sind i.d.R. Systeme, bei denen ein SIEMENS-Regler zum Einsatz kommt (bzw. je nach Heizungshersteller meist eine gebrandete OEM-Version).

Mit Hilfe des Adapters und der BSB-LAN-Software können nun unkompliziert verschiedene Funktionen, Werte und Parameter beobachtet, geloggt und bei Bedarf web-basiert gesteuert und geändert werden.
Eine optionale Einbindung in bestehende SmartHome-Systeme wie bspw. FHEM, openHab, HomeMatic oder Loxone kann mittels HTTPMOD oder JSON erfolgen. 
Darüber hinaus ist der Einsatz des Adapters als Standalone-Logger ohne LAN- oder Internetanbindung bei Verwendung einer microSD-Karte ebenfalls möglich.  
Zusätzlich können Temperatur- und Feuchtigkeitssensoren angeschlossen und deren Daten ebenso geloggt und ausgewertet werden. Durch die Verwendung eines Arduino und die Möglichkeit, eigenen Code in die BSB-LAN-Software zu integrieren, bietet sich darüber hinaus ein weites Spektrum an Erweiterungsmöglichkeiten. 

    
Als erste grobe Orientierung, ob das eigene Heizungssystem komaptibel ist oder nicht, kann in der Bedienungsanleitung der Heizung nach einer Anschlussmöglichkeit für optionale Raumgeräte gesucht werden. Sind dort Raumgeräte des Typs QAA55/QAA75 als kompatibel aufgeführt (bei Brötje werden diese u.a. auch als "RGB Basic" und "RGT B Top" bezeichnet), so ist erfahrungsgemäß der Anschluss des Adapters via BSB möglich und der volle Funktionsumfang von BSB-LAN gegeben. Dies ist bei den meisten Öl-, Gas- und Wärmepumpensystemen der letzten Jahre der Fall.  
Sollten andere Raumgeräte aufgeführt sein, so kann im Kapitel "[Raumgeräte](docs/kap03.md#36-konventionelle-raumgeräte-für-die-aufgeführten-reglertypen)" im BSB-LPB-LAN-Handbuch nachgesehen werden.  
Genauen Aufschluss bietet letztlich aber immer nur die eigentliche Reglerbezeichnung.  
   
Die folgende Auflistung gibt eine grobe Übersicht über die Reglertypen, die je nach Typ des Wärmeerzeugers (Öl, Gas, WP etc.) normalerweise verbaut sind (bzw. waren) und die mittels BSB-LAN bedient werden können. Gewisse Einzel- und Spezialfälle (wie bspw. ein RVS-Regler bei einem Gasgerät) sind hier nicht berücksichtigt. Für genauere Informationen bzgl der [Reglertypen](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#32-detailliertere-auflistung-und-beschreibung-der-unterstützten-regler) und der zu verwendenden [Anschlüsse](https://1coderookie.github.io/BSB-LPB-LAN/kap02.html#23-anschluss-des-adapters) lies bitte im [BSB-LPB-LAN-Handbuch](https://1coderookie.github.io/BSB-LPB-LAN) nach.

Gasregler:  
- [LMU74/LMU75](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3211-lmu-regler) und (aktuelle Generation) [LMS14/LMS15](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3212-lms-regler), Anschluss via BSB, vollumfänglich steuer- und bedienbar  
- [LMU54/LMU64](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3211-lmu-regler), Anschluss via PPS, eingeschränkt steuer- und bedienbar   
   
Öl-/Solar-/Zonenregler:  
- [RVS43/RVS63/RVS46](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3222-rvs-regler), Anschluss via BSB, vollumfänglich steuer- und bedienbar  
- [RVA/RVP](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3221-rva--und-rvp-regler), Anschluss via PPS (modellspezifisch vereinzelt auch LPB), eingeschränkt steuer- und bedienbar  
   
Wärmepumpenregler:  
- [RVS21/RVS61](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3222-rvs-regler), Anschluss via BSB, vollumfänglich steuer- und bedienbar  
   
Weishaupt (Modell WTU):  
- [RVS23](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#3222-rvs-regler), Anschluss via LPB, (nahezu) vollumfänglich steuer- und bedienbar    
   
   
**Um eine detailliertere Übersicht der gemeldeten Systeme einzusehen, die bisher erfolgreich mit BSB-LAN genutzt werden, folge bitte dem entsprechenden Link:**  
- **[Brötje](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#311-brötje)**
- **[Elco](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#312-elco)**
- **[weitere Hersteller (z.B. Fujitsu, Atlantic, Weishaupt)](https://1coderookie.github.io/BSB-LPB-LAN/kap03.html#313-weitere-hersteller)**      
   
  
### Die Software ist [hier](https://github.com/fredlcore/bsb_lan) verfügbar. ### 

---  

### Autoren: ###  

-   Software, Schaltplan v1, urspr. Dokumentation EN, Ideenfindung, Support  
    bis v0.16:  
    *Gero Schumacher (gero.schumacher \[ät\] gmail.com)*

-   Software, Platinenlayout v1 & v2, urspr. Dokumentation EN, Ideenfindung, Support  
    ab v0.17:  
    *Frederik Holst (bsb \[ät\] code-it.de)*

-   Debugging, Handbuch, Übersetzungen, Ideenfindung, Support  
    ab v0.17:  
    *Ulf Dieckmann (adapter \[ät\] quantentunnel.de)*

*Basierend auf dem Code und der Mitarbeit von vielen anderen
Entwicklern! Vielen Dank!*  
      
    
---
    
[Weiter zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  


