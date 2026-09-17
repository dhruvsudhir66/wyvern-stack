import { Bot, Code2, Layers, Zap } from "lucide-react";
import type { Service } from "@/app/lib/data";

export default function ServiceIcon({
  type,
  size = 24,
}: {
  type: Service["icon"];
  size?: number;
}) {
  if (type === "bot") return <Bot size={size} />;
  if (type === "code") return <Code2 size={size} />;
  if (type === "layers") return <Layers size={size} />;
  return <Zap size={size} />;
}
