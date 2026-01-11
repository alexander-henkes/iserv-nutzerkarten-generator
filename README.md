# IServ-Nutzerkarten-Generator

Webbasiertes Tool zur Erstellung von druckbaren Login-Karten für IServ, optimiert für Exporte aus der Schuldock-Benutzerverwaltung.

## Anwendungskontext

Dieses Repository enthält eine statische Webanwendung (`HTML/JS/CSS`), die Schüler- oder Kollegendaten aus Excel-Listen importiert und in ein druckfertiges Kartenformat konvertiert. Das Tool läuft vollständig lokal im Browser (Client-Side) und gewährleistet somit maximalen Datenschutz, da keine sensiblen Personendaten an einen Server übertragen werden.

<div align="center">

## 🚀 DIREKT NUTZEN

### **[➡️ Programm direkt & lokal im Browser nutzen ⬅️](https://alexander-henkes.github.io/iserv-nutzerkarten-generator/)**

**Keine Installation erforderlich! Sofort einsatzbereit auf PC, Mac oder Tablet.**

[![Open Generator](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)](https://alexander-henkes.github.io/iserv-nutzerkarten-generator/)

</div>

---

### Funktionen

- **Excel-Import**: Unterstützung für `.xlsx`-Dateien (inkl. verschlüsselter Dateien).
- **Manueller Modus**: Einfügen von Daten per Copy & Paste aus beliebigen Tabellen.
- **Druck-Optimierung**: Automatisches Raster (8 Karten pro DIN-A4-Seite) mit Seitenumbrüchen.
- **Anpassung**: Ein-/Ausblenden von Vorname, Nachname, Nutzername oder Passwort.
- **Datenschutz**: Lokale Verarbeitung der Daten ohne Server-Kommunikation.

## Installation & Nutzung

### Option 1: Online-Nutzung (empfohlen)
1. Rufen Sie den [Link zur Webanwendung](https://alexander-henkes.github.io/iserv-nutzerkarten-generator/) auf.
2. Das Tool wird vollständig in Ihren Browser geladen und funktioniert ab dann auch ohne Internetverbindung.

### Option 2: Lokale Nutzung
1. Laden Sie dieses Repository als ZIP-Datei herunter oder klonen Sie es.
2. Öffnen Sie die Datei `index.html` in einem Browser (Chrome, Edge, Firefox, Safari).

## Verwendung

Das Programm bietet zwei Wege, um Daten zu importieren:

### (A) Excel-Datei hochladen
Dies ist der komfortabelste Weg für Schuldock-Exporte.
1. **Schutzkennwort**: Falls Ihre Excel-Datei verschlüsselt ist, geben Sie zuerst das Passwort ein.
2. **Upload**: Ziehen Sie die Datei in das gestrichelte Feld oder klicken Sie darauf.
3. **Verarbeitung**: Das System liest die Daten automatisch ein.

### (B) Daten manuell einfügen
1. Markieren Sie in Ihrer Tabelle die Spalten (unter Vorname, Nachname, Nutzername, Passwort).
2. Kopieren Sie die Daten (`Strg+C`).
3. Fügen Sie die Daten in das Textfeld im Tab "Daten manuell einfügen" ein.

### Anpassung & Druck
1. **Vorschau prüfen**: Kontrollieren Sie die Anzahl der erkannten Schüler/Kollegen und Seiten.
2. **Optionen wählen**: Nutzen Sie die Checkboxen, um z. B. das Passwort auszublenden, falls die Karten öffentlich ausgelegt werden.
3. **Drucken**: Klicken Sie auf "Drucken" (`Strg+P`), um den Browser-Druckdialog zu öffnen.

## Technische Details

### Bibliotheken
Das Projekt nutzt externe Bibliotheken für das Parsing von Excel-Dateien:
- **xlsx-populate**: Ermöglicht das Lesen und Entschlüsseln von `.xlsx`-Dateien direkt im Browser.

## Datenschutz-Hinweis

Da dieses Tool für die Verarbeitung von Schülerdaten konzipiert ist, wurde auf Backend-Technologien verzichtet.
- **Kein Upload**: Es findet kein Upload zu einem Webserver statt.
- **Lokale Ausführung**: Der JavaScript-Code läuft ausschließlich im Arbeitsspeicher Ihres Endgeräts.

## Lizenz

Dieses Projekt wurde für schulische Zwecke entwickelt.

**Autor**: Alexander Henkes (2026)