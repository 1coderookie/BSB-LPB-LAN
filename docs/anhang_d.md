# Anhang D: Hinweise für Nutzer des veralteten Setups Adapter v2 + Arduino Mega 2560

Für Nutzer des veralteten Setups sind im Folgenden einige Fragen und Punkte aufgeführt, die der Klärung bedürfen oder die es 
zu beachten gilt.

- Wenn du zufrieden mit dem veralteten Setup bist und der Funktionsumfang von BSB-LAN deinen Ansprüchen bisher genügte, 
dann kannst du das alte Setup natürlich weiterhin verwenden.  
Aber: **In diesem Fall ist [BSB-LAN-Version v0.44](https://github.com/fredlcore/bsb_lan/releases/tag/v0.44) die letzte stabile 
und getestete Version für dein Setup!**  
Nachfolgende Versionen können u.U. auch laufen, allerdings wird der Mega 2560 höchstwahrscheinlich nicht genügend Speicher 
aufweisen. Du könntest versuchen, gewisse Funktionen zu deaktivieren (bspw. das Loggen auf die microSD-Karte), aber es gibt 
keine Garantie, dass ein problemloser Betrieb möglich sein wird.  
Auf Nachfragen diesbzgl. werden wir nicht weiter eingehen.  

- *Kann ich den Adapter v2 an einem Due weiterverwenden?*  
Nein! Der Grund dafür liegt primär darin, dass sowohl der Adapter v2 als auch der Due kein EEPROM aufweist, was für BSB-LAN 
jedoch notwendig ist.  
Möchtest du also auch in Zukunft von den neuen Funktionen von BSB-LAN profitieren, musst du dir einen Adapter v3 besorgen oder 
selbst herstellen und ihn mit einem Arduino Due verwenden. 

- *Kann ich den Adapter v2 zu einem Adapter v3 'umbauen'?*  
Nein! Der primäre Grund hierfür liegt (neben weiteren Gründen) auch wieder im fehlenden EEPROM des Due.  
Auf Nachfragen diesbzgl. werden wir nicht weiter eingehen.  

- *Kann ich den Adapter v3 mit meinem bisherigen Mega 2560 weiterverwenden?*  
Nein! Auch wenn es vielleicht nach gewissen Änderungen am Adapter v3 möglich wäre, so würde es keinerlei Mehrwert gegenüber 
dem Adapter v2 bieten. Neue Funktionen von BSB-LAN würden aufgrund des mangelnden Speicher des Mega 2560 trotzdem nicht 
genutzt werden können. Wenn du also den neuen Adapter v3 einsetzen möchtest, dann nur in Verbindung mit einem Arduino Due.  
Auf Nachfragen diesbzgl. werden wir nicht weiter eingehen.

- *Warum ist auf der Platine v3 ein EEPROM?*  
Der Arduino Due weist kein EEPROM auf, was jedoch für BSB-LAN notwendig ist.  

- *Kann ich das LAN-Shield bei einem Umstieg auf den Due weiterverwenden?*  
Ja, das ist problemlos möglich.  

- *Kann ich mein bestehendes Gehäuse weiterverwenden?*  
Jein. Der Due weist prinzipiell den gleichen Formfaktor auf wie der Mega 2560, insofern sollte das Gehäuse von den Abmessungen 
her passen. Allerdings musst du vermutlich dein Gehäuse etwas anpassen und einen Ausschnitt oder eine große Bohrung für den 
mittleren USB-Port des Due ('Programming Port') hinzufügen, damit du auch weiterhin bequem das entspr. USB-Kabel anschließen kannst.  

- *Die GPIOs des Due sind nur 3.3V kompatibel - was mache ich mit bestehenden Komponenten, die 5V benötigen?*  
In dem Fall musst du Pegelwandler (3.3V <-> 5V) einsetzen. Einige gängige Lösungen, Selbstbaulösungen und/oder spezielle Hinweise
werde ich schnellstöglich im Handbuch hinzufügen.  

- *Ich habe Fragen, die hier noch nicht behandelt wurden - was nun?*  
In dem Fall kannst du dich natürlich gerne direkt bei uns oder im entspr. Forumsthread melden. Sind die Fragen dann ggf. auch für 
andere User relevant, werde ich sie hier mit aufführen.  
