import { Request, Response } from 'express';
import Like from '../schemas/likeSchema';

export default class likeController {
    createLike = async (req: Request, res: Response) => {
        try {
            await Like.create(req.body);
            res.status(200).json({ message: 'Like efetuado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Não foi possível efetuar o Like' });
        }
    }
    getAllLikes = async (req: Request, res: Response) => {
        try {
            const likes = await Like.find();
            res.status(200).json(likes);
        }
        catch (error) {
            res.status(400).json({ message: 'Não foi possível recuperar os Likes' });
        }
    }
    getLike = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const like = await Like.findById(id);
            res.status(200).json(like);
        }
        catch (error) {
            res.status(400).json({ message: 'Não foi possível recuperar o Like' });
        }
    }
    updateLike = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const like = await Like.findById(id);
            if (!like)
                res.status(400).json({ message: 'Não foi possivel atualizar o Like' });
            await Like.updateOne(req.body);
            res.status(200).json({ message: 'Like atualizado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Ocorreu um erro ao atualizar o Like' });
        }
    }
    deleteLike = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const like = await Like.findById(id);
            if (!like)
                res.status(400).json({ message: 'Não foi possivel deletar o Like' });
            await Like.findOneAndDelete(req.body.id);
            res.status(200).json({ message: 'Like deletado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Ocorreu um erro ao deletar o Like' });
        }
    }
}