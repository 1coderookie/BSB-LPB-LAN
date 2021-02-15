<h2><b><a href="https://1coderookie.github.io/BSB-LPB-LAN_EN">English language version of this manual now available!</a></b></h2>  
   
## Einleitung  

Dieses Handbuch wurde geschrieben, um den Einstieg in die Benutzung des
BSB-LPB-LAN Adapters (Platinenlayout v4, Arduino Due und ESP32) und der dazugehörigen BSB-LAN Software v2.x 
zu vereinfachen und um als Nachschlagewerk zu dienen.  

***Es wird empfohlen, dieses Handbuch vor einer initialen
    Verwendung des BSB-LPB-LAN-Adapters komplett zu lesen.***    
    
---  
  
Das Copyright des Handbuchs liegt bei dem Autor Ulf Dieckmann.
  
---  
    
#### Hier geht es direkt zum [Inhaltsverzeichnis](inhaltsverzeichnis.md).   
    
#### Zum Ausdrucken besser geeignet: [Die PDF-Version des Handbuchs](https://github.com/1coderookie/BSB-LPB-LAN/raw/master/Handbuch_BSB-LPB-LAN-Adapter.pdf).  
  


---  

***ACHTUNG:  
Es gibt KEINE GARANTIE oder Gewährleistung jeglicher Art, dass dieser Adapter dein Heizungssystem NICHT beschädigt!  
Jegliche Umsetzung der hier beschriebenen Schritte, jeder Nachbau des Adapters sowie jede Verwendung der beschriebenen Hard- und Software erfolgt auf eigene Verantwortung und eigenes Risiko!  
Keiner der Mitwirkenden oder Autoren kann für etwaige Schäden jeglicher Art haftbar gemacht werden!***   

---
  
### BSB-LPB-LAN - ein kurzer Überblick   

"BSB-LPB-LAN" ist ein gemeinschaftliches Hard- und Softwareprojekt, welches ursprünglich zum Ziel hatte, mittels PC / Laptop / Tablet / Smartphone Zugriff auf die Steuerungen bzw. Regler von verschiedenen Wärmeerzeugern (Öl- und Gasheizungen, Wärmepumpen, Solarthermie etc.) bestimmter Hersteller (initial hauptsächlich Brötje und Elco) zu erlangen.  
Im weiteren Verlauf sollte es dann möglich sein, Daten auszulesen, sie weiter zu verarbeiten (z.B. loggen und grafisch darstellen) oder gar Einfluss auf die Steuerung/Regelung nehmen zu können und das System in bestehende SmartHome-Systeme einzubinden.  
    
All dies ist mittlerweile umgesetzt worden:  
Mittels eines eigenbaufähigen Adapters, eines Arduino Due und eines LAN-Shields oder eines ESP32 kann nun ein entsprechender Wärmeerzeuger mit einem ["Boiler-System-Bus" (BSB)](kap02.md#21-bsb-und-lpb), einem ["Local-Process-Bus (LPB)](kap02.md#21-bsb-und-lpb) oder einer ["Punkt-zu-Punkt-Schnittstelle" (PPS)](kap02.md#22-pps-schnittstelle) kostengünstig ins heimische Netzwerk eingebunden werden. Dies sind in diesem Fall i.d.R. Systeme, bei denen ein (gebrandeter) SIEMENS-Regler zum Einsatz kommt.

Mit Hilfe des Adapters und der BSB-LAN-Software können nun unkompliziert verschiedene Funktionen, Werte und Parameter beobachtet, geloggt und bei Bedarf web-basiert gesteuert und geändert werden.
Eine optionale Einbindung in bestehende Smart-Home-Systeme wie bspw. [FHEM](kap11.md#111-fhem), [openHAB](kap11.md#112-openhab), [HomeMatic](kap11.md#113-homematic-eq3), [IoBroker](kap11.md#114-iobroker), [Loxone](kap11.md#115-loxone), [IP-Symcon](kap11.md#116-ip-symcon), [EDOMI](kap11.md#1110-edomi) oder [Home Assistant](kap11.md#1111-home-assistant) kann mittels [HTTPMOD](kap11.md#1112-einbindung-mittels-httpmod-modul), [MQTT](kap08.md#8212-mqtt) oder [JSON](kap08.md#824-abrufen-und-steuern-mittels-json) erfolgen. 
Darüber hinaus ist der Einsatz des Adapters als [Standalone-Logger](kap09.md#91-verwendung-des-adapters-als-standalone-logger-mittels-bsb-lan) ohne LAN- oder Internetanbindung bei Verwendung einer microSD-Karte ebenfalls möglich.  
Zusätzlich können [Temperatur- und Feuchtigkeitssensoren](kap12.md#123-verwendung-optionaler-sensoren-dht22-ds18b20-bme280) angeschlossen und deren Daten ebenso geloggt und ausgewertet werden. Durch die Verwendung eines Arduino und die Möglichkeit, eigenen Code in die BSB-LAN-Software zu integrieren, bietet sich darüber hinaus ein weites Spektrum an Erweiterungsmöglichkeiten.  

    
Als erste grobe Orientierung, ob das eigene Heizungssystem komaptibel ist oder nicht, kann in der Bedienungsanleitung der Heizung nach einer Anschlussmöglichkeit für optionale Raumgeräte gesucht werden. Sind dort Raumgeräte des Typs QAA55/QAA75 als kompatibel aufgeführt (bei Brötje werden diese u.a. auch als "RGB Basic" und "RGT B Top" bezeichnet), so ist erfahrungsgemäß der Anschluss des Adapters via BSB möglich und der volle Funktionsumfang von BSB-LAN gegeben. Dies ist bei den meisten Öl-, Gas- und Wärmepumpensystemen der letzten Jahre der Fall.  
Sollten andere Raumgeräte aufgeführt sein, so kann im Kapitel "[Raumgeräte](kap03.md#36-konventionelle-raumgeräte-für-die-aufgeführten-reglertypen)" nachgesehen werden.  
Genauen Aufschluss bietet letztlich aber immer nur die eigentliche Reglerbezeichnung.  
   
Die folgende Auflistung gibt eine grobe Übersicht über die Reglertypen, die je nach Typ des Wärmeerzeugers (Öl, Gas, WP etc.) normalerweise verbaut sind (bzw. waren) und die mittels BSB-LAN bedient werden können. Gewisse Einzel- und Spezialfälle (wie bspw. ein RVS-Regler bei einem Gasgerät) sind hier nicht berücksichtigt. Für genauere Informationen bzgl der [Reglertypen](kap03.md#32-detailliertere-auflistung-und-beschreibung-der-unterstützten-regler) und der zu verwendenden [Anschlüsse](kap02.md#23-anschluss-des-adapters) lies bitte die entsprechenden Kapitel.

**Gasregler:**  
- [LMU74/LMU75](kap03.md#3211-lmu-regler) und (aktuelle Generation) [LMS14/LMS15](kap03.md#3212-lms-regler), Anschluss via BSB  
- [LMU54/LMU64](kap03.md#3211-lmu-regler), Anschluss via PPS   
   
**Öl-/Solar-/Zonenregler:**  
- [RVS43/RVS63/RVS46](kap03.md#3222-rvs-regler), Anschluss via BSB  
- [RVA/RVP](kap03.md#3221-rva--und-rvp-regler), Anschluss via PPS (modellspezifisch vereinzelt auch LPB)  
   
**Wärmepumpenregler:**  
- [RVS21/RVS61](kap03.md#3222-rvs-regler), Anschluss via BSB  
   
**Weishaupt (Modell WTU):**  
- [RVS23](kap03.md#3222-rvs-regler), Anschluss via LPB    
   
   
**Um eine detailliertere Übersicht der gemeldeten Systeme einzusehen, die bisher erfolgreich mit BSB-LAN genutzt werden, folge bitte dem entsprechenden Link:**  
- **[Brötje](kap03.md#311-brötje)**
- **[Elco](kap03.md#312-elco)**
- **[weitere Hersteller (z.B. Fujitsu, Atlantic, Weishaupt)](kap03.md#313-weitere-hersteller)**      
   
  
### Die Software ist [hier](https://github.com/fredlcore/bsb_lan) verfügbar.  

---  

### Autoren:   

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


