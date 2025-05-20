function FooterItemMenu({ menuArr }) {
  console.log(menuArr);

  if (menuArr)
    return menuArr.map((menuItem) => (
      <div className="mt-2 cursor-pointer text-sm" key={menuItem}>
        {menuItem}
      </div>
    ));
}

export default FooterItemMenu;
