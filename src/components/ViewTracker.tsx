"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

type Props = {
  event: string;
  data?: any;
};

export default function ViewTracker({ event, data }: Props) {
  useEffect(() => {
    trackEvent(event, data);
  }, []);

  return null;
}