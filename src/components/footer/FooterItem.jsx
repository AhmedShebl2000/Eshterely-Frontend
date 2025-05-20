import { MdKeyboardArrowDown } from "react-icons/md";
import FooterItemMenu from "./FooterItemMenu";

function FooterItem({ children, id, menuArr, selectedID, setSelectedID }) {
  console.log(id);

  //Derived state to get currently selected menu
  const showMenu = selectedID === id ? true : false;

  function toggleMenu(id) {
    setSelectedID((currentId) => (currentId === id ? null : id));
  }

  return (
    <div className="flex flex-col">
      <div
        onClick={() => toggleMenu(id)}
        className="flex justify-between items-center w-6/7 cursor-pointer min-w-[135px]"
      >
        <p>{children}</p>
        <div className="flex justify-center items-center">
          <MdKeyboardArrowDown />
        </div>
      </div>
      {showMenu && <FooterItemMenu menuArr={menuArr} />}
    </div>
  );
}

export default FooterItem;
