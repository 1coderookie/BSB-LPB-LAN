[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 4](kap04.md)    
    
---
    

# 5. Konfiguration der BSB-LAN-Software v2.x  
  
**Hinweis: Ab v2.x ist es nun möglich, die Konfiguration der BSB-LAN-Software auch über das Webinterface unter "Einstellungen" vorzunehmen. Die Beschreibung dieser Funktion ist noch in Arbeit.**  

     
---
    
## 5.1 Konfiguration mittels Webinterface  

*Die Beschreibung dieser neuen Funktion ist noch in Arbeit.*  



---  
  
## 5.2 Konfiguration durch Anpassen der Datei *BSB_lan_config.h*  
  
Die Konfiguration der BSB-LAN-Software kann erfolgen, indem die Einstellungen in der Datei *BSB_lan_config.h* angepasst werden. Hierzu werden nachfolgend sämtliche Einstellmöglichkeiten analog zu der Reihenfolge in der Datei *BSB_lan_config.h* aufgeführt. Es ist daher ratsam, die Einstellungen Punkt für Punkt abzuarbeiten.  

  
*Hinweis:  
Wenn ein Definement deaktiviert ist oder werden soll, dann sind vor dem Hashtag zwei Slashes hinzuzufügen ("auskommentieren"):  
`//#define XYZ` = Definement XYZ ist deaktiviert.      
Wenn ein Definement aktiviert werden soll, dann sind die beiden Slashes vor dem Hashtag zu entfernen:  
`#define XYZ` = Definement XYZ ist aktiv.*  

---

-   Die **Sprache der Benutzeroberfläche** des Webinterface des Adapters sowie der Kategorie- und Parameterbezeichnungen muss
    *zwingend* ausgewählt bzw. definiert werden. Für "Deutsch" ist dabei das folgende Definement zu wählen:  
    `#define LANG DE`  
    Ab BSB-LAN v.042 ist es möglich, BSB-LAN auch in anderen Sprachen zu nutzen, wobei prinzipiell jede Sprache unterstützt werden kann (es müssen dann 'nur' die entspr. Übersetzungen erstellt werden).  
Vorhanden sind momentan: Tschechisch (CZ), Deutsch (DE), Dänisch (DK), Englisch (EN), Spanisch (ES), Finnisch (FI), Französisch (FR), Griechisch (GR), Ungarisch (HU), Italienisch (IT), Niederländisch (NL), Polnisch (PL), Russisch (RU), Schwedisch (SE), Slovenisch (SI) und Türkisch (TR). Wenn gewisse Ausdrücke nicht in der spezifischen Sprache vorliegen, wird automatisch der englische Ausdruck angezeigt. Sollte auch dieser nicht vorhanden sein, wird schließlich der deutsche Ausdruck dargestellt. 
  
---

-   **Konfigurationseinstellungen aus EEPROM oder der Datei *BSB_lan_config.h* laden:**  
    `byte UseEEPROM = 1;`  
    Gemäß Voreinstellung werden die Konfigurationseinstellungen beim Start von BSB-LAN aus dem EEPROM gelesen. Als Fallback kann die Variable auf '0' gesetzt werden, dann werden die Einstellungen aus der Datei *BSB_lan_config.h* gelesen.  
    
---    

***Netzwerkeinstellungen:***  
    
-   **MAC-Adresse des Ethernet-Shields:**  
    `byte mac[] = { 0x00, 0x80, 0x41, 0x19, 0x69, 0x90 };`

    Die voreingestellte MAC-Adresse kann beibehalten werden. Eine Änderung ist i.d.R.
    nur nötig, wenn mehr als ein Adapter verwendet wird (es sollte in jedem Fall darauf geachtet werden, dass jede MAC-Adresse im Netzwerk nur *einmal* vorkommt!). Änderungen sollten in dem Fall möglichst nur bei dem letzten Byte erfolgen (also bspw. 0x91, wenn ein zweiter Adapter zum Einsatz kommt).  
     
    *Wichtiger Hinweis:*  
    *Die hier vergebene MAC-Adresse beeinflusst auch den Hostnamen (bzw. ist ein Bestandteil davon), der bei der Verwendung von DHCP (s.u.) vom Router vergeben wird: Der Hostname setzt sich aus der Kennung "WIZnet" und den drei letzten Bytes der MAC-Adresse zusammen.*  
    *Für die o.g. voreingestellte MAC-Adresse lautet der Hostname somit "WIZnet196990". Dieser wird i.d.R. auch als solcher im Router angezeigt. Das Webinterface von BSB-LAN ist in dem Fall im Browser unter `http://wiznet196990` erreichbar.*  
    *Wird die MAC-Adresse bei einem zweiten Adapter nun also bspw. in  
    *`byte mac[] = { 0x00, 0x80, 0x41, 0x19, 0x69, 0x91 };`*  
    *geändert, so lautet der Hostname entsprechend "WIZnet196991" bzw. `http://wiznet196991`.*  
    
-   **Ethernet-Port:**  
    `uint16_t HTTPPort = 80;`  
    Port 80 für HTTP voreingestellt.   
    
    
-   **DHCP:**  
    `boolean useDHCP = true;`  
    Per default wird DHCP verwendet. Sollte dies jedoch nicht gewünscht sein, sondern soll selber eine feste IP vergeben werden, so ist *false* einzustellen.  
    
    *Wichtiger Hinweis:*  
    *Bei der Nutzung von DHCP setzt sich der automatisch vergebene Hostname aus der Kennung "WIZnet" und den drei letzten Bytes der MAC-Adresse zusammen.*  
    *Für die o.g. voreingestellte MAC-Adresse lautet der Hostname somit "WIZnet196990". Dieser wird i.d.R. auch als solcher im Router angezeigt. Das Webinterface von BSB-LAN ist in dem Fall im Browser unter `http://wiznet196990` erreichbar.*  
    *Wird die MAC-Adresse bei einem zweiten Adapter nun also bspw. in*  
    *`byte mac[] = { 0x00, 0x80, 0x41, 0x19, 0x69, 0x91 };`*  
    *geändert, so lautet der Hostname entsprechend "WIZnet196991" bzw. `http://wiznet196991`.*  
    *Die IP, die in diesem Fall vom Router automatisch vergeben wird, wird beim Start des Arduino Due im Seriellen Monitor der Arduino IDE angezeigt.*  


-   **IP-Adresse:**  
    `byte ip_addr[4] = {192,168,178,88};`  
    IP-Adresse des Adapters, wenn DHCP nicht verwendet wird - *bitte beachte die Kommata anstelle von Punkten!*  
    *Achtung: Falls du die IP selbst fest vergeben willst, so vergewissere dich, dass die IP-Adresse nur einmal im Netzwerk vorkommt!*  
  
  
-   **Gateway-Adresse:**  
    `byte gateway_addr[4] = {192,168,178,1};` 
    IP-Adresse des Gateways (i.d.R. die des Routers) - *bitte beachte die Kommata anstelle von Punkten!*  
          
        
-   **DNS-Server:**  
    `byte dns_addr[4] = {192,168,178,1};`  
    IP-Adresse des DNS - *bitte beachte die Kommata anstelle von Punkten!*  
  
  
-   **Subnet:**  
    `byte subnet_addr[4] = {255,255,255,0};`  
    Subnetz-Adresse - *bitte beachte die Kommata anstelle von Punkten!*  
    
---    
    
-   **Debugging und entspr. Einstellungen:**  
    - `#define DEBUG` → Debug-Modus aktivieren (s. nachfolgende Optionen)  
    
    - `byte debug_mode = 1;` → Folgende Debug-Optionen sind verfügbar:  
    0 - Debugging deaktiviert  
    1 - Debug-Nachrichten an das serielle Interface senden (einzustellen bei der Verwendung von bspw. dem Seriellen Monitor der Arduino IDE)  
    2 - Debug-Nachrichten an einen TelNet-Client anstelle des seriellen Interface senden  
    
    - `byte verbose = 1;` → Per default ist der Verbose Modus aktiviert (= 1), so dass neben den Rohdaten auch der jeweilige Klartext (falls vorhanden) von Parametern und Werten dargestellt wird. Es ist ratsam, diese Einstellung so zu belassen, da es eine etwaige  Fehlersuche erleichtert. Darüber hinaus ist diese Einstellung nötig, falls Telegramme und CommandIDs neuer Parameter dekodiert werden sollen. zum Deaktivieren ist '0' anstelle der '1' einzutragen.    
    
    - `byte monitor = 0;` → Bus-Monitor-Modus, per default deaktivert (= 0); zum Aktivieren auf '1' stellen.  
    
    - `boolean show_unknown = true;` → Alle Parameter mitsamt der *unbekannten Parameter* (Fehlermeldung „error 7 (parameter not supportet)") werden bei einer Abfrage via Webinterface (bspw. bei einer Abfrage einer kompletten Kategorie) angezeigt (Voreinstellung).  
    Sollen der Übersichtlichkeit halber die vom Heizungsregler nicht unterstützten (also 'unbekannten') Parameter bei einer Abfrage ausgeblendet werden (bspw. bei der Abfrage einer kompletten Kategorie), so ist 'false' einzustellen (`boolean show_unknown = false;`). *Die Parameter werden jedoch bei einer solchen Abfrage (bspw. einer komplette Kategorie) trotzdem mit abgefragt.*  
   
---   

    
***Sicherheitsfunktionen:***  

-   **Passkey:**  
    Um das System vor einem ungewollten Zugriff von außen zu schützen,
    kann die **Funktion des Sicherheitsschlüssels (PASSKEY)** genutzt
    werden (sehr einfach und nicht wirklich sicher!):  
    `char PASSKEY[64] = "";`

    Für die Verwendung ist eine Zahlenfolge einzugeben, bspw. `char PASSKEY[64] = "1234";` → in diesem Beispiel lautet der Passkey 1234. Wird keine Zahlenfolge eingegeben (also die Voreinstellung nicht geändert), so ist die Funktion deaktiviert.   
    Falls die PASSKEY-Funktion genutzt wird, muss die URL bei einem
    Aufruf des Webinterfaces den definierten Schlüssel als erstes
    Element enthalten, bspw. `http://<IP-Adresse>/<passkey>/`
    um die Hilfeseite zu sehen.  
    *Bitte nicht den Slash hinter dem Passkey vergessen!*


-   **Trusted IP:**  
    `byte trusted_ip_addr[4] = {0,0,0,0};`  
    `byte trusted_ip_addr2[4] = {0,0,0,0};`  

    Bei den Variablen `trusted_ip_addr` (und `trusted_ip_addr2` für eine weitere IP) kann man eine  vertrauenswürdige IP eintragen (z.B. des
    FHEM-Servers), dann ist der Zugriff nur über diese IP. Lautet die vertrauenswürdige IP des Clients bspw.
    `192.168.178.20`, so ist `byte trusted_ip_addr[4] = {192,168,178,20};` einzustellen.  
    Wird die Voreinstellung `{0,0,0,0}` nicht geändert und/oder die erste Zahl ist eine 0, ist diese Funktion deaktiviert.  

-   **User-Pass:**  
    `char USER_PASS_B64[64] = "";`  
    
    Mit `USER_PASS_B64` kann ein in Base64-codierter String nach dem
    Muster *username:passwort* als Zugangssperre gesetzt werden. Ist kein String eingegeben (Voreinstellung), so ist die Funktion deaktiviert.  
    Als zusätzliche Option vorgegeben ist hier der Benutzername \"atari\" und das Passwort
    \"800xl\" (codiert: YXRhcmk6ODAweGw=):  
    `//char USER_PASS_B64[64] = "YXRhcmk6ODAweGw=";`  
    Um diese Kombination zu nutzen, sind die entsprechenden `//` zu entfernen und bei dem leeren Eintrag hinzuzufügen.  
    Um eine andere Kombination zu nutzen, gehe bspw. auf die Website
    [https://www.base64encode.org](https://www.base64encode.org/), 
    lasse dein neues Passwort im Format *username:password* erstellen
    und füge die Codierung entsprechend ein.  
      
---   

***Einstellungen für optionale Sensoren:***  
      
-   **OneWire-Temperatursensoren (DS18B20):**  
    `#define ONE_WIRE_BUS`  
    `boolean enableOneWireBus = true;`  
    `byte One_Wire_Pin = 7;`  
    
    Sollen OneWire-Temperatursensoren (DS18B20) verwendet werden, muss das Definement aktiviert sein, der Eintrag *true* verwendet sowie die entsprechende Pinbelegung (DATA-Anschluss des Sensors am
    Adapterboard) definiert werden.  
    Voreingestellt ist das Modul aktiviert und Pin 7 eingestellt.  
    Soll keine Verwendung stattfinden, ist `boolean enableOneWireBus = false;` einzutragen.  
          

-   **DHT22-Sensoren:**  
    `#define DHT_BUS`  
    `byte DHT_Pins[10] = {2, 3};`  
    
    Sollen DHT22-Sensoren (Temperatur & Feuchtigkeit) verwendet werden, muss das entsprechende Definement aktiviert sein und die entsprechende Pinbelegung (DATA-Anschluss des Sensors am
    Adapterboard) definiert werden.  
    Voreingestellt ist das Modul samt Verwendung der Pins 2 und 3 aktiv.  
  
    *Achtung: Es können maximal 10 DHT22-Sensoren angeschlossen werden!*   
  
---

-   **24h-Durchschnittswerte:**  
    `#define AVERAGES`  
        Sollen 24h-Durchschnittswerte von bestimmten Parametern berechnet
    werden, so ist das Definement zu aktivieren (Voreinstellung).  
    
    `boolean logAverageValues = true;`  
    Sollen diese Durchschnittswerte zusätzlich in der Datei *averages.txt* auf einer microSD-Karte geloggt werden, so ist die Einstellung `true` beizubehalten.  
    Ist ein Loggen dieser Werte nicht gewünscht, ist hingegen `false` einzustellen.  
    
    Des weiteren müssen die gewünschten Parameter bei der entsprechenden Variable eingetragen
    werden, bspw.:  
    ```
    int avg_parameters[40] = {  
    8700, // Außentemperatur  
    8740 // Raumtemperatur-Ist  
    };
    ```  
    *Achtung: Es können maximal 40 Parameter angegeben werden!*  

---

-   **Logging auf microSD-Karte und bei Verwendung von MQTT:**  
    `#define LOGGER` → Das Logging-Modul wird kompiliert. *Achtung: Dies ist sowohl Voraussetzung für das Loggen auf eine microSD-Karte als auch für die Verwendung von MQTT (s.u.)!*     
      
    Nachfolgend können/sollten verschiedene Einstellungen vorgenommen werden:  
    - Sollen 'rohe' *Bus-Datentelegramme* geloggt werden, kann die Auswahl spezifiziert werden. Die Speicherung der Telegramme erfolgt in der Datei *journal.txt* auf der microSD-Karte. In der Voreinstellung ist das Loggen von Bustelegrammen deaktiviert:  
    `int logTelegram = LOGTELEGRAM_OFF;`  
    
    Folgende Einstelloptionen sind hier verfügbar:  
    `LOGTELEGRAM_OFF` → Bus-Telegramme werden nicht geloggt (Voreinstellung)  
    `LOGTELEGRAM_ON` = alle Bus-Telegramme werden geloggt  
    `LOGTELEGRAM_ON + LOGTELEGRAM_UNKNOWN_ONLY` → nur unbekannte Bus-Telegramme werden geloggt  
    `LOGTELEGRAM_ON + LOGTELEGRAM_BROADCAST_ONLY` → nur Broadcast-Telegramme werden geloggt  
    `LOGTELEGRAM_ON + LOGTELEGRAM_UNKNOWNBROADCAST_ONLY` → nur unbekannte Broadcast-Telegramme werden geloggt  

    - Für die zu loggenden *Parameter* gibt es folgende Einstelloptionen:  
    `boolean logCurrentValues = false;`  
    Die Werte der zu loggenden Parameter werden bei Bedarf in der Datei 'datalog.txt' auf der microSD-Karte gespeichert. Dazu ist die Variable auf `true` zu setzen.  
      
    `unsigned long log_interval = 3600;`  
    Das gewünschte Logintervall in Sekunden.  
    *Achtung: Dieses Intervall ist auch für die Nutzung von MQTT (s.u.) einzustellen, selbst wenn kein Loggen stattfinden soll!*  

    Die zu loggenden Parameter müssen dann bei der entsprechenden Variable eingetragen werden, bspw.:
    ```
    int log_parameters[40] = {  
    8700, // Außentemperatur  
    8740 // Raumtemperatur-Ist  
    };
    ```
    *Achtung: Es können maximal 40 Parameter angegeben werden!*  
    
    *Hinweis:*  
    Wenn mehrere DS18B20- oder DHT22-Sensoren geloggt werden sollen,
    müssen diese bei den Log-Parametern entsprechend einzeln
    untereinander aufgeführt werden, bspw.:  
    ```
    20300, // Spezialparameter 20300-20499: DS18B20-Sensoren 1-100 (/T)  
    20301,  
    20302, 
    ```
    loggt die Werte der DS18B20-Sensoren 1-3.

    ***Hinweis:***  
    *Zum Loggen der Brennerstarts und -laufzeiten müssen die Spezialparameter 20000 und 20001 aufgeführt werden (siehe auch die Beschreibung in der Datei BSB_lan_config.h). Bei einem zweistufiger Ölbrenner, dessen Regler die entsprechenden Broadcasts schickt und bei dem eine Differenzierung der Brennerstufen möglich ist (derzeit nur RVS43.325), müssen hier zusätzlich 20002 und 20003 mit aufgeführt werden!*  
    *TWW-Laufzeit und TWW-Takte sind die Spezialparameter 20004 und 20005, 24h-Durchschnittswerte sind die Spezialparameter 20050-20099, DHT22-Sensoren sind die Spezialparameter 20100-20299, DS18B20-Sensoren sind die Spezialparameter 20300-20499, MAX!-Sensoren sind die Spezialparameter 20500-20699.*  
        
---        
        
-   **MQTT:**  
    Soll MQTT zum Einsatz kommen, so sind die entspr. Variablen und Einstellungen anzupassen:    

    - `define MQTT` → Das MQTT-Modul wird kompiliert (Voreinstellung)  
    
    - `byte mqtt_mode = 0;` → MQTT ist deaktiviert (Voreinstellung); folgende Optionen sind möglich:  
    1 = die Nachrichten werden im einfachen Textformat gesendet  
    2 = die Nachrichten werden im JSON-Format gesendet (Struktur der JSON-Payload: {"MQTTDeviceID": {"status":{"log_param1":"value1","log_param2":"value2"}, ...}})  
    
    - `byte mqtt_broker_ip_addr[4] = {192,168,1,20};` → IP des MQTT-Brokers.  
        *Bitte beachte die Kommata anstelle von Punkten!*  
        Der Standardport ist 1883 und muss nicht extra definiert werden.  
        
    - `char MQTTUsername[32] = "User";` → Username; wird Username/Passwort beim MQTT-Broker nicht verwendet, ist das *User* zu entfernen.   
    
    - `char MQTTPassword[32] = "Pass";` → Passwort; wird Username/Passwort beim MQTT-Broker nicht verwendet, ist das *Pass* zu entfernen.   
    
    - `char MQTTTopicPrefix[32] = "BSB-LAN";` → Optional: Die MQTT-Nachrichten haben das Topic-Format ('Thema') `BSB-LAN/<Parametername>` und den entsprechenden Wert dann in der Payload. Wenn nichts angegeben wird (`char MQTTTopicPrefix[32] = "";`), wird der Standard-Themenname verwendet.     
    
    - `char MQTTDeviceID[32] = "MyHeater";` → Optional: Device-Name, der als Header in der JSON-Payload genutzt wird. Wenn nichts angegeben wird (`char MQTTDeviceID[32] = "";`), wird "BSB-LAN" verwendet.  
    
    ***Hinweis:***   
    *Die zu übertragenden Parameter sowie das Übertragungsintervall für MQTT werden oben bei den zu loggenden Parametern und dem Logintervall für das Loggen auf microSD-Karte eingegeben! Soll nur MQTT zum Einsatz kommen und die definierten Parameter nicht noch zusätzlich auf microSD-Karte gespeichert werden, so muss das LOGGER-Definement auskommentiert werden:*   
    `//#define LOGGER`   
   
---   
   
-   **IPWE:**  
    `#define IPWE` → Das IPWE-Modul wird kompiliert.    
    `boolean enable_ipwe = false;`  
    Soll die IPWE-Erweiterung (URL/ipwe.cgi) verwendet werden, ist die Variable auf 'true' zu setzen.     
  
    Die gewünschten Parameter (maximal 40) sind ebenfalls einzutragen:  
    ```  
    int ipwe_parameters[40] = {  
    8700,                   // Außentemperatur  
    8830                   // Warmwassertemperatur  
    };  
    ```
  
---  
  
-   **MAX! (CUNO/CUNX/modifizierter MAX!Cube):**  
    Sollen optionale MAX!-Thermostate zum Einsatz kommen, müssen folgende Einstellungen angepasst werden:  
    
     - `//#define MAX_CUL` → Definement aktivieren  
     
     - `boolean enable_max_cul = false;` → Variable auf 'true' setzen  
     
     - `byte max_cul_ip_addr[4] = {192,168,178,5};` → IP-Adresse des CUNO/CUNX/modifizierten MAX!Cubes - *bitte beachte die Kommata anstelle von Punkten!*  
     
    - Liste der abzufragenden MAX!-Thermostate:
    ```
    char max_device_list[20][11] = {   
    "KEQ0502326",  
    "KEQ0505080"
    };
    ```  
    Hier bitte die entspr. 10-stellige Seriennummer / MAX!-ID eintragen.  
    *Achtung: Es können maximal 20 MAX!-Devices angebunden werden!*  
    Für weitere Informationen bzgl. der Einbindung von MAX!-Komponenten s. [Kap. 12.5](kap12.md#125-max-komponenten).  
  
---  
  
-   **Anzahl der maximalen Wiederholungsversuche bei einer Abfrage:**    
    `#define QUERY_RETRIES  3`  
    Hier kann bei Bedarf eingestellt werden, wieviele maximale Wiederholungsversuche ausgeführt werden, wenn bei einer Abfrage keine entsprechende Antwort vom Heizungsregler kommt. In der Regel kann die Voreinstellung (max. 3 Versuche) beibehalten werden.  
    
---    
    
-   Soll der Arduino **per URL-Befehl** mittels `http://<IP-Adresse>/N`
    **resettet** werden können, muss das entsprechende Definement aktiviert
    werden:  
    `#define RESET`  
    
    *Hinweis:*  
    Trotz Aktivierung kann es in Ausnahmefällen vorkommen, dass dieser Befehl bei einigen (älteren) Arduino-Boards (bzw. Clones) keine Wirkung zeigt.    
    
---    

-   **RX-/TX-Konfiguration des Adapters:**  
    `byte bus_pins[2] = {0,0};` → automatische Erkennung und Einstellung der RX-/TX-Pinbelegung (Voreinstellung); ansonsten gilt:  
    - Hardware-Serial (ab Adapter v3 & Arduino Due): RX-Pin = 19, TX-Pin = 18  
    - Software-Serial (bis einschließlich Adapter v2 & Arduino Mega 2560): RX-Pin = 68, TX-Pin = 69  
    
---    
    
-   **Bus-Typ/-Protokoll:**  
    `uint8_t bus_type = 0;`  
    Je nach Anschluss des Adapters an einen BSB/LPB/PPS-Anschluss muss der entspr. Bus-Typ definiert werden (bereits nach Booten des Arduino wirksam).     
    Voreingestellt ist 0 für BSB, für LPB ist 1 einzustellen, für PPS
    hingegen 2:    
    0 = BSB  
    1 = LPB  
    2 = PPS
 
--- 
 
-   **Buseinstellungen:**  
    Abhängig vom Bus-Typ müssen unterschiedliche Einstellungen vorgenommen werden.  
    
    → **BSB:**  
    - `byte own_bsb_address = 0x42;` → entspricht der eigenen  Geräteadresse 66 des BSB-LAN-Adapters  
    
    → **LPB:**  
    - `byte own_lpb_address = 0x42;` → eigene Adresse (BSB-LAN-Adapter), entspricht der Segmentadresse 4 mit Geräteadresse 3   
    - `byte dest_lpb_address = 0x00;` → Zieladresse (Heizungsregler), entspricht der Segmentadresse 0 mit Geräteadresse 1  
    
    → **PPS:**  
    - `boolean pps_write = 0;` → in der Standardeinstellung ist nur ein lesender Zugriff auf den via PPS angeschlossenen Heizungsregler möglich. Soll Schreibzugriff ermöglicht werden, so ist eine `1` einzutragen (`boolean pps_write = 1;`). *Achtung: Schreibzugriff NUR einstellen, wenn KEIN originales QAA50/QAA70-Raumgerät vorhanden ist!*  
    - `byte QAA_TYPE = 0x53;` → Typ des zu imitierenden Raumgerätes einstellen: 0x53 = QAA70, 0x52 = QAA50    
   
---   
   
-   **Geschützte GPIO-Pins:**  
    Hier sind normalerweise keinerlei Anpassungen vorzunehmen. Sollten individuelle Veränderungen an der Hardware vorgenommen werden, die entspr. Berücksichtigungen hinsichtlich der geschützten GPIO-Pins erfordern, sieh bitte im entspr. Abschnitt in der Datei *BSB_lan_config.h* nach.  
    
---    
    
-   **Erkennung bzw. Festlegung des Heizungsreglertyps:**  
    `static const int fixed_device_family = 0;`  
    `static const int fixed_device_variant = 0;`
    
    Wenn die Werte auf 0 gesetzt sind, ist die automatische Erkennung
    des angeschlossenen Reglers beim Starten des Arduino aktiviert (Voreinstellung). Dies kann i.d.R. so belassen werden.   
    Alternativ kann hier die Ausgabe von `http://<IP-Adresse>/6225/6226`
    eingetragen werden (6225 = Gerätefamilie / device family & 6226 =
    Gerätevariante / device variant).  
    Ein fest eingestellter Wert (laut 6225&6226) stellt sicher, dass
    BSB-LAN auch dann noch korrekt arbeitet, wenn die Heizung bzw. der
    Regler erst nach dem Starten des Arduino eingeschaltet wird (da in
    dem Fall die automatische Erkennung des angeschlossenen Reglers
    nicht funktionieren kann, da ja keine Rückmeldung vom Regler kommt).  
    
---    
    
-   **Schreib-/Lesezugriff auf den Heizungsregler:**  
    `#define DEFAULT_FLAG FL_RONLY`  
    In der Voreinstellung ist der Zugriff des Adapters auf den Heizungsregler auf Lesen beschränkt, d.h. ein Setzen bzw. Verändern von Parametern der Heizungssteuerung per Adapter ist in der Voreinstellung nicht möglich.  
    Wer den Status ändern will, um *generell* Werte und Einstellungen
    des Reglers per Adapter verändern zu können, muss das Flag auf 0
    setzen:  
    `#define DEFAULT_FLAG 0`  
    *Achtung: Dies betrifft ALLE verfügbaren Parameter/Einstelloptionen des Heizungsreglers!*  

    Ist diese Funktion aus Sicherheitsgründen hingegen nur bei *ausgewählten* Parametern (z.B. 10000
    oder 710) gewünscht, muss bei dem genannten Definement nach wie vor
    das genannte Flag generell auf `FL_RONLY` gesetzt sein und dann in
    der Datei *BSB_lan_defs.h* das `DEFAULT_FLAG` des gewünschten
    Parameters durch 0 (Null) ersetzt werden. Beachte hierbei jedoch bitte, dass es im Falle eines Updates von BSB-LAN nötig sein kann/wird, diese Änderungen erneut vorzunehmen! 
    
    Im folgenden Beispiel wird Parameter 700 auf diese Weise schreibbar
    gemacht:  
    ```
    {0x2D3D0574, CAT_HK1, VT_ENUM, 700, STR700, sizeof(ENUM700), ENUM700, DEFAULT_FLAG, DEV_ALL}, // [-] - Heizkreis 1 - Betriebsart ***(virtuelle Zeile)***
    ```
    → aufgrund des „DEFAULT_FLAG" ist der Parameter momentan nur lesbar

    ```
    {0x2D3D0574, CAT_HK1, VT_ENUM, 700, STR700, sizeof(ENUM700), ENUM700, 0, DEV_ALL}, // [-] - Heizkreis 1 - Betriebsart ***(virtuelle Zeile)***
    ```
    → das „DEFAULT_FLAG" wurde durch „0" (Null, ohne Anführungszeichen)
    ersetzt
    
---    
    
-   **Eigenen Code** aus der Datei *BSB_lan_custom.h* einfügen:  
`#define CUSTOM_COMMANDS`  
Fügt die Befehle aus der Datei `BSB_lan_custom.h` hizu, die am Ende jedes 'main loops' ausgeführt werden.  
   
---   
   
-   **Überprüfen der BSB-LAN-Version:**  
`#define VERSION_CHECK`  
`boolean enable_version_check = true;`    
Diese Funktion überprüft bei jedem Aufruf der Startseite des Webinterface, ob eine neuere Version von BSB-LAN verfügbar ist. Dazu ist Internetzugriff nötig. Wenn der automatische Internetzugriff von BSB-LAN nicht erwünscht ist, so ist das Definement zu deaktivieren und die Variable auf `false` zu setzen.    
    
---    
       
-   **"Externen" Webserver aktivieren:**  
`#define WEBSERVER`    
Wenn dieses Definement aktiviert ist, kann BSB-LAN als Webserver für statische Inhalte fungieren. Alle Dateien werden bzw. müssen auf der microSD-Karte gespeichert werden. Die Dateien können in verschiedenen Verzeichnissen abgelegt werden. Lediglich statische Inhalte werden unterstützt.
Unterstützte Dateitypen sind: html, htm, css, js, xml, txt, jpg, gif, svg, png, ico, gz.
Der Webserver unterstützt statische Komprimierung. Wenn möglich (d.h., wenn der Client gzip unterstützt) wird stets versucht, gzip-gezippte Inhalte zu erzeugen (z.B. /d3d.js.gz für die URL /d3d.js).
Der Webserver unterstützt dabei folgende header: ETag, Last-Modified, Content-Length, Cache-Control.
    
---    
    
-   **Speichern der Konfiguration im EEPROM (nur Arduino Due):**  
    `#define CONFIG_IN_EEPROM`  
    Soll die Konfiguration nicht im EEPROM des Due gespeichert werden, so ist das Definement zu deaktivieren.  
    
---    
    
-   **Konfiguration via Webinterface:**  
    `//#define WEBCONFIG`  
    Wenn die Möglichkeit der Konfiguration via Webinterface (bei gleichzeitiger Speicherung im EEPROM) gewünscht ist (nur Arduino Due), dann ist dieses Definement zu aktivieren.   
    
---    

-   **Variablen für eine zukünftige Verwendung, derzeit (November 2020) noch ohne Funktion:**  
    `#define ROOM_UNIT` → Raumgeräteersatz  
    `byte UdpIP[4] = {0,0,0,0};` → Ziel-IP-Adresse für UDP   
    `uint16_t UdpDelay = 15;` → Sendeintervall in Sekunden für UDP  

    `#define OFF_SITE_LOGGER` → Off-Site-Logger Erweiterung  
    `byte destinationServer[128] = "";` → IP des Off-Site-Loggers  
    `uint16_t destinationPort = 80;` → Port des Off-Site-Loggers  
    `uint32_t destinationDelay = 84600;` → Sendeintervall in Sekunden  
    
---    
    
-   **Deaktivierung bestimmter Module (bei Nutzung eines Arduino Mega 2560):**  
       
    Wird anstelle des Arduino Due noch das veraltete Setup mit dem Arduino Mega 2560 genutzt (*Hinweis: Bitte beachte in diesem Fall auch den [Anhang D](#anhang_d.md)!*), so können hier die aufgeführten Module zentral deaktiviert und vom Kompilieren ausgeschlossen werden. Das Deaktivieren einiger Module ist aufgrund des geringeren Speichers des Mega 2560 nötig. Welche Module individuell zu nutzen und zu deaktivieren sind, muss selbst getestet werden, da das Mega-Setup in dieser Hinsicht 'veraltet' ist und eine problemlose Lauffähigkeit von BSB-LAN nicht in jedem Konfigurationsfall garantiert werden kann.  
    Die Einstellungen an dieser Stelle überschreiben die entsprechenden, zuvor aufgeführten und getätigten Einstellungen.      
    
    ```
    #if defined(__AVR__)
    //#undef CONFIG_IN_EEPROM
    //#undef WEBCONFIG
    //#undef WEBSERVER
    #undef AVERAGES
    #undef DEBUG
    #undef IPWE
    #undef MQTT
    #undef OFF_SITE_LOGGER
    #undef ROOM_UNIT
    #undef VERSION_CHECK
    #undef MAX_CUL
    #endif
    ```  
   
---  

     
[Weiter zu Kapitel 6](kap06.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

