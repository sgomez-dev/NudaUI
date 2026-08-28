import { MARKDOWN_CONTENT_TYPE } from "@/lib/accept";
import { renderDocMarkdown } from "@/lib/doc";
import { agentInstructionsDoc } from "@/lib/agent-guidance";

/**
 * /agent-instructions.md — the when-to-use brief for AI agents.
 *
 * `llms.txt` is an index of the site; this is the operating manual. It names
 * the jobs NudaUI is right for, the jobs it is wrong for, the exact call
 * sequence per task, and the rules of engagement — the specifics that let an
 * agent decide whether to reach for this site at all.
 *
 * Served as a real `.md` URL (not negotiated) so it can be linked, cited, and
 * fetched by clients that send no Accept header at all.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  return new Response(renderDocMarkdown(agentInstructionsDoc()), {
    headers: {
      "Content-Type": MARKDOWN_CONTENT_TYPE,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
