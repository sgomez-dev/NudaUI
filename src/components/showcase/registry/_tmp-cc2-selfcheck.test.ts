import { it, expect } from "vitest";
import { confettiCelebrationExtra } from "./confetti-celebration-extra";
import { reconcileComponents } from "./reconcile";
import { auditAll, type AuditIssue } from "@/lib/registry-audit";

it("cc2 self-check: reconciled components pass the integrity audit", () => {
  const reconciled = reconcileComponents(confettiCelebrationExtra);
  const issues = auditAll(reconciled);
  if (issues.length) {
    const grouped = issues.reduce<Record<string, AuditIssue[]>>((acc, i) => {
      (acc[i.id] ??= []).push(i);
      return acc;
    }, {});
    console.error(`\n${issues.length} issue(s) across ${Object.keys(grouped).length} component(s):`);
    for (const [id, list] of Object.entries(grouped)) {
      console.error(`\n- ${id} (${list[0].category})`);
      for (const i of list) console.error(`    [${i.kind}] ${i.detail}`);
    }
  }
  expect(issues).toEqual([]);
});
