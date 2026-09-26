import Foot from "./foottext";

function Card({ item }) {
   const { imgadd, time, post, color, bg, foot } = item;
  return (
    <div className="cont col-4">

      <div className="card text-center rounded-5 overflow-hidden">

        <img
          src={imgadd}
          className="card-img-top"
          alt="error"
        />

        <div className="card-body">

          <h5 className={`card-title ${color}`}>
            {time}
          </h5>

          <h1 className="post">
            {post}
          </h1>

          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi vel mollitia quasi natus unde ab repudiandae.
          </p>
        </div>
          <div className={`foot ${bg}`}>

            {foot.map(({ num, foottext }, index) => (
              <Foot
                key={index}
                num={num}
                foottext={foottext}
              />
            ))}

          </div>
      </div>

    </div>
  );
}

export default Card;