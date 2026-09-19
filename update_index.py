import re

with open('src/routes/index.tsx', 'r') as f:
    content = f.read()

# Fix H1 (multi-line)
content = re.sub(
    r'<h1 className="mt-6 text-4xl font-bold leading-\[1.08\] sm:text-5xl lg:text-6xl">\s*Dental Implant Care for\s*<span className="text-gradient-brand">Patients Across Odisha</span>\s*</h1>',
    r'<h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">\n              Dental Implants in\n              <span className="text-gradient-brand"> Bhubaneswar, Odisha</span>\n            </h1>',
    content
)

# Fix Hero Paragraph (multi-line)
content = re.sub(
    r'<p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">\s*Start with a free online consultation with an experienced implantologist and receive a\s*preliminary treatment roadmap. Your final treatment plan is confirmed after clinical\s*examination, with implant treatment at {TREATMENT_LOCATION}.\s*</p>',
    r'<p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">\n              Looking for a dental implant specialist near you in Odisha? Start with a free online consultation and receive a preliminary roadmap. High-quality, affordable care at CARE Hospital, Bhubaneswar.\n            </p>',
    content
)

# Fix the broken SectionHeading title (remove JSX from string prop)
content = content.replace(
    'title="Dental Implants in <span className="text-gradient-brand">Bhubaneswar, Odisha</span>"',
    'title="Trusted Dental Implant Care Across Odisha"'
)

# Add Success Rate FAQ
new_faq = """  {
    q: "What is the success rate of dental implants?",
    a: "Dental implants have a high success rate, typically over 95% to 98%. Our specialists use 3D CBCT digital planning to ensure precise placement and long-term stability.",
  },
];"""
content = content.replace('];', new_faq, 1) # This is a bit risky if there are many ];, but let's be more specific.

# Actually let's target the FAQS array specifically.
faqs_match = re.search(r'const FAQS = \[(.*?)\];', content, re.DOTALL)
if faqs_match:
    faqs_content = faqs_match.group(1)
    if "What is the success rate" not in faqs_content:
        new_faqs_content = faqs_content.strip() + ',\n  {\n    q: "What is the success rate of dental implants?",\n    a: "Dental implants have a high success rate, typically over 95% to 98%. Our specialists use 3D CBCT digital planning to ensure precise placement and long-term stability.",\n  },\n'
        content = content.replace(faqs_match.group(0), f'const FAQS = [\n  {new_faqs_content}];')

# Add Internal Links to AcrossOdisha
links_html = """
        <div className="mt-16 border-t border-border/50 pt-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Specialist Consultations for Patients In:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <Link to="/dental-implants-cuttack/" className="hover:text-primary">Cuttack</Link>
            <Link to="/dental-implants-puri/" className="hover:text-primary">Puri</Link>
            <Link to="/dental-implants-berhampur/" className="hover:text-primary">Berhampur</Link>
            <Link to="/dental-implants-sambalpur/" className="hover:text-primary">Sambalpur</Link>
            <Link to="/dental-implants-rourkela/" className="hover:text-primary">Rourkela</Link>
            <Link to="/dental-implants-balasore/" className="hover:text-primary">Balasore</Link>
            <Link to="/dental-implants-jharsuguda/" className="hover:text-primary">Jharsuguda</Link>
            <Link to="/dental-implants-baripada/" className="hover:text-primary">Baripada</Link>
            <Link to="/dental-implants-angul/" className="hover:text-primary">Angul</Link>
          </div>
        </div>
      </div>
    </section>"""

content = content.replace('      </div>\n    </section>', links_html, 1) # Replace the FIRST occurrence, which is Journey? No, let's be careful.

with open('src/routes/index.tsx', 'w') as f:
    f.write(content)
