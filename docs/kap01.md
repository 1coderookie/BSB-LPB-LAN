# 1. Der BSB-LPB-LAN-Adapter und die BSB-LAN-Software ##
Der BSB-LPB-LAN-Adapter und die dazugehörige BSB-LAN-Software wurden
entwickelt, um eine Anbindung von Heizungssystemen bzw. -reglern ans LAN
und somit auch einen entsprechenden Fernzugriff zu ermöglichen.  
Darüber hinaus ist es u.a. möglich, Parameter (bspw. Laufzeiten,
Temperaturen) auf eine microSD-Karte zu loggen und sowohl DS18B20- als
auch DHT22-Sensoren zusätzlich am Adapter anzuschließen.  
Die hier vorgestellte Lösung stellt eine Alternative zu den bisherigen
kommerziellen Lösungen dar, die nicht nur hinsichtlich des
Kostenfaktors, sondern auch in Bezug auf die vielfältigen
Einsatzmöglichkeiten mehr als nur ‚interessant' ist.

***Für den Einsatz des Adapters müssen die Kessel-, Solar- oder auch
Wärmepumpen-Regler¹ einen BSB² oder LPB³ aufweisen!***  
Dies ist i.d.R. bei (aktuelleren⁴) Reglern der Fall,
die von der Firma SIEMENS hergestellt wurden. Solche Regler werden bspw.
von Heizungsherstellern wie Brötje oder Elco verbaut.   
***Ob dein Heizungssystem über einen solchen Bus verfügt, ist den spezifischen
technischen Unterlagen zu entnehmen.***

Ältere Heizungsregler der o.g. Hersteller weisen u.U. eine sog.
PPS-Schnittstelle auf, meist in Verbindung mit einer
QAA70-Bedieneinheit. Der BSB-LPB-LAN-Adapter ist auch hier einsetzbar,
allerdings ist der Funktionsumfang der BSB-LAN-Software 
reglerbedingt in diesem Fall sehr eingeschränkt.

Die hier vorgestellte und beschriebene Kombination aus Hard- und
Software wurde u.a. an verschiedenen Heizungssystemen von Brötje und
Elco ausgiebig getestet, der Einsatz an Heizungssystemen weiterer
Hersteller war ebenfalls erfolgreich. Die Kommunikation sollte
prinzipiell mit allen Systemen möglich sein, die einen der o.g.
Bus-Typen aufweisen. Eine Auflistung der bisher erfolgreich getesteten
Systeme ist u.a. im nachfolgenden Kapitel zu finden, dennoch kann
niemals ein voller Funktionsumfang garantiert werden. Bei nicht
gelisteten Systemen ist u.U. ein erhöhter eigener Einsatz nötig, um die
Software in vollem Umfang nutzen zu können (s. u.a. Kap. [10](kap10.md)).

Die Software ist auf einem Arduino Mega2560 samt Ethernet-Shield des
Typs W5100⁵ lauffähig, erfahrungsgemäß ‚out of the box'. Aufgrund des
geringeren Speichers ist die Verwendung von bspw. Arduino UNO, Arduino
Nano o.ä. nicht möglich.
Grundsätzlich ist die Verwendung von original Arduino-Komponenten zu
empfehlen, da es bei dem Einsatz von günstigen Clones u.U. zu diffusen
Problemen kommen kann.

Da es teilweise unterschiedliche Pinbelegungen bei den verschiedenen
LAN-Shield-Clones gibt, ist es u.U. nötig, den BSB-LPB-LAN-Adapter an
andere Pins anzuschließen und die entsprechenden Änderungen hinsichtlich
der Pinbelegung in der Software (Datei *BSB\_lan\_config.h*) anzupassen
(s. Kap. [4](kap04.md) & [5](kap05.md)).

Der Schaltplan des Adapters ist im Anhang zu finden. Außerdem wurden in
der Vergangenheit Sammelbestellungen für fertige Platinen durchgeführt,
bei Interesse kann man sich im Forum[⁶] melden oder direkt Frederik
Holst (bsb \[ät\] code-it.de) kontaktieren.

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-platine-unbestueckt.jpeg">

Die BSB-LPB-LAN-Adapterplatine v2, unbestückt.  
    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-komplett-ardu.jpeg">
    
Die BSB-LPB-LAN-Adapterplatine v2, bestückt, auf einem Arduino Mega2560 (Clone) samt LAN-Shield.  
    
    
***Hinweis:***  
Der aktuelle Adapter (v2) kann auch an einem Raspberry Pi 2 genutzt
werden, jedoch nur unter Verwendung einer gänzlich anderen Software:
[bsb_gateway](https://github.com/loehnertj/bsbgateway) von J. Loehnert.  
Für jeglichen Support in Zusammenhang mit der bsb_gateway-Software
kontaktiere bitte direkt den Autor von bsb_gateway.

Für die Nutzung des Adapters mit einem RPi an der PPS-Schnittstelle kann
das Python-Script [PPS-monitor](https://github.com/dspinellis/PPS-monitor) von D. Spinellis genutzt werden.

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/bsb-adapter-komplett-rpi.jpeg">  
    
Die BSB-LPB-LAN-Adapterplatine auf einem Raspberry Pi 2.  
    
    
***Alle Informationen in diesem Handbuch beziehen sich nur auf die
Arduino-Version!***  

---
¹ Im Folgenden nur als „Regler" bezeichnet.  
² BSB = Boiler System Bus  
³ LPB = Local Process Bus  
⁴ Ausnahme: Siehe Kap. [3.3](kap03.md)    
⁵ Der Chip-Typ W5100 wird ohne Probleme unterstützt und wurde ausgiebig getestet, er ist einem W5500 daher immer vorzuziehen. Bzgl. Verwendung eines W5500-Boards s. Kap. [5](kap05.md) & [15.11](kap15.md#1511-ich-nutze-ein-w5500-lan-shield-was-muss-ich-tun).  
⁶ [https://forum.fhem.de/index.php/topic,29762.0.html](https://forum.fhem.de/index.php/topic,29762.0.html)
