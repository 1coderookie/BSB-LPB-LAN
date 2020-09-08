# Anhang D: Hinweise für Nutzer des veralteten Setups Adapter v2 + Arduino Mega 2560

Für Nutzer des veralteten Setups sind im Folgenden einige Fragen und Punkte aufgeführt, die evtl. der Klärung bedürfen oder die es zu beachten gilt. Etwaige weitere Fragen diesbzgl. stelle bitte im entspr. [Thread des FHEM Forums](https://forum.fhem.de/index.php/topic,29762.0.html).  
Bitte habe jedoch Verständnis, dass wir nicht auf Fragen eingehen werden, die sich bspw. darauf beziehen, sich nach der erfolgten Umstellung auf den Adapter v3 jetzt noch einen Adapter v2 zu bauen.  
**PCBs v2 sind nicht mehr verfügbar, Stand der Technik ist die Kombination Adapter v3 + Due.**      

- *Muss ich zwingend auf das neue Setup Adapter v3 + Due wechseln?*  
Nein, wenn du zufrieden mit dem veralteten Setup bist und der Funktionsumfang von BSB-LAN deinen Ansprüchen bisher genügte, 
dann kannst du das alte Setup natürlich weiterhin verwenden.  
Aber: **In diesem Fall ist [BSB-LAN-Version v0.44](https://github.com/fredlcore/bsb_lan/releases/tag/v0.44) die letzte stabile 
und getestete Version für dein Setup!** Im zip-file befindet sich auch die letzte 'Mega-gültige'-Version des Handbuchs (als PDF), das sich auf den Adapter v2 + Mega bezieht.    
Nachfolgende Versionen können u.U. auch laufen, allerdings wird der Mega 2560 höchstwahrscheinlich nicht genügend Speicher 
aufweisen. Du könntest versuchen, gewisse Funktionen zu deaktivieren (bspw. das Loggen auf die microSD-Karte), aber es gibt 
keine Garantie, dass ein problemloser Betrieb möglich sein wird.  
*Achtung:*  
Solltest du dennoch eine neuere Version als v0.44 auf dem Mega testen wollen, so achte darauf, dass du die zugehörige Datei *BSB_lan_config.h.default* verwendest und entsprechend anpasst. Zwingend notwendig ist die Anpassung der Zeile `BSB bus(19,18);`: Der DUE verwendet (im Gegensatz zum Mega) die HardwareSerial-Schnittstelle und andere RX-/TX-Pins als der Mega, was hier bereits voreingestellt ist. Bei Verwendung mit dem Mega muss die Zeile daher in `BSB bus(68,69);` geändert werden!     
  
- *Warum gibt es jetzt einen Umstieg auf den Due?*  
Der Mega 2560 bot einfach nicht mehr genügend Speicher, um auch in Zukunft das stetig wachsende BSB-LAN zu beherbergen! ;)  

- *Warum gibt es jetzt einen neuen Adapter v3?*  
Das war nötig, da der bisherige Adapter v2 aus verschiedenen Gründen nicht kompatibel mit dem Due ist.  
  
- *Kann ich den Adapter v2 an einem Due weiterverwenden?*  
Nein! Der Grund dafür liegt primär darin, dass sowohl der Adapter v2 als auch der Due kein EEPROM aufweist, was für BSB-LAN 
jedoch notwendig ist.  
Möchtest du also auch in Zukunft von den neuen Funktionen von BSB-LAN profitieren, musst du dir einen Adapter v3 besorgen oder 
selbst herstellen und ihn mit einem Arduino Due verwenden. 

- *Kann ich den Adapter v2 zu einem Adapter v3 'umbauen'?*  
Nein! Der primäre Grund hierfür liegt (neben weiteren Gründen) auch wieder im fehlenden EEPROM des Due.  

- *Kann ich den Adapter v3 mit meinem bisherigen Mega 2560 weiterverwenden?*  
Nein! Auch wenn es vielleicht nach gewissen Änderungen am Adapter v3 möglich wäre, so würde es keinerlei Mehrwert gegenüber 
dem Adapter v2 bieten. Neue Funktionen von BSB-LAN würden aufgrund des mangelnden Speicher des Mega 2560 trotzdem nicht 
genutzt werden können. Wenn du also den neuen Adapter v3 einsetzen möchtest, dann nur in Verbindung mit einem Arduino Due.  

- *Warum ist auf der Platine v3 ein EEPROM?*  
Der Arduino Due weist kein EEPROM auf, was jedoch für BSB-LAN notwendig ist.  

- *Kann ich das LAN-Shield bei einem Umstieg auf den Due weiterverwenden?*  
Ja, das ist normalerweise problemlos möglich. Ein problemloser Betrieb kann allerdings bei Clones nicht garantiert werden. 

- *Kann ich mein bestehendes Gehäuse weiterverwenden?*  
Jein. Der Due weist prinzipiell den gleichen Formfaktor auf wie der Mega 2560, insofern sollte das Gehäuse von den Abmessungen 
her passen. Allerdings musst du vermutlich dein Gehäuse etwas anpassen und einen Ausschnitt oder eine große Bohrung für den 
mittleren USB-Port des Due ('Programming Port') hinzufügen, damit du auch weiterhin bequem das entspr. USB-Kabel anschließen kannst.  

- *Die GPIOs des Due sind nur 3.3V kompatibel - was mache ich mit bestehenden Komponenten, die 5V benötigen?*  
In dem Fall musst du Pegelwandler (3.3V <-> 5V) einsetzen. Einige gängige Lösungen, Selbstbaulösungen und/oder spezielle Hinweise werde ich schnellstöglich im Handbuch hinzufügen.  

