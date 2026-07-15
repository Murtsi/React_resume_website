from __future__ import annotations

import argparse
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path("C:/Windows/Fonts")

NAVY = colors.HexColor("#17324D")
BLUE = colors.HexColor("#2563EB")
TEAL = colors.HexColor("#0F766E")
INK = colors.HexColor("#17212B")
MUTED = colors.HexColor("#536170")
LINE = colors.HexColor("#D6DEE7")
PALE = colors.HexColor("#F3F7FB")
WHITE = colors.white


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "arial.ttf")))
    pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "arialbd.ttf")))
    pdfmetrics.registerFont(TTFont("Arial-Italic", str(FONT_DIR / "ariali.ttf")))


def build_styles() -> dict[str, ParagraphStyle]:
    sample = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=25,
            leading=29,
            textColor=WHITE,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=10.4,
            leading=13,
            textColor=colors.HexColor("#DCEBFA"),
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=7.8,
            leading=10.5,
            textColor=MUTED,
            alignment=TA_CENTER,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=10.5,
            leading=13,
            textColor=NAVY,
            spaceBefore=3,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=8.5,
            leading=11.5,
            textColor=INK,
        ),
        "profile": ParagraphStyle(
            "Profile",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=8.7,
            leading=12,
            textColor=INK,
        ),
        "skill_label": ParagraphStyle(
            "SkillLabel",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=8.2,
            leading=10.6,
            textColor=NAVY,
        ),
        "skill_value": ParagraphStyle(
            "SkillValue",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=8.2,
            leading=10.6,
            textColor=INK,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=9.3,
            leading=11.5,
            textColor=INK,
        ),
        "date": ParagraphStyle(
            "Date",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=8.2,
            leading=11,
            textColor=TEAL,
            alignment=TA_RIGHT,
        ),
        "company": ParagraphStyle(
            "Company",
            parent=sample["Normal"],
            fontName="Arial-Italic",
            fontSize=8.1,
            leading=10.2,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=8.15,
            leading=10.7,
            leftIndent=8,
            firstLineIndent=-8,
            textColor=INK,
            spaceAfter=1.5,
        ),
        "project_title": ParagraphStyle(
            "ProjectTitle",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=9.2,
            leading=11.5,
            textColor=INK,
        ),
        "project_status": ParagraphStyle(
            "ProjectStatus",
            parent=sample["Normal"],
            fontName="Arial-Bold",
            fontSize=7.8,
            leading=10.5,
            textColor=TEAL,
            alignment=TA_RIGHT,
        ),
        "project_body": ParagraphStyle(
            "ProjectBody",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=8.25,
            leading=11.1,
            textColor=INK,
            spaceAfter=2,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=7.7,
            leading=10,
            textColor=MUTED,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=7.2,
            leading=9,
            textColor=MUTED,
            alignment=TA_CENTER,
        ),
    }


def section_title(text: str, styles: dict[str, ParagraphStyle]) -> list:
    return [
        Spacer(1, 2.2 * mm),
        Paragraph(text.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.7, color=LINE, spaceAfter=3.2 * mm),
    ]


def experience_entry(
    role: str,
    date: str,
    company: str,
    bullets: list[str],
    styles: dict[str, ParagraphStyle],
) -> KeepTogether:
    heading = Table(
        [[Paragraph(role, styles["role"]), Paragraph(date, styles["date"])]],
        colWidths=[135 * mm, 32 * mm],
        hAlign="LEFT",
    )
    heading.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    items = [heading, Paragraph(company, styles["company"])]
    items.extend(Paragraph(f"- {bullet}", styles["bullet"]) for bullet in bullets)
    items.append(Spacer(1, 2 * mm))
    return KeepTogether(items)


def project_entry(
    name: str,
    status: str,
    description: str,
    tech: str,
    styles: dict[str, ParagraphStyle],
) -> KeepTogether:
    heading = Table(
        [[Paragraph(name, styles["project_title"]), Paragraph(status, styles["project_status"])]],
        colWidths=[132 * mm, 35 * mm],
        hAlign="LEFT",
    )
    heading.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5 * mm),
            ]
        )
    )
    return KeepTogether(
        [
            heading,
            Paragraph(description, styles["project_body"]),
            Paragraph(tech, styles["meta"]),
            Spacer(1, 3.3 * mm),
        ]
    )


def draw_page(canvas, doc) -> None:
    canvas.saveState()
    canvas.setTitle("CV - Antti Murtokangas")
    canvas.setAuthor("Antti Murtokangas")
    canvas.setSubject("Automaatiotekniikan opiskelija ja Technical Support")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(21 * mm, 15 * mm, A4[0] - 21 * mm, 15 * mm)
    canvas.setFont("Arial", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(21 * mm, 9.5 * mm, "Antti Murtokangas")
    canvas.drawRightString(A4[0] - 21 * mm, 9.5 * mm, f"Sivu {doc.page}")
    canvas.restoreState()


def build_cv(output_path: Path) -> None:
    register_fonts()
    styles = build_styles()
    output_path.parent.mkdir(parents=True, exist_ok=True)

    doc = BaseDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=21 * mm,
        rightMargin=21 * mm,
        topMargin=17 * mm,
        bottomMargin=20 * mm,
        title="CV - Antti Murtokangas",
        author="Antti Murtokangas",
        subject="Automaatiotekniikan opiskelija ja Technical Support",
    )
    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        id="cv-frame",
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates(PageTemplate(id="cv", frames=[frame], onPage=draw_page))

    story = []

    header = Table(
        [
            [Paragraph("Antti Murtokangas", styles["name"])],
            [Paragraph("Automaatiotekniikan opiskelija ja Technical Support", styles["title"])],
        ],
        colWidths=[doc.width],
        hAlign="LEFT",
    )
    header.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), NAVY),
                ("LEFTPADDING", (0, 0), (-1, -1), 8 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8 * mm),
                ("TOPPADDING", (0, 0), (-1, 0), 5.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, 0), 0),
                ("TOPPADDING", (0, 1), (-1, 1), 0),
                ("BOTTOMPADDING", (0, 1), (-1, 1), 5.5 * mm),
            ]
        )
    )
    story.extend(
        [
            header,
            Spacer(1, 3.2 * mm),
            Paragraph(
                "Seinäjoki, Suomi &nbsp; | &nbsp; +358 41 753 2487 &nbsp; | &nbsp; "
                '<link href="mailto:antti.murtsi@gmail.com" color="#536170">antti.murtsi@gmail.com</link>'
                " &nbsp; | &nbsp; "
                '<link href="https://www.anttimurtokangas.com" color="#536170">anttimurtokangas.com</link>'
                " &nbsp; | &nbsp; "
                '<link href="https://github.com/Murtsi" color="#536170">GitHub</link>'
                " &nbsp; | &nbsp; "
                '<link href="https://www.linkedin.com/in/antti-murtokangas-562725158/" color="#536170">LinkedIn</link>',
                styles["contact"],
            ),
        ]
    )

    story.extend(section_title("Profiili", styles))
    profile = Table(
        [
            [
                Paragraph(
                    "SEAMKin automaatiotekniikan opiskelija ja kuituverkkopalveluiden teknisen tuen "
                    "työntekijä. Ratkon työssäni verkon käyttöönottoon, valvontaan ja vianhakuun "
                    "liittyviä ongelmia. Vapaa-ajalla rakennan TypeScript- ja Python-sovelluksia. "
                    "Tavoitteeni on siirtyä AI- ja LLM-turvallisuuden tehtäviin. Kehitteillä oleva "
                    "Agent Security Lab keskittyy LLM-agenttien syötteiden, toimintarajojen ja "
                    "työkalukutsujen turvallisuuteen.",
                    styles["profile"],
                )
            ]
        ],
        colWidths=[doc.width],
    )
    profile.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LINEBEFORE", (0, 0), (0, -1), 3, BLUE),
                ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5 * mm),
            ]
        )
    )
    story.append(profile)

    story.extend(section_title("Ydinosaaminen", styles))
    skill_rows = [
        (
            "Verkot ja tekninen tuki",
            "Huawei iMaster, Nokia Altiplano (OSS), Optopro Fiber, Keycom ja OLT/ONT-vianhaku",
        ),
        (
            "Ohjelmistokehitys",
            "TypeScript, React, Python, FastAPI, PostgreSQL, Railway ja Vercel",
        ),
        (
            "AI ja LLM-turva",
            "LangGraph, agenttityönkulut sekä prompt injection- ja työkalukutsuriskit (oppimisfokus)",
        ),
        (
            "Sovellusturvallisuus",
            "Vastuullinen haavoittuvuusraportointi, valtuutettu testaus ja yksityinen Python-työkalu",
        ),
        (
            "Automaatio",
            "Codesys V3.5, EPLAN Electric P8, SCADA, Cognex ja Visual Components",
        ),
    ]
    skills_table = Table(
        [
            [Paragraph(label, styles["skill_label"]), Paragraph(value, styles["skill_value"])]
            for label, value in skill_rows
        ],
        colWidths=[42 * mm, 125 * mm],
        hAlign="LEFT",
    )
    skills_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 1.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5 * mm),
                ("LINEBELOW", (0, 0), (-1, -2), 0.35, LINE),
            ]
        )
    )
    story.append(skills_table)

    story.extend(section_title("Työkokemus", styles))
    story.extend(
        [
            experience_entry(
                "Technical Support",
                "2024 - nykyhetki",
                "Valoo",
                [
                    "Kuituverkon käyttöönotto, valvonta ja vianhaku.",
                    "Verkonhallinta iMaster-, Altiplano-, Optopro Fiber- ja Keycom-alustoilla.",
                    "Tekninen asiakastuki sekä dokumentointi yhteistyössä asentajien ja teknisten tiimien kanssa.",
                ],
                styles,
            ),
            experience_entry(
                "Tuotannonvalvoja",
                "2023",
                "Olvi Oyj",
                [
                    "Automatisoidun tuotantolinjan ja ohjausjärjestelmien valvonta sekä prosessihäiriöiden vianhaku.",
                    "Laitteiston säätö, laadunvalvonta ja poikkeamien dokumentointi.",
                ],
                styles,
            ),
            experience_entry(
                "Tuotantolinjan operaattori",
                "kesä 2022",
                "Keitele Timber Oy",
                [
                    "Automatisoidun tuotantolinjan ohjaus, valvonta ja häiriötilanteiden selvittäminen.",
                ],
                styles,
            ),
            experience_entry(
                "Kokoonpanija",
                "kesät 2018 ja 2021",
                "Tikli Group Oy",
                [
                    "Savunpoistojärjestelmien kokoonpano ja testaus teknisen dokumentaation mukaisesti.",
                ],
                styles,
            ),
            experience_entry(
                "Tietotekninen tuki",
                "2017 - 2018",
                "Alajärven lukio",
                [
                    "Palvelinten, Google Workspacen ja loppukäyttäjien tekninen tuki.",
                ],
                styles,
            ),
        ]
    )

    story.append(PageBreak())
    story.extend(section_title("Valitut projektit", styles))
    story.extend(
        [
            project_entry(
                "Agent Security Lab",
                "kehitteillä",
                "Paikallinen konsepti LLM-agenttien epäluotettavien syötteiden, toimintarajojen ja "
                "työkalukutsujen turvallisuuden tutkimiseen. Projekti on kehitteillä, ja sen nykyinen "
                "painopiste on uhkamallien ja turvallisten toimintatapojen jäsentämisessä.",
                "AI/LLM security | prompt injection | tool misuse | agent boundaries",
                styles,
            ),
            project_entry(
                "Tärppi",
                "live",
                "React- ja TypeScript-sovellus, joka seuraa Kide.appin ja Tiketin tapahtumia, varaa "
                "valittuja lippuja ostoskoriin myynnin auetessa ja lähettää Telegram-ilmoituksia.",
                "TypeScript | React | PostgreSQL | Railway | Vercel | tarppi.site",
                styles,
            ),
            project_entry(
                "KauppaAgentit",
                "tutkimusprojekti",
                "TradingAgents-kehyksen suomalainen sovitus OMXH-markkina-analyysin kokeiluun. "
                "Projektissa on suomalaiset promptit, CLI-työnkulut, PostgreSQL-tallennus ja arviointiajoja.",
                "Python | PostgreSQL | agenttityönkulut | GitHub",
                styles,
            ),
            project_entry(
                "Pentesting Tool",
                "yksityinen",
                "Python CLI valtuutetuissa ympäristöissä tehtäviin harjoituksiin. Työkalu kokoaa "
                "perustason tiedustelun, palvelutarkistukset, JWT-tarkistuksen ja raportoinnin samaan työnkulkuun.",
                "Python | authorized testing | private repository",
                styles,
            ),
        ]
    )

    story.extend(section_title("Käytännön tietoturvanäyttö", styles))
    security_box = Table(
        [
            [
                Paragraph(
                    "Tunnistin julkisen jäsenyyden maksuprosessin tarjouskoodin tarkistuksesta ilman "
                    "kirjautumista hyödynnettävän SQL-injektion. Löydös olisi mahdollistanut maksun "
                    "ohittamisen. Raportoin havainnon vastuullisesti palvelun ylläpitäjälle.",
                    styles["profile"],
                )
            ]
        ],
        colWidths=[doc.width],
    )
    security_box.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LINEBEFORE", (0, 0), (0, -1), 3, TEAL),
                ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5 * mm),
            ]
        )
    )
    story.append(security_box)

    story.extend(section_title("Koulutus", styles))
    story.extend(
        [
            experience_entry(
                "Insinööri (AMK), automaatiotekniikka",
                "kesken",
                "SEAMK - Seinäjoen ammattikorkeakoulu",
                ["Codesys V3.5, EPLAN Electric P8, SCADA, Cognex ja Visual Components."],
                styles,
            ),
            experience_entry(
                "Automaatio tuulivoima-alalla",
                "2024",
                "Täydennyskoulutus",
                [],
                styles,
            ),
            experience_entry(
                "Johtajakoulutus (AUK)",
                "2019 - 2020",
                "Puolustusvoimat",
                [],
                styles,
            ),
            experience_entry(
                "Liiketalouden tieto- ja viestintätekniikan perustutkinto",
                "2015 - 2018",
                "Järviseudun ammatti-instituutti",
                [],
                styles,
            ),
        ]
    )

    story.extend(section_title("Sertifikaatti ja kielet", styles))
    info_table = Table(
        [
            [
                Paragraph("Sertifikaatti", styles["skill_label"]),
                Paragraph("Microsoft Certified: Azure Fundamentals (AZ-900)", styles["skill_value"]),
            ],
            [
                Paragraph("Kielet", styles["skill_label"]),
                Paragraph("Suomi (äidinkieli) | Englanti (työkielitaso)", styles["skill_value"]),
            ],
        ],
        colWidths=[34 * mm, 133 * mm],
        hAlign="LEFT",
    )
    info_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 1.5 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5 * mm),
            ]
        )
    )
    story.append(info_table)

    doc.build(story)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Antti Murtokangas's CV PDF.")
    parser.add_argument(
        "--output",
        type=Path,
        default=ROOT / "output" / "pdf" / "CV-Antti-Murtokangas.pdf",
        help="Destination PDF path.",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    build_cv(args.output.resolve())
