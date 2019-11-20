[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 4](kap04.md)    
    
---
    

# 5. Einstellungsrelevante Parameter der BSB-LAN-Software
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
    
-   **DNSIP:**  
    Durch Aktivierung des Definements und Anpassung der IP 
    kann hier optional die IP eines (nicht-Standard-)DNS definiert 
    werden, wenn die IP nicht mit der des Routers übereinstimmt:  
    `#define DNSIP 192,168,178,1`    
    
-   **SubnetIP:**  
    Durch Aktivierung des Definements und Anpassung der IP 
    kann hier optional die IP eines (nicht-standard-)Subnets definiert werden:  
    `#define SubnetIP 255,255,255,0`  
    
-   Die **Sprache der Benutzeroberfläche** des Webinterface des Adapters sowie der Kategorie- und Parameterbezeichnungen muss
    *zwingend* ausgewählt bzw. definiert werden. Für "Deutsch" ist dabei das folgende Definement zu wählen:  
    `#define LANG DE`  
    Ab v.042 ist es nun möglich, BSB-LAN auch in anderen Sprachen zu nutzen, wobei prinzipiell ab sofort jede Sprache unterstützt werden kann (es müssen dann 'nur' die entspr. Übersetzungen erstellt werden).  
Vorhanden sind momentan: Tschechisch (CZ), Deutsch (DE), Dänisch (DK), Englisch (EN), Spanisch (ES), Finnisch (FI), Französisch (FR), Griechisch (GR), Ungarisch (HU), Italienisch (IT), Niederländisch (NL), Polnisch (PL), Russisch (RU), Schwedisch (SE), Slovenisch (SI) und Türkisch (TR). Wenn gewisse Ausdrücke nicht in der spezifischen Sprache vorliegen, wird automatisch der englische Ausdruck angezeigt. Sollte auch dieser nicht vorhanden sein, wird schließlich der deutsche Ausdruck dargestellt. 

    *Um eine Sprache hinzuzufügen oder zu erweitern, ist Folgendes zu tun:*  
    - Sprachdatei LANG_<ISO-CODE>.h im Verzeichnis "localization" anlegen oder bestehende Datei öffnen.
    - Aus einer bestehenden Sprachendatei (Deutsch ist zu 100% komplett) den entsprechenden Eintrag kopieren, also z.B.
    #define ENUM5970_01_TEXT "Raumthermostat"
    - Den Text zwischen den Anführungszeichen übersetzen, den Rest nicht anrühren, und auch die Anführungszeichen nicht aus Versehen löschen, also für Englisch dann:   
    #define ENUM5970_01_TEXT "Room thermostat"
    - Wenn man mit allen Einträgen, die man übersetzen will, fertig ist: Datei abspeichern, und wer kann, das Script "create-undefs.pl" ausführen. Dies ist nicht zwingend notwendig, verhindert aber unnötige Compiler-Warnungen.

    Jedes allein stehende Wort ist nur einmal vorhanden, auch wenn es an mehreren Stellen vorkommt, allerdings trifft das nicht auf zusammengesetzte Begriffe zu; um im obigen Beispiel zu bleiben: Alle weiteren Vorkommen von "Raumthermostat" alleine sind mit der einen Zeile übersetzt, allerdings nicht Parameter oder Optionen, die "Raumthermostat 1" heißen. Diese sind extra aufgeführt und müssen auch extra übersetzt werden. Nicht übersetzte Einträge einer Sprache werden im nächsten Schritt im Englischen nachgeschlagen, und falls da nicht vorhanden, wird der deutsche Begriff verwendet. Es gibt also auch bei kleinen Sprachdateien keine "Leerstellen".

    Die deutsche und englische Sprachdatei sind schon nach "Wichtigkeit" sortiert, also zuerst die Webinterface-Texte, dann die Kategorien, dann die Parameternamen und dann die Parameteroptionen.  

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
    `#define MQTTBrokerIP 192,168,1,20` → IP des MQTT-Brokers. Der Standardport ist 1883 und muss nicht extra definiert werden.  
    
    Wenn beim MQTT-Broker Username und Passwort verwendet werden, so sind die entspr. Definements ebenfalls zu aktivieren und die Angaben hier zu hinterlegen:   
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
    einzutragen:  
    ```  
    // Activate IPWE extension (http://xxx.xxx.xxx.xxx/ipwe.cgi)  
    #define IPWE  
    // Parameters to be displayed in IPWE extension  
    const int ipwe_parameters[] = {  
    8700,                   // Außentemperatur  
    8743,                   // Vorlauftemperatur  
    8314,                   // Rücklauftemperatur  
    8750,                   // Gebläsedrehzahl  
    8830,                   // Warmwassertemperatur  
    8740,                   // Raumtemperatur Ist  
    8741,                   // Raumtemperatur Soll  
    8326,                   // Brenner-Modulation  
    8337,                   // Startzähler Brenner  
    8703,                   // Aussentemperatur gedämpft  
    8704                    // Aussentemperatur gemischt  
    };  
    ```

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
    - eigene Bus-Adresse, voreingestellt auf 0x42 (→ BSB: entspricht der Geräteadresse 66; LPB: entspricht der Segmentadresse 4 mit Geräteadresse 3)  
    - Bus-Adresse des Zielsystems, voreingestellt auf 0x00 → dies entspricht dem direkt angeschlossenen Heizungsregler bei BSB bzw. der Ziel-Geräteadresse 1 beim LPB

    ***Wichtige Hinweise:***  
    ***→ BSB:***  
    *Dem BSB-LAN-Adapter wird ab v0.42 standardmäßig die Adresse 0x42 zugeteilt. Dies entspricht beim BSB der Geräteadresse 66. Im seriellen Monitor der ArduinoIDE wird der Adapter als „LAN“ aufgeführt. Somit ist eine eindeutige Zuordnung gegeben und eine Adresskollision bei bereits vorhandenen Raumgeräten wird vermieden. Nach unserem bisherigen Kenntnisstand wird der Funktionsumfang dadurch nicht eingeschränkt (speziell hinsichtlich der Sonderfunktionen wie Raumtemperaturen übermitteln, Präsenztaste simulieren etc.). Sollten unerwartet dennoch darauf zurückführende Einschränkungen auffallen, bitten wir um Rückmeldung.*
*Die Möglichkeit, den Adapter auch mit einer anderen Adresse am Bus anzumelden (bspw. als Raumgerät 1 oder 2) besteht weiterhin. Für die jeweiligen Adressen s. [Kap. 2.1.1](kap02.md#211-adressierung-beim-bsb).*  

    ***→ LPB:***  
    *Dem BSB-LAN-Adapter wird ab v0.42 standardmäßig die Adresse 0x42 zugeteilt, dies entspricht im LPB-Verbund der Segmentadresse 4 mit der Geräte-Adresse 3 und ist u.U. einer bestehenden LPB-Installation des Heizungssystems anzupassen. Im seriellen Monitor der ArduinoIDE wird der Adapter als „LAN“ aufgeführt.*   
    *Soll die Bus-Adresse geändert werden, so muss der oben einzustellende Wert immer um den Wert 1 kleiner gewählt werden als die eigentliche Adresse.*  
*Beispiel: Adressen 1, 2, 3 (alle im gleichen Segment mit der Segmentadresse 0) sind im bestehenden Geräteverbund bereits vorhanden. Wenn der Adapter nun die Adresse 4 erhalten und das Gerät mit der Geräteadresse 2 abgefragt werden soll, dann ist `BSB bus(68,69,3,1);` einzugeben.*    
    
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
    `#define DEFAULT_FLAG FL_RONLY`

    Wer den Status ändern will, um *generell* Werte und Einstellungen
    des Reglers per Adapter verändern zu können, muss das Flag auf 0
    setzen:  
    `#define DEFAULT_FLAG 0`

    Ist diese Funktion nur bei *ausgewählten* Parametern (z.B. 10000
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
    

     
[Weiter zu Kapitel 6](kap06.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    

