[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 4](kap04.md)    
    
---
    

    

# 5. Einstellungsrelevante Parameter der BSB-LAN-Software #

Folgende Parameter in der Datei *BSB\_lan\_config.h* können bzw. sollten
vor der Verwendung des Adapters angepasst werden:

-   Typ des LAN-Shield-Chips (W5100 oder W5500):  
    Standardmäßig wird die Verwendung eines LAN-Shields mit dem Chip des
    Typs W5100 vorausgesetzt (s. Aufkleber auf der LAN-Buchse des
    Shields). Soll aber ein Shield mit Chip-Typ W5500 verwendet werden,
    ist das entsprechende Definement zu aktivieren:  
    `#define ETHERNET_W5500`

    Zusätzlich muss die Datei *Ethernet2.zip* im Unterverzeichnis *src*
    entpackt werden.

-   IP-Adresse:  
    `#define IPAddr 192,168,178,88`

-   GatewayIP: Durch Aktivierung des Definements und Anpassung der IP
    kann hier optional die IP eines (nicht-Standard-)Gateways definiert
    werden:  
    `#define GatewayIP 192,168,178,1`

-   Ethernet-Port:  
    `#define Port 80`

-   Um das System vor einem ungewollten Zugriff von außen zu schützen,
    kann die Funktion des Sicherheitsschlüssels (PASSKEY) aktiviert
    werden (sehr einfach und nicht wirklich sicher!):  
    `#define PASSKEY "1234"`

    Falls die PASSKEY-Funktion aktiviert ist, muss die URL bei einem
    Aufruf des Webinterfaces den definierten Schlüssel als erstes
    Element enthalten, bspw. `http://<IP-Adresse>/<passkey>/`

    um die Hilfeseite zu sehen.  
    *Bitte nicht den Slash hinter dem Passkey vergessen!*

    *Die URLs in den folgenden Beispielen müssen um die
    PASSKEY-Definition erweitert werden, falls die Funktion aktiviert
    wurde.*

-   Darüber hinaus gibt es zwei weitere Sicherheitsfunktionen:
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

-   Konfiguration des Heizungssystems:  
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

-   Die Sprache der Benutzeroberfläche des Webinterface des Adapters ist
    auf Deutsch voreingestellt. Möchte man die Sprache auf Englisch
    umstellen, muss das entsprechende Definement deaktiviert werden:  
    `//#define LANG_DE;`

-   Sollen bei einer Abfrage via Webinterface auch die unbekannten
    Parameter (Fehlermeldung „error 7 (parameter not supportet)")
    angezeigt werden, so muss das Definement  
    `#define HIDE_UNKNOWN`  
    auskommentiert werden.

-   Sollen OneWire-Temperatursensoren (DS18B20) verwendet werden, muss
    die entsprechende Pinbelegung (DATA-Anschluss des Sensors am
    Adapterboard) definiert werden (\<n\> = Pinnummer):  
    `#define ONE_WIRE_BUS <n>`

-   Sollen DHT22-Sensoren (Temperatur & Feuchtigkeit) verwendet werden,
    muss die entsprechende Pinbelegung (DATA-Anschluss des Sensors am
    Adapterboard) definiert werden (\<n\> = Pinnummer):  
    `#define DHT_BUS <n>`

-   Sollen 24h-Durchschnittswerte von bestimmten Parametern berechnet
    werden, müssen diese bei der entsprechenden Variable eingetragen
    werden, bspw.:  
    ```
    int avg_parameters[20] = {  
    8700, // Außentemperatur  
    8740 // Raumtemperatur-Ist  
    };
    ```

-   Sollen bestimmte Werte/Parameter auf eine microSD-Karte geloggt
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
    *Zum Loggen der Brennerstarts und -laufzeiten müssen die
    Spezialparameter 2001 und 2002 aufgeführt werden (siehe auch die
    Beschreibung in der Datei BSB\_lan\_config.h). Bei einem
    zweistufiger Ölbrenner, dessen Regler die entsprechenden Broadcasts
    schickt und bei dem eine Differenzierung der Brennerstufen möglich
    ist (derzeit nur RVS43.325), müssen hier zusätzlich 2003 und 2004 mit aufgeführt
    werden!*

-   Soll die IPWE-Erweiterung aktiviert werden, ist das entsprechende
    Definement  
    `#define IPWE`

    zu aktivieren, die gewünschten Parameter sind wie gewohnt
    einzutragen.

    ***Tipp:***  
    *Werden DS18B20- und/oder DHT22-Sensoren verwendet, werden diese hier
    standardmäßig mit angezeigt (URL: `http://<IP-Adresse>/ipwe.cgi`). Dabei
    wird neben den gemessenen Werten auch die jeweils spezifische
    Hardwarekennung der Sensoren aufgeführt. Dies ist besonders bei
    einer Ersteinrichtung für eine eindeutige Unterscheidung der
    einzelnen Sensoren hilfreich.*

-   Sollen optionale MAX!-Thermostate zum Einsatz kommen, muss das
    entsprechende Definement  
    `#define MAX_CUL 192,168,178,5`  
    aktiviert, sowie die URL und die spezifischen MAX!-IDs entsprechend  
    angepasst werden.  
    Für weitere Informationen bzgl. der Einbindung von MAX!-Komponenten s. Kap. [12.2](kap12.md).  

-   Soll der Arduino per URL-Befehl mittels `http://<IP-Adresse>/N`
    resettet werden können, muss das entsprechende Definement aktiviert
    werden:  
    `#define RESET`

-   MAC-Adresse des Ethernet-Shields:  
    `byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xEA};`

    Üblicherweise befindet sie sich auf einem Aufkleber auf dem
    Ethernet-Shield, diese ist dann einzutragen. Sollte kein Aufkleber
    mit einer spezifischen Adresse vorhanden sein, kann die
    voreingestellte Adresse beibehalten werden. Eine Änderung ist i.d.R.
    nur nötig, wenn mehr als ein Adapter verwendet wird.

-   Konfiguration des Adapters:  
    `BSB bus(68,69,<my_addr>,<dest_addr>);`

    RX-Pin, TX-Pin, eigene Bus-Adresse (voreingestellt auf 0x06=RGT1),
    Bus-Adresse des Zielsystems (voreingestellt auf 0x00=Heizungsregler).

    Voreingestellt wird der Adapter mit BSB bus(68,69) am
    angeschlossenen Regler als RGT1 angemeldet.

    Wenn bereits ein Raumgerät (RGT1) vorhanden ist, kann bzw. sollte
    der Adapter u.U. als RGT2 am angeschlossenen Regler angemeldet
    werden, um etwaige Adresskollisionen zu vermeiden:  
    `BSB bus(68,69,7);`

    ***Hinweise:***  
    *Eine Adresskollision wurde bisher nur bei einem RGB (QAA55) 
    und einem Adapter festgestellt, die beide gleichzeitig als 
    Raumgerät 1 angemeldet waren. Ein RGT (QAA75) und ein Adapter 
    mit gleichzeitiger Anmeldung als Raumgerät 1 verursachte im 
    Testbetrieb hingegen keine Adresskollision.*  
    
    *Bitte beachte, dass ein als RGT1 angemeldeter Adapter eventuell
    keine Temperaturen an einen HK2 senden kann, und ein als RGT2
    angemeldeter Adapter eventuell keine Temperaturen an einen HK1
    senden kann!  
    Vereinzelt kam es schon vor, dass Raumtemperaturen kurioserweise nur
    von einem als RGT2 angemeldeten Adapter vom HK1 berücksichtigt
    wurden.  
    Ob eine Bedienung eines HK1 mit einem als RGT2 (oder HK2 mit einem
    als RGT1) angemeldeten Adapter in vollem Umfang möglich ist, wurde
    bisher noch nicht ausgiebig getestet.*  

-   Bus-Protokoll:  
    `uint8_t bus_type = bus.setBusType(0);`

    Voreingestellt ist 0 für BSB, für LPB ist 1 einzustellen, für PPS
    hingegen 2.

-   In der Voreinstellung ist der Zugriff des Adapters auf den Regler
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
    der Datei *BSB\_lan\_defs.h* das `DEFAULT_FLAG` des gewünschten
    Parameters durch 0 (Null) ersetzt werden.  
    
    Im folgenden Beispiel wird Parameter 700 auf diese Weise schreibbar
    gemacht:  
    `{0x2D3D0574, CAT_HK1, VT_ENUM, 700, STR700, sizeof(ENUM700), ENUM700, DEFAULT_FLAG, DEV_ALL}, // [-] - Heizkreis 1 - Betriebsart ***(virtuelle Zeile)***`
    → aufgrund des „DEFAULT_FLAG" ist der Parameter momentan nur lesbar

    `{0x2D3D0574, CAT_HK1, VT_ENUM, 700, STR700, sizeof(ENUM700), ENUM700, 0, DEV_ALL}, // [-] - Heizkreis 1 - Betriebsart ***(virtuelle Zeile)***`
    → das „DEFAULT_FLAG" wurde durch „0" (Null, ohne Anführungszeichen)
    ersetzt
    
-   Definement `#define DEBUG`:  
    Soll BSB-LAN auf nicht-freigebene
    reglerspezifische CommandIDs überprüft werden (s. Kap. [8.2.5](kap08.md)),
    muss das Definement vorübergehend aktiviert werden. Nach Abfrage von
    `http://<IP-Adresse>/Q` sowie für den Normalbetrieb kann das
    Definement wieder auskommentiert werden.


       
    
---
    

     
[Weiter zu Kapitel 6](kap06.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
