"use client";

import { useHydration } from "@/lib/constants/useHydration";
import { Suspense } from "react";
import { formatDate, formatTime } from "./format";

type Props = React.ComponentProps<"time"> & {
  date: Date | string | number;
  hydratedSuffix?: React.ReactNode;
};

export function LocalDate({ date, hydratedSuffix = null, ...props }: Props) {
  const iso = new Date(date).toISOString();
  const hydrated = useHydration();
  return (
    <Suspense key={hydrated ? "local" : "utc"}>
      <time dateTime={iso} title={iso} {...props}>
        {formatDate(date)}
        {hydrated ? hydratedSuffix : " (UTC)"}
      </time>
    </Suspense>
  );
}

export function LocalTime({ date, hydratedSuffix = null, ...props }: Props) {
  const iso = new Date(date).toISOString();
  const hydrated = useHydration();
  return (
    <Suspense key={hydrated ? "local" : "utc"}>
      <time dateTime={iso} title={iso} {...props}>
        {formatDate(date)}
        {hydrated ? hydratedSuffix : " (UTC)"}
      </time>
    </Suspense>
  );
}

export function LocalDateTime({
  date,
  separator = ", ",
  ...props
}: Props & {
  separator?: string;
}) {
  const iso = new Date(date).toISOString();
  const hydrated = useHydration();
  return (
    <Suspense key={hydrated ? "local" : "utc"}>
      <time dateTime={iso} title={iso} {...props}>
        {formatDate(date)}
        {separator}
        {formatTime(date)}
      </time>
    </Suspense>
  );
}
