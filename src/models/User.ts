import connection from "../db";

export interface User {
  id: number;
  name: string;
  email: string;
}

export function getUsers(callback: (users: User[]) => void): void {
  const query = "SELECT * FROM users";
  connection.query(query, (err: any, rows: any) => {
    if (err) {
      console.error("Error retrieving users:", err);
      callback([]);
      return;
    }
    const users: User[] = rows;
    callback(users);
  });
}

export function getUserById(
  id: number,
  callback: (user: User | undefined) => void
): void {
  const query = "SELECT * FROM users WHERE id = ?";
  connection.query(query, [id], (err: any, rows: any) => {
    if (err) {
      console.error("Error retrieving user:", err);
      callback(undefined);
      return;
    }
    const user: User | undefined = rows[0];
    callback(user);
  });
}
