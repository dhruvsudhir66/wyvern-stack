import { Bot, Code2, Layers3, Zap, Smartphone, Boxes } from "lucide-react";

type ServiceIconProps = {
  type: "bot" | "code" | "layers" | "zap" | "smartphone" | "boxes";
  size?: number;
  className?: string;
};

const icons = {
  bot: Bot,
  code: Code2,
  layers: Layers3,
  zap: Zap,
  smartphone: Smartphone,
  boxes: Boxes,
};

export default function ServiceIcon({
  type,
  size = 24,
  className,
}: ServiceIconProps) {
  const Icon = icons[type];

  return <Icon size={size} className={className} aria-hidden="true" />;
}
