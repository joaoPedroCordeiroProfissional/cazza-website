import Image from "next/image";

const MenuItems = ({ image, description, alt }) => {
  console.log(image);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <Image src="/logo.png" alt={alt} width="300" height="300" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {description}
            <a href="#">#responsive</a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
