import { Database as DatabaseType } from "./database";

export type Tables<T extends keyof DatabaseType["public"]["Tables"]> =
  DatabaseType["public"]["Tables"][T]["Row"];
export type InsertTables<T extends keyof DatabaseType["public"]["Tables"]> =
  DatabaseType["public"]["Tables"][T]["Insert"];
export type UpdateTables<T extends keyof DatabaseType["public"]["Tables"]> =
  DatabaseType["public"]["Tables"][T]["Update"];

export type Profile = Tables<"profiles">;
export type CV = Tables<"cvs">;

export type Database = {
  public: {
    Tables: Record<
      string,
      {
        Row: Record<string, unknown>;
        Insert: Record<string, unknown>;
        Update: Record<string, unknown>;
      }
    >;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
