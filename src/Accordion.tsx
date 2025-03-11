import * as React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { AccordionWrapper } from "./Accordion.style";

export type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionWrapper>
      <button onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        {isOpen ? <ChevronUp size={"3rem"} /> : <ChevronDown size={"3rem"} />}
      </button>
      {isOpen && <div>{children}</div>}
    </AccordionWrapper>
  );
};
