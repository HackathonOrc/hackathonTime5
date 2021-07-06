import { Request, Response } from 'express';
import Like from '../schemas/likeSchema';

export default class likeController {
    createLike = async (req: Request, res: Response) => {
        try {
            await Like.create(req.body);
            res.status(200).json({message: 'Like efetuado com sucesso'});
        } catch (error) {
            res.status(400).json({ message: 'Não foi possível efetuar o like'});
        }
    }
    updateLike = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const like = await Like.findById(id)
            if(!like)
                res.status(400).json({message: 'Não foi possivel atualizar o usuário'});
            await Like.updateOne(req.body);
            res.status(200).json({message: 'Usuário atualizado com sucesso'});
        } catch (error) {
            res.status(400).json({message: 'Ocorreu um erro ao atualizar o loke'});
        }
    }
}