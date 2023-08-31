import { useState, useEffect } from "react";
import { Card, Typography, CardContent } from "@mui/material";
import logo from "../src/assets/images/logo.svg";
import data from "../data.json";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = data.reduce((acc, el) => {
      return acc + el.amount;
    }, 0);

    setTotal(newTotal);
  };

  const percent = data.map((d) => {
    return (d.amount / total) * 100;
  });
  console.log(percent);

  const findHigherNumber = () => {
    let highest = 0;
    data.forEach((d) => {
      if (d.amount > highest) {
        highest = d.amount;
      }
    });
    return highest;
  };

  const higherNumber = findHigherNumber();

  useEffect(() => {
    calculateTotal();
  }, []);

  console.log(total);
  return (
    <>
<Card
  sx={{
    display: "flex",
    alignItems: "center",
    width: { xs: "85vw", md:"40vw", xl:"30vw" },
    height: { xs: "100px" },
    borderRadius: "15px",
    color: "white",
    backgroundColor: "hsl(10, 79%, 65%)",
    justifyContent: "space-between",
  }}
>
  <div>
    <Typography
      sx={{
        textAlign: "start",
        marginLeft: "20px",
        fontSize: "18px",
        fontFamily: "regular",
        marginTop: "4px",
      }}
    >
      My balance
    </Typography>

    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "start",
        marginLeft: "20px",
        fontSize: "30px",
        fontFamily: "bold",
        marginRight: "20px",
      }}
    >
      $921.48
    </Typography>
  </div>

  <img src={logo} style={{marginRight: "20px" }} />
</Card>


      <br></br>
      <Card
        sx={{
          width: { xs: "85vw", md:"40vw", xl:"30vw"},
          height: { xs: "430px" },
          borderRadius: "15px",
        }}
      >
        <Typography
          sx={{
            textAlign: "start",
            marginTop: "20px",
            marginLeft: "20px",
            fontFamily: "bold",
            fontSize: "26px",
          }}
        >
          Spending - Last 7 days
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "150px",
            position: "relative",
            alignItems: "flex-end",
            marginBottom: "-20px",
          }}
        >
          {data.map((d) => {
            return (
              <>
                <CardContent
                  className="graphic"
                  title={"$" + d.amount}
                  sx={{
                    width: "10px",
                    marginLeft: "10px",
                    borderRadius: "4px",
                    height: `${d.amount}%`,
                    display: "flex",
                    backgroundColor:
                      d.amount === higherNumber
                        ? " hsl(186, 34%, 60%)"
                        : "hsl(10, 79%, 65%)",
                  }}
                ></CardContent>
              </>
            );
          })}
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {data.map((data, index) => {
            return (
              <>
                <Typography
                  key={index}
                  sx={{
                    textAlign: "center",
                    marginLeft: "10px",
                    marginRight: "7px",
                    color: "grey",
                    fontFamily: "regular",
                  }}
                >
                  {data.day}{" "}
                </Typography>{" "}
              </>
            );
          })}
        </CardContent>
      
<Typography sx={{ textAlign: "start", marginLeft: "20px" }}>
  <div
    style={{
      border: "1px solid",
      width: "90%",
      marginLeft: "10px",
      marginBottom: "20px",
      color: "hsl(27, 66%, 92%)",
      borderRadius: "10px",
    }}
  />
  <Typography sx={{ color: "grey", fontFamily: "regular" }}>
    Total this month
  </Typography>
  <div style={{ position: "relative" }}>
    <Typography sx={{ fontFamily: "bold", fontSize: "30px" }}>
      $478.33
    </Typography>
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "20px",   // Alinea a la derecha
        top: "0px", // Posición debajo de "+2.4%"
        color: "black",
        fontSize: "18px",
        fontFamily: "bold",
      }}
    >
      +2.4%
    </Typography>
    <Typography
      sx={{
        position: "absolute",
        right: "20px",   // Alinea a la derecha
        top: "25px", // Posición debajo de "+2.4%"
        color: "grey",
        
        fontFamily: "regular",
      }}
    >
      from last month
    </Typography>
  </div>
</Typography>

      </Card>
    </>
  );
}

export default App;
