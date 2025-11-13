const API_URL = "https://api.jolpi.ca/ergast/f1/";

// 
export interface Constructor {
  name: string;
}

export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
}

export interface DriverData {
  Driver: Driver;
  Constructors: Constructor[];
  wins: number;
  points: number;
  position: number;
}

// get api data
export const getDriverData = async (season: number) => {
  const res = await fetch(`${API_URL}${season}/driverStandings.json`);
  if (!res.ok) throw new Error("No driver data");
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};

export const getConstructorData = async (season: number) => {
  const res = await fetch(`${API_URL}${season}/constructorStandings.json`);
  if (!res.ok) throw new Error("No constructor data");
  const data = await res.json();
  return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
};

export const getRaceResults = async (season: number) => {
  const res = await fetch(`${API_URL}${season}/results.json`);
  if (!res.ok) throw new Error("No race data");
  const data = await res.json();
  return data.MRData.RaceTable.Races;
};

// Helpers for data handling
export function getDriverFullName(driver: DriverData): string {
  return `${driver.Driver.givenName} ${driver.Driver.familyName}`;
}

export function getDriverTeamName(driver: DriverData): string {
  return driver.Constructors[0].name;
}

export function getDriverImageId(driver: DriverData): string {
  return driver.Driver.driverId;
}
