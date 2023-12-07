[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)  
[Zurück zu Kapitel 12](kap12.md)  
    
---
    
# 13. Exkurs: BSB-LAN sicher aus dem Internet heraus erreichen
    
In diesem Abschnitt werden die grundsätzlichen Möglichkeiten für eine sichere Erreichbarkeit von BSB-LAN aus dem Internet beschrieben. Aufgrund der Vielzahl von erhältlichen Routern können hier nur die wichtigsten Schritte beschrieben werden, für weitere Details ist das Handbuch des jeweiligen Routers hinzuzuziehen. Wir können für die Einrichtung dieser Schritte auch keinen Support bieten, bitte dafür in passenden Internet-Foren um Rat fragen.  
  
**Grundvoraussetzung: (Sub-)Domain mit dynamischem DNS einrichten**  
Um den externen Zugriff zu ermöglichen, benötigt man eine eigene (Sub-)Domain, die man über einen dynamischen DNS-Dienst vom Internet aus erreichen kann. Manche Router- oder NAS-Anbieter wie AVM oder Synology bieten solch einen Service direkt für ihre Kunden an, ansonsten muss man eine eigene Domain (z.B. `mein-zuhause.de`) besitzen, bei der man sich dann eine Subdomain einrichtet (hier im Beispiel `bsb-lan.mein-zuhause.de`), die dann zusammen mit dem dynamischen DNS-Anbieter entsprechend konfiguriert werden muss.  
  
**Variante 1: Virtuelles Privates Netzwerk (VPN)**  
Viele Router stellen von Haus aus einen Server für ein Virtuelles Privates Netzwerk (VPN) bereit. Dies ist die sicherste Variante, weil auf diese Weise der anderweitige Zugang zum Heimnetz generell gesperrt ist. Ist so ein VPN Server z.B. auf dem Router eingerichtet und aktiviert, kann man mit einem ebenfalls VPN-fähigen Gerät auf BSB-LAN so zugreifen, wie man es auch sonst tun würde, also ganz normal über die heimatliche IP-Adresse.  
Der Nachteil liegt allerdings darin, dass es ohne ein VPN-fähiges Endgerät nicht möglich ist, auf BSB-LAN zuzugreifen. Ebenso kann der Internetzugang, mit dem man unterwegs aus das Internet nutzt, so konfiguriert sein, dass VPN nicht möglich ist. In diesen Fällen gibt es dann keine Möglichkeit auf die heimischen Ressourcen zuzugreifen.  
  
**Variante 2: Reverse Proxy**  
Ein Reverse Proxy bietet u.a. die Möglichkeit, mehrere Geräte im Heimatnetz über ein einziges, von außen sichtbares Gerät, auf dem ein Reverse Proxy Server läuft, zu erreichen. Hierfür sind die folgenden Schritte nötig:  
  
1. Portweiterleitung einrichten  
Für das Gerät, auf dem der Reverse Proxy läuft, muss im lokalen Netzwerk eine Portfreigabe eingerichtet werden. Damit dieser Zugriff über SSL/TLS abgesichert werden kann, ist hierfür Port 443 zu verwenden. Hierbei ist aufzupassen, dass dann ggf. nicht mehr über Port 443 auf den eigentlchen Router zugegriffen werden kann. Bei einigen Routern lässt sich aber der SSL-Port verändern, so dass das kein grundsätzliches Problem sein muss. Für die Nutzung von SSL/TLS / Port 443 muss natürlich auf dem Gerät dann auch ein entsprechendes (ggf. selbstsigniertes) Zertifikat installiert sein. Viele Router- oder NAS-Hersteller bieten dafür aber schon von Werk aus die Einrichtung von kostenlosen Let’s Encrypt-Zertifikaten an.  

2. Reverse Proxy installieren und einrichten  
Das Gerät, auf dem der Reverse Proxy läuft, kann irgendein Rechner sein, der dauerhaft erreichbar ist, z.B. ein File-Server/NAS. Auf diesem wird der ReverseProxy-Server installiert und eingerichtet. Nutzt man hierfür eine Synology NAS, so ist hier ab DSM 7 bereits solch eine Funktion mit eingebaut (siehe Systemsteuerung / Anmeldeportal / Erweitert).  
Man konfiguriert den Reverse Proxy nun so, dass er die Anfragen für die gewählte (Sub-)Domain über *HTTPS*(!) auf Port 443 annimmt und diese dann über *HTTP*(!) auf Port 80 des BSB-LAN Adapters weiterleitet. Der Weg zurück erfolgt dann genau umgekehrt: Von BSB-LAN über ungesichertes HTTP zum Reverse Proxy und von dort aus über HTTPS wieder raus ins Internet.  
Nun ist BSB-LAN über den HTTPS-Aufruf der (Sub-)Domain direkt erreichbar. Es empfiehlt sich nun auf jeden Fall die HTTP-Authentifizierung in BSB-LAN zu aktivieren, da ansonsten jeder Zugriff auf BSB-LAN hätte.  
      
---

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U6U5NPB51)    
 
---
     
[Weiter zu Kapitel 14](kap14.md)      
[Zurück zum Inhaltsverzeichnis](inhaltsverzeichnis.md)   
    


