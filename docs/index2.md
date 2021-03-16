<h2><b><a href="https://1coderookie.github.io/BSB-LPB-LAN_EN">English language version of this manual now available!</a></b></h2>  
   
## Einleitung  

Dieses Handbuch wurde geschrieben, um den Einstieg in die Benutzung der BSB-LAN Hard- & Software zu vereinfachen und um als Nachschlagewerk zu dienen.  

***Es wird empfohlen, dieses Handbuch vor einer initialen Verwendung des BSB-LPB-LAN-Adapters komplett zu lesen.***    
    
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
Mittels eines eigenbaufähigen Adapters, eines Arduino Due und eines LAN-Shields oder eines ESP32 kann nun ein entsprechender Wärmeerzeuger mit einem ["Boiler-System-Bus" (BSB)](kap10.md#1011-bsb), einem ["Local-Process-Bus (LPB)](kap10.md#1012-lpb) oder einer ["Punkt-zu-Punkt-Schnittstelle" (PPS)](kap10.md#1013-pps-schnittstelle) kostengünstig ins heimische Netzwerk eingebunden werden. Dies sind in diesem Fall i.d.R. Systeme, bei denen ein (gebrandeter) SIEMENS-Regler zum Einsatz kommt.

Mit Hilfe des Adapters und der BSB-LAN-Software können nun unkompliziert verschiedene Funktionen, Werte und Parameter beobachtet, geloggt und bei Bedarf web-basiert gesteuert und geändert werden.
Eine optionale Einbindung in bestehende Smart-Home-Systeme wie bspw. [FHEM](kap08.md#81-fhem), [openHAB](kap08.md#82-openhab), [HomeMatic](kap08.md#83-homematic-eq3), [ioBroker](kap08.md#84-iobroker), [Loxone](kap08.md#85-loxone), [IP-Symcon](kap08.md#86-ip-symcon), [EDOMI](kap08.md#810-edomi), [Home Assistant](kap08.md#811-home-assistant), [SmartHomeNG](kap08.md#812-smarthomeng) oder [Node-RED](kap08.md#813-node-red) kann mittels [HTTPMOD](kap08.md#812-einbindung-mittels-httpmod-modul), [MQTT](kap05.md#52-mqtt) oder [JSON](kap05.md#53-json) erfolgen. 
Darüber hinaus ist der Einsatz des Adapters als [Standalone-Logger](kap06.md#61-loggen-von-daten) ohne LAN- oder Internetanbindung bei Verwendung einer microSD-Karte ebenfalls möglich.  
Zusätzlich können [Temperatur- und Feuchtigkeitssensoren](kap07.md#71-verwendung-optionaler-sensoren-dht22-ds18b20-bme280) angeschlossen und deren Daten ebenso geloggt und ausgewertet werden. Durch die Verwendung eines Arduino und die Möglichkeit, [eigenen Code in die BSB-LAN-Software zu integrieren](kap06.md#68-eigenen-code-in-bsb-lan-einbinden), bietet sich darüber hinaus ein weites Spektrum an Erweiterungsmöglichkeiten.  

    
Als erste grobe Orientierung, ob das eigene Heizungssystem komaptibel ist oder nicht, kann in der Bedienungsanleitung der Heizung nach einer Anschlussmöglichkeit für optionale Raumgeräte gesucht werden. Sind dort Raumgeräte des Typs QAA55/QAA75 als kompatibel aufgeführt (bei Brötje werden diese u.a. auch als "RGB Basic" und "RGT B Top" bezeichnet), so ist erfahrungsgemäß der Anschluss des Adapters via BSB möglich und der volle Funktionsumfang von BSB-LAN gegeben. Dies ist bei den meisten Öl-, Gas- und Wärmepumpensystemen der letzten Jahre der Fall.  
Sollten andere Raumgeräte aufgeführt sein, so kann im Kapitel "[Raumgeräte](kap10.md#105-konventionelle-raumgeräte-für-die-aufgeführten-reglertypen)" nachgesehen werden.  
Genauen Aufschluss bietet letztlich aber immer nur die eigentliche Reglerbezeichnung.  
   
Die folgende Auflistung gibt eine grobe Übersicht über die Reglertypen, die je nach Typ des Wärmeerzeugers (Öl, Gas, WP etc.) normalerweise verbaut sind (bzw. waren) und die mittels BSB-LAN bedient werden können. Gewisse Einzel- und Spezialfälle (wie bspw. ein RVS-Regler bei einem Gasgerät) sind hier nicht berücksichtigt. Für genauere Informationen bzgl der [Reglertypen](kap10.md#102-detaillierte-beschreibung-der-kompatiblen-regler) und der zu verwendenden [Anschlüsse](kap03.md#31-anschluss-des-adapters) lies bitte die entsprechenden Kapitel.

**Gasregler:**  
- [LMU74/LMU75](kap10.md#10211-lmu-regler) und (aktuelle Generation) [LMS14/LMS15](kap10.md#10212-lms-regler), Anschluss via BSB  
- [LMU54/LMU64](kap10.md#10211-lmu-regler), Anschluss via PPS   
   
**Öl-/Solar-/Zonenregler:**  
- [RVS43/RVS63/RVS46](kap10.md#10222-rvs-regler), Anschluss via BSB  
- [RVA/RVP](kap10.md#10221-rva--und-rvp-regler), Anschluss via PPS (modellspezifisch vereinzelt auch LPB)  
   
**Wärmepumpenregler:**  
- [RVS21/RVS61](kap10.md#10222-rvs-regler), Anschluss via BSB  
   
**Weishaupt (Modell WTU):**  
- [RVS23](kap10.md#10222-rvs-regler), Anschluss via LPB    
   
   
**Um eine detailliertere Übersicht der gemeldeten Systeme einzusehen, die bisher erfolgreich mit BSB-LAN genutzt werden, folge bitte dem entsprechenden Link:**  
- **[Brötje](kap11.md#111-brötje)**
- **[Elco](kap11.md#112-elco)**
- **[weitere Hersteller (z.B. Fujitsu, Atlantic, Weishaupt)](ap11.md#113-weitere-hersteller)**      
   
  
### Die Software ist [hier](https://github.com/fredlcore/BSB-LAN) verfügbar.  

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


