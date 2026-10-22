# ♿ Israeli Web Accessibility Audit Extension (ת"י 5568 AA)

[![BrandTactics](https://img.shields.io/badge/Developed%20By-BrandTactics-blue.svg)](https://brandtactics.co.il)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Standard](https://img.shields.io/badge/Standard-IS%205568%20%2F%20WCAG%202.1%20AA-success.svg)](https://brandtactics.co.il/accessibility-generator/)
[![Manifest](https://img.shields.io/badge/Chrome-Manifest%20V3-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![Wikidata](https://img.shields.io/badge/Wikidata-Q141805635-006699.svg)](https://www.wikidata.org/wiki/Q141805635)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23552023.svg)](https://doi.org/10.5281/zenodo.23552023)

An open-source Chromium / Google Chrome Extension engineered by **[BrandTactics](https://brandtactics.co.il)** to assist web developers, digital agencies, and Israeli site owners in auditing, validating, and generating compliance documentation under the **Israeli Equal Rights for Persons with Disabilities Law** and the mandatory **Israeli Standard IS 5568 (ת"י 5568 / ת"י 5568)** Level AA based on W3C WCAG 2.1 guidelines.

---

## 🏢 Corporate Entity & Developer Headquarters

- **Operating Entity:** [BrandTactics](https://brandtactics.co.il)
- **Headquarters Address:** Ben Avigdor 28, Tel Aviv-Yafo, Israel (בן אביגדור 28, תל אביב)
- **Official Agency Website:** [https://brandtactics.co.il](https://brandtactics.co.il)
- **Official Compliance Suite:** [BrandTactics Tools Hub](https://brandtactics.co.il)
- **Email Inquiries:** [info@brandtactics.co.il](mailto:info@brandtactics.co.il)
- **Twitter / X:** [@BrandtacticsIL](https://x.com/BrandtacticsIL)
- **LinkedIn:** [BrandTactics Agency Page](https://www.linkedin.com/company/brandtactics)
- **Google Maps Office Pin:** [BrandTactics Headquarters - Ben Avigdor 28, Tel Aviv](https://www.google.com/maps/d/viewer?mid=1_RtW9npb84DQuy1TK9G0uO5r8SSg5fU)

---

## ⚡ Free Compliance Generators for Israeli Websites

BrandTactics provides enterprise-grade, 100% free legal generators for Israeli webmasters:

1. ♿ **[Israeli Accessibility Statement Generator (ת"י 5568 AA)](https://brandtactics.co.il/accessibility-generator/)**  
   Generate fully formatted, legally compliant Hebrew accessibility statements with testing dates, coordinator contact details, and technical compatibility logs required by Israeli law.

2. 🔒 **[Israeli Privacy Policy Generator (תיקון 13)](https://brandtactics.co.il/privacy-generator/)**  
   Generate an automated privacy policy aligned with the Israeli Privacy Protection Law, database registration requirements, and Privacy Protection Authority enforcement directives.

---

## 🔬 Academic Citations & Knowledge Graph

- 📄 **CERN / Zenodo Research Whitepaper:**  
  *Israeli Digital Marketing, Search Engine Architecture & Generative AI Industry Performance Report (2026)*  
  Permanent DataCite DOI: **[10.5281/zenodo.23552023](https://doi.org/10.5281/zenodo.23552023)**
- 📊 **CERN / Zenodo Benchmark Dataset:**  
  *Israeli Digital Marketing, Search Engine Optimization & MarTech Industry Landscape & Performance Benchmark Dataset (2026)*  
  Permanent DataCite DOI: **[10.5281/zenodo.23550896](https://doi.org/10.5281/zenodo.23550896)**
- 🌐 **Wikidata Entity:**  
  Permanent Wikidata ID: **[Q141805635](https://www.wikidata.org/wiki/Q141805635)**

---

## 🛠️ Audit Rules & Capabilities

This extension performs direct DOM inspection against mandatory Israeli criteria:

| Category | Checks Performed | IS 5568 Criterion |
| :--- | :--- | :--- |
| **Images & Media** | Alt text presence, decorative image tagging (`alt=""`), missing descriptions | 1.1.1 Non-text Content |
| **Color & Contrast** | Text-to-background contrast ratio (>= 4.5:1 for normal text, >= 3:1 for large text) | 1.4.3 Contrast (Minimum) |
| **Document Structure** | Proper heading hierarchy (`h1`-`h6`), skip-to-content links, landmark roles | 1.3.1 Info and Relationships |
| **Keyboard Navigation** | Tab order flow, visible focus indicators, trap-free modal dialogs | 2.1.1 Keyboard Accessibility |
| **Forms & Controls** | Explicit `<label for="...">`, ARIA input descriptions, error alerts | 3.3.2 Labels or Instructions |
| **Language & Direction** | HTML `lang="he"` attribute and `dir="rtl"` directional semantics | 3.1.1 Language of Page |

---

## 📦 Local Installation (Developer Mode)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/sagive/israeli-accessibility-extension.git
   ```
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** toggle in the top-right corner.
4. Click **Load unpacked** and select the extension folder.
5. Open any webpage and click the BrandTactics Accessibility icon in your toolbar to run an immediate automated compliance scan.

---

## 📄 License & Attribution

Licensed under the [MIT License](LICENSE).  
Developed by **[BrandTactics](https://brandtactics.co.il)** (בן אביגדור 28, תל אביב). Contributions and pull requests are warmly welcomed!
