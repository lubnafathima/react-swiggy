const ResCard = (props) => {
  const { resData } = props;
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

  return (
    <div key={resData?.info?.id} className="res_card">
      <img src={CDN_URL + resData?.info?.cloudinaryImageId} alt={resData?.name} className="res_img" />
      <div className="res_data">
        <h2 className="res_name">{resData?.info?.name}</h2>
        <div className="res_more">
          <p className="res_rating">{resData?.info?.avgRating} Stars</p>
          <p className="res_time">{resData?.info?.sla?.slaString} </p>
          <p className="res_fee">$ {resData?.info?.costForTwo}</p>
        </div>
        <div className="res_menu">
          {resData?.info?.cuisines.map((item) => (
            <p className="res_item" key={item}>{item}</p>
          ))}
        </div>
      </div> 
     
    </div>
  );
};

export default ResCard;