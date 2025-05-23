import { useLoaderData } from "react-router";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const { details } = useLoaderData();
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {details.map((section) => (
        <AccordionItem key={section._id} title={section.name.toUpperCase()}>
          <ul className="list-none space-y-2">
            {section.information.map((info) => (
              <li key={info._id}>
                <strong>{info.name}:</strong>{" "}
                {info.sub_information.map((sub) => sub.description).join(" / ")}
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
