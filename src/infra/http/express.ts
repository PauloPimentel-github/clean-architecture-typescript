import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
import GetParkingLot from "../../core/usecase/GetParkingLot";
import ParkingLotRepositorySQL from "../repository/ParkingLotRepositorySQL";

const app = new Express();

//acoplado
/*app.get("/parkingLots/:code", async function (req, res) {
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
  const parkingLot = await getParkingLot.execute(req.params.code);
  res.json(parkingLot);
});*/

//sem acoplamento utilizando Adapter
app.get("/parkingLots/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);