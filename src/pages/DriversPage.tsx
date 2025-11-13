import { useEffect, useState } from "react";
import { getDriverData } from "../services/f1Api";
import type { DriverData } from "../services/f1Api";

import DriverStandings from "../components/DriverStandings";

export default function DriversPage() {
  const [drivers, setDrivers] = useState<DriverData[]>([]);
  const [loading, setLoading] = useState(true);
  const season = 2025;

  useEffect(() => {
    async function fetchDrivers() {
      const data = await getDriverData(season);
      setDrivers(data || []);
      setLoading(false);
    }

    fetchDrivers();
  }, [season]);

  if (loading) return <div className="p-4">Loading drivers...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {drivers.map((driver) => (
        <DriverStandings key={driver.Driver.driverId} driver={driver} />
      ))}
    </div>
  );
}
