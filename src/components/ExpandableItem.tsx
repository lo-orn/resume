"use client";

import { useState } from "react";

type Props = {
  title: string;
  meta?: string;
  small?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function ExpandableItem({ title, meta, small, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li className={open ? "item expandable open" : "item expandable"}>
      <h3>
        <button className="item-button" onClick={() => setOpen(!open)} aria-expanded={open}>
          <span className={small ? "item-title small" : "item-title"}>{title}</span>
          <span className="item-right">
            {meta && <span className="item-meta">{meta}</span>}
            <span className="plus" aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div className="item-body">
        <div className="item-body-inner">{children}</div>
      </div>
    </li>
  );
}
