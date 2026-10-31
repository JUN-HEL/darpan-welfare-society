import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageSlot } from "@/content/images";
import { cn } from "@/lib/utils";

export type PlaceholderTone = "linen" | "sand" | "clay" | "forest" | "white";

interface EditorialImageProps {
  slot: ImageSlot;
  alt?: string;
  aspect?: string;
  tone?: PlaceholderTone;
  className?: string;
  mediaClassName?: string;
  caption?: ReactNode;
  captionAside?: ReactNode;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  variant?: "centre" | "corner";
  indexLabel?: string;
  overlay?: ReactNode;
}

export function EditorialImage({
  slot,
  alt,
  aspect = "4 / 5",
  tone = "linen",
  className,
  mediaClassName,
  caption,
  captionAside,
  priority = false,
  sizes = "100vw",
  fill = false,
  variant = "centre",
  indexLabel = "DWS / visual archive",
  overlay,
}: EditorialImageProps) {
  const imageAlt = alt ?? slot.alt;

  return (
    <figure className={cn("editorial-image", className)}>
      <div
        className={cn(
          "media",
          fill && "media--fill",
          mediaClassName,
        )}
        style={fill ? undefined : { aspectRatio: aspect }}
      >
        {slot.src ? (
          <Image
            src={slot.src}
            alt={imageAlt}
            fill
            priority={priority}
            sizes={sizes}
            className="media__image"
            style={{ objectPosition: slot.objectPosition ?? "center" }}
          />
        ) : (
          <div
            className={cn(
              "media__placeholder",
              `media__placeholder--${tone}`,
              variant === "corner" && "media__placeholder--corner",
            )}
            role="img"
            aria-label={`Photography placeholder: ${slot.label}. ${imageAlt}`}
          >
            <span className="media__grain" aria-hidden="true" />
            <span className="media__frame" aria-hidden="true" />
            <span className="media__topline" aria-hidden="true">
              <span>Darpan / visual archive</span>
              <span>{indexLabel}</span>
            </span>

            <span className="media__label-group">
              <span className="media__mark" aria-hidden="true">
                <svg viewBox="0 0 42 42" fill="none">
                  <path
                    d="M7 35V19.5C7 11.492 13.268 5 21 5s14 6.492 14 14.5V35"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle cx="21" cy="26" r="2" fill="currentColor" />
                </svg>
              </span>
              <span className="media__label">{slot.label}</span>
              <span className="media__note">Photograph to be supplied</span>
            </span>

            <span className="media__baseline" aria-hidden="true">
              <span>Darpan Welfare Society</span>
              <span>Uttarakhand, India</span>
            </span>
          </div>
        )}
        {overlay}
      </div>

      {(caption || captionAside) && (
        <figcaption className="editorial-image__caption">
          {caption ? <span>{caption}</span> : <span />}
          {captionAside ? (
            <span className="editorial-image__caption-aside">{captionAside}</span>
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}
