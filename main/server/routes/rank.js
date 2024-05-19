const express = require('express');
const rankQuery = require('../queries/rank');
const router = express.Router();


/**
 * Endpoint for adding a rank to the database
 *
 * @returns boolean - true if rank and steam id is successfully inserted into database
 */


router.post("/add", async(req, res) => {
    try {
      const { steamid, rank } = req.body;
  
      if (!steamid || !rank) {
        return res.status(400).json({
          sucess: false,
          error: "SteamID is required to share your rank with other users!"
        });
      }
  
      await rankQuery.add_rank(steamid, rank);
      return res.json({success:true});
  
    } catch (err) {
      return res.status(500).json({success: false, error: err.message});
    }
  });
  
  
/**
 * Endpoint for deleting a rank from the database
 *
 * @returns boolean - true if rank and steam id is successfully deleted into database
 */

  
  router.post("/delete", async(req, res) => {
    try {
      const {steamid, rank} = req.body;
  
      if (!steamid) {
        return res.status(400).json({
          sucess: false,
          error: "SteamID is already not in the database!"
        })
      }
  
      await rankQuery.delete_rank(steamid, rank);
      return res.json({success:true});
      
    } catch (err) {
      return res.status(500).json({success: false, error: err.message});
    }
  });
  
  module.exports = router;