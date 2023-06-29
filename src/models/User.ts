import dbPool from "../db";
import { Request } from "mssql";

export async function getUsers(): Promise<any[]> {
  try {
    const result = await dbPool.query("SELECT * FROM users");
    return result.recordset.map(({ firstName, lastName }) => ({
      firstName,
      lastName,
    }));
  } catch (error) {
    console.error("Error retrieving users:", error);
    return [];
  }
}

export async function getUserById(id: number): Promise<any | undefined> {
  try {
    const request = new Request(dbPool);
    request.input("id", id);
    const result = await request.query("SELECT * FROM users WHERE id = @id");
    const [row] = result.recordset;
    return row
      ? { firstName: row.firstName, lastName: row.lastName }
      : undefined;
  } catch (error) {
    console.error("Error retrieving user:", error);
    return undefined;
  }
}
