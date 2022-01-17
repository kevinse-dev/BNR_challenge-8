import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteData = async () => {
      await axios
        .delete(`http://localhost:5000/api/players/${id}`, {
          where: { id },
        })
        .then(() => {
          navigate("/");
        })
        .catch(err => console.log(err));
    };
    deleteData();
  }, []);

  return (
    <div>
      <h1>please wait...</h1>
    </div>
  );
}
