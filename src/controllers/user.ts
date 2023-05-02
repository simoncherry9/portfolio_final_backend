import { Request, Response } from 'express';

export const newUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: "New user",
        body
    })

}

export const loginUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: "Login user",
        body
    })

}