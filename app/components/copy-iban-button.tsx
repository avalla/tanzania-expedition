import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";

export function CopyIbanButton({
  iban,
  copyLabel,
  copiedLabel,
}: {
  iban: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(iban.replace(/\s/g, ""));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Button type="button" variant="light" size="sm" onClick={handleCopy}>
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? copiedLabel : copyLabel}
    </Button>
  );
}
