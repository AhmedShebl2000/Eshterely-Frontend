import { useNavigate } from "react-router";

function FooterItemMenu({ menuArr }) {
  const navigate = useNavigate();

  function handleClick(menuItem) {
    console.log(menuItem);
    if (menuItem === "FAQ") {
      navigate("/faq");
    }
  }

  if (menuArr)
    return menuArr.map((menuItem) => (
      <div
        onClick={() => handleClick(menuItem)}
        className="mt-2 cursor-pointer text-sm"
        key={menuItem}
      >
        {menuItem}
      </div>
    ));
}

export default FooterItemMenu;
