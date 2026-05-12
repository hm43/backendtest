import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: serial("id").primaryKey(),
    first_name: text('first_name').notNull(),
    last_name: text('last_name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    last_logout: text("last_logout"),
});
