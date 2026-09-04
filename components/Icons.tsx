import type { SVGProps } from "react";

export type IconName =
  | "building"
  | "bank"
  | "document"
  | "shield"
  | "mail"
  | "receipt"
  | "book"
  | "pin"
  | "checklist"
  | "attachment"
  | "form"
  | "calendar"
  | "arrow";

const paths: Record<IconName, React.ReactNode> = {
  building: <><path d="M4 20V6h10v14M2 20h20M7 9h4M7 12h4M7 15h4M16 10h4v10M18 13v.01M18 16v.01" /></>,
  bank: <><path d="m3 10 9-6 9 6"/><path d="M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M3 20h18M4 17h16"/></>,
  document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h5"/></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6z"/><path d="m9 12 2 2 4-5"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/></>,
  book: <><path d="M4 5c3-1 5-.5 8 1v15c-3-1.5-5-2-8-1zM20 5c-3-1-5-.5-8 1v15c3-1.5 5-2 8-1z"/></>,
  pin: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
  checklist: <><path d="m4 6 1.5 1.5L8 5M11 6h9M4 12l1.5 1.5L8 11M11 12h9M4 18l1.5 1.5L8 17M11 18h9"/></>,
  attachment: <><path d="M8 7v10a4 4 0 0 0 8 0V6a3 3 0 0 0-6 0v10a2 2 0 0 0 4 0V8"/></>,
  form: <><path d="M5 3h11v18H5zM8 7h5M8 11h5M8 15h3"/><path d="M19 12v7m-3-3h6"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></>,
  arrow: <><path d="M5 12h14m-5-5 5 5-5 5"/></>,
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

export function Chevron({ open = false }: { open?: boolean }) {
  return <svg className={open ? "chevron open" : "chevron"} viewBox="0 0 20 20" aria-hidden="true"><path d="m6 8 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
