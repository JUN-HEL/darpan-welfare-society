"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/icons";
import { EditorialImage } from "@/components/ui/editorial-image";
import { imageSlots } from "@/content/images";
import { focusAreas } from "@/content/work";
import { cn } from "@/lib/utils";

const previewTones = ["clay", "linen", "sand", "forest"] as const;

export function FocusIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = focusAreas[activeIndex];

  return (
    <section className="section focus-section" id="areas-of-work" aria-labelledby="focus-title">
      <div className="shell">
        <div className="section-rail">
          <span className="micro-label">03 / Areas of work</span>
          <span className="section-rail__note">
            A framework for a wide field of care
          </span>
        </div>

        <div className="focus-intro">
          <h2 id="focus-title" className="display-lg">
            Many dimensions of care.{" "}
            <em className="italic-accent">One shared purpose.</em>
          </h2>
          <p>
            Darpan&apos;s social welfare purpose spans health, learning,
            dignity, livelihood, community and the natural world. These are
            areas of focus, not a claim that every area is an active or
            completed programme.
          </p>
        </div>

        <div className="focus-index">
          <div className="focus-index__list" aria-label="Areas of focus">
            {focusAreas.map((area, index) => {
              const active = index === activeIndex;
              return (
                <div
                  key={area.id}
                  className={cn("focus-index__item", active && "is-active")}
                >
                  <button
                    type="button"
                    className="focus-index__button"
                    aria-pressed={active}
                    aria-controls="focus-preview"
                    onClick={() => setActiveIndex(index)}
                    onPointerEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                  >
                    <span className="focus-index__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="focus-index__title">{area.title}</span>
                    <span className="focus-index__arrow">
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </button>

                  <div
                    className="focus-index__mobile-detail"
                    hidden={!active}
                  >
                    <EditorialImage
                      slot={imageSlots[area.imageKey]}
                      aspect="16 / 10"
                      tone={previewTones[index % previewTones.length]}
                      indexLabel={`Focus / ${String(index + 1).padStart(2, "0")}`}
                    />
                    <p>{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <aside
            className="focus-index__preview"
            id="focus-preview"
            aria-label={`Selected focus area: ${activeArea.title}`}
          >
            <EditorialImage
              key={activeArea.id}
              slot={imageSlots[activeArea.imageKey]}
              aspect="4 / 5"
              tone={previewTones[activeIndex % previewTones.length]}
              indexLabel={`Focus / ${String(activeIndex + 1).padStart(2, "0")}`}
              caption={
                <span>
                  {activeArea.title}
                  {activeArea.publiclyNoted ? " · publicly noted focus" : " · focus area"}
                </span>
              }
              captionAside={
                <Link href={`/work#${activeArea.id}`} className="inline-link">
                  Explore
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              }
            />
            <p className="focus-index__description">{activeArea.description}</p>
            <p className="focus-index__disclaimer">
              Programme details and photography will be published only when
              verified and authorised.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
