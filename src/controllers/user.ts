import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';

export const newUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username} })

    if (user) {
        return res.status(400).json({
            msg: "Ya existe un usuario con el nombre " + username,
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        // Guardamos el usuario en la base de datos
        await User.create({
            username: username,
            password: hashedPassword
        })
        res.json({
            msg: "Usuario " + username + " creado de manera exitosa",
        })
    } catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error al querer crear el usuario",
            error
        })
    }

}

export const loginUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: "Login user",
        body
    })

}