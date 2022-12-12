const db = require('../db')

class ElectricianController {
    async createElectrician(req, res){
        const {name, price, amount} = req.body
        const newElectrician = await db.query(`INSERT INTO electrician (name, price, amount) VALUES ($1, $2, $3) RETURNING *`, [name, price, amount])
        res.json(newElectrician.rows[0])

    }

    async getElectrician(req, res){
        const electrician = await db.query(`SELECT * FROM electrician`)
        res.json(electrician.rows)

    }

    async getOneElectrician(req, res){
        const id = req.params.id
        const electrician = await db.query(`SELECT * FROM electrician WHERE id=$1`, [id])
        res.json(electrician.rows[0])

    }

    async updateElectrician(req, res){
        const {id, name, price, amount} = req.body
        const electrician = await db.query(`UPDATE electrician SET name= $1, price=$2, amount=$3 WHERE id = $4 RETURNING *`, [name, price, amount, id])
        res.json(electrician.rows[0])

    }

    async deleteElectrician(req, res){
        const id = req.params.id
        const electrician = await db.query(`DELETE FROM electrician WHERE id=$1`, [id])
        res.json(electrician.rows[0])
    }
}

module.exports = new ElectricianController()