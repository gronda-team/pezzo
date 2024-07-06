import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.table("reports", (table) => {
        table.string("properties");
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.table("reports", (table) => {
        table.dropColumn("properties");
    });
}

