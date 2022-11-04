const defaultSurveyJSON = {
    "title": "COVID Screening",
    "description": "This survey is to check the potential of spreading COVID-19.",
    "pages": [
     {
      "name": "page1",
      "elements": [
        {
          "type": "checkbox",
          "name": "id_bdl",
          "title": "Bundesland",
          "choices": [
            {
              "value": "bw",
              "text": "Baden-Württemberg"
            },
            {
              "value": "by",
              "text": "Bayern"
            },
            {
              "value": "be",
              "text": "Berlin"
            },
            {
              "value": "bb",
              "text": "Brandenburg"
            },
            {
              "value": "hb",
              "text": "Bremen"
            },
            {
              "value": "hh",
              "text": "Hamburg"
            },
            {
              "value": "he",
              "text": "Hessen"
            },
            {
              "value": "mv",
              "text": "Mecklenburg-Vorpommern"
            },
            {
              "value": "ni",
              "text": "Niedersachsen"
            },
            {
              "value": "nw",
              "text": "Nordrhein-Westfalen"
            },
            {
              "value": "rp",
              "text": "Rheinland-Pfalz"
            },
            {
              "value": "sl",
              "text": "Saarland"
            },
            {
              "value": "sn",
              "text": "Sachsen"
            },
            {
              "value": "st",
              "text": "Sachsen-Anhalt"
            },
            {
              "value": "sh",
              "text": "Schleswig-Holstein"
            },
            {
              "value": "th",
              "text": "Thüringen"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_klass",
          "title": "Förderklasse",
          "choices": [
            {
              "value": "oelb",
              "text": "Ökolandbau"
            },
            {
              "value": "azl",
              "text": "Ausgleichszulage"
            },
            {
              "value": "ea",
              "text": "Erschwernisausgleich"
            },
            {
              "value": "vns",
              "text": "Vertragsnaturschutz"
            },
            {
              "value": "aukm",
              "text": "Agrarumwelt- und Klimamaßnahmen AUKM"
            },
            {
              "value": "twm_ziel",
              "text": "Tierschutz/Tierwohlmaßnahmen"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_foerd_variab",
          "title": "Variabilität",
          "choices": [
            {
              "value": "fix",
              "text": "nein, feste Förderhöhe"
            },
            {
              "value": "abw",
              "text": "Grundbetrag einer Förderhöhe ist angegeben, kann aber abweichen wenn die Maßnahme kombiniert wird oder aus anderen Gründen"
            },
            {
              "value": "var",
              "text": "keine einheitliche Förderhöhe angegeben, beispielsweise unterschiedliche Förderhöhen in einer Komplexmaßnahme"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_kat",
          "title": "Kategorie",
          "choices": [
            {
              "value": "zf_us",
              "text": "Anbau Zwischenfrucht/Untersaat",
              "visibleIf": "{m_klass} anyof ['aukm']"
            },
            {
              "value": "anlage_pflege",
              "text": "Anlage/Pflege Struktur",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm']"
            },
            {
              "value": "dungmang",
              "text": "Düngemanagement",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm']"
            },
            {
              "value": "extens",
              "text": "Extensivierung"
            },
            {
              "value": "flst",
              "text": "Flächenstilllegung/Brache",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm']"
            },
            {
              "value": "umwandlg",
              "text": "Nutzungsumwandlung",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm']"
            },
            {
              "value": "bes_kult_rass",
              "text": "Förderung bestimmter Rassen / Sorten / Kulturen",
              "visibleIf": "{m_klass} notcontains 'ea'"
            },
            {
              "value": "anbaudiv",
              "text": "Anbaudiversität / Erhöhung der Kulturartenvielfalt"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_ums_eb",
          "title": "Umsetzungsebene",
          "choices": [
            {
              "value": "flaeche",
              "text": "Einzelfläche"
            },
            {
              "value": "bzweig",
              "text": "Betriebszweig"
            },
            {
              "value": "betr",
              "text": "Gesamtbetrieb"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_ziel_fl",
          "title": "Zielfläche",
          "choices": [
            {
              "value": "ka",
              "text": "keine Angabe/Vorgabe"
            },
            {
              "value": "al",
              "text": "Ackerland (AL)",
              "visibleIf": "{m_kat} notcontains 'zf_us'"
            },
            {
              "value": "gl",
              "text": "Grünland (GL)"
            },
            {
              "value": "lf",
              "text": "Landwirtschaftlich genutzte Fläche (LF)"
            },
            {
              "value": "dk_sk",
              "text": "Dauer- und/oder Sonderkulturen (DK/SK)",
              "visibleIf": "{m_klass} notcontains 'twm_ziel'"
            },
            {
              "value": "hff",
              "text": "Hauptfutterfläche (HFF)"
            },
            {
              "value": "biotop_le",
              "text": "Landschaftselement/Biotop o.Ä.",
              "visibleIf": "{m_klass} anyof ['azl', 'ea', 'vns', 'aukm'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "wald",
              "text": "Wald/Forst",
              "visibleIf": "{m_klass} anyof ['ea', 'vns', 'aukm'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_ziel_einh",
          "title": "Zieleinheit",
          "choices": [
            {
              "value": "ka",
              "text": "keine Angabe/Vorgabe"
            },
            {
              "value": "m3",
              "text": "m³ (z.B. Gülle)",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm'] and {m_kat} anyof ['dungmang', 'extens']"
            },
            {
              "value": "pieces",
              "text": "Kopf/Stück (z.B. Tiere oder Bäume)",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm', 'twm_ziel'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'flst' and {m_kat} notcontains 'umwandlg' and {m_ziel_fl} notcontains 'ka'"
            },
            {
              "value": "gve",
              "text": "Großvieheinheiten (GV/GVE)",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm', 'twm_ziel'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_kat} notcontains 'umwandlg' and {m_ziel_fl} notcontains 'ka'"
            },
            {
              "value": "rgve",
              "text": "Raufutter fressende Großvieheinheiten (RGV)",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm', 'twm_ziel'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_kat} notcontains 'umwandlg' and {m_ziel_fl} notcontains 'ka'"
            },
            {
              "value": "ha",
              "text": "Hektar (ha)",
              "visibleIf": "{m_ziel_fl} notcontains 'ka'"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "komplex_typ",
          "title": "Komplex-Maßnahme",
          "choices": [
            {
              "value": "norm",
              "text": "nicht unterteilte Maßnahme (Standard)"
            },
            {
              "value": "komplex",
              "text": "Komplexmaßnahme (beinhaltet verschiedene Varianten)"
            },
            {
              "value": "variante",
              "text": "Variante einer Komplexmaßnahme"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_topup_typ",
          "title": "Top-Up- oder Basis-Massnahme",
          "choices": [
            {
              "value": "norm",
              "text": "nicht unterteilte Maßnahme (Standard)"
            },
            {
              "value": "basis",
              "text": "Basis-Maßnahme"
            },
            {
              "value": "top_up",
              "text": "Top-Up-Maßnahme"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_kombi",
          "title": "Kombinierbar mit anderen Massnahmen",
          "choices": [
            {
              "value": "no",
              "text": "Nein"
            },
            {
              "value": "oevf_oer",
              "text": "Greening/ÖVF (für Förderperiode 2014-2022) bzw. Ökoregelung (für Förderperiode ab 2023)"
            },
            {
              "value": "aukm",
              "text": "AUKM"
            },
            {
              "value": "sonst",
              "text": "Andere (aber NICHT Greening/ÖVF, Ökoregelung oder AUKM)"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_ziel",
          "title": "Zielsetzung Land",
          "choices": [
            {
              "value": "ka",
              "text": "keine Angabe/Vorgabe"
            },
            {
              "value": "bsch",
              "text": "Bodenschutz"
            },
            {
              "value": "wsch",
              "text": "Gewässerschutz"
            },
            {
              "value": "asch",
              "text": "Spezieller Artenschutz"
            },
            {
              "value": "biodiv",
              "text": "Biodiversität"
            },
            {
              "value": "strutktviel",
              "text": "Erhöhung der Strukturvielfalt"
            },
            {
              "value": "genet_res",
              "text": "Erhaltung genetischer Ressourcen (Pflanzen, z. B. im Grünland, und Tiere, z. B. bedrohte Rassen)"
            },
            {
              "value": "tsch",
              "text": "Tierschutz/Maßnahmen zum Tierwohl im Betrieb"
            },
            {
              "value": "klima",
              "text": "Klima"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_beratung",
          "title": "Beratung",
          "choices": [
            {
              "value": "ka",
              "text": "keine Angabe/ohne obligate Beratung"
            },
            {
              "value": "beratg_oblig",
              "text": "obligate Beratung (auch in Form der Imkerbeteiligung)"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_kul_r_def",
          "title": "räumlich definierte Kulisse",
          "choices": [
            {
              "value": "o",
              "text": "ohne"
            },
            {
              "value": "natsch_kulissen",
              "text": "Naturschutzgebiete i. w. S. (NSG, SPA, FFH, Biosphärengebiete, Nationalparke, ...)"
            },
            {
              "value": "wassersch_kulissen",
              "text": "Wasserschutzgebiete (HQ20, rote Wasserkörper, …)"
            },
            {
              "value": "bsch_kulissen",
              "text": "Bodenschutzgebiete (Wassererosionsschutzgebiete, Winderosionsschutzgebiete, organische Böden, …)"
            },
            {
              "value": "ungunst",
              "text": "Almen / Berglagen / Ungunstlagen"
            },
            {
              "value": "organ_o_feucht",
              "text": "Moorstandorte / Feuchtgebiete / organische Böden"
            },
            {
              "value": "andere",
              "text": "andere räumliche Definition"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_kul_i_def",
          "title": "inhaltlich definierte Kulisse",
          "choices": [
            {
              "value": "o",
              "text": "ohne"
            },
            {
              "value": "lage",
              "text": "Lage (z. B. an Gewässern, an Knicks, an Waldrändern)"
            },
            {
              "value": "kultur",
              "text": "Kulturen / Kulturgruppen (nach Mais, Reihenkulturen, vor Wintergetreide, ...)",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff']"
            },
            {
              "value": "habitat_o_art",
              "text": "Habitate / Zielarten (z.B. artenreiches Grünland, FFH-Lebensraumtypen, Ackerlebensräume, bei Vorkommen bestimmter Arten)"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_kul_i_erl_zuw",
          "title": "Zuweisung für Erläuterung inhaltlich Flächendefinition \"thematische Kulisse\" ",
          "choices": [
            {
              "value": "ausschluss",
              "text": "nicht zu / nicht bei"
            },
            {
              "value": "vorab",
              "text": "vor"
            },
            {
              "value": "incl",
              "text": "zu / bei"
            },
            {
              "value": "danach",
              "text": "nach"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "bw_nutz",
          "title": "Nutzungsausschluss",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe (kein Nutzungsausschluss)"
            },
            {
              "value": "o_abfuhr",
              "text": "Nutzung ist ausgeschlossen, keine Ernteabfuhr",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm']"
            },
            {
              "value": "abfuhr_f_biogs",
              "text": "Erntegutnutzung ausschließlich für Biogasanlagen"
            },
            {
              "value": "beweidg_af_erlaubt",
              "text": "ausschließlich Beweidung mit Schafen oder Ziegen auf nicht-Grünlandfläche erlaubt"
            },
            {
              "value": "schroepfen",
              "text": "ausschließlich Schröpfschnitt erlaubt"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "bw_kult",
          "title": "betroffene Frucht",
          "choices": [
            {
              "value": "o",
              "text": "keine"
            },
            {
              "value": "hfrucht",
              "text": "auf Hauptfrucht"
            },
            {
              "value": "nfrucht",
              "text": "nur auf Nebenfrucht",
              "visibleIf": "{m_ziel_fl} notcontains 'gl' and {m_ziel_fl} notcontains 'biotop_le' and {m_ziel_fl} notcontains 'wald'"
            },
            {
              "value": "h_n_nfrucht",
              "text": "auf Haupt- und Nebenfrucht",
              "visibleIf": "{m_ziel_fl} notcontains 'gl' and {m_ziel_fl} notcontains 'biotop_le' and {m_ziel_fl} notcontains 'wald'"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "bw_vieh",
          "title": "Tierbestandsvorgabe",
          "choices": [
            {
              "value": "o",
              "text": "ohne"
            },
            {
              "value": "vieh_red",
              "text": "Reduktion des Viehbestandes"
            },
            {
              "value": "veraenderg_tierhaltg",
              "text": "Änderung der Haltungsbedingungen, z. B. Stallumbau, Einführung von Weidegang, Sommerweidehaltung, Haltung auf Stroh",
              "visibleIf": "{m_klass} notcontains 'ea'"
            },
            {
              "value": "bweidg_kurz",
              "text": "verzögerter Auftrieb/Weidebeginn oder vorgezogener Abtrieb/Weidegangende"
            },
            {
              "value": "bes_art_rasse",
              "text": "Gezielte Auswahl der Tierart/Rasse --> s. Spalte 'besondere Kultur- oder Tierart'"
            },
            {
              "value": "n_red_fuetterg",
              "text": "N/Stickstoff-reduzierte Fütterung von Tieren",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm', 'twm_ziel']"
            },
            {
              "value": "verzicht",
              "text": "Verzicht Kupierung (Schnäbel, Hörner, Ringelschwänze etc.)",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm', 'twm_ziel']"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "vorz",
          "title": "Vorzeichen",
          "choices": [
            {
              "value": "o",
              "text": "NA"
            },
            {
              "value": "lt",
              "text": "<"
            },
            {
              "value": "gt",
              "text": ">"
            },
            {
              "value": "e",
              "text": "="
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "zaehler",
          "title": "Zähler der Einheit",
          "choices": [
            {
              "value": "o",
              "text": "NA"
            },
            {
              "value": "gv",
              "text": "GV"
            },
            {
              "value": "rgv",
              "text": "RGV"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "nenner",
          "title": "Nenner der Einheit",
          "choices": [
            {
              "value": "o",
              "text": "NA",
              "visibleIf": "{m_ziel_fl} anyof ['ka']"
            },
            {
              "value": "ha_lf",
              "text": "ha LF",
              "visibleIf": "{m_ziel_fl} anyof ['lf']"
            },
            {
              "value": "ha_gl",
              "text": "ha GL",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff']"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            },
            {
              "value": "ha",
              "text": "ha",
              "visibleIf": "{m_ziel_fl} notcontains 'ka'"
            },
            {
              "value": "ha_hff",
              "text": "ha HFF",
              "visibleIf": "{m_ziel_fl} anyof ['lf', 'hff', 'gl']"
            },
            {
              "value": "ha_al",
              "text": "ha AL",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'hff']"
            },
            {
              "value": "schlag",
              "text": "Schlag",
              "visibleIf": "{m_ziel_fl} notcontains 'ka' and {m_ziel_fl} notcontains 'biotop_le'"
            },
            {
              "value": "akult",
              "text": "förderfähige Ackerkulturen",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf']"
            },
            {
              "value": "m_lang",
              "text": "Meter lang",
              "visibleIf": "{m_ziel_fl} notcontains 'ka'"
            },
            {
              "value": "m_breit",
              "text": "Meter breit",
              "visibleIf": "{m_ziel_fl} notcontains 'ka'"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "bb",
          "title": "Bodenbearbeitung",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe/ohne Einschränkung"
            },
            {
              "value": "red_bbearb_m_technik",
              "text": "reduzierte Bodenbearbeitung MIT spezifischer/besonderer Bearbeitungstechnik",
              "visibleIf": "{m_ziel_fl} notcontains 'wald' and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'anlage_pflege'"
            },
            {
              "value": "red_bbearb_o_technik",
              "text": "reduzierte Bodenbearbeitung OHNE spezifische/besondere Bearbeitungstechnik",
              "visibleIf": "{m_ziel_fl} notcontains 'wald' and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "o_bbearb",
              "text": "Verbot der Bodenbearbeitung"
            },
            {
              "value": "gl_erneu_flach",
              "text": "Grünlanderneuerung nur flachwendend / pfluglos / nicht wendend / durch vollflächiges Durchschneiden der Grasnarbe",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff']"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "dg_vg",
          "title": "Düngung",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe / ohne Einschränkung"
            },
            {
              "value": "keine",
              "text": "keine Düngung"
            },
            {
              "value": "ausbring_techn",
              "text": "besondere Ausbringungstechnik (z.B. Schleppschlauch) mit weiteren Angaben in Technische Anforderungen"
            },
            {
              "value": "ausbring_t_kurz",
              "text": "verkürzte oder vorgegebene Ausbringungszeiten"
            },
            {
              "value": "dueng_red",
              "text": "reduzierte Düngungsmenge"
            },
            {
              "value": "dueng_spez_art",
              "text": "Beschränkung auf spezifische Düngemittel"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "dg_art",
          "title": "Düngung Art",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe"
            },
            {
              "value": "dueng_org_tier_liqu",
              "text": "organisch, tierisch und flüssig: z.B. Gülle"
            },
            {
              "value": "dueng_org_tier_fest",
              "text": "organisch, tierisch, fest: Festmist"
            },
            {
              "value": "dueng_org_pfl",
              "text": "organisch, pflanzlich: Gärrest"
            },
            {
              "value": "dueng_org",
              "text": "Wirtschaftsdünger (organisch, nicht genauer differenziert)"
            },
            {
              "value": "dueng_miner",
              "text": "mineralisch"
            },
            {
              "value": "dueng_org_n_miner",
              "text": "organisch und mineralisch"
            },
            {
              "value": "dueng_stoff",
              "text": "Bestimmte Inhalts- oder Nährstoffe sind zulässig oder ausgeschlossen. Im Feld Sonstiges angeben, wie die Auflage lautet!"
            },
            {
              "value": "dueng_bu",
              "text": "Düngung auf Grundlage einer Bodenuntersuchung"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "psm",
          "title": "Pflanzenschutz",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe / ohne Einschränkung"
            },
            {
              "value": "pflsch_integr",
              "text": "integrierter Pflanzenschutz"
            },
            {
              "value": "pflsch_biol_ausbring",
              "text": "gezielte Ausbringung von Nützlingen oder Pheromonen",
              "visibleIf": "{m_ziel_fl} notcontains 'gl' and {m_ziel_fl} notcontains 'biotop_le'"
            },
            {
              "value": "pflsch_chem_einzel",
              "text": "chem. Pflanzenschutz, auf Einzelpflanzenbehandlung beschränkt"
            },
            {
              "value": "pflsch_o",
              "text": "kein chem. Pflanzenschutz"
            },
            {
              "value": "pflsch_o_herbiz",
              "text": "Verzicht auf Herbizide"
            },
            {
              "value": "pflsch_o_wregelg",
              "text": "Verzicht auf Wachstumsregler",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'dk_sk']"
            },
            {
              "value": "pflsch_einschraenk_option",
              "text": "optionale Einschränkung"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "dgl_typ",
          "title": "Grünlandtyp",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe"
            },
            {
              "value": "wiese",
              "text": "Wiese"
            },
            {
              "value": "weide",
              "text": "Weide"
            },
            {
              "value": "wiese_weide",
              "text": "Wiese/Weide (Maßnahmenbeschreibung beinhaltet beide Optionen)"
            },
            {
              "value": "strob",
              "text": "Streuobst/-wiese/-bestand"
            },
            {
              "value": "heide",
              "text": "Heide"
            },
            {
              "value": "alm",
              "text": "Alm"
            },
            {
              "value": "hutu",
              "text": "Hutung"
            },
            {
              "value": "fgl",
              "text": "Feuchtgrünland"
            },
            {
              "value": "mras",
              "text": "Magerrasen"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "dgl_bw",
          "title": "Grünlandbewirtschaftung",
          "choices": [
            {
              "value": "o",
              "text": "keine Angabe"
            },
            {
              "value": "einschuer_o_weide",
              "text": "einschürige Wiese (keine Beweidung)",
              "visibleIf": "{dgl_typ} anyof ['wiese', 'wiese_weide', 'strob']"
            },
            {
              "value": "einschuer_m_weide",
              "text": "einschürige Wiese  mit darauf folgender obligater Beweidung",
              "visibleIf": "{dgl_typ} anyof ['wiese', 'wiese_weide', 'strob']"
            },
            {
              "value": "o_erneuerg",
              "text": "keine Grünland-Erneuerung"
            },
            {
              "value": "o_walzen",
              "text": "kein Walzen"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_dauer_vertr",
          "title": "Vertragslaufzeit",
          "choices": [
            {
              "value": "1y",
              "text": "1 Jahr"
            },
            {
              "value": "2y",
              "text": "2 Jahre"
            },
            {
              "value": "3y",
              "text": "3 Jahre"
            },
            {
              "value": "4y",
              "text": "4 Jahre"
            },
            {
              "value": "5y",
              "text": "5 Jahre"
            },
            {
              "value": "bis5y",
              "text": "<= 5 Jahre (wenn nicht genauer angegeben)"
            },
            {
              "value": "bis10y",
              "text": "<= 10 Jahre"
            },
            {
              "value": "bis20y",
              "text": "<= 20 Jahre"
            },
            {
              "value": "na",
              "text": "nicht angegeben"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "sh_art",
          "title": "Strukturart",
          "choices": [
            {
              "value": "o",
              "text": "keine Struktur"
            },
            {
              "value": "hecke",
              "text": "Gehölz/Hecke",
              "visibleIf": "{m_ziel_fl} notcontains 'wald'"
            },
            {
              "value": "saum",
              "text": "Blühfläche/-streifen/Brache und andere Saumstrukturen",
              "visibleIf": "{m_ziel_fl} notcontains 'wald'"
            },
            {
              "value": "graben",
              "text": "Graben"
            },
            {
              "value": "vernaessg",
              "text": "Vernässung"
            },
            {
              "value": "schutz_streif",
              "text": "Gewässerschutzstreifen (incl. Erosionsschutzstreifen)"
            },
            {
              "value": "biotop",
              "text": "Biotop"
            },
            {
              "value": "strobst",
              "text": "Streuobst/-wiese/-bestand",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "stein",
              "text": "Steinmauer, Lesesteinhaufen"
            },
            {
              "value": "biotop_bes",
              "text": "Trockenrasen, Heide etc.",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "le_undef",
              "text": "Strukturelemente nicht definiert (z. B. \"naturnahe Strukturelemente\" oder mehrere, unterschiedliche Elemente inbegriffen)\""
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_dauer_lage",
          "title": "Lagetreue der Maßnahme",
          "choices": [
            {
              "value": "wechsel_ann",
              "text": "jährlich variabel"
            },
            {
              "value": "lagetreu",
              "text": "Lagetreu über den Verpflichtungszeitraum"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "tech",
          "title": "Technische Anforderungen",
          "choices": [
            {
              "value": "o",
              "text": "ohne"
            },
            {
              "value": "red_reifen_druck",
              "text": "Reduzierter Reifendruck"
            },
            {
              "value": "mulch_egge",
              "text": "Mulchen/Eggen"
            },
            {
              "value": "direkt_o_mulch_saat_o_pflanz",
              "text": "Direktsaat-/Mulchsaat-/Mulchpflanzverfahren"
            },
            {
              "value": "spez_maehtechn",
              "text": "Besondere Mähtechnik, z. B: Messerbalken",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "spez_weidetechn",
              "text": "Besondere Weidetechnik (Standweide )",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le'] and {dgl_typ} notcontains 'wiese'"
            },
            {
              "value": "vernaessg",
              "text": "Vernässung, zumindest temporär (Wasserstandsanhebung im Winter, Rückbau von Drainagen)",
              "visibleIf": "{m_klass} notcontains 'oelb' and {m_klass} notcontains 'twm_ziel' and {m_ziel_einh} notcontains 'm3' and {m_ziel_einh} notcontains 'pieces' and {m_ziel_einh} notcontains 'gve' and {m_ziel_einh} notcontains 'rgve'"
            },
            {
              "value": "stabil_dueng",
              "text": "Einsatz stabilisierter Dünger (z.B. CULTAN-Verfahren, N-Depotdüngung)",
              "visibleIf": "{dg_vg} anyof ['dueng_spez_art'] and {m_klass} notcontains 'azl' and {m_klass} notcontains 'twm_ziel' and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'umwandlg' and {m_kat} notcontains 'bes_kult_rass' and {m_ziel_einh} notcontains 'rgve'"
            },
            {
              "value": "flaech_spezif_dueng",
              "text": "standortangepasst/teilflächenspezifisch (z.B. bei Düngung oder Einsatz von Exaktstreuer)",
              "visibleIf": "{m_klass} notcontains 'twm_ziel' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "dueng_plang",
              "text": "Analysen zur Düngungsplanung, z.B. Bodenuntersuchung/Frühjahres-Nmin-Analyse, Pflanzenanalysen, Wirtschaftsdünger- und Gärsubstratanalysen, Hoftorbilanzen, NIRS-Verfahren",
              "visibleIf": "{m_klass} notcontains 'twm_ziel' and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "remiss_red_ausbring_techn",
              "text": "Emissionsarme Ausbringungstechnik (Schleppschlauch/-Schuh etc.)",
              "visibleIf": "{dg_vg} anyof ['ausbring_techn'] and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_kat} notcontains 'umwandlg' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "in_reihe",
              "text": "in Reihen (z.B. strip till oder Düngung in Reihen)",
              "visibleIf": "{m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_kat} notcontains 'bes_kult_rass' and {m_ziel_fl} notcontains 'gl' and {m_ziel_fl} notcontains 'biotop_le' and {m_ziel_fl} notcontains 'wald'"
            },
            {
              "value": "weite_reihe",
              "text": "Aussaat/Anpflazung in weiter Reihe / doppeltem Reihenabstand / mit reduzierter Saatstärke/-menge",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff'] and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_ziel_einh} notcontains 'm3' and {m_ziel_einh} notcontains 'pieces' and {m_ziel_einh} notcontains 'gve' and {m_ziel_einh} notcontains 'rgve'"
            },
            {
              "value": "enge_reihe",
              "text": "Aussaat/Anpflanzung mit enger Reihe",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff'] and {m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'flst' and {m_ziel_einh} notcontains 'm3' and {m_ziel_einh} notcontains 'pieces' and {m_ziel_einh} notcontains 'gve' and {m_ziel_einh} notcontains 'rgve'"
            },
            {
              "value": "dekant",
              "text": "Dekanter",
              "visibleIf": "{dg_vg} anyof ['ausbring_techn']"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_pfl_art",
          "title": "Pflanzenart oder der Anzahl von Arten, die angebaut/gesät werden müssen",
          "choices": [
            {
              "value": "o",
              "text": "keine/ohne"
            },
            {
              "value": "mischg_def",
              "text": "Blühmischung konkret vorgegeben",
              "visibleIf": "{m_kat} anyof ['zf_us', 'anlage_pflege', 'extens', 'flst', 'umwandlg'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "mischg_option",
              "text": "Blühmischung mit Optionen vorgegeben (z. B. Anzahl Arten, Artherkunft)",
              "visibleIf": "{m_kat} anyof ['zf_us', 'anlage_pflege', 'extens', 'flst', 'umwandlg'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "fruchtfolge_lt_n_is_4teil",
              "text": "<=4-gliedrige Fruchtfolge",
              "visibleIf": "{m_kat} anyof ['extens', 'umwandlg', 'bes_kult_rass'] and {m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "fruchtfolge_gt_n_is_5teil",
              "text": ">=5-gliedrige Fruchtfolge",
              "visibleIf": "{m_kat} anyof ['extens', 'umwandlg', 'bes_kult_rass'] and {m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "kulturen_zeitgl",
              "text": "vorgegebene Anzahl von Kulturen, die zeitgleich angebaut werden müssen",
              "visibleIf": "{m_kat} anyof ['extens', 'umwandlg', 'bes_kult_rass'] and {m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "fruchtfolge_m_bache",
              "text": "Fruchtfolge mit Bracheanteil",
              "visibleIf": "{m_kat} notcontains 'zf_us' and {m_kat} notcontains 'dungmang' and {m_ziel_fl} notcontains 'wald' and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "fruchtfolge_andere",
              "text": "weitere/andere Fruchtfolgen",
              "visibleIf": "{m_kat} notcontains 'anlage_pflege' and {m_kat} notcontains 'umwandlg' and {m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "kultur_selten",
              "text": "seltene Kulturen",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff'] and {m_ziel_einh} anyof ['ha'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'dungmang'"
            },
            {
              "value": "legum",
              "text": "Leguminosen",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_ziel_einh} anyof ['ha'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'dungmang'"
            },
            {
              "value": "zf",
              "text": "Zwischenfrucht",
              "visibleIf": "{m_kat} anyof ['zf_us'] and {m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "us",
              "text": "Untersaat",
              "visibleIf": "{m_kat} anyof ['zf_us'] and {m_ziel_fl} anyof ['al', 'lf', 'dk_sk', 'hff'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "gl_einsaat",
              "text": "Grünland/Feldgraseinsaat/-Anlage",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm'] and {m_kat} anyof ['extens', 'flst', 'umwandlg'] and {m_ziel_einh} anyof ['ha'] and {m_ziel_fl} notcontains 'dk_sk' and {m_ziel_fl} notcontains 'wald'"
            },
            {
              "value": "kennart",
              "text": "Nachweis von Kennarten",
              "visibleIf": "{m_klass} anyof ['vns', 'aukm'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'dungmang' and {m_ziel_fl} anyof ['gl', 'biotop_le'] and {m_ziel_einh} anyof ['ha']"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_pfl_saat",
          "title": "Vorgaben an die Art/Mischung des Saatgutes",
          "choices": [
            {
              "value": "o",
              "text": "keine/ohne",
              "visibleIf": "{rv_pfl_art} notcontains 'mischg_def' and {rv_pfl_art} notcontains 'mischg_option'"
            },
            {
              "value": "reg_saat",
              "text": "Regiosaat",
              "visibleIf": "{rv_pfl_art} anyof ['mischg_def', 'mischg_option']"
            },
            {
              "value": "wild_pfl",
              "text": "Wildpflanzen",
              "visibleIf": "{rv_pfl_art} anyof ['mischg_def', 'mischg_option']"
            },
            {
              "value": "kulturart",
              "text": "Kulturarten",
              "visibleIf": "{rv_pfl_art} notcontains 'gl_einsaat' and {rv_pfl_art} notcontains 'kennart'"
            },
            {
              "value": "o_legum",
              "text": "ohne Leguminosen",
              "visibleIf": "{rv_pfl_art} notcontains 'gl_einsaat' and {rv_pfl_art} notcontains 'kennart'"
            },
            {
              "value": "legum_kkoern",
              "text": "kleinkörnige Leguminosen",
              "visibleIf": "{rv_pfl_art} anyof ['legum']"
            },
            {
              "value": "wi_hart",
              "text": "winterhart (Zwischenfrucht mit Standzeit > 3 Monaten/mit spätem Umbruch/frostresistent)",
              "visibleIf": "{rv_pfl_art} anyof ['zf']"
            },
            {
              "value": "wi_abfr",
              "text": "abfrierend (Zwischenfrucht mit Standzeit < 3 Monaten/mit frühem Umbruch/nicht-frostresistent)",
              "visibleIf": "{rv_pfl_art} anyof ['zf']"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_tierart",
          "title": "Verwendung einer bestimmten Tierart",
          "choices": [
            {
              "value": "o",
              "text": "keine/ohne"
            },
            {
              "value": "schaf",
              "text": "Schafe",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "ziege",
              "text": "Ziegen",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "w_bueffel",
              "text": "Wasserbüffel",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "schw",
              "text": "Schweine",
              "visibleIf": "{m_ziel_fl} notcontains 'gl'"
            },
            {
              "value": "gefl",
              "text": "Geflügel"
            },
            {
              "value": "rind_o_miku",
              "text": "Rinder ohne Milchkühe"
            },
            {
              "value": "miku",
              "text": "Milchkühe"
            },
            {
              "value": "pferd",
              "text": "Pferde",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff', 'biotop_le']"
            },
            {
              "value": "biene",
              "text": "Bienen"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_ausschl_basis",
          "title": "Ausschluss von:",
          "choices": [
            {
              "value": "o",
              "text": "keine/ohne"
            },
            {
              "value": "silage",
              "text": "Silage (Maßnahme z.B. Silageverzicht im gesamten Betrieb)",
              "visibleIf": "{m_ziel_fl} anyof ['gl', 'lf', 'hff'] and {m_kat} notcontains 'zf_us' and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "umbruch_herbst",
              "text": "Herbstumbruch",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "bereg",
              "text": "Beregnung",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "entwaess",
              "text": "Entwässerung, Drainage",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'gl', 'lf', 'hff'] and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "meliorat",
              "text": "Melioration (jegliche Be- und Entwässerung der Fläche)",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'gl', 'hff'] and {m_kat} notcontains 'bes_kult_rass'"
            },
            {
              "value": "kultur",
              "text": "Kulturen/Kulturgruppen/Kulturmischungen",
              "visibleIf": "{m_ziel_fl} anyof ['al', 'lf', 'hff'] and {m_kat} notcontains 'zf_us'"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "rv_ausschl_konkr",
          "title": "Ausschluss - Konkretisierung",
          "choices": [
            {
              "value": "o",
              "text": "keine/ohne"
            },
            {
              "value": "ausschluss",
              "text": "alle ausgeschlossen"
            },
            {
              "value": "raps",
              "text": "Raps"
            },
            {
              "value": "mais",
              "text": "Mais"
            },
            {
              "value": "kart",
              "text": "Kartoffeln"
            },
            {
              "value": "wwei",
              "text": "Winterweizen"
            },
            {
              "value": "legum_allg",
              "text": "Leguminosen (allgemein/alle)"
            },
            {
              "value": "legum_gkoern",
              "text": "großkörnige Leguminosen"
            },
            {
              "value": "skul",
              "text": "Sonderkulturen"
            },
            {
              "value": "gem",
              "text": "Gemüse"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "sh_pflg_art",
          "title": "Pflegeart",
          "choices": [
            {
              "value": "verpfl_neuanl_begin",
              "text": "Neuanlage zu Beginn der Verpflichtung"
            },
            {
              "value": "verpfl_pflege",
              "text": "Pflege im Verpflichtungszeitraum"
            },
            {
              "value": "verpfl_neuanl_regelm",
              "text": "regelmäßige Neuanlage im Verpflichtungszeitraum (z.B. überjährige Blühstreifen)"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "sh_pflg_haeuf",
          "title": "Pflege-Häufigkeit",
          "choices": [
            {
              "value": "o",
              "text": "keine Pflege"
            },
            {
              "value": "pflege_einmal",
              "text": "einmalige Pflege bestehender Strukturen"
            },
            {
              "value": "pflege_ann",
              "text": "jährliche Pflege bestehender Strukturen"
            },
            {
              "value": "staffelg_t_ao",
              "text": "zeitlich und räumliche Staffelung"
            },
            {
              "value": "undef",
              "text": "Pflegerhytmus nicht definiert"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_honor",
          "title": "Honorierung",
          "choices": [
            {
              "value": "sto_dif",
              "text": "Differenziert nach Standort / Lagebasiert"
            },
            {
              "value": "flaechen_diff",
              "text": "Differenziert nach Umsetzungsumfang / gestaffelt nach Flächengröße"
            },
            {
              "value": "einh_praem",
              "text": "Einheitsprämie"
            },
            {
              "value": "erg_orient",
              "text": "Ergebnisorientiert"
            },
            {
              "value": "handlg_orient",
              "text": "Handlungsorientiert"
            },
            {
              "value": "invest_foerderg",
              "text": "Investitionsförderung"
            },
            {
              "value": "markt_foerderg",
              "text": "maktorientierter Ausgleich"
            },
            {
              "value": "ertrag_foerederg",
              "text": "ertragsorientierte/ertragsmesszahlbasierte Auszahlung"
            },
            {
              "value": "koop_foerderg",
              "text": "kooperative Förderung"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "m_finanz",
          "title": "Finanzierung",
          "choices": [
            {
              "value": "eler",
              "text": "ELER"
            },
            {
              "value": "gak",
              "text": "GAK"
            },
            {
              "value": "land",
              "text": "Landesmittel"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "abfolge_staffelung",
          "title": "Abfolge/Staffelung",
          "choices": [
            {
              "value": "o",
              "text": "keine/ohne"
            },
            {
              "value": "staffelg_t",
              "text": "zeitliche Staffelung von Arbeitsschritten z.B. Bodenbearbeitung innerhalb von 24h nach organischer Düngung"
            },
            {
              "value": "zeitl_verzicht",
              "text": "zeitliche Vermeidung/Ausschluss von Arbeitsschritten z.B. keine Bodenbearbeitung nach"
            },
            {
              "value": "contact",
              "text": "bitte um Unterstützung"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "last_status",
          "title": "Status",
          "choices": [
            {
              "value": "bearb",
              "text": "in Bearbeitung"
            },
            {
              "value": "contact",
              "text": "Rücksprache"
            },
            {
              "value": "fertig",
              "text": "abgeschlossen"
            }
          ]
        }
      ]
     }
    ]
   };

const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completedPage: 'p-3'
};

const defaultSurveyDATA = {
    "Symptoms": [
      "item1",
      "item3",
      "item5"
    ],
    "Household": true,
    "Notification": true,
    "Travel": true
};

const defaultSurveyConfig = {
    defaultSurveyCSS,
    defaultSurveyDATA,
    defaultSurveyJSON
}

export default defaultSurveyConfig;