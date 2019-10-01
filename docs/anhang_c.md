[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Anhang B](anhang_b.md)    
    
---
    

    
# Anhang C: Changelog BSB-LAN-Software #

Version 0.43
- Bugfix: DHCP (ethernet) implementation
- Moved all sensors to /T , /H is now no longer used
- New virtual parameters 702/703 for Weishaupt room controller
- New data types VT_CUSTOM_ENUM and VT_CUSTOM_BYTE to extract information from non-standard telegrams (such as 702/703)
- Added text descriptions for error phases (6706 ff.)

Version 0.42
- Added localization! Now you can help translate BSB-LAN into your language! Simply copy one of the language files from the localization folder (LANG_DE.h is the most complete) and translate whatever you can. Non-translated items will be displayed in German.
Attention: Language definition in BSB_lan_config.h is now #define LANG <ISO-CODE> 
For example: #define LANG DE
- Added export to MQTT broker, use log_parameters[] in BSB_lan_config.h to define parameters and activate MQTTBrokerIP definement.
- Added support for WiFi modules such as an ESP8266 or a Wemos Mega connected to Serial3 (RX:15/TX:14) of the Arduino. 
The ESP8266 has to be flashed with the AT firmware from Espressif to work.
Please take note that WiFi over serial is by design much slower (only 115kpbs) than "pure" TCP/IP connections.
- Added new category "34 - Konfiguration / Erweiterungsmodule". All subsequent categories move one number up!
- Lots of new parameters coming from device family 123, please run /Q to see if some parameters also work for your heater!
- Lots of new yet unknown parameters through brute force querying :) (parameter numbers 10200 and above)
- Added further PPS-Bus commands, moved parameter numbers to 15000 and above
- Default PPS mode now "listening". 
Use third parameter of bus definition to switch between listening and controlling, 1 stands for controlling, everything else for listening, 
i.e. BSB bus(68,67,1) sends data to the heater, BSB bus(68,67) only receives data from heater / room controller.
You can switch between modes at run-time with URL command /P2,x where x is either 1 (for controlling) or not 1 (for listening only)
- Fixed bug that crashed PPS bus queries
- Stability improvements for PPS bus
- Improved graph legend when plotting several parameters
- Added JSON export; query with /JQ=a,b,c,d... or push queries to /JQ or push set commands to /JS
- Logging of MAX! parameters now possible with logging parameter 20007
- Added Waterstage WP device family (119)
- Added WHG Procon device family (195)
- Added unit to log file as well as average output
- Rewrote device matching in cmd_tbl to accomodate also device variant (Gerätevariante). Run /Q to see if transition has worked for your device!
- Added BSB_lan_custom_setup.h and BSB_lan_custom_global.h for you to add individual code (best used in conjunction with BSB_lan_custom.h)
- Marked all (known) OEM parameters with flag FL_OEM. OEM parameters are set by default as read-only. To make them writeable, change FL_OEM from 5 to 4 in BSB_lan_defs.h
- Increased performance for querying several parameters at once (similar to category query)
- Added config option to define subnet.
- /Q no longer needs #define DEBUG
- Bugfix ENUM memory adressing
- Bugfix in reset function (/N), clear EEPROM during reset with /NE
- Added favicon.ico
- Split of cmdtbl into cmdtbl1 and cmdtbl2 due to Arduino's(?) limit of 32kB size of struct, opening up more space for new parameters.
    
Version 0.41
- Interim release containing all changes from 0.42 above, except locaization, i.e. all text fragments are still part of the main code.

Version 0.40 -- 21.01.2018
- Implemented polling of MAX! heating thermostats, display with URL
command /X.
See BSB\_lan\_custom.h for an example to transmit average room
temperature to heating system.
- Added new category \"22 - Energiezähler\" - please note that all
subsequent categories move one up!
- New virtual parameter 1601 (manual TWW push)
- Added Fujitsu Waterstage WSYP100DG6 device family (211)
- Added CTC device family (103)
- New definement \"\#define TRUSTED\_IP2\" to grant access to a second
local IP address
- Added optional definement \"\#define GatewayIP\" in
BSB\_lan\_config.h to enable setting router address different from
x.x.x.1
- Removed parameter 10109 because it is the same as 10000
- Added function to check all known CommandIDs on your own heating
system. Use /Q after enabling definement \"\#define DEBUG\" in
BSB\_lan\_config.h
- Added parameter numbers to category menu
- Updated analyze.sh
- hopefully fixing the memory issue
- Moved HTML strings to html\_strings.h

Version 0.39 -- 02.01.2018
- Implementation of PPS-Bus protocol. See /K40 for the limited commands
available for this bus. Use setBusType(2) to set to PPS upon boot or /P2
to switch temporarily.
- Set GPIOs to input by using /Gxx,I
- Definement \"\#define CUSTOM\_COMMANDS\" added. Use this in your
configuration to include individual code from \"BSB\_lan\_custom.h\"
(needs to be created by you!) which is executed at the end of each main
loop. Variables \"custom\_timer\" and \"custom\_timer\_compare\" have
been added to execute code at arbitrary intervals.
- Added LogoBloc Unit L-UB 25C device family (95)
- several new parameters added
- Bugfix for logging Brennerlaufzeit Stufe 2

Version 0.38 -- 22.11.2017
ATTENTION: New BSB\_lan\_config.h configurations! You need to adjust
your configuration when upgrading to this version!
- Webserver port is now defined in \#define Port xx
- IP address is now defined in \#define IPAddr 88,88,88,88 form - note
the commas instead of dots!
- Special log parameters 20002 to 20006 have changed, see
BSB\_lan\_config.h for their new meaning
- Added new virtual parameter 701 (Präsenztaste) which enters reduced
temperature mode until next timed switch
- Added Brötje BOB device family (138), including many new parameters!
- Added Brötje SOB26 device family (28)
- Added Elco Aquatop 8es device family (85)
- Added Elco Thision 13 Plus device family (203)
- Added Weishaupt WTU 25-G familiy (50)
- Added output for absolute humidity (g/m3) for DHT22 sensors
- New schematics for Arduino/Raspberry board layout
- Included support for W5500 Ethernet2 shields. Activate definement
ETHERNET\_W5500 in BSB\_lan\_config.h
- Including two-stage oil furnaces BC-counters and logging - please
note that logging parameters have been adjusted, see BSB\_lan\_config.h
for new values!
- Added new options for commands /P and /S to allow specifying a
different destination device during runtime
- Added new configuration definement CUSTOM\_COMMANDS which includes
BSB\_lan\_custom.h at the end of each main loop. You may use
custom\_timer (set to current millis()) and custom\_timer\_compare to
execute only every x milliseconds.
- Bugfixing SD-card logging in monitor mode
- Bugfix for setting hour:time parameters via webinterface

Version 0.37 -- 08.09.2017
- LPB implementation! More than 450 parameters supported! Switch
temporarily between LPB and BSB with the Px command (0=BSB, 1=LPB) or
use the setBusType config option to set bus-type at boot-time. Parameter
numbers are the same as for BSB.

Version 0.36 -- 23.08.2017
- bugfix: brought back VT\_BIT list of options which were erroneously
deleted :(, fixed/freed several memory issues

Version 0.35 -- 25.06.2017
- new category \"Sitherm Pro\"; caution: category numbers all move up
by one, starting from category \"Wärmepumpe\" (from 20 to 21) onwards.
- graph display of logging data now comes with crosshair and shows
detailed values as tooltip
- improved SD-card output by factor 3 (from 16 to 45 kbps), switching
SD-card library from from SD.h to SdFat.h
(https://github.com/greiman/SdFat) brings another 10% performance boost
- adjusted paths and directory layout of SdFat to enable compiling from
sketch directory.
- new data type vt\_sint for signed int data, currently only used in
some Sitherm Pro parameters

Version 0.34 -- 29.05.2017
- Log data can now be displayed as graph
- Webinterface can now display and set vt\_bit type parameters in
human-readable form
- added KonfigRGx descriptions; caution: various sources used, no
guarantee that descriptions match your individual heating system!
- vt\_bit is generally read-only in the webinterface. To set, use URL
command /S with decimal representation of value
- fixed a bug with vt\_seconds\_short5, affecting parameters 9500 and
9540.
- fixed bug regarding Fujitsu\'s device family (from 127 to 170)
- moved libraries from folder libraries to src so they can be included
without copying them to the Arduino libraries folder
- modified DallasTemperature.h\'s include path for OneWire.h

Version 0.33 -- 09.05.2017
- no more heating system definements anymore due to new autodetect
function based on device family (parameter 6225), or set device\_id
variable to parameter value directly
- two more security options: TRUSTED\_IP to limit access to one IP
address only, and HTTP authentication with username and password
- Average values are saved on SD-card if present and LOGGER definement
is activated
- deactivate logging by setting /L0=0 - this way you can enable LOGGER
definement without filling up SD card but still save average values
- new error codes for THISION
- added dump of data payload on website for commands of unknown type,
greyed out unsopported parameters
- enable logging of telegrams (log parameter 30000) also in monitor
mode (bsb.cpp and bsb.h updated)
- time from heating system is now retreived periodically from broadcast
telegrams, further reducing bus activity
- new data type vt\_bit for parameters that set individual bits.
Display as binary digits, setting still using decimal representation
- new data type vt\_temp\_short5\_us for unsigned one byte temperatures
divided by 2 (so far only 887 Vorlaufsoll NormAussentemp)
- new data type vt\_percent5 for unsigned one byte temperatures divided
by 2 (so far only 885 Pumpe-PWM Minimum)
- new data type vt\_seconds\_word5 for two byte seconds divided by 2
(so far only 2232, 9500 and 9540)
- new data type vt\_seconds\_short4 for (signed?) one byte seconds
divided by 4 (so far only 2235)
- new data type vt\_seconds\_short5 for (signed?) one byte seconds
divided by 5 (so far only 9500, 9540)
- new data type vt\_speed2 for two byte rpm (so far only 7050)
- cleaned up set() function from apparent duplicate cases
- added cases for vt\_temp\_word, vt\_seconds\_word5, vt\_temp\_short,
vt\_temp\_short5, vt\_seconds\_short4 to set() function

Version 0.32 -- 18.04.2017
- lots of new parameters suppoerted
- newly designed webinterface allows control over heating system
without any additional software or cryptic URL commands. URL commands of
course are still available, so no need to change anything when using
FHEM etc.
- German webinterface available with definement LANG\_DE
- new URL-command /LB=x to log only broadcast messages (x=1) or all bus
messages (x=0)
- new URL-command /X to reset the Arduino (need to enable RESET
definement in BSB\_lan\_config.h)
- new logging parameters 20002 and 20003 for hot water loading times
and cycles
- moved DS18B20 logging parameters from 20010-20019 to 20200-20299 and
DHT22 logging parameters from 20020-20029 to 20100 to 20199
- moved average logging parameter from 20002 to 20004
- set numerous parameters to read-only because that\'s what they
obviously are (K33-36)
- various bugfixes

Version 0.31 -- 10.04.2017
- increased dumping of logfile by factor 5 / as long as we still have
memory left, you can increase logbuflen from 100 to 1000 to increase
transfer speed from approx. 16 to 18 kB/s
- adjusted burner activity monitoring based on broadcast messages for
Brötje systems
- removed definement PROGNR\_5895 because so far, it has only disabled
an ENUM definition.
- removed definement PROGNR\_6030 because double command ID could be
resolved via BROETJE / non-BROETJE definements
- renamed BROETJE\_SOB to BROETJE in order to allow for fine-grained
distinction between different BROETJE cases (e.g. 6800ff). This means
you have to activate TWO definements when using a Brötje system now: The
general BROETJE as well as BROETJE\_SOB or BROETJE\_BSW. Have a look at
your serial log for parameters 6800 to see which command IDs fit your
system and activate one of both accordingly.
- changed 16-Bit addressing of flash memory to 32-Bit to address
crashes due to ever growing PROGMEM tables - now we have lots of air to
breathe again for new command IDs :)
- removed trailing \\0 string from several ENUMs that led to wrong ENUM
listings. Please keep in mind not to end ENUMs with a trailing \\0 !

Version 0.30 -- 22.03.2017
- Time library by Paul Stoffregen
(https://github.com/PaulStoffregen/Time) is now required and included in
the library folder.
- adds logging of raw telegram data to SD card with logging parameter
30000. Logging telegram data is affected by commands /V and /LU
- adds command /LU=x to log only known (x=0) or unknown (x=1) command
IDs when logging telegram data
- removed define USE\_BROADCAST, broadcast data is now always processed
- new internal functions GetDateTime, TranslateAddr, TranslateType

Version 0.29 -- 07.03.2017
- adds command /C to display current configuration
- adds command /L to configure logging interval and parameters
- adds option for command /A to set 24h average parameters during
runtime
- adds special parameter 20002 for logging /A command (24h averages,
only makes sense for long logging intervals)
- bugfixes for logging DS18B20 sensors

Version 0.28 -- 05.03.2017
- adds special parameters 20000++ for SD card logging of /B, /T and /H
commands (see BSB\_lan\_config.h for examples)
- adds version info to BSB\_LAN web interface

Version 0.27 -- 01.03.2017
- adds date field to log file (requires exact time to be sent by
heating system)
- /D0 recreates datalog.txt file with table header
- added \"flags\" field to command table structure. Currently, only
FL\_RONLY is supported to make a parameter read-only
- added DEFAULT\_FLAG in config. Defaults to NULL, i.e. all fields are
read/writeable. Setting it to FL\_RONLY makes all parameters read-only,
e.g. for added level of security. Individual parameters can be set to
NULL/FL\_RONLY to make only these parameters writable/read-only.

Version 0.26 -- 27.02.2017
- added functionality for logging on micro SD card, using the slot of
the w5100 Ethernet shield
- more parameters added (e.g. 8009)

Version 0.25 -- 21.02.2017
- more FUJITSU parameters added

Version 0.24 -- 14.02.2017
- updated README with added functions
- added German translations of FAQ and README, courtesy of Ulf
Dieckmann

Version 0.23 -- 12.02.2017
- minor bugfix

Version 0.22 -- 07.02.2017
- more FUJITSU parameters
- (hopefully) correct implementation of VT\_VOLTAGE readings
- minor bugfixes

Version 0.21 -- 06.02.2017
- added numerous parameters for Fujitsu Wärmepumpe, including new
\#define FUJITSU directive to activate these parameters due to different
parameter numbers
- minor bugfixes

Version 0.20 -- 27.01.2017
- added more parameters for Feststoffkessel
- minor bugfixes

Version 0.19 -- 01.01.2017
- added humidity command \"H\", currently for DHT22 sensors
- added 24h average command \"A\", define parameters in
BSB\_lan\_config.h
- removed trailing whitespace from menu strings
- fixed command id 0x053D04A2 for THISION heaters
- included Rob Tillaart\'s DHT library because there are various
libraries implementing the protocol and this one is used in the code for
its ability to address multiple sensors with one object.
- removed /temp URL parameter as it is a duplicate of /T
- included loop to display DHT22 sensors in IPWE
- making compiling IPWE extensions optional (\#define IPWE)

Version 0.18 -- 22.12.2016
- split off configuration into bsb\_lan\_config.h
- split off command definitions into bsb\_lan\_defs.h
- changed GPIO return values from LOW/HIGH to 1/0
- reactivated and updated IPWE (define parameters in config)
- check for protected pins when accessing GPIO (define in config)
- added schematics and PCB files to new subfolder \"schematics\"

Version 0.17a -- 20.12.2016
- minor errors corrected

Version 0.17 -- 20.12.2016
- merged v0.16 with FHEM user miwi\'s changes

Version 0.16 -- 20.11.2016
- removed IPWE and EthRly interface
- added GPIO interface
- merged parameters from J.Weber
- resolved duplicate command IDs

Version 0.15a -- 25.07.2016
- collated the commands from a Python project and this project, merged
the two versions, corrected obvious errors. Inserted hypothetical
numerical values in ENUM definitions where Broetje manuals documented
only the message texts.
- added information from traces in a Broetje installation with an
ISR-SSR controller and a WOB 25C oil furnace.

Version 0.15 -- 21.04.2016
- added Solar and Pufferspeicher from Elco Logon B & Logon B MM

Version 0.14 -- 04.04.2016
- minor bugfixes for Broetje SOB
- extended broadcast handling (experimental)

Version 0.13 -- 31.03.2016
- change resistor value in receiving path from 4k7 to 1k5
- added values 0x0f and 0x10 to Enum8005
- fixed strings for Zeitprogramme
- added timeout for sending a message (1 second)
- added option T for querying one wire temperature sensors in mixed
querys
- added special handling for Broetje SOB
- simplified settings

Version 0.12 -- 09.04.2015
- added ONEWIRE\_SENSORS to ipwe
- fixed parameter decoding for ELCO Thision heating system

Version 0.11 -- 07.04.2015
- fixed parameter decoding for ELCO Thision heating system

Version 0.10 -- 15.03.2015
- added more parameters for ELCO Thision heating system

Version 0.9 -- 09.03.2015
- added more parameters for ELCO Thision heating system
- printTelegramm returns value string for further processing

Version 0.8 -- 05.03.2015
- added parameters for ELCO Thision heating system
- added IPWE extension
- minor bugfixes

Version 0.7 -- 06.02.2015
- added bus monitor functionality

Version 0.6 -- 02.02.2015
- renamed SoftwareSerial to BSBSoftwareSerial
- changed folder structure to enable simple build with arduino sdk

Version 0.5 -- 02.02.2015
- bugfixes
- added documentation (README)
- added passkey feature
- added R feature (query reset value)
- added E feature (list enum values)
- added setter for almost all value types
- fixed indentation
- added V feature to set verbosity for serial output
- set baudrate to 115200 for serial output
- redirecting favicon request
- added some images of the BSB adapter

Version 0.1 -- 21.01.2015 -- initial version
      
    
---
    

    
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
