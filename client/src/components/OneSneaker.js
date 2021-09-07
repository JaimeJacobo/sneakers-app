// import { useParams } from "react-router-dom";

const OneSneaker = (props) => {
  console.log(props.location.state)
  if(props.location.state){
    return (
      <div>
        <h2>One Sneaker Component</h2>
      </div>
    );
  } else {
    return <div>Under constuction</div>
  }
  // const { id } = useParams();


};

export default OneSneaker;
