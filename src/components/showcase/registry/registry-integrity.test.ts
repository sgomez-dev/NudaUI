import { it, expect } from "vitest";
import { categories } from "./categories";
import { auditAll, type AuditIssue } from "@/lib/registry-audit";

it("every registry component is self-contained (preview === copyable code)", () => {
  const all = categories.flatMap((c) => c.components);
  const issues = auditAll(all);
  if (issues.length) {
    const grouped = issues.reduce<Record<string, AuditIssue[]>>((acc, i) => {
      (acc[i.id] ??= []).push(i);
      return acc;
    }, {});
    console.error(`\n${issues.length} integrity issue(s) across ${Object.keys(grouped).length} component(s):`);
    for (const [id, list] of Object.entries(grouped)) {
      console.error(`\n• ${id} (${list[0].category})`);
      for (const i of list) console.error(`    [${i.kind}] ${i.detail}`);
    }
  }
  expect(issues).toEqual([]);
});
