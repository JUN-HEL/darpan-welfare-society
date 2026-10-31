"use client";

import { useEffect, useRef, useState } from "react";
import { EditorialImage } from "@/components/ui/editorial-image";
import { ChevronLeft, ChevronRight, Close } from "@/components/ui/icons";
import {
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery";
import { imageSlots } from "@/content/images";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  items: GalleryItem[];
}

const ratioMap: Record<GalleryItem["ratio"], string> = {
  portrait: "3 / 4",
  landscape: "16 / 11",
  square: "1 / 1",
  tall: "2 / 3",
  panorama: "16 / 7",
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  const selectedIndex = selectedId
    ? filteredItems.findIndex((item) => item.id === selectedId)
    : -1;
  const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

  const openLightbox = (id: string, trigger: HTMLElement) => {
    // Keep the actual card as the return target even when the lightbox is
    // opened programmatically and the browser has not focused the button.
    triggerRef.current = trigger;
    setSelectedId(id);
  };

  const closeLightbox = () => {
    setSelectedId(null);
  };

  const changeImage = (direction: -1 | 1) => {
    if (selectedIndex < 0 || !filteredItems.length) return;
    const nextIndex =
      (selectedIndex + direction + filteredItems.length) %
      filteredItems.length;
    setSelectedId(filteredItems[nextIndex].id);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedItem) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedId === null && triggerRef.current) {
      const trigger = triggerRef.current;
      triggerRef.current = null;
      trigger.focus();
    }
  }, [selectedId]);

  useEffect(() => {
    if (!selectedItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        changeImage(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeImage(-1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, category, filteredItems.length]);

  const selectCategory = (nextCategory: GalleryCategory) => {
    setCategory(nextCategory);
    setSelectedId(null);
  };

  return (
    <div className="gallery-explorer">
      <div className="gallery-filters" aria-label="Filter gallery">
        <div className="gallery-filters__scroll">
          {galleryCategories.map((filter) => {
            const count =
              filter === "All"
                ? items.length
                : items.filter((item) => item.category === filter).length;
            const active = category === filter;
            return (
              <button
                key={filter}
                type="button"
                className={cn("gallery-filter", active && "is-active")}
                aria-pressed={active}
                onClick={() => selectCategory(filter)}
              >
                <span>{filter}</span>
                <span className="gallery-filter__count">{count}</span>
              </button>
            );
          })}
        </div>
        <p className="gallery-count" aria-live="polite">
          {filteredItems.length} photograph{filteredItems.length === 1 ? "" : "s"}
          {category !== "All" ? ` in ${category}` : ""}
        </p>
      </div>

      <div
        className="gallery-grid"
        key={category}
        aria-label={`${category} photographs`}
      >
        {filteredItems.map((item, index) => (
          <figure className="gallery-card" key={item.id}>
            <button
              type="button"
              className="gallery-card__button"
              onClick={(event) => openLightbox(item.id, event.currentTarget)}
              aria-label={`${item.title}. ${item.caption} Open larger photograph.`}
            >
              <EditorialImage
                slot={imageSlots[item.imageKey]}
                aspect={ratioMap[item.ratio]}
                tone={item.tone ?? "linen"}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                indexLabel={`Gallery / ${String(index + 1).padStart(2, "0")}`}
                overlay={
                  <span className="gallery-card__overlay" aria-hidden="true">
                    <span>View photograph</span>
                    <span className="gallery-card__expand">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </span>
                  </span>
                }
              />
            </button>
            <figcaption className="gallery-card__caption">
              <span className="gallery-card__category">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onClose={closeLightbox}
        onCancel={closeLightbox}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}
      >
        {selectedItem ? (
          <div className="lightbox__panel">
            <div className="lightbox__topbar">
              <span className="lightbox__index">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(filteredItems.length).padStart(2, "0")}
              </span>
              <span className="lightbox__category">{selectedItem.category}</span>
              <button
                type="button"
                className="lightbox__close"
                onClick={closeLightbox}
                aria-label="Close photograph"
              >
                <Close size={21} aria-hidden="true" />
              </button>
            </div>

            <div className="lightbox__media">
              <EditorialImage
                slot={imageSlots[selectedItem.imageKey]}
                fill
                tone={selectedItem.tone ?? "linen"}
                sizes="90vw"
                indexLabel={`Lightbox / ${String(selectedIndex + 1).padStart(2, "0")}`}
              />
            </div>

            <div className="lightbox__footer">
              <button
                type="button"
                className="lightbox__nav"
                onClick={() => changeImage(-1)}
                aria-label="Previous photograph"
              >
                <ChevronLeft size={22} aria-hidden="true" />
                <span>Previous</span>
              </button>

              <div className="lightbox__caption">
                <h2 id="lightbox-title">{selectedItem.title}</h2>
                <p>{selectedItem.caption}</p>
              </div>

              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={() => changeImage(1)}
                aria-label="Next photograph"
              >
                <span>Next</span>
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>

            <p className="lightbox__note">
              Use the arrow keys to move between photographs. Press Escape to
              close.
            </p>
          </div>
        ) : (
          <div className="lightbox__fallback">
            <p>Loading photograph…</p>
          </div>
        )}
      </dialog>
    </div>
  );
}
