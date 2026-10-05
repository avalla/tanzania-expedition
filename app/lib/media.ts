export type MissionMediaKind = "image" | "video";

export type MissionMedia = {
  id: string;
  kind: MissionMediaKind;
  missionYear: number;
  location?: string;
  localSrc: string;
  posterSrc?: string;
  sourceUrl?: string;
  sourcePlatform?: "instagram" | "facebook" | "original";
  alt: {
    it: string;
    en: string;
    es: string;
    fr: string;
  };
  caption: {
    it: string;
    en: string;
    es: string;
    fr: string;
  };
};

/**
 * Only verified media should be added here.
 *
 * Never hotlink temporary Meta CDN URLs: store owned/approved assets locally,
 * in R2, or in Cloudflare Stream and keep the original post URL as provenance.
 */
export const missionMedia: MissionMedia[] = [];
