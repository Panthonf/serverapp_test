import dbPool from "../db";

export interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  try {
    const query = "SELECT * FROM users";
    const result = await dbPool.query(query);
    return result.recordset.map((row: any) => ({
      id: row.id,
      name: row.name,
      email: row.email,
    }));
  } catch (error) {
    console.error("Error retrieving users:", error);
    return [];
  }
}

export async function getUserById(id: number): Promise<User | undefined> {
  try {
    const query = "SELECT * FROM users WHERE id = @id";
    const result = await dbPool.request().input("id", id).query(query);
    const row = result.recordset[0];
    return row
      ? {
          id: row.id,
          name: row.name,
          email: row.email,
        }
      : undefined;
  } catch (error) {
    console.error("Error retrieving user:", error);
    return undefined;
  }
}
