import { Fragment } from "@/generated/prisma";
import { useState } from "react";
import { ExternalLink, RefreshCcw, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";
interface Props {
  data: Fragment;
}

export function FragmentWeb({ data }: Props) {
  const [fragmentKey, setFragmentKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const onRefresh = () => {
    setFragmentKey((prev) => prev + 1);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(data.sandboxUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-2 border-b bg-sidebar flex items-center gap-x-2">
        <Hint label="Refresh " side="bottom">
          <Button size={"sm"} variant={"outline"} onClick={onRefresh}>
            <RefreshCcw />
          </Button>
        </Hint>

        <Hint label="click to copy" side="bottom">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={handleCopy}
            className="flex-1 justify-start text-start font-normal"
            disabled={!data.sandboxUrl || copied}
          >
            <span className="truncate">{data.sandboxUrl}</span>
          </Button>
        </Hint>

        <Hint label="Open in a new Tab" side="bottom" align="start">
          <Button
            size={"sm"}
            disabled={!data.sandboxUrl}
            variant={"outline"}
            onClick={() => {
              if (!data.sandboxUrl) return;
              window.open(data.sandboxUrl, "_blank");
            }}
          >
            <ExternalLink />
          </Button>
        </Hint>
      </div>
      <iframe
        key={fragmentKey}
        className="w-full h-full"
        sandbox="allow-forms allow-scripts allow-same-origin"
        loading="lazy"
        src={data.sandboxUrl}
      />
    </div>
  );
}
