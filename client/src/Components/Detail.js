import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, CardText, CardBody, CardSubtitle, CardTitle } from "reactstrap";

export default function Detail() {
  const { id } = useParams();
  const [dataPlayer, setDataPlayer] = useState('')
  useEffect(() => {
    fetchPlayerId();
  }, []);

  const fetchPlayerId = async () => {
    const playerById = await axios
      .get(`http://localhost:5000/api/players/${id}`)
      .then(player => {
        setDataPlayer(player.data.message)
      })
      .catch(err => console.log(err));
  };
  console.log(dataPlayer);

  return (
    <div className="container my-5 w-25">
      <div className='App'>
        <Card>
          <CardBody>
            <CardTitle tag='h1'>{dataPlayer.username}</CardTitle>
            <CardSubtitle className='mb-2 text-muted' tag='h6'>
              {dataPlayer.email}
            </CardSubtitle>
            <CardText>
              Experience:<br/> 
                {dataPlayer.experience}
            </CardText>
            <CardText>
              Level: <br />
                {dataPlayer.lvl}
            </CardText>
            <Button>Delete</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
