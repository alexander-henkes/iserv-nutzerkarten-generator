# IServ-Nutzerkarten-Generator

Webbasiertes Tool zur Erstellung von druckbaren Login-Karten für IServ, optimiert für Exporte aus der **Schuldock-Benutzerverwaltung**.

## Anwendungskontext

Dieses Repository enthält eine statische Webanwendung (`HTML/JS/CSS`), die Schüler- oder Kollegendaten aus Excel-Listen importiert und in ein druckfertiges Kartenformat konvertiert. Das Tool läuft vollständig lokal im Browser (Client-Side) und gewährleistet somit maximalen Datenschutz, da keine sensiblen Personendaten an einen Server übertragen werden.

<div align="center">

## 🚀 DIREKT NUTZEN 🚀

### **[➡️ Programm direkt & lokal im Browser nutzen ⬅️](https://alexander-henkes.github.io/iserv-nutzerkarten-generator/)**

**Keine Installation erforderlich! Sofort einsatzbereit auf PC, Mac oder Tablet.**

[![GitHub](https://img.shields.io/badge/GitHub-alexander--henkes-blue?logo=github)](https://github.com/alexander-henkes)
[![Release](https://img.shields.io/github/v/release/alexander-henkes/iserv-nutzerkarten-generator?color=success)](https://github.com/alexander-henkes/iserv-nutzerkarten-generator/releases/)
[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Falexander-henkes.github.io%2Fiserv-nutzerkarten-generator%2F)](https://alexander-henkes.github.io/iserv-nutzerkarten-generator/)
[![Release Date](https://img.shields.io/github/release-date/alexander-henkes/iserv-nutzerkarten-generator)](https://github.com/alexander-henkes/iserv-nutzerkarten-generator/releases)
[![Code Size](https://img.shields.io/github/languages/code-size/alexander-henkes/iserv-nutzerkarten-generator)](https://github.com/alexander-henkes/iserv-nutzerkarten-generator)
[![Issues](https://img.shields.io/github/issues-raw/alexander-henkes/iserv-nutzerkarten-generator)](https://github.com/alexander-henkes/iserv-nutzerkarten-generator/issues/)

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

### Bibliotheken & Danksagungen
Das Projekt nutzt externe Bibliotheken für das Parsing von Excel-Dateien:
- **[xlsx-populate](https://github.com/dtjohnson/xlsx-populate)** (v1.21.0) von Dave Johnson: Ermöglicht das Lesen und Entschlüsseln von `.xlsx`-Dateien direkt im Browser. Die Bibliothek wird über das [jsDelivr CDN](https://www.jsdelivr.com/) eingebunden.

## Datenschutz-Hinweis

Da dieses Tool für die Verarbeitung von Schülerdaten konzipiert ist, wurde auf Backend-Technologien verzichtet.
- **Kein Upload**: Es findet kein Upload zu einem Webserver statt.
- **Lokale Ausführung**: Der JavaScript-Code läuft ausschließlich im Arbeitsspeicher Ihres Endgeräts.

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert und wurde für schulische Zwecke entwickelt.

### Was bedeutet das konkret?

Die MIT-Lizenz ist eine der freizügigsten Open-Source-Lizenzen. **Sie können dieses Tool frei nutzen**:

✅ **Verwenden, kopieren, weitergeben** – An Ihrer Schule, zu Hause

✅ **Verändern und anpassen** – Code ändern, Funktionen hinzufügen, Design anpassen

✅ **In eigene Projekte einbauen** – Als Grundlage für eigene Tools verwenden

✅ **Kommerziell nutzen** – Auch wenn Sie damit Geld verdienen (z. B. als Teil eines kostenpflichtigen Services)

### Was müssen Sie beachten?

📌 **Einzige Bedingung**: Bei Weitergabe oder Veröffentlichung Ihrer angepassten Version sollten Sie den ursprünglichen Copyright-Hinweis und die Lizenz beibehalten.

```
MIT License

Copyright (c) 2026 Alexander Henkes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
