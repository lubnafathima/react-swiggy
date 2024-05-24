import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./public/swiggy.svg";

const resDatas = [
  {
    id: 1,
    name: "Spicy Villa",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/73528e2f935425966b4927a658ca986c",
    address: {
      street: "123 Curry Lane",
      city: "Flavor Town",
      state: "Taste",
      zip: "12345",
    },
    rating: 4.5,
    cuisines: ["Indian", "Spicy"],
    menu: [
      {
        id: 1,
        name: "Butter Chicken",
        description: "A rich and creamy curry made with tender chicken.",
        price: 12.99,
        category: "Main Course",
      },
      {
        id: 2,
        name: "Paneer Tikka",
        description: "Grilled paneer marinated in spices.",
        price: 9.99,
        category: "Appetizers",
      },
      {
        id: 3,
        name: "Garlic Naan",
        description: "Soft and fluffy naan with garlic and herbs.",
        price: 2.99,
        category: "Breads",
      },
    ],
    delivery: {
      time: "30-45 mins",
      fee: 2.99,
    },
    contact: {
      phone: "123-456-7890",
      email: "contact@spicyvilla.com",
    },
  },
  {
    id: 2,
    name: "Pasta Palace",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/95bd9627fb0e397c6872dc496d52ff40",
    address: {
      street: "456 Noodle Street",
      city: "Carb City",
      state: "Yum",
      zip: "67890",
    },
    rating: 4.7,
    cuisines: ["Italian", "Pasta"],
    menu: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with creamy sauce and pancetta.",
        price: 14.99,
        category: "Main Course",
      },
      {
        id: 2,
        name: "Margherita Pizza",
        description: "Pizza topped with fresh tomatoes, mozzarella, and basil.",
        price: 11.99,
        category: "Pizza",
      },
      {
        id: 3,
        name: "Tiramisu",
        description: "Traditional Italian dessert with coffee and mascarpone.",
        price: 6.99,
        category: "Desserts",
      },
    ],
    delivery: {
      time: "20-35 mins",
      fee: 1.99,
    },
    contact: {
      phone: "987-654-3210",
      email: "info@pastapalace.com",
    },
  },
  {
    id: 3,
    name: "Sushi Central",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zztduk8v35zavlwvasu8",
    address: {
      street: "789 Rice Road",
      city: "Ocean View",
      state: "Fresh",
      zip: "11223",
    },
    rating: 4.9,
    cuisines: ["Japanese", "Sushi"],
    menu: [
      {
        id: 1,
        name: "California Roll",
        description: "Sushi roll with crab, avocado, and cucumber.",
        price: 8.99,
        category: "Sushi",
      },
      {
        id: 2,
        name: "Salmon Nigiri",
        description: "Slices of fresh salmon on seasoned rice.",
        price: 10.99,
        category: "Sushi",
      },
      {
        id: 3,
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu and seaweed.",
        price: 3.99,
        category: "Soups",
      },
    ],
    delivery: {
      time: "25-40 mins",
      fee: 2.49,
    },
    contact: {
      phone: "555-123-4567",
      email: "support@sushicentral.com",
    },
  },
  {
    id: 4,
    name: "Burger Haven",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/adf40093aa552c546ba90a489eced5fd",
    address: {
      street: "321 Patty Blvd",
      city: "Burger Town",
      state: "Grill",
      zip: "33456",
    },
    rating: 4.3,
    cuisines: ["American", "Fast Food"],
    menu: [
      {
        id: 1,
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheese, lettuce, and tomato.",
        price: 9.99,
        category: "Burgers",
      },
      {
        id: 2,
        name: "Bacon Burger",
        description: "Burger with crispy bacon and cheddar cheese.",
        price: 11.99,
        category: "Burgers",
      },
      {
        id: 3,
        name: "French Fries",
        description: "Crispy golden fries.",
        price: 3.99,
        category: "Sides",
      },
    ],
    delivery: {
      time: "15-25 mins",
      fee: 1.49,
    },
    contact: {
      phone: "444-555-6666",
      email: "info@burgerhaven.com",
    },
  },
  {
    id: 5,
    name: "Taco Fiesta",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/118610bb1b497c0090177b709a452636",
    address: {
      street: "789 Salsa St",
      city: "Taco Town",
      state: "Mexicana",
      zip: "99887",
    },
    rating: 4.8,
    cuisines: ["Mexican", "Tacos"],
    menu: [
      {
        id: 1,
        name: "Beef Tacos",
        description: "Tacos with seasoned beef, lettuce, and cheese.",
        price: 8.49,
        category: "Tacos",
      },
      {
        id: 2,
        name: "Chicken Quesadilla",
        description: "Grilled tortilla with chicken and cheese.",
        price: 9.99,
        category: "Quesadillas",
      },
      {
        id: 3,
        name: "Churros",
        description: "Fried dough pastry with cinnamon sugar.",
        price: 4.99,
        category: "Desserts",
      },
    ],
    delivery: {
      time: "20-30 mins",
      fee: 1.99,
    },
    contact: {
      phone: "777-888-9999",
      email: "contact@tacofiesta.com",
    },
  },
  {
    id: 6,
    name: "Veggie Delight",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nyijndkvbvxlzytlo5e7",
    address: {
      street: "456 Green Road",
      city: "Healthy City",
      state: "Organic",
      zip: "44556",
    },
    rating: 4.6,
    cuisines: ["Vegetarian", "Healthy"],
    menu: [
      {
        id: 1,
        name: "Veggie Burger",
        description: "Plant-based patty with fresh vegetables.",
        price: 10.99,
        category: "Burgers",
      },
      {
        id: 2,
        name: "Quinoa Salad",
        description: "Salad with quinoa, veggies, and a light dressing.",
        price: 7.99,
        category: "Salads",
      },
      {
        id: 3,
        name: "Smoothie Bowl",
        description: "Fruit smoothie with granola and berries.",
        price: 8.99,
        category: "Breakfast",
      },
    ],
    delivery: {
      time: "20-35 mins",
      fee: 1.99,
    },
    contact: {
      phone: "222-333-4444",
      email: "support@veggiedelight.com",
    },
  },
  {
    id: 7,
    name: "Pizza Paradise",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ucbg7vvayxhhaqtq3bak",
    address: {
      street: "789 Cheese Ave",
      city: "Pizza City",
      state: "Cheesy",
      zip: "11234",
    },
    rating: 4.4,
    cuisines: ["Italian", "Pizza"],
    menu: [
      {
        id: 1,
        name: "Pepperoni Pizza",
        description: "Pizza topped with pepperoni and cheese.",
        price: 13.99,
        category: "Pizza",
      },
      {
        id: 2,
        name: "Veggie Pizza",
        description: "Pizza with bell peppers, onions, and mushrooms.",
        price: 12.99,
        category: "Pizza",
      },
      {
        id: 3,
        name: "Garlic Bread",
        description: "Toasted bread with garlic and herbs.",
        price: 4.99,
        category: "Sides",
      },
    ],
    delivery: {
      time: "20-30 mins",
      fee: 1.99,
    },
    contact: {
      phone: "666-777-8888",
      email: "order@pizzaparadise.com",
    },
  },
  {
    id: 8,
    name: "Thai Spice",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ae8099c1c101ba51502a1c20b4bb3e26",
    address: {
      street: "123 Noodle Ave",
      city: "Spice City",
      state: "Hot",
      zip: "22334",
    },
    rating: 4.7,
    cuisines: ["Thai", "Asian"],
    menu: [
      {
        id: 1,
        name: "Pad Thai",
        description: "Stir-fried noodles with shrimp, tofu, and peanuts.",
        price: 11.99,
        category: "Main Course",
      },
      {
        id: 2,
        name: "Green Curry",
        description: "Spicy green curry with chicken and vegetables.",
        price: 13.99,
        category: "Main Course",
      },
      {
        id: 3,
        name: "Spring Rolls",
        description: "Crispy rolls with veggies and dipping sauce.",
        price: 5.99,
        category: "Appetizers",
      },
    ],
    delivery: {
      time: "25-35 mins",
      fee: 2.49,
    },
    contact: {
      phone: "123-321-4567",
      email: "contact@thaispice.com",
    },
  },
  {
    id: 9,
    name: "BBQ Barn",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v5br16wwpqlhnqnf5ou7",
    address: {
      street: "456 Grill St",
      city: "Smoke Town",
      state: "BBQ",
      zip: "66778",
    },
    rating: 4.2,
    cuisines: ["Barbecue", "American"],
    menu: [
      {
        id: 1,
        name: "BBQ Ribs",
        description: "Slow-cooked ribs with BBQ sauce.",
        price: 19.99,
        category: "Main Course",
      },
      {
        id: 2,
        name: "Pulled Pork Sandwich",
        description: "Tender pulled pork with coleslaw.",
        price: 12.99,
        category: "Sandwiches",
      },
      {
        id: 3,
        name: "Cornbread",
        description: "Classic cornbread with a hint of sweetness.",
        price: 3.99,
        category: "Sides",
      },
    ],
    delivery: {
      time: "30-45 mins",
      fee: 3.49,
    },
    contact: {
      phone: "555-444-3333",
      email: "info@bbqbarn.com",
    },
  },
  {
    id: 10,
    name: "Dessert Dreams",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/24/2bda7e2a-f1e5-40d9-9f69-e9431078f0e5_442760.jpg",
    address: {
      street: "789 Sweet Lane",
      city: "Sugar Town",
      state: "Sweet",
      zip: "99887",
    },
    rating: 4.8,
    cuisines: ["Desserts", "Bakery"],
    menu: [
      {
        id: 1,
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake.",
        price: 6.99,
        category: "Cakes",
      },
      {
        id: 2,
        name: "Macarons",
        description: "Assorted French macarons.",
        price: 8.99,
        category: "Pastries",
      },
      {
        id: 3,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with chocolate sauce and sprinkles.",
        price: 5.99,
        category: "Ice Cream",
      },
    ],
    delivery: {
      time: "15-25 mins",
      fee: 1.99,
    },
    contact: {
      phone: "888-777-6666",
      email: "order@dessertdreams.com",
    },
  },
];

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Swiggy Logo" className="logo" />
      <nav className="nav">
        <a href="" className="nav_link">
          Home
        </a>
        <a href="" className="nav_link">
          About
        </a>
        <a href="" className="nav_link">
          Cart
        </a>
      </nav>
    </header>
  );
};

const SearchBar = () => {
  return (
    <div className="search_bar">
      <input type="text" placeholder="Search" className="" />
      <button>Search</button>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  console.log(resData.data);

  return (
    <div key={resData.id} className="res_card">
      <img src={resData.img} alt={resData.name} className="res_img" />
      <div className="res_data">
        <h2 className="res_name">{resData.name}</h2>
        <div className="res_menu">
          {resData.menu.map((item) => (
            <p className="res_item">{item.name}</p>
          ))}
        </div>
        <div className="res_more">
          <p className="res_rating">{resData.rating} Stars</p>
          <p className="res_time">{resData.delivery.time} </p>
          <p className="res_fee">$ {resData.delivery.fee}</p>
        </div>
      </div>
    </div>
  );
};

const ResContent = () => {
  return (
    <div className="res_content">
      {resDatas.map((resData) => (
        <ResCard resData={resData} key={resData.id} />
      ))}
    </div>
  );
};

const Container = () => {
  return (
    <section className="container">
      <SearchBar />
      <ResContent />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">© 2024</p>
    </footer>
  );
};

const Main = () => {
  return (
    <main className="main">
      <Header />
      <Container />
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
