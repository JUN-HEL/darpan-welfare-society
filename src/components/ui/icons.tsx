interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

function iconProps({ size = 20, className, strokeWidth = 1.6 }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M3 7h18M3 17h18" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M8.2 3.5 10 7.8 7.8 9.7c1.1 2.6 3 4.5 5.6 5.6l1.9-2.2 4.3 1.8v3.3c0 .8-.6 1.4-1.4 1.5C9.6 20.3 3.7 14.4 3.2 5.2c0-.8.6-1.5 1.4-1.5h3.4Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.4-4.8a8.4 8.4 0 1 1 16-4Z" />
      <path d="M8.7 8.5c.3-.5.6-.6 1-.6h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.2.7l-.6.6c.6 1.2 1.5 2.1 2.7 2.7l.6-.7c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5 0 1.3-1 2.3-2.3 2.4-4 0-7.2-3.2-7.2-7.1 0-.5.1-.9.4-1.2Z" />
    </svg>
  );
}

export function QuoteMark(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M10 11H5.5A2.5 2.5 0 0 1 3 8.5V6h6v6c0 4-2 6-5 7" />
      <path d="M21 11h-4.5A2.5 2.5 0 0 1 14 8.5V6h6v6c0 4-2 6-5 7" />
    </svg>
  );
}
