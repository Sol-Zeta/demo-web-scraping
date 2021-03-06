const express = require('express')
const scrap = require('../utils/index')
const app = express()

module.exports = {
    getData: async (req, res) => {
        try{
            const result = await scrap()
            console.log("result en getData", result)
            res.status(200).json({
                success: true,
                data: result
            })
        } catch (err) {
            console.log(err.message)
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
}