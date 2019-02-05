[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 4](kap04.md)    
    
---
    

    

# 5. Einstellungsrelevante Parameter der BSB-LAN-Software #

Folgende Parameter in der Datei *BSB_lan_config.h* können bzw. sollten
vor der Verwendung des Adapters angepasst werden:


-   **Ethernet-Port:**  
    `#define Port 80` (default für HTTP)  

-   **IP-Adresse:**  
    `#define IPAddr 192,168,178,88`

-   **GatewayIP:**  
    Durch Aktivierung des Definements und Anpassung der IP
    kann hier optional die IP eines (nicht-Standard-)Gateways definiert
    werden:  
    `#define GatewayIP 192,168,178,1`  
    
-   **SubnetIP:**  
    Durch Aktivierung des Definements und Anpassung der IP 
    kann hier optional die IP eines (nicht-standard-)Subnets definiert werden:  
    `#define SubnetIP 255,255,255,0`

-   **WIFI-Einstellungen:**  
    Wenn anstelle des LAN-Shields ein ESP8266-AT-firmware-basiertes 
    WiFi-Modul zum Einsatz kommt, muss das Definement  
    `#define WIFI`  
    aktiviert und die SSID sowie das WLAN-Passwort hinterlegt werden:  
    `char ssid[] = "SSID_hier_eingeben"`  
    `char pass[] = "WLAN-Passwort_hier_eingeben"`

-   Um das System vor einem ungewollten Zugriff von außen zu schützen,
    kann die **Funktion des Sicherheitsschlüssels (PASSKEY)** aktiviert
    werden (sehr einfach und nicht wirklich sicher!):  
    `#define PASSKEY "1234"`

    Falls die PASSKEY-Funktion aktiviert ist, muss die URL bei einem
    Aufruf des Webinterfaces den definierten Schlüssel als erstes
    Element enthalten, bspw. `http://<IP-Adresse>/<passkey>/`
    um die Hilfeseite zu sehen.  
    *Bitte nicht den Slash hinter dem Passkey vergessen!*

    ***Die URLs in den folgenden Beispielen müssen um die PASSKEY-Definition erweitert werden, falls die Funktion aktiviert wurde.***

-   **Darüber hinaus gibt es zwei weitere Sicherheitsfunktionen:**
    `TRUSTED_IP` und `USER_PASS_B64`

    `TRUSTED_IP` (und `TRUSTED_IP2` für eine weitere IP) kann man auf das
    letzte Segment einer vertrauenswürdigen IP setzen (z.B. des
    FHEM-Servers), dann ist der Zugriff nur über die IP mit dieser
    Endung möglich. Lautet die vertrauenswürdige IP des Clients bspw.
    `192.168.178.20`, so ist `#define TRUSTED_IP 20` einzustellen.

    Mit `USER_PASS_B64` kann ein in Base64-codierter String nach dem
    Muster *username:passwort* als Zugangssperre gesetzt werden.
    Voreingestellt ist hier der Benutzername \"atari\" und das Passwort
    \"800xl\" (codiert: YXRhcmk6ODAweGw=).  
    Um eine andere Kombination zu nutzen, gehe bspw. auf die Website
    [https://www.base64encode.org](https://www.base64encode.org/), 
    lasse dein neues Passwort im Format *username:password* erstellen
    und füge die Codierung hinter dem Definement ein:  
    `#define USER_PASS_B64 "YXRhcmk6ODAweGw="`

-   **Konfiguration des Heizungssystems:**  
    `const int fixed_device_family = 0;`  
    `const int fixed_device_variant = 0;`
    
    Wenn die Werte auf 0 gesetzt sind, ist die automatische Erkennung
    des angeschlossenen Reglers beim Starten des Arduino aktiviert.  
    Alternativ kann hier die Ausgabe von `http://<IP-Adresse>/6225/6226`
    eingetragen werden (6225 = Gerätefamilie / device family & 6226 =
    Gerätevariante / device variant).  
    Ein fest eingestellter Wert (laut 6225&6226) stellt sicher, dass
    BSB-LAN auch dann noch korrekt arbeitet, wenn die Heizung bzw. der
    Regler erst nach dem Starten des Arduino eingeschaltet wird (da in
    dem Fall die automatische Erkennung des angeschlossenen Reglers
    nicht funktionieren kann, da ja keine Rückmeldung vom Regler kommt).

-   Die **Sprache der Benutzeroberfläche** des Webinterface des Adapters ist
    auf Deutsch voreingestellt. Möchte man die Sprache auf Englisch
    umstellen, muss das entsprechende Definement deaktiviert werden:  
    `//#define LANG_DE;`

-   Sollen bei einer Abfrage via Webinterface auch die **unbekannten Parameter** (Fehlermeldung „error 7 (parameter not supportet)")
    angezeigt werden, so muss das Definement  
    `#define HIDE_UNKNOWN`  
    auskommentiert werden.

-   Sollen **OneWire-Temperatursensoren (DS18B20)** verwendet werden, muss
    die entsprechende Pinbelegung (DATA-Anschluss des Sensors am
    Adapterboard) definiert werden (\<n\> = Pinnummer):  
    `#define ONE_WIRE_BUS <n>`

-   Sollen **DHT22-Sensoren (Temperatur & Feuchtigkeit)** verwendet werden,
    muss die entsprechende Pinbelegung (DATA-Anschluss des Sensors am
    Adapterboard) definiert werden (\<n\> = Pinnummer):  
    `#define DHT_BUS <n>`

-   Sollen **24h-Durchschnittswerte** von bestimmten Parametern berechnet
    werden, müssen diese bei der entsprechenden Variable eingetragen
    werden, bspw.:  
    ```
    int avg_parameters[20] = {  
    8700, // Außentemperatur  
    8740 // Raumtemperatur-Ist  
    };
    ```

-   Sollen bestimmte **Werte/Parameter auf eine microSD-Karte geloggt**
    werden, ist eine FAT32-formatierte Karte im entsprechenden Slot auf
    dem Ethernet-Shield einzulegen und das entsprechende Definement zu
    aktivieren:  
    `#define LOGGER`

    Die zu loggenden Parameter müssen dann bei der entsprechenden
    Variable eingetragen werden, bspw.:
    ```
    int log_parameters[20] = {  
    8700, // Außentemperatur  
    8740 // Raumtemperatur-Ist  
    };
    ```

    Wenn mehrere DS18B20- oder DHT22-Sensoren geloggt werden sollen,
    müssen diese bei den Log-Parametern entsprechend einzeln
    untereinander aufgeführt werden, bspw.:  
    ```
    20200, // Spezialparameter 20200-20299: DS18B20-Sensoren 1-100 (/T)  
    20201,  
    20202, 
    ```
    loggt die Werte der DS18B20-Sensoren 1-3.

    ***Hinweis:***  
    *Zum Loggen der Brennerstarts und -laufzeiten müssen die Spezialparameter 20000 und 20001 aufgeführt werden (siehe auch die Beschreibung in der Datei BSB_lan_config.h). Bei einem zweistufiger Ölbrenner, dessen Regler die entsprechenden Broadcasts schickt und bei dem eine Differenzierung der Brennerstufen möglich ist (derzeit nur RVS43.325), müssen hier zusätzlich 20002 und 20003 mit aufgeführt werden!*  
    *TWW-Laufzeit und TWW-Takte sind die Spezialparameter 20004 und 20005, 24h-Durchschnittswerte ist der Spezialparameter 20006, DHT22-Sensoren sind die Spezialparameter 20100-20199, DS18B20-Sensoren sind die Spezialparameter 20200-20299.*  
    
-   Das **Logintervall** ist bei  
    `unsigned long log_interval = 3600;`  
    in Sekunden einzustellen.
    
-   Soll **MQTT** zum Einsatz kommen, so sind die entspr. Definements zu aktivieren und anzupassen:   
    `#define MQTTBrokerIP 192,168,1,20` → IP des MQTT-Brokers  
    
    Wenn beim MQTT-Broker Username und Passwort verwendet werden, so sind die entspr. definements ebenaflls zu aktivieren und die Angaben hier zu hinterlegen:   
    `#define MQTTUsername "User"` → Username  
    `#define MQTTPassword "Pass"` → Passwort   
    Nach Aktivierung des Definements kann hier das "Thema" für die MQTT-Nachrichten eingegeben werden (Standard ist BSB-LAN):   
    `#define MQTTTopicPrefix "BSB-LAN"`   
    Die MQTT-Nachrichten haben dann das Topic-Format „BSB-LAN/\<Parametername\>“ und den entsprechenden Wert dann in der Payload.  
    
    ***Hinweis:***   
    *Die zu übertragenden Parameter sowie das Übertragungsintervall für MQTT werden oben bei den zu loggenden Parametern und dem Logintervall für das Loggen auf microSD-Karte eingegeben! Soll nur MQTT zum Einsatz kommen und die definierten Parameter nicht noch zusätzlich auf microSD-Karte gespeichert werden, so muss das LOGGER-Definement auskommentiert werden:*   
    `//#define LOGGER`   
   
-   Soll die **IPWE-Erweiterung** aktiviert werden, ist das entsprechende
    Definement  
    `#define IPWE`   
    zu aktivieren, die gewünschten Parameter sind wie gewohnt
    einzutragen.

    ***Tipp:***  
    *Werden DS18B20- und/oder DHT22-Sensoren verwendet, werden diese hier standardmäßig mit angezeigt (URL: `http://<IP-Adresse>/ipwe.cgi`). Dabei wird neben den gemessenen Werten auch die jeweils spezifische Hardwarekennung der OneWire-Sensoren (DS18B20) aufgeführt. Dies ist besonders bei einer Ersteinrichtung für eine eindeutige Unterscheidung der einzelnen Sensoren hilfreich.*

-   Sollen optionale **MAX!-Thermostate** zum Einsatz kommen, muss das
    entsprechende Definement  
    `#define MAX_CUL 192,168,178,5`  
    aktiviert, sowie die URL und die spezifischen MAX!-IDs entsprechend  
    angepasst werden.  
    Für weitere Informationen bzgl. der Einbindung von MAX!-Komponenten s. Kap. [12.2](kap12.md).  

-   Soll der Arduino **per URL-Befehl** mittels `http://<IP-Adresse>/N`
    **resettet** werden können, muss das entsprechende Definement aktiviert
    werden:  
    `#define RESET`

-   **MAC-Adresse des Ethernet-Shields:**  
    `byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xEA};`

    Üblicherweise befindet sie sich auf einem Aufkleber auf dem
    Ethernet-Shield, diese ist dann einzutragen. Sollte kein Aufkleber
    mit einer spezifischen Adresse vorhanden sein, kann die
    voreingestellte Adresse beibehalten werden. Eine Änderung ist i.d.R.
    nur nötig, wenn mehr als ein Adapter verwendet wird.

-   **Konfiguration des Adapters:**  
    `BSB bus(68,69,<my_addr>,<dest_addr>);`

    - RX-Pin (68)  
    - TX-Pin (69)  
    - eigene Bus-Adresse, voreingestellt auf 0x06 → dies entspricht RGT1 bei BSB bzw. der Geräteadresse 7 bei LPB  
    - Bus-Adresse des Zielsystems, voreingestellt auf 0x00 → dies entspricht dem direkt angeschlossenen Heizungsregler bei BSB bzw. der Ziel-Geräteadresse 1 beim LPB

    ***Wichtige Hinweise:***  
    ***→ BSB:***  
    *Eine Adresskollision bei zwei gleichzeitig als RGT1 (Raumgerät 1) angemeldeten Geräten (bspw. Raumgerät und BSB-LAN-Adapter) wurde bisher nur bei einem RGB (QAA55) beobachtet. Ein RGT (QAA75) und ein Adapter mit gleichzeitiger Anmeldung als RGT1 verursachte im Testbetrieb hingegen keine Adresskollision.*  
    *Um generell das Risiko einer Adresskollision zu vermeiden, sollte -wenn möglich- bei Vorhandensein eines bereits als RGT1-angemeldeten Raumgerätes der Adapter trotzdem direkt als RGT2 angemeldet werden.*  
    *Zusätzlich besteht die Möglichkeit, den Adapter auch als "Raumgerät P", "Bedieneinheit 1 / 2" (Achtung: Adresskollision mit der kesselseitigen Bedieneinheit!) und "Servicegerät" anzumelden. Die entspr. Werte sind wie folgt:*  
    `BSB bus(68,69);` = RGT1  
    `BSB bus(68,69,7);` = RGT2  
    
    *Bitte beachte, dass ein als RGT1 angemeldeter Adapter eventuell keine Temperaturen an einen HK2 senden kann, und ein als RGT2 angemeldeter Adapter eventuell keine Temperaturen an einen HK1 senden kann!*  
    *Vereinzelt kam es schon vor, dass Raumtemperaturen kurioserweise nur von einem als RGT2 angemeldeten Adapter vom HK1 berücksichtigt wurden.*  
    *Ob eine Bedienung eines HK1 mit einem als RGT2 (oder HK2 mit einem als RGT1) angemeldeten Adapter in vollem Umfang möglich ist, wurde bisher noch nicht ausgiebig getestet.*  
       
    ***→ LPB:***  
    *Wenn als Anschluss die LPB-Schnittstelle verwendet wird (s. nächster Punkt "Bus-Protokoll"), so sind u.U. die eigene Geräteadresse und die gewünschte Ziel-Geräteadresse der vorhandenen LPB-Adressierung des Heizungssystems anzupassen!*  
    *Beispiel: Adressen 1, 2, 3 (alle im gleichen Segment mit der Segmentadresse 0) sind im bestehenden Geräteverbund bereits vorhanden. Wenn der Adapter nun die Adresse 4 erhalten und das Gerät mit der Geräteadresse 2 abgefragt werden soll, dann ist `BSB bus(68,69,4,2);` einzugeben.*    
    
    ***→ PPS:***  
    *Wenn als Anschluss die PPS-Schnittstelle verwendet wird (s. nächster Punkt "Bus-Protokoll"), so ist als dritter Wert (oben als \<my_addr\> bezeichnet) zusätzlich eine 1 zu setzen, wenn der Adapter (nur bei NICHT vorhandenem QAA50/70-Raumgerät!) auch schreibend wirken soll:*  
    `BSB bus(68,69,1);`  
    *Soll der Adapter nur lesend wirken, ist nichts einzustellen:*    
    `BSB bus(68,69);`   
    *Sollen via BSB-LAN aktiv Einstellungen geändert werden, so muss selbstverständlich das etwas weiter unten aufgeführte Definement bzgl. Schreibzugriff des Adapters zusätzlich entspr. angepasst werden!*   
    
-   Verwendetes **Bus-Protokoll** festlegen (bereits nach Booten des Arduino wirksam):     
    `uint8_t bus_type = bus.setBusType(0);`   
    Voreingestellt ist 0 für BSB, für LPB ist 1 einzustellen, für PPS
    hingegen 2.  
    0 = BSB  
    1 = LPB  
    2 = PPS
 
-   *Nur bei PPS-Verwendung:* Den **Typ des zu 'imitierenden' QAA-Raumgerätes** durch Aktivieren und Anpassen des folgenden Definements festlegen:   
    `#define QAA_TYPE 0x53`   
    0x53 → QAA70 (Standardeinstellung)   
    0x52 → QAA50

-   In der Voreinstellung ist der **Zugriff des Adapters auf den Regler**
    auf Lesen beschränkt, d.h. ein Setzen bzw. Verändern von Parametern
    der Heizungssteuerung per Adapter ist standardmäßig nicht möglich.  
    Das betreffende Definement lautet:  
    `#define DEFAULT_FLAG FL_RONLY;`

    Wer den Status ändern will, um *generell* Werte und Einstellungen
    des Reglers per Adapter verändern zu können, muss das Flag auf 0
    setzen:  
    `#define DEFAULT_FLAG 0;`

    Ist diese Funktion nur bei *ausgewählten* Parametern (z.B. 10000
    oder 710) gewünscht, muss bei dem genannten Definement nach wie vor
    das genannte Flag generell auf `FL_RONLY` gesetzt sein und dann in
    der Datei *BSB_lan_defs.h* das `DEFAULT_FLAG` des gewünschten
    Parameters durch 0 (Null) ersetzt werden.  
    
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
    
-   **Debug-Definement:**   
`#define DEBUG`  
    Soll BSB-LAN auf nicht-freigebene
    reglerspezifische CommandIDs überprüft werden (s. Kap. [8.2.5](kap08.md)),
    muss das Definement vorübergehend aktiviert werden. Nach Abfrage von
    `http://<IP-Adresse>/Q` sowie für den Normalbetrieb kann das
    Definement wieder auskommentiert werden.


       
    
---
    

     
[Weiter zu Kapitel 6](kap06.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    
###### *&copy; Ulf Dieckmann*

