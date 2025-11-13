import { Link } from "react-router-dom";
import type { DriverData } from "../services/f1Api";
import {
  getDriverFullName,
  getDriverImageId,
  getDriverTeamName,
} from "../services/f1Api";

interface DriverStandingsProps {
  driver: DriverData;
}

export default function DriverStandings({ driver }: DriverStandingsProps) {
  const driverId = getDriverImageId(driver).toLowerCase();
  const driverName = getDriverFullName(driver);
  const teamName = getDriverTeamName(driver);

  return (
    <Link to={`/drivers/${driverId}`}>
      <p>{driverName}</p>
      <h2>{teamName}</h2>
      <p>
        {driver.points} and {driver.wins}
      </p>
      <p>{driverId}</p>
    </Link>
  );
}
