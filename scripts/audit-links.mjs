const base = process.env.AUDIT_BASE_URL || "http://localhost:3400";
const starts = ["/", "/usa-company-registration", "/contact"];
const links = new Set(starts);
for (const route of starts) {
  const html = await (await fetch(base + route)).text();
  for (const match of html.matchAll(/href="(\/[^"#]*)[^\"]*"/g)) links.add(match[1] || "/");
}
const failures = [];
for (const route of links) {
  const response = await fetch(base + route, { redirect: "manual" });
  if (![200, 307, 308].includes(response.status)) failures.push(`${route}: ${response.status}`);
}
const root = await (await fetch(base)).text();
console.log(`root homepage: ${root.includes("Start &amp; Grow Your Business") || root.includes("Start & Grow Your Business") ? "ok" : "missing"}`);
console.log(`internal links audited: ${links.size}`);
if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1; }
else console.log("all internal links healthy");
