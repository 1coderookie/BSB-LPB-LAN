[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 10](kap10.md)  
    

# 11. Nutzung von externen Programmen #

Da der Adapter lediglich eine Schnittstelle darstellt, mittels derer man
Zugriff auf den Heizungsregler via Computer erhält, können
selbstverständlich externe Programme zum Einsatz kommen. Somit kann die
Heizungssteuerung in komplexe Heimautomationssysteme eingebunden werden.
Auch das Erstellen von umfassenden Logdateien und deren grafische
Aufbereitung kann auf diese Weise erfolgen.

Da es hierfür verschiedene Softwarelösungen gibt, kann hier weder eine
umfangreiche Vorstellung der verschiedenen Systeme erfolgen, noch eine
grundsätzliche Anleitung zur Integration des Adapters oder einer
Heizungsregelung per se gegeben werden. Sollte jedoch bereits eines der
nachfolgend erwähnten Systeme zum Einsatz kommen, so sind die folgenden
Beispielkonfigurationen hoffentlich eine kleine Starthilfe, um die
eigenen Vorstellungen umzusetzen.

Sollten Fragen bzgl. der folgenden Beispiele oder anderer
Konfigurationsmöglichkeiten auftreten, so ist bitte von diesbezüglichen
Anfragen an mich abzusehen - die Fragen sollten mittels
entsprechender Literatur oder in spezifischen Foren geklärt werden.

****Hinweis:***  
*Selbstverständlich müssen stets sowohl die IP als auch -falls
aktiviert- die optionalen Sicherheitsfunktionen bei den folgenden
Beispielen entsprechend angepasst werden. Ebenso müssen Parameter, die
gesetzt werden sollen, schreibbar sein (s. Kap. [5](kap05.md)).*

*Solltest du ein anderes System als die im Folgenden aufgeführten
verwenden, so würde ich mich über die Zusendung eines Beispielscripts
zur Anbindung des Adapters freuen! Sende es mir dazu einfach als
.txt-Datei an `adapter [ät] quantentunnel.de` - danke!*

## 11.1 FHEM ##

### 11.1.1 Einbindung mittels BSB-LAN-Modul ###

*Derzeit wird vom FHEM-Forumsmitglied „justme1968" ein BSB-LAN-Modul für
FHEM entwickelt:
[https://forum.fhem.de/index.php/topic,84381.0.html](https://forum.fhem.de/index.php/topic,84381.0.html)  
Vielen Dank!*

*UPDATE:  
Eine erste (Test-)Version ist bereits verfügbar, ein stabiler
und problemloser Betrieb kann aber noch nicht garantiert werden!*

### 11.1.2 Einbindung mittels HTTPMOD-Modul ###

*Die FHEM-Beispielscripte stammen vom FHEM-Forumsmitglied „freetz".  
Vielen Dank!*

Um auf die Webschnittstelle des Adapters zuzugreifen, kann das Modul
HTTPMOD in FHEM genutzt werden.

***Beispielscript für eine Parameterabfrage und die Übermittlung einer
Raumtemperatur:***

Der Beispielcode fragt die Parameter 8700, 8743 und 8314 alle 300
Sekunden ab und weist diese dem Gerät \"THISION\" (Name des
Heizungssystems) und den Readings \"Aussentemperatur\",
\"Vorlauftemperatur\" und \"Ruecklauftemperatur\" zu.

Darüber hinaus stellt es ein Reading \"Istwert\" bereit, das per FHEM
gesetzt werden kann, um dem Heizungssystem die aktuelle Zimmertemperatur
mitzuteilen (Parameter 10000).

Zu guter Letzt berechnet es die Differenz zwischen \"Vorlauftemperatur\"
und \"Rücklauftemperatur\" und weist diese Differenz dem Reading
\"Spreizung\" zu.

***Bitte beachte:***  
*Die Regex-Bedingungen müssen vom Beginn des Strings an
(also der Parameternummer wie bspw. 8700) matchen und nicht erst ab
einem späteren Teil des Strings.*  
    
```
define THISION HTTPMOD http://192.168.178.88/8700/8743/8314 300
attr THISION userattr reading0Name reading0Regex reading1Name reading1Regex reading2Name reading2Regex readingOExpr set0Name set0URL
attr THISION event-on-change-reading .*
attr THISION reading0Name Aussentemperatur
attr THISION reading0Regex 8700 .*:[ \t]+([-]?[\d\.]+)
attr THISION reading1Name Vorlauftemperatur
attr THISION reading1Regex 8743 .*:[ \t]+([-]?[\d\.]+)
attr THISION reading2Name Ruecklauftemperatur
attr THISION reading2Regex 8314 .*:[ \t]+([-]?[\d\.]+)
attr THISION readingOExpr $val=~s/[\r\n]//g;;$val
attr THISION set0Name Istwert
attr THISION set0URL http://192.168.178.88/I10000=$val
attr THISION timeout 5
attr THISION userReadings Spreizung { sprintf("%.1f",ReadingsVal("THISION","Vorlauftemperatur",0)-ReadingsVal("THISION","Ruecklauftemperatur",0));; }
```  
    
    
***Beispielscript für die Abfrage und Ansteuerung eines Relaisboards:***

Das Folgende ist ein Beispiel für eine FHEM-Konfiguration, bei dem die
drei Relais-Ports namens \"Heater\", \"Fan\" und \"Bell\" abgefragt und
gesteuert werden, die an die entsprechenden GPIO-Pins 7, 6 und 5
angeschlossen sind.  
    
```
define EthRelais HTTPMOD http://192.168.178.88/G05/G06/G07 30
attr EthRelais userattr reading0Name reading0Regex reading1Name reading1Regex reading2Name reading2Regex readingOExpr readingOMap set0Name set0URL set1Name set1URL set2Name set2URL setIMap setParseResponse:0,1 setRegex
attr EthRelais event-on-change-reading .*
attr EthRelais reading0Name Heater
attr EthRelais reading0Regex GPIO7:[ \t](\d)
attr EthRelais reading1Name Fan
attr EthRelais reading1Regex GPIO6:[ \t](\d)
attr EthRelais reading2Name Bell
attr EthRelais reading2Regex GPIO5:[ \t](\d)
attr EthRelais room Heizung
attr EthRelais set0Name Heater
attr EthRelais set0URL http://192.168.178.88/G07=$val
attr EthRelais set1Name Fan
attr EthRelais set1URL http://192.168.178.88/G06=$val
attr EthRelais set2Name Bell
attr EthRelais set2URL http://192.168.178.88/G05=$val
attr EthRelais setParseResponse 1
attr EthRelais setRegex GPIO[0-9]+:[ \t](\d)
attr EthRelais timeout 5
```
    

## 11.2 openHAB ##

*Die openHAB-Beispielscripte stammen vom FHEM-Forumsmitglied
„acfischer42".  
Vielen Dank!*

Es existiert derzeit kein komplettes Binding fuer BSB-LAN. Mit dem HTTP
Binding[^25] und der Javascript Transformation[^26] ist es allerdings
durchaus möglich, Werte auszulesen und auch zu schreiben.

Ein Loggen der Daten kann bspw. mit InfluxDB erfolgen, die
Visualisierung mit Grafana.  
Selbstverständlich sind die notwendigen Addons wie bspw. die Javascript
Transformation vorhergehend zu installieren.

***Beispiel einer Item-Konfiguration:***  
    
```
Number hz_aussentemp "Aussentemperatur [%.1f °C]" <temperature> (Heizunglog) { http="<[http://192.168.178.88/8700:60000:JS(bsbinput.js)]" }
String hz_700 "Heizkreis 1 Betriebsart [%s]" <temperature> (Heizunglog){ http="<[http://192.168.178.88/700:1000:JS(bsbinput_string.js)]" }
```
    
Das folgende Javascript ist als *bsbinput.js* im Verzeichnis
*transformations* abzulegen.

***Beispielscript für Abfragen von Parametern, bei denen ein Wert
ausgegeben wird:***  
    
```javascript
(function(i) {
    var outputres;
	var results = [];
	value1 = i;
	// define regex to search for the line in the http response
	var regEx = '<input type=text id=\'value1\' VALUE=\'[-]*[0-9]+\.[0-9]+';
	var re = new RegExp(regEx, 'gim');
  
 do {
    match = re.exec(value1);
    if (match){
        results.push(match[0]);
    }
} while (match);
    
	outputres = results[0]
	//extract actual value from the output
	var output=outputres.substr(outputres.indexOf("VALUE='")+7,outputres.length);
	return output;
})(input)
```
    
***Beispielscript für direkte Abfragen von enum-Werten:***  
    
```javascript
(function(i) {
        var outputres;
	var results = [];
	value1 = i;
	// define regex to search for the line in the http response
	var regEx = '<option value=\'[0-9]+\' SELECTED>.*</option>';
	var re = new RegExp(regEx, 'gim');
  
 do {
    match = re.exec(value1);
    if (match){
        results.push(match[0]);
    }
} while (match);
    
	outputres = results[0]
	//extract actual value from the output
	var l=outputres.indexOf("</o")-outputres.indexOf(">")-1
	var output=outputres.substr(outputres.indexOf(">")+1,l);
		return output;
})(input)
```
    
Das Schreiben von Daten erfolgt über Rules:  
    
```
rule "RoomTemp"

when
	Item iSet_temp changed
then
	sendHttpGetRequest("http://192.168.178.88/I10000=" + iSet_temp.state.toString)
end
```
    
## 11.3 HomeMatic (EQ3) ##  
    
*Die folgenden abgedruckten HomeMatic-Beispielscripte stammen vom
FHEM-Forumsmitglied „PaulM".  
Weitere Beispielscripte von ihm sind [hier](https://forum.fhem.de/index.php/topic,29762.msg769167.html#msg769167) im FHEM-Forum zu finden.*
    
*Darüber hinaus hat auch FHEM-Forumsmitglied „Bratmaxe" ein
Beispielscript für die Anbindung geschrieben, welches [hier](https://forum.fhem.de/index.php/topic,29762.msg851779.html#msg851779) im FHEM-Forum zu finden
ist.*
    
*Vielen Dank!*
    
Zur Einbindung in HomeMatic bietet sich die Verwendung von CuxD und wget
an.

***Beispiel zur Abfrage des Parameters ‚8326 Brennermodulation' mittels
CuxD:***  
    
```
! Skriptanfang:
! BSB-Abfrage
string url='http://192.168.178.88/8326'; !IP anpassen
! WriteLine("URL: " # url); !nur Kontrolle
! --timeout=seconds  ! während der Dauer der Abfrage werden von der CCU 
! keine anderen Skripte ausgeführt !!! 
! siehe CUxD-Handbuch 5.8.2 System.Exec
! dom.GetObject("CUxD.CUX2801001:1.CMD_SETS").State
! ("wget -t 5 -T 20 -q -O - '"# url #"'");  ! abgekürzte Wget Syntax
dom.GetObject("CUxD.CUX2801001:1.CMD_SETS").State("wget --tries=5 
--timeout=20 --quiet --output-document=- '"# url #"'");  
! ausführliche Wget Syntax
dom.GetObject("CUxD.CUX2801001:1.CMD_QUERY_RET").State(1);
var stdout = dom.GetObject("CUxD.CUX2801001:1.CMD_RETS").State();
! WriteLine("Antwort: " # stdout);
! Beim stdout den ueberfluessigen Vorspann entfernen
integer laenge = stdout.Length();
integer pos = stdout.Find("body"); 
! ab hier kommen auswertbare Informationen
pos = pos + 10;
stdout = stdout.Substr(pos, (laenge - pos));
! wenn Rückmeldung mit allen Daten angezeigt werden soll, 
! Ausrufezeichen nächste Zeile entfernen
! WriteLine("Antwort ohne Vorspann: " # stdout);
string wort = "8326"; !Brennermodulation
integer laenge = wort.Length();
! WriteLine("laenge: " # laenge); zum Testen für andere Parameter 
! für Skripttest Ausrufezeichen entfernen
integer pos = stdout.Find(wort);
! WriteLine("pos:" #pos);
pos = pos + 39; !bei anderen Parametern meist zwischen 25 und 50
string daten = stdout.Substr((pos + laenge +1), 100);
! WriteLine("daten :"#daten);
integer pos = daten.Find(wort);
daten = daten.Substr(0, (pos));
integer zahl = daten.ToFloat();
! keine Prüfung, da auch 0 sein kann
dom.GetObject("H_Brennermodulation").State(zahl);
WriteLine("H_Brennermodulation: "#zahl);
! nur für Chart CUxD
dom.GetObject("CUxD.CUX2801001:1.LOGIT").State
("H_Brennermodulation"#";"#zahl);
WriteLine("Hallo Welt!");
! Skriptende:
```
    
***Beispiel zum Setzen der Betriebsart auf Komfort-Betrieb mit ‚S700=3'
mittels CuxD:***  
    
```
! Skriptanfang:
! Heizung KOMFORT (=AN - keine Nachtabsenkung)
! Anweisung senden
string urlset ='http://192.168.178.88/S700=3'; !IP anpassen
WriteLine("Befehl: " # urlset);
dom.GetObject("CUxD.CUX2801001:1.CMD_SETS").State
("wget -t 5 -T 20 -q -O - '"# urlset #"'");
dom.GetObject("CUxD.CUX2801001:1.CMD_QUERY_RET").State(1);
var stdout = dom.GetObject("CUxD.CUX2801001:1.CMD_RETS").State();
! Kontrollabfrage
string url='http://192.168.178.88/700'; !IP anpassen
! WriteLine("URL: " # url);
dom.GetObject("CUxD.CUX2801001:1.CMD_SETS").State
("wget -t 5 -T 20 -q -O - '"# url #"'");
dom.GetObject("CUxD.CUX2801001:1.CMD_QUERY_RET").State(1);
var stdout = dom.GetObject("CUxD.CUX2801001:1.CMD_RETS").State();
! WriteLine("Antwort: " # stdout);
! Beim stdout den ueberfluessigen Vorspann entfernen
integer laenge = stdout.Length();
integer pos = stdout.Find("body");
pos = pos + 10;
stdout = stdout.Substr(pos, (laenge - pos));
! wenn Rückmeldung mit allen Daten angezeigt werden soll, 
! Ausrufezeichen nächste Zeile entfernen
! WriteLine("Antwort ohne Vorspann: " # stdout);
string wort = "700"; !Heizbetrieb
integer laenge = wort.Length();
! WriteLine("laenge: " # laenge);
integer pos = stdout.Find(wort);
! WriteLine("pos:" #pos);
pos = pos + 28;
! WriteLine("pos: " # pos);	
string daten = stdout.Substr((pos + laenge +1), 100);
! WriteLine("daten :"#daten);
string substring = daten.Substr(0, 1);
integer zahl = substring.ToInteger();
WriteLine("aktueller Heizbetrieb (0 bis 3): " # zahl);
if (zahl == 0) {dom.GetObject('H_Heizbetrieb').State("Heizung AUS");}
if (zahl == 1) {dom.GetObject('H_Heizbetrieb').State("Heizung Automatik");}
if (zahl == 2) {dom.GetObject('H_Heizbetrieb').State("Heizung Nachtabsenkung");}
if (zahl == 3) {dom.GetObject('H_Heizbetrieb').State("Heizung Komfort");}
! nur für Chart CUxD 
!dom.GetObject("CUxD.CUX2801001:1.LOGIT").State("H_Heizbetrieb"#";"#zahl);	
! alle Werte aktualisieren
var programObj = dom.GetObject("Heizungswerte abfragen"); 
! Programmnamen ggf. anpassen
programObj.ProgramExecute();
WriteLine("Hallo Welt!");
! Skriptende:
```
    

## 11.4 ioBroker ##  

*Die ioBroker-Beispiele stammen vom FHEM-Forumsmitglied „Thomas\_B".  
Vielen Dank!*

***Werte abrufen und anzeigen (exemplarisch ‚Warmwasser
Solltemperatur'):***  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro1.jpg">
        
Unter ‚ioBroker Admin → Adapter' eine ‚Parser'-Instanz hinzufügen:
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro2.jpg">
    
Danach unter ‚ioBroker Admin → Instanzen' die hinzugefügten
Adapterinstanz ‚parser.0' zum Konfigurieren öffnen:
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro3.jpg">
    
    
Dort auf das ‚+' klicken, danach unter ‚Namen' den Namen
‚TWW\_Nennsollwert' vergeben. Unter ‚URL oder Dateiname' die IP des
BSB-LAN-Adapters samt Parameternummer angeben. Anschließend auf das
‚Bearbeiten'-Icon klicken.

<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro4.jpg">
    
Es öffnet sich die Eingabemaske, in der unter ‚RegEx' folgende
Zeichenfolge eingegeben werden muß:

`asser\s+-\s+TWW Nennsollwert\:\s+(\d{2}.\d)`
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro5.jpg">
    
    
Danach kann die Eingabemaske mit ‚Speichern' geschlossen werden.
    
Das Abfrageintervall kann man nach Bedarf einstellen, danach auf
‚Speichern und Schließen' klicken. Damit ist die Adapterkonfiguration
abgeschlossen.
    
Unter ‚ioBroker Admin → Objekte' findet sich nun der Ordner ‚parser.0'
und die unter der Instanz ‚parser.0' angelegten Datennamen und deren
Werte:

    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro6.jpg">
    

Die Werte können unter VIS mittels eines ‚Basic-Number'-Widgets mit
folgenden Einstellungen angezeigt werden:

    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro7.jpg">
    

Widgetcode zum Importieren:
    
```
[{"tpl":"tplValueFloat","data":{"oid":"parser.0.TWW_Nennsollwert","visibility-cond":"==","visibility-val":1,"is_comma":"true","factor":"1","html_append_singular":" ºC","html_append_plural":" ºC","gestures-offsetX":0,"gestures-offsetY":0,"is_tdp":false,"signals-cond-0":"==","signals-val-0":true,"signals-icon-0":"/vis.0/bluefox_ehome/lowbattery.png","signals-icon-size-0":0,"signals-blink-0":false,"signals-horz-0":0,"signals-vert-0":0,"signals-hide-edit-0":false,"signals-cond-1":"==","signals-val-1":true,"signals-icon-1":"/vis.0/bluefox_ehome/lowbattery.png","signals-icon-size-1":0,"signals-blink-1":false,"signals-horz-1":0,"signals-vert-1":0,"signals-hide-edit-1":false,"signals-cond-2":"==","signals-val-2":true,"signals-icon-2":"/vis.0/bluefox_ehome/lowbattery.png","signals-icon-size-2":0,"signals-blink-2":false,"signals-horz-2":0,"signals-vert-2":0,"signals-hide-edit-2":false,"visibility-groups-action":"hide","lc-type":"last-change","lc-is-interval":true,"lc-is-moment":false,"lc-format":"","lc-position-vert":"top","lc-position-horz":"right","lc-offset-vert":0,"lc-offset-horz":0,"lc-font-size":"12px","lc-font-family":"","lc-font-style":"","lc-bkg-color":"","lc-color":"","lc-border-width":"0","lc-border-style":"","lc-border-color":"","lc-border-radius":10,"lc-zindex":0,"digits":"1"},"style":{"left":"398px","top":"428px","width":"59px","height":"18px","color":"white","text-align":"right","font-family":"Arial, Helvetica, sans-serif","font-style":"normal","font-variant":"normal","font-weight":"bold","font-size":"","z-index":"20"},"widgetSet":"basic"}]
```
    

***Schalter anlegen (exemplarisch ‚Heizung Automatik (AN)'-Schalter):***

    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro8.jpg">
    

Zunächst ein leeres Script ‚Heizung Automatik Schalter' anlegen:
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro9.jpg">
    

Dann ein Blocky-Script ‚Heizung Automatik script' mit folgendem Inhalt
anlegen (der nachfolgende Code kann in Blocky importiert werden):

    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro10.jpg">
    
    
```
on({id: "javascript.0.scriptEnabled.Heizung_Automatik_Schalter", change: "ne"}, function (obj) {
  var value = obj.state.val;
  var oldValue = obj.oldState.val;
  for (var count = 0; count < 5; count++) {
    try {
      require("request")('http://<IP des BSB-LAN Adapters>/S700=1').on("error", function (e) {console.error(e);});
    } catch (e) { console.error(e); }
    console.log("request: " + 'http:// ://<IP des BSB-LAN Adapters>//S700=1');
  }
});
```
    
Dann ein ‚jqui -- Button State'-Widget in VIS anlegen:
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro11.jpg">
    
In den Eigenschaften unter ‚Schalter' das anfangs angelegte leere Script
angeben:  
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro12.jpg">
    
Damit lässt sich die Betriebsart ‚Heizung Automatik' einschalten.

Damit der Schalterzustand durch <img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro_button_red.jpg">
 oder 
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro_button_green.jpg">
 entsprechend visualisiert wird, müssen
noch folgende Signalbilder in dem Widget hinzugefügt werden, wobei die
Bilder „on.png" und „off.png" in dem genannten Verzeichnispfad
abgespeichert werden müssen.

    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro13.jpg">
    
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro14.jpg">
    

Widgetcode zum Importieren:
    
```
[{"tpl":"tplJquiButtonState","data":{"oid":"javascript.0.scriptEnabled.Heizung_Automatik_Schalter(2)","g_fixed":false,"g_visibility":false,"g_css_font_text":true,"g_css_background":true,"g_css_shadow_padding":false,"g_css_border":false,"g_gestures":false,"g_signals":true,"g_last_change":false,"visibility-cond":"==","visibility-val":1,"visibility-groups-action":"hide","buttontext":"Heizung Automatik (AN)","signals-cond-0":"==","signals-val-0":"Betriebsart: 1 - Automatik","signals-icon-0":"/vis.0/main/img/on.png","signals-icon-size-0":"33","signals-blink-0":false,"signals-horz-0":"-1","signals-vert-0":"6","signals-hide-edit-0":false,"signals-cond-1":"!=","signals-val-1":"Betriebsart: 1 – Automatik","signals-icon-1":"/vis.0/main/img/off.png","signals-icon-size-1":"20","signals-blink-1":false,"signals-horz-1":"2","signals-vert-1":"17","signals-hide-edit-1":false,"signals-cond-2":"==","signals-val-2":true,"signals-icon-2":"/vis/signals/lowbattery.png","signals-icon-size-2":0,"signals-blink-2":false,"signals-horz-2":0,"signals-vert-2":0,"signals-hide-edit-2":false,"lc-type":"last-change","lc-is-interval":true,"lc-is-moment":false,"lc-format":"","lc-position-vert":"top","lc-position-horz":"right","lc-offset-vert":0,"lc-offset-horz":0,"lc-font-size":"12px","lc-font-family":"","lc-font-style":"","lc-bkg-color":"","lc-color":"","lc-border-width":"0","lc-border-style":"","lc-border-color":"","lc-border-radius":10,"lc-zindex":0,"value":"","signals-oid-1":"parser.0.Betriebsart","signals-oid-0":"parser.0.Betriebsart"},"style":{"left":"14px","top":"426px","width":"219px","height":"27px","z-index":"1","font-size":"x-small"},"widgetSet":"jqui"}]

```
    
Die Einbindung der jeweiligen Werte bei ‚Objekt ID \[0\]' und ‚Objekt ID
\[1\]' (‚parser.0.Betriebsart') wird nachfolgend erklärt.

***Abfrage für die Betriebsart (für die On/Off-Visualisierung des
Heizungsschalters):***

Bei der Adapterkonfiguration für ‚parser.0' eine Regel mit der
Bezeichung ‚Betriebsart' erstellen, dann die IP (samt Parameternummer)
des BSB-LAN-Adapters angeben und zum Bearbeiten öffnen.
    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro15.jpg">
    

Unter ‚RegEx' folgende Syntax angeben:

`(\w+:\s+\d\s+-\s+\w+)`

    
<img src="https://raw.githubusercontent.com/1coderookie/BSB-LPB-LAN/master/docs/pics/ioBro16.jpg">
    
    
    
     
     
[Weiter zu Kapitel 12](kap12.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
