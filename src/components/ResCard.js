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

export default ResCard;