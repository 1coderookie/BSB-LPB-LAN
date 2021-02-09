[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)    
[Zurück zur Einleitung](index.md)  
    
---
    
# 1. Der BSB-LPB-LAN-Adapter und die BSB-LAN-Software  
Der BSB-LPB-LAN-Adapter und die dazugehörige BSB-LAN-Software wurden
entwickelt, um eine Anbindung von Heizungssystemen bzw. -reglern ans LAN
und somit auch einen entsprechenden Fernzugriff zu ermöglichen.  

Darüber hinaus ist es u.a. möglich, Parameter (bspw. Laufzeiten,
Temperaturen) auf eine microSD-Karte zu loggen und sowohl DS18B20- als
auch DHT22- und BME280-Sensoren zusätzlich am Adapter anzuschließen. Ebenso können 
MAX!-Komponenten bequem eingebunden, Relaisboards angeschlossen und die 
Funktionalität durch das Hinzufügen von eigenem Code den individuellen 
Gegebenheiten angepasst werden. Eine optionale Einbindung in bestehende 
SmartHome-Systeme ist durch die Verwendung von MQTT, HTTPMOD und JSON ebenfalls möglich.  

Die Software ist auf einem [Arduino Due](kap12.md#121-der-arduino-due) 
samt [Ethernet-Shield](kap12.md#1211-due--lan-das-lan-shield) sowie auf einem [ESP32](kap12.md#122-der-esp32) lauffähig, 
erfahrungsgemäß ‚out of the box'. Das ist (neben dem Adapter selbst natürlich) bereits alles was du brauchst!  
Aufgrund des geringeren Speichers ist 
die Verwendung von bspw. Arduino UNO, Arduino Nano o.ä. nicht möglich.  

Die hier vorgestellte Lösung stellt somit eine Alternative zu den bisherigen
kommerziellen Lösungen dar, die nicht nur hinsichtlich des
Kostenfaktors, sondern auch in Bezug auf die vielfältigen
Einsatzmöglichkeiten mehr als nur ‚interessant' ist.

***Für den Einsatz des Adapters müssen die Kessel-, Solar- oder auch
Wärmepumpen-Regler einen BSB (Boiler System Bus) oder LPB (Local Process Bus) aufweisen!***  
Dies ist i.d.R. bei (aktuelleren) Reglern der Fall,
die von der Firma SIEMENS hergestellt wurden. Solche Regler werden bspw.
von Heizungsherstellern wie Brötje oder Elco verbaut.   
***Ob dein Heizungssystem über einen solchen Bus verfügt, ist den spezifischen
technischen Unterlagen zu entnehmen.***

Ältere Heizungsregler der o.g. Hersteller weisen u.U. eine sog.
PPS-Schnittstelle auf, meist in Verbindung mit einer
QAA70-Bedieneinheit. Der BSB-LPB-LAN-Adapter ist auch hier einsetzbar,
allerdings ist der Funktionsumfang der BSB-LAN-Software 
reglerbedingt in diesem Fall sehr eingeschränkt.

Die beschriebene Kombination aus Hard- und
Software wurde u.a. an verschiedenen Heizungssystemen von Brötje und
Elco ausgiebig getestet, der Einsatz an Heizungssystemen weiterer
Hersteller war ebenfalls erfolgreich. Die Kommunikation sollte
prinzipiell mit allen Systemen möglich sein, die einen der o.g.
Bus-Typen aufweisen. Eine Auflistung der bisher erfolgreich getesteten
Systeme ist u.a. im nachfolgenden Kapitel zu finden, dennoch kann
niemals ein voller Funktionsumfang garantiert werden. Bei nicht
gelisteten Systemen ist u.U. ein erhöhter eigener Einsatz nötig, um die
Software in vollem Umfang nutzen zu können (s. u.a. Kap. [10](kap10.md)).

Der Schaltplan des Adapters ist im [Anhang A1](anhang_a1.md) zu finden.  
***Solltest du den Adapter nicht komplett selber aufbauen wollen, so kannst du Frederik
Holst (bsb \[ät\] code-it.de) kontaktieren und nachfragen, ob noch eine Adapterplatine aus einer Sammelbestellung vorhanden ist. Bitte erwähne bei einer Anfrage, ob du eine Platine für einen Arduino Due oder einen ESP32 benötigst!***

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-unbestueckt-front.jpeg">

*Die BSB-LPB-LAN-Adapterplatine v3, Oberseite, unbestückt.*  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v3-unbestueckt-back.jpeg">

*Die BSB-LPB-LAN-Adapterplatine v3, Unterseite, unbestückt.*  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-v4-komplett-due.jpg">
    
*Die BSB-LPB-LAN-Adapterplatine v4, bestückt, auf einem Arduino Due (Clone) samt LAN-Shield.*  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/HW-Setup.jpg">
    
*Das komplette Setup (Arduino Due + LAN-Shield + BSB-LPB-LAN-Adapter v3) inklusive der entsprechenden Kabel.*      
    
---      
     
[Weiter zu Kapitel 2](kap02.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
    
