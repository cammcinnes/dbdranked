const pool = require('../db');

/**
 * Inserts a new steam id and rank into the database.
 *
 * @param {bigint} sid 
 * @param {smallint} rank
 * @returns {Promise<boolean>}
 */
async function add_rank(sid, rank) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        await client.query(
            `INSERT INTO player_ranks (steamid, rank) VALUES ($1, $2)`,
            [sid, rank]
        );
        await client.query('COMMIT');
        return true;
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
}

/**
 * Deletes a steam id and rank from the database.
 *
 * @param {bigint} sid 
 * @returns {Promise<boolean>}
 */
async function delete_rank(sid) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const result = await client.query(
            `DELETE FROM player_ranks WHERE steamid = $1`,
            [sid]
        );
        await client.query('COMMIT');
        if (result.rowCount > 0) return true;
        throw new Error(`This steam id already doesn't exist in the database`);
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
}

module.exports = { add_rank, delete_rank };
